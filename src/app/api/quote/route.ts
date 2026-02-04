import { NextResponse } from 'next/server';
import { put } from '@vercel/blob';
import { QuoteFormSchema } from '@/lib/validations';
import { sendQuoteEmail } from '@/lib/email';
import { verifyRecaptcha } from '@/lib/recaptcha';
import {
  MAX_FILE_SIZE,
  ALLOWED_FILE_TYPES,
  MAX_FILES,
} from '@/lib/constants';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    // Verify reCAPTCHA token
    const recaptchaToken = formData.get('recaptchaToken') as string;
    if (recaptchaToken) {
      const captcha = await verifyRecaptcha(
        recaptchaToken,
        'quote'
      );
      if (!captcha.valid) {
        return NextResponse.json(
          { error: 'reCAPTCHA verification failed' },
          { status: 400 }
        );
      }
    }

    // Extract text fields
    const textFields = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      company: (formData.get('company') as string) || '',
      projectType: formData.get('projectType') as string,
      location: formData.get('location') as string,
      budget: formData.get('budget') as string,
      timeline: formData.get('timeline') as string,
      description: formData.get('description') as string,
    };

    // Validate text fields with Zod
    const result = QuoteFormSchema.safeParse(textFields);

    if (!result.success) {
      return NextResponse.json(
        {
          error: 'Validation failed',
          details: result.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    // Validate files
    const files = formData.getAll('files') as File[];
    const fileNames: string[] = [];

    if (files.length > MAX_FILES) {
      return NextResponse.json(
        { error: `Maximum ${MAX_FILES} files allowed` },
        { status: 400 }
      );
    }

    for (const file of files) {
      if (!(file instanceof File) || file.size === 0) continue;

      if (!ALLOWED_FILE_TYPES.includes(file.type)) {
        return NextResponse.json(
          {
            error: `Invalid file type: ${file.name}. Allowed: PDF, JPG, PNG, WebP`,
          },
          { status: 400 }
        );
      }

      if (file.size > MAX_FILE_SIZE) {
        return NextResponse.json(
          {
            error: `File too large: ${file.name}. Maximum size is 5MB`,
          },
          { status: 400 }
        );
      }

      fileNames.push(file.name);
    }

    // Upload files to Vercel Blob if token configured
    const fileLinks: { name: string; url: string }[] = [];
    if (process.env.BLOB_READ_WRITE_TOKEN) {
      for (const file of files) {
        if (!(file instanceof File) || file.size === 0) continue;
        const blob = await put(
          `quotes/${Date.now()}-${file.name}`,
          file,
          { access: 'public' }
        );
        fileLinks.push({ name: file.name, url: blob.url });
      }
    }

    await sendQuoteEmail({
      ...result.data,
      fileNames,
      fileLinks: fileLinks.length > 0 ? fileLinks : undefined,
    });

    return NextResponse.json({
      success: true,
      message: 'Quote request submitted successfully',
    });
  } catch (error) {
    console.error('Quote form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

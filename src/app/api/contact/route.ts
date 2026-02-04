import { NextResponse } from 'next/server';
import { ContactFormSchema } from '@/lib/validations';
import { sendContactEmail, sendAutoReply } from '@/lib/email';
import { verifyRecaptcha } from '@/lib/recaptcha';

const rateLimit = new Map<string, number>();
const RATE_LIMIT_WINDOW = 60_000; // 1 minute
const RATE_LIMIT_MAX = 3;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const lastRequest = rateLimit.get(ip);

  // Clean old entries periodically
  if (rateLimit.size > 1000) {
    for (const [key, time] of rateLimit) {
      if (now - time > RATE_LIMIT_WINDOW) {
        rateLimit.delete(key);
      }
    }
  }

  if (lastRequest && now - lastRequest < RATE_LIMIT_WINDOW) {
    const count = Array.from(rateLimit.entries()).filter(
      ([k, t]) => k.startsWith(ip) && now - t < RATE_LIMIT_WINDOW
    ).length;
    if (count >= RATE_LIMIT_MAX) return true;
  }

  rateLimit.set(`${ip}-${now}`, now);
  return false;
}

export async function POST(request: Request) {
  try {
    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0] ??
      'unknown';

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    const body = await request.json();

    // Verify reCAPTCHA token
    if (body.recaptchaToken) {
      const captcha = await verifyRecaptcha(
        body.recaptchaToken,
        'contact'
      );
      if (!captcha.valid) {
        return NextResponse.json(
          { error: 'reCAPTCHA verification failed' },
          { status: 400 }
        );
      }
    }

    const result = ContactFormSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          error: 'Validation failed',
          details: result.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    await sendContactEmail(result.data);
    await sendAutoReply(result.data.email, result.data.name);

    return NextResponse.json({
      success: true,
      message: 'Message sent successfully',
    });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

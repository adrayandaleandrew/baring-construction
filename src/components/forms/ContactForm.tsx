'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CheckCircle, AlertCircle } from 'lucide-react';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { Textarea } from '@/components/ui/Textarea';
import { Button } from '@/components/ui/Button';
import {
  ContactFormSchema,
  type ContactFormData,
} from '@/lib/validations';
import { PROJECT_TYPES } from '@/lib/constants';
import { getRecaptchaToken } from '@/lib/recaptcha-client';
import { event as gaEvent } from '@/lib/analytics';

type FormStatus = 'idle' | 'success' | 'error';

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      projectType: undefined,
      message: '',
    },
  });

  async function onSubmit(data: ContactFormData) {
    setStatus('idle');
    try {
      const recaptchaToken = await getRecaptchaToken('contact');

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, recaptchaToken }),
      });

      if (!res.ok) throw new Error('Failed to send message');

      gaEvent({
        action: 'contact_form_submitted',
        category: 'engagement',
        label: data.projectType,
      });

      setStatus('success');
      reset();
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-xl border border-green-200 bg-green-50 p-8 text-center">
        <CheckCircle className="mx-auto h-12 w-12 text-green-500" />
        <h3 className="mt-4 font-heading text-xl font-semibold text-gray-900">
          Message Sent!
        </h3>
        <p className="mt-2 text-sm text-gray-600">
          Thank you for reaching out. We&apos;ll get back to you
          within 1-2 business days.
        </p>
        <Button
          variant="outline"
          className="mt-6"
          onClick={() => setStatus('idle')}
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="space-y-5"
    >
      {status === 'error' && (
        <div
          className="flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
          role="alert"
        >
          <AlertCircle className="h-4 w-4 shrink-0" />
          Something went wrong. Please try again.
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <Input
          label="Full Name"
          id="contact-name"
          placeholder="Juan Dela Cruz"
          required
          error={errors.name?.message}
          {...register('name')}
        />
        <Input
          label="Email Address"
          id="contact-email"
          type="email"
          placeholder="juan@example.com"
          required
          error={errors.email?.message}
          {...register('email')}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Input
          label="Phone Number"
          id="contact-phone"
          type="tel"
          placeholder="+63 XXX XXX XXXX"
          required
          error={errors.phone?.message}
          {...register('phone')}
        />
        <Select
          label="Project Type"
          id="contact-project-type"
          options={PROJECT_TYPES}
          required
          error={errors.projectType?.message}
          {...register('projectType')}
        />
      </div>

      <Textarea
        label="Message"
        id="contact-message"
        placeholder="Tell us about your project or inquiry..."
        rows={5}
        required
        error={errors.message?.message}
        {...register('message')}
      />

      <Button
        type="submit"
        loading={isSubmitting}
        fullWidth
        size="lg"
      >
        Send Message
      </Button>
    </form>
  );
}

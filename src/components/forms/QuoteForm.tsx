'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CheckCircle, AlertCircle } from 'lucide-react';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { Textarea } from '@/components/ui/Textarea';
import { Button } from '@/components/ui/Button';
import { FileUpload } from '@/components/forms/FileUpload';
import {
  QuoteFormSchema,
  type QuoteFormData,
} from '@/lib/validations';
import {
  PROJECT_TYPES,
  BUDGET_RANGES,
  TIMELINE_OPTIONS,
} from '@/lib/constants';
import { getRecaptchaToken } from '@/lib/recaptcha-client';
import { event as gaEvent } from '@/lib/analytics';

type FormStatus = 'idle' | 'success' | 'error';

export function QuoteForm() {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [files, setFiles] = useState<File[]>([]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<QuoteFormData>({
    resolver: zodResolver(QuoteFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      company: '',
      projectType: undefined,
      location: '',
      budget: undefined,
      timeline: undefined,
      description: '',
    },
  });

  async function onSubmit(data: QuoteFormData) {
    setStatus('idle');
    try {
      const recaptchaToken = await getRecaptchaToken('quote');

      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        if (value !== undefined && value !== '') {
          formData.append(key, value);
        }
      });
      if (recaptchaToken) {
        formData.append('recaptchaToken', recaptchaToken);
      }
      files.forEach((file) => formData.append('files', file));

      const res = await fetch('/api/quote', {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) throw new Error('Failed to submit quote');

      gaEvent({
        action: 'quote_request_submitted',
        category: 'conversion',
        label: data.projectType,
      });

      setStatus('success');
      reset();
      setFiles([]);
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-xl border border-green-200 bg-green-50 p-8 text-center">
        <CheckCircle className="mx-auto h-12 w-12 text-green-500" />
        <h3 className="mt-4 font-heading text-xl font-semibold text-gray-900">
          Quote Request Submitted!
        </h3>
        <p className="mt-2 text-sm text-gray-600">
          Thank you for your request. Our team will review your
          project details and get back to you within 1-2
          business days.
        </p>
        <Button
          variant="outline"
          className="mt-6"
          onClick={() => setStatus('idle')}
        >
          Submit Another Request
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="space-y-8"
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

      {/* Personal Information */}
      <div>
        <h3 className="font-heading text-lg font-semibold text-gray-900">
          Personal Information
        </h3>
        <div className="mt-4 space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <Input
              label="Full Name"
              id="quote-name"
              placeholder="Juan Dela Cruz"
              required
              error={errors.name?.message}
              {...register('name')}
            />
            <Input
              label="Email Address"
              id="quote-email"
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
              id="quote-phone"
              type="tel"
              placeholder="+63 XXX XXX XXXX"
              required
              error={errors.phone?.message}
              {...register('phone')}
            />
            <Input
              label="Company"
              id="quote-company"
              placeholder="Company name (optional)"
              error={errors.company?.message}
              {...register('company')}
            />
          </div>
        </div>
      </div>

      {/* Project Details */}
      <div>
        <h3 className="font-heading text-lg font-semibold text-gray-900">
          Project Details
        </h3>
        <div className="mt-4 space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <Select
              label="Project Type"
              id="quote-project-type"
              options={PROJECT_TYPES}
              required
              error={errors.projectType?.message}
              {...register('projectType')}
            />
            <Input
              label="Project Location"
              id="quote-location"
              placeholder="e.g. Makati City"
              required
              error={errors.location?.message}
              {...register('location')}
            />
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <Select
              label="Estimated Budget"
              id="quote-budget"
              options={BUDGET_RANGES}
              required
              error={errors.budget?.message}
              {...register('budget')}
            />
            <Select
              label="Preferred Timeline"
              id="quote-timeline"
              options={TIMELINE_OPTIONS}
              required
              error={errors.timeline?.message}
              {...register('timeline')}
            />
          </div>
          <Textarea
            label="Project Description"
            id="quote-description"
            placeholder="Describe your project in detail: what you want to build, special requirements, site conditions, etc."
            rows={6}
            required
            helpText="Minimum 50 characters"
            error={errors.description?.message}
            {...register('description')}
          />
        </div>
      </div>

      {/* Attachments */}
      <div>
        <h3 className="font-heading text-lg font-semibold text-gray-900">
          Attachments
        </h3>
        <div className="mt-4">
          <FileUpload files={files} onFilesChange={setFiles} />
        </div>
      </div>

      <Button
        type="submit"
        loading={isSubmitting}
        fullWidth
        size="lg"
      >
        Submit Quote Request
      </Button>
    </form>
  );
}

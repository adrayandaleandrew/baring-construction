import type { Metadata } from 'next';
import {
  FileText,
  Search,
  Calculator,
  ArrowRight,
} from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { QuoteForm } from '@/components/forms/QuoteForm';

export const metadata: Metadata = {
  title: 'Request a Quote | Baring Construction Services',
  description:
    'Get a free, detailed quotation for your construction project. Submit your requirements and our team will respond within 1-2 business days.',
};

const STEPS = [
  {
    icon: FileText,
    title: 'Submit Your Details',
    description:
      'Fill out the form with your project requirements, budget, and timeline.',
  },
  {
    icon: Search,
    title: 'We Review & Assess',
    description:
      'Our team reviews your request and may schedule a site visit for accurate assessment.',
  },
  {
    icon: Calculator,
    title: 'Receive Your Quote',
    description:
      'Get a detailed, itemized quotation with transparent pricing and project timeline.',
  },
];

export default function QuotePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gray-900 py-20 sm:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-baring-blue-900/90 to-gray-900/95" />
        <Container className="relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl">
              Request a{' '}
              <span className="text-baring-gold-400">
                Free Quote
              </span>
            </h1>
            <p className="mt-6 text-lg text-gray-300">
              Tell us about your project and get a detailed,
              no-obligation quotation from our team.
            </p>
          </div>
        </Container>
      </section>

      {/* Form + Steps */}
      <section className="py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="font-heading text-2xl font-bold text-gray-900">
                Project Information
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Provide as much detail as possible for an
                accurate quote.
              </p>
              <div className="mt-6">
                <QuoteForm />
              </div>
            </div>

            {/* What Happens Next */}
            <div className="lg:col-span-2">
              <div className="rounded-xl bg-gray-50 p-6 lg:sticky lg:top-24">
                <h3 className="font-heading text-lg font-semibold text-gray-900">
                  What Happens Next?
                </h3>
                <div className="mt-6 space-y-6">
                  {STEPS.map((step, i) => {
                    const Icon = step.icon;
                    return (
                      <div
                        key={step.title}
                        className="flex gap-4"
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-baring-blue-500 text-sm font-bold text-white">
                          {i + 1}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <Icon className="h-4 w-4 text-baring-blue-500" />
                            <h4 className="font-heading text-sm font-semibold text-gray-900">
                              {step.title}
                            </h4>
                          </div>
                          <p className="mt-1 text-sm text-gray-600">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <hr className="my-6 border-gray-200" />

                <p className="text-sm text-gray-600">
                  Prefer to talk directly? Contact us for an
                  immediate consultation.
                </p>
                <Button
                  href="/contact"
                  variant="outline"
                  className="mt-4"
                  fullWidth
                >
                  Contact Us
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-baring-blue-500 py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
              Not Sure What You Need?
            </h2>
            <p className="mt-4 text-lg text-baring-blue-100">
              Explore our services to learn more about what we
              offer, or contact us for a free consultation.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button
                href="/services"
                variant="secondary"
                size="lg"
              >
                Our Services
              </Button>
              <Button
                href="/contact"
                variant="white"
                size="lg"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

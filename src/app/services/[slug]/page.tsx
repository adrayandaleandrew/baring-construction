import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  Home,
  Zap,
  Building2,
  PenTool,
  Settings,
  Sparkles,
  ArrowRight,
  CheckCircle,
  ChevronRight,
} from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Card, CardBody } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Accordion } from '@/components/ui/Accordion';
import { ProcessSteps } from '@/components/sections/ProcessSteps';
import { SERVICES } from '@/data/services';
import type { IconMap } from '@/types';

const ICON_MAP: IconMap = { Home, Zap, Building2, PenTool, Settings, Sparkles };

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return {};

  return {
    title: service.metadata.metaTitle,
    description: service.metadata.metaDescription,
    keywords: service.metadata.keywords.join(', '),
    openGraph: {
      title: service.metadata.metaTitle,
      description: service.metadata.metaDescription,
    },
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) notFound();

  const Icon = ICON_MAP[service.icon] || Building2;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gray-900 py-20 sm:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-baring-blue-900/90 to-gray-900/95" />
        <Container className="relative z-10">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-400">
              <li>
                <Link
                  href="/"
                  className="transition-colors hover:text-white"
                >
                  Home
                </Link>
              </li>
              <li>
                <ChevronRight className="h-4 w-4" aria-hidden />
              </li>
              <li>
                <Link
                  href="/services"
                  className="transition-colors hover:text-white"
                >
                  Services
                </Link>
              </li>
              <li>
                <ChevronRight className="h-4 w-4" aria-hidden />
              </li>
              <li className="text-baring-gold-400">{service.title}</li>
            </ol>
          </nav>

          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-baring-gold-500/20">
              <Icon className="h-8 w-8 text-baring-gold-400" />
            </div>
            <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl">
              {service.title}
            </h1>
            <p className="mt-6 text-lg text-gray-300">
              {service.overview}
            </p>
            <div className="mt-8">
              <Button href="/quote" size="lg">
                Request a Quote
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Sub-Services */}
      <section className="bg-gray-50 py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-bold text-gray-900 sm:text-4xl">
              What We Offer
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Detailed breakdown of our{' '}
              {service.title.toLowerCase()} capabilities.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-4xl gap-8 sm:grid-cols-2">
            {service.subServices.map((sub) => (
              <Card key={sub.title}>
                <CardBody className="p-6">
                  <h3 className="font-heading text-xl font-semibold text-gray-900">
                    {sub.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    {sub.description}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {sub.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2"
                      >
                        <CheckCircle className="h-4 w-4 shrink-0 text-baring-blue-500" />
                        <span className="text-sm text-gray-700">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardBody>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      {service.faqs.length > 0 && (
        <section className="py-16 sm:py-20 lg:py-24">
          <Container>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-heading text-3xl font-bold text-gray-900 sm:text-4xl">
                Frequently Asked Questions
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Common questions about our{' '}
                {service.title.toLowerCase()}.
              </p>
            </div>

            <div className="mx-auto mt-12 max-w-3xl">
              <Accordion items={service.faqs} />
            </div>
          </Container>
        </section>
      )}

      {/* Process */}
      <ProcessSteps />

      {/* CTA */}
      <section className="bg-baring-blue-500 py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
              Need {service.title}?
            </h2>
            <p className="mt-4 text-lg text-baring-blue-100">
              Get a free consultation and detailed quotation for your{' '}
              {service.title.toLowerCase()} project.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button href="/quote" variant="secondary" size="lg">
                Request Free Quote
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button href="/contact" variant="white" size="lg">
                Contact Us
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

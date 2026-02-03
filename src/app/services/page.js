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
} from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Card, CardBody } from '@/components/ui/Card';
import { ProcessSteps } from '@/components/sections/ProcessSteps';
import { CallToAction } from '@/components/sections/CallToAction';
import { SERVICES } from '@/data/services';

export const metadata = {
  title: 'Our Services | Baring Construction Services',
  description:
    'Explore our comprehensive construction services including general construction, electrical works, civil & structural, architectural, MEPF, and specialized services across Metro Manila.',
};

const ICON_MAP = {
  Home,
  Zap,
  Building2,
  PenTool,
  Settings,
  Sparkles,
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gray-900 py-20 sm:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-baring-blue-900/90 to-gray-900/95" />
        <Container className="relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl">
              Comprehensive{' '}
              <span className="text-baring-gold-400">
                Construction Solutions
              </span>
            </h1>
            <p className="mt-6 text-lg text-gray-300">
              From foundation to finishing, we deliver a full range of
              construction services for residential, commercial, and
              industrial projects.
            </p>
          </div>
        </Container>
      </section>

      {/* Expanded Services Grid */}
      <section className="py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-bold text-gray-900 sm:text-4xl">
              What We Do
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Every project is backed by licensed professionals and a
              commitment to quality that lasts.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => {
              const Icon = ICON_MAP[service.icon] || Building2;

              return (
                <Card key={service.id} hover>
                  <CardBody className="flex h-full flex-col p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-baring-blue-50">
                      <Icon className="h-6 w-6 text-baring-blue-500" />
                    </div>

                    <h3 className="mt-4 font-heading text-xl font-semibold text-gray-900">
                      {service.title}
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-gray-600">
                      {service.overview}
                    </p>

                    {/* Sub-service names */}
                    <ul className="mt-4 space-y-2">
                      {service.subServices.map((sub) => (
                        <li
                          key={sub.title}
                          className="flex items-center gap-2"
                        >
                          <CheckCircle className="h-4 w-4 shrink-0 text-baring-blue-500" />
                          <span className="text-xs font-medium text-gray-700">
                            {sub.title}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={`/services/${service.slug}`}
                      className="mt-auto inline-flex items-center gap-1 pt-4 text-sm font-semibold text-baring-blue-500 transition-colors hover:text-baring-blue-600"
                    >
                      Learn More
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </CardBody>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Process */}
      <ProcessSteps />

      {/* CTA */}
      <CallToAction />
    </>
  );
}

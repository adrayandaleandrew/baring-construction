import Link from 'next/link';
import {
  Home,
  Zap,
  Building2,
  PenTool,
  Settings,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Card, CardBody } from '@/components/ui/Card';
import { SERVICES } from '@/data/services';

const ICON_MAP = {
  Home,
  Zap,
  Building2,
  PenTool,
  Settings,
  Sparkles,
};

export function ServicesGrid() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <Container>
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Comprehensive construction solutions for every need — from
            foundation to finishing.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => {
            const Icon = ICON_MAP[service.icon] || Building2;

            return (
              <Card key={service.id} hover>
                <CardBody>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-baring-blue-50">
                    <Icon className="h-6 w-6 text-baring-blue-500" />
                  </div>

                  <h3 className="mt-4 font-heading text-lg font-semibold text-gray-900">
                    {service.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    {service.overview}
                  </p>

                  <Link
                    href={`/services/${service.slug}`}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-baring-blue-500 transition-colors hover:text-baring-blue-600"
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
  );
}

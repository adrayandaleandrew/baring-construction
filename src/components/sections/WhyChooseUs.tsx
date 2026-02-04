import type { LucideIcon } from 'lucide-react';
import { ShieldCheck, Globe, Users, Wrench } from 'lucide-react';
import { Container } from '@/components/layout/Container';

interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

const BENEFITS: Benefit[] = [
  {
    icon: ShieldCheck,
    title: 'Premium Quality',
    description:
      'We never compromise on materials or workmanship. Every project meets the highest standards of construction quality and building code compliance.',
  },
  {
    icon: Globe,
    title: 'Multi-Regional Service',
    description:
      'Serving Metro Manila, Rizal, and Pampanga with the same level of dedication and professionalism regardless of location.',
  },
  {
    icon: Users,
    title: 'Experienced Team',
    description:
      'Our licensed engineers, architects, and skilled workers bring years of expertise to every residential, commercial, and industrial project.',
  },
  {
    icon: Wrench,
    title: 'Complete Solutions',
    description:
      'From general construction to electrical, MEPF, and specialized services — we handle every aspect of your project under one roof.',
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <Container>
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold text-gray-900 sm:text-4xl">
            Why Choose Baring Construction
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Trusted by property owners, businesses, and developers across three
            regions.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((benefit) => (
            <div key={benefit.title} className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-baring-gold-50">
                <benefit.icon className="h-7 w-7 text-baring-gold-600" />
              </div>
              <h3 className="mt-4 font-heading text-lg font-semibold text-gray-900">
                {benefit.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

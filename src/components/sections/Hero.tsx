import type { LucideIcon } from 'lucide-react';
import { Building2, MapPin, Award } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/layout/Container';

interface TrustBadge {
  icon: LucideIcon;
  label: string;
  description: string;
}

const TRUST_BADGES: TrustBadge[] = [
  { icon: Building2, label: '50+ Projects', description: 'Completed' },
  { icon: MapPin, label: '3 Regions', description: 'Served' },
  { icon: Award, label: '100%', description: 'Satisfaction' },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gray-900 py-20 sm:py-28 lg:py-36">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-baring-blue-900/90 to-gray-900/95" />

      <Container className="relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Building Excellence Across{' '}
            <span className="text-baring-gold-400">Metro Manila</span> & Beyond
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-gray-300 sm:text-xl">
            Premium construction services from residential homes to commercial
            facilities. Quality craftsmanship, on-time delivery, and complete
            project solutions.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button href="/quote" size="lg">
              Request Free Quote
            </Button>
            <Button href="/projects" variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              View Our Projects
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="mt-14 flex flex-col items-center gap-6 sm:flex-row sm:justify-center sm:gap-10">
            {TRUST_BADGES.map((badge) => (
              <div
                key={badge.label}
                className="flex items-center gap-3 text-white"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-baring-gold-500/20">
                  <badge.icon className="h-6 w-6 text-baring-gold-400" />
                </div>
                <div className="text-left">
                  <p className="text-lg font-bold">{badge.label}</p>
                  <p className="text-sm text-gray-400">{badge.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

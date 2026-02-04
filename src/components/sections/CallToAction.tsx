import { Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/layout/Container';
import { CONTACT_INFO } from '@/lib/constants';

export function CallToAction() {
  return (
    <section className="bg-baring-blue-500 py-16 sm:py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
            Ready to Start Your Project?
          </h2>
          <p className="mt-4 text-lg text-baring-blue-100">
            Get a free consultation and detailed quotation. Our team is ready to
            bring your vision to life.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button href="/quote" variant="secondary" size="lg">
              Request Free Quote
            </Button>
            <Button href="/contact" variant="white" size="lg">
              Contact Us
            </Button>
          </div>

          {/* Contact Info */}
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-8">
            {CONTACT_INFO.phone && (
              <a
                href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-2 text-sm text-baring-blue-100 transition-colors hover:text-white"
              >
                <Phone className="h-4 w-4" />
                {CONTACT_INFO.phone}
              </a>
            )}
            {CONTACT_INFO.email && (
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="flex items-center gap-2 text-sm text-baring-blue-100 transition-colors hover:text-white"
              >
                <Mail className="h-4 w-4" />
                {CONTACT_INFO.email}
              </a>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}

import type { Metadata } from 'next';
import {
  Phone,
  Mail,
  Clock,
  MapPin,
  Facebook,
} from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Card, CardBody } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { ContactForm } from '@/components/forms/ContactForm';
import {
  CONTACT_INFO,
  SERVICE_AREAS,
} from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Contact Us | Baring Construction Services',
  description:
    'Get in touch with Baring Construction Services. Call, email, or send us a message. Serving Batangas, Laguna, and Cavite.',
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gray-900 py-20 sm:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-baring-blue-900/90 to-gray-900/95" />
        <Container className="relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl">
              Get in{' '}
              <span className="text-baring-gold-400">Touch</span>
            </h1>
            <p className="mt-6 text-lg text-gray-300">
              Have a question or ready to start your project?
              Reach out and our team will respond within 1-2
              business days.
            </p>
          </div>
        </Container>
      </section>

      {/* Form + Contact Info */}
      <section className="py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="font-heading text-2xl font-bold text-gray-900">
                Send Us a Message
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Fill out the form below and we&apos;ll get back
                to you.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4 lg:col-span-2">
              <Card>
                <CardBody className="flex items-start gap-4 p-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-baring-blue-50">
                    <Phone className="h-5 w-5 text-baring-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-heading text-sm font-semibold text-gray-900">
                      Phone
                    </h3>
                    <a
                      href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`}
                      className="mt-1 block text-sm text-gray-600 transition-colors hover:text-baring-blue-500"
                    >
                      {CONTACT_INFO.phone}
                    </a>
                  </div>
                </CardBody>
              </Card>

              <Card>
                <CardBody className="flex items-start gap-4 p-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-baring-blue-50">
                    <Mail className="h-5 w-5 text-baring-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-heading text-sm font-semibold text-gray-900">
                      Email
                    </h3>
                    <a
                      href={`mailto:${CONTACT_INFO.email}`}
                      className="mt-1 block text-sm text-gray-600 transition-colors hover:text-baring-blue-500"
                    >
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </CardBody>
              </Card>

              <Card>
                <CardBody className="flex items-start gap-4 p-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-baring-gold-50">
                    <Clock className="h-5 w-5 text-baring-gold-600" />
                  </div>
                  <div>
                    <h3 className="font-heading text-sm font-semibold text-gray-900">
                      Business Hours
                    </h3>
                    <p className="mt-1 text-sm text-gray-600">
                      {CONTACT_INFO.businessHours}
                    </p>
                  </div>
                </CardBody>
              </Card>

              {CONTACT_INFO.address && (
                <Card>
                  <CardBody className="flex items-start gap-4 p-5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-baring-blue-50">
                      <MapPin className="h-5 w-5 text-baring-blue-500" />
                    </div>
                    <div>
                      <h3 className="font-heading text-sm font-semibold text-gray-900">
                        Address
                      </h3>
                      <p className="mt-1 text-sm text-gray-600">
                        {CONTACT_INFO.address}
                      </p>
                    </div>
                  </CardBody>
                </Card>
              )}

              {CONTACT_INFO.facebook && (
                <Card>
                  <CardBody className="flex items-start gap-4 p-5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-baring-blue-50">
                      <Facebook className="h-5 w-5 text-baring-blue-500" />
                    </div>
                    <div>
                      <h3 className="font-heading text-sm font-semibold text-gray-900">
                        Facebook
                      </h3>
                      <a
                        href={CONTACT_INFO.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 block text-sm text-gray-600 transition-colors hover:text-baring-blue-500"
                      >
                        Visit our Facebook page
                      </a>
                    </div>
                  </CardBody>
                </Card>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* Service Areas */}
      <section className="bg-gray-50 py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-bold text-gray-900 sm:text-4xl">
              Our Service Areas
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We serve projects across these regions.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {SERVICE_AREAS.map((area) => (
              <Card key={area.region}>
                <CardBody className="p-6 text-center">
                  <MapPin className="mx-auto h-8 w-8 text-baring-blue-500" />
                  <h3 className="mt-3 font-heading text-lg font-semibold text-gray-900">
                    {area.region}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    {area.cities.join(', ')}
                  </p>
                </CardBody>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-baring-blue-500 py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
              Ready for a Detailed Quote?
            </h2>
            <p className="mt-4 text-lg text-baring-blue-100">
              For project-specific pricing, submit a detailed
              quote request with your project requirements.
            </p>
            <div className="mt-8">
              <Button href="/quote" variant="secondary" size="lg">
                Request Free Quote
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

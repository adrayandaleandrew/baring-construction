import {
  ShieldCheck,
  Heart,
  Clock,
  Users,
  MapPin,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { Card, CardBody } from '@/components/ui/Card';
import { SERVICE_AREAS } from '@/lib/constants';

export const metadata = {
  title: 'About Baring Construction Services | Our Story & Mission',
  description:
    'Learn about Baring Construction Services — our mission, values, and commitment to delivering exceptional construction projects across Metro Manila, Rizal, and Pampanga.',
};

const VALUES = [
  {
    icon: ShieldCheck,
    title: 'Quality First',
    description:
      'We never cut corners. Every material, technique, and finish meets the highest standards of construction quality.',
  },
  {
    icon: Heart,
    title: 'Integrity',
    description:
      'Transparent pricing, honest timelines, and open communication throughout every project — no surprises.',
  },
  {
    icon: Clock,
    title: 'Timeliness',
    description:
      'We respect your schedule. Our projects are planned meticulously and delivered on time, every time.',
  },
  {
    icon: Users,
    title: 'Client Focus',
    description:
      'Your vision drives our work. We listen, adapt, and deliver construction that exceeds expectations.',
  },
];

const CAPABILITIES = [
  'New Construction (Residential & Commercial)',
  'Building Renovation & Fit-out',
  'Electrical Systems & Installation',
  'Civil & Structural Engineering Works',
  'MEPF (Mechanical, Electrical, Plumbing, Fire Protection)',
  'Architectural Design & Finishing',
  'Steel Fabrication & Installation',
  'Swimming Pool & Landscaping',
  'Industrial Facility Construction',
  'Project Management & Consultation',
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gray-900 py-20 sm:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-baring-blue-900/90 to-gray-900/95" />
        <Container className="relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl">
              Building Your Vision with{' '}
              <span className="text-baring-gold-400">Excellence</span>
            </h1>
            <p className="mt-6 text-lg text-gray-300">
              Professional construction services across Metro Manila and beyond.
              From concept to completion, we deliver quality that lasts.
            </p>
          </div>
        </Container>
      </section>

      {/* Company Story */}
      <section className="py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="font-heading text-3xl font-bold text-gray-900 sm:text-4xl">
              Our Story
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-gray-600">
              <p>
                Baring Construction Services was founded with a simple mission:
                to deliver premium construction quality that Filipino families
                and businesses can trust. What started as a dedicated team
                serving local communities has grown into a multi-regional
                construction company operating across Metro Manila, Rizal, and
                Pampanga.
              </p>
              <p>
                Over the years, we have completed over 50 projects ranging from
                residential homes and commercial fit-outs to large-scale
                electrical installations and industrial facilities. Each project
                reflects our commitment to craftsmanship, safety, and client
                satisfaction.
              </p>
              <p>
                Today, our experienced team of licensed engineers, architects,
                and skilled tradespeople continues to raise the bar — delivering
                construction solutions that are on time, on budget, and built to
                the highest standards.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Mission & Values */}
      <section className="bg-gray-50 py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-bold text-gray-900 sm:text-4xl">
              Our Mission & Values
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              To provide exceptional construction services that transform visions
              into lasting structures, built with integrity and delivered with
              excellence.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((value) => (
              <div key={value.title} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-baring-blue-50">
                  <value.icon className="h-7 w-7 text-baring-blue-500" />
                </div>
                <h3 className="mt-4 font-heading text-lg font-semibold text-gray-900">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Capabilities */}
      <section className="py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-bold text-gray-900 sm:text-4xl">
              Our Capabilities
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              A full range of construction services under one roof — from design
              consultation to project handover.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-3xl gap-3 sm:grid-cols-2">
            {CAPABILITIES.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-lg bg-gray-50 px-4 py-3"
              >
                <CheckCircle className="h-5 w-5 shrink-0 text-baring-blue-500" />
                <span className="text-sm font-medium text-gray-700">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Service Areas */}
      <section className="bg-gray-50 py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-bold text-gray-900 sm:text-4xl">
              Where We Serve
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Delivering quality construction across three key regions in Luzon.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-3">
            {SERVICE_AREAS.map((area) => (
              <Card key={area.region}>
                <CardBody>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-baring-gold-500" />
                    <h3 className="font-heading text-lg font-semibold text-gray-900">
                      {area.region}
                    </h3>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {area.cities.map((city) => (
                      <li
                        key={city}
                        className="text-sm text-gray-600"
                      >
                        {city}
                      </li>
                    ))}
                  </ul>
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
              Let&apos;s Work Together
            </h2>
            <p className="mt-4 text-lg text-baring-blue-100">
              Have a project in mind? Get a free consultation and detailed
              quotation from our team.
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

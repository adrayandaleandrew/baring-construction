import type { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { SITE_CONFIG, CONTACT_INFO } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Privacy Policy | Baring Construction Services',
  description:
    'Privacy policy for Baring Construction Services. Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gray-900 py-16 sm:py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-baring-blue-900/90 to-gray-900/95" />
        <Container className="relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl">
              Privacy Policy
            </h1>
            <p className="mt-4 text-gray-300">
              Last updated: January 2025
            </p>
          </div>
        </Container>
      </section>

      {/* Content */}
      <section className="py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="prose prose-gray mx-auto max-w-3xl">
            <h2 className="font-heading text-2xl font-bold text-gray-900">
              Introduction
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {SITE_CONFIG.name} (&quot;we,&quot;
              &quot;our,&quot; or &quot;us&quot;) is committed to
              protecting your privacy. This Privacy Policy
              explains how we collect, use, and safeguard your
              personal information when you visit our website or
              use our services.
            </p>

            <h2 className="mt-10 font-heading text-2xl font-bold text-gray-900">
              Information We Collect
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We collect information that you provide directly to
              us through our contact and quote request forms,
              including:
            </p>
            <ul className="list-disc space-y-2 pl-6 text-gray-600">
              <li>Name and contact information (email, phone number)</li>
              <li>Company name (if applicable)</li>
              <li>Project details (type, location, budget, timeline)</li>
              <li>Messages and correspondence</li>
              <li>Files you upload (project plans, photos)</li>
            </ul>
            <p className="text-gray-600 leading-relaxed">
              We also automatically collect certain information
              when you visit our website, such as your IP address,
              browser type, and pages visited, through analytics
              tools.
            </p>

            <h2 className="mt-10 font-heading text-2xl font-bold text-gray-900">
              How We Use Your Information
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We use the information we collect to:
            </p>
            <ul className="list-disc space-y-2 pl-6 text-gray-600">
              <li>Respond to your inquiries and quote requests</li>
              <li>Provide construction services and project updates</li>
              <li>Communicate about our services and promotions</li>
              <li>Improve our website and user experience</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="mt-10 font-heading text-2xl font-bold text-gray-900">
              Data Security
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We implement appropriate technical and
              organizational measures to protect your personal
              information against unauthorized access, alteration,
              disclosure, or destruction. However, no method of
              transmission over the Internet is 100% secure.
            </p>

            <h2 className="mt-10 font-heading text-2xl font-bold text-gray-900">
              Third-Party Services
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We may use third-party services for email delivery,
              analytics, and hosting. These services have their
              own privacy policies governing the use of your
              information.
            </p>

            <h2 className="mt-10 font-heading text-2xl font-bold text-gray-900">
              Your Rights
            </h2>
            <p className="text-gray-600 leading-relaxed">
              You have the right to access, correct, or delete
              your personal information. To exercise these rights,
              contact us using the information below.
            </p>

            <h2 className="mt-10 font-heading text-2xl font-bold text-gray-900">
              Contact Us
            </h2>
            <p className="text-gray-600 leading-relaxed">
              If you have questions about this Privacy Policy or
              our data practices, please contact us at:
            </p>
            <ul className="list-none space-y-1 pl-0 text-gray-600">
              <li>
                Email:{' '}
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-baring-blue-500 hover:text-baring-blue-600"
                >
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li>Phone: {CONTACT_INFO.phone}</li>
            </ul>

            <h2 className="mt-10 font-heading text-2xl font-bold text-gray-900">
              Updates to This Policy
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We may update this Privacy Policy from time to time.
              Changes will be posted on this page with an updated
              revision date. We encourage you to review this
              policy periodically.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}

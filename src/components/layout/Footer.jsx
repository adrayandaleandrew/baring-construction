import Link from 'next/link';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';
import { SITE_CONFIG, CONTACT_INFO, SERVICE_AREAS } from '@/lib/constants';
import { FOOTER_LINKS } from '@/data/navigation';
import { Container } from '@/components/layout/Container';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300" role="contentinfo">
      <Container>
        {/* Main Footer */}
        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Company Info */}
          <div>
            <Link
              href="/"
              className="font-heading text-xl font-bold text-white"
            >
              {SITE_CONFIG.shortName}
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-gray-400">
              {SITE_CONFIG.description}
            </p>
            <div className="mt-4 flex gap-3">
              <span className="text-xs font-semibold text-baring-gold-500">
                Serving:{' '}
                {SERVICE_AREAS.map((a) => a.region).join(' • ')}
              </span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h3>
            <ul className="mt-4 space-y-2.5">
              {FOOTER_LINKS.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </h3>
            <ul className="mt-4 space-y-2.5">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-white">
              Contact Us
            </h3>
            <ul className="mt-4 space-y-3">
              {CONTACT_INFO.phone && (
                <li>
                  <a
                    href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`}
                    className="flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    <Phone className="h-4 w-4 shrink-0" />
                    {CONTACT_INFO.phone}
                  </a>
                </li>
              )}
              {CONTACT_INFO.email && (
                <li>
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    <Mail className="h-4 w-4 shrink-0" />
                    {CONTACT_INFO.email}
                  </a>
                </li>
              )}
              {CONTACT_INFO.businessHours && (
                <li className="flex items-center gap-2 text-sm text-gray-400">
                  <Clock className="h-4 w-4 shrink-0" />
                  {CONTACT_INFO.businessHours}
                </li>
              )}
              {CONTACT_INFO.address && (
                <li className="flex items-start gap-2 text-sm text-gray-400">
                  <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                  {CONTACT_INFO.address}
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
            <p className="text-xs text-gray-500">
              &copy; {currentYear} {SITE_CONFIG.name}. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link
                href="/privacy-policy"
                className="text-xs text-gray-500 transition-colors hover:text-gray-300"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

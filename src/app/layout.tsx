import type { Metadata, Viewport } from 'next';
import { Suspense } from 'react';
import { Montserrat, Open_Sans } from 'next/font/google';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Analytics } from '@/components/layout/Analytics';
import { SITE_CONFIG, CONTACT_INFO } from '@/lib/constants';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-montserrat',
  display: 'swap',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-open-sans',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#0047AB',
};

export const metadata: Metadata = {
  title: 'Baring Construction Services | Premium Construction in Batangas',
  description:
    'Professional construction services for residential, commercial, and industrial projects. Serving Batangas, Laguna, and Cavite. Get a free quote today.',
  keywords:
    'construction Batangas, general contractor, fit-out services, electrical works, MEPF, residential construction',
  openGraph: {
    title: 'Baring Construction Services',
    description:
      'Premium construction from residential to commercial projects',
    url: 'https://baringconstruction.com',
    siteName: 'Baring Construction Services',
    locale: 'en_PH',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'GeneralContractor',
      '@id': `${SITE_CONFIG.url}/#business`,
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
      description: SITE_CONFIG.description,
      telephone: CONTACT_INFO.phone,
      email: CONTACT_INFO.email,
      areaServed: [
        { '@type': 'AdministrativeArea', name: 'Batangas' },
        { '@type': 'AdministrativeArea', name: 'Laguna' },
        { '@type': 'AdministrativeArea', name: 'Cavite' },
      ],
      openingHours: 'Mo-Sa 08:00-18:00',
    },
    {
      '@type': 'Organization',
      '@id': `${SITE_CONFIG.url}/#organization`,
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: CONTACT_INFO.phone,
        email: CONTACT_INFO.email,
        contactType: 'customer service',
        availableLanguage: ['English', 'Filipino'],
      },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${openSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </head>
      <body>
        <Suspense fallback={null}>
          <Analytics />
        </Suspense>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

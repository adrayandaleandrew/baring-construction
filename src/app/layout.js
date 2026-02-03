import { Montserrat, Open_Sans } from 'next/font/google';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-montserrat',
  display: 'swap',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-open-sans',
  display: 'swap',
});

export const metadata = {
  title: 'Baring Construction Services | Premium Construction in Metro Manila',
  description:
    'Professional construction services for residential, commercial, and industrial projects. Serving Metro Manila, Rizal, and Pampanga. Get a free quote today.',
  keywords:
    'construction Manila, general contractor, fit-out services, electrical works, MEPF, residential construction',
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

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${openSans.variable}`}>
      <body>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

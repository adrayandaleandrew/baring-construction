import type {
  SiteConfig,
  ContactInfo,
  ServiceArea,
  ProjectCategoryFilter,
} from '@/types';

export const SITE_CONFIG: SiteConfig = {
  name: 'Baring Construction Services',
  shortName: 'Baring Construction',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://baringconstruction.com',
  description:
    'Professional construction services for residential, commercial, and industrial projects. Serving Batangas, Laguna, and Cavite.',
};

export const CONTACT_INFO: ContactInfo = {
  phone: '+63 956 315 0476',
  email: 'baringcons@gmail.com',
  address: 'Coliat, Ibaan, Batangas',
  businessHours: 'Monday - Saturday: 8:00 AM - 6:00 PM',
  facebook:
    'https://www.facebook.com/people/Baring-Construction-Services-general-and-fit-out-contractor/61558831425159/',
};

export const SERVICE_AREAS: ServiceArea[] = [
  {
    region: 'Batangas',
    cities: [
      'Ibaan', 'Lipa', 'Batangas City',
      'Tanauan', 'Nasugbu', 'Santo Tomas',
    ],
  },
  {
    region: 'Laguna',
    cities: [
      'Santa Rosa', 'Calamba', 'San Pedro',
      'Cabuyao', 'Biñan',
    ],
  },
  {
    region: 'Cavite',
    cities: [
      'Bacoor', 'Imus', 'Dasmariñas',
      'General Trias', 'Silang',
    ],
  },
];

export const PROJECT_TYPES: string[] = [
  'Residential Construction',
  'Commercial Construction',
  'Electrical Works',
  'Civil & Structural Works',
  'MEPF Services',
  'Renovation/Fit-out',
  'Swimming Pool & Landscaping',
  'Industrial Projects',
  'Other',
];

export const BUDGET_RANGES: string[] = [
  '₱500K - ₱1M',
  '₱1M - ₱3M',
  '₱3M - ₱5M',
  '₱5M - ₱10M',
  '₱10M+',
  'Not Sure Yet',
];

export const TIMELINE_OPTIONS: string[] = [
  'ASAP (Within 1 month)',
  '1-3 months',
  '3-6 months',
  '6+ months',
  'Flexible',
];

export const PROJECT_CATEGORIES: ProjectCategoryFilter[] = [
  { label: 'All', value: 'all' },
  { label: 'Residential', value: 'residential' },
  { label: 'Commercial', value: 'commercial' },
  { label: 'Educational', value: 'educational' },
  { label: 'Industrial', value: 'industrial' },
  { label: 'Electrical', value: 'electrical' },
];

export const GOOGLE_MAPS_EMBED_URL: string =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15467.88!2d121.133!3d13.817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd0e1b1b1b1b1b%3A0x1234567890abcdef!2sColiat%2C%20Ibaan%2C%20Batangas!5e0!3m2!1sen!2sph!4v1700000000000';

export const GOOGLE_MAPS_DIRECTIONS_URL: string =
  'https://www.google.com/maps/dir/?api=1&destination=Coliat,+Ibaan,+Batangas,+Philippines';

export const MAX_FILE_SIZE: number = 5 * 1024 * 1024; // 5MB
export const ALLOWED_FILE_TYPES: string[] = [
  'application/pdf',
  'image/jpeg',
  'image/png',
  'image/webp',
];
export const MAX_FILES: number = 5;

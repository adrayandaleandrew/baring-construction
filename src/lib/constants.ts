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
    'Professional construction services for residential, commercial, and industrial projects. Serving Metro Manila, Rizal, and Pampanga.',
};

export const CONTACT_INFO: ContactInfo = {
  phone: '+63 XXX XXX XXXX',
  email: 'info@baringconstruction.ph',
  whatsapp: '63XXXXXXXXXX',
  address: '',
  businessHours: 'Monday - Saturday: 8:00 AM - 6:00 PM',
};

export const SERVICE_AREAS: ServiceArea[] = [
  {
    region: 'Metro Manila',
    cities: ['Makati', 'Taguig', 'Quezon City', 'Manila', 'Pasig', 'Mandaluyong'],
  },
  {
    region: 'Rizal',
    cities: ['Antipolo', 'Cainta', 'Taytay', 'Angono'],
  },
  {
    region: 'Pampanga',
    cities: ['San Fernando', 'Angeles', 'Clark'],
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

export const MAX_FILE_SIZE: number = 5 * 1024 * 1024; // 5MB
export const ALLOWED_FILE_TYPES: string[] = [
  'application/pdf',
  'image/jpeg',
  'image/png',
  'image/webp',
];
export const MAX_FILES: number = 5;

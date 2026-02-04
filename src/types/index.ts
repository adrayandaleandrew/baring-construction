import type { LucideIcon } from 'lucide-react';

// Navigation
export interface NavDropdownItem {
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  href: string;
  dropdown?: NavDropdownItem[];
  cta?: boolean;
}

export interface FooterLinks {
  services: NavDropdownItem[];
  company: NavDropdownItem[];
}

// Services
export interface SubService {
  title: string;
  description: string;
  features: string[];
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceMetadata {
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  icon: string;
  featured: boolean;
  order: number;
  overview: string;
  subServices: SubService[];
  faqs: ServiceFAQ[];
  metadata: ServiceMetadata;
}

// Projects
export type ProjectCategory =
  | 'residential'
  | 'commercial'
  | 'educational'
  | 'industrial'
  | 'electrical';

export type ProjectStatus = 'completed' | 'in-progress' | 'upcoming';

export interface ProjectImage {
  url: string;
  alt: string;
  caption: string;
  isPrimary: boolean;
}

export interface ProjectSpecifications {
  area: string | null;
  floors: number | null;
  rooms: number | null;
  capacity: string | null;
}

export interface ProjectMetadata {
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: ProjectCategory;
  location: string;
  budget: string;
  duration: string;
  completionDate: string;
  status: ProjectStatus;
  client: string | null;
  featured: boolean;
  images: ProjectImage[];
  services: string[];
  description: string;
  challenges: string | null;
  solutions: string | null;
  highlights: string[];
  specifications: ProjectSpecifications;
  testimonial: string | null;
  relatedProjects: string[];
  metadata: ProjectMetadata;
}

// Testimonials
export interface Testimonial {
  id: string;
  author: string;
  role: string;
  company: string | null;
  projectRef: string;
  rating: number;
  quote: string;
  date: string;
  featured: boolean;
  avatar: string | null;
  verified: boolean;
}

// Site Config
export interface SiteConfig {
  name: string;
  shortName: string;
  url: string;
  description: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  businessHours: string;
  facebook?: string;
}

export interface ServiceArea {
  region: string;
  cities: string[];
}

export interface ProjectCategoryFilter {
  label: string;
  value: string;
}

// Icon mapping
export type IconMap = Record<string, LucideIcon>;

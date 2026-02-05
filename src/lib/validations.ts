import { z } from 'zod';

export const ContactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters'),
  email: z.string().email('Invalid email address').max(100, 'Email too long'),
  phone: z
    .string()
    .regex(
      /^(\+63|0)?[0-9\s\-()]{10,}$/,
      'Invalid Philippine phone number'
    ),
  projectType: z.enum([
    'Residential Construction',
    'Commercial Construction',
    'Electrical Works',
    'Civil & Structural Works',
    'MEPF Services',
    'Renovation/Fit-out',
    'Swimming Pool & Landscaping',
    'Industrial Projects',
    'Other',
  ]),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message must be less than 1000 characters'),
});

export type ContactFormData = z.infer<typeof ContactFormSchema>;

export const QuoteFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters'),
  email: z.string().email('Invalid email address').max(100, 'Email too long'),
  phone: z
    .string()
    .regex(
      /^(\+63|0)?[0-9\s\-()]{10,}$/,
      'Invalid Philippine phone number'
    ),
  company: z.string().max(100).optional().or(z.literal('')),
  projectType: z.enum([
    'Residential Construction',
    'Commercial Construction',
    'Electrical Works',
    'Civil & Structural Works',
    'MEPF Services',
    'Renovation/Fit-out',
    'Swimming Pool & Landscaping',
    'Industrial Projects',
    'Other',
  ]),
  location: z
    .string()
    .min(3, 'Location must be at least 3 characters')
    .max(200),
  budget: z.enum([
    '₱500K - ₱1M',
    '₱1M - ₱3M',
    '₱3M - ₱5M',
    '₱5M - ₱10M',
    '₱10M+',
    'Not Sure Yet',
  ]),
  timeline: z.enum([
    'ASAP (Within 1 month)',
    '1-3 months',
    '3-6 months',
    '6+ months',
    'Flexible',
  ]),
  description: z
    .string()
    .min(50, 'Please provide at least 50 characters describing your project')
    .max(2000, 'Description must be less than 2000 characters'),
});

export type QuoteFormData = z.infer<typeof QuoteFormSchema>;

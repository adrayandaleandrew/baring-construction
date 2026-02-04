import type { Project } from '@/types';

export const PROJECTS: Project[] = [
  {
    id: 'proj-001',
    slug: 'bannister-academy-antipolo',
    title: 'Bannister Academy',
    category: 'educational',
    location: 'Antipolo, Rizal',
    budget: '₱2.5M+',
    duration: '4 months',
    completionDate: '2024-11-15',
    status: 'completed',
    client: 'Bannister Academy Foundation',
    featured: true,
    images: [
      {
        url: '/images/projects/bannister-academy/main.jpg',
        alt: 'Bannister Academy main building exterior',
        caption: 'Completed educational facility in Antipolo',
        isPrimary: true,
      },
    ],
    services: [
      'Plastering',
      'Installation of form blocks',
      'Concrete molding and arches',
      'Land leveling',
    ],
    description:
      'Complete construction of educational facility including specialized architectural elements such as concrete arches and custom molding work. The project required careful coordination and skilled craftsmanship to deliver on schedule.',
    challenges:
      'Working with specialized architectural elements including custom concrete arches and decorative molding required precision fabrication.',
    solutions:
      'Deployed experienced team for custom on-site fabrication of architectural elements, ensuring quality while maintaining schedule.',
    highlights: [
      'Completed on schedule despite complex architectural requirements',
      'Zero safety incidents throughout construction',
      'Custom concrete arches fabricated on-site',
    ],
    specifications: {
      area: '450 sqm',
      floors: 2,
      rooms: 12,
      capacity: '200 students',
    },
    testimonial: null,
    relatedProjects: ['proj-002', 'proj-005'],
    metadata: {
      metaTitle:
        'Bannister Academy Construction Project - Antipolo, Rizal',
      metaDescription:
        'Complete construction of Bannister Academy educational facility including plastering, concrete molding, and custom architectural elements.',
      keywords: [
        'educational construction',
        'school building',
        'antipolo construction',
        'concrete work',
      ],
    },
  },
  {
    id: 'proj-002',
    slug: '2-storey-residence',
    title: '2-Storey Residence',
    category: 'residential',
    location: 'Metro Manila',
    budget: '₱1M - ₱3M',
    duration: '6 months',
    completionDate: '2024-08-01',
    status: 'completed',
    client: null,
    featured: true,
    images: [
      {
        url: '/images/projects/2-storey-residence/main.jpg',
        alt: '2-storey residential home exterior',
        caption: 'Completed 2-storey residence',
        isPrimary: true,
      },
    ],
    services: [
      'General Construction',
      'Electrical Works',
      'Plumbing',
      'Interior Finishing',
    ],
    description:
      'Full construction of a modern 2-storey residential home including all structural, electrical, plumbing, and finishing works.',
    challenges: null,
    solutions: null,
    highlights: [
      'Complete turnkey residential construction',
      'Modern design with quality finishes',
    ],
    specifications: {
      area: '180 sqm',
      floors: 2,
      rooms: 4,
      capacity: null,
    },
    testimonial: null,
    relatedProjects: ['proj-001'],
    metadata: {
      metaTitle: '2-Storey Residence Construction Project',
      metaDescription:
        'Complete construction of a modern 2-storey residential home in Metro Manila.',
      keywords: [
        'residential construction',
        'house building',
        '2-storey house',
      ],
    },
  },
  {
    id: 'proj-003',
    slug: 'dali-convenience-store',
    title: 'Dali Convenience Store',
    category: 'commercial',
    location: 'Metro Manila',
    budget: '₱500K - ₱1M',
    duration: '2 months',
    completionDate: '2024-06-01',
    status: 'completed',
    client: 'Dali Store',
    featured: true,
    images: [
      {
        url: '/images/projects/dali-store/main.jpg',
        alt: 'Dali Convenience Store completed exterior',
        caption: 'Completed convenience store fit-out',
        isPrimary: true,
      },
    ],
    services: [
      'Commercial Fit-out',
      'Electrical Works',
      'Interior Finishing',
    ],
    description:
      'Complete fit-out of a convenience store including interior construction, electrical installation, and finishing works.',
    challenges: null,
    solutions: null,
    highlights: [
      'Fast-track commercial fit-out',
      'Completed within tight deadline',
    ],
    specifications: {
      area: '80 sqm',
      floors: 1,
      rooms: null,
      capacity: null,
    },
    testimonial: null,
    relatedProjects: ['proj-004'],
    metadata: {
      metaTitle: 'Dali Convenience Store Fit-out Project',
      metaDescription:
        'Commercial fit-out of Dali Convenience Store including interior construction and electrical installation.',
      keywords: ['commercial fit-out', 'store construction', 'retail fit-out'],
    },
  },
  {
    id: 'proj-004',
    slug: 'makati-electrical-project',
    title: 'Makati Electrical Project',
    category: 'electrical',
    location: 'Makati City',
    budget: '₱1M - ₱3M',
    duration: '3 months',
    completionDate: '2024-09-01',
    status: 'completed',
    client: null,
    featured: true,
    images: [
      {
        url: '/images/projects/makati-electrical/main.jpg',
        alt: 'Industrial electrical installation in Makati',
        caption: 'Cable tray and power distribution installation',
        isPrimary: true,
      },
    ],
    services: [
      'Cable Tray Installation',
      'Panel Board Installation',
      'Power Distribution',
    ],
    description:
      'Large-scale electrical installation project in a Makati commercial complex, including cable tray systems, panel boards, and power distribution networks.',
    challenges: null,
    solutions: null,
    highlights: [
      'Organized power distribution system',
      'Industrial-grade cable tray installation',
    ],
    specifications: {
      area: null,
      floors: null,
      rooms: null,
      capacity: null,
    },
    testimonial: null,
    relatedProjects: ['proj-005'],
    metadata: {
      metaTitle: 'Makati Electrical Installation Project',
      metaDescription:
        'Large-scale electrical installation project in Makati including cable tray systems and power distribution.',
      keywords: [
        'electrical installation',
        'cable tray',
        'Makati electrical',
      ],
    },
  },
  {
    id: 'proj-005',
    slug: 'steel-racking-installation',
    title: 'Steel Racking Installation',
    category: 'industrial',
    location: 'Metro Manila',
    budget: '₱500K - ₱1M',
    duration: '6 weeks',
    completionDate: '2024-07-01',
    status: 'completed',
    client: null,
    featured: false,
    images: [
      {
        url: '/images/projects/steel-racking/main.jpg',
        alt: 'Steel racking system in warehouse',
        caption: 'Industrial steel racking installation',
        isPrimary: true,
      },
    ],
    services: ['Steel Fabrication', 'Structural Steel', 'Installation'],
    description:
      'Design and installation of industrial steel racking systems for warehouse storage optimization.',
    challenges: null,
    solutions: null,
    highlights: [
      'Custom-fabricated steel racking',
      'Optimized warehouse storage layout',
    ],
    specifications: {
      area: null,
      floors: null,
      rooms: null,
      capacity: null,
    },
    testimonial: null,
    relatedProjects: ['proj-004'],
    metadata: {
      metaTitle: 'Steel Racking Installation Project',
      metaDescription:
        'Industrial steel racking system design and installation for warehouse storage optimization.',
      keywords: [
        'steel racking',
        'warehouse storage',
        'industrial installation',
      ],
    },
  },
  {
    id: 'proj-006',
    slug: 'san-fernando-busduct',
    title: 'San Fernando Busduct Installation',
    category: 'electrical',
    location: 'San Fernando, Pampanga',
    budget: '₱1M - ₱3M',
    duration: '2 months',
    completionDate: '2024-10-01',
    status: 'completed',
    client: null,
    featured: false,
    images: [
      {
        url: '/images/projects/san-fernando-busduct/main.jpg',
        alt: 'Busduct installation in industrial facility',
        caption: 'Busduct power distribution system',
        isPrimary: true,
      },
    ],
    services: ['Busduct Installation', 'Power Distribution', 'Electrical Works'],
    description:
      'Installation of busduct power distribution system in an industrial facility in San Fernando, Pampanga.',
    challenges: null,
    solutions: null,
    highlights: [
      'High-capacity busduct system',
      'Efficient power distribution',
    ],
    specifications: {
      area: null,
      floors: null,
      rooms: null,
      capacity: null,
    },
    testimonial: null,
    relatedProjects: ['proj-004'],
    metadata: {
      metaTitle: 'San Fernando Busduct Installation Project',
      metaDescription:
        'Busduct power distribution system installation in San Fernando, Pampanga for industrial facility.',
      keywords: [
        'busduct installation',
        'power distribution',
        'Pampanga electrical',
      ],
    },
  },
];

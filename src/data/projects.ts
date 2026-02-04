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
  {
    id: 'proj-007',
    slug: 'quezon-city-home-renovation',
    title: 'Quezon City Home Renovation',
    category: 'residential',
    location: 'Quezon City',
    budget: '₱1M - ₱3M',
    duration: '3 months',
    completionDate: '2025-01-15',
    status: 'completed',
    client: null,
    featured: false,
    images: [
      {
        url: '/images/projects/qc-renovation/main.jpg',
        alt: 'Renovated residential home in Quezon City',
        caption: 'Full home renovation with modern finishes',
        isPrimary: true,
      },
      {
        url: '/images/projects/qc-renovation/kitchen.jpg',
        alt: 'Modern kitchen renovation',
        caption: 'Upgraded kitchen with new cabinetry and countertops',
        isPrimary: false,
      },
    ],
    services: [
      'Interior Renovation',
      'Plastering and Painting',
      'Tiling and Flooring',
      'Electrical Rewiring',
      'Plumbing Upgrade',
    ],
    description:
      'Complete renovation of a single-storey residential home in Quezon City. The project included full interior overhaul with modern finishes, electrical rewiring, plumbing upgrades, and a new kitchen layout.',
    challenges:
      'Renovation work on an occupied property required careful phasing to minimize disruption to the homeowner.',
    solutions:
      'Implemented a room-by-room phasing plan, completing each area before moving to the next, allowing the homeowner to remain on-site throughout construction.',
    highlights: [
      'Full interior renovation completed in 3 months',
      'Room-by-room phasing minimized homeowner disruption',
      'Modern kitchen and bathroom upgrades',
      'Complete electrical rewiring to current code',
    ],
    specifications: {
      area: '150 sqm',
      floors: 1,
      rooms: 3,
      capacity: null,
    },
    testimonial: null,
    relatedProjects: ['proj-002'],
    metadata: {
      metaTitle:
        'Home Renovation Project - Quezon City',
      metaDescription:
        'Complete residential renovation in Quezon City including interior overhaul, electrical rewiring, and modern kitchen upgrade.',
      keywords: [
        'home renovation',
        'house renovation',
        'Quezon City contractor',
        'interior renovation',
      ],
    },
  },
  {
    id: 'proj-008',
    slug: 'pasig-office-fit-out',
    title: 'Pasig Office Fit-out',
    category: 'commercial',
    location: 'Pasig City',
    budget: '₱3M - ₱5M',
    duration: '4 months',
    completionDate: '2024-12-01',
    status: 'completed',
    client: null,
    featured: true,
    images: [
      {
        url: '/images/projects/pasig-office/main.jpg',
        alt: 'Modern office space in Pasig',
        caption: 'Completed open-plan office fit-out',
        isPrimary: true,
      },
      {
        url: '/images/projects/pasig-office/meeting.jpg',
        alt: 'Glass-walled meeting room',
        caption: 'Executive meeting room with acoustic glass partitions',
        isPrimary: false,
      },
    ],
    services: [
      'Commercial Fit-out',
      'Partitioning and Drywall',
      'HVAC Installation',
      'Electrical Works',
      'Fire Protection System',
    ],
    description:
      'Full office fit-out for a 500 sqm commercial space in Pasig City. The project transformed a bare shell unit into a modern open-plan office with private meeting rooms, a reception area, server room, and pantry.',
    challenges:
      'Tight 4-month deadline with complex MEPF coordination required across HVAC, fire sprinkler, and electrical systems in a high-rise building.',
    solutions:
      'Deployed parallel work crews for structural, MEPF, and finishing trades with weekly coordination meetings to ensure all systems integrated correctly.',
    highlights: [
      'Delivered on a tight 4-month schedule',
      'Open-plan design with acoustic meeting rooms',
      'Integrated HVAC, fire protection, and data cabling',
      'Modern reception area with branded elements',
    ],
    specifications: {
      area: '500 sqm',
      floors: 1,
      rooms: 8,
      capacity: '60 workstations',
    },
    testimonial: null,
    relatedProjects: ['proj-003'],
    metadata: {
      metaTitle:
        'Office Fit-out Project - Pasig City',
      metaDescription:
        'Complete commercial office fit-out in Pasig City including partitioning, HVAC, electrical, and fire protection installation.',
      keywords: [
        'office fit-out',
        'commercial construction',
        'Pasig contractor',
        'office renovation',
      ],
    },
  },
  {
    id: 'proj-009',
    slug: 'cainta-warehouse-mepf',
    title: 'Cainta Warehouse MEPF Installation',
    category: 'industrial',
    location: 'Cainta, Rizal',
    budget: '₱5M - ₱10M',
    duration: '5 months',
    completionDate: '2025-02-01',
    status: 'completed',
    client: null,
    featured: false,
    images: [
      {
        url: '/images/projects/cainta-warehouse/main.jpg',
        alt: 'Warehouse MEPF systems installation',
        caption: 'Industrial warehouse with complete MEPF systems',
        isPrimary: true,
      },
    ],
    services: [
      'HVAC Installation',
      'Fire Sprinkler System',
      'Plumbing and Drainage',
      'Electrical Distribution',
      'Ventilation Systems',
    ],
    description:
      'Complete MEPF installation for a large logistics warehouse in Cainta, Rizal. The project covered mechanical ventilation, fire sprinkler systems, plumbing, drainage, and industrial-grade electrical distribution across a 2,000 sqm facility.',
    challenges:
      'Coordinating multiple MEPF trades simultaneously in a large open-span warehouse while meeting strict fire safety compliance requirements.',
    solutions:
      'Used a zoned installation approach, completing each MEPF system zone-by-zone to allow parallel work and early inspection of completed sections.',
    highlights: [
      'Full MEPF installation for 2,000 sqm warehouse',
      'Fire sprinkler system met all BFP compliance standards',
      'Industrial-grade electrical distribution',
      'Zoned installation approach enabled parallel work',
    ],
    specifications: {
      area: '2,000 sqm',
      floors: 1,
      rooms: null,
      capacity: null,
    },
    testimonial: null,
    relatedProjects: ['proj-005', 'proj-004'],
    metadata: {
      metaTitle:
        'Warehouse MEPF Installation Project - Cainta, Rizal',
      metaDescription:
        'Complete MEPF installation for a logistics warehouse in Cainta, Rizal including HVAC, fire sprinkler, plumbing, and electrical systems.',
      keywords: [
        'MEPF installation',
        'warehouse construction',
        'industrial MEPF',
        'Rizal contractor',
      ],
    },
  },
  {
    id: 'proj-010',
    slug: 'antipolo-pool-and-landscaping',
    title: 'Antipolo Pool & Landscaping',
    category: 'residential',
    location: 'Antipolo, Rizal',
    budget: '₱1M - ₱3M',
    duration: '2 months',
    completionDate: '2024-05-01',
    status: 'completed',
    client: null,
    featured: false,
    images: [
      {
        url: '/images/projects/antipolo-pool/main.jpg',
        alt: 'Residential swimming pool with landscaped garden',
        caption: 'Completed pool and landscaping project',
        isPrimary: true,
      },
      {
        url: '/images/projects/antipolo-pool/garden.jpg',
        alt: 'Landscaped garden with hardscaping',
        caption: 'Custom hardscaping and garden design',
        isPrimary: false,
      },
    ],
    services: [
      'Swimming Pool Construction',
      'Pool Equipment Installation',
      'Landscaping',
      'Hardscaping',
      'Outdoor Lighting',
    ],
    description:
      'Design and construction of a residential swimming pool with surrounding landscape and hardscape in Antipolo, Rizal. The project included pool excavation, tiling, filtration system installation, garden design, stone pathways, and outdoor lighting.',
    challenges:
      'Sloped terrain required additional excavation and retaining wall construction before pool installation could begin.',
    solutions:
      'Engineered a retaining wall system to stabilize the slope, then leveled the area for pool construction while incorporating the natural terrain into the landscape design.',
    highlights: [
      'Custom-designed pool with integrated filtration',
      'Retaining wall engineering for sloped terrain',
      'Stone pathways and hardscape features',
      'Outdoor lighting system for evening use',
    ],
    specifications: {
      area: '120 sqm',
      floors: null,
      rooms: null,
      capacity: null,
    },
    testimonial: null,
    relatedProjects: ['proj-002', 'proj-007'],
    metadata: {
      metaTitle:
        'Swimming Pool & Landscaping Project - Antipolo, Rizal',
      metaDescription:
        'Residential swimming pool construction and landscaping in Antipolo, Rizal including hardscaping and outdoor lighting.',
      keywords: [
        'swimming pool construction',
        'landscaping',
        'Antipolo contractor',
        'pool builder',
      ],
    },
  },
];

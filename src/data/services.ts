import type { Service } from '@/types';

export const SERVICES: Service[] = [
  {
    id: 'svc-001',
    slug: 'general-construction',
    title: 'General Construction',
    icon: 'Home',
    featured: true,
    order: 1,
    overview:
      'Complete construction solutions from foundation to finishing, including residential homes, commercial buildings, and industrial facilities.',
    subServices: [
      {
        title: 'Residential Construction',
        description: 'Custom homes, townhouses, and residential complexes',
        features: [
          'New home construction',
          'Multi-storey residences',
          'Townhouse developments',
          'Renovations and extensions',
        ],
      },
      {
        title: 'Commercial Construction',
        description:
          'Office buildings, retail spaces, and commercial fit-outs',
        features: [
          'Office fit-out and renovation',
          'Retail store construction',
          'Restaurant and food establishments',
          'Warehouse and storage facilities',
        ],
      },
    ],
    faqs: [
      {
        question: 'How long does a typical construction project take?',
        answer:
          'Project timelines vary based on scope and complexity. A residential home typically takes 4-8 months, while commercial projects may take 3-12 months. We provide detailed timelines during the quotation phase.',
      },
      {
        question: 'Do you handle permits and documentation?',
        answer:
          'Yes, we assist with securing necessary building permits and ensure all construction complies with local building codes and regulations.',
      },
      {
        question: 'What areas do you serve?',
        answer:
          'We serve Batangas, Laguna, and Cavite. Contact us for projects outside these areas as we evaluate on a case-by-case basis.',
      },
    ],
    metadata: {
      metaTitle:
        'General Construction Services | Baring Construction',
      metaDescription:
        'Complete construction solutions for residential, commercial, and industrial projects across Batangas, Laguna, and Cavite.',
      keywords: [
        'general contractor',
        'house construction',
        'commercial construction',
        'Batangas contractor',
      ],
    },
  },
  {
    id: 'svc-002',
    slug: 'electrical-works',
    title: 'Electrical Works',
    icon: 'Zap',
    featured: true,
    order: 2,
    overview:
      'Complete electrical solutions from design to installation, covering residential, commercial, and industrial electrical systems.',
    subServices: [
      {
        title: 'Commercial Electrical',
        description:
          'Complete electrical installations for commercial facilities',
        features: [
          'Panel board installation',
          'Lighting systems',
          'Power distribution',
          'Emergency power systems',
        ],
      },
      {
        title: 'Industrial Electrical',
        description: 'Heavy-duty electrical systems for industrial operations',
        features: [
          'Cable tray systems',
          'Busduct installation',
          'Motor control centers',
          'Industrial lighting',
        ],
      },
    ],
    faqs: [
      {
        question: 'Do you provide electrical design services?',
        answer:
          'Yes, we work with licensed electrical engineers to provide complete design and installation services.',
      },
      {
        question: 'Are your electricians licensed?',
        answer:
          'All our electricians are PRC-licensed and have extensive experience in residential, commercial, and industrial electrical work.',
      },
    ],
    metadata: {
      metaTitle:
        'Electrical Works & Installation Services | Baring Construction',
      metaDescription:
        'Professional electrical installation services including panel boards, cable systems, and industrial power distribution across Batangas, Laguna, and Cavite.',
      keywords: [
        'electrical contractor',
        'electrical installation',
        'panel board',
        'cable tray',
      ],
    },
  },
  {
    id: 'svc-003',
    slug: 'civil-structural',
    title: 'Civil & Structural Works',
    icon: 'Building2',
    featured: true,
    order: 3,
    overview:
      'Structural engineering and civil works including foundation construction, structural steel, concrete works, and site development.',
    subServices: [
      {
        title: 'Foundation Works',
        description: 'Solid foundations for any structure',
        features: [
          'Pile driving',
          'Concrete foundation',
          'Retaining walls',
          'Land leveling',
        ],
      },
      {
        title: 'Structural Steel',
        description: 'Steel fabrication and erection',
        features: [
          'Steel framing',
          'Steel racking systems',
          'Mezzanine floors',
          'Steel roof trusses',
        ],
      },
    ],
    faqs: [
      {
        question: 'Do you provide structural engineering services?',
        answer:
          'We work with licensed structural engineers to ensure all projects meet safety standards and building codes.',
      },
    ],
    metadata: {
      metaTitle:
        'Civil & Structural Works | Baring Construction',
      metaDescription:
        'Expert civil and structural construction services including foundation works, structural steel, and concrete construction.',
      keywords: [
        'civil works',
        'structural engineering',
        'foundation construction',
        'steel fabrication',
      ],
    },
  },
  {
    id: 'svc-004',
    slug: 'architectural',
    title: 'Architectural Services',
    icon: 'PenTool',
    featured: true,
    order: 4,
    overview:
      'Architectural design and finishing services including interior design, facade works, and custom architectural elements.',
    subServices: [
      {
        title: 'Interior Finishing',
        description: 'Premium interior construction and finishing',
        features: [
          'Plastering and painting',
          'Tiling and flooring',
          'Ceiling works',
          'Custom millwork',
        ],
      },
      {
        title: 'Facade & Exterior',
        description: 'Building exterior enhancement',
        features: [
          'Curtain wall systems',
          'Cladding and siding',
          'Concrete molding and arches',
          'Exterior painting',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can you match existing architectural styles?',
        answer:
          'Yes, our team specializes in replicating and complementing existing architectural elements for renovation and extension projects.',
      },
    ],
    metadata: {
      metaTitle:
        'Architectural Services | Baring Construction',
      metaDescription:
        'Professional architectural construction services including interior finishing, facade works, and custom architectural elements.',
      keywords: [
        'architectural services',
        'interior finishing',
        'facade works',
        'construction design',
      ],
    },
  },
  {
    id: 'svc-005',
    slug: 'mepf-services',
    title: 'MEPF Services',
    icon: 'Settings',
    featured: true,
    order: 5,
    overview:
      'Mechanical, Electrical, Plumbing, and Fire Protection services for complete building systems integration.',
    subServices: [
      {
        title: 'Mechanical Works',
        description: 'HVAC and mechanical system installation',
        features: [
          'HVAC installation',
          'Ventilation systems',
          'Exhaust systems',
          'Mechanical equipment',
        ],
      },
      {
        title: 'Plumbing & Fire Protection',
        description: 'Complete plumbing and fire safety systems',
        features: [
          'Water supply systems',
          'Drainage systems',
          'Fire sprinkler installation',
          'Fire alarm systems',
        ],
      },
    ],
    faqs: [
      {
        question: 'Do you handle MEPF design?',
        answer:
          'We collaborate with licensed MEPF engineers for complete design-build solutions tailored to your project requirements.',
      },
    ],
    metadata: {
      metaTitle: 'MEPF Services | Baring Construction',
      metaDescription:
        'Complete MEPF (Mechanical, Electrical, Plumbing, Fire Protection) services for residential and commercial buildings.',
      keywords: ['MEPF', 'HVAC', 'plumbing', 'fire protection'],
    },
  },
  {
    id: 'svc-006',
    slug: 'specialized',
    title: 'Specialized Services',
    icon: 'Sparkles',
    featured: true,
    order: 6,
    overview:
      'Specialized construction services including swimming pools, landscaping, solar installation, and other custom projects.',
    subServices: [
      {
        title: 'Swimming Pool Construction',
        description: 'Custom pool design and construction',
        features: [
          'Residential pools',
          'Commercial pools',
          'Pool renovation',
          'Pool equipment installation',
        ],
      },
      {
        title: 'Landscaping',
        description: 'Outdoor space design and construction',
        features: [
          'Garden design',
          'Hardscaping',
          'Outdoor lighting',
          'Irrigation systems',
        ],
      },
    ],
    faqs: [
      {
        question: 'Do you offer maintenance for pools?',
        answer:
          'We focus on construction and installation. We can recommend trusted maintenance partners for ongoing pool care.',
      },
    ],
    metadata: {
      metaTitle:
        'Specialized Construction Services | Baring Construction',
      metaDescription:
        'Specialized construction services including swimming pools, landscaping, and custom projects across Batangas, Laguna, and Cavite.',
      keywords: [
        'swimming pool construction',
        'landscaping',
        'specialized construction',
      ],
    },
  },
];

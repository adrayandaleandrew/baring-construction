# BEST PRACTICES - Baring Construction Website

## 🌟 Project Philosophy

Our goal is to create a **fast, secure, maintainable, and SEO-optimized** website that converts visitors into clients. We prioritize **Component Composition**, **Server-Side Rendering (SSR)**, and **Performance-First Development**.

---

## 🛡️ Security Best Practices

Security is critical for maintaining client trust and protecting business data.

### **1. Secure API Communication**

```javascript
// ✅ GOOD: Environment variables for sensitive data
const API_URL = process.env.NEXT_PUBLIC_API_URL;
const API_KEY = process.env.API_SECRET_KEY; // Server-side only

// ❌ BAD: Hardcoded credentials
const apiKey = "sk_live_abc123..."; 
```

**Best Practices:**
- **Never commit `.env` files** to version control
- Use `NEXT_PUBLIC_` prefix only for client-safe variables
- Keep server-only secrets in `.env.local` without the prefix
- Always use HTTPS for production deployments

### **2. Form Security**

```javascript
// ✅ GOOD: Input validation and sanitization
import { z } from 'zod';

const ContactFormSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().regex(/^[0-9+\-\s()]+$/),
  message: z.string().min(10).max(1000)
});

// Validate before submission
const result = ContactFormSchema.safeParse(formData);
if (!result.success) {
  // Handle validation errors
}
```

**Best Practices:**
- **Validate all inputs** on both client and server side
- **Sanitize user input** to prevent XSS attacks
- Use CSRF tokens for form submissions
- Implement rate limiting on form endpoints (prevent spam)
- Use **reCAPTCHA** or honeypot fields for spam protection

### **3. Content Security Policy (CSP)**

```javascript
// next.config.js
const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin'
  }
];

module.exports = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
  },
};
```

### **4. Image Security**

```javascript
// ✅ GOOD: Next.js Image optimization with validation
import Image from 'next/image';

<Image
  src={projectImage}
  alt="Bannister Academy Construction Project"
  width={800}
  height={600}
  priority={isHero}
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..." // Low-quality placeholder
/>

// Validate image uploads
const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/webp'];
const MAX_SIZE = 5 * 1024 * 1024; // 5MB

if (!ALLOWED_TYPES.includes(file.type) || file.size > MAX_SIZE) {
  throw new Error('Invalid file');
}
```

---

## 📈 Architecture & Scalability

We follow **Next.js App Router conventions** with clear separation of concerns.

### **1. Project Structure**

```
baring-construction/
├── public/
│   ├── images/
│   │   ├── logo/
│   │   ├── projects/
│   │   └── services/
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── (routes)/
│   │   │   ├── page.js              # Homepage
│   │   │   ├── about/page.js
│   │   │   ├── services/
│   │   │   │   ├── page.js
│   │   │   │   └── [slug]/page.js   # Dynamic service pages
│   │   │   ├── projects/
│   │   │   │   ├── page.js
│   │   │   │   └── [id]/page.js     # Project details
│   │   │   ├── contact/page.js
│   │   │   └── quote/page.js
│   │   ├── api/                     # API routes
│   │   │   ├── contact/route.js
│   │   │   └── quote/route.js
│   │   ├── layout.js                # Root layout
│   │   └── not-found.js             # 404 page
│   ├── components/
│   │   ├── ui/                      # Reusable UI components
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   └── Input.jsx
│   │   ├── layout/                  # Layout components
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── MobileMenu.jsx
│   │   ├── sections/                # Page sections
│   │   │   ├── Hero.jsx
│   │   │   ├── ServiceGrid.jsx
│   │   │   └── ProjectGallery.jsx
│   │   └── forms/                   # Form components
│   │       ├── ContactForm.jsx
│   │       └── QuoteForm.jsx
│   ├── lib/
│   │   ├── utils.js                 # Utility functions
│   │   ├── constants.js             # App constants
│   │   └── api.js                   # API helpers
│   ├── data/
│   │   ├── projects.js              # Project data
│   │   ├── services.js              # Services data
│   │   └── testimonials.js          # Client testimonials
│   └── styles/
│       └── globals.css              # Global styles + Tailwind
├── .env.local                       # Local environment variables
├── .env.example                     # Example env file for documentation
├── next.config.js                   # Next.js configuration
├── tailwind.config.js               # Tailwind configuration
└── package.json
```

### **2. Component Architecture**

**Principle: Small, Focused, Reusable Components**

```javascript
// ✅ GOOD: Single responsibility, reusable
export function ProjectCard({ project }) {
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-shadow">
      <Image
        src={project.image}
        alt={project.title}
        width={400}
        height={300}
        className="object-cover"
      />
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.location}</p>
        <div className="flex items-center justify-between">
          <Badge variant="secondary">{project.category}</Badge>
          <Link href={`/projects/${project.id}`}>
            <Button variant="ghost" size="sm">View Details →</Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}

// ❌ BAD: Too many responsibilities, hard to maintain
export function ProjectSection() {
  // 200+ lines of mixed logic, filtering, sorting, rendering...
}
```

### **3. Server vs Client Components**

```javascript
// ✅ GOOD: Server Component by default (faster, better SEO)
// app/projects/page.js
import { ProjectCard } from '@/components/ProjectCard';
import { getProjects } from '@/lib/api';

export default async function ProjectsPage() {
  const projects = await getProjects(); // Fetch on server
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}

// ✅ GOOD: Client Component for interactivity
// components/ProjectFilter.jsx
'use client'

import { useState } from 'react';

export function ProjectFilter({ onFilterChange }) {
  const [category, setCategory] = useState('all');
  
  return (
    <select 
      value={category}
      onChange={(e) => {
        setCategory(e.target.value);
        onFilterChange(e.target.value);
      }}
    >
      {/* Filter options */}
    </select>
  );
}
```

**Rule: Use Server Components by default. Only add `'use client'` when you need:**
- Event handlers (`onClick`, `onChange`, etc.)
- State (`useState`, `useReducer`)
- Effects (`useEffect`)
- Browser-only APIs

---

## 💻 Code Quality & Standards

### **1. TypeScript (Recommended)**

```typescript
// ✅ GOOD: Type safety prevents bugs
interface Project {
  id: string;
  title: string;
  category: 'residential' | 'commercial' | 'educational' | 'industrial';
  budget: string;
  location: string;
  services: string[];
  images: string[];
}

function ProjectCard({ project }: { project: Project }) {
  // TypeScript catches errors at compile time
}

// ❌ BAD: No type safety, errors only at runtime
function ProjectCard({ project }) {
  // What properties does project have? Unknown until runtime error!
}
```

### **2. Naming Conventions**

| Type | Convention | Example |
|------|------------|---------|
| **Files** | kebab-case | `contact-form.jsx`, `project-card.jsx` |
| **Components** | PascalCase | `ContactForm`, `ProjectCard` |
| **Functions** | camelCase | `getProjects()`, `formatCurrency()` |
| **Constants** | UPPER_SNAKE_CASE | `API_BASE_URL`, `MAX_FILE_SIZE` |
| **CSS Classes** | Tailwind utilities | `bg-blue-600 hover:bg-blue-700` |

### **3. Code Organization**

```javascript
// ✅ GOOD: Organized imports
// 1. React/Next.js imports
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// 2. Third-party libraries
import { motion } from 'framer-motion';
import clsx from 'clsx';

// 3. Internal components
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

// 4. Data/utilities
import { SERVICES } from '@/data/services';
import { formatCurrency } from '@/lib/utils';

// 5. Types (if using TypeScript)
import type { Project } from '@/types';

// 6. Styles (if needed)
import styles from './ProjectCard.module.css';
```

### **4. ESLint & Prettier**

```json
// .eslintrc.json
{
  "extends": [
    "next/core-web-vitals",
    "prettier"
  ],
  "rules": {
    "react/no-unescaped-entities": "off",
    "react/prop-types": "off",
    "@next/next/no-img-element": "error"
  }
}

// .prettierrc
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "tabWidth": 2,
  "printWidth": 80
}
```

---

## ⚡ Performance Optimization

### **1. Image Optimization**

```javascript
// ✅ GOOD: Next.js Image component
import Image from 'next/image';

<Image
  src="/images/projects/bannister-academy.jpg"
  alt="Bannister Academy Educational Facility"
  width={800}
  height={600}
  priority={false} // Set true for above-fold images
  loading="lazy"   // Lazy load by default
  quality={85}     // Balance quality vs size
  placeholder="blur"
  blurDataURL="..." // Low-quality placeholder
/>

// ❌ BAD: Regular img tag (no optimization)
<img src="/images/projects/bannister-academy.jpg" alt="Project" />
```

**Best Practices:**
- Use Next.js `<Image>` component for all images
- Set `priority={true}` only for above-fold images
- Provide explicit `width` and `height` to prevent layout shift
- Use WebP format for modern browsers
- Compress images before upload (TinyPNG, Squoosh)
- Lazy load images below the fold

### **2. Font Optimization**

```javascript
// app/layout.js
import { Montserrat, Open_Sans } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-heading',
  display: 'swap', // Avoid invisible text during load
});

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-body',
  display: 'swap',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${openSans.variable}`}>
      <body className="font-body">{children}</body>
    </html>
  );
}
```

**tailwind.config.js:**
```javascript
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        heading: ['var(--font-heading)'],
        body: ['var(--font-body)'],
      },
    },
  },
};
```

### **3. Code Splitting**

```javascript
// ✅ GOOD: Dynamic imports for heavy components
import dynamic from 'next/dynamic';

const ProjectGallery = dynamic(
  () => import('@/components/ProjectGallery'),
  {
    loading: () => <div>Loading gallery...</div>,
    ssr: false, // Disable SSR if not needed
  }
);

// Use only when needed
export function ProjectPage() {
  const [showGallery, setShowGallery] = useState(false);
  
  return (
    <div>
      <button onClick={() => setShowGallery(true)}>
        View Gallery
      </button>
      {showGallery && <ProjectGallery />}
    </div>
  );
}
```

### **4. Tailwind CSS Optimization**

```javascript
// tailwind.config.js
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    // Only extend what you need
    extend: {
      colors: {
        'baring-blue': '#0047AB',
        'baring-gold': '#F5B700',
      },
    },
  },
  // Remove unused styles in production
  plugins: [],
};
```

**Best Practices:**
- Specify exact `content` paths to scan for class names
- Use Tailwind's purge to remove unused CSS
- Prefer utility classes over custom CSS when possible
- Use `@layer components` for reusable component styles

---

## 🧪 Testing Strategy

### **1. Component Testing**

```javascript
// __tests__/components/Button.test.jsx
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '@/components/ui/Button';

describe('Button Component', () => {
  it('renders button with correct text', () => {
    render(<Button>Click Me</Button>);
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  it('calls onClick handler when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);
    
    fireEvent.click(screen.getByText('Click Me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies correct variant classes', () => {
    render(<Button variant="primary">Primary</Button>);
    const button = screen.getByText('Primary');
    expect(button).toHaveClass('bg-baring-blue');
  });
});
```

### **2. Integration Testing**

```javascript
// __tests__/pages/contact.test.jsx
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContactPage from '@/app/contact/page';

describe('Contact Page', () => {
  it('submits form with valid data', async () => {
    const user = userEvent.setup();
    render(<ContactPage />);

    await user.type(screen.getByLabelText('Name'), 'John Doe');
    await user.type(screen.getByLabelText('Email'), 'john@example.com');
    await user.type(screen.getByLabelText('Message'), 'Test message');
    
    await user.click(screen.getByRole('button', { name: /submit/i }));

    await waitFor(() => {
      expect(screen.getByText(/message sent/i)).toBeInTheDocument();
    });
  });

  it('shows validation errors for invalid email', async () => {
    const user = userEvent.setup();
    render(<ContactPage />);

    await user.type(screen.getByLabelText('Email'), 'invalid-email');
    await user.click(screen.getByRole('button', { name: /submit/i }));

    expect(await screen.findByText(/valid email/i)).toBeInTheDocument();
  });
});
```

### **3. E2E Testing (Playwright)**

```javascript
// e2e/quote-request.spec.ts
import { test, expect } from '@playwright/test';

test('user can request a quote', async ({ page }) => {
  await page.goto('/quote');
  
  // Fill form
  await page.fill('[name="name"]', 'John Doe');
  await page.fill('[name="email"]', 'john@example.com');
  await page.fill('[name="phone"]', '+63 912 345 6789');
  await page.selectOption('[name="projectType"]', 'Residential Construction');
  await page.fill('[name="message"]', 'I need a 2-storey house built');
  
  // Submit
  await page.click('button[type="submit"]');
  
  // Verify success
  await expect(page.locator('text=Thank you')).toBeVisible();
});
```

---

## 📱 Responsive Design

### **1. Mobile-First Approach**

```javascript
// ✅ GOOD: Mobile-first Tailwind classes
<div className="
  px-4 py-6           /* Mobile: small padding */
  md:px-8 md:py-10    /* Tablet: medium padding */
  lg:px-12 lg:py-16   /* Desktop: large padding */
">
  <h1 className="
    text-2xl           /* Mobile: 24px */
    md:text-4xl        /* Tablet: 36px */
    lg:text-5xl        /* Desktop: 48px */
  ">
    Building Excellence
  </h1>
</div>

// Grid layout example
<div className="
  grid
  grid-cols-1        /* Mobile: 1 column */
  md:grid-cols-2     /* Tablet: 2 columns */
  lg:grid-cols-3     /* Desktop: 3 columns */
  gap-6
">
  {services.map(service => <ServiceCard key={service.id} {...service} />)}
</div>
```

### **2. Breakpoint Strategy**

```javascript
// Tailwind default breakpoints (use these)
// sm: 640px   - Small tablets
// md: 768px   - Tablets
// lg: 1024px  - Laptops
// xl: 1280px  - Desktops
// 2xl: 1536px - Large desktops

// Custom breakpoints if needed (tailwind.config.js)
module.exports = {
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
};
```

### **3. Touch-Friendly Design**

```javascript
// ✅ GOOD: Minimum 44x44px tap targets
<button className="
  min-h-[44px]
  min-w-[44px]
  px-6 py-3
  touch-manipulation  /* Disable double-tap zoom */
">
  Request Quote
</button>

// ❌ BAD: Too small on mobile
<button className="px-2 py-1 text-xs">Request Quote</button>
```

---

## 🔍 SEO Best Practices

### **1. Metadata**

```javascript
// app/page.js (Homepage)
export const metadata = {
  title: 'Baring Construction Services | Premium Construction in Metro Manila',
  description: 'Professional construction services for residential, commercial, and industrial projects. Serving Metro Manila, Rizal, and Pampanga. Get a free quote today.',
  keywords: 'construction Manila, general contractor, fit-out services, electrical works, MEPF, residential construction',
  openGraph: {
    title: 'Baring Construction Services',
    description: 'Premium construction from residential to commercial projects',
    url: 'https://baringconstruction.com',
    siteName: 'Baring Construction Services',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Baring Construction Services',
      },
    ],
    locale: 'en_PH',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Baring Construction Services',
    description: 'Premium construction services across Metro Manila',
    images: ['/images/twitter-image.jpg'],
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
```

### **2. Structured Data (JSON-LD)**

```javascript
// app/page.js
export default function HomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'GeneralContractor',
    name: 'Baring Construction Services',
    image: 'https://baringconstruction.com/logo.jpg',
    '@id': 'https://baringconstruction.com',
    url: 'https://baringconstruction.com',
    telephone: '+63-XXX-XXX-XXXX',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Your Street',
      addressLocality: 'Manila',
      postalCode: 'XXXX',
      addressCountry: 'PH',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 14.5995,
      longitude: 120.9842,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '08:00',
      closes: '18:00',
    },
    sameAs: [
      'https://www.facebook.com/baringconstruction',
      'https://www.instagram.com/baringconstruction',
    ],
    areaServed: ['Metro Manila', 'Rizal', 'Pampanga'],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Page content */}
    </>
  );
}
```

### **3. Sitemap**

```javascript
// app/sitemap.js
export default function sitemap() {
  const baseUrl = 'https://baringconstruction.com';
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];
}
```

---

## 📊 Analytics & Monitoring

### **1. Google Analytics 4**

```javascript
// app/layout.js
import Script from 'next/script';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
```

### **2. Event Tracking**

```javascript
// lib/analytics.js
export const trackEvent = (action, category, label, value) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Usage in components
import { trackEvent } from '@/lib/analytics';

function QuoteButton() {
  const handleClick = () => {
    trackEvent('click', 'CTA', 'Request Quote Button', 1);
    // Navigate to quote page
  };

  return <Button onClick={handleClick}>Request Quote</Button>;
}
```

---

## 🚀 Deployment & DevOps

### **1. Environment Variables**

```bash
# .env.example (commit this to git)
NEXT_PUBLIC_SITE_URL=https://baringconstruction.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Server-side only (never expose to client)
DATABASE_URL=postgresql://...
EMAIL_SERVER=smtp://...
EMAIL_FROM=info@baringconstruction.com
RECAPTCHA_SECRET_KEY=...
```

### **2. Build Optimization**

```javascript
// next.config.js
module.exports = {
  images: {
    formats: ['image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    minimumCacheTTL: 60,
  },
  compress: true,
  poweredByHeader: false, // Remove X-Powered-By header
  reactStrictMode: true,
  swcMinify: true,
};
```

### **3. Performance Budget**

```json
// package.json
{
  "scripts": {
    "build": "next build",
    "analyze": "ANALYZE=true next build",
    "lighthouse": "lighthouse https://baringconstruction.com --view"
  }
}
```

**Target Metrics:**
- **First Contentful Paint (FCP)**: < 1.8s
- **Largest Contentful Paint (LCP)**: < 2.5s
- **Cumulative Layout Shift (CLS)**: < 0.1
- **First Input Delay (FID)**: < 100ms
- **Lighthouse Score**: > 90

---

## 📝 Documentation

### **1. Component Documentation**

```javascript
/**
 * ServiceCard Component
 * 
 * Displays a service offering with icon, title, description, and link
 * 
 * @param {Object} props
 * @param {string} props.title - Service title
 * @param {string} props.description - Service description
 * @param {string} props.icon - Icon name from lucide-react
 * @param {string} props.link - URL to service detail page
 * 
 * @example
 * <ServiceCard
 *   title="General Construction"
 *   description="Complete construction solutions..."
 *   icon="Home"
 *   link="/services/general-construction"
 * />
 */
export function ServiceCard({ title, description, icon, link }) {
  // Component implementation
}
```

### **2. README.md**

```markdown
# Baring Construction Services Website

Professional construction company website built with Next.js 14 and Tailwind CSS.

## Features
- ⚡ Lightning-fast performance with Next.js App Router
- 🎨 Beautiful, responsive design with Tailwind CSS
- 🔍 SEO-optimized for Google search
- 📱 Mobile-first, touch-friendly interface
- 📧 Integrated contact and quote request forms
- 🖼️ Optimized image gallery for projects

## Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Deployment**: Vercel
- **Analytics**: Google Analytics 4

## Getting Started
1. Clone repository
2. Install dependencies: `npm install`
3. Copy `.env.example` to `.env.local` and fill in values
4. Run dev server: `npm run dev`
5. Open http://localhost:3000

## Build for Production
```bash
npm run build
npm run start
```

## Contributing
See BEST_PRACTICES.md for coding standards
```

---

## ✅ Code Review Checklist

Before submitting/deploying code:

- [ ] All images use Next.js `<Image>` component
- [ ] Components are properly typed (if using TypeScript)
- [ ] Responsive design tested on mobile, tablet, desktop
- [ ] Forms have client and server-side validation
- [ ] No console.log or debugging code left in
- [ ] Environment variables used for all sensitive data
- [ ] Accessibility: semantic HTML, alt text, ARIA labels
- [ ] SEO: metadata, structured data, sitemap updated
- [ ] Performance: Lighthouse score > 90
- [ ] No ESLint warnings or errors
- [ ] Code formatted with Prettier
- [ ] Tests passing (if applicable)

---

## 🎯 Key Takeaways

1. **Security First**: Never hardcode secrets, validate all inputs
2. **Performance Matters**: Use Next.js Image, lazy loading, code splitting
3. **Mobile-First**: Design for small screens, enhance for large
4. **Component Composition**: Small, focused, reusable components
5. **SEO Optimized**: Metadata, structured data, semantic HTML
6. **Type Safety**: Use TypeScript for fewer runtime errors
7. **Test Everything**: Unit, integration, and E2E tests
8. **Document Well**: Clear comments, README, component docs

---

**Remember**: Code is read more often than it's written. Write code that your future self will thank you for! 🚀

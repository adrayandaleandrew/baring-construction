# SOFTWARE SPECIFICATIONS - Baring Construction Services Website

**Project Name:** Baring Construction Services Website  
**Version:** 1.0  
**Date:** February 2026  
**Author:** Dale (Software QA Engineer & Web Developer)  
**Client:** Baring Construction Services

---

## 📋 Table of Contents

1. [Project Overview](#1-project-overview)
2. [Functional Requirements](#2-functional-requirements)
3. [Non-Functional Requirements](#3-non-functional-requirements)
4. [System Architecture](#4-system-architecture)
5. [Data Models](#5-data-models)
6. [API Endpoints](#6-api-endpoints)
7. [Page Specifications](#7-page-specifications)
8. [User Stories & Acceptance Criteria](#8-user-stories--acceptance-criteria)
9. [Third-Party Integrations](#9-third-party-integrations)
10. [Development Phases](#10-development-phases)
11. [Content Requirements](#11-content-requirements)
12. [Testing Strategy](#12-testing-strategy)
13. [Deployment Strategy](#13-deployment-strategy)
14. [Success Metrics](#14-success-metrics)
15. [Constraints & Assumptions](#15-constraints--assumptions)

---

## 1. Project Overview

### 1.1 Purpose

To create a professional, conversion-focused website for Baring Construction Services that:
- Establishes online credibility for a company handling ₱1M+ projects
- Generates qualified leads through contact and quote request forms
- Showcases completed projects across residential, commercial, and industrial sectors
- Provides comprehensive information about services offered
- Enables multi-regional reach (Metro Manila, Rizal, Pampanga)

### 1.2 Target Audience

**Primary Users:**
- **Property Owners** (25-55 years old) - Planning residential or commercial construction
- **Business Owners** (30-60 years old) - Requiring fit-out, renovation, or new commercial spaces
- **Developers** (35-65 years old) - Seeking reliable contractors for larger projects
- **Property Managers** - Looking for maintenance and renovation contractors

**User Characteristics:**
- 60% mobile users, 40% desktop
- Mix of tech-savvy and traditional users
- Budget range: ₱500K - ₱10M+ projects
- Decision makers and influencers (architects, engineers)

### 1.3 Business Goals

1. **Lead Generation:** Generate 10-20 qualified quote requests per month
2. **Brand Establishment:** Position as premium construction service provider
3. **Market Expansion:** Reach clients beyond Facebook-only audience
4. **Operational Efficiency:** Reduce time spent explaining services via automated FAQ/info
5. **Competitive Advantage:** Stand out from Facebook-only competitors

### 1.4 Success Metrics

| Metric | Target (3 months) | Target (6 months) | Target (12 months) |
|--------|------------------|-------------------|-------------------|
| Monthly Website Visitors | 500-800 | 1,000-1,500 | 2,000-3,000 |
| Quote Requests/Month | 5-10 | 10-20 | 20-30 |
| Conversion Rate | 2-3% | 3-4% | 4-5% |
| Avg. Session Duration | 2-3 min | 3-4 min | 4-5 min |
| Bounce Rate | <60% | <50% | <45% |
| Mobile Traffic | 55-65% | 60-70% | 65-75% |
| Organic Search Traffic | 10-20% | 30-40% | 50-60% |

---

## 2. Functional Requirements

### 2.1 Core Features (MVP - Phase 1)

#### FR-001: Navigation System
**Priority:** High | **Status:** Required

- **Description:** Multi-level navigation accessible on all devices
- **Requirements:**
  - Desktop: Horizontal navigation bar with dropdown menus
  - Mobile: Hamburger menu with full-screen overlay
  - Sticky header on scroll
  - Active page indication
  - Maximum 7 top-level items
  - Logo links to homepage
  - CTA button in navigation (Request Quote)

#### FR-002: Homepage
**Priority:** High | **Status:** Required

- **Hero Section:**
  - Full-width background image or video
  - Clear headline (value proposition)
  - Subheadline (supporting text)
  - 2 CTA buttons (primary + secondary)
  - Trust signals (stats badges)

- **Services Overview:**
  - Grid display of 6 service categories
  - Icon + title + short description
  - Link to detailed service pages

- **Featured Projects:**
  - Carousel or grid of 4 featured projects
  - Image + title + category + budget indicator
  - "View All Projects" CTA

- **Why Choose Us:**
  - 4 benefit cards with icons
  - Trust signals and differentiators

- **Process Overview:**
  - 5-step process visualization
  - Step number + title + description

- **Call-to-Action Section:**
  - Final CTA before footer
  - Contact information display

#### FR-003: About Page
**Priority:** High | **Status:** Required

- Company story (150-200 words)
- Mission statement
- Core values (4 items with icons)
- Capabilities list (8-10 items)
- Service area map
- Team section (if applicable)

#### FR-004: Services Pages
**Priority:** High | **Status:** Required

**Services Overview Page:**
- Grid of all service categories
- Each card: icon, title, description, "Learn More" button

**Individual Service Pages (6 pages):**
1. General Construction
2. Electrical Works
3. Civil & Structural Works
4. Architectural Services
5. MEPF Services
6. Specialized Services (Pools, Landscaping)

**Each Service Page Contains:**
- Hero section with service name
- Detailed description (200-300 words)
- Sub-services list
- Process overview
- Related projects (3-4 projects)
- FAQ section (3-5 questions)
- CTA: Request Quote for this service

#### FR-005: Projects/Portfolio Page
**Priority:** High | **Status:** Required

**Features:**
- Filter by category: All, Residential, Commercial, Educational, Industrial, Electrical
- Grid layout (3 columns desktop, 2 tablet, 1 mobile)
- Each project card:
  - Featured image
  - Project title
  - Location
  - Category badge
  - Budget indicator
  - Click to view details

**Project Detail Page:**
- Image gallery (5-10 images per project)
- Project information:
  - Title
  - Location
  - Category
  - Budget range
  - Duration
  - Completion date
  - Client type (residential/commercial/etc.)
  - Services provided (list)
  - Detailed description (300-500 words)
  - Challenges & solutions (if applicable)
  - Before/After comparison (if applicable)
- Related projects section
- CTA: Request Similar Project

#### FR-006: Contact Page
**Priority:** High | **Status:** Required

**Contact Information Display:**
- Phone number (clickable on mobile)
- Email address (mailto link)
- Physical address (if available)
- Business hours
- Service areas list

**Contact Form:**
- Fields:
  - Name (required, text, 2-100 chars)
  - Email (required, email validation)
  - Phone (required, tel format, Philippine format)
  - Project Type (required, dropdown)
  - Message (required, textarea, 10-1000 chars)
- Submit button
- Success/error message display
- Form validation (client + server side)

**Additional Elements:**
- Google Maps embed (if address available)
- Social media links (Facebook, Instagram)
- WhatsApp click-to-chat button

#### FR-007: Quote Request Page
**Priority:** High | **Status:** Required

**Multi-section Form:**

**Section 1: Personal Information**
- Full Name (required)
- Email (required, validation)
- Phone Number (required, Philippine format)
- Company (optional)

**Section 2: Project Details**
- Project Type (required, dropdown with 9 options)
- Project Location (required, text)
- Estimated Budget (required, dropdown with 6 ranges)
- Preferred Timeline (required, dropdown with 5 options)
- Project Description (required, textarea, 50-2000 chars)
- File Upload (optional, accepts .pdf, .jpg, .png, .dwg, max 5MB per file, max 5 files)

**Features:**
- Form validation (real-time)
- Progress indicator (if multi-step)
- File upload with preview
- Submit button (disabled until valid)
- Success page after submission
- Email confirmation to user
- Admin notification email

**What Happens Next Section:**
- 4-step process explanation
- Expected response time (24-48 hours)

#### FR-008: Search Functionality
**Priority:** Medium | **Status:** Phase 2

- Search bar in navigation
- Search projects by keyword
- Search services by keyword
- Display results in grid format

#### FR-009: Blog/News Section
**Priority:** Low | **Status:** Phase 2

- List of blog posts
- Categories: Construction Tips, Company News, Project Updates
- Individual blog post pages
- Share buttons (Facebook, LinkedIn)

### 2.2 User Interaction Features

#### FR-010: Image Gallery
**Priority:** High | **Status:** Required

- Lightbox/modal view on click
- Navigation arrows (previous/next)
- Thumbnail strip
- Close button (X)
- Swipe gesture on mobile
- Keyboard navigation (arrow keys, ESC)

#### FR-011: Mobile Menu
**Priority:** High | **Status:** Required

- Hamburger icon (☰)
- Full-screen overlay menu
- Smooth slide-in animation
- Close button (X)
- Nested menus (if applicable)
- CTA button at bottom

#### FR-012: Form Validation
**Priority:** High | **Status:** Required

**Client-Side:**
- Real-time validation on blur
- Inline error messages
- Field highlighting (red border)
- Submit button state management

**Server-Side:**
- Input sanitization
- Required field validation
- Format validation (email, phone)
- File type/size validation
- XSS prevention

#### FR-013: Loading States
**Priority:** Medium | **Status:** Required

- Skeleton screens for page loads
- Loading spinner for form submissions
- Progress bars for file uploads
- Disabled button states during processing

#### FR-014: Responsive Behavior
**Priority:** High | **Status:** Required

**Breakpoints:**
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

**Responsive Features:**
- Fluid typography (scales with viewport)
- Flexible grids (1/2/3 columns)
- Touch-friendly tap targets (min 44x44px)
- Optimized images for each breakpoint

---

## 3. Non-Functional Requirements

### 3.1 Performance Requirements

**NFR-001: Page Load Speed**
- First Contentful Paint (FCP): < 1.8 seconds
- Largest Contentful Paint (LCP): < 2.5 seconds
- Time to Interactive (TTI): < 3.5 seconds
- First Input Delay (FID): < 100ms
- Cumulative Layout Shift (CLS): < 0.1

**NFR-002: Resource Optimization**
- Total page weight (homepage): < 2MB
- Image optimization: WebP format, progressive JPEG fallback
- CSS bundle: < 100KB
- JavaScript bundle: < 200KB (per route)
- Font loading: FOUT strategy, max 2 font families

**NFR-003: Caching Strategy**
- Static assets: 1 year cache
- HTML pages: 1 hour cache
- API responses: No cache (dynamic)
- Images: 30 days cache

### 3.2 Security Requirements

**NFR-004: Data Protection**
- All connections over HTTPS/TLS 1.3
- SSL certificate (Let's Encrypt or commercial)
- Secure headers (CSP, X-Frame-Options, HSTS)
- No sensitive data in URLs
- Input sanitization on all forms
- Rate limiting on form submissions (5 per hour per IP)

**NFR-005: Form Security**
- CSRF token validation
- reCAPTCHA v3 on contact/quote forms
- Server-side validation (never trust client)
- Email validation (format + MX record check)
- File upload restrictions (type, size, scanning)

**NFR-006: Privacy Compliance**
- Privacy policy page
- Cookie consent banner
- GDPR compliance (data collection transparency)
- User data encryption at rest
- No third-party tracking without consent

### 3.3 Accessibility Requirements

**NFR-007: WCAG 2.1 Level AA Compliance**
- Color contrast ratio: 4.5:1 minimum (normal text)
- Color contrast ratio: 3:1 minimum (large text, UI components)
- Keyboard navigation: All interactive elements accessible
- Focus indicators: Visible on all focusable elements
- Alt text: All images have descriptive alt attributes
- Form labels: All inputs properly labeled
- ARIA attributes: Used appropriately for complex widgets
- Skip links: "Skip to main content" link

**NFR-008: Screen Reader Support**
- Semantic HTML structure
- Proper heading hierarchy (H1 → H6)
- Landmarks (header, nav, main, footer)
- ARIA live regions for dynamic content
- ARIA labels for icon-only buttons

### 3.4 Browser Compatibility

**NFR-009: Supported Browsers**

| Browser | Version | Support Level |
|---------|---------|---------------|
| Chrome | Last 2 versions | Full |
| Firefox | Last 2 versions | Full |
| Safari | Last 2 versions | Full |
| Edge | Last 2 versions | Full |
| Mobile Safari (iOS) | iOS 14+ | Full |
| Chrome Mobile (Android) | Android 10+ | Full |
| Internet Explorer 11 | — | Not Supported |

### 3.5 Scalability Requirements

**NFR-010: Traffic Capacity**
- Handle 1,000 concurrent users
- Support 10,000 page views per day
- Scale horizontally (add more server instances)
- Database connection pooling

**NFR-011: Content Scalability**
- Support up to 100 projects
- Support up to 20 service pages
- Handle 50 blog posts (Phase 2)
- Image storage: 10GB initial, expandable

### 3.6 Reliability Requirements

**NFR-012: Uptime & Availability**
- 99.9% uptime (< 8 hours downtime per year)
- Automated health checks every 5 minutes
- Automatic failover for critical services
- Backup frequency: Daily (retain 30 days)

**NFR-013: Error Handling**
- Graceful degradation (features fail independently)
- User-friendly error messages
- 404 page with navigation back to site
- 500 error page with contact information
- Error logging to monitoring service

### 3.7 SEO Requirements

**NFR-014: On-Page SEO**
- Unique meta titles (50-60 characters)
- Unique meta descriptions (150-160 characters)
- Semantic HTML (proper heading structure)
- Schema.org markup (Organization, LocalBusiness)
- Open Graph tags (Facebook sharing)
- Twitter Card tags
- Canonical URLs
- XML sitemap (auto-generated)
- robots.txt file

**NFR-015: Technical SEO**
- Mobile-friendly (Google Mobile-First Index)
- HTTPS everywhere
- Clean URL structure (no query parameters)
- Breadcrumb navigation
- Internal linking strategy
- Image alt text and file names
- Page speed optimization
- Structured data validation (Google Rich Results)

---

## 4. System Architecture

### 4.1 High-Level Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    CLIENT LAYER                         │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐ │
│  │   Browser    │  │   Mobile     │  │   Tablet     │ │
│  │  (Desktop)   │  │   (iOS)      │  │  (Android)   │ │
│  └──────────────┘  └──────────────┘  └──────────────┘ │
└────────────────────────┬────────────────────────────────┘
                         │ HTTPS
                         ▼
┌─────────────────────────────────────────────────────────┐
│                  CDN LAYER (Vercel)                     │
│  ┌──────────────────────────────────────────────────┐  │
│  │  Static Assets (Images, CSS, JS, Fonts)         │  │
│  └──────────────────────────────────────────────────┘  │
└────────────────────────┬────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────┐
│              APPLICATION LAYER (Next.js 14)             │
│  ┌──────────────────────────────────────────────────┐  │
│  │              App Router (RSC)                    │  │
│  │  ┌────────────┐  ┌────────────┐  ┌───────────┐ │  │
│  │  │   Pages    │  │ Components │  │    API    │ │  │
│  │  │  (Server)  │  │(Client/Srv)│  │  Routes   │ │  │
│  │  └────────────┘  └────────────┘  └───────────┘ │  │
│  └──────────────────────────────────────────────────┘  │
└────────────────────────┬────────────────────────────────┘
                         │
          ┌──────────────┼──────────────┐
          │              │              │
          ▼              ▼              ▼
┌──────────────┐ ┌──────────────┐ ┌──────────────┐
│   Email      │ │   Analytics  │ │   Storage    │
│   Service    │ │   (GA4)      │ │   (Vercel)   │
│  (Resend)    │ │              │ │              │
└──────────────┘ └──────────────┘ └──────────────┘
```

### 4.2 Technology Stack

**Frontend:**
- Framework: Next.js 14.2+ (App Router)
- Language: JavaScript (TypeScript optional but recommended)
- Styling: Tailwind CSS 3.4+
- UI Components: Custom components + Radix UI primitives
- Icons: Lucide React
- Forms: React Hook Form + Zod validation
- Animations: Framer Motion (optional)
- Image Optimization: Next.js Image component

**Backend (API Routes):**
- Runtime: Node.js (Next.js API Routes)
- Validation: Zod
- Email: Resend API or Nodemailer

**Database (Optional - Phase 2):**
- For blog/CMS: PostgreSQL (Vercel Postgres) or MongoDB

**Deployment & Hosting:**
- Platform: Vercel
- Domain: Custom domain (e.g., baringconstruction.ph)
- CDN: Vercel Edge Network
- Environment: Production + Preview

**Development Tools:**
- Version Control: Git + GitHub
- Package Manager: npm or pnpm
- Code Quality: ESLint + Prettier
- Testing: Jest + React Testing Library + Playwright
- CI/CD: Vercel automatic deployments

**Third-Party Services:**
- Email Delivery: Resend (transactional emails)
- Analytics: Google Analytics 4
- Search Console: Google Search Console
- Maps: Google Maps Embed API
- Forms: reCAPTCHA v3
- Monitoring: Vercel Analytics (optional: Sentry)

### 4.3 File Structure

```
baring-construction/
├── public/
│   ├── images/
│   │   ├── logo/
│   │   │   ├── logo.svg
│   │   │   └── logo-white.svg
│   │   ├── hero/
│   │   │   └── hero-bg.jpg
│   │   ├── projects/
│   │   │   ├── bannister-academy/
│   │   │   ├── 2-storey-residence/
│   │   │   ├── dali-store/
│   │   │   ├── makati-electrical/
│   │   │   └── ... (more projects)
│   │   ├── services/
│   │   │   ├── general-construction.jpg
│   │   │   ├── electrical-works.jpg
│   │   │   └── ... (more services)
│   │   └── team/
│   │       └── ... (if team photos)
│   ├── favicon.ico
│   └── robots.txt
│
├── src/
│   ├── app/
│   │   ├── (routes)/
│   │   │   ├── page.jsx                    # Homepage
│   │   │   ├── about/
│   │   │   │   └── page.jsx
│   │   │   ├── services/
│   │   │   │   ├── page.jsx               # Services overview
│   │   │   │   ├── general-construction/page.jsx
│   │   │   │   ├── electrical-works/page.jsx
│   │   │   │   ├── civil-structural/page.jsx
│   │   │   │   ├── architectural/page.jsx
│   │   │   │   ├── mepf-services/page.jsx
│   │   │   │   └── specialized/page.jsx
│   │   │   ├── projects/
│   │   │   │   ├── page.jsx               # Projects listing
│   │   │   │   └── [slug]/page.jsx        # Project detail
│   │   │   ├── contact/
│   │   │   │   └── page.jsx
│   │   │   ├── quote/
│   │   │   │   └── page.jsx
│   │   │   └── privacy-policy/
│   │   │       └── page.jsx
│   │   │
│   │   ├── api/
│   │   │   ├── contact/
│   │   │   │   └── route.js               # POST /api/contact
│   │   │   └── quote/
│   │   │       └── route.js               # POST /api/quote
│   │   │
│   │   ├── layout.jsx                      # Root layout
│   │   ├── not-found.jsx                   # 404 page
│   │   ├── error.jsx                       # Error boundary
│   │   └── globals.css                     # Global styles
│   │
│   ├── components/
│   │   ├── ui/                             # Reusable UI components
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   ├── Input.jsx
│   │   │   ├── Textarea.jsx
│   │   │   ├── Select.jsx
│   │   │   ├── Badge.jsx
│   │   │   ├── Modal.jsx
│   │   │   └── Spinner.jsx
│   │   │
│   │   ├── layout/                         # Layout components
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── MobileMenu.jsx
│   │   │   └── Container.jsx
│   │   │
│   │   ├── sections/                       # Homepage sections
│   │   │   ├── Hero.jsx
│   │   │   ├── ServicesGrid.jsx
│   │   │   ├── FeaturedProjects.jsx
│   │   │   ├── WhyChooseUs.jsx
│   │   │   ├── ProcessSteps.jsx
│   │   │   ├── Testimonials.jsx
│   │   │   └── CallToAction.jsx
│   │   │
│   │   ├── forms/                          # Form components
│   │   │   ├── ContactForm.jsx
│   │   │   ├── QuoteForm.jsx
│   │   │   ├── FileUpload.jsx
│   │   │   └── FormField.jsx
│   │   │
│   │   └── project/                        # Project-specific
│   │       ├── ProjectCard.jsx
│   │       ├── ProjectFilter.jsx
│   │       └── ProjectGallery.jsx
│   │
│   ├── lib/
│   │   ├── utils.js                        # Utility functions
│   │   ├── constants.js                    # App constants
│   │   ├── validations.js                  # Zod schemas
│   │   ├── email.js                        # Email service
│   │   └── analytics.js                    # GA4 helpers
│   │
│   ├── data/
│   │   ├── projects.js                     # Project data
│   │   ├── services.js                     # Services data
│   │   ├── testimonials.js                 # Testimonials
│   │   └── navigation.js                   # Nav structure
│   │
│   └── types/
│       └── index.ts                        # TypeScript types (if using TS)
│
├── .env.local                              # Local env variables
├── .env.example                            # Example env file
├── .eslintrc.json                          # ESLint config
├── .prettierrc                             # Prettier config
├── next.config.js                          # Next.js config
├── tailwind.config.js                      # Tailwind config
├── postcss.config.js                       # PostCSS config
├── package.json
├── README.md
├── BEST_PRACTICES.md
├── UX_DESIGN_BEST_PRACTICES.md
└── SOFTWARE_SPECIFICATIONS.md
```

### 4.4 Data Flow

**Contact Form Submission:**
```
1. User fills form → 2. Client validation (Zod) → 3. Submit button enabled
                                  ↓
4. POST /api/contact → 5. Server validation → 6. Send email (Resend)
                                  ↓
7. Store submission (optional) → 8. Return success response
                                  ↓
9. Show success message → 10. Clear form → 11. Track event (GA4)
```

**Page Navigation:**
```
1. User clicks link → 2. Next.js route change (client-side)
                                  ↓
3. Check if page cached → 4. Fetch from cache OR fetch from server
                                  ↓
5. Server Component renders → 6. Stream HTML to client
                                  ↓
7. Hydrate Client Components → 8. Page interactive
```

---

## 5. Data Models

### 5.1 Project Model

```javascript
Project {
  id: string,                    // Unique identifier (e.g., "proj-001")
  slug: string,                  // URL-friendly name (e.g., "bannister-academy")
  title: string,                 // Project name
  category: enum {               // Project type
    'residential',
    'commercial',
    'educational',
    'industrial',
    'electrical'
  },
  location: string,              // City, Province
  budget: string,                // e.g., "₱2.5M+", "₱1M - ₱3M"
  duration: string,              // e.g., "4 months", "6 weeks"
  completionDate: Date,          // ISO date string
  status: enum {                 // Project status
    'completed',
    'ongoing',
    'upcoming'
  },
  client: string,                // Client name (optional, can be anonymous)
  featured: boolean,             // Show on homepage?
  
  images: Array<{
    url: string,                 // Image path
    alt: string,                 // Alt text
    caption: string,             // Optional caption
    isPrimary: boolean           // Featured image?
  }>,
  
  services: Array<string>,       // Services provided
                                 // e.g., ["Plastering", "Electrical Works"]
  
  description: string,           // Main project description (300-500 words)
  
  challenges: string | null,     // Challenges faced (optional)
  solutions: string | null,      // Solutions implemented (optional)
  
  highlights: Array<string>,     // Key achievements
                                 // e.g., ["Completed 2 weeks ahead", "Zero safety incidents"]
  
  specifications: {              // Technical specs (optional)
    area: string | null,         // e.g., "350 sqm"
    floors: number | null,       // Number of floors
    rooms: number | null,        // Number of rooms (if residential)
    capacity: string | null      // e.g., "300 students" (if applicable)
  },
  
  testimonial: {                 // Client testimonial (optional)
    quote: string,
    author: string,
    role: string                 // e.g., "Property Owner", "Operations Manager"
  } | null,
  
  relatedProjects: Array<string>, // Array of project IDs
  
  metadata: {                    // SEO metadata
    metaTitle: string,
    metaDescription: string,
    keywords: Array<string>
  }
}
```

**Example:**
```javascript
{
  id: "proj-001",
  slug: "bannister-academy-antipolo",
  title: "Bannister Academy",
  category: "educational",
  location: "Antipolo, Rizal",
  budget: "₱2.5M+",
  duration: "4 months",
  completionDate: "2024-11-15",
  status: "completed",
  client: "Bannister Academy Foundation",
  featured: true,
  
  images: [
    {
      url: "/images/projects/bannister-academy/main.jpg",
      alt: "Bannister Academy main building exterior",
      caption: "Completed educational facility in Antipolo",
      isPrimary: true
    },
    // ... more images
  ],
  
  services: [
    "Plastering",
    "Installation of form blocks",
    "Concrete molding and arches",
    "Land leveling"
  ],
  
  description: "Complete construction of educational facility...",
  
  challenges: "Working with specialized architectural elements...",
  solutions: "Deployed experienced team for custom fabrication...",
  
  highlights: [
    "Completed on schedule despite complex architectural requirements",
    "Zero safety incidents throughout construction",
    "Custom concrete arches fabricated on-site"
  ],
  
  specifications: {
    area: "450 sqm",
    floors: 2,
    rooms: 12,
    capacity: "200 students"
  },
  
  testimonial: null,
  
  relatedProjects: ["proj-002", "proj-005"],
  
  metadata: {
    metaTitle: "Bannister Academy Construction Project - Antipolo, Rizal",
    metaDescription: "Complete construction of Bannister Academy educational facility including plastering, concrete molding, and custom architectural elements.",
    keywords: ["educational construction", "school building", "antipolo construction", "concrete work"]
  }
}
```

### 5.2 Service Model

```javascript
Service {
  id: string,                    // Unique identifier
  slug: string,                  // URL slug (e.g., "electrical-works")
  title: string,                 // Service name
  icon: string,                  // Icon name (from Lucide)
  category: string,              // Parent category (if applicable)
  featured: boolean,             // Show on homepage?
  order: number,                 // Display order
  
  overview: string,              // Main description (200-300 words)
  
  subServices: Array<{
    title: string,
    description: string,
    features: Array<string>
  }>,
  
  process: Array<{
    step: number,
    title: string,
    description: string
  }>,
  
  relatedProjects: Array<string>, // Project IDs
  
  faqs: Array<{
    question: string,
    answer: string
  }>,
  
  metadata: {
    metaTitle: string,
    metaDescription: string,
    keywords: Array<string>
  }
}
```

**Example:**
```javascript
{
  id: "svc-002",
  slug: "electrical-works",
  title: "Electrical Works",
  icon: "Zap",
  category: "construction",
  featured: true,
  order: 2,
  
  overview: "Our electrical works division provides complete electrical solutions...",
  
  subServices: [
    {
      title: "Commercial Electrical",
      description: "Complete electrical installations for commercial facilities",
      features: [
        "Panel board installation",
        "Lighting systems",
        "Power distribution",
        "Emergency power systems"
      ]
    },
    // ... more sub-services
  ],
  
  process: [
    {
      step: 1,
      title: "Site Assessment",
      description: "Evaluate electrical requirements and existing infrastructure"
    },
    // ... more steps
  ],
  
  relatedProjects: ["proj-004", "proj-006"],
  
  faqs: [
    {
      question: "Do you provide electrical design services?",
      answer: "Yes, we work with licensed electrical engineers to provide complete design and installation services."
    },
    // ... more FAQs
  ],
  
  metadata: {
    metaTitle: "Electrical Works & Installation Services - Baring Construction",
    metaDescription: "Professional electrical installation services including panel boards, cable systems, and industrial power distribution across Metro Manila.",
    keywords: ["electrical contractor", "electrical installation", "panel board", "cable tray"]
  }
}
```

### 5.3 Testimonial Model

```javascript
Testimonial {
  id: string,
  author: string,                // Client name
  role: string,                  // e.g., "Property Owner", "Business Manager"
  company: string | null,        // Company name (if commercial client)
  projectRef: string | null,     // Related project ID
  rating: number,                // 1-5 stars
  quote: string,                 // Testimonial text (100-300 words)
  date: Date,                    // Date given
  featured: boolean,             // Show on homepage?
  avatar: string | null,         // Avatar image URL (optional)
  verified: boolean              // Verified client?
}
```

### 5.4 Contact Form Submission Model

```javascript
ContactSubmission {
  id: string,                    // Auto-generated UUID
  timestamp: Date,               // Submission time
  name: string,
  email: string,
  phone: string,
  projectType: string,
  message: string,
  source: string,                // Page submitted from
  userAgent: string,             // Browser info
  ipAddress: string,             // User IP (for spam prevention)
  status: enum {
    'new',
    'contacted',
    'converted',
    'spam'
  }
}
```

### 5.5 Quote Request Model

```javascript
QuoteRequest {
  id: string,
  timestamp: Date,
  
  // Personal info
  name: string,
  email: string,
  phone: string,
  company: string | null,
  
  // Project info
  projectType: string,           // Selected from dropdown
  location: string,
  budget: string,                // Budget range selected
  timeline: string,              // Timeline preference
  description: string,           // Project description
  
  // Uploaded files
  files: Array<{
    filename: string,
    url: string,                 // Uploaded file URL
    size: number,                // File size in bytes
    type: string                 // MIME type
  }>,
  
  // Metadata
  source: string,                // Page submitted from
  userAgent: string,
  ipAddress: string,
  referrer: string | null,       // Where they came from
  
  status: enum {
    'new',
    'quoted',
    'converted',
    'declined',
    'spam'
  },
  
  notes: string | null           // Admin notes
}
```

### 5.6 Navigation Model

```javascript
NavItem {
  label: string,                 // Display text
  href: string,                  // URL
  icon: string | null,           // Icon name (optional)
  external: boolean,             // Opens in new tab?
  dropdown: Array<NavItem> | null, // Sub-menu items
  cta: boolean,                  // Is this a CTA button?
  mobileOnly: boolean,           // Show only on mobile?
  desktopOnly: boolean           // Show only on desktop?
}
```

---

## 6. API Endpoints

### 6.1 Contact Form API

**Endpoint:** `POST /api/contact`

**Request Body:**
```json
{
  "name": "Juan Dela Cruz",
  "email": "juan@example.com",
  "phone": "+63 912 345 6789",
  "projectType": "Residential Construction",
  "message": "I'm interested in building a 2-storey house in Antipolo. Can we discuss the timeline and budget?"
}
```

**Validation Schema (Zod):**
```javascript
const ContactSchema = z.object({
  name: z.string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters")
    .regex(/^[a-zA-Z\s\-\.]+$/, "Name contains invalid characters"),
  
  email: z.string()
    .email("Invalid email address")
    .max(100, "Email too long"),
  
  phone: z.string()
    .regex(/^(\+63|0)?[0-9\s\-()]{10,}$/, "Invalid Philippine phone number"),
  
  projectType: z.enum([
    "Residential Construction",
    "Commercial Construction",
    "Electrical Works",
    "Civil & Structural Works",
    "MEPF Services",
    "Renovation/Fit-out",
    "Other"
  ]),
  
  message: z.string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be less than 1000 characters")
});
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "Thank you for your inquiry! We'll respond within 24 hours.",
  "submissionId": "sub-abc123xyz"
}
```

**Error Response (400):**
```json
{
  "success": false,
  "message": "Validation error",
  "errors": [
    {
      "field": "email",
      "message": "Invalid email address"
    },
    {
      "field": "phone",
      "message": "Invalid Philippine phone number"
    }
  ]
}
```

**Error Response (429 - Rate Limit):**
```json
{
  "success": false,
  "message": "Too many requests. Please try again in 1 hour.",
  "retryAfter": 3600
}
```

**Error Response (500):**
```json
{
  "success": false,
  "message": "An error occurred. Please try again or contact us directly.",
  "errorId": "err-def456uvw"
}
```

**Backend Flow:**
1. Receive and parse request body
2. Validate with Zod schema
3. Check rate limit (max 5 per hour per IP)
4. Sanitize input (remove HTML, scripts)
5. Verify reCAPTCHA token (if implemented)
6. Send email to admin (info@baringconstruction.ph)
7. Send confirmation email to user
8. Store submission in database (optional)
9. Log submission for analytics
10. Return success response

**Email Template (Admin Notification):**
```
Subject: New Contact Form Submission - [Project Type]

Name: Juan Dela Cruz
Email: juan@example.com
Phone: +63 912 345 6789
Project Type: Residential Construction

Message:
I'm interested in building a 2-storey house in Antipolo. Can we discuss the timeline and budget?

---
Submitted: Feb 3, 2026 at 2:30 PM
Submission ID: sub-abc123xyz
Source: https://baringconstruction.ph/contact
```

**Email Template (User Confirmation):**
```
Subject: Thank You for Contacting Baring Construction Services

Hi Juan,

Thank you for reaching out to Baring Construction Services! We've received your inquiry about Residential Construction.

Our team will review your message and get back to you within 24 hours. In the meantime, feel free to:

- Browse our portfolio: https://baringconstruction.ph/projects
- Learn about our services: https://baringconstruction.ph/services
- Call us directly: +63 XXX XXX XXXX

We look forward to working with you!

Best regards,
Baring Construction Services Team
```

### 6.2 Quote Request API

**Endpoint:** `POST /api/quote`

**Request Body (multipart/form-data):**
```json
{
  "name": "Maria Santos",
  "email": "maria@business.com",
  "phone": "+63 917 888 9999",
  "company": "Santos Enterprises",
  "projectType": "Commercial Construction",
  "location": "Makati City",
  "budget": "₱3M - ₱5M",
  "timeline": "3-6 months",
  "description": "We need a complete fit-out for our new office space (200 sqm) including electrical, MEPF, and furniture installation.",
  "files": [File, File]  // Array of uploaded files
}
```

**Validation Schema:**
```javascript
const QuoteSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email().max(100),
  phone: z.string().regex(/^(\+63|0)?[0-9\s\-()]{10,}$/),
  company: z.string().max(100).optional(),
  
  projectType: z.enum([
    "Residential Construction",
    "Commercial Construction",
    "Electrical Works",
    "Civil & Structural Works",
    "MEPF Services",
    "Renovation/Fit-out",
    "Swimming Pool & Landscaping",
    "Industrial Projects",
    "Other"
  ]),
  
  location: z.string().min(3).max(200),
  
  budget: z.enum([
    "₱500K - ₱1M",
    "₱1M - ₱3M",
    "₱3M - ₱5M",
    "₱5M - ₱10M",
    "₱10M+",
    "Not Sure Yet"
  ]),
  
  timeline: z.enum([
    "ASAP (Within 1 month)",
    "1-3 months",
    "3-6 months",
    "6+ months",
    "Flexible"
  ]),
  
  description: z.string().min(50).max(2000),
  
  files: z.array(z.any()).max(5).optional()
});
```

**File Validation:**
- Allowed types: .pdf, .jpg, .jpeg, .png, .dwg
- Max file size: 5MB per file
- Max total files: 5
- Scan for malware (if possible)

**Success Response (200):**
```json
{
  "success": true,
  "message": "Quote request submitted successfully! We'll send you a detailed quotation within 48 hours.",
  "quoteId": "quote-xyz789abc",
  "estimatedResponse": "2026-02-05T14:30:00Z"
}
```

**Backend Flow:**
1. Parse multipart form data
2. Validate text fields
3. Validate files (type, size)
4. Upload files to storage (Vercel Blob or S3)
5. Send detailed email to admin with file attachments
6. Send confirmation email to user
7. Store quote request in database
8. Create task in project management tool (optional)
9. Return success response

**Email to Admin (Quote Request):**
```
Subject: NEW QUOTE REQUEST - Commercial Construction - ₱3M-₱5M

=== CLIENT INFORMATION ===
Name: Maria Santos
Email: maria@business.com
Phone: +63 917 888 9999
Company: Santos Enterprises

=== PROJECT DETAILS ===
Type: Commercial Construction
Location: Makati City
Budget: ₱3M - ₱5M
Timeline: 3-6 months

Description:
We need a complete fit-out for our new office space (200 sqm) including electrical, MEPF, and furniture installation.

Attached Files: 2
1. floor-plan.pdf (1.2 MB)
2. design-reference.jpg (850 KB)

---
Quote ID: quote-xyz789abc
Submitted: Feb 3, 2026 at 3:45 PM
Source: https://baringconstruction.ph/quote

ACTION REQUIRED: Prepare quotation within 48 hours
```

### 6.3 Projects API (Optional - Phase 2)

**Endpoint:** `GET /api/projects`

**Query Parameters:**
- `category`: Filter by category (residential, commercial, etc.)
- `limit`: Number of results (default: 10, max: 50)
- `offset`: Pagination offset
- `featured`: Boolean (only featured projects)

**Example Request:**
```
GET /api/projects?category=residential&limit=6&featured=true
```

**Response (200):**
```json
{
  "success": true,
  "data": [
    {
      "id": "proj-001",
      "slug": "bannister-academy-antipolo",
      "title": "Bannister Academy",
      "category": "educational",
      "location": "Antipolo, Rizal",
      "budget": "₱2.5M+",
      "featuredImage": "/images/projects/bannister-academy/main.jpg",
      "excerpt": "Complete construction of educational facility..."
    },
    // ... more projects
  ],
  "pagination": {
    "total": 42,
    "limit": 6,
    "offset": 0,
    "hasMore": true
  }
}
```

**Endpoint:** `GET /api/projects/[slug]`

**Example Request:**
```
GET /api/projects/bannister-academy-antipolo
```

**Response (200):**
```json
{
  "success": true,
  "data": {
    // Full project object (see Data Models section)
  }
}
```

---

## 7. Page Specifications

### 7.1 Homepage

**URL:** `/`

**Purpose:** First impression, showcase value proposition, drive conversions

**Sections:**

1. **Hero Section**
   - Full-width background (image or video)
   - Headline: "Building Excellence Across Metro Manila & Beyond"
   - Subheadline: "Premium construction services from residential homes to commercial facilities"
   - Primary CTA: "Request Free Quote" (links to /quote)
   - Secondary CTA: "View Our Projects" (links to /projects)
   - Trust badges: "50+ Projects", "3 Regions", "100% Satisfaction"

2. **Services Overview**
   - Section title: "Our Services"
   - Grid: 3 columns (desktop), 2 (tablet), 1 (mobile)
   - 6 service cards:
     - Icon (from Lucide)
     - Service name
     - Short description (40-60 words)
     - "Learn More" link (to service page)

3. **Featured Projects**
   - Section title: "Featured Projects"
   - Carousel or grid of 4 projects
   - Each shows: image, title, category, budget indicator
   - "View All Projects" button (links to /projects)

4. **Why Choose Us**
   - Section title: "Why Choose Baring Construction"
   - 4 benefit cards:
     - Premium Quality
     - Multi-Regional Service
     - Experienced Team
     - Complete Solutions
   - Icon + title + description for each

5. **Process Overview**
   - Section title: "Our Process"
   - 5 steps in horizontal timeline (desktop) or vertical (mobile)
   - Each step: number, title, description

6. **Testimonials** (if available)
   - Section title: "What Our Clients Say"
   - 3 testimonial cards
   - Each: quote, client name, project type, 5-star rating

7. **Final CTA**
   - Headline: "Ready to Start Your Project?"
   - Description: "Get a free consultation and detailed quotation"
   - CTA button: "Request Free Quote"
   - Contact info: phone, email

**SEO:**
- Title: "Baring Construction Services | Premium Construction in Metro Manila"
- Description: "Professional construction services for residential, commercial, and industrial projects. Serving Metro Manila, Rizal, and Pampanga. Get a free quote today."
- Keywords: construction Manila, general contractor, fit-out services, electrical works
- Schema: Organization, LocalBusiness

**Performance Target:**
- LCP: < 2.0s
- CLS: < 0.05
- FID: < 50ms

### 7.2 About Page

**URL:** `/about`

**Sections:**

1. **Hero**
   - Title: "Building Your Vision with Excellence"
   - Subtitle: "Professional construction services across Metro Manila and beyond"
   - Background image

2. **Company Story**
   - Title: "Our Story"
   - Content: 150-200 words about company founding, mission, growth
   - Image: Team photo or project site

3. **Mission & Values**
   - Mission statement
   - 4 core values with icons:
     - Quality First
     - Integrity
     - Timeliness
     - Client Focus

4. **Capabilities**
   - Title: "Our Capabilities"
   - List of 8-10 capabilities
   - Organized by category

5. **Service Areas**
   - Title: "Where We Serve"
   - 3 regions:
     - Metro Manila (with cities)
     - Rizal (with cities)
     - Pampanga (with cities)
   - Optional: Interactive map

6. **Team** (Optional - Phase 2)
   - Team member cards
   - Photo, name, role, brief bio

7. **CTA**
   - "Let's Work Together"
   - Link to quote page

**SEO:**
- Title: "About Baring Construction Services | Our Story & Mission"
- Description: "Learn about Baring Construction Services - our mission, values, and commitment to delivering exceptional construction projects across Metro Manila, Rizal, and Pampanga."

### 7.3 Services Overview Page

**URL:** `/services`

**Sections:**

1. **Hero**
   - Title: "Our Services"
   - Subtitle: "Comprehensive construction solutions for every need"

2. **Services Grid**
   - 6 service cards (larger than homepage version)
   - Each card:
     - Icon
     - Service name
     - Longer description (100-150 words)
     - Key features list (4-5 items)
     - "View Details" button

3. **Why Choose Our Services**
   - Differentiators
   - Quality assurance
   - Warranty information

4. **CTA**
   - "Not Sure Which Service You Need?"
   - "Request a Consultation" button

**SEO:**
- Title: "Construction Services | Baring Construction Services"
- Description: "Complete construction services including general construction, electrical works, civil & structural, MEPF, and specialized projects across Metro Manila."

### 7.4 Individual Service Pages

**URL:** `/services/[slug]` (6 pages)

**Example:** `/services/electrical-works`

**Sections:**

1. **Hero**
   - Service name as title
   - Brief tagline
   - Background image related to service
   - Quick facts: pricing range, typical duration, service areas

2. **Overview**
   - Detailed description (200-300 words)
   - What's included
   - Who it's for

3. **Sub-Services**
   - 3-4 sub-service cards
   - Each with title, description, features list

4. **Process**
   - Step-by-step process (5-7 steps)
   - Timeline estimate

5. **Related Projects**
   - 3-4 projects that used this service
   - Links to project detail pages

6. **FAQ**
   - 3-5 common questions
   - Accordion format

7. **CTA**
   - "Request a Quote for [Service Name]"
   - Link to quote page with service pre-selected

**SEO (example for Electrical Works):**
- Title: "Electrical Works & Installation Services | Baring Construction"
- Description: "Professional electrical installation services including panel boards, cable systems, and industrial power distribution. Licensed electricians serving Metro Manila, Rizal, and Pampanga."
- Schema: Service

### 7.5 Projects Listing Page

**URL:** `/projects`

**Sections:**

1. **Hero**
   - Title: "Our Projects"
   - Subtitle: "Browse our portfolio of completed construction projects"

2. **Filter Bar**
   - Category filter: All, Residential, Commercial, Educational, Industrial, Electrical
   - (Phase 2: Search input, budget filter, location filter)

3. **Projects Grid**
   - 3 columns (desktop), 2 (tablet), 1 (mobile)
   - Pagination or infinite scroll
   - Each project card:
     - Featured image (hover effect)
     - Title
     - Location
     - Category badge
     - Budget indicator
     - "View Details" button

4. **Load More / Pagination**
   - Button to load more projects
   - Or pagination numbers

5. **CTA**
   - "Have a Project in Mind?"
   - "Request a Quote" button

**SEO:**
- Title: "Construction Projects Portfolio | Baring Construction Services"
- Description: "View our completed construction projects including residential, commercial, educational, and industrial buildings across Metro Manila, Rizal, and Pampanga."

### 7.6 Project Detail Page

**URL:** `/projects/[slug]`

**Example:** `/projects/bannister-academy-antipolo`

**Sections:**

1. **Hero**
   - Project title
   - Location
   - Category badge
   - Featured image (large)

2. **Project Info Bar**
   - Budget
   - Duration
   - Completion date
   - Services provided (badges)

3. **Description**
   - Detailed project description (300-500 words)
   - Client requirements
   - Scope of work

4. **Image Gallery**
   - 5-10 project images
   - Lightbox on click
   - Before/after comparison (if applicable)

5. **Key Highlights**
   - Bullet list of achievements
   - Technical specifications

6. **Challenges & Solutions** (Optional)
   - What challenges were faced
   - How they were solved

7. **Testimonial** (If available)
   - Client quote
   - Client name, role

8. **Related Projects**
   - 3 similar projects
   - Same category or same services

9. **CTA**
   - "Request a Similar Project"
   - Link to quote page

**SEO (example):**
- Title: "Bannister Academy Construction Project | Antipolo, Rizal"
- Description: "Complete construction of Bannister Academy educational facility in Antipolo including plastering, concrete molding, and custom architectural elements."
- Schema: Project (custom or CreativeWork)

### 7.7 Contact Page

**URL:** `/contact`

**Sections:**

1. **Hero**
   - Title: "Get In Touch"
   - Subtitle: "Let's discuss your construction project"

2. **Contact Information Cards**
   - Phone (clickable on mobile)
   - Email (mailto link)
   - Address (if available)
   - Business hours
   - Service areas

3. **Contact Form**
   - Fields: Name, Email, Phone, Project Type, Message
   - Submit button
   - Success/error messages

4. **Google Maps Embed** (if address available)
   - Interactive map
   - Directions link

5. **Social Media Links**
   - Facebook
   - Instagram

6. **Additional Info**
   - Office hours
   - Response time expectation (24 hours)
   - Alternative contact methods (WhatsApp)

**SEO:**
- Title: "Contact Baring Construction Services | Get a Free Quote"
- Description: "Contact Baring Construction Services for your construction project. Serving Metro Manila, Rizal, and Pampanga. Phone, email, or request a quote online."
- Schema: ContactPage

### 7.8 Quote Request Page

**URL:** `/quote`

**Sections:**

1. **Hero**
   - Title: "Request a Free Quote"
   - Subtitle: "Tell us about your project and we'll provide a detailed quotation"

2. **Quote Request Form**
   - Multi-section form (Personal Info + Project Details)
   - All fields as specified in Functional Requirements
   - File upload area
   - Submit button
   - Form validation feedback

3. **What Happens Next**
   - 4-step process
   - Expected timeline (48 hours for quote)
   - What to expect

4. **FAQ**
   - "How long does it take to get a quote?"
   - "Is the consultation really free?"
   - "What information do I need to provide?"
   - "Can I change the project scope later?"

5. **Alternative Contact**
   - "Prefer to talk? Call us: [phone]"
   - WhatsApp link

**Success Page:** `/quote/success`
- Thank you message
- What happens next
- Estimated response time
- Browse projects while you wait

**SEO:**
- Title: "Request a Free Construction Quote | Baring Construction Services"
- Description: "Get a free, detailed quotation for your construction project. Fast response within 48 hours. Serving Metro Manila, Rizal, and Pampanga."
- Schema: ContactPage

### 7.9 Privacy Policy Page

**URL:** `/privacy-policy`

**Content:**
- Introduction
- What data we collect
- How we use your data
- Data storage and security
- Your rights
- Cookie policy
- Contact information for privacy concerns

**SEO:**
- Title: "Privacy Policy | Baring Construction Services"
- Meta robots: noindex (don't need in search results)

### 7.10 404 Error Page

**URL:** `/not-found` (automatically handled by Next.js)

**Content:**
- "404 - Page Not Found"
- Friendly message
- Search bar (optional)
- Links to:
  - Homepage
  - Services
  - Projects
  - Contact
- Illustration or image

---

## 8. User Stories & Acceptance Criteria

### 8.1 Epic: Lead Generation

#### US-001: Request Quote as Potential Client
**As a** potential client  
**I want to** submit a quote request with my project details  
**So that** I can get a price estimate without making a phone call

**Acceptance Criteria:**
- ✅ User can access quote form from any page (navigation)
- ✅ Form has clear field labels and help text
- ✅ Form validates input in real-time
- ✅ User can upload up to 5 files (plans, designs)
- ✅ User receives confirmation after submission
- ✅ User receives email confirmation within 5 minutes
- ✅ Admin receives notification with all details

**Priority:** High  
**Story Points:** 8

---

#### US-002: Contact Company via Form
**As a** website visitor  
**I want to** send a quick message via contact form  
**So that** I can ask questions without calling

**Acceptance Criteria:**
- ✅ Contact form accessible from Contact page
- ✅ Form validates all required fields
- ✅ Success message displays after submission
- ✅ User receives confirmation email
- ✅ Admin receives notification

**Priority:** High  
**Story Points:** 5

---

#### US-003: Click to Call on Mobile
**As a** mobile user  
**I want to** tap the phone number to call directly  
**So that** I can quickly reach the company

**Acceptance Criteria:**
- ✅ Phone number is clickable on mobile
- ✅ Opens native phone dialer
- ✅ Phone number visible in header/footer
- ✅ Phone number formatted correctly

**Priority:** High  
**Story Points:** 1

---

### 8.2 Epic: Project Discovery

#### US-004: Browse Projects by Category
**As a** potential client  
**I want to** filter projects by type (residential, commercial, etc.)  
**So that** I can see relevant examples for my project

**Acceptance Criteria:**
- ✅ Filter buttons visible above projects grid
- ✅ Projects update immediately on filter selection
- ✅ URL updates to reflect filter (shareable link)
- ✅ Active filter is highlighted
- ✅ "All" filter shows all projects

**Priority:** High  
**Story Points:** 5

---

#### US-005: View Project Details
**As a** website visitor  
**I want to** see detailed information about a completed project  
**So that** I can evaluate the company's work quality

**Acceptance Criteria:**
- ✅ Project detail page shows all project info
- ✅ Image gallery is navigable (arrows, thumbnails)
- ✅ Budget and timeline clearly displayed
- ✅ Services used are listed
- ✅ Related projects suggested at bottom
- ✅ CTA to request similar project

**Priority:** High  
**Story Points:** 8

---

#### US-006: View Project Images in Full Screen
**As a** website visitor  
**I want to** view project images in full-screen lightbox  
**So that** I can examine details closely

**Acceptance Criteria:**
- ✅ Clicking image opens lightbox
- ✅ Can navigate between images (arrows)
- ✅ Can close lightbox (X button or ESC key)
- ✅ Swipe gestures work on mobile
- ✅ Lightbox has dark overlay

**Priority:** Medium  
**Story Points:** 3

---

### 8.3 Epic: Service Information

#### US-007: Learn About Specific Service
**As a** potential client  
**I want to** read detailed information about a specific service  
**So that** I can determine if it meets my needs

**Acceptance Criteria:**
- ✅ Service page has detailed description
- ✅ Sub-services are clearly listed
- ✅ Process steps are explained
- ✅ Related projects are shown
- ✅ FAQ section answers common questions
- ✅ CTA to request quote for this service

**Priority:** High  
**Story Points:** 5

---

#### US-008: Compare Services
**As a** potential client  
**I want to** view all services on one page  
**So that** I can compare offerings

**Acceptance Criteria:**
- ✅ Services overview page lists all services
- ✅ Each service has summary description
- ✅ Each service has "Learn More" link
- ✅ Services organized logically

**Priority:** Medium  
**Story Points:** 3

---

### 8.4 Epic: Mobile Experience

#### US-009: Browse Site on Mobile
**As a** mobile user  
**I want to** easily navigate the site on my phone  
**So that** I can learn about services while on-the-go

**Acceptance Criteria:**
- ✅ All pages are mobile-responsive
- ✅ Text is readable without zooming (min 16px)
- ✅ Buttons are large enough to tap (min 44x44px)
- ✅ Images load quickly
- ✅ Forms are easy to complete on mobile
- ✅ No horizontal scrolling

**Priority:** High  
**Story Points:** 13

---

#### US-010: Access Mobile Menu
**As a** mobile user  
**I want to** open a mobile-friendly navigation menu  
**So that** I can access all pages

**Acceptance Criteria:**
- ✅ Hamburger icon in header
- ✅ Tapping opens full-screen menu
- ✅ Menu has smooth animation
- ✅ All navigation items visible
- ✅ Close button (X) works
- ✅ Tapping outside menu closes it

**Priority:** High  
**Story Points:** 5

---

### 8.5 Epic: Trust Building

#### US-011: Read Client Testimonials
**As a** potential client  
**I want to** read reviews from past clients  
**So that** I can trust the company's quality

**Acceptance Criteria:**
- ✅ Testimonials displayed on homepage
- ✅ Each testimonial has client name, role, project type
- ✅ Star rating visible (if available)
- ✅ Testimonials are authentic (real names/projects)

**Priority:** Medium  
**Story Points:** 3

---

#### US-012: View Company Credentials
**As a** potential client  
**I want to** see the company's licenses and certifications  
**So that** I can verify they're legitimate

**Acceptance Criteria:**
- ✅ Credentials displayed on About page
- ✅ License numbers shown (if applicable)
- ✅ Industry affiliations listed
- ✅ Insurance information provided

**Priority:** Medium  
**Story Points:** 2

---

### 8.6 Epic: Search & Discovery

#### US-013: Find Company on Google
**As a** potential client  
**I want to** find the company when searching Google  
**So that** I can learn about their services

**Acceptance Criteria:**
- ✅ Site ranks for "construction company [city]"
- ✅ Meta titles and descriptions optimized
- ✅ Sitemap submitted to Google
- ✅ Schema markup implemented
- ✅ Google My Business profile linked (if available)

**Priority:** High  
**Story Points:** 8

---

#### US-014: Share Project on Social Media
**As a** website visitor  
**I want to** share a project on Facebook/LinkedIn  
**So that** I can show it to others

**Acceptance Criteria:**
- ✅ Share buttons on project pages
- ✅ Open Graph tags properly set
- ✅ Shared link shows image and description
- ✅ Opens share dialog (doesn't navigate away)

**Priority:** Low  
**Story Points:** 2

---

## 9. Third-Party Integrations

### 9.1 Google Analytics 4

**Purpose:** Track user behavior, conversions, traffic sources

**Implementation:**
- Install GA4 tracking code in root layout
- Track page views automatically
- Track custom events:
  - `quote_request_submitted`
  - `contact_form_submitted`
  - `project_viewed`
  - `service_viewed`
  - `phone_clicked`
  - `whatsapp_clicked`

**Configuration:**
```javascript
// lib/analytics.js
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

export const pageview = (url) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

export const event = ({ action, category, label, value }) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
```

**Events to Track:**

| Event | Category | Label | When |
|-------|----------|-------|------|
| `quote_request` | Conversion | Project Type | Quote form submitted |
| `contact_form` | Lead Generation | Project Type | Contact form submitted |
| `click_phone` | Contact | Page URL | Phone number clicked |
| `click_whatsapp` | Contact | Page URL | WhatsApp button clicked |
| `view_project` | Engagement | Project Title | Project detail viewed |
| `filter_projects` | Engagement | Category | Project filter used |

### 9.2 Google Search Console

**Purpose:** Monitor search performance, fix indexing issues

**Setup:**
- Verify domain ownership
- Submit sitemap
- Monitor indexing status
- Track search queries
- Fix mobile usability issues

### 9.3 Google Maps Embed

**Purpose:** Show office location (if applicable)

**Implementation:**
```html
<iframe
  src="https://www.google.com/maps/embed?pb=..."
  width="100%"
  height="400"
  style="border:0;"
  allowfullscreen=""
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade"
></iframe>
```

**Requirements:**
- Google Maps Embed API key (if needed)
- Responsive sizing
- Loading="lazy" for performance

### 9.4 WhatsApp Business

**Purpose:** Quick messaging option for clients

**Implementation:**
```html
<a 
  href="https://wa.me/63XXXXXXXXXX?text=Hi%2C%20I%27m%20interested%20in%20your%20construction%20services"
  target="_blank"
  rel="noopener noreferrer"
>
  <WhatsAppIcon /> Chat on WhatsApp
</a>
```

**Features:**
- Click-to-chat button
- Pre-filled message template
- Opens WhatsApp app (mobile) or web (desktop)
- Track clicks via analytics

### 9.5 Email Service (Resend)

**Purpose:** Send transactional emails (form submissions, confirmations)

**Setup:**
```javascript
// lib/email.js
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(data) {
  return await resend.emails.send({
    from: 'Baring Construction <noreply@baringconstruction.ph>',
    to: 'info@baringconstruction.ph',
    subject: `New Contact: ${data.projectType}`,
    html: contactEmailTemplate(data),
  });
}
```

**Email Types:**
1. Contact form notification (to admin)
2. Contact form confirmation (to user)
3. Quote request notification (to admin)
4. Quote request confirmation (to user)

**Requirements:**
- Domain verification (SPF, DKIM)
- Professional email templates
- Bounce handling
- Rate limiting

### 9.6 reCAPTCHA v3

**Purpose:** Prevent spam form submissions

**Implementation:**
```javascript
// Client-side
const token = await grecaptcha.execute(
  process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
  { action: 'submit_quote' }
);

// Server-side validation
const response = await fetch(
  `https://www.google.com/recaptcha/api/siteverify`,
  {
    method: 'POST',
    body: new URLSearchParams({
      secret: process.env.RECAPTCHA_SECRET_KEY,
      response: token,
    }),
  }
);

const { success, score } = await response.json();

if (!success || score < 0.5) {
  throw new Error('reCAPTCHA validation failed');
}
```

**Configuration:**
- reCAPTCHA v3 (invisible)
- Threshold score: 0.5
- Custom challenge for low scores

### 9.7 Vercel Analytics (Optional)

**Purpose:** Real-time performance monitoring

**Features:**
- Web Vitals tracking
- Geographic distribution
- Device breakdown
- Real User Monitoring (RUM)

**Setup:**
```javascript
// next.config.js
module.exports = {
  experimental: {
    webVitalsAttribution: ['CLS', 'LCP'],
  },
};
```

### 9.8 Image Storage (Vercel Blob)

**Purpose:** Store uploaded files from quote requests

**Implementation:**
```javascript
import { put } from '@vercel/blob';

const blob = await put(file.name, file, {
  access: 'public',
  token: process.env.BLOB_READ_WRITE_TOKEN,
});

return blob.url; // https://xxx.public.blob.vercel-storage.com/...
```

**Configuration:**
- Max file size: 5MB
- Allowed types: .pdf, .jpg, .png, .dwg
- Auto-delete after 90 days (optional)

---

## 10. Development Phases

### Phase 1: Foundation & Core Pages (Weeks 1-2)

**Goal:** Build functional demo with core pages

**Tasks:**
1. **Project Setup** (Day 1)
   - [ ] Initialize Next.js project
   - [ ] Configure Tailwind CSS
   - [ ] Set up folder structure
   - [ ] Install dependencies
   - [ ] Configure ESLint & Prettier
   - [ ] Set up Git repository

2. **Design System** (Days 2-3)
   - [ ] Create color palette (Tailwind config)
   - [ ] Set up typography system
   - [ ] Create reusable UI components:
     - [ ] Button
     - [ ] Card
     - [ ] Input
     - [ ] Badge
     - [ ] Modal
   - [ ] Test components in Storybook (optional)

3. **Layout Components** (Days 4-5)
   - [ ] Navbar (desktop + mobile)
   - [ ] Footer
   - [ ] Mobile menu
   - [ ] Container/wrapper
   - [ ] Responsive breakpoints

4. **Homepage** (Days 6-8)
   - [ ] Hero section
   - [ ] Services grid
   - [ ] Featured projects
   - [ ] Why choose us
   - [ ] Process steps
   - [ ] CTA section
   - [ ] Mobile optimization

5. **About Page** (Day 9)
   - [ ] Hero section
   - [ ] Company story
   - [ ] Mission & values
   - [ ] Service areas

6. **Services Pages** (Days 10-12)
   - [ ] Services overview page
   - [ ] Individual service pages (6 pages)
   - [ ] Reusable service page template

7. **Projects Pages** (Days 13-14)
   - [ ] Projects listing page
   - [ ] Project filter functionality
   - [ ] Project detail page template
   - [ ] Image gallery with lightbox

**Deliverables:**
- ✅ Functional website with 10+ pages
- ✅ Mobile responsive
- ✅ Basic SEO (meta tags)
- ✅ Deployed to Vercel (preview URL)

---

### Phase 2: Forms & Interactivity (Week 3)

**Goal:** Add contact forms and user interactions

**Tasks:**
8. **Contact Page** (Days 15-16)
   - [ ] Contact form component
   - [ ] Form validation (Zod)
   - [ ] Client-side validation
   - [ ] Contact API endpoint
   - [ ] Email integration (Resend)
   - [ ] Success/error states

9. **Quote Request Page** (Days 17-19)
   - [ ] Quote form component
   - [ ] File upload functionality
   - [ ] Multi-section form UI
   - [ ] Quote API endpoint
   - [ ] File storage (Vercel Blob)
   - [ ] Email notifications

10. **Interactive Features** (Days 20-21)
    - [ ] WhatsApp integration
    - [ ] Click-to-call buttons
    - [ ] Image lightbox/gallery
    - [ ] Smooth scroll to sections
    - [ ] Loading states
    - [ ] Form feedback (toast/snackbar)

**Deliverables:**
- ✅ Working contact form
- ✅ Working quote request form
- ✅ File upload functionality
- ✅ Email notifications working

---

### Phase 3: Content & Polish (Week 4)

**Goal:** Add real content, optimize, and polish

**Tasks:**
11. **Content Integration** (Days 22-24)
    - [ ] Create all project data (8+ projects)
    - [ ] Write service page content
    - [ ] Add real images (optimized)
    - [ ] Add testimonials (if available)
    - [ ] Write About page copy

12. **SEO Optimization** (Days 25-26)
    - [ ] Meta tags for all pages
    - [ ] Open Graph tags
    - [ ] Schema.org markup
    - [ ] Sitemap generation
    - [ ] robots.txt
    - [ ] Alt text for all images

13. **Performance Optimization** (Day 27)
    - [ ] Image optimization (WebP)
    - [ ] Lazy loading
    - [ ] Code splitting
    - [ ] Font optimization
    - [ ] Lighthouse audit (target: 90+)

14. **Polish & Bug Fixes** (Day 28)
    - [ ] Cross-browser testing
    - [ ] Mobile testing (iOS, Android)
    - [ ] Fix layout issues
    - [ ] Accessibility audit
    - [ ] Final QA pass

**Deliverables:**
- ✅ All content added
- ✅ SEO optimized
- ✅ Lighthouse score 90+
- ✅ Bug-free experience

---

### Phase 4: Testing & Deployment (Week 5)

**Goal:** Thorough testing and production deployment

**Tasks:**
15. **Testing** (Days 29-31)
    - [ ] Unit tests (forms, utils)
    - [ ] Component tests
    - [ ] E2E tests (critical paths)
    - [ ] Form submission testing
    - [ ] Email delivery testing
    - [ ] Mobile device testing

16. **Analytics & Tracking** (Day 32)
    - [ ] Google Analytics 4 setup
    - [ ] Event tracking implementation
    - [ ] Google Search Console setup
    - [ ] Conversion tracking

17. **Documentation** (Day 33)
    - [ ] README.md (for client)
    - [ ] User guide (how to update content)
    - [ ] Admin guide (checking submissions)
    - [ ] Maintenance guide

18. **Deployment** (Day 34)
    - [ ] Domain setup
    - [ ] SSL certificate
    - [ ] Production environment variables
    - [ ] Deploy to production
    - [ ] Post-deployment smoke tests

19. **Handoff** (Day 35)
    - [ ] Client training session
    - [ ] Provide credentials
    - [ ] Final walkthrough
    - [ ] Support plan discussion

**Deliverables:**
- ✅ Fully tested website
- ✅ Live production site
- ✅ Analytics tracking
- ✅ Documentation package
- ✅ Client trained

---

### Timeline Summary

| Phase | Duration | Deliverable |
|-------|----------|-------------|
| Phase 1: Foundation | 2 weeks | Core pages (Home, About, Services, Projects) |
| Phase 2: Interactivity | 1 week | Forms, APIs, WhatsApp |
| Phase 3: Polish | 1 week | Content, SEO, Performance |
| Phase 4: Deploy | 1 week | Testing, Deployment, Handoff |
| **TOTAL** | **5 weeks** | **Production website** |

---

### Optional Phase 5: Post-Launch (Ongoing)

**Goal:** Monitor, optimize, and enhance

**Tasks (Month 1-3):**
- Monitor analytics weekly
- Collect user feedback
- A/B test CTAs
- Improve SEO rankings
- Add blog section (if desired)
- Add more projects as completed
- Implement user suggestions

---

## 11. Content Requirements

### 11.1 Text Content Needed

**From Client (Baring Construction):**

1. **Company Information**
   - [ ] Official company name
   - [ ] Founding date/year
   - [ ] Company registration number (if public)
   - [ ] License numbers (PCAB, etc.)
   - [ ] Mission statement (draft OK, can refine)
   - [ ] Core values (3-4 items)

2. **Contact Information**
   - [ ] Primary phone number
   - [ ] Secondary phone number (optional)
   - [ ] Email address (general inquiries)
   - [ ] Email address (quotes)
   - [ ] WhatsApp number
   - [ ] Physical address (if applicable)
   - [ ] Business hours
   - [ ] Service area cities/regions

3. **Service Descriptions**
   - [ ] General Construction (overview)
   - [ ] Electrical Works (overview)
   - [ ] Civil & Structural (overview)
   - [ ] Architectural Services (overview)
   - [ ] MEPF Services (overview)
   - [ ] Specialized Services (overview)
   - [ ] Sub-services under each category
   - [ ] Typical project timelines
   - [ ] Typical budget ranges (if comfortable sharing)

4. **Team Information** (Optional)
   - [ ] Founder/Owner name and bio
   - [ ] Key team members (if showcasing)
   - [ ] Credentials/certifications
   - [ ] Years of experience

5. **Testimonials** (If available)
   - [ ] Client quotes
   - [ ] Client names (or anonymous)
   - [ ] Project types
   - [ ] Permission to publish

### 11.2 Image Requirements

**From Client:**

1. **Logo & Branding**
   - [x] Company logo (high-res PNG/SVG) - RECEIVED
   - [x] Logo on transparent background - RECEIVED
   - [x] Logo in white (for dark backgrounds) - MAY NEED TO CREATE

2. **Project Photos** (For each project)
   - [ ] Hero/featured image (landscape, high-res)
   - [ ] 5-10 project photos (various angles)
   - [ ] Before/after photos (if applicable)
   - [ ] Detail shots (craftsmanship, finishes)
   - [ ] Work-in-progress photos (optional but great)
   - **Specifications:** Min 1920x1080px, JPEG, high quality

3. **Service Photos**
   - [ ] General construction scenes
   - [ ] Electrical work in progress
   - [ ] Civil/structural work
   - [ ] Architectural details
   - [ ] MEPF installations
   - [ ] Team at work (if comfortable)
   - **Can use stock photos as fallback**

4. **Team Photos** (Optional)
   - [ ] Professional headshots
   - [ ] Team working on-site
   - [ ] Office/facility photos

5. **Hero/Background Images**
   - [ ] Large hero image for homepage
   - [ ] Background images for section headers
   - **Specifications:** 2560x1440px minimum

### 11.3 Project Data

**For Each Project (Target: 8-10 projects):**

- [ ] Project name
- [ ] Location (city, province)
- [ ] Category (residential/commercial/etc.)
- [ ] Budget range (can be range like "₱2-3M")
- [ ] Duration (e.g., "4 months")
- [ ] Completion date
- [ ] Services provided (list)
- [ ] Project description (300-500 words)
- [ ] Key highlights (3-5 bullet points)
- [ ] Challenges faced (optional)
- [ ] Solutions implemented (optional)
- [ ] Technical specs (area, floors, etc.)
- [ ] Images (5-10 photos)

**Priority Projects to Document:**
1. Bannister Academy (Antipolo) - ALREADY KNOWN
2. 2-Storey Residence - NEED INFO
3. Dali Convenience Store - NEED INFO
4. Makati Electrical Project - NEED INFO
5. Steel Racking Installation - NEED INFO
6. San Fernando Bustduct - NEED INFO
7. + 2-4 more projects

### 11.4 Content Writing Tasks

**To Be Written by Developer:**

1. **Homepage Copy**
   - [ ] Hero headline
   - [ ] Hero subheadline
   - [ ] Service card descriptions (6 services)
   - [ ] Why choose us (4 benefits)
   - [ ] Process steps (5 steps)
   - [ ] Final CTA text

2. **About Page Copy**
   - [ ] Company story (150-200 words)
   - [ ] Mission statement refinement
   - [ ] Values descriptions
   - [ ] Capabilities list

3. **Service Pages**
   - [ ] Overview paragraphs (200-300 words each)
   - [ ] Sub-service descriptions
   - [ ] Process descriptions
   - [ ] FAQ answers (3-5 per service)

4. **SEO Meta Tags**
   - [ ] Meta titles (50-60 chars)
   - [ ] Meta descriptions (150-160 chars)
   - [ ] For all pages (15+ pages)

5. **Form Labels & Help Text**
   - [ ] Clear, user-friendly labels
   - [ ] Validation error messages
   - [ ] Success messages
   - [ ] Help text/tooltips

6. **Legal**
   - [ ] Privacy Policy (template + customize)
   - [ ] Terms of Service (optional)

### 11.5 Content Collection Checklist

**Week 1:**
- [ ] Request all company information from client
- [ ] Request contact details
- [ ] Request logo files
- [ ] Schedule project photo gathering

**Week 2:**
- [ ] Collect project information (8-10 projects)
- [ ] Collect project photos
- [ ] Collect service descriptions
- [ ] Get approval on company story draft

**Week 3:**
- [ ] Finalize all written content
- [ ] Optimize and rename all images
- [ ] Create missing graphics (if needed)
- [ ] Get final approval from client

---

## 12. Testing Strategy

### 12.1 Unit Testing

**Framework:** Jest

**What to Test:**
- Utility functions (`lib/utils.js`)
- Form validation functions
- Data transformation functions
- Email templates generation

**Example Test:**
```javascript
// __tests__/lib/utils.test.js
import { formatCurrency, formatDate } from '@/lib/utils';

describe('formatCurrency', () => {
  it('formats PHP currency correctly', () => {
    expect(formatCurrency(1500000)).toBe('₱1,500,000');
  });
  
  it('handles decimal values', () => {
    expect(formatCurrency(1500000.50)).toBe('₱1,500,000.50');
  });
});
```

**Target Coverage:** 80%+ for utility functions

### 12.2 Component Testing

**Framework:** React Testing Library

**What to Test:**
- Button states (default, loading, disabled)
- Form field validation
- Modal open/close
- Card hover states
- Navigation menu interactions

**Example Test:**
```javascript
// __tests__/components/Button.test.jsx
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '@/components/ui/Button';

describe('Button Component', () => {
  it('renders with correct text', () => {
    render(<Button>Click Me</Button>);
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });
  
  it('calls onClick handler when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);
    
    fireEvent.click(screen.getByText('Click Me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
  
  it('is disabled when loading', () => {
    render(<Button loading>Click Me</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
  });
});
```

**Target Coverage:** 70%+ for UI components

### 12.3 Integration Testing

**What to Test:**
- Form submission workflows
- Page navigation
- API endpoint responses
- Email delivery (mocked)

**Example Test:**
```javascript
// __tests__/pages/contact.test.jsx
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContactPage from '@/app/contact/page';

describe('Contact Page', () => {
  it('submits form successfully', async () => {
    const user = userEvent.setup();
    render(<ContactPage />);

    // Fill form
    await user.type(screen.getByLabelText('Name'), 'John Doe');
    await user.type(screen.getByLabelText('Email'), 'john@example.com');
    await user.type(screen.getByLabelText('Phone'), '09123456789');
    await user.selectOptions(screen.getByLabelText('Project Type'), 'Residential');
    await user.type(screen.getByLabelText('Message'), 'I need a house built');
    
    // Submit
    await user.click(screen.getByRole('button', { name: /submit/i }));

    // Verify success
    await waitFor(() => {
      expect(screen.getByText(/thank you/i)).toBeInTheDocument();
    });
  });
  
  it('shows validation errors', async () => {
    const user = userEvent.setup();
    render(<ContactPage />);

    // Submit empty form
    await user.click(screen.getByRole('button', { name: /submit/i }));

    // Verify errors
    expect(await screen.findByText(/name.*required/i)).toBeInTheDocument();
    expect(await screen.findByText(/email.*required/i)).toBeInTheDocument();
  });
});
```

### 12.4 E2E Testing

**Framework:** Playwright

**Critical User Flows:**

1. **Quote Request Flow**
```javascript
// e2e/quote-request.spec.ts
import { test, expect } from '@playwright/test';

test('user can request a quote', async ({ page }) => {
  // Navigate
  await page.goto('/');
  await page.click('text=Request Quote');
  
  // Fill form
  await page.fill('[name="name"]', 'Juan Dela Cruz');
  await page.fill('[name="email"]', 'juan@example.com');
  await page.fill('[name="phone"]', '+63 912 345 6789');
  await page.selectOption('[name="projectType"]', 'Residential Construction');
  await page.selectOption('[name="budget"]', '₱1M - ₱3M');
  await page.selectOption('[name="timeline"]', '3-6 months');
  await page.fill('[name="description"]', 'I need a 2-storey house with 4 bedrooms');
  
  // Upload file
  await page.setInputFiles('[name="files"]', 'tests/fixtures/floor-plan.pdf');
  
  // Submit
  await page.click('button[type="submit"]');
  
  // Verify success
  await expect(page.locator('text=Thank you')).toBeVisible();
  await expect(page.locator('text=48 hours')).toBeVisible();
});
```

2. **Browse Projects Flow**
```javascript
test('user can browse and filter projects', async ({ page }) => {
  await page.goto('/projects');
  
  // Verify projects load
  await expect(page.locator('[data-testid="project-card"]')).toHaveCount(8);
  
  // Filter by category
  await page.click('text=Residential');
  await expect(page.locator('[data-testid="project-card"]')).toHaveCount(3);
  
  // Click project
  await page.click('text=Bannister Academy');
  await expect(page).toHaveURL(/\/projects\/bannister-academy/);
  
  // Verify detail page
  await expect(page.locator('h1')).toContainText('Bannister Academy');
  await expect(page.locator('text=Antipolo, Rizal')).toBeVisible();
});
```

3. **Mobile Menu Navigation**
```javascript
test('mobile menu works correctly', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto('/');
  
  // Open menu
  await page.click('[aria-label="Toggle mobile menu"]');
  await expect(page.locator('nav[role="dialog"]')).toBeVisible();
  
  // Navigate
  await page.click('text=Services');
  await expect(page).toHaveURL('/services');
  
  // Verify menu closed
  await expect(page.locator('nav[role="dialog"]')).not.toBeVisible();
});
```

### 12.5 Performance Testing

**Tool:** Lighthouse CI

**Target Scores:**

| Metric | Target | Critical Path |
|--------|--------|---------------|
| Performance | 90+ | All pages |
| Accessibility | 95+ | All pages |
| Best Practices | 95+ | All pages |
| SEO | 100 | All pages |
| LCP | < 2.5s | Homepage |
| FID | < 100ms | All interactive pages |
| CLS | < 0.1 | All pages |

**Lighthouse CI Config:**
```json
// lighthouserc.json
{
  "ci": {
    "collect": {
      "url": [
        "http://localhost:3000/",
        "http://localhost:3000/about",
        "http://localhost:3000/services",
        "http://localhost:3000/projects",
        "http://localhost:3000/contact",
        "http://localhost:3000/quote"
      ],
      "numberOfRuns": 3
    },
    "assert": {
      "preset": "lighthouse:recommended",
      "assertions": {
        "categories:performance": ["error", {"minScore": 0.9}],
        "categories:accessibility": ["error", {"minScore": 0.95}],
        "categories:seo": ["error", {"minScore": 1.0}]
      }
    }
  }
}
```

### 12.6 Accessibility Testing

**Tools:**
- axe DevTools
- WAVE browser extension
- Keyboard-only navigation

**Checklist:**
- [ ] All images have alt text
- [ ] Color contrast meets WCAG AA (4.5:1)
- [ ] All interactive elements keyboard accessible
- [ ] Focus indicators visible
- [ ] Form labels properly associated
- [ ] Heading hierarchy logical (H1 → H2 → H3)
- [ ] ARIA labels on icon-only buttons
- [ ] Skip to main content link
- [ ] Screen reader tested (NVDA or VoiceOver)

### 12.7 Browser Compatibility Testing

**Manual Testing Matrix:**

| Browser | Version | OS | Priority |
|---------|---------|-----|----------|
| Chrome | Latest | Windows/Mac | High |
| Safari | Latest | Mac/iOS | High |
| Firefox | Latest | Windows/Mac | Medium |
| Edge | Latest | Windows | Medium |
| Chrome Mobile | Latest | Android | High |
| Safari Mobile | Latest | iOS | High |

**Test on Real Devices:**
- iPhone 12/13/14 (iOS Safari)
- Samsung Galaxy S21/22 (Chrome Mobile)
- iPad (Safari)

### 12.8 Security Testing

**Checklist:**
- [ ] HTTPS enforced
- [ ] Security headers present (CSP, HSTS, etc.)
- [ ] No sensitive data in URLs
- [ ] Forms protected from CSRF
- [ ] Input sanitization working
- [ ] File upload restrictions enforced
- [ ] Rate limiting working (5 req/hour)
- [ ] SQL injection prevention (if using DB)
- [ ] XSS prevention (input escaping)

**Tools:**
- OWASP ZAP (automated security scan)
- Manual penetration testing
- Security header checker

### 12.9 QA Checklist

**Before Deployment:**

**Functionality:**
- [ ] All forms submit successfully
- [ ] Emails deliver correctly
- [ ] File uploads work
- [ ] Navigation links work
- [ ] Mobile menu works
- [ ] Image gallery works
- [ ] Filter functionality works
- [ ] WhatsApp button works
- [ ] Phone links work on mobile

**Visual/UI:**
- [ ] No layout breaks on any page
- [ ] Images load correctly
- [ ] Fonts render correctly
- [ ] Colors match brand
- [ ] Spacing consistent
- [ ] No horizontal scroll
- [ ] Loading states work
- [ ] Error states work

**Mobile:**
- [ ] All pages responsive
- [ ] Text readable (min 16px)
- [ ] Buttons tappable (min 44px)
- [ ] Forms usable
- [ ] Images optimized
- [ ] Menu accessible

**SEO:**
- [ ] All pages have unique titles
- [ ] All pages have descriptions
- [ ] Sitemap generated
- [ ] robots.txt present
- [ ] Schema markup valid
- [ ] Open Graph tags present

**Performance:**
- [ ] Lighthouse score 90+
- [ ] LCP < 2.5s
- [ ] No console errors
- [ ] No 404s
- [ ] Images optimized

**Legal:**
- [ ] Privacy policy present
- [ ] Cookie notice (if tracking)
- [ ] Contact info correct

---

## 13. Deployment Strategy

### 13.1 Hosting Platform

**Selected Platform:** Vercel

**Reasons:**
- Free tier available
- Automatic deployments from Git
- Built-in CDN
- Excellent Next.js support
- SSL certificates automatic
- Preview deployments for testing
- Easy rollbacks

**Pricing:**
- **Hobby (Free):** Perfect for demo/MVP
  - 100GB bandwidth/month
  - Unlimited deployments
  - Automatic HTTPS
- **Pro ($20/month):** For production (if needed)
  - 1TB bandwidth
  - Advanced analytics
  - Password protection
  - Priority support

### 13.2 Domain Setup

**Domain Options:**

1. **Vercel Subdomain (Free)**
   - Format: `baring-construction.vercel.app`
   - Pros: Free, instant setup
   - Cons: Not professional, not memorable

2. **Custom Domain (Recommended)**
   - Options: `baringconstruction.ph`, `baringconstruction.com`
   - Cost: ~₱500-1,000/year (.ph domain)
   - Registrars: Namecheap, Google Domains, Hostinger Philippines

**DNS Configuration:**
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### 13.3 Environment Variables

**Production Environment:**

```bash
# .env.production
NEXT_PUBLIC_SITE_URL=https://baringconstruction.ph
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=6Lc...

# Server-side only
RESEND_API_KEY=re_...
RECAPTCHA_SECRET_KEY=6Lc...
BLOB_READ_WRITE_TOKEN=vercel_blob_...
```

**Vercel Dashboard Setup:**
1. Project Settings → Environment Variables
2. Add each variable
3. Select environments (Production, Preview, Development)
4. **CRITICAL:** Never commit `.env.local` to Git

### 13.4 Deployment Process

**Automatic Deployment (Recommended):**

1. **Connect Git Repository**
   - Link GitHub repository to Vercel
   - Select main branch for production
   - Configure build settings

2. **Deployment Triggers**
   - Push to `main` branch → Production deployment
   - Push to `dev` branch → Preview deployment
   - Pull requests → Preview deployments

3. **Build Configuration**
```json
// vercel.json (optional)
{
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "nextjs",
  "outputDirectory": ".next"
}
```

**Manual Deployment:**
```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy to production
vercel --prod

# Deploy to preview
vercel
```

### 13.5 Pre-Deployment Checklist

**Code Quality:**
- [ ] All tests passing
- [ ] No console errors
- [ ] ESLint warnings resolved
- [ ] Code reviewed
- [ ] Git branch merged

**Configuration:**
- [ ] Environment variables set in Vercel
- [ ] Domain configured (if custom domain)
- [ ] SSL certificate active
- [ ] Redirects configured (www → non-www)

**Content:**
- [ ] All images optimized
- [ ] All content proofread
- [ ] Placeholder content removed
- [ ] Contact information correct
- [ ] Privacy policy updated

**Functionality:**
- [ ] Forms tested
- [ ] Email delivery tested
- [ ] Analytics tracking verified
- [ ] reCAPTCHA working

**SEO:**
- [ ] Sitemap generated
- [ ] robots.txt configured
- [ ] Meta tags complete
- [ ] Schema markup valid

### 13.6 Post-Deployment Tasks

**Immediate (Day 1):**
1. [ ] Verify site loads correctly
2. [ ] Test critical user flows:
   - Submit contact form
   - Submit quote request
   - Browse projects
   - Filter projects
3. [ ] Verify emails delivering
4. [ ] Check mobile experience
5. [ ] Test on multiple browsers
6. [ ] Verify analytics tracking

**Week 1:**
1. [ ] Submit sitemap to Google Search Console
2. [ ] Set up Google My Business (if applicable)
3. [ ] Monitor error logs
4. [ ] Check performance metrics
5. [ ] Collect initial user feedback

**Week 2-4:**
1. [ ] Monitor Google Search Console for indexing
2. [ ] Review analytics data
3. [ ] A/B test CTAs (if applicable)
4. [ ] Fix any reported bugs
5. [ ] Optimize based on user behavior

### 13.7 Rollback Strategy

**If Issues Discovered:**

1. **Immediate Rollback (Vercel)**
   - Vercel Dashboard → Deployments
   - Find previous working deployment
   - Click "Promote to Production"
   - Takes effect in ~30 seconds

2. **Fix and Redeploy**
   - Fix issue in local environment
   - Test thoroughly
   - Push to Git (triggers new deployment)

3. **Hotfix Process**
   - Create `hotfix` branch from `main`
   - Apply fix
   - Test
   - Merge to `main`
   - Auto-deploys

### 13.8 Monitoring & Maintenance

**Daily Monitoring:**
- [ ] Check Vercel dashboard for errors
- [ ] Review contact form submissions
- [ ] Monitor email delivery

**Weekly Monitoring:**
- [ ] Review Google Analytics
- [ ] Check Search Console for issues
- [ ] Monitor site speed (Lighthouse)
- [ ] Review user feedback

**Monthly Maintenance:**
- [ ] Update dependencies
- [ ] Review security updates
- [ ] Add new projects/content
- [ ] Optimize underperforming pages
- [ ] Review and respond to form submissions

**Tools:**
- Vercel Analytics (included)
- Google Analytics 4
- Google Search Console
- UptimeRobot (uptime monitoring)
- Sentry (error tracking - optional)

### 13.9 Backup Strategy

**Vercel Automatic Backups:**
- Every deployment is saved
- Can rollback to any previous deployment
- Deployments retained indefinitely on free tier

**Content Backup:**
- [ ] Export project data monthly (if using CMS)
- [ ] Backup uploaded files (Vercel Blob)
- [ ] Backup form submissions (if stored in DB)

**Code Backup:**
- [ ] Git repository (primary)
- [ ] GitHub/GitLab (remote)
- [ ] Local backup (secondary)

### 13.10 SSL Certificate

**Vercel Automatic SSL:**
- SSL certificates provided free via Let's Encrypt
- Automatic renewal
- Covers apex domain and www subdomain
- HTTPS enforced by default

**Configuration:**
- No manual setup required
- Vercel handles everything
- Certificate renews automatically every 90 days

---

## 14. Success Metrics

### 14.1 Business KPIs

**Primary Metrics (Months 1-3):**

| Metric | Baseline | Month 1 | Month 2 | Month 3 |
|--------|----------|---------|---------|---------|
| Quote Requests | 0 | 5-10 | 10-15 | 15-20 |
| Contact Form Submissions | 0 | 10-15 | 15-20 | 20-30 |
| Phone Calls (tracked) | Unknown | Track | +20% | +30% |
| WhatsApp Messages | 0 | 5-10 | 10-15 | 15-25 |

**Conversion Metrics:**

| Metric | Target (Month 3) |
|--------|------------------|
| Quote Request → Site Visit | 30% |
| Quote Request → Project Won | 10% |
| Average Project Value | ₱1.5M+ |
| ROI (Website Cost vs Revenue) | 300%+ |

### 14.2 Website Performance Metrics

**Traffic Metrics:**

| Metric | Month 1 | Month 3 | Month 6 |
|--------|---------|---------|---------|
| Total Sessions | 300-500 | 800-1,200 | 1,500-2,500 |
| Unique Visitors | 250-400 | 600-900 | 1,200-2,000 |
| Page Views | 1,000-1,500 | 3,000-4,500 | 6,000-10,000 |
| Average Session Duration | 2-3 min | 3-4 min | 4-5 min |
| Bounce Rate | <60% | <55% | <50% |
| Pages per Session | 2.5 | 3.0 | 3.5 |

**Traffic Sources (Month 3 targets):**

| Source | Percentage |
|--------|-----------|
| Organic Search | 30-40% |
| Direct | 20-30% |
| Social Media (Facebook) | 20-30% |
| Referral | 5-10% |
| Paid (if applicable) | 0-10% |

### 14.3 Technical Performance Metrics

**Core Web Vitals (Maintained):**

| Metric | Target | Alert If |
|--------|--------|----------|
| LCP (Largest Contentful Paint) | < 2.5s | > 3.0s |
| FID (First Input Delay) | < 100ms | > 150ms |
| CLS (Cumulative Layout Shift) | < 0.1 | > 0.15 |
| FCP (First Contentful Paint) | < 1.8s | > 2.5s |
| TTI (Time to Interactive) | < 3.5s | > 5.0s |

**Lighthouse Scores (Maintained):**

| Category | Target | Alert If |
|----------|--------|----------|
| Performance | 90+ | < 85 |
| Accessibility | 95+ | < 90 |
| Best Practices | 95+ | < 90 |
| SEO | 100 | < 95 |

### 14.4 User Engagement Metrics

**Page Performance (Month 3):**

| Page | Avg. Time on Page | Bounce Rate |
|------|------------------|-------------|
| Homepage | 1-2 min | <40% |
| Services Pages | 2-3 min | <50% |
| Projects Page | 3-4 min | <45% |
| Project Detail | 2-3 min | <40% |
| Quote Request | 3-5 min | <30% |

**Conversion Funnels:**

**Quote Request Funnel:**
```
Homepage → Quote Page → Quote Submitted
100 visitors → 20 start form → 15 submit = 15% conversion
```

**Project Exploration Funnel:**
```
Homepage → Projects Page → Project Detail → Quote Request
100 visitors → 40 browse → 20 view detail → 5 request quote = 5% conversion
```

### 14.5 SEO Metrics

**Search Rankings (Month 3 targets):**

| Keyword | Target Position | Monthly Searches |
|---------|----------------|------------------|
| "construction company [city]" | Top 10 | 500-1,000 |
| "general contractor [city]" | Top 15 | 300-600 |
| "electrical contractor [city]" | Top 10 | 200-400 |
| "fit-out contractor Manila" | Top 20 | 100-300 |
| "[specific service] [city]" | Top 15 | Varies |

**Search Console Metrics (Month 3):**

| Metric | Target |
|--------|--------|
| Total Clicks | 200-400 |
| Total Impressions | 5,000-10,000 |
| Average CTR | 4-6% |
| Average Position | 15-25 |
| Indexed Pages | 20+ |

### 14.6 Form Performance Metrics

**Contact Form:**

| Metric | Target |
|--------|--------|
| Completion Rate | 70%+ |
| Average Time to Complete | < 2 minutes |
| Abandonment Rate | < 30% |
| Error Rate | < 5% |

**Quote Request Form:**

| Metric | Target |
|--------|--------|
| Completion Rate | 60%+ |
| Average Time to Complete | 3-5 minutes |
| File Upload Success | 95%+ |
| Abandonment Rate | < 40% |

### 14.7 Mobile vs Desktop Metrics

**Traffic Split (Month 3):**

| Device | Traffic % | Conversion Rate |
|--------|-----------|----------------|
| Mobile | 60-70% | 2-3% |
| Desktop | 25-35% | 4-5% |
| Tablet | 5-10% | 3-4% |

**Performance by Device:**

| Metric | Mobile | Desktop | Target |
|--------|--------|---------|--------|
| Load Time | < 3.0s | < 2.0s | Meet |
| Bounce Rate | < 55% | < 50% | Meet |
| Pages/Session | 2.5+ | 3.5+ | Meet |

### 14.8 Monitoring Dashboard Setup

**Google Analytics 4 Custom Dashboard:**

**Widget 1: Conversions**
- Quote requests (total, trend)
- Contact form submissions
- Phone clicks
- WhatsApp clicks

**Widget 2: Traffic**
- Real-time users
- Sessions (last 30 days)
- New vs returning visitors
- Traffic sources

**Widget 3: Engagement**
- Average session duration
- Pages per session
- Bounce rate
- Top pages

**Widget 4: Performance**
- Core Web Vitals
- Page load times
- Device breakdown

**Weekly Review Checklist:**
- [ ] Review conversion metrics
- [ ] Check traffic trends
- [ ] Identify top-performing pages
- [ ] Identify underperforming pages
- [ ] Review search queries (Search Console)
- [ ] Check for errors (Vercel logs)
- [ ] Review form submissions

---

## 15. Constraints & Assumptions

### 15.1 Technical Constraints

**Budget Constraints:**
- Total development budget: TBD (estimate: ₱65,000-95,000)
- Hosting: Free tier (Vercel Hobby)
- Domain: ~₱1,000/year
- Email service: Free tier (Resend - 100 emails/day)
- No ongoing server costs

**Time Constraints:**
- Development timeline: 5-6 weeks
- Client content collection: Depends on client responsiveness
- Must launch before competitors establish stronger presence

**Resource Constraints:**
- Single developer (Dale)
- No dedicated designer (using Tailwind/existing brand)
- No professional copywriter (developer writes copy)
- Limited project photos (use what client has)

**Technical Limitations:**
- Static site (no database for MVP)
- No user authentication (Phase 1)
- No admin dashboard (Phase 1)
- Email-based form submissions (no in-app management)
- Limited to Vercel free tier capabilities

### 15.2 Client-Side Constraints

**Content Availability:**
- Assumes client can provide:
  - 8-10 project descriptions
  - 5-10 photos per project
  - Basic company information
  - Contact details
- Timeline dependent on client response time

**Brand Assets:**
- Logo already provided (high quality) ✅
- May need to create white version of logo
- Assumes no additional brand guidelines
- Will use logo colors as brand palette

**Decision Making:**
- Assumes single point of contact at client
- Quick turnaround on approvals needed
- Assumes client trust in developer decisions

**Budget:**
- Client budget unknown (present as investment vs expense)
- Payment terms negotiable
- May need to start without deposit (relationship building)

### 15.3 Functional Assumptions

**User Behavior:**
- Users are primarily looking for construction services
- Users value visual proof (project photos)
- Users want quick price estimates (quote form)
- Users prefer online forms to phone calls (some)
- Mobile users are serious prospects (not just browsing)

**Business Process:**
- Client checks form submissions daily
- Client responds to quote requests within 48 hours
- Client has capacity to handle increased inquiries
- Client can provide references/testimonials later

**Market Assumptions:**
- Construction industry clients use Google search
- Facebook-only presence limits credibility
- Professional website increases conversion rates
- Competitors have weak online presence
- Local SEO is effective for construction services

### 15.4 Technical Assumptions

**Browser Usage:**
- Most users on Chrome or Safari
- Mobile browsers are modern (iOS 14+, Android 10+)
- JavaScript enabled (Next.js requirement)

**Internet Speed:**
- Users have reasonable connection (3G minimum)
- Philippines internet speeds (avg 50 Mbps mobile, 100 Mbps fixed)
- Images must be optimized for slower connections

**Email Delivery:**
- Client email doesn't have aggressive spam filters
- Resend API emails don't go to spam
- Client checks email regularly

**Analytics:**
- Google Analytics tracking is accurate
- Users don't block analytics (majority)
- Event tracking captures conversions correctly

### 15.5 Legal & Compliance Assumptions

**Privacy:**
- Simple privacy policy sufficient (no GDPR EU users)
- No sensitive personal data collected
- Email addresses stored temporarily (form submissions)
- File uploads deleted after 90 days (if stored)

**Licensing:**
- Client has proper business licenses
- Client owns rights to all project photos
- Client has permission to publish client testimonials
- No copyright issues with content provided

**Liability:**
- Website is informational only
- No e-commerce (no payment processing)
- No binding contracts signed online
- Quote form is "request" not "agreement"

### 15.6 Maintenance Assumptions

**Ongoing Updates:**
- Client can add new projects as completed
- Content updates handled by developer (first 3 months)
- Client learns to update basic content (Phase 2)
- Major updates handled by developer

**Support:**
- Developer provides 3 months post-launch support
- Bug fixes included in initial package
- Content updates charged separately (after 3 months)
- Hosting/domain renewal client responsibility

**Scaling:**
- Current architecture supports 1,000+ daily visitors
- Can upgrade to Vercel Pro if traffic increases
- Can add database later (Phase 2)
- Can add blog/CMS functionality (Phase 2)

### 15.7 Risk Mitigation

**Risk: Content Delays**
- Mitigation: Use placeholder content for demo
- Continue development while waiting for content
- Set clear deadlines with client

**Risk: Scope Creep**
- Mitigation: Clear specification document (this document!)
- Change request process (written approval + cost estimate)
- Fixed milestone payments

**Risk: Performance Issues**
- Mitigation: Follow best practices (documented)
- Regular Lighthouse audits
- Image optimization mandatory
- Performance budget enforced

**Risk: Low Conversion Rate**
- Mitigation: Strong CTAs throughout
- A/B testing after launch
- User feedback collection
- Optimize based on analytics

**Risk: Client Dissatisfaction**
- Mitigation: Regular check-ins (weekly updates)
- Demo site before production
- Training session included
- 3 rounds of revisions included

---

## 📝 Document Control

**Version History:**

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | Feb 3, 2026 | Dale | Initial specification document |

**Review Schedule:**
- Weekly during development
- Update as requirements change
- Final review before deployment

**Approval:**
- [ ] Developer (Dale)
- [ ] Client (Baring Construction)

---

## 🎯 Summary & Next Steps

This Software Specifications document provides a complete blueprint for the Baring Construction Services website. It defines:

✅ **WHAT to build** - All features, pages, and functionality  
✅ **HOW to build** - Architecture, tech stack, data models  
✅ **WHEN to build** - Phased timeline over 5 weeks  
✅ **HOW to test** - Comprehensive testing strategy  
✅ **HOW to deploy** - Deployment and monitoring plan  
✅ **HOW to measure** - Success metrics and KPIs  

**Immediate Next Steps:**

1. **Review with client** - Get approval on scope, timeline, pricing
2. **Gather content** - Request all project info, photos, company details
3. **Set up development environment** - Initialize Next.js project
4. **Begin Phase 1** - Build core pages and design system

This document should be referenced throughout development to ensure all requirements are met and the project stays on track.

---

**END OF SPECIFICATION DOCUMENT**

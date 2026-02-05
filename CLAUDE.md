# Baring Construction Services Website

## Project Overview

Professional construction company website built with Next.js and Tailwind CSS. Conversion-focused site that generates leads through contact/quote forms and showcases completed projects across Batangas, Laguna, and Cavite.

**Detailed docs** (reference when needed):
- `SOFTWARE_SPECIFICATIONS.md` — Full spec: pages, data models, APIs, user stories, phases
- `BEST_PRACTICES.md` — Code standards, security, performance, testing, SEO, deployment
- `UX_DESIGN_BEST_PRACTICES.md` — Design system, colors, typography, accessibility, mobile UX

## Tech Stack

- **Language:** TypeScript (strict mode, `tsconfig.json`)
- **Framework:** Next.js 16 (App Router, Server Components by default)
- **Styling:** Tailwind CSS v4 (theme configured in `globals.css` via `@theme`, NOT tailwind.config.js)
- **Fonts:** Montserrat (headings), Open Sans (body) — loaded via `next/font/google`
- **Icons:** Lucide React
- **Forms:** React Hook Form + Zod validation (`@hookform/resolvers`)
- **Animation:** Framer Motion
- **Email:** Resend API
- **File Storage:** Vercel Blob (`@vercel/blob`) — quote form attachments
- **Spam Protection:** reCAPTCHA v3 (gracefully skipped if keys not configured)
- **Utilities:** clsx
- **Testing:** Vitest + Testing Library + happy-dom
- **Deployment:** Vercel

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout (fonts, metadata)
│   ├── globals.css         # Tailwind theme + base styles
│   ├── page.tsx            # Homepage
│   ├── about/page.tsx      # About page
│   ├── services/page.tsx   # Services overview
│   ├── services/[slug]/    # Service detail pages (SSG via generateStaticParams)
│   ├── projects/page.tsx   # Projects listing with category filter
│   ├── projects/[slug]/    # Project detail pages (SSG via generateStaticParams)
│   ├── contact/page.tsx    # Contact page with form
│   ├── quote/page.tsx      # Quote request form with file upload
│   ├── privacy-policy/     # Privacy policy page
│   ├── api/                # API routes (contact, quote)
│   ├── error.tsx           # Error boundary page
│   ├── not-found.tsx       # Custom 404 page
│   ├── sitemap.ts          # Dynamic sitemap generation
│   └── robots.ts           # Robots.txt generation
├── components/
│   ├── ui/                 # Design system primitives (see below)
│   ├── layout/             # Navbar, Footer, MobileMenu, Container, Analytics
│   ├── sections/           # Hero, ServicesGrid, FeaturedProjects, WhyChooseUs, etc.
│   ├── forms/              # ContactForm, QuoteForm, FileUpload
│   └── project/            # ProjectCard, ProjectFilter, ProjectGallery, ProjectsListing
├── lib/
│   ├── utils.ts            # cn(), formatCurrency(), formatDate(), slugify(), truncate()
│   ├── constants.ts        # SITE_CONFIG, CONTACT_INFO, PROJECT_TYPES, BUDGET_RANGES, etc.
│   ├── validations.ts      # Zod schemas: ContactFormSchema, QuoteFormSchema
│   ├── analytics.ts        # GA4 helpers: pageview(), event()
│   ├── email.ts            # Resend email sending + HTML templates (escapeHtml)
│   ├── recaptcha.ts        # Server-side reCAPTCHA v3 verification
│   └── recaptcha-client.ts # Client-side reCAPTCHA v3 token retrieval
├── data/
│   ├── navigation.ts       # NAV_ITEMS, FOOTER_LINKS
│   ├── services.ts         # SERVICES array (6 services)
│   ├── projects.ts         # PROJECTS array (10 projects)
│   └── testimonials.ts     # TESTIMONIALS array
├── types/
│   └── index.ts            # Shared type definitions (NavItem, Service, Project, etc.)
└── __tests__/
    └── setup.ts            # Vitest test setup (happy-dom)
```

## UI Components (Design System)

All in `src/components/ui/`. Import via `@/components/ui/ComponentName`.

| Component | Props | Notes |
|-----------|-------|-------|
| **Button** | `variant` (primary/secondary/outline/ghost/white), `size` (sm/md/lg), `href`, `loading`, `disabled`, `fullWidth` | Renders `<Link>` when `href` set. `'use client'` |
| **Card** | `hover` | Composable: `Card`, `CardHeader`, `CardBody`, `CardFooter` |
| **Input** | `label`, `id`, `error`, `helpText`, `required`, `ref` | ARIA-linked error/help text |
| **Textarea** | `label`, `id`, `error`, `helpText`, `required`, `rows`, `ref` | Same pattern as Input |
| **Select** | `label`, `id`, `options`, `placeholder`, `error`, `helpText`, `required`, `ref` | Custom chevron icon, accepts string[] or {label,value}[] |
| **Badge** | `variant` (default/blue/gold/green/red), `size` (sm/md) | Pill-shaped |
| **Modal** | `open`, `onClose`, `title`, `size` (sm/md/lg/xl) | ESC/overlay close, scroll lock. `'use client'` |
| **Spinner** | `size` (sm/md/lg), `label` | Screen reader accessible |
| **Accordion** | `items` ({question,answer}[]), `className` | Single-open FAQ accordion. Framer Motion animation. `'use client'` |
| **Container** | `className` | `max-w-7xl`, responsive px. In `layout/` |

## Brand & Design

- **Primary Blue:** `baring-blue-500` (#0047AB) — CTAs, links, active states
- **Accent Gold:** `baring-gold-500` (#F5B700) — icons, badges, highlights
- **Text:** `gray-900` (headings), `gray-600` (body), `gray-400` (subtle)
- **Background:** white, `gray-50` for alternating sections
- Full color scales: `baring-blue-50` to `baring-blue-900`, `baring-gold-50` to `baring-gold-900`

## Code Conventions

- **Files:** kebab-case (`contact-form.tsx`)
- **Components:** PascalCase (`ContactForm`)
- **Functions:** camelCase (`getProjects()`)
- **Constants:** UPPER_SNAKE_CASE (`API_BASE_URL`)
- **Quotes:** Single quotes (Prettier enforced)
- **Semicolons:** Yes
- **Max line width:** 80 chars
- **Indentation:** 2 spaces

### TypeScript Conventions

- Use `interface` for object shapes, `type` for unions/aliases.
- Shared types live in `src/types/index.ts`. Import via `@/types`.
- Use `import type` for type-only imports.
- Infer Zod types: `type ContactFormData = z.infer<typeof ContactFormSchema>`.
- Component props use co-located interfaces (e.g., `interface ButtonProps`).

### Import Order

1. Type imports (`import type { Metadata } from 'next'`)
2. React/Next.js (`react`, `next/image`, `next/link`)
3. Third-party (`framer-motion`, `clsx`)
4. Internal components (`@/components/ui/Button`)
5. Data/utilities (`@/data/services`, `@/lib/utils`)

### Component Rules

- **Server Components by default.** Only add `'use client'` when using state, effects, or event handlers.
- **Use `cn()` from `@/lib/utils`** for conditional class merging.
- **Use Next.js `<Image>`** for all images — never `<img>`.
- **Use Next.js `<Link>`** for internal navigation — never `<a>`.
- **Validate forms** with Zod on both client and server side.
- Keep components small and focused — single responsibility.

## Key Requirements

- **Mobile-first** responsive design (60%+ mobile users)
- **WCAG AA** accessibility (4.5:1 contrast, 44px touch targets, semantic HTML, ARIA labels)
- **Performance** targets: LCP < 2.5s, CLS < 0.1, Lighthouse 90+
- **SEO:** Unique meta per page, JSON-LD structured data, sitemap, Open Graph tags
- **Security:** Input sanitization, CSRF protection, rate limiting, secure headers (configured in next.config.mjs)
- **Max 7 nav items**, primary CTA is always "Request Quote"
- **Social links:** Facebook icon in Footer (Company Info column) and Contact page card, sourced from `CONTACT_INFO.facebook`

## Documentation Updates

**After finishing any coding work and verifying everything works with no errors, always update `README.md` and `CLAUDE.md` to reflect the changes.**

Keep these files in sync:

- **`CLAUDE.md`** — Update after **structural changes**: new components, new directories, new scripts, new conventions, new dependencies. This is the primary living doc.
- **`README.md`** — Update at the **end of each phase** or when user-facing project info changes (features, setup steps, structure).
- **`SOFTWARE_SPECIFICATIONS.md`, `BEST_PRACTICES.md`, `UX_DESIGN_BEST_PRACTICES.md`** — **Do not update.** These are reference blueprints, not living docs.

## Git Workflow

- **Create a new branch before starting each task or phase.** Every task/phase gets its own branch for tracking and auditability.
- Branch naming: `feature/<phase-or-task-name>` (e.g., `feature/homepage`, `feature/contact-form`, `feature/seo-optimization`)
- Commit messages: single-line, concise.
- Push the branch to GitHub when the task is complete.
- Base new branches off `master` (or the current main branch).

## Commands

```bash
npm run dev          # Development server
npm run build        # Production build
npm run start        # Production server
npm run lint         # ESLint
npm run type-check   # TypeScript type checking (tsc --noEmit)
npm run format       # Prettier format
npm run format:check # Prettier check
npm run test         # Run tests (Vitest)
npm run test:watch   # Run tests in watch mode
npm run test:coverage # Run tests with coverage report
```

## Testing

Test suite uses **Vitest** with **Testing Library** and **happy-dom**. Config in `vitest.config.ts`, setup in `src/__tests__/setup.ts`.

Test files are co-located next to source files using the `*.test.ts(x)` convention:

- **lib/** — utils, validations, email, analytics, recaptcha, recaptcha-client
- **data/** — projects, services data integrity
- **api/** — contact and quote route handlers
- **components/** — Modal, Accordion, FileUpload, ProjectFilter, ProjectGallery, ProjectsListing, Hero, ServicesGrid, Footer, MobileMenu, Navbar, ContactForm, QuoteForm

## Environment Variables

See `.env.example` for all required variables. Never commit `.env.local`.

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_SITE_URL` | Production site URL | Yes |
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 measurement ID | No |
| `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` | reCAPTCHA v3 site key | No |
| `RECAPTCHA_SECRET_KEY` | reCAPTCHA v3 secret key | No |
| `RESEND_API_KEY` | Resend email API key | Yes |
| `EMAIL_FROM` | Sender email address | Yes |
| `EMAIL_TO` | Recipient email address | Yes |
| `BLOB_READ_WRITE_TOKEN` | Vercel Blob storage token (quote file uploads) | Yes |

# Baring Construction Services Website

## Project Overview

Professional construction company website built with Next.js and Tailwind CSS. Conversion-focused site that generates leads through contact/quote forms and showcases completed projects across Metro Manila, Rizal, and Pampanga.

**Detailed docs** (reference when needed):
- `SOFTWARE_SPECIFICATIONS.md` — Full spec: pages, data models, APIs, user stories, phases
- `BEST_PRACTICES.md` — Code standards, security, performance, testing, SEO, deployment
- `UX_DESIGN_BEST_PRACTICES.md` — Design system, colors, typography, accessibility, mobile UX

## Tech Stack

- **Framework:** Next.js 16 (App Router, Server Components by default)
- **Styling:** Tailwind CSS v4 (theme configured in `globals.css` via `@theme`, NOT tailwind.config.js)
- **Fonts:** Montserrat (headings), Open Sans (body) — loaded via `next/font/google`
- **Icons:** Lucide React
- **Forms:** React Hook Form + Zod validation (`@hookform/resolvers`)
- **Animation:** Framer Motion
- **Email:** Resend API
- **Utilities:** clsx
- **Deployment:** Vercel

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.js           # Root layout (fonts, metadata)
│   ├── globals.css         # Tailwind theme + base styles
│   ├── page.js             # Homepage
│   ├── about/page.js       # About page
│   ├── services/page.js    # Services overview
│   ├── services/[slug]/    # Service detail pages (SSG via generateStaticParams)
│   ├── api/                # API routes (contact, quote)
│   └── [page]/page.js     # projects, contact, quote
├── components/
│   ├── ui/                 # Design system primitives (see below)
│   ├── layout/             # Navbar, Footer, MobileMenu, Container
│   ├── sections/           # Hero, ServicesGrid, FeaturedProjects, WhyChooseUs, etc.
│   ├── forms/              # ContactForm, QuoteForm, FileUpload, FormField
│   └── project/            # ProjectCard, ProjectFilter, ProjectGallery
├── lib/
│   ├── utils.js            # cn(), formatCurrency(), formatDate(), slugify(), truncate()
│   ├── constants.js        # SITE_CONFIG, CONTACT_INFO, PROJECT_TYPES, BUDGET_RANGES
│   ├── validations.js      # Zod schemas: ContactFormSchema, QuoteFormSchema
│   └── analytics.js        # GA4 helpers: pageview(), event()
├── data/
│   ├── navigation.js       # NAV_ITEMS, FOOTER_LINKS
│   ├── services.js         # SERVICES array (6 services)
│   ├── projects.js         # PROJECTS array (6 projects)
│   └── testimonials.js     # TESTIMONIALS array
└── styles/
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

- **Files:** kebab-case (`contact-form.jsx`)
- **Components:** PascalCase (`ContactForm`)
- **Functions:** camelCase (`getProjects()`)
- **Constants:** UPPER_SNAKE_CASE (`API_BASE_URL`)
- **Quotes:** Single quotes (Prettier enforced)
- **Semicolons:** Yes
- **Max line width:** 80 chars
- **Indentation:** 2 spaces

### Import Order

1. React/Next.js (`react`, `next/image`, `next/link`)
2. Third-party (`framer-motion`, `clsx`)
3. Internal components (`@/components/ui/Button`)
4. Data/utilities (`@/data/services`, `@/lib/utils`)

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

## Documentation Updates

After coding changes, keep these files in sync:

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
npm run format       # Prettier format
npm run format:check # Prettier check
```

## Environment Variables

See `.env.example` for all required variables. Never commit `.env.local`.

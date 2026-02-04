# Baring Construction Services Website

Professional construction company website built with Next.js and Tailwind CSS. Conversion-focused site that generates leads through contact/quote forms and showcases completed projects across Batangas, Laguna, and Cavite.

## Features

- Lightning-fast performance with Next.js App Router and Server Components
- Responsive, mobile-first design with Tailwind CSS
- SEO-optimized with JSON-LD structured data, Open Graph, sitemap, and robots.txt
- Contact and quote request forms with client + server Zod validation
- reCAPTCHA v3 spam prevention on all forms
- Google Analytics 4 with custom conversion event tracking
- Project portfolio (10 projects) with category filtering and Framer Motion animations
- Image lightbox gallery with keyboard navigation
- Email notifications and auto-replies via Resend API
- Drag-and-drop file upload on quote requests with Vercel Blob storage
- Accessibility compliant (WCAG AA, semantic HTML, ARIA labels, 44px touch targets)
- Security hardened with CSP, HSTS, Permissions-Policy, rate limiting, and input sanitization
- Custom 404 and error boundary pages
- 242 unit/integration tests with Vitest and Testing Library

## Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript (strict mode) |
| Styling | Tailwind CSS v4 |
| Icons | Lucide React |
| Forms | React Hook Form + Zod |
| Animation | Framer Motion |
| Email | Resend |
| File Storage | Vercel Blob |
| Testing | Vitest + Testing Library |
| Deployment | Vercel |

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd baring-construction

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local
# Fill in the values in .env.local
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm run start
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run type-check` | TypeScript type checking |
| `npm run format` | Format code with Prettier |
| `npm run format:check` | Check formatting |
| `npm run test` | Run tests (Vitest) |
| `npm run test:watch` | Run tests in watch mode |
| `npm run test:coverage` | Run tests with coverage report |

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage with hero, services grid, featured projects, testimonials, CTA |
| `/about` | Company story, mission, values, capabilities, service areas |
| `/services` | Services overview (6 services with icons and sub-service lists) |
| `/services/[slug]` | Service detail with sub-services, FAQs, process steps, CTA |
| `/projects` | Project portfolio with category filtering (10 projects, 5 categories) |
| `/projects/[slug]` | Project detail with gallery, specs, challenges/solutions, related projects |
| `/contact` | Contact form, phone/email cards, service areas map |
| `/quote` | Multi-section quote form with file upload and "What Happens Next" steps |
| `/privacy-policy` | Privacy policy |

## API Routes

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/contact` | POST | Contact form (Zod validation, reCAPTCHA v3, rate limiting, email + auto-reply) |
| `/api/quote` | POST | Quote request (FormData, Zod validation, reCAPTCHA v3, file validation, email) |

## Project Structure

```
src/
├── app/                    # Pages and API routes
│   ├── api/                # contact, quote endpoints
│   ├── services/[slug]/    # Dynamic service pages (SSG)
│   ├── projects/[slug]/    # Dynamic project pages (SSG)
│   └── ...                 # Static pages
├── components/
│   ├── ui/                 # Design system (Button, Card, Input, Modal, etc.)
│   ├── layout/             # Navbar, Footer, MobileMenu, Container, Analytics
│   ├── sections/           # Hero, ServicesGrid, FeaturedProjects, ProcessSteps, etc.
│   ├── forms/              # ContactForm, QuoteForm, FileUpload
│   └── project/            # ProjectCard, ProjectFilter, ProjectGallery, ProjectsListing
├── lib/                    # Utilities, constants, validations, email, analytics, reCAPTCHA
├── data/                   # Static data (services, projects, testimonials, navigation)
├── types/                  # Shared TypeScript type definitions
└── __tests__/              # Test setup (Vitest + happy-dom)
```

## Design System

Reusable UI primitives in `src/components/ui/`:

| Component | Description |
|-----------|-------------|
| **Button** | 5 variants (primary, secondary, outline, ghost, white), 3 sizes, loading state, link mode |
| **Card** | Composable card with CardHeader, CardBody, CardFooter |
| **Input** | Text input with label, error/help text, ARIA bindings |
| **Textarea** | Multi-line input, same API as Input |
| **Select** | Dropdown with custom chevron, accepts strings or objects |
| **Badge** | Category/status labels with color variants |
| **Modal** | Dialog with ESC/overlay close, scroll lock |
| **Spinner** | Branded loading indicator, screen reader accessible |
| **Accordion** | FAQ accordion with Framer Motion animation |

## Environment Variables

Copy `.env.example` to `.env.local`. Never commit `.env.local` to version control.

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

## Security

- **CSP** (Content-Security-Policy) configured in `next.config.mjs`
- **HSTS** with 2-year max-age, includeSubDomains, preload
- **X-Frame-Options**, **X-Content-Type-Options**, **Referrer-Policy**, **Permissions-Policy**
- **Rate limiting** on contact API (3 requests/minute/IP)
- **reCAPTCHA v3** on contact and quote forms (gracefully skipped if keys not configured)
- **Input sanitization** with `escapeHtml()` in email templates
- **Zod validation** on both client and server side

## Documentation

- `CLAUDE.md` — Living project reference (conventions, structure, components)
- `SOFTWARE_SPECIFICATIONS.md` — Full project specification
- `BEST_PRACTICES.md` — Coding standards and guidelines
- `UX_DESIGN_BEST_PRACTICES.md` — Design system and UX guidelines

## Deployment

This project is configured for deployment on [Vercel](https://vercel.com). Push to the `master` branch to trigger a production deployment.

## License

Private project. All rights reserved.

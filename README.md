# Baring Construction Services Website

Professional construction company website built with Next.js and Tailwind CSS.

## Features

- Lightning-fast performance with Next.js App Router and Server Components
- Responsive, mobile-first design with Tailwind CSS
- SEO-optimized with structured data, Open Graph, and sitemap
- Contact and quote request forms with Zod validation
- Project portfolio with category filtering and image galleries
- Email notifications via Resend API
- Accessibility compliant (WCAG AA)
- Security hardened with CSP, HSTS, and input sanitization

## Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js 16 (App Router) |
| Styling | Tailwind CSS v4 |
| Icons | Lucide React |
| Forms | React Hook Form + Zod |
| Animation | Framer Motion |
| Email | Resend |
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
| `npm run format` | Format code with Prettier |
| `npm run format:check` | Check formatting |

## Project Structure

```
src/
├── app/                # Pages and API routes
├── components/
│   ├── ui/             # Reusable UI components (Button, Card, Input, etc.)
│   ├── layout/         # Navbar, Footer, MobileMenu
│   ├── sections/       # Homepage sections (Hero, Services, Projects, etc.)
│   ├── forms/          # Contact and Quote forms
│   └── project/        # Project cards, filters, gallery
├── lib/                # Utilities, constants, validations, analytics
└── data/               # Static data (services, projects, testimonials)
```

## Environment Variables

See `.env.example` for all required variables. Never commit `.env.local` to version control.

## Documentation

- `SOFTWARE_SPECIFICATIONS.md` — Full project specification
- `BEST_PRACTICES.md` — Coding standards and guidelines
- `UX_DESIGN_BEST_PRACTICES.md` — Design system and UX guidelines

## Deployment

This project is configured for deployment on [Vercel](https://vercel.com). Push to the `main` branch to trigger a production deployment.

## License

Private project. All rights reserved.

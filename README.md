# KTP @ USC: Spring 2026 Projects

Landing page for the Kappa Theta Pi USC chapter's Spring 2026 client project portfolio. Built to give clients, members, and prospects quick access to all three active projects.

**Live:** [ktp-hub.vercel.app](https://ktp-hub.vercel.app)

## Projects Featured

| Project | Client | Focus |
|---------|--------|-------|
| Inovient | Inovient | AI SaaS Pricing and Market Strategy |
| Pallas Care | Pallas Care | Data-Driven Home Care Analytics |
| Immuny | Immuny | Emergency UX Redesign |

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Geist (Vercel)
- **Animations**: CSS transitions + IntersectionObserver scroll reveal
- **Deployment**: Vercel

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

```
app/
  page.tsx          # Main landing page
  layout.tsx        # Root layout with metadata
  globals.css       # Global styles, animations, scroll reveal
components/
  nav.tsx           # Top navigation
  project-card.tsx  # Horizontal project card with scroll reveal
lib/
  projects.ts       # Project data (name, description, accent, links)
  use-scroll-reveal.ts  # IntersectionObserver hook
public/
  ktp-logo.png      # KTP logo
  logos/            # Client logos (inovient, pallas, immuny)
```

## About KTP

Kappa Theta Pi is USC's premier professional technology fraternity, building real products and strategies for real clients one cohort at a time.

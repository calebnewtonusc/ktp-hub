# KTP @ USC — Spring 2026 Project Hub

![Next.js](https://img.shields.io/badge/Next.js_15-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![React 19](https://img.shields.io/badge/React_19-61DAFB?style=flat-square&logo=react&logoColor=black)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel)

A polished landing page for Kappa Theta Pi's USC chapter, showcasing the Spring 2026 client project portfolio with links to each project's live deliverable site.

**Live:** https://ktp-hub.vercel.app

> Screenshot

## Features

- **Project Portfolio Cards** — Horizontal scroll-reveal cards for each client engagement (Inovient, Pallas Care, Immuny) with accent colors, descriptions, and direct links to deliverable sites
- **Scroll Reveal Animations** — IntersectionObserver-powered reveal animations trigger as cards enter the viewport for a polished, cinematic feel
- **Ambient Periwinkle Glow** — Radial gradient background with grid texture overlay for a premium dark-mode aesthetic
- **Responsive Navigation** — Sticky top nav linking to the chapter website and each project section
- **Project Status Badges** — Live "Spring 2026 · 3 Projects Active" indicator on the hero
- **Client Logo Display** — Logos for Inovient, Pallas Care, and Immuny surfaced directly on each project card

## Projects Featured

| Project | Client | Focus |
|---------|--------|-------|
| Inovient | Inovient | AI SaaS Pricing and Market Strategy |
| Pallas Care | Pallas Care | Data-Driven Home Care Analytics |
| Immuny | Immuny | Emergency UX Redesign |

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Fonts | Geist (Vercel) |
| Animations | CSS transitions + IntersectionObserver scroll reveal |
| Deployment | Vercel |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
app/
  page.tsx              # Main landing page
  layout.tsx            # Root layout with metadata
  globals.css           # Global styles, animations, scroll reveal
components/
  nav.tsx               # Top navigation bar
  project-card.tsx      # Horizontal project card with scroll reveal
lib/
  projects.ts           # Project data (name, description, accent color, links)
  use-scroll-reveal.ts  # IntersectionObserver hook
public/
  ktp-logo.png          # KTP logo
  logos/                # Client logos (inovient, pallas, immuny)
```

## About KTP

Kappa Theta Pi is USC's premier professional technology fraternity. Each semester, chapter members work directly with real clients across strategy, engineering, design, and data — delivering products that ship.

**Chapter website:** https://ktp-website-2026.vercel.app

## Author

**Caleb Newton** — [calebnewton.me](https://calebnewton.me)
Kappa Theta Pi · USC · Spring 2026

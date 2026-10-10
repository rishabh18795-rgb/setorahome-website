# SetoraHome Website

Marketing website for **SetoraHome**, doorstep home services in Varanasi, Uttar Pradesh.
_Your Home, Our Responsibility._

The site is built to generate WhatsApp enquiries. Every service has its own SEO page with a pre-filled WhatsApp message, and the booking form hands its details to WhatsApp. There is no backend, database or online payment.

> **Status:** source code only. This repository is **not** deployed to www.setorahome.com. The existing live site stays in place until the owner approves a production deployment.

## Tech stack

| | |
|---|---|
| Framework | Next.js 16 (App Router, Turbopack), React 19, TypeScript |
| Styling | Tailwind CSS v4 (design tokens in `src/app/globals.css`) |
| Fonts | Poppins (headings) and Inter (body) via `next/font`, self-hosted at build |
| Images | Local WebP sources served through `next/image` (AVIF/WebP, responsive sizes) |
| Animation | CSS only (marquee and scroll-snap carousel), with `prefers-reduced-motion` respected. No animation library is needed. |
| Rendering | All 23 routes are statically prerendered |

## Pages

| Route | Purpose |
|---|---|
| `/` | Hero, service marquee, service cards, scene carousel, how it works, pricing teaser, FAQs, CTA |
| `/services` | All nine services |
| `/services/[slug]` | Nine service pages: intro, inclusions, benefits, process, pricing factors, FAQs, booking form, related services |
| `/pricing` | "Starting from" prices with explanation |
| `/about` | Brand story and principles |
| `/contact` | Contact channels and booking form |
| `/privacy` | Privacy notice |
| `/sitemap.xml`, `/robots.txt`, `/manifest.webmanifest`, `/opengraph-image.jpg` | Generated SEO assets |

Service slugs: `home-shifting-relocation`, `home-organisation`, `cleaning-home-maintenance`, `repair-maintenance`, `doorstep-car-washing`, `gardening-plant-care`, `senior-citizen-care`, `patient-hospital-assistance`, `scrap-old-items`.

Old live-site URLs (e.g. `/packages`, `/services/home-cleaning`, `/services/car-vehicle-care`) permanently redirect to their new equivalents. See `next.config.ts`.

## Editing content

- **Business details** (phone, WhatsApp, email, socials, domain): `src/lib/site.ts`
- **Services, prices, FAQs, image alt text**: `src/lib/services.ts`
- **Service images**: `public/images/services/<slug>.webp` (16:10, about 1254 px wide)
- **Logo / icons**: `public/brand/`, `src/app/icon.png`, `src/app/apple-icon.png`, `src/app/opengraph-image.jpg`

## Development

Requirements: Node.js 20.9+ (tested with Node 24) and npm.

```bash
npm install
npm run dev          # http://localhost:3000
```

## Quality checks

```bash
npm run lint         # ESLint (next/core-web-vitals + TypeScript rules)
npx tsc --noEmit     # Type check
npm run build        # Production build (fails on type errors)
npm run start        # Serve the production build on :3000
```

## Environment variables

Copy `.env.example` to `.env.local` if you need to override defaults. Never commit `.env*` files.

| Variable | Default | Used for |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | `https://www.setorahome.com` | Canonical URLs, sitemap, robots, Open Graph, JSON-LD |

No API keys or secrets are required.

## Deployment (Vercel)

1. On vercel.com, choose **Add New → Project** and import this GitHub repository. The framework is auto-detected as Next.js; no build settings need to change.
2. Add `NEXT_PUBLIC_SITE_URL` only if the production domain is not `https://www.setorahome.com`.
3. Deploy. This creates a **preview / project URL** (`*.vercel.app`). Vercel serves non-production preview deployments with `noindex`.
4. **Production domain:** only after approval. Add `www.setorahome.com` in **Project → Settings → Domains** and update DNS. The current live site (a Next.js app with login, dashboard and admin routes behind Cloudflare) will be replaced, so plan where those features will live first.

Any Node host that runs `npm run build && npm run start` also works.

## Booking form behaviour (important)

The form validates name, Indian mobile number, locality/pincode, service and consent, then opens WhatsApp with a pre-filled message. **It does not store or send data by itself**, and the site never claims that a booking succeeded. To capture submissions server-side later, add a route handler or form service and update the privacy notice.

## SEO notes

- Unique title, description, canonical URL and Open Graph tags on every page
- JSON-LD: `LocalBusiness` (site-wide), `WebSite`, `Service` (with `minPrice` as a starting price) and `BreadcrumbList`
- No review, rating or `FAQPage` markup. Publish reviews only when they are real and verifiable.
- Add a street address and opening hours to `LocalBusiness` in `src/app/layout.tsx` once confirmed, and create or verify a Google Business Profile.

See `docs/AUDIT_AND_RESEARCH.md` for the audit of the old site and the Varanasi market research.

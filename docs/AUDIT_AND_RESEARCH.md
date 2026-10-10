# SetoraHome — Website Audit & Market Research

_Prepared 10 Oct 2026 before the redesign. Facts observed directly are marked **[observed]**; findings from web sources are marked **[source]**; judgement calls are marked **[assumption]**._

## 1. Audit of the current site (https://www.setorahome.com)

### Platform
- **[observed]** Next.js app (`x-powered-by: Next.js`) behind Cloudflare. `robots.txt` disallows `/admin`, `/dashboard`, `/api/`, `/login`, `/signup`, so the live site is an application with customer accounts and an admin area, not a static brochure.
- **Migration implication:** this repository is a marketing website only. Deploying it to the production domain would remove the live `/login`, `/signup`, `/dashboard`, `/admin`, `/planner` and `/api` features. Decide whether those are still needed (and where they will live, e.g. `app.setorahome.com`) before switching DNS.

### Technical SEO
| Check | Finding |
|---|---|
| Page titles | **[observed]** All 18 checked URLs share one title: "SetoraHome \| Move in. We'll handle the rest." |
| Meta descriptions | **[observed]** One identical description on every page; it doesn't mention Varanasi or most services. |
| Canonical tags | **[observed]** None on any page. |
| H1 | **[observed]** One H1 per page; the homepage H1 is "Your home. Our responsibility." with no service or location keywords. |
| "Varanasi" usage | **[observed]** 2 mentions on the homepage, 0 on `/services`, `/pricing`-equivalent `/packages`, `/contact`. |
| Sitemap | **[observed]** 16 URLs, but it lists service slugs (`/services/electrical`, `/plumbing`, `/carpentry`, `/interior-decoration`, `/garden-landscape`, `/home-organization`) that differ from the slugs the site links to (`/services/home-shifting`, `/car-vehicle-care`, `/patient-assistance`, etc.). Many linked service pages are missing from the sitemap. |
| Soft 404s | **[observed]** Unknown service URLs return HTTP 200 with a "Something helpful is on its way" page instead of a 404. |
| Structured data | **[observed]** `Organization` only; no `LocalBusiness`, no `Service`, no `BreadcrumbList`. `areaServed` is "IN", not Varanasi. |
| Social sharing | **[observed]** No `og:image`; `twitter:card` = `summary`. |
| Speed | PageSpeed Insights API quota was exhausted during the audit, so no lab/field scores were recorded for the old site. Images are served via `next/image` (WebP), so the main risks are elsewhere. |

### Content & trust
- **[observed]** `/reviews` says "Coming soon. Real stories are on their way" but also shows three named testimonials attributed to Bengaluru, Hyderabad and Pune. For a business launching in Varanasi these look like placeholder copy and could be read as fabricated reviews. **Recommendation:** remove them until real, verifiable reviews exist. The new site doesn't publish any reviews or ratings.
- **[observed]** A "Festive move-in offer… discover available discounts" banner appears without a concrete offer.
- **[observed]** Contact email on the live site is `info@setorahome.com`; the brief specifies `support@setorahome.com` (used in the new build). Confirm which mailbox is monitored.
- **[observed]** The live site lists 15 services, including Painting, Interior Design, Construction, Event Management and Custom Services. The new site lists only the nine services in the brief. Old URLs for removed services 308-redirect to `/services`.
- **[observed]** WhatsApp and `tel:` links use the correct number (+91 94737 43389), but the WhatsApp messages are generic and don't name the service.

## 2. Market & keyword research (Varanasi)

No keyword-volume tool (e.g. Google Keyword Planner or Search Console) was available, so **no search volumes or rankings are claimed**. The findings below come from live search results.

| Topic | What the search results show | Opportunity |
|---|---|---|
| Home cleaning | Urban Company has Varanasi cleaning pages (e.g. furnished apartment deep clean listed from ₹3,499) **[source 1]**; local firms such as Ready To Clean appear on directory listings **[source 2]**. | Compete on clarity: small-job entry prices and WhatsApp-first booking. |
| Repairs (electrician/plumber) | Urban Company publishes Varanasi category pages for electricians, plumbers, carpenters and appliance repair **[source 3]**. | Strong national competition. Position as "one number for many fixes" and photo-first diagnosis. |
| Packers & movers | Results are dominated by moving companies and directory listings (IndiaMART, Agarwal Packers, Writer Relocations, local movers) **[source 4, 5, 6]**. | Differentiate on local moves plus unpacking, setup and cleaning bundles. |
| Doorstep car wash | No Varanasi-based doorstep car-wash provider surfaced; results were equipment sellers and providers in other cities **[source 7]**. | **Content gap**: a strong, specific Varanasi page can stand out. |
| Senior care | National providers (Samarth, HCAH) appear, but none clearly confirms Varanasi coverage; self-listed individual helpers exist **[source 8, 9]**. | **Content gap**: families living outside Varanasi caring for parents is a clear intent. |
| Patient / hospital assistance | Tata Memorial's Varanasi cancer hospitals (HBCH and MPMMCC) serve a catchment across UP, Bihar, Jharkhand, MP and Chhattisgarh; about one-third of paediatric patients travel 4–8 hours **[source 10, 11]**. | Out-of-town patient families need non-medical help. Content must be clear that the service is non-medical. |
| Scrap pickup | Online kabadiwala platforms (The Kabadiwala, ScrapUncle) appear but don't clearly cover Varanasi **[source 12, 13]**. | **Content gap** for "scrap pickup / old furniture removal Varanasi". |

**Search-intent patterns [assumption, based on the results above]:** queries pair a service with the city ("… in Varanasi") or a locality (Lanka, Sigra, Bhelupur, Mahmoorganj, Cantonment). Users compare prices and want a fast contact path. The new site uses "Varanasi" naturally in titles, H1s and copy, and asks for locality or pincode in the form. It does **not** create thin per-locality pages.

### Sources
1. https://www.urbancompany.com/bangalore-professional-home-cleaning-varanasi
2. https://ueni.com/en-in/b/ready-to-clean
3. https://www.urbancompany.com/quick-links/varanasi-electricians
4. https://m.indiamart.com/jetcargopackersmovers
5. https://www.agarwalpackers.com/packersmoversvaranasi.html
6. https://www.writerrelocations.com/feeds/service/packers-movers-varanasi
7. https://dir.indiamart.com/varanasi/car-wash-equipment.html
8. https://care.samarth.community/blog/medical-care/home-care-attendant-elderly-india/
9. https://hcah.in/home-attendant-services
10. https://tmc.gov.in/tmh/index.php/hbch-varanasi
11. https://tmc.gov.in/TMH/PDF/varanasi/DA/9_Pediatric%20Oncology.pdf
12. https://www.thekabadiwala.com/individual
13. https://yourstory.com/companies/scrapuncle-swapeco

Google guidance followed: [SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide), [LocalBusiness structured data](https://developers.google.com/search/docs/appearance/structured-data/local-business), [Core Web Vitals](https://developers.google.com/search/docs/appearance/core-web-vitals).

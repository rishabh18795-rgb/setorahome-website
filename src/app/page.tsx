import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import FaqList from "@/components/FaqList";
import JsonLd from "@/components/JsonLd";
import SceneCarousel from "@/components/SceneCarousel";
import ServiceCard from "@/components/ServiceCard";
import ServiceMarquee from "@/components/ServiceMarquee";
import { ArrowRightIcon, CheckIcon, WhatsAppIcon } from "@/components/icons";
import { generalFaqs, getService, services } from "@/lib/services";
import { formatINR, site, waLink } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const hero = {
  main: getService("cleaning-home-maintenance")!,
  top: getService("doorstep-car-washing")!,
  bottom: getService("senior-citizen-care")!,
};

const scenes = [
  { slug: "home-shifting-relocation", headline: "Packed, moved and set up, without the chaos of shifting day." },
  { slug: "cleaning-home-maintenance", headline: "A deep clean before festivals, guests or a new beginning." },
  { slug: "home-organisation", headline: "Wardrobes and kitchens that finally make sense." },
  { slug: "repair-maintenance", headline: "That leaking tap and loose switch, sorted in one visit." },
  { slug: "doorstep-car-washing", headline: "A clean car without leaving your parking spot." },
  { slug: "gardening-plant-care", headline: "Balcony and terrace plants that stay green through the seasons." },
  { slug: "scrap-old-items", headline: "Old furniture and scrap picked up from your door." },
  { slug: "senior-citizen-care", headline: "Everyday help for parents, while you are in another city." },
  { slug: "patient-hospital-assistance", headline: "An extra pair of hands for hospital visits." },
].map((s) => ({ service: getService(s.slug)!, headline: s.headline }));

const steps = [
  { title: "Message us on WhatsApp", text: "Choose a service and share your locality, preferred date and time." },
  { title: "Share a few details", text: "Photos or a short description help us understand the job properly." },
  { title: "Get your final quotation", text: "We confirm availability and the price before any work begins." },
  { title: "Service at your doorstep", text: "Our team arrives at the agreed time. Updates continue on WhatsApp." },
];

const reasons = [
  { title: "One number for the whole home", text: "Shifting, cleaning, repairs, car care, plants and family support, booked through the same WhatsApp chat." },
  { title: "Price agreed before work begins", text: "Transparent starting prices, then a final quotation you approve. No surprises after the job." },
  { title: "Built for Varanasi", text: "A local launch focused on the city's homes, lanes, apartments and everyday needs." },
  { title: "Care for families far away", text: "Children living in other cities can arrange help for parents in Varanasi and receive updates on WhatsApp." },
];

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          "@id": `${site.url}/#website`,
          url: site.url,
          name: site.name,
          publisher: { "@id": `${site.url}/#organization` },
          inLanguage: "en-IN",
        }}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-ink text-white">
        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(60%_60%_at_85%_10%,rgba(248,90,5,0.28),transparent_60%),radial-gradient(40%_50%_at_0%_100%,rgba(248,90,5,0.12),transparent_60%)]" />
        <div aria-hidden="true" className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.6)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
        <div className="container-x relative grid items-center gap-12 pt-10 pb-14 sm:pt-14 lg:grid-cols-12 lg:gap-10 lg:pt-20 lg:pb-24">
          <div className="lg:col-span-6">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-semibold text-white/85 sm:text-sm">
              <span className="relative flex size-2"><span className="absolute inline-flex size-full animate-ping rounded-full bg-brand opacity-60 motion-reduce:hidden" /><span className="relative inline-flex size-2 rounded-full bg-brand" /></span>
              Now serving Varanasi · 9 doorstep services
            </p>
            <h1 className="mt-5 text-[2.35rem] font-bold leading-[1.08] sm:text-5xl lg:text-[3.1rem] xl:text-[3.5rem]">
              Your Home Has a Problem? <span className="text-brand">We Have a Solution!</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
              SetoraHome brings dependable help to your doorstep in Varanasi for shifting, cleaning, repairs,
              car washing, gardening, scrap pickup, senior care and hospital assistance. Tell us what you need
              on WhatsApp and get a clear quotation before any work begins.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link href="/contact" className="btn btn-brand">
                Book a Service <ArrowRightIcon />
              </Link>
              <Link href="#services" className="btn btn-ghost-light">
                Explore Our Services
              </Link>
            </div>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-5 flex w-full items-center gap-3 rounded-2xl border border-wa/30 bg-wa/10 p-3 pr-5 transition-colors hover:bg-wa/20 sm:inline-flex sm:w-auto"
            >
              <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-wa text-[#062b14]"><WhatsAppIcon className="size-6" /></span>
              <span className="leading-tight">
                <span className="block text-sm text-white/70">Quick enquiry on WhatsApp</span>
                <span className="block font-display text-lg font-semibold">{site.phoneDisplay}</span>
              </span>
              <ArrowRightIcon className="ml-auto size-5 text-wa transition-transform group-hover:translate-x-1" />
            </a>
            <ul className="mt-8 grid gap-2.5 text-sm text-white/80 sm:grid-cols-2">
              {["Quotation shared before work starts", `Starting prices from ${formatINR(99)}`, "Book for yourself or your parents", "Chat in Hindi or English"].map((t) => (
                <li key={t} className="flex items-center gap-2.5"><CheckIcon className="size-4 text-brand" />{t}</li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-6">
            <div className="grid grid-cols-5 grid-rows-2 gap-3 sm:gap-4">
              <figure className="relative col-span-3 row-span-2 aspect-[3/4] overflow-hidden rounded-[1.75rem] sm:aspect-[4/5]">
                <Image src={hero.main.image} alt={hero.main.imageAlt} fill loading="eager" fetchPriority="high" sizes="(min-width: 1024px) 30vw, 60vw" className="object-cover object-[60%_50%]" />
                <figcaption className="absolute inset-x-3 bottom-3 rounded-2xl bg-ink/75 p-3 text-xs backdrop-blur sm:text-sm">
                  <span className="font-semibold">{hero.main.name}</span>
                  <span className="block text-white/70">Starting from {formatINR(hero.main.startingPrice)}</span>
                </figcaption>
              </figure>
              <figure className="relative col-span-2 overflow-hidden rounded-[1.5rem]">
                <Image src={hero.top.image} alt={hero.top.imageAlt} fill sizes="(min-width: 1024px) 20vw, 40vw" className="object-cover object-[45%_50%]" />
              </figure>
              <figure className="relative col-span-2 overflow-hidden rounded-[1.5rem]">
                <Image src={hero.bottom.image} alt={hero.bottom.imageAlt} fill sizes="(min-width: 1024px) 20vw, 40vw" className="object-cover object-[40%_40%]" />
              </figure>
            </div>
          </div>
        </div>

        <div className="relative pb-12 sm:pb-16">
          <ServiceMarquee />
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="scroll-mt-20 bg-sand py-16 sm:py-24" aria-labelledby="services-title">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <p className="eyebrow">Our services</p>
              <h2 id="services-title" className="mt-3 text-3xl font-semibold sm:text-[2.6rem] sm:leading-tight">
                Everything your home needs, one WhatsApp away
              </h2>
              <p className="mt-4 text-muted sm:text-lg">
                Nine doorstep services for homes and families in Varanasi. Prices shown are starting prices; your final quotation depends on the job.
              </p>
            </div>
            <Link href="/pricing" className="inline-flex items-center gap-2 font-semibold text-ink hover:text-brand-700">
              See all starting prices <ArrowRightIcon />
            </Link>
          </div>
          <div className="mt-10 grid gap-5 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((s) => <ServiceCard key={s.slug} service={s} />)}
          </div>
        </div>
      </section>

      {/* SCENES CAROUSEL */}
      <section className="overflow-hidden py-16 sm:py-24" aria-labelledby="scenes-title">
        <div className="container-x">
          <div className="max-w-2xl">
            <p className="eyebrow">At your doorstep</p>
            <h2 id="scenes-title" className="mt-3 text-3xl font-semibold sm:text-[2.6rem] sm:leading-tight">Real jobs, done properly</h2>
            <p className="mt-4 text-muted sm:text-lg">Swipe through the everyday problems we help Varanasi households solve.</p>
          </div>
          <div className="mt-4">
            <SceneCarousel scenes={scenes} />
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="scroll-mt-20 bg-ink py-16 text-white sm:py-24" aria-labelledby="how-title">
        <div className="container-x">
          <div className="max-w-2xl">
            <p className="eyebrow !text-brand">How it works</p>
            <h2 id="how-title" className="mt-3 text-3xl font-semibold sm:text-[2.6rem] sm:leading-tight">From one message to a sorted home</h2>
          </div>
          <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <li key={s.title} className="relative rounded-3xl border border-white/10 bg-white/[0.04] p-6">
                <span className="font-display text-5xl font-bold text-brand/90">0{i + 1}</span>
                <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-white/70">{s.text}</p>
              </li>
            ))}
          </ol>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn btn-wa"><WhatsAppIcon /> Start on WhatsApp</a>
            <Link href="/contact" className="btn btn-ghost-light">Use the booking form</Link>
          </div>
        </div>
      </section>

      {/* WHY + PRICING TEASER */}
      <section className="py-16 sm:py-24" aria-labelledby="why-title">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="eyebrow">Why SetoraHome</p>
            <h2 id="why-title" className="mt-3 text-3xl font-semibold sm:text-[2.6rem] sm:leading-tight">Your home, our responsibility</h2>
            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              {reasons.map((r) => (
                <div key={r.title}>
                  <span className="inline-flex size-10 items-center justify-center rounded-xl bg-brand-50 text-brand-700"><CheckIcon className="size-5" /></span>
                  <h3 className="mt-4 text-lg font-semibold">{r.title}</h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">{r.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[2rem] border border-line bg-sand p-6 sm:p-9">
            <h3 className="text-2xl font-semibold">Starting prices</h3>
            <p className="mt-2 text-sm text-muted">Final prices depend on the service and your requirements, and are confirmed before work begins.</p>
            <ul className="mt-6 divide-y divide-line">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="flex items-center justify-between gap-4 py-3.5 hover:text-brand-700">
                    <span className="font-medium">{s.name}</span>
                    <span className="shrink-0 text-sm text-muted">from <span className="font-display text-base font-semibold text-ink">{formatINR(s.startingPrice)}</span></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-sand py-16 sm:py-24" aria-labelledby="faq-title">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.6fr]">
          <div>
            <p className="eyebrow">FAQs</p>
            <h2 id="faq-title" className="mt-3 text-3xl font-semibold sm:text-[2.6rem] sm:leading-tight">Questions before you book</h2>
            <p className="mt-4 text-muted">Can&apos;t find your answer? Ask us directly on WhatsApp.</p>
          </div>
          <FaqList faqs={generalFaqs} />
        </div>
      </section>

      <CtaBand />
    </>
  );
}

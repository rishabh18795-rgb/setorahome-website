import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaBand from "@/components/CtaBand";
import EnquiryForm from "@/components/EnquiryForm";
import FaqList from "@/components/FaqList";
import JsonLd from "@/components/JsonLd";
import ServiceCard from "@/components/ServiceCard";
import { CheckIcon, PhoneIcon, WhatsAppIcon } from "@/components/icons";
import { getService, services } from "@/lib/services";
import { absoluteUrl, formatINR, serviceWaMessage, site, telLink, waLink } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  const path = `/services/${s.slug}`;
  return {
    title: s.metaTitle,
    description: s.metaDescription,
    alternates: { canonical: path },
    openGraph: {
      url: path,
      title: `${s.metaTitle} | SetoraHome`,
      description: s.metaDescription,
      images: [{ url: s.image, width: 1254, height: 784, alt: s.imageAlt }],
    },
    twitter: { card: "summary_large_image", title: `${s.metaTitle} | SetoraHome`, description: s.metaDescription, images: [s.image] },
  };
}

export default async function ServicePage({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();

  const wa = waLink(serviceWaMessage(s.name));
  const related = s.related.map(getService).filter((x) => x !== undefined);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: s.name,
          serviceType: s.name,
          description: s.metaDescription,
          url: absoluteUrl(`/services/${s.slug}`),
          image: absoluteUrl(s.image),
          provider: { "@id": `${site.url}/#organization` },
          areaServed: { "@type": "City", name: "Varanasi" },
          offers: {
            "@type": "Offer",
            priceCurrency: "INR",
            priceSpecification: {
              "@type": "PriceSpecification",
              minPrice: s.startingPrice,
              priceCurrency: "INR",
            },
            description: "Starting price. Final quotation depends on requirements.",
          },
        }}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-ink text-white">
        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(55%_60%_at_100%_0%,rgba(248,90,5,0.25),transparent_60%)]" />
        <div className="container-x relative pt-8 pb-14 sm:pb-20">
          <Breadcrumbs tone="light" items={[{ name: "Services", href: "/services" }, { name: s.name, href: `/services/${s.slug}` }]} />
          <div className="mt-8 grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <p className="inline-flex rounded-full bg-brand px-3.5 py-1.5 text-sm font-semibold text-ink">
                Starting from {formatINR(s.startingPrice)}
              </p>
              <h1 className="mt-5 text-4xl font-bold leading-[1.1] sm:text-5xl">
                {s.name} <span className="text-brand">in Varanasi</span>
              </h1>
              {s.intro.map((p) => (
                <p key={p.slice(0, 24)} className="mt-4 max-w-xl leading-relaxed text-white/75 sm:text-lg">{p}</p>
              ))}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={wa} target="_blank" rel="noopener noreferrer" className="btn btn-wa">
                  <WhatsAppIcon /> Book on WhatsApp
                </a>
                <a href={telLink} className="btn btn-ghost-light">
                  <PhoneIcon className="size-4" /> Call {site.phoneDisplay}
                </a>
              </div>
            </div>
            <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] ring-1 ring-white/10">
              <Image src={s.image} alt={s.imageAlt} fill loading="eager" fetchPriority="high" sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* INCLUDED */}
      <section className="py-16 sm:py-20" aria-labelledby="included-title">
        <div className="container-x">
          <p className="eyebrow">What&apos;s included</p>
          <h2 id="included-title" className="mt-3 text-3xl font-semibold sm:text-4xl">What we can help with</h2>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {s.included.map((i) => (
              <li key={i.title} className="rounded-3xl border border-line bg-white p-6">
                <span className="inline-flex size-9 items-center justify-center rounded-full bg-brand-50 text-brand-700"><CheckIcon /></span>
                <h3 className="mt-4 text-lg font-semibold">{i.title}</h3>
                <p className="mt-1.5 text-[0.95rem] leading-relaxed text-muted">{i.text}</p>
              </li>
            ))}
          </ul>
          {s.note && (
            <p role="note" className="mt-8 rounded-2xl border-l-4 border-brand bg-brand-50 px-5 py-4 text-[0.95rem] leading-relaxed text-ink">
              <strong className="font-semibold">Please note: </strong>{s.note}
            </p>
          )}
        </div>
      </section>

      {/* BENEFITS + PROCESS */}
      <section className="bg-sand py-16 sm:py-20" aria-labelledby="process-title">
        <div className="container-x grid gap-14 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Why book with us</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Benefits</h2>
            <ul className="mt-8 space-y-6">
              {s.benefits.map((b) => (
                <li key={b.title} className="flex gap-4">
                  <span className="mt-1 inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-ink text-brand"><CheckIcon className="size-3.5" /></span>
                  <div>
                    <h3 className="font-semibold">{b.title}</h3>
                    <p className="mt-1 text-[0.95rem] leading-relaxed text-muted">{b.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow">Process</p>
            <h2 id="process-title" className="mt-3 text-3xl font-semibold sm:text-4xl">How booking works</h2>
            <ol className="mt-8 space-y-4">
              {s.process.map((p, i) => (
                <li key={p.title} className="flex gap-4 rounded-2xl bg-white p-5">
                  <span className="font-display text-2xl font-bold text-brand-700">0{i + 1}</span>
                  <div>
                    <h3 className="font-semibold">{p.title}</h3>
                    <p className="mt-1 text-[0.95rem] leading-relaxed text-muted">{p.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-16 sm:py-20" aria-labelledby="price-title">
        <div className="container-x">
          <div className="grid gap-8 rounded-[2rem] bg-ink p-7 text-white sm:p-10 lg:grid-cols-[1fr_1.4fr] lg:gap-14">
            <div>
              <p className="eyebrow !text-brand">Pricing</p>
              <h2 id="price-title" className="mt-3 text-3xl font-semibold sm:text-4xl">Starting from <span className="text-brand">{formatINR(s.startingPrice)}</span></h2>
              <p className="mt-4 leading-relaxed text-white/70">
                This is a starting price, not a guaranteed final quotation. We confirm the exact price on WhatsApp before any work begins.
              </p>
              <a href={wa} target="_blank" rel="noopener noreferrer" className="btn btn-wa mt-7"><WhatsAppIcon /> Get my quotation</a>
            </div>
            <div>
              <h3 className="text-lg font-semibold">What affects the final price</h3>
              <ul className="mt-4 space-y-3">
                {s.priceFactors.map((f) => (
                  <li key={f} className="flex gap-3 text-white/80"><CheckIcon className="mt-1 size-4 shrink-0 text-brand" />{f}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-sand py-16 sm:py-20" aria-labelledby="faq-title">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.6fr]">
          <div>
            <p className="eyebrow">FAQs</p>
            <h2 id="faq-title" className="mt-3 text-3xl font-semibold sm:text-4xl">{s.shortName} questions</h2>
          </div>
          <FaqList faqs={s.faqs} />
        </div>
      </section>

      {/* ENQUIRY */}
      <section className="py-16 sm:py-20" aria-labelledby="enquiry-title">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="eyebrow">Book</p>
            <h2 id="enquiry-title" className="mt-3 text-3xl font-semibold sm:text-4xl">Request {s.name}</h2>
            <p className="mt-4 leading-relaxed text-muted">
              Fill in a few details and we&apos;ll open WhatsApp with your request ready to send. Or message us directly on{" "}
              <a href={wa} target="_blank" rel="noopener noreferrer" className="font-semibold text-brand-700 underline underline-offset-2">WhatsApp</a>.
            </p>
          </div>
          <EnquiryForm defaultService={s.name} />
        </div>
      </section>

      {/* RELATED */}
      <section className="border-t border-line bg-sand py-16 sm:py-20" aria-labelledby="related-title">
        <div className="container-x">
          <div className="flex items-end justify-between gap-4">
            <h2 id="related-title" className="text-3xl font-semibold sm:text-4xl">Related services</h2>
            <Link href="/services" className="hidden font-semibold hover:text-brand-700 sm:inline">All services →</Link>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {related.map((r) => <ServiceCard key={r.slug} service={r} />)}
          </div>
        </div>
      </section>

      <CtaBand title={`Book ${s.name} in Varanasi`} message={serviceWaMessage(s.name)} />
    </>
  );
}

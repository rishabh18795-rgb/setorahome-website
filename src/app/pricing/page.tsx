import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaBand from "@/components/CtaBand";
import { WhatsAppIcon } from "@/components/icons";
import { services } from "@/lib/services";
import { formatINR, serviceWaMessage, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Home Service Prices in Varanasi: Starting Rates",
  description:
    "Starting prices for SetoraHome services in Varanasi: repairs from ₹129, cleaning from ₹499, car washing from ₹399, home shifting from ₹1,199 and more. Final quotation on WhatsApp.",
  alternates: { canonical: "/pricing" },
  openGraph: { url: "/pricing" },
};

export default function PricingPage() {
  return (
    <>
      <section className="bg-ink pt-8 pb-14 text-white sm:pb-20">
        <div className="container-x">
          <Breadcrumbs tone="light" items={[{ name: "Pricing", href: "/pricing" }]} />
          <h1 className="mt-8 max-w-3xl text-4xl font-bold sm:text-5xl">Clear starting prices</h1>
          <p className="mt-4 max-w-2xl text-white/75 sm:text-lg">
            These are starting prices for simple jobs, not guaranteed final quotations. Every job is different, so we
            confirm the final price with you on WhatsApp before any work begins.
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-20" aria-labelledby="table-title">
        <div className="container-x">
          <h2 id="table-title" className="sr-only">Starting prices by service</h2>
          <div className="overflow-hidden rounded-3xl border border-line">
            <table className="w-full text-left">
              <thead className="bg-sand text-sm text-muted">
                <tr>
                  <th scope="col" className="px-5 py-4 font-semibold sm:px-7">Service</th>
                  <th scope="col" className="px-5 py-4 font-semibold sm:px-7">Starting from</th>
                  <th scope="col" className="hidden px-7 py-4 font-semibold md:table-cell"><span className="sr-only">Book</span></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {services.map((s) => (
                  <tr key={s.slug} className="align-top">
                    <th scope="row" className="px-5 py-5 font-normal sm:px-7">
                      <Link href={`/services/${s.slug}`} className="font-display text-base font-semibold hover:text-brand-700 sm:text-lg">{s.name}</Link>
                      <p className="mt-1 max-w-xl text-sm text-muted">{s.summary}</p>
                      <a href={waLink(serviceWaMessage(s.name))} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-[#128c3f] md:hidden">
                        <WhatsAppIcon className="size-4" /> Get quotation<span className="sr-only"> for {s.name}</span>
                      </a>
                    </th>
                    <td className="whitespace-nowrap px-5 py-5 font-display text-xl font-semibold sm:px-7">{formatINR(s.startingPrice)}</td>
                    <td className="hidden px-7 py-5 text-right md:table-cell">
                      <a href={waLink(serviceWaMessage(s.name))} target="_blank" rel="noopener noreferrer" className="btn btn-wa !min-h-10 !px-4 !text-sm">
                        <WhatsAppIcon className="size-4" /> Get quotation<span className="sr-only"> for {s.name}</span>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              { t: "Why prices vary", d: "Home size, quantity of items, floor level, materials or parts, travel and time required all affect the final amount." },
              { t: "Quotation first", d: "You receive the final quotation on WhatsApp and approve it before work starts. If the scope changes on site, we ask again." },
              { t: "No online payment", d: "This website does not take payments. Payment terms are agreed with you directly when your booking is confirmed." },
            ].map((x) => (
              <div key={x.t} className="rounded-3xl bg-sand p-6">
                <h3 className="text-lg font-semibold">{x.t}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">{x.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaBand title="Get your exact quotation" />
    </>
  );
}

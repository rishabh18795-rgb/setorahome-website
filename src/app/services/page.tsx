import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaBand from "@/components/CtaBand";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Home Services in Varanasi: All Services",
  description:
    "Explore SetoraHome's doorstep services in Varanasi: home shifting, organisation, cleaning, repairs, car washing, gardening, senior care, patient assistance and scrap pickup.",
  alternates: { canonical: "/services" },
  openGraph: { url: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-ink pt-8 pb-14 text-white sm:pb-20">
        <div className="container-x">
          <Breadcrumbs tone="light" items={[{ name: "Services", href: "/services" }]} />
          <h1 className="mt-8 max-w-3xl text-4xl font-bold sm:text-5xl">Home services in Varanasi</h1>
          <p className="mt-4 max-w-2xl text-white/75 sm:text-lg">
            Pick a service to see what&apos;s included, how booking works and the starting price. Every job gets a final
            quotation on WhatsApp before work begins.
          </p>
        </div>
      </section>
      <section className="bg-sand py-14 sm:py-20" aria-label="All services">
        <div className="container-x grid gap-5 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((s) => <ServiceCard key={s.slug} service={s} headingLevel="h2" />)}
        </div>
      </section>
      <CtaBand title="Not sure which service you need?" text="Describe the problem on WhatsApp and we'll point you to the right service and share a quotation." />
    </>
  );
}

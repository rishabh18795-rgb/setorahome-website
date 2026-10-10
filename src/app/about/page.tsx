import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaBand from "@/components/CtaBand";
import { getService } from "@/lib/services";

export const metadata: Metadata = {
  title: "About SetoraHome: Home Services in Varanasi",
  description:
    "SetoraHome is a doorstep home-services brand launching in Varanasi, bringing shifting, cleaning, repairs, car care, gardening and family support together under one WhatsApp number.",
  alternates: { canonical: "/about" },
  openGraph: { url: "/about" },
};

const img = getService("home-organisation")!;
const img2 = getService("senior-citizen-care")!;

export default function AboutPage() {
  return (
    <>
      <section className="bg-ink pt-8 pb-14 text-white sm:pb-20">
        <div className="container-x">
          <Breadcrumbs tone="light" items={[{ name: "About", href: "/about" }]} />
          <h1 className="mt-8 max-w-3xl text-4xl font-bold sm:text-5xl">
            Your Home, <span className="text-brand">Our Responsibility</span>
          </h1>
          <p className="mt-4 max-w-2xl text-white/75 sm:text-lg">
            SetoraHome is a home-services brand starting in Varanasi, built so that one message can take care of
            the many small and big jobs a household needs.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-5 text-[1.02rem] leading-relaxed text-muted">
            <h2 className="text-3xl font-semibold text-ink sm:text-4xl">Why we started</h2>
            <p>
              Running a home means juggling many different people: someone for shifting, someone else for cleaning,
              another number for the electrician, and no one to call when parents need help getting to a hospital
              appointment. Finding, comparing and following up with each of them takes time.
            </p>
            <p>
              SetoraHome brings these services together under one brand and one WhatsApp number. You describe the
              job, we confirm availability and a clear quotation, and the work is done at your doorstep.
            </p>
            <p>
              We are launching in Varanasi first, focusing on getting the basics right for local homes before
              expanding to more cities.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-[3/4] overflow-hidden rounded-3xl">
              <Image src={img.image} alt={img.imageAlt} fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover object-[30%_50%]" />
            </div>
            <div className="relative mt-10 aspect-[3/4] overflow-hidden rounded-3xl">
              <Image src={img2.image} alt={img2.imageAlt} fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover object-[35%_50%]" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-sand py-16 sm:py-24" aria-labelledby="principles-title">
        <div className="container-x">
          <h2 id="principles-title" className="text-3xl font-semibold sm:text-4xl">How we work</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              { t: "Clarity before commitment", d: "Starting prices are public, and every job gets a final quotation you approve before work begins." },
              { t: "Respect for your home", d: "We work in your space as guests, and we treat your belongings and your family's routine with care." },
              { t: "Honest about scope", d: "If a job needs a licensed specialist or medical professional, we tell you instead of over-promising." },
            ].map((x) => (
              <div key={x.t} className="rounded-3xl bg-white p-7">
                <h3 className="text-lg font-semibold">{x.t}</h3>
                <p className="mt-2 leading-relaxed text-muted">{x.d}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-muted">
            Customer reviews will be published here once we have verified feedback from bookings. Meanwhile, follow us on{" "}
            <Link href="https://www.instagram.com/setorahomeofficial/" className="font-semibold text-ink underline underline-offset-2">Instagram</Link>.
          </p>
        </div>
      </section>
      <CtaBand />
    </>
  );
}

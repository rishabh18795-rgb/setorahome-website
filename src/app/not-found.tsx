import Link from "next/link";
import { WhatsAppIcon } from "@/components/icons";
import { waLink } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="container-x flex min-h-[60vh] flex-col items-start justify-center py-20">
      <p className="eyebrow">404</p>
      <h1 className="mt-3 text-4xl font-bold sm:text-5xl">We couldn&apos;t find that page</h1>
      <p className="mt-4 max-w-xl text-muted">The page may have moved. Browse our services or tell us what you need on WhatsApp.</p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link href="/services" className="btn btn-ink">View all services</Link>
        <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn btn-wa"><WhatsAppIcon /> Ask on WhatsApp</a>
      </div>
    </section>
  );
}

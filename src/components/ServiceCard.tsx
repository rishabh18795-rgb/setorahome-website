import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, WhatsAppIcon } from "./icons";
import type { Service } from "@/lib/services";
import { formatINR, serviceWaMessage, waLink } from "@/lib/site";

export default function ServiceCard({ service, headingLevel = "h3" }: { service: Service; headingLevel?: "h2" | "h3" }) {
  const Heading = headingLevel;
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-3xl border border-line bg-white shadow-[0_1px_0_rgba(0,0,0,0.02)] transition-shadow hover:shadow-[0_18px_40px_-20px_rgba(15,15,15,0.35)]">
      <div className="relative aspect-[16/10] overflow-hidden bg-sand">
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          sizes="(min-width: 1280px) 400px, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <span className="absolute left-3 top-3 rounded-full bg-ink/85 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur">
          Starting from <span className="text-brand">{formatINR(service.startingPrice)}</span>
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <Heading className="text-lg font-semibold leading-snug sm:text-xl">
          <Link href={`/services/${service.slug}`} className="after:absolute after:inset-0 hover:text-brand-700">
            {service.name}
          </Link>
        </Heading>
        <p className="mt-2 flex-1 text-[0.95rem] leading-relaxed text-muted">{service.summary}</p>
        <div className="relative z-10 mt-5 flex flex-wrap items-center gap-x-5 gap-y-3">
          <Link href={`/services/${service.slug}`} className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink hover:text-brand-700">
            Learn more<span className="sr-only"> about {service.name}</span> <ArrowRightIcon />
          </Link>
          <a
            href={waLink(serviceWaMessage(service.name))}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-wa !min-h-10 !px-4 !text-sm"
          >
            <WhatsAppIcon className="size-4" /> Book<span className="sr-only"> {service.name}</span> on WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}

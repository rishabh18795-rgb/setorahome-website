import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/services";

/**
 * Auto-scrolling strip of service photos. Pure CSS (no JS); pauses on hover/focus
 * and stops entirely for users who prefer reduced motion.
 */
export default function ServiceMarquee() {
  const loop = [...services, ...services];
  return (
    <div className="marquee relative overflow-hidden motion-reduce:overflow-x-auto">
      <ul className="marquee-track flex w-max gap-4 animate-marquee motion-reduce:animate-none">
        {loop.map((s, i) => (
          <li key={`${s.slug}-${i}`} aria-hidden={i >= services.length ? true : undefined}>
            <Link
              href={`/services/${s.slug}`}
              tabIndex={i >= services.length ? -1 : undefined}
              className="group relative block h-44 w-64 overflow-hidden rounded-2xl sm:h-52 sm:w-80"
            >
              <Image src={s.image} alt={s.imageAlt} fill sizes="320px" className="object-cover transition-transform duration-500 group-hover:scale-105" />
              <span className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
              <span className="absolute bottom-3 left-4 right-4 font-display text-base font-semibold text-white">{s.name}</span>
            </Link>
          </li>
        ))}
      </ul>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-ink to-transparent sm:w-20" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-ink to-transparent sm:w-20" />
    </div>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "./icons";
import type { Service } from "@/lib/services";

type Scene = { service: Service; headline: string };

/** Swipeable, scroll-snap carousel with accessible previous/next buttons. */
export default function SceneCarousel({ scenes }: { scenes: Scene[] }) {
  const ref = useRef<HTMLUListElement>(null);
  const scroll = (dir: 1 | -1) => {
    const el = ref.current;
    if (!el) return;
    const card = el.querySelector("li");
    const step = card ? card.getBoundingClientRect().width + 20 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <div>
      <div className="mb-6 flex justify-end gap-2">
        <button type="button" onClick={() => scroll(-1)} aria-label="Previous scenes" className="inline-flex size-11 items-center justify-center rounded-full border border-line bg-white text-ink hover:border-ink">
          <ArrowLeftIcon className="size-5" />
        </button>
        <button type="button" onClick={() => scroll(1)} aria-label="Next scenes" className="inline-flex size-11 items-center justify-center rounded-full bg-ink text-white hover:bg-ink-3">
          <ArrowRightIcon className="size-5" />
        </button>
      </div>
      <ul ref={ref} className="scroll-row -mx-4 gap-5 px-4 pb-2 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8" aria-label="Service scenes">
        {scenes.map(({ service, headline }) => (
          <li key={service.slug} className="w-[85%] shrink-0 sm:w-[62%] lg:w-[46%]">
            <Link href={`/services/${service.slug}`} className="group block">
              <div className="relative aspect-[16/10] overflow-hidden rounded-3xl bg-sand-2">
                <Image src={service.image} alt={service.imageAlt} fill sizes="(min-width: 1024px) 46vw, (min-width: 640px) 62vw, 85vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
              </div>
              <div className="mt-4 flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-700">{service.name}</p>
                  <p className="mt-1.5 font-display text-lg font-semibold leading-snug sm:text-xl">{headline}</p>
                </div>
                <span className="mt-1 inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-line transition-colors group-hover:border-brand group-hover:bg-brand" aria-hidden="true">
                  <ArrowRightIcon />
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

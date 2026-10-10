import { ChevronDownIcon } from "./icons";
import type { Faq } from "@/lib/services";

/** Native <details> accordion: keyboard accessible and works without JS. */
export default function FaqList({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="divide-y divide-line overflow-hidden rounded-3xl border border-line bg-white">
      {faqs.map((f) => (
        <details key={f.q} className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-5 font-display text-base font-semibold sm:px-7 sm:text-lg [&::-webkit-details-marker]:hidden">
            {f.q}
            <ChevronDownIcon className="size-5 shrink-0 text-brand-700 transition-transform group-open:rotate-180" />
          </summary>
          <p className="px-5 pb-6 text-[0.97rem] leading-relaxed text-muted sm:px-7">{f.a}</p>
        </details>
      ))}
    </div>
  );
}

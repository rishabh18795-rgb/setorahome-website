import Link from "next/link";
import { PhoneIcon, WhatsAppIcon } from "./icons";
import { site, telLink, waLink } from "@/lib/site";

export default function CtaBand({
  title = "Tell us what your home needs",
  text = "Send one WhatsApp message with your service, locality and preferred time. We reply with availability and a clear quotation.",
  message,
}: {
  title?: string;
  text?: string;
  message?: string;
}) {
  return (
    <section className="container-x py-16 sm:py-20" aria-labelledby="cta-title">
      <div className="relative overflow-hidden rounded-[2rem] bg-ink px-6 py-12 text-white sm:px-12 sm:py-14">
        <div aria-hidden="true" className="absolute -right-24 -top-24 size-80 rounded-full bg-brand/25 blur-3xl" />
        <div className="relative grid items-center gap-8 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 id="cta-title" className="text-2xl font-semibold sm:text-4xl">{title}</h2>
            <p className="mt-3 max-w-2xl text-white/75 sm:text-lg">{text}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <a href={waLink(message)} target="_blank" rel="noopener noreferrer" className="btn btn-wa">
              <WhatsAppIcon /> Book on WhatsApp
            </a>
            <a href={telLink} className="btn btn-ghost-light">
              <PhoneIcon className="size-4" /> Call {site.phoneDisplay}
            </a>
          </div>
        </div>
        <p className="relative mt-6 text-sm text-white/60">
          Prefer a form? <Link href="/contact" className="font-semibold text-brand underline-offset-4 hover:underline">Fill in your booking details</Link>.
        </p>
      </div>
    </section>
  );
}

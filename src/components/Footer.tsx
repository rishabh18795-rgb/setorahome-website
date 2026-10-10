import Link from "next/link";
import Logo from "./Logo";
import { FacebookIcon, InstagramIcon, MailIcon, PhoneIcon, PinIcon, WhatsAppIcon } from "./icons";
import { services } from "@/lib/services";
import { site, telLink, waLink } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-ink pb-24 text-white/80 md:pb-0">
      <div className="container-x grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.1fr]">
        <div>
          <Logo tone="light" />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
            Doorstep home services in Varanasi, from shifting and cleaning to repairs, car washing,
            gardening, senior care and patient assistance. Book everything with one WhatsApp message.
          </p>
          <div className="mt-6 flex gap-3">
            <a href={site.instagram} target="_blank" rel="noopener noreferrer" aria-label="SetoraHome on Instagram" className="inline-flex size-10 items-center justify-center rounded-full bg-white/10 hover:bg-brand hover:text-ink">
              <InstagramIcon />
            </a>
            <a href={site.facebook} target="_blank" rel="noopener noreferrer" aria-label="SetoraHome on Facebook" className="inline-flex size-10 items-center justify-center rounded-full bg-white/10 hover:bg-brand hover:text-ink">
              <FacebookIcon />
            </a>
          </div>
        </div>

        <nav aria-label="Services">
          <h2 className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-white">Services</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="hover:text-brand">{s.name}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Company">
          <h2 className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-white">Company</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link href="/about" className="hover:text-brand">About SetoraHome</Link></li>
            <li><Link href="/services" className="hover:text-brand">All services</Link></li>
            <li><Link href="/pricing" className="hover:text-brand">Pricing</Link></li>
            <li><Link href="/contact" className="hover:text-brand">Book a service</Link></li>
            <li><Link href="/privacy" className="hover:text-brand">Privacy notice</Link></li>
          </ul>
        </nav>

        <div>
          <h2 className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-white">Contact</h2>
          <ul className="mt-4 space-y-3.5 text-sm">
            <li>
              <a href={waLink()} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 hover:text-brand">
                <WhatsAppIcon className="mt-0.5 size-4 shrink-0" /> WhatsApp {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={telLink} className="flex items-start gap-3 hover:text-brand">
                <PhoneIcon className="mt-0.5 size-4 shrink-0" /> {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="flex items-start gap-3 hover:text-brand">
                <MailIcon className="mt-0.5 size-4 shrink-0" /> {site.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <PinIcon className="mt-0.5 size-4 shrink-0" /> Serving Varanasi, Uttar Pradesh
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-2 py-6 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} SetoraHome. All rights reserved.</p>
          <p>Prices shown are starting prices. Final quotation depends on your requirements.</p>
        </div>
      </div>
    </footer>
  );
}

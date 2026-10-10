import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import EnquiryForm from "@/components/EnquiryForm";
import { FacebookIcon, InstagramIcon, MailIcon, PhoneIcon, PinIcon, WhatsAppIcon } from "@/components/icons";
import { site, telLink, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book a Home Service in Varanasi | Contact",
  description:
    "Book a SetoraHome service in Varanasi. WhatsApp or call +91 94737 43389, email support@setorahome.com, or fill in the booking form to send your request on WhatsApp.",
  alternates: { canonical: "/contact" },
  openGraph: { url: "/contact" },
};

export default function ContactPage() {
  const channels = [
    { icon: <WhatsAppIcon />, label: "WhatsApp (fastest)", value: site.phoneDisplay, href: waLink(), external: true },
    { icon: <PhoneIcon />, label: "Call", value: site.phoneDisplay, href: telLink },
    { icon: <MailIcon />, label: "Email", value: site.email, href: `mailto:${site.email}` },
    { icon: <InstagramIcon />, label: "Instagram", value: site.instagramHandle, href: site.instagram, external: true },
    { icon: <FacebookIcon />, label: "Facebook", value: "setorahomeofficial", href: site.facebook, external: true },
  ];
  return (
    <>
      <section className="bg-ink pt-8 pb-14 text-white sm:pb-20">
        <div className="container-x">
          <Breadcrumbs tone="light" items={[{ name: "Book a service", href: "/contact" }]} />
          <h1 className="mt-8 max-w-3xl text-4xl font-bold sm:text-5xl">Book a service</h1>
          <p className="mt-4 max-w-2xl text-white/75 sm:text-lg">
            WhatsApp is the quickest way to reach us. Use the form to prepare your request, or message us directly.
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:gap-14">
          <div>
            <h2 className="text-2xl font-semibold sm:text-3xl">Contact SetoraHome</h2>
            <ul className="mt-6 space-y-3">
              {channels.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="flex items-center gap-4 rounded-2xl border border-line p-4 transition-colors hover:border-ink"
                  >
                    <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-sand text-ink">{c.icon}</span>
                    <span className="min-w-0">
                      <span className="block text-sm text-muted">{c.label}</span>
                      <span className="block truncate font-semibold">{c.value}</span>
                    </span>
                  </a>
                </li>
              ))}
              <li className="flex items-center gap-4 rounded-2xl bg-sand p-4">
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-white text-ink"><PinIcon /></span>
                <span>
                  <span className="block text-sm text-muted">Service area</span>
                  <span className="block font-semibold">Varanasi, Uttar Pradesh</span>
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold sm:text-3xl">Booking request</h2>
            <p className="mt-2 mb-6 text-muted">Fields marked * are required.</p>
            <EnquiryForm />
          </div>
        </div>
      </section>
    </>
  );
}

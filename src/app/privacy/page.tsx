import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Notice",
  description: "How SetoraHome handles the information you share when you contact us or request a home service in Varanasi.",
  alternates: { canonical: "/privacy" },
  openGraph: { url: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-ink pt-8 pb-12 text-white">
        <div className="container-x">
          <Breadcrumbs tone="light" items={[{ name: "Privacy notice", href: "/privacy" }]} />
          <h1 className="mt-8 text-4xl font-bold sm:text-5xl">Privacy notice</h1>
        </div>
      </section>
      <article className="container-x max-w-3xl py-14 text-[1.02rem] leading-relaxed text-muted [&_h2]:mt-10 [&_h2]:mb-3 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-ink [&_li]:mt-2 [&_ul]:list-disc [&_ul]:pl-6">
        <p>
          This notice explains what information SetoraHome receives when you use this website or contact us, and
          how it is used.
        </p>
        <h2>What this website collects</h2>
        <p>
          The booking form on this website does not store or transmit your details to any server. When you press
          &ldquo;Continue on WhatsApp&rdquo;, your details are placed into a WhatsApp message on your own device.
          They reach SetoraHome only if you choose to send that message.
        </p>
        <p>The website does not use advertising or analytics cookies.</p>
        <h2>Information you send us</h2>
        <p>When you contact us by WhatsApp, phone or email, we may receive:</p>
        <ul>
          <li>your name and phone number;</li>
          <li>your locality or address, preferred date and time;</li>
          <li>details and photos of the job you want done.</li>
        </ul>
        <p>
          We use this information only to respond to your request, provide a quotation, schedule and deliver the
          service, and follow up about that booking. We do not sell your information.
        </p>
        <h2>Third-party services</h2>
        <p>
          Messages sent via WhatsApp are handled under WhatsApp&apos;s own terms and privacy policy. Links to Instagram
          and Facebook take you to those platforms, which have their own policies.
        </p>
        <h2>Your choices</h2>
        <p>
          You can ask us to delete the details you have shared, or to stop contacting you, by emailing{" "}
          <a href={`mailto:${site.email}`} className="font-semibold text-ink underline underline-offset-2">{site.email}</a>{" "}
          or messaging us on WhatsApp at {site.phoneDisplay}.
        </p>
        <p className="mt-10 text-sm">This notice may be updated as our services and website change.</p>
      </article>
    </>
  );
}

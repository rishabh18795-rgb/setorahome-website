import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileActionBar from "@/components/MobileActionBar";
import JsonLd from "@/components/JsonLd";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const defaultTitle = "SetoraHome | Doorstep Home Services in Varanasi";
const defaultDescription =
  "Home shifting, cleaning, repairs, doorstep car washing, gardening, senior care, patient assistance and scrap pickup in Varanasi. Book on WhatsApp +91 94737 43389.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: defaultTitle, template: "%s | SetoraHome" },
  description: defaultDescription,
  applicationName: site.name,
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: site.name,
    title: defaultTitle,
    description: defaultDescription,
    url: "/",
  },
  twitter: { card: "summary_large_image", title: defaultTitle, description: defaultDescription },
  formatDetection: { telephone: false },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0f0f0f",
  width: "device-width",
  initialScale: 1,
};

const orgId = `${site.url}/#organization`;

const businessLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": orgId,
  name: site.name,
  slogan: site.tagline,
  url: site.url,
  logo: `${site.url}/brand/emblem-512.png`,
  image: `${site.url}/opengraph-image.jpg`,
  description: defaultDescription,
  telephone: site.phoneE164,
  email: site.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: site.city,
    addressRegion: site.region,
    addressCountry: site.country,
  },
  areaServed: { "@type": "City", name: "Varanasi" },
  sameAs: [site.facebook, site.instagram],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: site.phoneE164,
    email: site.email,
    contactType: "customer service",
    areaServed: "IN",
    availableLanguage: ["English", "Hindi"],
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Home services in Varanasi",
    itemListElement: services.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.name, url: `${site.url}/services/${s.slug}` },
    })),
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-IN" className={`${inter.variable} ${poppins.variable} antialiased`}>
      <body className="flex min-h-dvh flex-col font-sans">
        <Header />
        <main id="main" className="flex-1">{children}</main>
        <Footer />
        <MobileActionBar />
        <JsonLd data={businessLd} />
      </body>
    </html>
  );
}

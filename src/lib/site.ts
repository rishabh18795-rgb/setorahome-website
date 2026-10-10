export const site = {
  name: "SetoraHome",
  tagline: "Your Home, Our Responsibility",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://www.setorahome.com").replace(/\/$/, ""),
  city: "Varanasi",
  region: "Uttar Pradesh",
  country: "IN",
  phoneE164: "+919473743389",
  phoneDisplay: "+91 94737 43389",
  whatsappNumber: "919473743389",
  email: "support@setorahome.com",
  facebook: "https://www.facebook.com/setorahomeofficial",
  instagram: "https://www.instagram.com/setorahomeofficial/",
  instagramHandle: "@setorahomeofficial",
} as const;

export const DEFAULT_WA_MESSAGE =
  "Hi SetoraHome, I want to book a home service in Varanasi.";

/** Builds a wa.me link with a pre-filled, URL-encoded message. */
export function waLink(message: string = DEFAULT_WA_MESSAGE): string {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/** Service-specific WhatsApp message, e.g. for "Doorstep Car Washing". */
export function serviceWaMessage(serviceName: string): string {
  return `Hi SetoraHome, I want to book ${serviceName} in Varanasi. Please share availability and the final quotation.`;
}

export const telLink = `tel:${site.phoneE164}`;

export function absoluteUrl(path = "/"): string {
  return `${site.url}${path === "/" ? "" : path}`;
}

export function formatINR(amount: number): string {
  return `₹${amount.toLocaleString("en-IN")}`;
}

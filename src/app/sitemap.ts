import type { MetadataRoute } from "next";
import { services } from "@/lib/services";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: Array<{ path: string; priority: number }> = [
    { path: "/", priority: 1 },
    { path: "/services", priority: 0.9 },
    ...services.map((s) => ({ path: `/services/${s.slug}`, priority: 0.8 })),
    { path: "/pricing", priority: 0.7 },
    { path: "/contact", priority: 0.7 },
    { path: "/about", priority: 0.5 },
    { path: "/privacy", priority: 0.2 },
  ];
  return pages.map((p) => ({ url: absoluteUrl(p.path), priority: p.priority }));
}

import Link from "next/link";
import JsonLd from "./JsonLd";
import { absoluteUrl } from "@/lib/site";

export type Crumb = { name: string; href: string };

export default function Breadcrumbs({ items, tone = "dark" }: { items: Crumb[]; tone?: "dark" | "light" }) {
  const all = [{ name: "Home", href: "/" }, ...items];
  return (
    <>
      <nav aria-label="Breadcrumb" className="text-sm">
        <ol className={`flex flex-wrap items-center gap-1.5 ${tone === "light" ? "text-white/65" : "text-muted"}`}>
          {all.map((c, i) => (
            <li key={c.href} className="flex items-center gap-1.5">
              {i > 0 && <span aria-hidden="true">/</span>}
              {i === all.length - 1 ? (
                <span aria-current="page" className={tone === "light" ? "text-white" : "text-ink"}>{c.name}</span>
              ) : (
                <Link href={c.href} className="hover:text-brand">{c.name}</Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: all.map((c, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: c.name,
            item: absoluteUrl(c.href),
          })),
        }}
      />
    </>
  );
}

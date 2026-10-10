"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { CloseIcon, MenuIcon, PhoneIcon, WhatsAppIcon } from "./icons";
import { services } from "@/lib/services";
import { site, telLink, waLink } from "@/lib/site";

const nav = [
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/#how-it-works", label: "How it works" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  // Close the mobile menu whenever the route changes (render-time state reset).
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-white/90 backdrop-blur-md">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-[60] focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-white">
        Skip to content
      </a>
      <div className="container-x flex h-[4.25rem] items-center justify-between gap-3">
        <Logo />
        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => {
              const active = item.href !== "/#how-it-works" && pathname.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`rounded-full px-3.5 py-2 text-[0.92rem] font-medium transition-colors hover:bg-sand ${active ? "text-brand-700" : "text-ink/80"}`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          <a href={telLink} className="hidden items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold text-ink hover:bg-sand md:inline-flex" >
            <PhoneIcon className="size-4" />
            <span className="sr-only xl:not-sr-only">Call {site.phoneDisplay}</span>
          </a>
          <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn btn-wa !min-h-10 !px-3 !text-sm sm:!px-4" >
            <WhatsAppIcon className="size-5 sm:size-4" />
            <span className="sr-only sm:not-sr-only">Book on WhatsApp</span>
          </a>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full text-ink hover:bg-sand lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-menu" className="absolute inset-x-0 top-full z-50 h-[calc(100dvh-4.25rem)] overflow-y-auto border-t border-line bg-white lg:hidden">
          <nav aria-label="Mobile" className="container-x py-6">
            <ul className="space-y-1">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} onClick={() => setOpen(false)} className="block rounded-xl px-3 py-3 font-display text-lg font-semibold hover:bg-sand">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-6 px-3 text-xs font-bold uppercase tracking-[0.14em] text-muted">Our services</p>
            <ul className="mt-2 grid grid-cols-1 gap-1 sm:grid-cols-2">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2.5 text-[0.95rem] text-ink/85 hover:bg-sand">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 grid gap-3 px-3 sm:grid-cols-2">
              <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn btn-wa w-full">
                <WhatsAppIcon /> Chat on WhatsApp
              </a>
              <a href={telLink} className="btn btn-ghost-dark w-full">
                <PhoneIcon className="size-4" /> Call {site.phoneDisplay}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

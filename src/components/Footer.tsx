"use client";

import Image from "next/image";
import Link from "next/link";
import type { SiteConfigData } from "@/lib/types";

const FOOTER_LINKS = [
  {
    heading: "Ventures",
    items: [
      { label: "Invytra Project", href: "/project" },
      { label: "Invytra Learning", href: "/learning" },
      { label: "Invytra Event", href: "/event" },
    ],
  },
  {
    heading: "Navigate",
    items: [
      { label: "Services", href: "/#services" },
      { label: "Work", href: "/#work" },
      { label: "Reviews", href: "/#reviews" },
      { label: "Contact", href: "/#contact" },
    ],
  },
  {
    heading: "Company",
    items: [
      { label: "About Invytra", href: "/about" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
];

export default function Footer({ config }: { config: SiteConfigData }) {
  return (
    <footer className="bg-coal text-coal-ink">
      <div className="mx-auto max-w-[1400px] px-5 pb-28 pt-14 sm:px-6 md:px-10 md:pb-12 md:pt-20">
        <div className="grid gap-12 border-b border-coal-line pb-12 md:grid-cols-12">
          {/* Brand — full logo lockup, transparent on charcoal */}
          <div className="md:col-span-4">
            <Link href="/" className="inline-block" aria-label="Invytra — home">
              <Image
                src="/images/logo-full.png"
                alt="Invytra — Build a brighter tomorrow"
                width={916}
                height={718}
                className="w-44 md:w-52"
              />
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-[1.8] text-coal-muted">{config.brand.tagline}</p>
            <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.26em] text-[#C49A48]">
              {config.brand.philosophy}
            </p>
          </div>

          {/* Link columns */}
          {FOOTER_LINKS.map((col) => (
            <nav key={col.heading} className="md:col-span-2" aria-label={col.heading}>
              <p className="mb-5 text-[10px] font-extrabold uppercase tracking-[0.26em] text-[#C49A48]">{col.heading}</p>
              <ul className="space-y-3">
                {col.items.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="text-sm text-coal-muted transition-colors hover:text-coal-ink">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          {/* Connect */}
          <div className="md:col-span-2">
            <p className="mb-5 text-[10px] font-extrabold uppercase tracking-[0.26em] text-[#C49A48]">Connect</p>
            <ul className="space-y-3 text-sm text-coal-muted">
              <li>
                <a href={config.contact.instagram} target="_blank" rel="noreferrer" className="transition-colors hover:text-coal-ink">
                  Instagram · @invytra
                </a>
              </li>
              <li>
                <a href={`mailto:${config.contact.email}`} className="break-words transition-colors hover:text-coal-ink">
                  {config.contact.email}
                </a>
              </li>
              <li>
                <a href={`tel:${config.contact.phone.replace(/\s/g, "")}`} className="transition-colors hover:text-coal-ink">
                  {config.contact.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-7 text-[11px] font-semibold uppercase tracking-[0.18em] text-coal-muted md:flex-row md:items-center md:justify-between">
          <span suppressHydrationWarning>© {new Date().getFullYear()} Invytra. All rights reserved.</span>
          <span className="font-serif normal-case tracking-[0.14em] text-[#C49A48]">Build a brighter tomorrow.</span>
        </div>
      </div>
    </footer>
  );
}

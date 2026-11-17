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

/**
 * Utility Agency inspired footer:
 * - Clean minimalist grid
 * - Premium spacing (3.5rem gap, 16rem padding)
 * - Releaf-inspired alignment
 */
export default function Footer({ config }: { config: SiteConfigData }) {
  return (
    <footer className="bg-coal text-coal-ink">
      <div className="mx-auto max-w-[1400px] px-5 pb-24 pt-12 sm:px-6 md:px-10 md:pb-12 md:pt-20">
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 border-b border-coal-line pb-12 md:grid-cols-12 md:pb-14">
          {/* Brand — Utility style: minimal mark + wordmark */}
          <div className="col-span-2 md:col-span-4">
            <Link href="/" className="inline-block" aria-label="Invytra — home">
              <Image
                src="/images/logo-full.png"
                alt="Invytra — Build a brighter tomorrow"
                width={916}
                height={718}
                className="w-32 md:w-36"
              />
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-[1.8] text-coal-muted">{config.brand.tagline}</p>
            <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.26em] text-[#C49A48]">
              {config.brand.philosophy}
            </p>
          </div>

          {/* Link columns — Utility style: clean, spaced */}
          {FOOTER_LINKS.map((col) => (
            <nav key={col.heading} className="md:col-span-2" aria-label={col.heading}>
              <p className="mb-6 text-[10px] font-bold uppercase tracking-[0.26em] text-[#C49A48]">{col.heading}</p>
              <ul className="space-y-4">
                {col.items.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="text-sm text-coal-muted transition-colors hover:text-coal-ink">
                      {item.label}
                    </Link>
                  </li>
                ))}\n              </ul>\n            </nav>\n          ))}\n\n          {/* Connect — Utility style */}\n          <div className=\"col-span-2 min-[480px]:col-span-1 md:col-span-2\">\n            <p className=\"mb-6 text-[10px] font-bold uppercase tracking-[0.26em] text-[#C49A48]\">Connect</p>\n            <ul className=\"space-y-4 text-sm text-coal-muted\">\n              <li>\n                <a href={config.contact.instagram} target=\"_blank\" rel=\"noreferrer\" className=\"transition-colors hover:text-coal-ink\">\n                  Instagram · @invytra\n                </a>\n              </li>\n              <li>\n                <a href={`mailto:${config.contact.email}`} className=\"break-words transition-colors hover:text-coal-ink\">\n                  {config.contact.email}\n                </a>\n              </li>\n              <li>\n                <a href={`tel:${config.contact.phone.replace(/\\s/g, \"\")}`} className=\"transition-colors hover:text-coal-ink\">\n                  {config.contact.phone}\n                </a>\n              </li>\n            </ul>\n          </div>\n        </div>\n\n        <div className=\"flex flex-col items-center gap-2.5 pt-8 text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-coal-muted md:flex-row md:items-center md:justify-between md:text-left\">\n          <span suppressHydrationWarning>© {new Date().getFullYear()} Invytra. All rights reserved.</span>\n          <span className=\"font-serif normal-case tracking-[0.14em] text-[#C49A48]\">Build a brighter tomorrow.</span>\n        </div>\n      </div>\n    </footer>\n  );\n}

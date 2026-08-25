"use client";

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
];

export default function Footer({ config }: { config: SiteConfigData }) {
  return (
    <footer
      className="relative overflow-hidden border-t"
      style={{ background: "var(--surface)", borderColor: "var(--line)" }}
    >
      <div className="relative mx-auto max-w-[1400px] px-6 pt-20 pb-10 md:px-10 md:pt-24">
        <div className="grid grid-cols-1 gap-12 border-b pb-16 md:grid-cols-12" style={{ borderColor: "var(--line)" }}>
          {/* Brand */}
          <div className="md:col-span-5">
            <Link href="/" className="inline-block">
              <p
                className="font-serif text-3xl font-bold tracking-[0.2em]"
                style={{ color: "var(--ink)" }}
              >
                INVYTRA
              </p>
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-[1.8] font-medium" style={{ color: "var(--ink-muted)" }}>
              {config.brand.tagline}
            </p>

            <div
              className="mt-6 rounded-xl border p-5"
              style={{
                borderColor: "var(--line)",
                background: "var(--bg)",
              }}
            >
              <p className="text-[9px] font-bold uppercase tracking-[0.3em]" style={{ color: "var(--gold)" }}>
                Our Philosophy
              </p>
              <p className="mt-2 text-sm leading-[1.7] font-medium" style={{ color: "var(--ink-muted)" }}>
                {config.brand.philosophy}
              </p>
            </div>
          </div>

          {/* Links */}
          {FOOTER_LINKS.map((col) => (
            <div key={col.heading} className="md:col-span-2">
              <p className="mb-6 text-[10px] font-bold uppercase tracking-[0.3em]" style={{ color: "var(--gold)" }}>
                {col.heading}
              </p>
              <div className="flex flex-col gap-3">
                {col.items.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-sm font-medium transition-colors duration-300 hover:text-[color:var(--gold)]"
                    style={{ color: "var(--ink-muted)" }}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          {/* Connect */}
          <div className="md:col-span-3">
            <p className="mb-6 text-[10px] font-bold uppercase tracking-[0.3em]" style={{ color: "var(--gold)" }}>
              Connect
            </p>
            <div className="flex flex-col gap-3 text-sm font-medium" style={{ color: "var(--ink-muted)" }}>
              <a href={config.contact.instagram} target="_blank" rel="noreferrer" className="hover:text-[color:var(--gold)] transition-colors">
                Instagram: @invytra
              </a>
              <a href={`mailto:${config.contact.email}`} className="break-words hover:text-[color:var(--gold)] transition-colors">
                Email: {config.contact.email}
              </a>
              <a href={`tel:${config.contact.phone.replace(/\s/g, "")}`} className="break-words hover:text-[color:var(--gold)] transition-colors">
                Phone: {config.contact.phone}
              </a>
            </div>
          </div>
        </div>

        <div className="relative mt-8 flex flex-col items-start gap-3 md:flex-row md:items-center md:justify-between">
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em]" style={{ color: "var(--ink-muted)" }} suppressHydrationWarning>
            © {new Date().getFullYear()} Invytra. All rights reserved.
          </span>
          <span className="font-serif text-sm font-bold tracking-[0.3em]" style={{ color: "var(--gold)" }}>
            Ideas today. Impact tomorrow.
          </span>
        </div>
      </div>
    </footer>
  );
}

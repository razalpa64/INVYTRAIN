"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const LINKS = [
  { href: "/#services", label: "Services" },
  { href: "/#work", label: "Work" },
  { href: "/#reviews", label: "Reviews" },
  { href: "/about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

const VENTURES = [
  { href: "/project", label: "Invytra Project", sub: "Software & final-year projects" },
  { href: "/learning", label: "Invytra Learning", sub: "1:1 online tutoring" },
  { href: "/event", label: "Invytra Event", sub: "Digital invitations & event sites" },
];

/**
 * Floating pill menubar — detaches from the page edge, glass surface,
 * logo tile left, links centre, CTA right. On mobile the menu drops
 * as a rounded sheet directly beneath the pill.
 */
export default function Nav({ brandName }: { brandName: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      // Hide while scrolling down (past the hero fold), return on scroll up —
      // the bar should never sit on top of what you're reading.
      setHidden(y > 160 && y > lastY + 4);
      if (y < lastY - 4 || y <= 160) setHidden(false);
      lastY = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open ]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[900] px-3 pt-3 transition-transform duration-300 ease-out sm:px-5 sm:pt-4 ${
          hidden && !open ? "-translate-y-[130%]" : "translate-y-0"
        }`}
      >
        <div
          className={`mx-auto flex h-16 max-w-[1320px] items-center justify-between gap-3 rounded-[1.4rem] border px-3.5 transition-all duration-300 sm:px-4 ${
            scrolled
              ? "border-line bg-[color-mix(in_srgb,var(--bg)_88%,transparent)] shadow-[0_18px_44px_rgba(22,20,15,0.14)] backdrop-blur-xl"
              : "border-white/25 bg-[color-mix(in_srgb,var(--bg)_68%,transparent)] shadow-[0_10px_30px_rgba(22,20,15,0.10)] backdrop-blur-xl"
          }`}
        >
          {/* Brand */}
          <Link href="/" className="flex min-w-0 items-center gap-2.5" aria-label="Invytra — home">
            <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-[0.8rem] bg-coal ring-1 ring-black/25">
              <Image src="/images/logo-tile.png" alt="Invytra logo" fill sizes="40px" className="object-contain" priority />
            </span>
            <span className="min-w-0 leading-none">
              <span className="block truncate font-serif text-[1.2rem] font-bold tracking-[0.12em] text-ink">
                {brandName || "INVYTRA"}
              </span>
              <span className="mt-0.5 hidden text-[8px] font-bold uppercase tracking-[0.28em] text-gold-dark min-[420px]:block">
                Build a brighter tomorrow
              </span>
            </span>
          </Link>

          {/* Desktop links */}
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2.5 text-[12px] font-bold uppercase tracking-[0.12em] text-ink-muted transition hover:bg-bg-2 hover:text-ink"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/#contact"
              className="hidden min-h-[44px] items-center rounded-full bg-coal px-5 py-2.5 text-[11px] font-extrabold uppercase tracking-[0.12em] text-coal-ink transition hover:bg-gold-dark sm:inline-flex"
            >
              Get started
            </Link>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="flex h-11 w-11 flex-col items-center justify-center gap-[5px] rounded-full border border-line-strong bg-surface lg:hidden"
            >
              <span className={`h-[2px] w-5 bg-ink transition-transform duration-300 ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
              <span className={`h-[2px] w-5 bg-ink transition-transform duration-300 ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
            </button>
          </div>
        </div>

        {/* Mobile dropdown sheet */}
        <div
          className={`mx-auto mt-2 max-w-[1320px] overflow-hidden rounded-[1.4rem] border border-line bg-bg shadow-[0_24px_54px_rgba(22,20,15,0.18)] transition-all duration-300 lg:hidden ${
            open ? "visible max-h-[80svh] overflow-y-auto opacity-100" : "invisible max-h-0 opacity-0"
          }`}
        >
          <nav className="p-3" aria-label="Mobile">
            {LINKS.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex items-baseline gap-3.5 rounded-2xl px-3 py-3 transition hover:bg-bg-2"
              >
                <span className="font-serif text-sm text-gold-dark">0{i + 1}</span>
                <span className="font-serif text-[1.55rem] font-semibold leading-none text-ink">{link.label}</span>
              </Link>
            ))}
            <div className="mt-2 grid gap-2 border-t border-line p-2 pt-4">
              {VENTURES.map((v) => (
                <Link
                  key={v.href}
                  href={v.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-2xl border border-line bg-surface px-4 py-3.5"
                >
                  <span>
                    <span className="block font-serif text-lg font-semibold leading-tight text-ink">{v.label}</span>
                    <span className="mt-0.5 block text-[13px] text-ink-muted">{v.sub}</span>
                  </span>
                  <span className="text-gold-dark" aria-hidden>↗</span>
                </Link>
              ))}
              <Link
                href="/#contact"
                onClick={() => setOpen(false)}
                className="mt-1 inline-flex min-h-[50px] items-center justify-center rounded-full bg-coal px-6 py-3.5 text-[11px] font-extrabold uppercase tracking-[0.14em] text-coal-ink"
              >
                Get started →
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Tap-away layer for the mobile sheet */}
      {open ? (
        <button
          type="button"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-[890] bg-[#16140F]/35 backdrop-blur-[2px] lg:hidden"
        />
      ) : null}
    </>
  );
}

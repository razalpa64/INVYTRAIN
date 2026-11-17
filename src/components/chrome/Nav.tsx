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
 * Utility Agency Redesign:
 * - Minimalist top-bar / floating pill that integrates with the hero.
 * - Clean typography (Space Grotesk display + Cormorant Garamond accent).
 * - Mobile sheet with utility-agency style "Work / Services / About" links.
 * - Menubar behavior: Releaf-inspired interaction (disappear on down-scroll >12px beyond 420px, appear on up-scroll >6px or near top)
 *   BUT redesigned to look like Utility Agency (dark minimalist, no crowding, premium spacing).
 */
export default function Nav({ brandName }: { brandName: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  // Releaf-inspired choreography preserved, but UI redesigned from scratch
  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      // Hide on down-scroll >12px beyond 420px, show on up-scroll >6px or near top
      if (y <= 420) {
        setHidden(false);
      } else if (y - lastY > 12) {
        setHidden(true);
      } else if (lastY - y > 6) {
        setHidden(false);
      }
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
  }, [open]);

  return (
    <>
      {/* Utility-style minimalist header — fixed, glass, but hides on down-scroll */}
      <header
        className={`fixed inset-x-0 top-0 z-[900] transition-all duration-500 ease-in-out ${
          hidden && !open ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
        }`}
      >
        <div
          className={`mx-auto flex max-w-[1400px] items-center justify-between px-4 py-3 transition-all duration-500 ${
            scrolled ? "h-14 bg-[color-mix(in_srgb,var(--bg)_95%,transparent)] border-b border-line-strong shadow-[0_2px_10px_rgba(22,20,15,0.08)]" : "h-18 bg-transparent border-none shadow-none"
          } sm:px-6`}
        >
          {/* Brand — Utility style: minimal mark + wordmark */}
          <Link href="/" className="flex items-center gap-2 shrink-0" aria-label="Invytra — home">
            <span className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full bg-coal ring-1 ring-black/10">
              <Image src="/images/logo-tile.png" alt="Invytra logo" fill sizes="32px" className="object-contain" priority />
            </span>
            <span className="hidden font-display text-xl font-bold tracking-tight text-ink sm:block">
              {brandName || "INVYTRA"}
            </span>
          </Link>

          {/* Desktop links — Utility style: uppercase, spaced, minimalist */}
          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
            {LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[11px] font-bold uppercase tracking-[0.2em] text-ink-muted transition hover:text-ink hover:tracking-[0.22em]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/#contact"
              className="hidden items-center gap-1.5 rounded-full border border-line px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-ink transition hover:bg-coal hover:text-coal-ink sm:inline-flex"
            >
              Work with us
              <span className="h-3 w-3 border-t border-r border-line rotate-45 transition" />
            </Link>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface transition lg:hidden"
            >
              <span className={`h-[1.5px] w-5 bg-ink transition-transform duration-300 ${open ? "translate-y-[3px] rotate-45" : ""}`} />
              <span className={`h-[1.5px] w-5 bg-ink transition-transform duration-300 ${open ? "-translate-y-[3px] -rotate-45" : ""}`} />
            </button>
          </div>
        </div>

        {/* Utility-style mobile sheet — clean, no crowding, premium spacing */}
        <div
          className={`mx-auto mt-2 max-w-[1400px] overflow-hidden rounded-[1.5rem] border border-line bg-surface shadow-[0_30px_60px_rgba(22,20,15,0.12)] transition-all duration-500 lg:hidden ${
            open ? "visible max-h-[85svh] overflow-y-auto opacity-100" : "invisible max-h-0 opacity-0"
          }`}
        >
          <nav className="p-4" aria-label="Mobile">
            {LINKS.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between border-b border-line-strong py-4 transition hover:bg-bg-2 last:border-b-0"
              >
                <span className="font-display text-lg font-semibold leading-none text-ink">{link.label}</span>
                <span className="text-gold-dark" aria-hidden>↗</span>
              </Link>
            ))}
            <div className="mt-6 grid gap-3 border-t border-line pt-6">
              {VENTURES.map((v) => (
                <Link
                  key={v.href}
                  href={v.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-xl border border-line bg-surface px-4 py-3.5 transition hover:bg-bg-2"
                >
                  <div>
                    <span className="block font-display text-base font-semibold leading-tight text-ink">{v.label}</span>
                    <span className="mt-1 block text-[11px] text-ink-muted">{v.sub}</span>
                  </div>
                  <span className="text-gold-dark" aria-hidden>↗</span>
                </Link>
              ))}
              <Link
                href="/#contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex min-h-[48px] items-center justify-center rounded-full bg-coal px-6 py-3 text-[11px] font-bold uppercase tracking-[0.18em] text-coal-ink transition hover:bg-gold-dark"
              >
                Work with us →
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Tap-away layer */}
      {open ? (
        <button
          type="button"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-[890] bg-[#16140F]/25 backdrop-blur-[1px] lg:hidden"
        />
      ) : null}
    </>
  );
}

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

export default function Nav({ brandName }: { brandName: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
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
        className={`fixed inset-x-0 top-0 z-[900] transition-all duration-300 ${
          scrolled ? "bg-[color-mix(in_srgb,var(--bg)_88%,transparent)] shadow-[0_1px_0_var(--line),0_12px_32px_rgba(27,25,21,0.06)] backdrop-blur-xl" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-[4.5rem] max-w-[1400px] items-center justify-between gap-4 px-5 sm:px-6 md:px-10">
          {/* Brand */}
          <Link href="/" className="group flex min-w-0 items-center gap-3" aria-label="Invytra — home">
            <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-xl bg-coal shadow-[0_6px_18px_rgba(22,20,15,0.35)] ring-1 ring-black/20">
              <Image src="/images/logo-tile.png" alt="Invytra logo" fill sizes="44px" className="object-contain" priority />
            </span>
            <span className="min-w-0 leading-none">
              <span className="block truncate font-serif text-[1.35rem] font-bold tracking-[0.14em] text-ink">
                {brandName || "INVYTRA"}
              </span>
              <span className="mt-1 hidden text-[8.5px] font-bold uppercase tracking-[0.3em] text-gold-dark min-[420px]:block">
                Build a brighter tomorrow
              </span>
            </span>
          </Link>

          {/* Desktop links */}
          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
            {LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[12px] font-bold uppercase tracking-[0.14em] text-ink-muted transition-colors hover:text-gold-dark"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/#contact" className="btn-shimmer hidden px-6 py-3 text-[11px] sm:inline-flex">
              Get started
            </Link>
            {/* Mobile burger — 48px touch target */}
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="flex h-12 w-12 flex-col items-center justify-center gap-[6px] rounded-full border border-line-strong bg-surface lg:hidden"
            >
              <span className={`h-[2px] w-5 bg-ink transition-transform duration-300 ${open ? "translate-y-[4px] rotate-45" : ""}`} />
              <span className={`h-[2px] w-5 bg-ink transition-transform duration-300 ${open ? "-translate-y-[4px] -rotate-45" : ""}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-[890] overflow-y-auto bg-bg transition-[opacity,visibility] duration-300 lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="px-5 pb-10 pt-24 sm:px-6">
          <p className="index-chip mb-4"><b>—</b> Menu</p>
          <nav className="flex flex-col" aria-label="Mobile">
            {LINKS.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex items-baseline gap-4 border-b border-line py-4"
              >
                <span className="font-serif text-sm text-gold-dark">0{i + 1}</span>
                <span className="font-serif text-3xl font-semibold text-ink">{link.label}</span>
              </Link>
            ))}
          </nav>

          <p className="index-chip mb-3 mt-9"><b>—</b> Our divisions</p>
          <div className="flex flex-col gap-3">
            {VENTURES.map((v) => (
              <Link
                key={v.href}
                href={v.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between rounded-2xl border border-line bg-surface px-5 py-4"
              >
                <span>
                  <span className="block font-serif text-xl font-semibold text-ink">{v.label}</span>
                  <span className="mt-0.5 block text-sm text-ink-muted">{v.sub}</span>
                </span>
                <span className="text-gold-dark" aria-hidden>↗</span>
              </Link>
            ))}
          </div>

          <Link href="/#contact" onClick={() => setOpen(false)} className="btn-shimmer mt-8 w-full px-6 py-4 text-[12px]">
            Get started →
          </Link>
          <p className="mt-6 text-center text-xs font-semibold uppercase tracking-[0.2em] text-ink-faint">
            Learn · Create · Celebrate
          </p>
        </div>
      </div>
    </>
  );
}

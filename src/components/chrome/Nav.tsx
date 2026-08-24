"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const LINKS = [
  { href: "/#about", label: "About" },
  { href: "/#ventures", label: "Ventures" },
  { href: "/#work", label: "Work" },
  { href: "/#reviews", label: "Reviews" },
  { href: "/#contact", label: "Contact" },
];

export default function Nav({ brandName }: { brandName: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header
        className="fixed inset-x-0 top-0 z-[900] transition-all duration-500"
        style={{
          padding: scrolled ? "12px 0" : "24px 0",
          // Glassmorphism: only activates after scroll
          background: scrolled
            ? "rgba(255, 253, 248, 0.60)"
            : "transparent",
          backdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
          borderBottom: scrolled ? "1px solid rgba(184, 137, 62, 0.12)" : "none",
          boxShadow: scrolled
            ? "0 4px 24px rgba(0,0,0,0.04), 0 1px 0 rgba(255,255,255,0.8) inset"
            : "none",
        }}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 md:px-10">

          {/* Brand wordmark */}
          <Link
            href="/"
            data-cursor="HOME"
            className="relative font-serif text-2xl font-bold tracking-[0.22em]"
            style={{ color: "var(--ink)" }}
          >
            INVYTRA
          </Link>

          {/* Desktop nav links */}
          <nav className="hidden items-center gap-10 md:flex">
            {LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group relative text-[11px] font-bold uppercase tracking-[0.22em] transition-colors duration-300"
                style={{ color: "var(--ink-muted)" }}
              >
                <span className="relative z-10 group-hover:text-[color:var(--gold)] transition-colors duration-300">
                  {link.label}
                </span>
                {/* Underline on hover */}
                <span
                  className="absolute -bottom-0.5 left-0 h-px w-0 group-hover:w-full transition-all duration-300 ease-out"
                  style={{ background: "var(--gold)" }}
                />
              </Link>
            ))}
          </nav>

          {/* Desktop right */}
          <div className="hidden items-center gap-5 md:flex">
            <ThemeToggle />
            <Link
              href="/#contact"
              data-cursor="ENTER"
              className="btn-shimmer px-6 py-3 text-[10px] tracking-[0.18em]"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile burger */}
          <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="relative z-10 flex h-8 w-8 flex-col items-center justify-center gap-[5px]"
            >
              <span
                className="h-px w-6 transition-all duration-400"
                style={{
                  background: "var(--ink)",
                  transform: open ? "translateY(5px) rotate(45deg)" : "none",
                }}
              />
              <span
                className="h-px transition-all duration-400"
                style={{
                  background: "var(--ink)",
                  width: open ? 0 : 24,
                  opacity: open ? 0 : 1,
                }}
              />
              <span
                className="h-px w-6 transition-all duration-400"
                style={{
                  background: "var(--ink)",
                  transform: open ? "translateY(-5px) rotate(-45deg)" : "none",
                }}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile slide-in overlay */}
      <div
        className="fixed inset-0 z-[890] flex flex-col justify-center overflow-hidden px-8 md:hidden"
        style={{
          background: "rgba(255, 253, 248, 0.97)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          transform: open ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.5s cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        <nav className="relative flex flex-col gap-2">
          {LINKS.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="group flex items-center gap-4 border-b py-5"
              style={{ borderColor: "var(--line)" }}
            >
              <span className="font-serif text-sm font-bold" style={{ color: "var(--gold)" }}>
                0{i + 1}
              </span>
              <span className="font-serif text-3xl font-bold" style={{ color: "var(--ink)" }}>
                {link.label}
              </span>
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}

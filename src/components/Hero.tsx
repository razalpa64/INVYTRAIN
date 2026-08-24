"use client";

import Image from "next/image";
import Link from "next/link";
import { siteContent } from "@/lib/content";

export default function Hero({
  eyebrow,
  titleLines,
  description,
  primaryCTA,
  secondaryCTA,
}: {
  eyebrow: string;
  titleLines: string[];
  description: string;
  primaryCTA: string;
  secondaryCTA: string;
}) {
  return (
    <section
      className="relative isolate min-h-[100svh] overflow-hidden border-b flex flex-col justify-between"
      style={{ background: "var(--bg)", borderColor: "var(--line)" }}
    >
      {/* Background Image - Crisp Blur (6px) */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none">
        <Image
          src="/images/hero-bg.jpg"
          alt="Hero Background Ambient"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{
            filter: "blur(6px) saturate(120%) scale(1.04)",
            opacity: 0.65,
          }}
        />
        {/* Subtle Warm Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at center, rgba(246, 244, 238, 0.50) 0%, rgba(246, 244, 238, 0.90) 85%)",
          }}
        />
      </div>

      {/* Ambient Orbs */}
      <div className="orb orb-gold" style={{ width: 800, height: 800, top: "-15%", right: "10%", opacity: 0.25 }} />
      <div className="orb orb-gold" style={{ width: 600, height: 600, bottom: "-10%", left: "10%", opacity: 0.18 }} />

      {/* Main Content Area — Centered Editorial Showcase */}
      <div className="relative z-10 mx-auto flex max-w-[1200px] flex-1 flex-col items-center justify-center text-center px-6 pt-32 pb-16">
        
        {/* Eyebrow Badge */}
        <p className="eyebrow mb-6">
          <span
            className="inline-block rounded-full border px-5 py-2 text-[11px] font-bold uppercase tracking-[0.3em] backdrop-blur-sm"
            style={{
              borderColor: "rgba(184, 137, 62, 0.4)",
              color: "var(--gold)",
              background: "rgba(255, 253, 248, 0.88)",
              boxShadow: "0 2px 14px rgba(0,0,0,0.03)",
            }}
          >
            {eyebrow}
          </span>
        </p>

        {/* Hero Title */}
        <h1
          className="font-display font-serif text-[13vw] leading-[0.88] tracking-[-0.04em] sm:text-[6.5rem] md:text-[8rem] lg:text-[9.5rem]"
          style={{ color: "var(--ink)" }}
        >
          {titleLines.map((line, i) => (
            <span key={line} className="block">
              <span
                className={i === 1 ? "text-glow-gold" : ""}
                style={{
                  color: i === 1 ? "var(--gold)" : "var(--ink)",
                }}
              >
                {line}
              </span>
            </span>
          ))}
        </h1>

        {/* Description */}
        <p
          className="mt-8 max-w-2xl text-base md:text-lg leading-[1.8] font-medium"
          style={{ color: "var(--ink-muted)" }}
        >
          {description}
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
          <Link
            href="#our-sites"
            className="btn-shimmer px-9 py-4.5 text-[11px] font-bold tracking-[0.22em]"
          >
            {primaryCTA} &nbsp;↗
          </Link>
          <Link
            href="#about"
            className="cta-link text-[11px] font-bold uppercase tracking-[0.22em] px-4 py-2"
            style={{ color: "var(--ink)" }}
          >
            {secondaryCTA}
            <span className="arrow" style={{ color: "var(--gold)" }}>→</span>
            <span className="underline-track" />
            <span className="underline-fill" />
          </Link>
        </div>

      </div>

      {/* Bottom Venture Bar — Horizontal 3-Column Showcase */}
      <div className="relative z-10 border-t" style={{ borderColor: "var(--line)", background: "rgba(255, 253, 248, 0.70)", backdropFilter: "blur(10px)" }}>
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x" style={{ borderColor: "var(--line)" }}>
          {siteContent.ventures.map((v) => (
            <Link
              key={v.id}
              href={v.link}
              className="group flex items-center justify-between p-6 md:p-8 transition-all duration-300 hover:bg-[rgba(184,137,62,0.04)]"
            >
              <div className="flex items-center gap-4">
                <span
                  className="font-serif text-sm font-bold"
                  style={{ color: "var(--gold)" }}
                >
                  {v.number}
                </span>
                <div>
                  <p className="font-serif text-lg font-bold leading-none" style={{ color: "var(--ink)" }}>
                    {v.name}
                  </p>
                  <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.15em]" style={{ color: "var(--gold)" }}>
                    {v.slug === "project" ? "Software & Capstones" : v.slug === "learning" ? "1:1 STEM Mentorship" : "Digital Invitations"}
                  </p>
                </div>
              </div>
              <span className="text-sm font-bold transition-transform duration-300 group-hover:translate-x-1" style={{ color: "var(--gold)" }}>
                ↗
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

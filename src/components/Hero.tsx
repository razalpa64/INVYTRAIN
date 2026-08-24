"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback } from "react";
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
  const handleCardMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(800px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateY(-4px)`;
  }, []);

  const handleCardMouseLeave = useCallback((e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.transform = "perspective(800px) rotateY(0deg) rotateX(0deg) translateY(0px)";
  }, []);

  const ventureCards = siteContent.ventures.map((v) => ({
    title: v.slug.toUpperCase(),
    sub: v.name,
    num: v.number,
    accent: v.slug === "project" ? "#A86835" : v.slug === "learning" ? "#3F7267" : "#B8893E",
    desc: v.description,
    href: v.link,
    image: v.heroImage || `/images/${v.slug}-photo.jpg`,
  }));

  return (
    <section
      className="relative isolate min-h-[100svh] overflow-hidden border-b"
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
            background: "radial-gradient(ellipse at center, rgba(246, 244, 238, 0.45) 0%, rgba(246, 244, 238, 0.85) 85%)",
          }}
        />
      </div>

      {/* Ambient Orbs */}
      <div className="orb orb-gold" style={{ width: 700, height: 700, top: "-10%", right: "-10%", opacity: 0.28 }} />
      <div className="orb orb-gold" style={{ width: 500, height: 500, bottom: "-10%", left: "-5%", opacity: 0.20 }} />

      <div className="relative z-10 mx-auto flex max-w-[1400px] flex-col px-6 pt-28 pb-8 md:min-h-[100svh] md:px-10 md:pt-32">
        <div className="flex flex-1 flex-col justify-center gap-12 lg:flex-row lg:items-center lg:gap-16">

          {/* LEFT — Typography */}
          <div className="flex-1">
            <p className="eyebrow mb-6">
              <span
                className="inline-block rounded-full border px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.3em] backdrop-blur-sm"
                style={{
                  borderColor: "rgba(184, 137, 62, 0.4)",
                  color: "var(--gold)",
                  background: "rgba(255, 253, 248, 0.85)",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.03)",
                }}
              >
                {eyebrow}
              </span>
            </p>

            <h1
              className="font-display font-serif text-[14vw] leading-[0.88] tracking-[-0.04em] sm:text-[6rem] md:text-[7.8rem] lg:text-[8.5rem] xl:text-[9.2rem]"
              style={{ color: "var(--ink)" }}
            >
              {titleLines.map((line, i) => (
                <span key={line} className="block overflow-hidden">
                  <span
                    className={`block ${i === 1 ? "text-glow-gold" : ""}`}
                    style={{
                      color: i === 1 ? "var(--gold)" : "var(--ink)",
                    }}
                  >
                    {line}
                  </span>
                </span>
              ))}
            </h1>

            <p
              className="mt-8 max-w-lg text-base leading-[1.8] font-medium"
              style={{ color: "var(--ink-muted)" }}
            >
              {description}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-5">
              <Link
                href="#our-sites"
                className="btn-shimmer px-8 py-4 text-[11px] font-bold tracking-[0.2em]"
              >
                {primaryCTA} &nbsp;↗
              </Link>
              <Link
                href="#about"
                className="cta-link text-[11px] font-bold uppercase tracking-[0.22em]"
                style={{ color: "var(--ink)" }}
              >
                {secondaryCTA}
                <span className="arrow" style={{ color: "var(--gold)" }}>→</span>
                <span className="underline-track" />
                <span className="underline-fill" />
              </Link>
            </div>

            {/* Quick stats row */}
            <div className="mt-12 flex gap-10 border-t pt-8" style={{ borderColor: "var(--line)" }}>
              {[
                { val: "03", label: "Specialist Ventures" },
                { val: "100%", label: "Impact Oriented" },
                { val: "INDIA", label: "Headquarters" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="font-serif text-2xl font-bold" style={{ color: "var(--ink)" }}>{s.val}</p>
                  <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.2em]" style={{ color: "var(--gold)" }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Rich Interactive Venture Cards from site.json */}
          <div
            className="flex flex-col gap-4 lg:w-[44%]"
          >
            {ventureCards.map((card) => (
              <Link
                key={card.title}
                href={card.href}
                className="group relative flex items-center gap-5 rounded-2xl p-5 transition-all duration-300 backdrop-blur-md overflow-hidden"
                style={{
                  background: "rgba(255, 253, 248, 0.85)",
                  border: "1px solid rgba(184, 137, 62, 0.25)",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.04), 0 1px 0 rgba(255,255,255,0.9) inset",
                  transformStyle: "preserve-3d",
                }}
                onMouseMove={handleCardMouseMove}
                onMouseLeave={handleCardMouseLeave}
              >
                {/* Thumbnail Image */}
                <div className="relative h-20 w-24 flex-shrink-0 overflow-hidden rounded-xl border" style={{ borderColor: `${card.accent}30` }}>
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="96px"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/10" />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-extrabold uppercase tracking-[0.2em]" style={{ color: card.accent }}>
                      {card.sub}
                    </span>
                    <span className="text-xs font-bold transition-transform duration-300 group-hover:translate-x-1" style={{ color: card.accent }}>
                      ↗
                    </span>
                  </div>
                  <p className="font-serif text-xl font-bold leading-tight mt-0.5" style={{ color: "var(--ink)" }}>
                    {card.title}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed line-clamp-1" style={{ color: "var(--ink-muted)" }}>
                    {card.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom note */}
        <div
          className="relative mt-8 flex items-center justify-between border-t py-5 text-[10px] font-bold uppercase tracking-[0.22em]"
          style={{ borderColor: "var(--line)", color: "var(--ink-muted)" }}
        >
          <span>Three Specialist Brands</span>
          <span className="text-base animate-bounce" style={{ color: "var(--gold)" }}>↓</span>
          <span>Invytra Ecosystem</span>
        </div>
      </div>
    </section>
  );
}

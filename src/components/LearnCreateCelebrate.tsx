"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteContent } from "@/lib/content";

export default function LearnCreateCelebrate() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);

  const chapters = siteContent.ventures.map((v) => ({
    number: v.number,
    word: v.slug === "learning" ? "LEARN" : v.slug === "project" ? "CREATE" : "CELEBRATE",
    sub: v.name,
    tagline: v.description,
    href: v.link,
    image: v.heroImage || `/images/${v.slug}-photo.jpg`,
    overlay: v.slug === "learning" ? "rgba(15, 40, 30, 0.68)" : v.slug === "project" ? "rgba(45, 25, 8, 0.65)" : "rgba(50, 32, 5, 0.62)",
    accent: v.slug === "learning" ? "#6DB89A" : v.slug === "project" ? "#E0A96D" : "#F0C87A",
  }));

  useEffect(() => {
    let raf = 0;
    const tick = () => {
      const el = sectionRef.current;
      if (el) {
        const rect = el.getBoundingClientRect();
        const total = rect.height - window.innerHeight;
        const raw = total > 0 ? Math.min(1, Math.max(0, -rect.top / total)) : 0;
        setProgress(raw);
        setActive(Math.min(chapters.length - 1, Math.floor(raw * chapters.length)));
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [chapters.length]);

  const ch = chapters[active] || chapters[0];

  return (
    <section ref={sectionRef} style={{ height: "350vh" }}>
      <div className="sticky top-0 h-[100svh] w-full overflow-hidden">

        {/* ── FULL-BLEED PHOTOS FROM site.json ── */}
        {chapters.map((c, i) => (
          <div
            key={c.word}
            className="absolute inset-0"
            style={{
              opacity: active === i ? 1 : 0,
              transition: "opacity 1s ease-in-out",
              zIndex: 0,
            }}
          >
            <Image
              src={c.image}
              alt={c.word}
              fill
              priority={i === 0}
              sizes="100vw"
              className="object-cover"
            />
          </div>
        ))}

        {/* ── DARK COLOUR OVERLAY ── */}
        <div
          className="absolute inset-0"
          style={{
            background: ch.overlay,
            transition: "background 0.9s ease-in-out",
            zIndex: 1,
          }}
        />

        {/* ── VIGNETTE ── */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at center, transparent 25%, rgba(0,0,0,0.55) 100%)",
            zIndex: 2,
          }}
        />

        {/* ── BOTTOM GRADIENT ── */}
        <div
          className="absolute inset-x-0 bottom-0 pointer-events-none"
          style={{
            height: "70%",
            background: "linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.3) 55%, transparent 100%)",
            zIndex: 2,
          }}
        />

        {/* ── ALL CONTENT ── */}
        <div
          className="absolute inset-0 flex flex-col justify-between px-8 py-10 md:px-16 md:py-12"
          style={{ zIndex: 10 }}
        >
          {/* TOP ROW */}
          <div className="flex items-center justify-between">
            {/* Step dots */}
            <div className="flex items-center gap-2">
              {chapters.map((_, i) => (
                <div
                  key={i}
                  className="rounded-full"
                  style={{
                    width: active === i ? 28 : 8,
                    height: 3,
                    background: active === i ? ch.accent : "rgba(255,255,255,0.3)",
                    transition: "all 0.5s ease",
                  }}
                />
              ))}
            </div>

            {/* Section label */}
            <p
              className="text-[11px] font-bold uppercase tracking-[0.35em]"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              The Invytra Pillars
            </p>
          </div>

          {/* BOTTOM CONTENT */}
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">

            {/* Left — Word + tagline */}
            <div className="flex flex-col">

              {/* Sub-label */}
              <p
                className="mb-3 text-[11px] font-extrabold uppercase tracking-[0.35em]"
                style={{
                  color: ch.accent,
                  transition: "color 0.8s ease",
                }}
              >
                {ch.sub}
              </p>

              {/* Giant word — cross-fade per chapter */}
              <div
                className="relative overflow-visible"
                style={{ height: "clamp(5rem, 13vw, 10.5rem)" }}
              >
                {chapters.map((c, i) => (
                  <h2
                    key={c.word}
                    className="absolute inset-0 font-serif font-bold leading-none tracking-tight"
                    style={{
                      fontSize: "clamp(4.5rem, 13vw, 10.5rem)",
                      color: "#FFFFFF",
                      textShadow: `0 2px 40px rgba(0,0,0,0.5)`,
                      opacity: active === i ? 1 : 0,
                      transform: active === i
                        ? "translateY(0)"
                        : i < active
                          ? "translateY(-18%)"
                          : "translateY(18%)",
                      transition: "opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.75s cubic-bezier(0.16,1,0.3,1)",
                      pointerEvents: "none",
                    }}
                  >
                    {c.word}
                  </h2>
                ))}
              </div>

              {/* Tagline — cross-fade per chapter */}
              <div
                className="relative mt-4"
                style={{ minHeight: "2rem" }}
              >
                {chapters.map((c, i) => (
                  <p
                    key={c.word}
                    className="font-serif leading-relaxed"
                    style={{
                      fontSize: "clamp(1rem, 1.8vw, 1.3rem)",
                      color: "rgba(255,255,255,0.80)",
                      position: i === 0 ? "relative" : "absolute",
                      top: 0,
                      left: 0,
                      opacity: active === i ? 1 : 0,
                      transform: active === i ? "translateY(0)" : "translateY(8px)",
                      transition: "opacity 0.6s ease 0.15s, transform 0.7s ease 0.15s",
                      maxWidth: "36rem",
                      pointerEvents: "none",
                    }}
                  >
                    {c.tagline}
                  </p>
                ))}
              </div>
            </div>

            {/* Right — CTA + progress */}
            <div className="flex flex-col items-start md:items-end gap-4 shrink-0">
              {/* CTA Button */}
              <Link
                href={ch.href}
                className="group inline-flex items-center gap-3 rounded-full px-7 py-3.5 text-[11px] font-extrabold uppercase tracking-[0.25em] backdrop-blur-sm"
                style={{
                  background: "rgba(255,255,255,0.12)",
                  border: "1px solid rgba(255,255,255,0.35)",
                  color: "#FFFFFF",
                  transition: "background 0.3s ease, border-color 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = ch.accent;
                  el.style.borderColor = ch.accent;
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "rgba(255,255,255,0.12)";
                  el.style.borderColor = "rgba(255,255,255,0.35)";
                }}
              >
                Explore {ch.sub}
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>

              {/* Progress bar */}
              <div className="flex items-center gap-3">
                <div className="relative h-0.5 w-28 overflow-hidden rounded-full bg-white/20">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${progress * 100}%`,
                      background: ch.accent,
                      transition: "background 0.8s ease",
                    }}
                  />
                </div>
                <span className="font-serif text-xs font-bold" style={{ color: "rgba(255,255,255,0.45)" }}>
                  {ch.number} / 03
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

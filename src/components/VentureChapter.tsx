"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useCallback } from "react";
import Reveal from "./motion/Reveal";
import Badge from "./Badge";
import PriceTag from "./PriceTag";
import type { Offering, Venture } from "@/lib/types";

const ACCENTS: Record<string, { color: string; bg: string }> = {
  project:  { color: "#A86835", bg: "rgba(168,104,53,0.08)" },
  learning: { color: "#3F7267", bg: "rgba(63,114,103,0.08)" },
  event:    { color: "#B8893E", bg: "rgba(184,137,62,0.08)" },
};

export default function VentureChapter({
  venture,
  preview,
  index,
}: {
  venture: Venture;
  preview?: Offering;
  index: number;
}) {
  const accent = ACCENTS[venture.theme] ?? ACCENTS.event;
  const reversed = index % 2 === 1;
  const imgRef = useRef<HTMLDivElement>(null);

  const handleImgMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = imgRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width  - 0.5;
    const y = (e.clientY - rect.top)  / rect.height - 0.5;
    el.style.transform = `perspective(1000px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg)`;
  }, []);

  const handleImgMouseLeave = useCallback(() => {
    if (imgRef.current) {
      imgRef.current.style.transform = "perspective(1000px) rotateY(0deg) rotateX(0deg)";
    }
  }, []);

  return (
    <section
      id={venture.slug}
      className="relative overflow-hidden border-t"
      style={{
        borderColor: "var(--line)",
        background: index % 2 === 1 ? "var(--bg-2)" : "var(--bg)",
      }}
    >
      {/* Background watermark number */}
      <div
        className="pointer-events-none absolute select-none font-serif font-bold leading-none"
        style={{
          fontSize: "clamp(12rem, 26vw, 24rem)",
          color: "var(--ink)",
          opacity: 0.03,
          top: "50%",
          [reversed ? "left" : "right"]: "-4%",
          transform: "translateY(-50%)",
        }}
      >
        {venture.number}
      </div>

      {/* Per-venture glow orb */}
      <div
        className={`orb orb-${venture.slug === "project" ? "project" : venture.slug === "learning" ? "learning" : "event"}`}
        style={{
          width: 600,
          height: 600,
          top: "50%",
          [reversed ? "right" : "left"]: "-5%",
          transform: "translateY(-50%)",
          opacity: 0.18,
        }}
      />

      <div
        className={`relative mx-auto flex max-w-[1400px] flex-col gap-16 px-6 py-24 md:px-10 md:py-36 lg:flex-row lg:items-center lg:gap-20 ${
          reversed ? "lg:flex-row-reverse" : ""
        }`}
      >
        {/* Text side */}
        <div className="relative lg:w-1/2">
          <Reveal>
            <div className="mb-6 flex items-center gap-4">
              <span
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border text-[10px] font-bold"
                style={{ borderColor: accent.color, color: accent.color, background: accent.bg }}
              >
                {venture.number}
              </span>
              <p className="text-[11px] font-extrabold uppercase tracking-[0.3em]" style={{ color: accent.color }}>
                {venture.label}
              </p>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h2
              className="font-serif font-bold leading-[0.98] tracking-tight"
              style={{ fontSize: "clamp(2.8rem, 5.5vw, 4.8rem)", color: "var(--ink)" }}
            >
              {venture.headline.map((line, i) => (
                <span key={line} className="block">
                  {i === 0 ? line : (
                    <span style={{ color: accent.color }}>{line}</span>
                  )}
                </span>
              ))}
            </h2>
          </Reveal>

          <Reveal delay={160}>
            <p
              className="mt-6 max-w-md text-base leading-[1.8] font-medium"
              style={{ color: "var(--ink-muted)" }}
            >
              {venture.description}
            </p>
          </Reveal>

          <Reveal delay={220}>
            <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-3">
              {venture.features.map((feature, fi) => (
                <li
                  key={feature}
                  className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.14em]"
                  style={{ color: "var(--ink)" }}
                >
                  <span
                    className="h-1.5 w-1.5 flex-shrink-0 rounded-full"
                    style={{ background: accent.color }}
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={300}>
            <Link
              href={venture.link}
              data-cursor="ENTER"
              className="group mt-10 inline-flex items-center gap-3 rounded-full border px-7 py-3.5 text-[11px] font-extrabold uppercase tracking-[0.2em] transition-all duration-300"
              style={{
                borderColor: accent.color,
                color: accent.color,
                background: "transparent",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = accent.color;
                (e.currentTarget as HTMLElement).style.color = "#FFFFFF";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "transparent";
                (e.currentTarget as HTMLElement).style.color = accent.color;
              }}
            >
              {venture.cta}
              <span className="transition-transform duration-300 group-hover:translate-x-1">↗</span>
            </Link>
          </Reveal>
        </div>

        {/* Image side */}
        <div className="lg:w-1/2">
          <Reveal variant="image" className="relative">
            <div
              ref={imgRef}
              className="relative overflow-hidden rounded-2xl"
              style={{
                aspectRatio: "4/5",
                transition: "transform 0.15s ease",
                boxShadow: `0 24px 60px rgba(0,0,0,0.10), 0 0 80px ${accent.color}18`,
                border: `1px solid ${accent.color}25`,
              }}
              onMouseMove={handleImgMouseMove}
              onMouseLeave={handleImgMouseLeave}
            >
              {venture.heroImage ? (
                <Image
                  src={venture.heroImage}
                  alt={venture.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              ) : (
                <div
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ background: "var(--surface-strong)" }}
                >
                  <span className="font-serif text-8xl font-bold opacity-20" style={{ color: accent.color }}>
                    {venture.number}
                  </span>
                </div>
              )}
            </div>
          </Reveal>

          {/* Preview card */}
          {preview ? (
            <Reveal delay={120}>
              <div
                className="mt-5 card-glow rounded-2xl p-6"
                style={{
                  background: "var(--surface)",
                }}
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[10px] font-extrabold uppercase tracking-[0.2em]" style={{ color: accent.color }}>
                      {venture.slug === "project"
                        ? "Latest Project"
                        : venture.slug === "learning"
                          ? "Current Admissions"
                          : "Featured Invitation"}
                    </p>
                    <p className="mt-1 font-serif text-xl font-bold" style={{ color: "var(--ink)" }}>
                      {preview.title}
                    </p>
                    <div className="mt-2">
                      <PriceTag offering={preview} />
                    </div>
                  </div>
                  {preview.badge ? (
                    <Badge label={preview.badge} />
                  ) : null}
                </div>
              </div>
            </Reveal>
          ) : null}
        </div>
      </div>
    </section>
  );
}

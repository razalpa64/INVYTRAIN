"use client";

import { useEffect, useRef } from "react";
import Reveal from "./motion/Reveal";
import RevealLines from "./motion/RevealLines";
import { siteContent } from "@/lib/content";

export default function WhatIsInvytra() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add("in-view");
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const tags = ["Vision", "Impact", "Craft", "Growth", "Excellence", "Innovation", "Purpose"];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative overflow-hidden"
      style={{ background: "#E8E3D8" }}
    >
      <div className="section-divider" />

      {/* Ticker marquee */}
      <div
        className="overflow-hidden border-b py-3.5"
        style={{ borderColor: "rgba(184,137,62,0.18)", background: "rgba(210,203,190,0.45)" }}
      >
        <div className="marquee-track flex gap-12">
          {[...tags, ...tags, ...tags, ...tags].map((tag, i) => (
            <span
              key={i}
              className="whitespace-nowrap text-[11px] font-extrabold uppercase tracking-[0.35em]"
              style={{ color: i % 2 === 0 ? "var(--gold)" : "var(--ink-muted)" }}
            >
              {tag}
              <span className="ml-12" style={{ color: "var(--line-strong)" }}>✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="relative mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-36">
        <div className="orb orb-gold" style={{ width: 600, height: 600, top: "10%", right: "-5%", opacity: 0.12 }} />

        <div className="relative grid grid-cols-1 gap-12 md:grid-cols-12 md:items-start">
          {/* Left column */}
          <div className="md:col-span-5">
            <Reveal>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-1.5" style={{ borderColor: "rgba(184,137,62,0.4)", background: "rgba(184,137,62,0.10)" }}>
                <span className="h-2 w-2 rounded-full bg-[color:var(--gold)]" />
                <p className="text-[10px] font-extrabold uppercase tracking-[0.3em]" style={{ color: "var(--gold)" }}>
                  {siteContent.about.eyebrow}
                </p>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <h2
                className="font-serif leading-[1.05] tracking-tight font-bold"
                style={{ fontSize: "clamp(2.8rem, 5.5vw, 4.8rem)", color: "var(--ink)" }}
              >
                {siteContent.about.title}
              </h2>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-8">
                <span className="gold-draw is-visible block w-20" />
              </div>
            </Reveal>

            {/* Visual highlight box */}
            <Reveal delay={300}>
              <div
                className="mt-8 rounded-2xl p-6"
                style={{
                  background: "rgba(255,253,248,0.85)",
                  border: "1px solid rgba(184,137,62,0.2)",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
                }}
              >
                <div className="flex items-center gap-4">
                  <span className="font-serif text-4xl font-bold" style={{ color: "var(--gold)" }}>∞</span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: "var(--ink)" }}>Limitless Potential</p>
                    <p className="mt-1 text-xs leading-relaxed" style={{ color: "var(--ink-muted)" }}>Connecting education, tech, & events into one ecosystem.</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right column — editorial text */}
          <div className="md:col-span-7 md:col-start-6">
            <Reveal delay={150}>
              <div
                className="rounded-3xl p-8 md:p-12"
                style={{
                  background: "rgba(255,253,248,0.90)",
                  border: "1px solid rgba(184,137,62,0.18)",
                  boxShadow: "0 16px 48px rgba(0,0,0,0.07)",
                }}
              >
                <RevealLines
                  className="max-w-2xl font-serif leading-[1.5] font-normal"
                  style={{ fontSize: "clamp(1.25rem, 2vw, 1.8rem)", color: "var(--ink)" }}
                  lines={siteContent.about.lines}
                />

                {/* Tag pills */}
                <div className="mt-10 flex flex-wrap gap-2.5 border-t pt-8" style={{ borderColor: "var(--line)" }}>
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.2em] transition-all duration-300 hover:border-[color:var(--gold)] hover:text-[color:var(--gold)]"
                      style={{ borderColor: "var(--line-strong)", background: "var(--bg)", color: "var(--ink)" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      <div className="section-divider" />
    </section>
  );
}

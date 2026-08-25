"use client";

import Link from "next/link";
import Image from "next/image";
import Reveal from "./motion/Reveal";
import { siteContent } from "@/lib/content";

export default function FinalCTA() {
  return (
    <section
      className="relative flex min-h-[85svh] flex-col items-center justify-center overflow-hidden border-t px-6 text-center"
      style={{ background: "var(--bg)", borderColor: "var(--line)" }}
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.14]" data-parallax="12">
        <Image src="/images/event-photo.jpg" alt="" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0" style={{ background: "var(--bg)", opacity: 0.78 }} />
      </div>
      <div className="relative z-10 flex max-w-4xl flex-col items-center">
        <Reveal>
          <p className="eyebrow mb-6">The Next Step</p>
        </Reveal>

        <Reveal delay={80}>
          <span className="gold-draw is-visible mx-auto mb-8 block w-20" />
        </Reveal>

        <Reveal delay={140}>
          <h2
            className="font-serif font-bold leading-[0.92] tracking-tight"
            style={{ fontSize: "clamp(3.2rem, 9vw, 8rem)", color: "var(--ink)" }}
          >
            {siteContent.finalCta.titleLines[0]}
            <br />
            <span style={{ color: "var(--gold)" }}>
              {siteContent.finalCta.titleLines[1]}
            </span>
          </h2>
        </Reveal>

        <Reveal delay={220}>
          <p
            className="mt-8 max-w-md text-sm font-bold uppercase tracking-[0.3em]"
            style={{ color: "var(--ink-muted)" }}
          >
            {siteContent.finalCta.description}
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="#contact"
              data-cursor="ENTER"
              className="btn-shimmer px-10 py-4.5 text-[11px] font-bold tracking-[0.2em]"
            >
              {siteContent.finalCta.button} →
            </Link>
            <Link
              href="#services"
              className="btn-outline-gold px-8 py-4 text-[11px] font-bold tracking-[0.18em]"
            >
              Explore Brands
            </Link>
          </div>
        </Reveal>

        <Reveal delay={400}>
          <div className="mt-16 flex flex-col items-center gap-2">
            <p
              className="font-serif font-bold tracking-[0.6em] text-xl"
              style={{ color: "var(--gold)" }}
            >
              {siteContent.finalCta.brand}
            </p>
            <p
              className="text-[9px] font-bold uppercase tracking-[0.35em]"
              style={{ color: "var(--ink-muted)" }}
            >
              Ideas today. Impact tomorrow.
            </p>
          </div>
        </Reveal>
      </div>

      <div
        className="pointer-events-none absolute bottom-8 left-8 text-[10px] font-bold uppercase tracking-[0.3em]"
        style={{ color: "var(--ink-faint)" }}
        suppressHydrationWarning
      >
        ©{new Date().getFullYear()}
      </div>
      <div
        className="pointer-events-none absolute bottom-8 right-8 text-[10px] font-bold uppercase tracking-[0.3em]"
        style={{ color: "var(--ink-faint)" }}
      >
        invytra.com
      </div>
    </section>
  );
}

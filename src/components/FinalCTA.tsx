"use client";

import Link from "next/link";
import Reveal from "./motion/Reveal";
import { siteContent } from "@/lib/content";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-coal text-center text-coal-ink">
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(196,154,72,0.16), transparent 70%)" }}
      />
      <div className="relative mx-auto flex max-w-3xl flex-col items-center px-5 py-20 sm:px-6 md:py-28">
        <Reveal>
          <p className="text-[11px] font-extrabold uppercase tracking-[0.28em] text-[#C49A48]">The next step</p>
        </Reveal>
        <Reveal delay={140}>
          <h2 className="mt-5 font-display text-[clamp(2.6rem,7.5vw,5rem)]">
            {siteContent.finalCta.titleLines[0]}{" "}
            <span className="display-italic" style={{ color: "#E9C979" }}>{siteContent.finalCta.titleLines[1]}</span>
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-6 max-w-md text-[15px] leading-[1.85] text-coal-muted">{siteContent.finalCta.description}</p>
        </Reveal>
        <Reveal delay={260}>
          <div className="mt-9 flex flex-col gap-3 min-[480px]:flex-row">
            <Link
              href="#contact"
              className="inline-flex min-h-[50px] items-center justify-center rounded-full bg-[#C49A48] px-9 py-4 text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#16140F] transition hover:bg-[#E9C979]"
            >
              {siteContent.finalCta.button} →
            </Link>
            <Link
              href="#services"
              className="inline-flex min-h-[50px] items-center justify-center rounded-full border border-coal-line px-9 py-4 text-[11px] font-extrabold uppercase tracking-[0.16em] text-coal-ink transition hover:border-[#C49A48]"
            >
              Explore services
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

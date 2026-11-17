import Link from "next/link";
import Reveal from "@/components/motion/Reveal";

/**
 * Manifesto — the Webzio-style giant statement moment, Invytra's own
 * words. Oversized kinetic lines revealed in sequence, one supporting
 * paragraph, nothing else competing.
 */
export default function Manifesto() {
  return (
    <section className="border-b border-line bg-bg">
      <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-6 md:px-10 md:py-32">
        <Reveal>
          <p className="index-chip"><b>✦</b> Our ethos</p>
        </Reveal>
        <h2 className="mt-8 font-display uppercase leading-[0.95]">
          <Reveal delay={60}>
            <span className="block text-[clamp(2.5rem,7.5vw,5.8rem)] text-ink">We don&rsquo;t sell</span>
          </Reveal>
          <Reveal delay={140}>
            <span className="text-outline block text-[clamp(2.5rem,7.5vw,5.8rem)]" style={{ WebkitTextStrokeColor: "rgba(27,25,21,0.85)" }}>
              Packages.
            </span>
          </Reveal>
          <Reveal delay={220}>
            <span className="block text-[clamp(2.5rem,7.5vw,5.8rem)] text-ink">
              We build <span className="display-italic normal-case" style={{ color: "#A97F2F" }}>brighter</span>
            </span>
          </Reveal>
          <Reveal delay={300}>
            <span className="block text-[clamp(2.5rem,7.5vw,5.8rem)] text-ink">Tomorrows.</span>
          </Reveal>
        </h2>
        <div className="mt-10 flex flex-wrap items-end justify-between gap-8">
          <Reveal delay={200}>
            <p className="max-w-xl text-[15px] leading-[1.9] text-ink-muted md:text-base">
              A final-year student defending a capstone, a child who finally understands fractions, a couple watching
              RSVPs roll in — those are not &ldquo;deliverables&rdquo;. They are turning points. Invytra exists to be
              engineered like software and cared for like craft, in all three worlds at once.
            </p>
          </Reveal>
          <Reveal delay={280}>
            <Link href="/about" className="cta-link text-[11px] font-extrabold uppercase tracking-[0.2em] text-ink">
              Learn our ethos
              <span className="arrow" style={{ color: "#A97F2F" }}>→</span>
              <span className="underline-track" />
              <span className="underline-fill" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

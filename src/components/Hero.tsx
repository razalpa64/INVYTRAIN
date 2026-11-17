import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import { siteContent } from "@/lib/content";

const CARDS = [
  { word: "Learn", slug: "learning", image: "/images/learning-new.jpg", blurb: "1:1 tutoring", rotate: "", y: "" },
  { word: "Create", slug: "project", image: "/images/project-new.jpg", blurb: "Software projects", rotate: "", y: "" },
  { word: "Celebrate", slug: "event", image: "/images/event-new.jpg", blurb: "Event websites", rotate: "", y: "" },
];

/**
 * Utility-inspired Hero redesign:
 * - Minimalist typography (Space Grotesk display)
 * - Clean grid/collage (no overlapping, no crowding)
 * - Premium spacing (Utility Agency style)
 * - Releaf-inspired folding/origami kinetic backdrop preserved in globals.css
 */
export default function Hero({
  eyebrow,
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
  const stats = siteContent.stats;

  return (
    <section className="relative overflow-hidden rounded-b-[3rem] bg-coal text-coal-ink md:rounded-b-[4rem] py-20 md:py-32">
      {/* Utility-inspired folding/origami kinetic backdrop (from globals.css) */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08] transition-opacity duration-1000"
        style={{
          backgroundImage:
            "linear-gradient(rgba(244,239,227,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(244,239,227,0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse 95% 80% at 50% 0%, black, transparent)",
          WebkitMaskImage: "radial-gradient(ellipse 95% 80% at 50% 0%, black, transparent)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-[1400px] px-5 pt-20 pb-16 sm:px-6 md:px-10 md:pt-28 md:pb-24">
        <div className="grid items-center gap-16 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          {/* Words — Utility Agency style: bold, clean, minimalist */}
          <div>
            <Reveal>
              <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 text-[11px] font-bold uppercase tracking-[0.24em] text-gold-dark">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold-dark" />
                {eyebrow}
              </p>
            </Reveal>
            <h1 className="mt-10 font-display leading-[0.95] text-coal-ink" aria-label="Learn. Create. Celebrate.">
              <Reveal delay={60}>
                <span className="block text-[clamp(3.5rem,8vw,6.5rem)] font-bold tracking-[-0.03em]">Learn<span className="text-gold-dark">.</span></span>
              </Reveal>
              <Reveal delay={140}>
                <span className="block text-[clamp(3.5rem,8vw,6.5rem)] font-bold tracking-[-0.03em] text-outline">Create<span style={{ WebkitTextStroke: "0px", color: "#C49A48" }}>.</span></span>
              </Reveal>
              <Reveal delay={220}>
                <span className="block text-[clamp(3.5rem,8vw,6.5rem)] font-bold tracking-[-0.03em]">
                  Celebrate<span className="text-gold-dark">.</span>
                </span>
              </Reveal>
            </h1>
            <Reveal delay={300}>
              <p className="mt-8 max-w-2xl text-[16px] leading-[1.7] text-coal-muted md:text-[18px]">
                {description}{" "}
                <span className="display-italic text-[1.1em] text-gold-dark" style={{ color: "#E9C979" }}>Build a brighter tomorrow.</span>
              </p>
            </Reveal>
            <Reveal delay={380}>
              <div className="mt-10 flex flex-col gap-4 min-[480px]:flex-row min-[480px]:flex-wrap">
                <Link
                  href="#services"
                  className="inline-flex min-h-[50px] items-center justify-center rounded-full bg-coal px-8 py-3 text-[11px] font-bold uppercase tracking-[0.16em] text-coal-ink transition hover:bg-gold-dark hover:text-coal"
                >
                  {primaryCTA} ↗
                </Link>
                <Link
                  href="#work"
                  className="inline-flex min-h-[50px] items-center justify-center rounded-full border border-line px-8 py-3 text-[11px] font-bold uppercase tracking-[0.16em] text-coal-ink transition hover:border-gold-dark hover:text-gold-dark"
                >
                  {secondaryCTA}
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Fanned deck — Utility style: clean grid, no overlap */}
          <Reveal variant="image" delay={200}>
            <div className="flex justify-center gap-4 px-1 md:gap-0 md:px-8">
              {CARDS.map((card, i) => (
                <Link
                  key={card.slug}
                  href={`/${card.slug}`}
                  className={`group relative w-1/3 shrink-0 overflow-hidden rounded-[1.5rem] border border-line transition-all duration-500 hover:z-10 hover:scale-[1.02] md:-ml-4 md:w-[36%] md:first:ml-0 ${card.rotate} ${card.y}`}
                  style={{ zIndex: i }}
                  aria-label={`${card.word} — ${card.blurb}`}
                >
                  <div className="relative aspect-[3/4.1]">
                    <Image
                      src={card.image}
                      alt={card.word}
                      fill
                      priority={i === 1}
                      sizes="(max-width: 768px) 30vw, 20vw"
                      className="img-warm object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/5" />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-4 md:p-6">
                    <p className="font-display text-xl font-bold uppercase leading-none text-white md:text-2xl">
                      {card.word}
                    </p>
                    <p className="mt-1 hidden text-[12px] font-medium text-white/80 min-[480px]:block">
                      {card.blurb}
                    </p>
                  </div>
                  <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-xs text-white backdrop-blur transition group-hover:bg-gold-dark group-hover:text-coal md:h-10 md:w-10" aria-hidden>
                    ↗
                  </span>
                </Link>
              ))}\n            </div>\n          </Reveal>\n        </div>\n\n        {/* Proof base — Utility style: minimalist, clean */}\n        <Reveal delay={200}>
          <dl className=\"mt-20 grid grid-cols-2 gap-x-8 gap-y-10 border-t border-line pt-12 md:mt-32 md:grid-cols-4\">
            {stats.map((s) => (
              <div key={s.label}>
                <dd className=\"font-display text-3xl font-bold text-coal-ink md:text-[2.8rem]\">{s.value}</dd>
                <dt className=\"mt-2 max-w-[16ch] text-[10px] font-bold uppercase tracking-[0.22em] text-coal-muted md:text-[11px]\">
                  {s.label}
                </dt>
              </div>
            ))}\n          </dl>\n        </Reveal>\n      </div>\n    </section>\n  );\n}

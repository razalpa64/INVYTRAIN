import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import { siteContent } from "@/lib/content";

const CARDS = [
  { word: "Learn", slug: "learning", image: "/images/learning-new.jpg", blurb: "1:1 tutoring", rotate: "md:-rotate-[5deg]", y: "md:translate-y-6" },
  { word: "Create", slug: "project", image: "/images/project-new.jpg", blurb: "Software projects", rotate: "md:rotate-[2deg]", y: "md:-translate-y-3" },
  { word: "Celebrate", slug: "event", image: "/images/event-new.jpg", blurb: "Event websites", rotate: "md:rotate-[6deg]", y: "md:translate-y-8" },
];

/**
 * Hero v4 — dark studio collage. Bold grotesque words (one outlined),
 * a fanned deck of the three crafts, proof along the base. A total
 * break from the previous serif/editorial heroes.
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
    <section className="relative overflow-hidden rounded-b-[2rem] bg-coal text-coal-ink md:rounded-b-[3rem]">
      {/* faint grid backdrop */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.13]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(244,239,227,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(244,239,227,0.5) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "radial-gradient(ellipse 90% 70% at 50% 0%, black, transparent)",
          WebkitMaskImage: "radial-gradient(ellipse 90% 70% at 50% 0%, black, transparent)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(ellipse 55% 40% at 75% 20%, rgba(196,154,72,0.20), transparent 70%)" }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-[1400px] px-5 pb-14 pt-32 sm:px-6 md:px-10 md:pb-20 md:pt-44">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
          {/* Words */}
          <div>
            <Reveal>
              <p className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.24em] text-[#E9C979]">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#C49A48]" />
                {eyebrow}
              </p>
            </Reveal>
            <h1 className="mt-8 font-display uppercase leading-[0.92]" aria-label="Learn. Create. Celebrate.">
              <Reveal delay={60}>
                <span className="block text-[clamp(3.1rem,7.5vw,6rem)] text-coal-ink">Learn<span className="text-[#C49A48]">.</span></span>
              </Reveal>
              <Reveal delay={140}>
                <span className="text-outline block text-[clamp(3.1rem,7.5vw,6rem)]">Create<span style={{ WebkitTextStroke: "0px", color: "#C49A48" }}>.</span></span>
              </Reveal>
              <Reveal delay={220}>
                <span className="block text-[clamp(3.1rem,7.5vw,6rem)] text-coal-ink">
                  Celebrate<span className="text-[#C49A48]">.</span>
                </span>
              </Reveal>
            </h1>
            <Reveal delay={300}>
              <p className="mt-7 max-w-lg text-[15px] leading-[1.85] text-coal-muted md:text-base">
                {description}{" "}
                <span className="display-italic text-[1.15em]" style={{ color: "#E9C979" }}>Build a brighter tomorrow.</span>
              </p>
            </Reveal>
            <Reveal delay={360}>
              <div className="mt-8 flex flex-col gap-3 min-[480px]:flex-row min-[480px]:flex-wrap">
                <Link
                  href="#services"
                  className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-[#C49A48] px-8 py-4 text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#16140F] transition hover:bg-[#E9C979]"
                >
                  {primaryCTA} ↗
                </Link>
                <Link
                  href="#work"
                  className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-white/25 px-8 py-4 text-[11px] font-extrabold uppercase tracking-[0.14em] text-coal-ink transition hover:border-[#E9C979] hover:text-[#E9C979]"
                >
                  {secondaryCTA}
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Fanned deck */}
          <Reveal variant="image" delay={200}>
            <div className="flex justify-center gap-3 px-1 md:gap-0 md:px-6">
              {CARDS.map((card, i) => (
                <Link
                  key={card.slug}
                  href={`/${card.slug}`}
                  className={`group relative w-1/3 shrink-0 overflow-hidden rounded-[1.3rem] ring-1 ring-white/20 transition-all duration-500 hover:z-10 hover:rotate-0 hover:scale-[1.04] md:-ml-5 md:w-[38%] md:first:ml-0 ${card.rotate} ${card.y}`}
                  style={{ zIndex: i }}
                  aria-label={`${card.word} — ${card.blurb}`}
                >
                  <div className="relative aspect-[3/4.1]">
                    <Image
                      src={card.image}
                      alt={card.word}
                      fill
                      priority={i === 1}
                      sizes="(max-width: 768px) 33vw, 22vw"
                      className="img-warm object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/10" />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-3.5 md:p-5">
                    <p className="font-display text-lg uppercase leading-none text-white md:text-2xl">{card.word}</p>
                    <p className="mt-1 hidden text-[11px] font-semibold text-white/70 min-[480px]:block">{card.blurb}</p>
                  </div>
                  <span className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-white/15 text-xs text-white backdrop-blur transition group-hover:bg-[#C49A48] group-hover:text-[#16140F] md:h-9 md:w-9" aria-hidden>
                    ↗
                  </span>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Proof base */}
        <Reveal delay={200}>
          <dl className="mt-16 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-white/15 pt-8 md:mt-24 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <dd className="font-display text-3xl text-coal-ink md:text-[2.6rem]">{s.value}</dd>
                <dt className="mt-1.5 max-w-[16ch] text-[9px] font-bold uppercase leading-relaxed tracking-[0.18em] text-coal-muted md:text-[10px]">
                  {s.label}
                </dt>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}

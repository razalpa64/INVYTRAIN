import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import { siteContent } from "@/lib/content";

const PANELS: Record<string, { word: string; blurb: string }> = {
  learning: { word: "Learn", blurb: "1:1 online tutoring & mentorship" },
  project: { word: "Create", blurb: "Software & final-year projects" },
  event: { word: "Celebrate", blurb: "Digital invitations & event sites" },
};

const ORDER = ["learning", "project", "event"];

/**
 * Hero — a photographic triptych. The three crafts are the visual;
 * each panel expands on hover (desktop) and is a full tappable card
 * on mobile. The logo lives in the nav, where logos belong.
 */
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
  const panels = ORDER.map((slug) => siteContent.ventures.find((v) => v.slug === slug)).filter(Boolean);
  const stats = siteContent.stats.slice(0, 3);

  return (
    <section className="border-b border-line bg-bg">
      <div className="mx-auto max-w-[1400px] px-5 pt-28 sm:px-6 md:px-10 md:pt-36">
        {/* Headline row */}
        <div className="flex flex-wrap items-end justify-between gap-8 pb-10 md:pb-12">
          <div className="max-w-3xl">
            <Reveal>
              <p className="index-chip"><b>✦</b> {eyebrow}</p>
            </Reveal>
            <Reveal delay={70}>
              <h1 className="mt-5 font-display text-[clamp(3rem,9.5vw,6.2rem)] text-ink">
                {titleLines.map((line, i) => (
                  <span key={line} className="block">
                    {i === 1 ? <span className="display-italic">{line}</span> : line}
                  </span>
                ))}
              </h1>
            </Reveal>
          </div>
          <Reveal delay={140}>
            <div className="max-w-sm">
              <p className="text-[15px] leading-[1.85] text-ink-muted md:text-base">{description}</p>
              <div className="mt-6 flex flex-col gap-3 min-[420px]:flex-row min-[420px]:flex-wrap">
                <Link href="#services" className="btn-shimmer px-7 py-3.5 text-[11px]">{primaryCTA} ↗</Link>
                <Link href="#work" className="btn-outline-gold px-7 py-3.5 text-[11px]">{secondaryCTA}</Link>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Triptych */}
      <Reveal variant="image">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
          <div className="flex flex-col gap-3 pb-4 md:h-[540px] md:flex-row">
            {panels.map((v) => {
              const panel = PANELS[v!.slug];
              return (
                <Link
                  key={v!.id}
                  href={`/${v!.slug}`}
                  className="group relative block overflow-hidden rounded-[1.6rem] bg-coal transition-[flex] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] md:flex-1 md:hover:flex-[1.55]"
                  aria-label={`${v!.name} — ${panel.blurb}`}
                >
                  <div className="relative h-44 sm:h-52 md:h-full">
                    <Image
                      src={`/images/${v!.slug}-photo.jpg`}
                      alt={v!.name}
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className="img-warm object-cover transition duration-700 group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/5" />
                    {/* Division accent ribbon */}
                    <span className="absolute inset-x-0 top-0 h-1 bg-[#C49A48] opacity-80" />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5 md:p-7">
                    <div>
                      <p className="text-[10px] font-extrabold uppercase tracking-[0.24em] text-[#E9C979]">
                        {v!.number} · {v!.name}
                      </p>
                      <p className="mt-1.5 font-display text-4xl leading-none text-white md:text-5xl">
                        {panel.word}<span className="display-italic" style={{ color: "#E9C979" }}>.</span>
                      </p>
                      <p className="mt-2 hidden text-sm text-white/75 md:block">{panel.blurb}</p>
                    </div>
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/15 text-lg text-white backdrop-blur transition group-hover:bg-[#C49A48] group-hover:text-[#16140F]" aria-hidden>
                      ↗
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Proof strip */}
          <dl className="flex flex-wrap gap-x-12 gap-y-4 py-7">
            {stats.map((s) => (
              <div key={s.label} className="flex items-baseline gap-3">
                <dd className="font-serif text-3xl font-semibold leading-none text-ink">{s.value}</dd>
                <dt className="max-w-[13rem] text-[10px] font-bold uppercase leading-relaxed tracking-[0.16em] text-ink-muted">
                  {s.label}
                </dt>
              </div>
            ))}
            <p className="ml-auto hidden items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-ink-muted lg:flex">
              <span className="text-gold-dark">★★★★★</span> Loved by students, parents & couples
            </p>
          </dl>
        </div>
      </Reveal>
    </section>
  );
}

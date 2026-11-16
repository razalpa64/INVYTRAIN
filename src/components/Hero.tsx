import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import { siteContent } from "@/lib/content";

const VENTURE_BLURB: Record<string, string> = {
  project: "Software & final-year projects",
  learning: "1:1 online tutoring & mentorship",
  event: "Digital invitations & event websites",
};

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
  const stats = siteContent.stats.slice(0, 3);

  return (
    <section className="paper relative overflow-hidden border-b border-line">
      <div className="mx-auto max-w-[1400px] px-5 pb-14 pt-28 sm:px-6 md:px-10 md:pb-20 md:pt-40">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16">
          {/* Copy */}
          <div>
            <Reveal>
              <p className="index-chip">
                <b>✦</b> {eyebrow}
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-6 font-display text-[clamp(3.2rem,11vw,6.8rem)] text-ink">
                {titleLines.map((line, i) => (
                  <span key={line} className="block">
                    {i === 1 ? <span className="display-italic">{line}</span> : line}
                  </span>
                ))}
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-xl text-base leading-[1.85] text-ink-muted md:text-lg">{description}</p>
            </Reveal>
            <Reveal delay={220}>
              <div className="mt-9 flex flex-col gap-3 min-[480px]:flex-row min-[480px]:flex-wrap min-[480px]:items-center">
                <Link href="#services" className="btn-shimmer px-8 py-4 text-[11px]">
                  {primaryCTA} ↗
                </Link>
                <Link href="#work" className="btn-outline-gold px-8 py-4 text-[11px]">
                  {secondaryCTA}
                </Link>
              </div>
            </Reveal>
            <Reveal delay={280}>
              <dl className="mt-11 flex flex-wrap gap-x-10 gap-y-5 border-t border-line pt-7">
                {stats.map((s) => (
                  <div key={s.label}>
                    <dt className="sr-only">{s.label}</dt>
                    <dd className="font-serif text-3xl font-semibold leading-none text-ink md:text-4xl">{s.value}</dd>
                    <dd className="mt-1.5 max-w-[11rem] text-[10px] font-bold uppercase leading-relaxed tracking-[0.16em] text-ink-muted">
                      {s.label}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          {/* Logo panel — the new mark, presented on charcoal as designed */}
          <Reveal variant="image" delay={140}>
            <div className="photo-frame overflow-hidden rounded-[2rem]">
              <div className="relative flex aspect-[4/4.4] flex-col items-center justify-center overflow-hidden bg-coal px-8 text-center min-[480px]:aspect-[4/3.4] lg:aspect-[4/4.2]">
                <div
                  className="pointer-events-none absolute inset-0 opacity-70"
                  style={{ background: "radial-gradient(ellipse 70% 55% at 50% 38%, rgba(196,154,72,0.22), transparent 70%)" }}
                />
                <Image
                  src="/images/logo-full.png"
                  alt="Invytra — Build a brighter tomorrow"
                  width={916}
                  height={718}
                  priority
                  className="relative w-[78%] max-w-[420px] [animation:float-y_7s_ease-in-out_infinite]"
                />
                <p className="relative mt-2 max-w-[26ch] text-[11px] font-bold uppercase leading-loose tracking-[0.24em] text-coal-muted">
                  One venture · Three crafts
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Venture photo strip */}
        <div className="mt-14 grid gap-4 sm:grid-cols-3 md:mt-20">
          {siteContent.ventures.map((v, i) => (
            <Reveal key={v.id} delay={i * 90}>
              <Link
                href={`/${v.slug}`}
                className="group relative block overflow-hidden rounded-3xl bg-coal"
                aria-label={`${v.name} — ${VENTURE_BLURB[v.slug]}`}
              >
                <div className="relative aspect-[16/10] overflow-hidden sm:aspect-[4/3] lg:aspect-[16/10]">
                  <Image
                    src={`/images/${v.slug}-photo.jpg`}
                    alt={v.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover opacity-90 transition duration-700 group-hover:scale-[1.05] group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
                </div>
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
                  <div>
                    <p className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-[#E9C979]">
                      {v.number} · {v.name}
                    </p>
                    <p className="mt-1 font-serif text-xl font-semibold leading-tight text-white">{VENTURE_BLURB[v.slug]}</p>
                  </div>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/12 text-white backdrop-blur transition group-hover:bg-[#C49A48]" aria-hidden>
                    ↗
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

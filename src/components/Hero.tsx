import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import { siteContent } from "@/lib/content";

const BLURB: Record<string, string> = {
  project: "Software & final-year projects",
  learning: "1:1 online tutoring & mentorship",
  event: "Digital invitations & event sites",
};

/**
 * Hero — full-screen cinematic photograph (slow drift + soft blur,
 * like living footage) under a charcoal veil. Generous breathing
 * room, one message, and the three divisions as glass quick-links
 * along the bottom edge.
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
  const stats = siteContent.stats.slice(0, 3);

  return (
    <section className="relative flex min-h-[100svh] flex-col overflow-hidden bg-coal text-white">
      {/* Backdrop */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden>
        <Image
          src="/images/hero-cinema.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="hero-bg object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#12100B]/85 via-[#12100B]/55 to-[#12100B]/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#12100B]/95 via-transparent to-[#12100B]/35" />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex w-full max-w-[1400px] flex-1 flex-col justify-center px-5 pb-16 pt-36 sm:px-6 md:px-10 md:pt-44">
        <div className="max-w-3xl">
          <Reveal>
            <p className="inline-flex items-center gap-2.5 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.24em] text-[#EFD9A0] backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C49A48]" />
              {eyebrow}
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-7 font-display text-[clamp(3.4rem,11vw,7.2rem)] leading-[0.94] text-white">
              {titleLines.map((line, i) => (
                <span key={line} className="block">
                  {i === 1 ? (
                    <span className="display-italic" style={{ color: "#E9C979" }}>{line}</span>
                  ) : (
                    line
                  )}
                </span>
              ))}
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-7 max-w-xl text-base leading-[1.85] text-white/80 md:text-lg">{description}</p>
          </Reveal>
          <Reveal delay={230}>
            <div className="mt-9 flex flex-col gap-3 min-[480px]:flex-row min-[480px]:flex-wrap">
              <Link
                href="#services"
                className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-[#C49A48] px-8 py-4 text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#16140F] transition hover:bg-[#E9C979]"
              >
                {primaryCTA} ↗
              </Link>
              <Link
                href="#work"
                className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-white/35 bg-white/5 px-8 py-4 text-[11px] font-extrabold uppercase tracking-[0.16em] text-white backdrop-blur transition hover:border-[#E9C979] hover:text-[#E9C979]"
              >
                {secondaryCTA}
              </Link>
            </div>
          </Reveal>
          <Reveal delay={300}>
            <dl className="mt-12 flex flex-wrap gap-x-10 gap-y-5 border-t border-white/20 pt-7">
              {stats.map((s) => (
                <div key={s.label}>
                  <dd className="font-serif text-3xl font-semibold leading-none text-white md:text-4xl">{s.value}</dd>
                  <dt className="mt-1.5 max-w-[12rem] text-[10px] font-bold uppercase leading-relaxed tracking-[0.16em] text-white/60">
                    {s.label}
                  </dt>
                </div>
              ))}
              <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-white/70">
                <span className="text-[#E9C979]">★★★★★</span> from students, parents & couples
              </div>
            </dl>
          </Reveal>
        </div>

        {/* Division quick-links */}
        <Reveal delay={360}>
          <div className="mt-14 grid gap-3 pb-4 sm:grid-cols-3">
            {siteContent.ventures.map((v) => (
              <Link
                key={v.id}
                href={`/${v.slug}`}
                className="group flex items-center justify-between gap-3 rounded-2xl border border-white/15 bg-white/[0.07] px-5 py-4 backdrop-blur-md transition hover:border-[#C49A48]/70 hover:bg-white/[0.12]"
              >
                <span>
                  <span className="block text-[9px] font-extrabold uppercase tracking-[0.24em] text-[#E9C979]">
                    {v.number} · {v.name}
                  </span>
                  <span className="mt-1 block font-serif text-lg font-semibold leading-tight text-white">
                    {BLURB[v.slug]}
                  </span>
                </span>
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/25 text-white transition group-hover:border-[#C49A48] group-hover:bg-[#C49A48] group-hover:text-[#16140F]" aria-hidden>
                  ↗
                </span>
              </Link>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

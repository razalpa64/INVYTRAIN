import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import { siteContent } from "@/lib/content";

const LINES = [
  { word: "Learn", image: "/images/learning-new.jpg", slug: "learning" },
  { word: "Create", image: "/images/project-new.jpg", slug: "project" },
  { word: "Celebrate", image: "/images/event-new.jpg", slug: "event" },
];

/**
 * Hero — kinetic editorial typography: the three crafts as giant
 * serif words with live photographs embedded inside the lines,
 * above a full-width cinematic banner. Type is the design; the
 * imagery lives inside it (the current Awwwards pattern), instead
 * of a stock-photo backdrop behind text.
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
  const stats = siteContent.stats.slice(0, 3);

  return (
    <section className="paper overflow-hidden border-b border-line bg-bg">
      <div className="mx-auto max-w-[1400px] px-5 pt-32 sm:px-6 md:px-10 md:pt-40">
        <Reveal>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="index-chip"><b>✦</b> {eyebrow}</p>
            <p className="hidden items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-ink-muted md:flex">
              <span className="text-gold-dark">★★★★★</span> Loved by students, parents & couples
            </p>
          </div>
        </Reveal>

        {/* Kinetic headline — words with photographs inside them */}
        <h1 className="mt-8 font-display text-ink" aria-label="Learn. Create. Celebrate.">
          {LINES.map((line, i) => (
            <span key={line.word} className="block leading-[0.98]">
              <Reveal delay={i * 110}>
                <span className="flex flex-wrap items-center gap-x-[0.22em] gap-y-2">
                  <span className="text-[clamp(3.4rem,11.5vw,8.2rem)]">
                    {line.word}
                    <span className="display-italic">.</span>
                  </span>
                  <Link
                    href={`/${line.slug}`}
                    aria-label={`Explore Invytra ${line.word}`}
                    className="group relative hidden h-[0.62em] w-[1.7em] shrink-0 overflow-hidden rounded-full min-[560px]:inline-block"
                    style={{ fontSize: "clamp(3.4rem,11.5vw,8.2rem)" }}
                  >
                    <Image
                      src={line.image}
                      alt=""
                      fill
                      sizes="240px"
                      className="img-warm object-cover transition duration-700 group-hover:scale-110"
                    />
                    <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-black/15" />
                  </Link>
                  {i === 1 && (
                    <span className="display-italic hidden text-[clamp(2rem,6vw,4.6rem)] text-ink-faint lg:inline">
                      made personal
                    </span>
                  )}
                </span>
              </Reveal>
            </span>
          ))}
        </h1>

        {/* Subline + actions + proof */}
        <div className="mt-10 grid items-end gap-8 pb-12 md:mt-14 md:grid-cols-[minmax(0,1fr)_auto] md:pb-16">
          <Reveal delay={150}>
            <p className="max-w-xl text-base leading-[1.85] text-ink-muted md:text-lg">{description}</p>
            <div className="mt-7 flex flex-col gap-3 min-[480px]:flex-row min-[480px]:flex-wrap">
              <Link href="#services" className="btn-shimmer px-8 py-4 text-[11px]">{primaryCTA} ↗</Link>
              <Link href="#work" className="btn-outline-gold px-8 py-4 text-[11px]">{secondaryCTA}</Link>
            </div>
          </Reveal>
          <Reveal delay={220}>
            <dl className="grid grid-cols-3 gap-6 md:gap-9">
              {stats.map((s) => (
                <div key={s.label} className="border-l-2 border-gold/60 pl-4">
                  <dd className="font-serif text-3xl font-semibold leading-none text-ink md:text-4xl">{s.value}</dd>
                  <dt className="mt-1.5 max-w-[11rem] text-[9px] font-bold uppercase leading-relaxed tracking-[0.14em] text-ink-muted md:text-[10px]">
                    {s.label}
                  </dt>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>

      {/* Cinematic banner */}
      <Reveal variant="image">
        <div className="mx-auto max-w-[1400px] px-5 pb-14 sm:px-6 md:px-10 md:pb-20">
          <div className="relative overflow-hidden rounded-[1.8rem]">
            <div className="relative aspect-[4/5] min-[560px]:aspect-[16/10] md:aspect-[21/9]">
              <Image
                src="/images/hero-cinema.jpg"
                alt="Students collaborating with Invytra mentors around a laptop"
                fill
                priority
                sizes="100vw"
                className="img-warm object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
            </div>
            <div className="absolute inset-x-0 bottom-0 flex flex-wrap items-end justify-between gap-3 p-5 md:p-7">
              <p className="max-w-[34ch] font-serif text-xl font-medium leading-snug text-white md:text-2xl">
                Real students. Real mentors. Work that gets defended, understood & celebrated.
              </p>
              <p className="rounded-full bg-white/12 px-4 py-2 text-[9px] font-extrabold uppercase tracking-[0.22em] text-white backdrop-blur">
                One venture · Three crafts · Fully online
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

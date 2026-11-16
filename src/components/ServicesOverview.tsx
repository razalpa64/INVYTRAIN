import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import { siteContent } from "@/lib/content";

const CONTEXT: Record<string, string> = {
  project: "For students, founders & teams",
  learning: "For learners who want focused progress",
  event: "For couples, families & hosts",
};

const ACCENT: Record<string, string> = {
  project: "#9C5B33",
  learning: "#2F6B5C",
  event: "#A97F2F",
};

function startingPrice(slug: string): string | null {
  return siteContent.offerings.find((o) => o.venture === slug && o.price)?.price ?? null;
}

function venture(slug: string) {
  return siteContent.ventures.find((v) => v.slug === slug)!;
}

/** Image tile used across the bento grid. */
function ImageTile({
  slug,
  className,
  titleSize = "text-3xl md:text-4xl",
}: {
  slug: string;
  className: string;
  titleSize?: string;
}) {
  const v = venture(slug);
  return (
    <Link href={`/${slug}`} className={`group relative block overflow-hidden rounded-[1.4rem] bg-coal ${className}`}>
      <Image
        src={`/images/${slug}-new.jpg`}
        alt={v.name}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="img-warm object-cover opacity-95 transition duration-700 group-hover:scale-[1.05]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-black/18 to-transparent" />
      <span className="absolute inset-x-0 top-0 h-1 bg-[#C49A48] opacity-90" />
      <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
        <p className="text-[9px] font-extrabold uppercase tracking-[0.24em] text-[#E9C979]">
          {v.number} · {CONTEXT[slug]}
        </p>
        <div className="mt-1.5 flex items-end justify-between gap-3">
          <h3 className={`font-display leading-[1.02] text-white ${titleSize}`}>{v.name.replace("INVYTRA ", "")}</h3>
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur transition group-hover:bg-[#C49A48] group-hover:text-[#16140F]" aria-hidden>
            ↗
          </span>
        </div>
        <p className="mt-2 line-clamp-2 max-w-[46ch] text-[13px] leading-relaxed text-white/75">{v.description}</p>
        {startingPrice(slug) ? (
          <p className="mt-3 text-[11px] font-bold uppercase tracking-[0.16em] text-white/85">
            From <span className="font-serif text-base normal-case tracking-normal text-[#E9C979]">{startingPrice(slug)}</span>
          </p>
        ) : null}
      </div>
    </Link>
  );
}

/**
 * The divisions as a bento grid — tiles of deliberate, unequal sizes
 * (the Apple/Linear pattern): one hero tile, supporting tiles, and
 * proof/process/quote tiles poured into the same rigid grid.
 */
export default function ServicesOverview() {
  const quote = siteContent.testimonials[0];
  const stat = siteContent.stats[0];

  return (
    <section id="services" className="border-b border-line bg-bg">
      <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-6 md:px-10 md:py-24">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6 md:mb-12">
          <div>
            <Reveal>
              <p className="index-chip"><b>01</b> The divisions</p>
            </Reveal>
            <Reveal delay={70}>
              <h2 className="mt-4 font-display text-[clamp(2.4rem,6vw,4.2rem)] text-ink">
                Everything we do, <span className="display-italic">in one glance</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <p className="max-w-sm text-[15px] leading-[1.8] text-ink-muted">
              Three specialised divisions — scan the grid, tap the one that&rsquo;s yours, and see exactly what&rsquo;s
              included and what it costs.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:auto-rows-[215px]">
          {/* Project — hero tile */}
          <Reveal className="md:col-span-2 md:row-span-2" delay={0}>
            <ImageTile slug="project" className="h-[380px] md:h-full" titleSize="text-4xl md:text-5xl" />
          </Reveal>

          {/* Learning — wide tile */}
          <Reveal className="md:col-span-2" delay={70}>
            <ImageTile slug="learning" className="h-[240px] md:h-full" />
          </Reveal>

          {/* Event — square tile */}
          <Reveal className="md:col-span-1" delay={120}>
            <ImageTile slug="event" className="h-[240px] md:h-full" titleSize="text-3xl" />
          </Reveal>

          {/* Stat tile — charcoal proof */}
          <Reveal delay={160}>
            <div className="flex h-[180px] flex-col justify-between rounded-[1.4rem] bg-coal p-5 md:h-full md:p-6">
              <p className="text-[9px] font-extrabold uppercase tracking-[0.24em] text-[#C49A48]">Proof, not promises</p>
              <div>
                <p className="font-serif text-5xl font-semibold leading-none text-coal-ink md:text-6xl">{stat.value}</p>
                <p className="mt-2 text-[10px] font-bold uppercase leading-relaxed tracking-[0.18em] text-coal-muted">
                  {stat.label}
                </p>
              </div>
            </div>
          </Reveal>

          {/* Quote tile */}
          {quote ? (
            <Reveal className="md:col-span-2" delay={100}>
              <figure className="flex h-full flex-col justify-between rounded-[1.4rem] border border-line bg-surface p-5 md:p-6">
                <div>
                  <span className="text-sm tracking-[0.18em] text-gold-dark" aria-hidden>★★★★★</span>
                  <blockquote className="mt-3 font-serif text-[1.3rem] font-medium leading-[1.35] text-ink">
                    &ldquo;{quote.quote}&rdquo;
                  </blockquote>
                </div>
                <figcaption className="mt-4 text-[10px] font-bold uppercase tracking-[0.18em] text-ink-muted">
                  {quote.name} · {quote.category}
                </figcaption>
              </figure>
            </Reveal>
          ) : null}

          {/* Process tile */}
          <Reveal className="md:col-span-2" delay={150}>
            <Link
              href="#process"
              className="group flex h-full flex-col justify-between rounded-[1.4rem] border border-gold/35 bg-[#F4E9D2] p-5 transition hover:border-gold md:p-6"
            >
              <p className="text-[9px] font-extrabold uppercase tracking-[0.24em] text-gold-dark">How it works</p>
              <p className="mt-3 font-serif text-[1.45rem] font-medium leading-[1.3] text-ink">
                Message → plan → milestones → <em className="display-italic">you own it.</em>
              </p>
              <span className="mt-4 inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.16em] text-gold-dark">
                See the process <span className="transition-transform group-hover:translate-y-0.5" aria-hidden>↓</span>
              </span>
            </Link>
          </Reveal>
        </div>

        {/* Feature strip under the bento — honest specifics per division */}
        <div className="mt-10 grid gap-6 border-t border-line pt-8 md:grid-cols-3">
          {siteContent.ventures.map((v, i) => (
            <Reveal key={v.slug} delay={i * 70}>
              <p className="text-[11px] font-extrabold uppercase tracking-[0.2em]" style={{ color: ACCENT[v.slug] }}>
                {v.name}
              </p>
              <ul className="mt-3 space-y-2">
                {v.features.slice(0, 3).map((f) => (
                  <li key={f} className="flex gap-2 text-sm font-medium text-ink-soft">
                    <span style={{ color: ACCENT[v.slug] }} aria-hidden>✓</span> {f}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

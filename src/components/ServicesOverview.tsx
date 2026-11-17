import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import { siteContent } from "@/lib/content";

const CONTEXT: Record<string, string> = {
  project: "For students, founders & teams",
  learning: "For learners who want focused progress",
  event: "For couples & hosts",
};

function startingPrice(slug: string): string | null {
  return siteContent.offerings.find((o) => o.venture === slug && o.price)?.price ?? null;
}

function venture(slug: string) {
  return siteContent.ventures.find((v) => v.slug === slug)!;
}

/** Image tile used across the bento grid — Utility Agency minimalist */
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
    <Link href={`/${slug}`} className={`group relative block overflow-hidden rounded-[1rem] bg-surface-strong ${className}`}>
      <Image
        src={`/images/${slug}-new.jpg`}
        alt={v.name}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="img-warm object-cover opacity-90 transition duration-500 group-hover:scale-[1.03]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-coal/60 via-coal/10 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
        <p className="eyebrow text-gold-light">
          {v.number} · {CONTEXT[slug]}
        </p>
        <div className="mt-1.5 flex items-end justify-between gap-3">
          <h3 className={`font-display leading-[1.02] text-surface ${titleSize}`}>
            {v.name.replace("INVYTRA ", "")}
          </h3>
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-surface-strong/15 text-surface backdrop-blur transition group-hover:bg-gold-light group-hover:text-coal" aria-hidden>
            ↗
          </span>
        </div>
        {startingPrice(slug) ? (
          <p className="mt-3 eyebrow text-surface/85">
            From <span className="font-display text-base normal-case tracking-normal text-gold-light">{startingPrice(slug)}</span>
          </p>
        ) : null}
      </div>
    </Link>
  );
}

/**
 * The divisions — Utility Agency Redesign
 * Minimalist grid, clean typography (Space Grotesk display + Cormorant Garamond accent),
 * premium spacing, no crowding.
 */
export default function ServicesOverview() {
  const quote = siteContent.testimonials[0];
  const stat = siteContent.stats[0];

  return (
    <section id="services" className="border-b border-line-strong bg-bg">
      <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-6 md:px-10 md:py-24">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-8 md:mb-14">
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
              Three specialised divisions — scan the grid, tap the one that’s yours, and see exactly what’s
              included and what it costs.
            </p>
          </Reveal>
        </div>

        {/* Utility Agency Minimalist Grid — premium spacing */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-4 md:auto-rows-[280px]">
          {/* Project — hero tile */}
          <Reveal className="md:col-span-2 md:row-span-2" delay={0}>
            <ImageTile slug="project" className="h-[420px] md:h-full" titleSize="text-4xl md:text-5xl" />
          </Reveal>

          {/* Learning — wide tile */}
          <Reveal className="md:col-span-2" delay={70}>
            <ImageTile slug="learning" className="h-[260px] md:h-full" />
          </Reveal>

          {/* Event — square tile */}
          <Reveal className="md:col-span-1" delay={120}>
            <ImageTile slug="event" className="h-[260px] md:h-full" titleSize="text-3xl" />
          </Reveal>

          {/* Stat tile — minimalist charcoal proof */}
          <Reveal delay={160}>
            <div className="flex h-[190px] flex-col justify-between rounded-[1rem] bg-coal-2 p-5 md:h-full md:p-6">
              <p className="eyebrow text-gold-light">Proof, not promises</p>
              <div>
                <p className="font-display text-5xl font-semibold leading-none text-coal-ink md:text-6xl">{stat.value}</p>
                <p className="mt-2 eyebrow text-coal-muted">
                  {stat.label}
                </p>
              </div>
            </div>
          </Reveal>

          {/* Quote tile — Utility Agency clean glass */}
          {quote ? (
            <Reveal className="md:col-span-2" delay={100}>
              <figure className="flex h-full flex-col justify-between rounded-[1rem] border border-line bg-surface-strong/80 p-5 md:p-6">
                <div>
                  <span className="eyebrow text-gold-light" aria-hidden>★★★★★</span>
                  <blockquote className="mt-3 font-display text-[1.3rem] font-medium leading-[1.35] text-ink">
                    &ldquo;{quote.quote}&rdquo;
                  </blockquote>
                </div>
                <figcaption className="mt-4 eyebrow text-ink-muted">
                  {quote.name} · {quote.category}
                </figcaption>
              </figure>
            </Reveal>
          ) : null}

          {/* Process tile — Utility Agency minimalist */}
          <Reveal className="md:col-span-2" delay={150}>
            <Link
              href="#process"
              className="group flex h-full flex-col justify-between rounded-[1rem] border border-line-strong bg-surface-strong/50 p-5 transition hover:border-gold-light md:p-6"
            >
              <p className="eyebrow text-gold-light">How it works</p>
              <p className="mt-3 font-display text-[1.45rem] font-medium leading-[1.3] text-ink">
                Message → plan → milestones → <em className="display-italic">you own it.</em>
              </p>
              <span className="mt-4 inline-flex items-center gap-2 eyebrow text-gold-light">
                See the process <span className="transition-transform group-hover:translate-y-0.5" aria-hidden>↓</span>
              </span>
            </Link>
          </Reveal>
        </div>

        {/* Feature strip under the bento — Utility Agency clean typography */}
        <div className="mt-12 grid gap-8 border-t border-line-strong pt-10 md:grid-cols-3">
          {siteContent.ventures.map((v, i) => (
            <Reveal key={v.slug} delay={i * 70}>
              <p className="eyebrow" style={{ color: "var(--gold-light)" }}>
                {v.name}
              </p>
              <ul className="mt-3 space-y-2">
                {v.features.slice(0, 3).map((f) => (
                  <li key={f} className="flex gap-2 text-sm font-medium text-ink-soft">
                    <span style={{ color: "var(--gold-light)" }} aria-hidden>✓</span> {f}
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

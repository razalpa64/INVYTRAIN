import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import { siteContent } from "@/lib/content";

const CONTEXT: Record<string, string> = {
  project: "For students, founders & teams",
  learning: "For learners who want focused progress",
  event: "For couples, families & hosts",
};

const HEADLINE: Record<string, string> = {
  project: "Build software you can defend",
  learning: "Learn with a dedicated mentor",
  event: "Invite guests beautifully",
};

const ACCENT: Record<string, string> = {
  project: "#9C5B33",
  learning: "#2F6B5C",
  event: "#A97F2F",
};

function startingPrice(slug: string): string | null {
  const first = siteContent.offerings.find((o) => o.venture === slug && o.price);
  return first?.price ?? null;
}

/**
 * The three divisions as alternating editorial rows — big matched
 * photography one side, honest detail (who it's for, what's included,
 * starting price) the other. No identical card clones.
 */
export default function ServicesOverview() {
  return (
    <section id="services" className="border-b border-line bg-bg">
      <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-6 md:px-10 md:py-24">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6 md:mb-16">
          <div>
            <Reveal>
              <p className="index-chip"><b>01</b> The divisions</p>
            </Reveal>
            <Reveal delay={70}>
              <h2 className="mt-4 font-display text-[clamp(2.4rem,6vw,4.2rem)] text-ink">
                Three crafts. <span className="display-italic">One standard.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <p className="max-w-sm text-[15px] leading-[1.8] text-ink-muted">
              Not a generalist agency. Each division does one kind of work, properly — choose yours and see exactly
              what&rsquo;s included before you spend a rupee.
            </p>
          </Reveal>
        </div>

        <div className="space-y-16 md:space-y-24">
          {siteContent.ventures.map((venture, i) => {
            const flip = i % 2 === 1;
            const price = startingPrice(venture.slug);
            const accent = ACCENT[venture.slug];
            return (
              <article key={venture.slug} className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
                <Reveal variant="image" className={`lg:col-span-7 ${flip ? "lg:order-2" : ""}`}>
                  <Link href={`/${venture.slug}`} className="group relative block overflow-hidden rounded-[1.6rem]" tabIndex={-1} aria-hidden>
                    <div className="relative aspect-[16/10] overflow-hidden bg-bg-2">
                      <Image
                        src={`/images/${venture.slug}-new.jpg`}
                        alt=""
                        fill
                        sizes="(max-width: 1024px) 100vw, 58vw"
                        className="img-warm object-cover transition duration-700 group-hover:scale-[1.04]"
                      />
                    </div>
                    <span className="absolute left-5 top-5 rounded-full bg-black/50 px-3.5 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.2em] text-white backdrop-blur">
                      {venture.number} · {venture.name}
                    </span>
                  </Link>
                </Reveal>
                <div className="lg:col-span-5">
                  <Reveal>
                    <p className="text-[11px] font-extrabold uppercase tracking-[0.22em]" style={{ color: accent }}>
                      {CONTEXT[venture.slug]}
                    </p>
                  </Reveal>
                  <Reveal delay={60}>
                    <h3 className="mt-3 font-display text-[clamp(2rem,4.5vw,3.2rem)] text-ink">{HEADLINE[venture.slug]}</h3>
                  </Reveal>
                  <Reveal delay={110}>
                    <p className="mt-4 text-[15px] leading-[1.85] text-ink-muted">{venture.description}</p>
                  </Reveal>
                  <Reveal delay={160}>
                    <ul className="mt-6 grid gap-2.5 min-[420px]:grid-cols-2">
                      {venture.features.slice(0, 4).map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-[13px] font-semibold text-ink-soft">
                          <span className="mt-[3px] text-[11px]" style={{ color: accent }} aria-hidden>✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                  <Reveal delay={210}>
                    <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                      <Link href={`/${venture.slug}`} className="btn-shimmer px-7 py-3.5 text-[11px]">
                        Explore {venture.name.replace("INVYTRA ", "")} →
                      </Link>
                      {price ? (
                        <span className="text-sm text-ink-muted">
                          from <strong className="font-serif text-xl text-ink">{price}</strong>
                        </span>
                      ) : null}
                    </div>
                  </Reveal>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

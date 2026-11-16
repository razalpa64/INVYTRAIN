import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import { siteContent } from "@/lib/content";

const SERVICE_CONTEXT: Record<string, string> = {
  project: "For students, founders & teams",
  learning: "For learners who want focused progress",
  event: "For couples, families & hosts",
};

const SERVICE_HEADLINE: Record<string, string> = {
  project: "Build software you can defend",
  learning: "Learn with a dedicated mentor",
  event: "Invite guests beautifully",
};

const SERVICE_ACCENT: Record<string, string> = {
  project: "#9C5B33",
  learning: "#2F6B5C",
  event: "#A97F2F",
};

export default function ServicesOverview() {
  return (
    <section id="services" className="border-b border-line bg-bg">
      <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-6 md:px-10 md:py-24">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6 md:mb-14">
          <div className="max-w-2xl">
            <Reveal>
              <p className="index-chip"><b>01</b> What we do</p>
            </Reveal>
            <Reveal delay={70}>
              <h2 className="mt-4 font-display text-[clamp(2.4rem,6vw,4.2rem)] text-ink">
                Choose your <span className="display-italic">Invytra</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <p className="max-w-sm text-[15px] leading-[1.8] text-ink-muted">
              Three dedicated divisions, each built around one goal. Pick where you belong — every path starts with a
              free, no-pressure conversation.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {siteContent.ventures.map((venture, i) => {
            const accent = SERVICE_ACCENT[venture.slug];
            return (
              <Reveal key={venture.slug} delay={i * 90} className="h-full">
                <article className="interactive-card flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-surface">
                  <Link href={`/${venture.slug}`} className="image-zoom relative block aspect-[16/9] overflow-hidden" tabIndex={-1} aria-hidden>
                    <Image
                      src={`/images/${venture.slug}-photo.jpg`}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                    <span className="absolute left-5 top-4 rounded-full bg-black/45 px-3 py-1 font-serif text-sm font-semibold text-white backdrop-blur">
                      {venture.number}
                    </span>
                  </Link>
                  <div className="flex flex-1 flex-col p-6 md:p-7">
                    <p className="text-[10px] font-extrabold uppercase tracking-[0.2em]" style={{ color: accent }}>
                      {SERVICE_CONTEXT[venture.slug]}
                    </p>
                    <h3 className="mt-3 font-serif text-[1.7rem] font-semibold leading-[1.08] text-ink">
                      {SERVICE_HEADLINE[venture.slug]}
                    </h3>
                    <p className="mt-3 text-sm leading-[1.75] text-ink-muted">{venture.description}</p>
                    <ul className="mt-5 space-y-2.5 border-t border-line pt-5">
                      {venture.features.slice(0, 3).map((feature) => (
                        <li key={feature} className="flex items-start gap-2.5 text-[13px] font-semibold text-ink-soft">
                          <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: accent }} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={`/${venture.slug}`}
                      className="mt-auto inline-flex items-center gap-2 pt-7 text-[11px] font-extrabold uppercase tracking-[0.18em] text-ink transition-colors hover:text-gold-dark"
                    >
                      Explore {venture.name.replace("INVYTRA ", "")}
                      <span aria-hidden>→</span>
                    </Link>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";
import { siteContent } from "@/lib/content";

const SERVICE_CONTEXT: Record<string, string> = {
  project: "For students, founders, and teams",
  learning: "For learners who want focused progress",
  event: "For couples, families, and hosts",
};

const SERVICE_ACCENTS: Record<string, { color: string; wash: string }> = {
  project: { color: "#A86835", wash: "rgba(168,104,53,0.10)" },
  learning: { color: "#3F7267", wash: "rgba(63,114,103,0.10)" },
  event: { color: "#B8893E", wash: "rgba(184,137,62,0.10)" },
};

export default function ServicesOverview() {
  return (
    <section id="services" className="relative overflow-hidden border-y" style={{ background: "var(--bg-2)", borderColor: "var(--line)" }}>
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
        <div className="mb-14 max-w-2xl">
          <p className="eyebrow mb-5">What We Provide</p>
          <h2 className="font-serif text-5xl font-bold leading-[0.95] tracking-tight md:text-7xl" style={{ color: "var(--ink)" }}>
            Choose your Invytra.
          </h2>
          <p className="mt-6 max-w-xl text-base font-medium leading-[1.8]" style={{ color: "var(--ink-muted)" }}>
            Three dedicated websites, each built around one important goal. Choose where you belong and continue to the experience made for you.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {siteContent.ventures.map((venture) => {
            const accent = SERVICE_ACCENTS[venture.slug] ?? SERVICE_ACCENTS.event;
            return (
              <article key={venture.slug} className="interactive-card group flex h-full flex-col overflow-hidden rounded-2xl border" style={{ background: "var(--surface)", borderColor: "var(--line-strong)" }}>
                <div className="image-zoom relative aspect-[16/8] overflow-hidden" data-parallax="18" style={{ background: accent.wash }}>
                  {venture.heroImage ? (
                    <Image src={venture.heroImage} alt="" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
                  ) : null}
                  <div className="absolute inset-0" style={{ background: `linear-gradient(90deg, ${accent.color}b8, transparent 75%)` }} />
                  <span className="absolute left-6 top-5 font-serif text-4xl font-bold text-white">{venture.number}</span>
                </div>

                <div className="flex flex-1 flex-col p-7 md:p-8">
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.22em]" style={{ color: accent.color }}>
                    {SERVICE_CONTEXT[venture.slug]}
                  </p>
                  <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.2em]" style={{ color: "var(--ink-faint)" }}>
                    {venture.name}
                  </p>
                  <h3 className="mt-4 font-serif text-3xl font-bold leading-[1.05]" style={{ color: "var(--ink)" }}>
                    {venture.slug === "project" ? "Build software" : venture.slug === "learning" ? "Learn with a mentor" : "Create your event"}
                  </h3>
                  <p className="mt-4 text-sm font-medium leading-[1.75]" style={{ color: "var(--ink-muted)" }}>
                    {venture.description}
                  </p>

                  <ul className="mt-6 space-y-3 border-t pt-5" style={{ borderColor: "var(--line)" }}>
                    {venture.features.slice(0, 3).map((feature) => (
                      <li key={feature} className="flex gap-3 text-[11px] font-bold uppercase tracking-[0.12em]" style={{ color: "var(--ink)" }}>
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full" style={{ background: accent.color }} />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link href={venture.link} aria-label={`Visit ${venture.name} website`} className="mt-8 inline-flex items-center gap-3 text-[10px] font-extrabold uppercase tracking-[0.2em]" style={{ color: accent.color }}>
                    Visit website <span className="transition-transform duration-300 group-hover:translate-x-1">↗</span>
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

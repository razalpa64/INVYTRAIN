"use client";

import { useState } from "react";
import Reveal from "@/components/motion/Reveal";

type Module = { name: string; role: string; group: string };

const GROUPS = ["All modules", "Languages", "Frontend", "Backend", "Database", "Cloud & AI"] as const;

const MODULES: Module[] = [
  { name: "TypeScript", role: "Strict type integrity", group: "Languages" },
  { name: "Python", role: "Vision & data pipelines", group: "Languages" },
  { name: "SQL", role: "Relational query design", group: "Languages" },
  { name: "React", role: "Component architecture", group: "Frontend" },
  { name: "Next.js", role: "Full-stack web platform", group: "Frontend" },
  { name: "React Native", role: "Cross-platform mobile apps", group: "Frontend" },
  { name: "Node.js", role: "Async event runtime", group: "Backend" },
  { name: "FastAPI", role: "High-performance Python APIs", group: "Backend" },
  { name: "PostgreSQL", role: "ACID relational engine", group: "Database" },
  { name: "MongoDB", role: "Document data stores", group: "Database" },
  { name: "Vercel", role: "Edge deployment & hosting", group: "Cloud & AI" },
  { name: "Computer Vision", role: "Face recognition & ML models", group: "Cloud & AI" },
];

/**
 * The Invytra craft stack — an interactive, filterable module grid
 * (the reference's 'engineering ecosystem', done with honest tech
 * we actually ship student and client projects on).
 */
export default function CraftStack() {
  const [group, setGroup] = useState<(typeof GROUPS)[number]>("All modules");
  const shown = group === "All modules" ? MODULES : MODULES.filter((m) => m.group === group);

  return (
    <section className="border-b border-line bg-bg">
      <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-6 md:px-10 md:py-24">
        <div className="mb-9">
          <Reveal>
            <p className="index-chip"><b>✦</b> Invytra stack</p>
          </Reveal>
          <Reveal delay={70}>
            <h2 className="mt-4 font-display text-[clamp(2.4rem,6vw,4.2rem)] uppercase leading-[0.98] text-ink">
              Engineering <span className="display-italic normal-case">ecosystem</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-4 max-w-lg text-[15px] leading-[1.8] text-ink-muted">
              The technologies powering every Invytra Project build — the same stack your project is developed,
              documented and defended on.
            </p>
          </Reveal>
        </div>

        <Reveal delay={140}>
          <div className="mb-8 flex flex-wrap gap-2" role="tablist" aria-label="Filter stack by area">
            {GROUPS.map((g) => {
              const active = group === g;
              return (
                <button
                  key={g}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setGroup(g)}
                  className={`min-h-[44px] rounded-full border px-5 py-2.5 text-[11px] font-extrabold uppercase tracking-[0.14em] transition ${
                    active
                      ? "border-coal bg-coal text-coal-ink"
                      : "border-line-strong bg-surface text-ink hover:border-gold-dark hover:text-gold-dark"
                  }`}
                >
                  {g}
                </button>
              );
            })}
          </div>
        </Reveal>

        <div key={group} className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {shown.map((m, i) => (
            <Reveal key={m.name} delay={i * 40}>
              <div className="group h-full rounded-[1.1rem] border border-line bg-surface p-5 transition hover:border-gold/60 hover:bg-surface-2">
                <p className="text-[9px] font-extrabold uppercase tracking-[0.22em] text-gold-dark">{m.group}</p>
                <h3 className="mt-2.5 font-display text-xl text-ink md:text-2xl">{m.name}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-ink-muted">{m.role}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={160}>
          <p className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] font-bold uppercase tracking-[0.18em] text-ink-muted">
            <span className="text-gold-dark">{MODULES.length} curated modules</span>
            <span aria-hidden>·</span> 100% production-ready builds
            <span aria-hidden>·</span> Explained to you, line by line, for your viva
          </p>
        </Reveal>
      </div>
    </section>
  );
}

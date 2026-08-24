"use client";

import Link from "next/link";
import Reveal from "./motion/Reveal";
import Badge from "./Badge";
import type { Offering } from "@/lib/types";

const VENTURE_LABEL: Record<string, string> = {
  project: "Invytra Project",
  learning: "Invytra Learning",
  event: "Invytra Event",
};

const VENTURE_ACCENTS: Record<string, { color: string; bg: string }> = {
  project:  { color: "#A86835", bg: "rgba(168,104,53,0.08)" },
  learning: { color: "#3F7267", bg: "rgba(63,114,103,0.08)" },
  event:    { color: "#B8893E", bg: "rgba(184,137,62,0.08)" },
};

export default function LiveContent({ items }: { items: Offering[] }) {
  const highlighted = items.filter((item) => item.badge).slice(0, 4);
  if (!highlighted.length) return null;

  return (
    <section
      className="relative overflow-hidden border-t border-b"
      style={{
        borderColor: "var(--line)",
        background: "var(--bg-2)",
      }}
    >
      <div className="relative mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-14">
          <div>
            <Reveal>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-1 text-[10px] font-extrabold uppercase tracking-[0.25em]" style={{ borderColor: "rgba(184,137,62,0.3)", background: "rgba(184,137,62,0.08)", color: "var(--gold)" }}>
                <span className="h-2 w-2 rounded-full bg-[color:var(--gold)]" />
                Live Right Now
              </div>
            </Reveal>
            <Reveal delay={80}>
              <h2
                className="font-serif leading-[0.95] font-bold tracking-tight"
                style={{ fontSize: "clamp(2.6rem, 5vw, 4.5rem)", color: "var(--ink)" }}
              >
                Inside Invytra
              </h2>
            </Reveal>
          </div>
          <Reveal delay={150}>
            <p className="max-w-md text-sm leading-relaxed font-medium" style={{ color: "var(--ink-muted)" }}>
              Explore active enrollments, recent software builds, and featured invitation releases across our venture ecosystem.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlighted.map((item, i) => {
            const style = VENTURE_ACCENTS[item.venture] ?? VENTURE_ACCENTS.event;
            return (
              <Reveal key={item.id} delay={i * 90}>
                <Link
                  href={item.link ?? "#"}
                  className="group relative flex h-full flex-col justify-between gap-6 rounded-2xl p-7 transition-all duration-300 overflow-hidden"
                  style={{
                    background: "var(--surface)",
                    border: "1px solid var(--line-strong)",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.03)",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = style.color;
                    el.style.transform = "translateY(-4px)";
                    el.style.boxShadow = "0 16px 40px rgba(0,0,0,0.06)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "var(--line-strong)";
                    el.style.transform = "translateY(0)";
                    el.style.boxShadow = "0 10px 30px rgba(0,0,0,0.03)";
                  }}
                >
                  <div className="flex items-center justify-between gap-2">
                    <Badge label={item.badge} />
                    <span
                      className="text-[10px] font-extrabold uppercase tracking-[0.2em] px-2.5 py-0.5 rounded-md"
                      style={{ color: style.color, background: style.bg }}
                    >
                      {VENTURE_LABEL[item.venture]}
                    </span>
                  </div>

                  <p className="font-serif text-2xl leading-snug font-bold transition-colors duration-300 group-hover:text-[color:var(--gold)]" style={{ color: "var(--ink)" }}>
                    {item.title}
                  </p>

                  <div className="flex items-center justify-between border-t pt-4" style={{ borderColor: "var(--line)" }}>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em]" style={{ color: "var(--ink-muted)" }}>
                      Active Offering
                    </span>
                    <span
                      className="flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-[0.16em]"
                      style={{ color: style.color }}
                    >
                      Explore <span className="transition-transform duration-300 group-hover:translate-x-1">↗</span>
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

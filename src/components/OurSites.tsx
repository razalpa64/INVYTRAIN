"use client";

import Link from "next/link";
import type { Venture } from "@/lib/types";

const VENTURE_STYLES: Record<string, { accent: string; bg: string }> = {
  project:  { accent: "#A86835", bg: "rgba(168,104,53,0.06)" },
  learning: { accent: "#3F7267", bg: "rgba(63,114,103,0.06)" },
  event:    { accent: "#B8893E", bg: "rgba(184,137,62,0.06)" },
};

export default function OurSites({ ventures }: { ventures: Venture[] }) {
  return (
    <section
      id="our-sites"
      className="relative overflow-hidden border-t border-b"
      style={{ background: "var(--bg-2)", borderColor: "var(--line)" }}
    >
      <div className="relative mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-36">
        <div className="mb-16 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow mb-5">Our Websites</p>
            <h2
              className="font-serif font-bold leading-[0.95] tracking-tight"
              style={{ fontSize: "clamp(2.8rem, 5.5vw, 4.8rem)", color: "var(--ink)" }}
            >
              One Name.<br />
              <span style={{ color: "var(--gold)" }}>
                Three Destinations.
              </span>
            </h2>
          </div>
          <p
            className="max-w-xs text-sm leading-[1.8] font-medium"
            style={{ color: "var(--ink-muted)" }}
          >
            Choose the experience made for what you need right now.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {ventures.map((venture) => {
            const style = VENTURE_STYLES[venture.slug] ?? VENTURE_STYLES.event;
            return (
              <article
                key={venture.id}
                className="group relative overflow-hidden rounded-2xl p-8 md:p-10 transition-all duration-300"
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--line-strong)",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.03)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = style.accent;
                  el.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = "var(--line-strong)";
                  el.style.transform = "translateY(0)";
                }}
              >
                <div className="flex items-start justify-between">
                  <span
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border text-[11px] font-bold"
                    style={{ borderColor: style.accent, color: style.accent, background: style.bg }}
                  >
                    {venture.number}
                  </span>
                </div>

                <h3
                  className="mt-8 font-serif text-3xl font-bold leading-tight"
                  style={{ color: "var(--ink)" }}
                >
                  {venture.name.replace("INVYTRA ", "")}
                </h3>
                <p
                  className="mt-3 min-h-14 text-sm leading-[1.8] font-medium"
                  style={{ color: "var(--ink-muted)" }}
                >
                  {venture.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 border-t pt-6" style={{ borderColor: "var(--line)" }}>
                  <Link
                    href={venture.link}
                    className="flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.2em] transition-colors duration-300"
                    style={{ color: style.accent }}
                  >
                    Visit Website →
                  </Link>
                  <Link
                    href={`#${venture.slug}`}
                    className="text-[10px] font-bold uppercase tracking-[0.2em] transition-colors duration-300"
                    style={{ color: "var(--ink-muted)" }}
                  >
                    Overview
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

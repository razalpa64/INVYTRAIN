"use client";

import { useMemo, useState } from "react";
import FeaturedItem from "./FeaturedItem";
import Reveal from "./motion/Reveal";
import type { Offering } from "@/lib/types";

const TABS = ["ALL", "PROJECT", "LEARNING", "EVENT"] as const;

export default function FeaturedWork({ items }: { items: Offering[] }) {
  const [tab, setTab] = useState<(typeof TABS)[number]>("ALL");

  const filtered = useMemo(() => {
    const visibleItems = tab === "ALL" ? items : items.filter((item) => item.venture === tab.toLowerCase());
    const roleOrder: Record<string, number> = { large: 0, small: 1, wide: 1, vertical: 2 };
    return [...visibleItems].sort((a, b) => {
      const roleDifference = (roleOrder[a.gallerySize ?? "small"] ?? 1) - (roleOrder[b.gallerySize ?? "small"] ?? 1);
      return roleDifference || a.sortOrder - b.sortOrder;
    });
  }, [items, tab]);

  return (
    <section id="work" className="relative overflow-hidden border-y" style={{ background: "var(--bg)", borderColor: "var(--line)" }}>
      <div className="mx-auto max-w-[1400px] px-5 py-12 sm:px-6 md:px-10 md:py-16">
        <div className="mb-8 grid gap-6 md:mb-9 md:grid-cols-[minmax(0,1fr)_minmax(280px,0.6fr)] md:items-end md:gap-12">
          <div>
          <Reveal>
            <div className="mb-5 flex items-center gap-4">
              <span className="font-serif text-2xl font-bold" style={{ color: "var(--gold)" }}>04</span>
              <p className="eyebrow">Selected Work</p>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="max-w-[18ch] font-serif text-[clamp(2.75rem,10vw,4.5rem)] font-bold leading-[0.92] tracking-tight md:text-7xl" style={{ color: "var(--ink)" }}>
              <span className="block">Work with</span>
              <span className="block" style={{ color: "var(--gold)" }}>a point of view.</span>
            </h2>
          </Reveal>
          </div>
          <Reveal delay={140}>
            <p className="max-w-md text-sm font-medium leading-[1.8]">
              A selection of software, learning experiences, and celebrations shaped with clarity, care, and a little uncommon sense.
            </p>
          </Reveal>
        </div>

        <Reveal delay={180}>
          <div className="mb-6 flex flex-wrap items-center gap-2 border-y py-3" style={{ borderColor: "var(--line-strong)" }}>
            <span className="mr-3 text-[10px] font-extrabold uppercase tracking-[0.2em]" style={{ color: "var(--ink-faint)" }}>Filter by</span>
            {TABS.map((t) => {
              const active = tab === t;
              return (
                <button
                  key={t}
                  type="button"
                  onClick={() => setTab(t)}
                  className="rounded-full px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.2em] transition-all duration-300"
                  style={{
                    background: active ? "var(--ink)" : "var(--surface)",
                    color: active ? "var(--bg)" : "var(--ink)",
                    border: `1px solid ${active ? "var(--ink)" : "var(--line-strong)"}`,
                  }}
                >
                  {t}
                </button>
              );
            })}
          </div>
        </Reveal>

      <div key={tab} className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 md:auto-rows-[240px]">
        {filtered.length ? (
          filtered.map((item, i) => <FeaturedItem key={item.id} offering={item} index={i} />)
        ) : (
          <p className="col-span-full py-20 text-center text-sm font-bold uppercase tracking-[0.2em]" style={{ color: "var(--ink-muted)" }}>
            More work coming soon.
          </p>
        )}
      </div>
      </div>
    </section>
  );
}

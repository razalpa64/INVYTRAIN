"use client";

import { useMemo, useState } from "react";
import FeaturedItem from "./FeaturedItem";
import Reveal from "./motion/Reveal";
import type { Offering } from "@/lib/types";

const TABS = ["ALL", "PROJECT", "LEARNING", "EVENT"] as const;

export default function FeaturedWork({ items }: { items: Offering[] }) {
  const [tab, setTab] = useState<(typeof TABS)[number]>("ALL");

  const filtered = useMemo(() => {
    if (tab === "ALL") return items;
    return items.filter((item) => item.venture === tab.toLowerCase());
  }, [items, tab]);

  return (
    <section id="work" className="relative mx-auto max-w-[1400px] px-6 py-28 md:px-10 md:py-36">
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between mb-14">
        <div>
          <Reveal>
            <p className="eyebrow mb-4">Selected Work</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="font-serif text-5xl font-bold leading-[1.02] tracking-tight md:text-6xl" style={{ color: "var(--ink)" }}>
              Crafted by Invytra
            </h2>
          </Reveal>
        </div>
        <Reveal delay={140}>
          <div className="flex flex-wrap gap-2.5">
            {TABS.map((t) => {
              const active = tab === t;
              return (
                <button
                  key={t}
                  type="button"
                  onClick={() => setTab(t)}
                  className="rounded-full px-5 py-2.5 text-[10px] font-extrabold uppercase tracking-[0.2em] transition-all duration-300"
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
      </div>

      <div
        key={tab}
        className="grid auto-rows-[240px] grid-cols-1 gap-6 [grid-auto-flow:dense] sm:grid-cols-2 md:grid-cols-4"
      >
        {filtered.length ? (
          filtered.map((item, i) => <FeaturedItem key={item.id} offering={item} index={i} />)
        ) : (
          <p className="col-span-full py-20 text-center text-sm font-bold uppercase tracking-[0.2em]" style={{ color: "var(--ink-muted)" }}>
            More work coming soon.
          </p>
        )}
      </div>
    </section>
  );
}

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
    <section id="work" className="relative overflow-hidden border-y" style={{ background: "var(--bg)", borderColor: "var(--line)" }}>
      <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-24">
        <div className="mb-10 grid gap-8 md:grid-cols-12 md:items-end md:mb-12">
          <div className="md:col-span-7">
          <Reveal>
            <div className="mb-5 flex items-center gap-4">
              <span className="font-serif text-2xl font-bold" style={{ color: "var(--gold)" }}>04</span>
              <p className="eyebrow">Selected Work</p>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="font-serif text-5xl font-bold leading-[0.95] tracking-tight md:text-7xl" style={{ color: "var(--ink)" }}>
              Work with<br /><span style={{ color: "var(--gold)" }}>a point of view.</span>
            </h2>
          </Reveal>
          </div>
          <Reveal delay={140}>
            <p className="max-w-sm text-sm font-medium leading-[1.8] md:col-span-4 md:col-start-9">
              A selection of software, learning experiences, and celebrations shaped with clarity, care, and a little uncommon sense.
            </p>
          </Reveal>
        </div>

        <Reveal delay={180}>
          <div className="mb-8 flex flex-wrap items-center gap-2 border-y py-3" style={{ borderColor: "var(--line-strong)" }}>
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

      <div
        key={tab}
        className="grid grid-cols-1 gap-4 [grid-auto-flow:dense] sm:grid-cols-2 md:grid-cols-4 md:auto-rows-[240px]"
      >
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

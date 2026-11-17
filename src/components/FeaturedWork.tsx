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
    <section id="work" className="border-b border-line bg-bg">
      <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-6 md:px-10 md:py-24">
        <div className="mb-9 flex flex-wrap items-end justify-between gap-6">
          <div>
            <Reveal>
              <p className="index-chip"><b>02</b> Selected work</p>
            </Reveal>
            <Reveal delay={70}>
              <h2 className="mt-4 max-w-[24ch] font-display text-[clamp(2.4rem,6vw,4.2rem)] text-ink">
                Work with <span className="display-italic">a point of view</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <p className="max-w-sm text-[15px] leading-[1.8] text-ink-muted">
              A selection of software, learning experiences and celebrations — shaped with clarity, care, and a little
              uncommon sense.
            </p>
          </Reveal>
        </div>

        <Reveal delay={140}>
          <div className="mb-8 flex flex-wrap gap-2" role="tablist" aria-label="Filter work by division">
            {TABS.map((t) => {
              const active = tab === t;
              return (
                <button
                  key={t}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setTab(t)}
                  className={`min-h-[44px] rounded-full border px-5 py-2.5 text-[11px] font-extrabold uppercase tracking-[0.16em] transition ${
                    active
                      ? "border-coal bg-coal text-coal-ink"
                      : "border-line-strong bg-surface text-ink hover:border-gold-dark hover:text-gold-dark"
                  }`}
                >
                  {t === "ALL" ? "All work" : t.charAt(0) + t.slice(1).toLowerCase()}
                </button>
              );
            })}
          </div>
        </Reveal>

        <div key={tab} className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.length ? (
            filtered.map((item, i) => <FeaturedItem key={item.id} offering={item} index={i} />)
          ) : (
            <p className="col-span-full py-16 text-center text-sm font-bold uppercase tracking-[0.2em] text-ink-muted">
              More work coming soon.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

import Reveal from "./motion/Reveal";
import Counter from "./motion/Counter";
import type { Stat } from "@/lib/types";

/** Proof band — charcoal, echoing the logo's black, gold numerals. */
export default function StatsSection({ stats }: { stats: Stat[] }) {
  return (
    <section className="bg-coal text-coal-ink">
      <div className="mx-auto max-w-[1400px] px-5 py-14 sm:px-6 md:px-10 md:py-20">
        <Reveal>
          <p className="mb-10 text-center text-[11px] font-extrabold uppercase tracking-[0.28em] text-[#C49A48]">
            By the numbers
          </p>
        </Reveal>
        <div className="grid grid-cols-2 gap-y-10 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.id} delay={i * 90}>
              <div className={`px-4 text-center ${i > 0 ? "lg:border-l lg:border-coal-line" : ""}`}>
                <Counter
                  value={stat.value}
                  className="font-serif text-[clamp(2.6rem,6vw,4.4rem)] font-semibold leading-none text-coal-ink"
                />
                <p className="mx-auto mt-3 max-w-[16ch] text-[10px] font-bold uppercase leading-relaxed tracking-[0.2em] text-coal-muted">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

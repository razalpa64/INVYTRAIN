import Reveal from "./motion/Reveal";
import Counter from "./motion/Counter";
import type { Stat } from "@/lib/types";

export default function StatsSection({ stats }: { stats: Stat[] }) {
  return (
    <section className="relative overflow-hidden border-t border-b" style={{ borderColor: "var(--line)", background: "var(--surface)" }}>
      <div className="relative mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
        <Reveal>
          <p className="eyebrow mb-12 text-center">By the numbers</p>
        </Reveal>

        <div className="grid grid-cols-2 gap-1 md:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.id} delay={i * 100}>
              <div
                className="group relative flex flex-col items-center justify-center p-8 text-center md:p-10"
                style={{
                  borderRight: i < stats.length - 1 ? "1px solid var(--line)" : "none",
                }}
              >
                <Counter
                  value={stat.value}
                  className="relative font-serif font-bold"
                  style={{
                    fontSize: "clamp(3rem, 6.5vw, 5rem)",
                    color: "var(--ink)",
                  }}
                />
                <p
                  className="relative mt-3 text-[10px] font-extrabold uppercase tracking-[0.28em]"
                  style={{ color: "var(--gold)" }}
                >
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

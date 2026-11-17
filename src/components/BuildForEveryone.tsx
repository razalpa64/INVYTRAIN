import Link from "next/link";
import Reveal from "@/components/motion/Reveal";

const AUDIENCES = [
  {
    n: "01",
    who: "Students",
    need: "A final-year or mini project you can actually explain in the viva — code, docs, diagrams and confidence included.",
    href: "/project",
    cta: "Build my project",
    accent: "#9C5B33",
  },
  {
    n: "02",
    who: "Parents & learners",
    need: "A dedicated 1:1 tutor who follows the school syllabus, tracks progress honestly, and makes the child want to show up.",
    href: "/learning",
    cta: "Find a tutor",
    accent: "#2F6B5C",
  },
  {
    n: "03",
    who: "Couples & hosts",
    need: "A wedding or event website guests love opening — invitation, schedule, maps, gallery and RSVPs handled in one link.",
    href: "/event",
    cta: "Create my event site",
    accent: "#A97F2F",
  },
];

/** "Build for everyone" — audiences first, like the reference does it,
 * but written for Invytra's three real customer types. */
export default function BuildForEveryone() {
  return (
    <section className="border-b border-line bg-bg-2">
      <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-6 md:px-10 md:py-24">
        <div className="mb-10 text-center md:mb-14">
          <Reveal>
            <p className="index-chip justify-center"><b>✦</b> For every builder</p>
          </Reveal>
          <Reveal delay={70}>
            <h2 className="mt-4 font-display text-[clamp(2.4rem,6vw,4.2rem)] uppercase leading-[0.98] text-ink">
              Built for <span className="display-italic normal-case">everyone</span>
            </h2>
          </Reveal>
          <Reveal delay={130}>
            <p className="mx-auto mt-4 max-w-lg text-[15px] leading-[1.8] text-ink-muted">
              Whoever you are in this story, there is a division of Invytra shaped around exactly your problem.
            </p>
          </Reveal>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {AUDIENCES.map((a, i) => (
            <Reveal key={a.n} delay={i * 80} className="h-full">
              <Link
                href={a.href}
                className="interactive-card group flex h-full flex-col rounded-[1.4rem] border border-line bg-surface p-6 md:p-8"
              >
                <span className="font-display text-lg" style={{ color: a.accent }}>{a.n}</span>
                <h3 className="mt-4 font-display text-[1.7rem] uppercase leading-[1.02] text-ink">{a.who}</h3>
                <p className="mt-3 flex-1 text-sm leading-[1.8] text-ink-muted">{a.need}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.16em]" style={{ color: a.accent }}>
                  {a.cta}
                  <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden>→</span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import Reveal from "@/components/motion/Reveal";

const WORDS = [
  { word: "Learn", sub: "Invytra Learning", href: "/learning", note: "One student. One tutor. Real progress." },
  { word: "Create", sub: "Invytra Project", href: "/project", note: "Software built — and understood." },
  { word: "Celebrate", sub: "Invytra Event", href: "/event", note: "Invitations guests actually enjoy." },
];

/**
 * Manifesto strip — the brand philosophy as three tappable editorial
 * rows. (Replaces the previous 350vh scroll-jacked chapter animation,
 * which trapped mobile users in a long empty scroll.)
 */
export default function LearnCreateCelebrate() {
  return (
    <section className="border-b border-line bg-bg-2" aria-label="Learn, Create, Celebrate">
      <div className="mx-auto max-w-[1400px] px-5 py-14 sm:px-6 md:px-10 md:py-20">
        <Reveal>
          <p className="index-chip mb-8"><b>✦</b> Our philosophy</p>
        </Reveal>
        <div>
          {WORDS.map((item, i) => (
            <Reveal key={item.word} delay={i * 70}>
              <Link
                href={item.href}
                className="group flex flex-wrap items-baseline gap-x-6 gap-y-1 border-t border-line-strong py-5 last:border-b md:py-7"
              >
                <span className="font-serif text-sm font-semibold text-gold-dark">0{i + 1}</span>
                <span className="font-display text-[clamp(2.6rem,8vw,5.2rem)] leading-none text-ink transition-colors group-hover:text-gold-dark">
                  {item.word}
                  <span className="display-italic">.</span>
                </span>
                <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-ink-muted">{item.sub}</span>
                <span className="w-full text-sm text-ink-muted sm:w-auto sm:flex-1 sm:text-right">{item.note}</span>
                <span className="hidden text-xl text-gold-dark transition-transform group-hover:translate-x-1.5 sm:block" aria-hidden>→</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

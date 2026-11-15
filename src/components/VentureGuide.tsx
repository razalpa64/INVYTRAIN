import Reveal from "@/components/motion/Reveal";
import FaqList from "@/components/FaqList";
import { VENTURE_GUIDES } from "@/content/guides";
import type { VentureSlug } from "@/lib/types";

/**
 * The substantive, informational part of each venture page: what the
 * service actually is, what is included, how it works, what topics it
 * covers, and answers to the questions people genuinely ask us. Content
 * lives in src/content/guides.ts.
 */
export default function VentureGuide({ slug }: { slug: VentureSlug }) {
  const guide = VENTURE_GUIDES[slug];

  return (
    <>
      {/* What this service actually is */}
      <section className="mx-auto max-w-[1400px] px-6 pb-4 md:px-10">
        <div className="grid gap-8 md:grid-cols-2 md:gap-14">
          {guide.intro.map((paragraph, i) => (
            <Reveal key={i} delay={i * 80}>
              <p className="text-base leading-[1.9] text-ink-muted">{paragraph}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* What is included */}
      <section className="mx-auto max-w-[1400px] px-6 py-16 md:px-10">
        <Reveal>
          <p className="eyebrow mb-4">The details</p>
          <h2 className="mb-12 font-serif text-4xl leading-tight text-ink md:text-5xl">{guide.includesTitle}</h2>
        </Reveal>
        <div className="grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {guide.includes.map((item, i) => (
            <Reveal key={item.title} delay={i * 60}>
              <div className="border-t border-line pt-5">
                <h3 className="font-serif text-xl text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-[1.8] text-ink-muted">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="border-y border-line bg-bg-2">
        <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10">
          <Reveal>
            <p className="eyebrow mb-4">Process</p>
            <h2 className="mb-12 font-serif text-4xl leading-tight text-ink md:text-5xl">{guide.processTitle}</h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {guide.process.map((step, i) => (
              <Reveal key={step.title} delay={i * 80}>
                <p className="font-serif text-5xl text-gold/60">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-3 font-serif text-xl text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-[1.8] text-ink-muted">{step.body}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <h3 className="mb-5 mt-16 font-serif text-2xl text-ink">{guide.topicsTitle}</h3>
          </Reveal>
          <div className="flex flex-wrap gap-2.5">
            {guide.topics.map((topic) => (
              <span key={topic} className="border border-line bg-bg px-3.5 py-1.5 text-xs font-medium tracking-wide text-ink-muted">
                {topic}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Frequently asked questions */}
      <section className="mx-auto max-w-[1400px] px-6 py-16 md:px-10">
        <Reveal>
          <p className="eyebrow mb-4 text-center">Good questions</p>
          <h2 className="mb-10 text-center font-serif text-4xl leading-tight text-ink md:text-5xl">
            Frequently asked questions
          </h2>
        </Reveal>
        <FaqList faqs={guide.faqs} />
      </section>
    </>
  );
}

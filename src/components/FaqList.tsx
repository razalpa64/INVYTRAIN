import Reveal from "@/components/motion/Reveal";
import type { GuideFaq } from "@/content/guides";

/**
 * Accessible FAQ list built on native <details>/<summary> — works with
 * JavaScript disabled and is fully readable by search/AdSense crawlers
 * in the server-rendered HTML.
 */
export default function FaqList({ faqs }: { faqs: GuideFaq[] }) {
  return (
    <div className="mx-auto max-w-3xl">
      {faqs.map((faq, i) => (
        <Reveal key={faq.q} delay={i * 40}>
          <details className="group border-b border-line py-5 [&>summary]:list-none">
            <summary className="flex cursor-pointer items-start justify-between gap-4 font-serif text-xl leading-snug text-ink marker:hidden">
              <span>{faq.q}</span>
              <span aria-hidden className="mt-1 text-gold transition-transform duration-300 group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-3 max-w-2xl text-sm leading-[1.8] text-ink-muted">{faq.a}</p>
          </details>
        </Reveal>
      ))}
    </div>
  );
}

import Reveal from "./motion/Reveal";
import type { Testimonial } from "@/lib/types";

/**
 * Reviews as a calm, readable grid — readable on a phone in one glance,
 * and each review appears exactly once in the HTML for crawlers.
 * (Replaces the dual-direction marquee, which duplicated every review
 * six times and was unreadable on mobile.)
 */
export default function TestimonialsSection({ testimonials }: { testimonials: Testimonial[] }) {
  if (!testimonials.length) return null;
  const shown = testimonials.slice(0, 6);

  return (
    <section id="reviews" className="border-b border-line bg-bg-2">
      <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-6 md:px-10 md:py-24">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6 md:mb-12">
          <div>
            <Reveal>
              <p className="index-chip"><b>04</b> Client reviews</p>
            </Reveal>
            <Reveal delay={70}>
              <h2 className="mt-4 font-display text-[clamp(2.4rem,6vw,4.2rem)] text-ink">
                Kind words. <span className="display-italic">Real outcomes.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <div className="flex items-center gap-3">
              <span className="text-xl tracking-[0.2em] text-gold-dark" aria-label="Rated 5 out of 5 stars">★★★★★</span>
              <span className="text-sm font-semibold text-ink-muted">from students, parents & couples</span>
            </div>
          </Reveal>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((review, i) => (
            <Reveal key={review.id} delay={i * 70} className="h-full">
              <figure className="flex h-full flex-col rounded-3xl border border-line bg-surface p-6 md:p-7">
                <div className="text-sm tracking-[0.18em] text-gold-dark" aria-hidden>★★★★★</div>
                <blockquote className="mt-4 font-serif text-[1.35rem] font-medium leading-[1.35] text-ink">
                  &ldquo;{review.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 border-t border-line pt-5">
                  <p className="text-sm font-bold text-ink">{review.name}</p>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-gold-dark">{review.category}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

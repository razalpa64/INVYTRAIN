import Reveal from "./motion/Reveal";
import type { Testimonial } from "@/lib/types";

/** Reviews — Utility Agency minimalist clean spacing */
export default function TestimonialsSection({ testimonials }: { testimonials: Testimonial[] }) {
  if (!testimonials.length) return null;
  const shown = testimonials.slice(0, 6);

  return (
    <section id="reviews" className="bg-coal text-coal-ink">
      <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-6 md:px-10 md:py-24">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-8 md:mb-14">
          <div>
            <Reveal>
              <p className="index-chip"><b style={{ color: "var(--gold-light)" }}>04</b> Client reviews</p>
            </Reveal>
            <Reveal delay={70}>
              <h2 className="mt-4 font-display text-[clamp(2.3rem,6vw,4rem)] uppercase leading-[0.98]">
                Kind words. <span className="display-italic normal-case" style={{ color: "var(--gold-light)" }}>Real outcomes.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <div className="flex items-center gap-3">
              <span className="eyebrow tracking-[0.2em] text-gold-light" aria-label="Rated 5 out of 5 stars">★★★★★</span>
              <span className="eyebrow font-medium text-coal-muted">students · parents · couples</span>
            </div>
          </Reveal>
        </div>

        {/* Utility Agency Minimalist Grid — premium spacing */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((review, i) => (
            <Reveal key={review.id} delay={i * 70} className="h-full">
              <figure className="flex h-full flex-col rounded-[1rem] border border-line-strong bg-surface-strong/40 p-6 transition hover:border-gold-light/50 md:p-7">
                <div className="eyebrow tracking-[0.18em] text-gold-light" aria-hidden>★★★★★</div>
                <blockquote className="mt-4 font-display text-[1.45rem] font-medium leading-[1.35] text-ink">
                  &ldquo;{review.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 border-t border-line-strong pt-5">
                  <p className="eyebrow font-medium text-coal-ink">{review.name}</p>
                  <p className="mt-1 eyebrow text-ink-muted">
                    {review.category}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

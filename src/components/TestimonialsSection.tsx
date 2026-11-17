import Reveal from "./motion/Reveal";
import type { Testimonial } from "@/lib/types";

/** Reviews on charcoal — the page's dark exhale before the finale. */
export default function TestimonialsSection({ testimonials }: { testimonials: Testimonial[] }) {
  if (!testimonials.length) return null;
  const shown = testimonials.slice(0, 6);

  return (
    <section id="reviews" className="bg-coal text-coal-ink">
      <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-6 md:px-10 md:py-24">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6 md:mb-12">
          <div>
            <Reveal>
              <p className="index-chip" style={{ color: "#C49A48" }}><b style={{ color: "#C49A48" }}>04</b> Client reviews</p>
            </Reveal>
            <Reveal delay={70}>
              <h2 className="mt-4 font-display text-[clamp(2.3rem,6vw,4rem)] uppercase leading-[0.98]">
                Kind words. <span className="display-italic normal-case" style={{ color: "#E9C979" }}>Real outcomes.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <div className="flex items-center gap-3">
              <span className="text-xl tracking-[0.2em] text-[#C49A48]" aria-label="Rated 5 out of 5 stars">★★★★★</span>
              <span className="text-sm font-semibold text-coal-muted">students · parents · couples</span>
            </div>
          </Reveal>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((review, i) => (
            <Reveal key={review.id} delay={i * 70} className="h-full">
              <figure className="flex h-full flex-col rounded-[1.4rem] border border-white/12 bg-white/[0.045] p-6 transition hover:border-[#C49A48]/50 md:p-7">
                <div className="text-sm tracking-[0.18em] text-[#C49A48]" aria-hidden>★★★★★</div>
                <blockquote className="mt-4 font-accent text-[1.45rem] font-medium italic leading-[1.35] text-coal-ink">
                  &ldquo;{review.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 border-t border-white/12 pt-5">
                  <p className="text-sm font-bold text-coal-ink">{review.name}</p>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#C49A48]">{review.category}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

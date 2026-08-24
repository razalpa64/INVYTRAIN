import Reveal from "./motion/Reveal";
import type { Testimonial } from "@/lib/types";
import ReviewForm from "./ReviewForm";

export default function TestimonialsSection({ testimonials }: { testimonials: Testimonial[] }) {
  if (!testimonials.length) return null;

  // Duplicate for seamless marquee
  const all = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section
      id="reviews"
      className="relative overflow-hidden"
      style={{
        borderTop: "1px solid var(--line)",
        background: "var(--surface)",
      }}
    >
      {/* Ambient orb */}
      <div
        className="orb orb-gold pointer-events-none absolute"
        style={{ width: 700, height: 400, top: "30%", left: "50%", transform: "translateX(-50%)", opacity: 0.07 }}
      />

      {/* Top gradient border */}
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, var(--gold), var(--purple), transparent)" }}
      />

      <div className="relative mx-auto max-w-[1400px] px-6 pb-0 pt-24 md:px-10 md:pt-32">
        {/* Header */}
        <div className="mb-16 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <Reveal>
              <p className="eyebrow mb-5">Client reviews</p>
            </Reveal>
            <Reveal delay={80}>
              <h2
                className="font-serif leading-[0.9]"
                style={{ fontSize: "clamp(3rem, 7vw, 6rem)", color: "var(--ink)" }}
              >
                Kind words.<br />
                <span style={{ color: "var(--gold)" }}>Real outcomes.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={150}>
            <div
              className="rounded-2xl p-6 text-right"
              style={{
                background: "rgba(212,168,83,0.06)",
                border: "1px solid rgba(212,168,83,0.2)",
              }}
            >
              <p className="text-2xl tracking-[0.16em]" style={{ color: "var(--gold)" }}>★★★★★</p>
              <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.2em]" style={{ color: "var(--ink-muted)" }}>
                Built on trust
              </p>
              <p className="mt-1 font-serif text-3xl" style={{ color: "var(--gold)" }}>
                {testimonials.length}+
              </p>
              <p className="text-[9px] uppercase tracking-[0.2em]" style={{ color: "var(--ink-muted)" }}>
                reviews
              </p>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Marquee testimonials — full width overflow */}
      <div className="relative pb-16 pt-2">
        {/* Row 1 */}
        <div className="overflow-hidden py-3">
          <div className="marquee-track gap-5 py-1">
            {all.map((review, i) => (
              <figure
                key={`r1-${review.id}-${i}`}
                className="group flex w-[340px] flex-shrink-0 flex-col rounded-2xl p-7"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid var(--line)",
                  backdropFilter: "blur(10px)",
                  transition: "border-color 0.3s ease, transform 0.3s ease",
                }}
              >
                <div className="text-sm tracking-[0.12em]" style={{ color: "var(--gold)" }}>★★★★★</div>
                <blockquote
                  className="mt-5 font-serif text-xl leading-[1.3]"
                  style={{ color: "var(--ink)" }}
                >
                  &ldquo;{review.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-auto border-t pt-5" style={{ borderColor: "var(--line)" }}>
                  <p className="text-sm font-bold" style={{ color: "var(--ink)" }}>{review.name}</p>
                  <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.2em]" style={{ color: "var(--gold)" }}>
                    {review.category}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        {/* Row 2 — reversed direction */}
        {testimonials.length > 2 && (
          <div className="overflow-hidden py-3">
            <div className="marquee-track-rev gap-5 py-1">
              {[...all].reverse().map((review, i) => (
                <figure
                  key={`r2-${review.id}-${i}`}
                  className="group flex w-[340px] flex-shrink-0 flex-col rounded-2xl p-7"
                  style={{
                    background: "rgba(123,94,167,0.04)",
                    border: "1px solid rgba(123,94,167,0.12)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <div className="text-sm tracking-[0.12em]" style={{ color: "var(--purple-light)" }}>★★★★★</div>
                  <blockquote
                    className="mt-5 font-serif text-xl leading-[1.3]"
                    style={{ color: "var(--ink)" }}
                  >
                    &ldquo;{review.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-auto border-t pt-5" style={{ borderColor: "var(--line)" }}>
                    <p className="text-sm font-bold" style={{ color: "var(--ink)" }}>{review.name}</p>
                    <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.2em]" style={{ color: "var(--purple-light)" }}>
                      {review.category}
                    </p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Review form */}
      <div className="mx-auto max-w-[1400px] px-6 pb-24 md:px-10">
        <div
          className="rounded-2xl p-8 md:p-12"
          style={{
            background: "rgba(255,255,255,0.02)",
            border: "1px solid var(--line-strong)",
          }}
        >
          <ReviewForm />
        </div>
      </div>
    </section>
  );
}

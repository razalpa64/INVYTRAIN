const ITEMS = [
  "Final-year projects",
  "1:1 online tutoring",
  "Wedding websites",
  "Mini projects",
  "STEM & coding mentorship",
  "RSVP & guest hubs",
  "Exam crash courses",
  "Save-the-date reels",
  "Project documentation & viva prep",
];

/**
 * Service ticker — Utility Agency minimalist ribbon
 * Clean typography, premium spacing, no crowding.
 */
export default function LearnCreateCelebrate() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <section className="overflow-hidden bg-surface-strong py-3.5 border-b border-line-strong" aria-label="Services at a glance">
      <div className="marquee-track items-center gap-0">
        {row.map((item, i) => (
          <span
            key={`${item}-${i}`}
            aria-hidden={i >= ITEMS.length || undefined}
            className="flex shrink-0 items-center gap-6 pr-6 eyebrow text-ink"
          >
            {item}
            <span aria-hidden>✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}

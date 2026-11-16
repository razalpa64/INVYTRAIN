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
 * Service ticker — a single charcoal ribbon scrolling what Invytra
 * actually does. Pure CSS marquee; duplicated list is aria-hidden.
 */
export default function LearnCreateCelebrate() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <section className="overflow-hidden bg-coal py-4" aria-label="Services at a glance">
      <div className="marquee-track items-center gap-0">
        {row.map((item, i) => (
          <span
            key={`${item}-${i}`}
            aria-hidden={i >= ITEMS.length || undefined}
            className="flex shrink-0 items-center gap-6 pr-6 text-[12px] font-extrabold uppercase tracking-[0.22em] text-coal-ink"
          >
            {item}
            <span className="text-[#C49A48]" aria-hidden>✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}

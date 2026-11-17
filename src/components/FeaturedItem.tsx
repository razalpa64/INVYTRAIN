import Image from "next/image";
import Link from "next/link";
import Reveal from "./motion/Reveal";
import type { Offering } from "@/lib/types";

const VENTURE_LABEL: Record<string, string> = {
  project: "Invytra Project",
  learning: "Invytra Learning",
  event: "Invytra Event",
};

/**
 * Work card — photo on top (fixed aspect), text below in normal flow.
 * The previous full-overlay design clipped titles whenever the grid
 * row was shorter than the copy; this structure cannot clip.
 */
export default function FeaturedItem({ offering, index }: { offering: Offering; index: number }) {
  return (
    <Reveal className="h-full" delay={index * 70}>
      <Link
        href={offering.link ?? `/${offering.venture}`}
        className="interactive-card group flex h-full flex-col overflow-hidden rounded-[1.4rem] border border-line bg-surface"
      >
        <div className="relative aspect-[16/10] shrink-0 overflow-hidden bg-bg-2">
          {offering.image ? (
            <Image
              src={offering.image}
              alt={offering.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="img-warm object-cover transition duration-700 group-hover:scale-[1.05]"
            />
          ) : (
            <div className="flex h-full items-center justify-center font-display text-2xl uppercase text-ink-faint">
              {offering.venture}
            </div>
          )}
          {offering.badge ? (
            <span className="absolute left-4 top-4 rounded-full bg-black/55 px-3 py-1 text-[9px] font-extrabold uppercase tracking-[0.18em] text-white backdrop-blur">
              {offering.badge}
            </span>
          ) : null}
          {offering.price ? (
            <span className="absolute bottom-4 right-4 rounded-full bg-[#C49A48] px-3.5 py-1.5 font-display text-sm text-[#16140F]">
              {offering.price}
            </span>
          ) : null}
        </div>
        <div className="flex flex-1 flex-col p-5 md:p-6">
          <p className="text-[9px] font-extrabold uppercase tracking-[0.22em] text-gold-dark">
            {VENTURE_LABEL[offering.venture] ?? offering.venture}
            {offering.category ? <span className="text-ink-faint"> · {offering.category}</span> : null}
          </p>
          <h3 className="mt-2.5 font-display text-[1.35rem] leading-[1.12] text-ink md:text-[1.5rem]">
            {offering.title}
          </h3>
          {offering.description ? (
            <p className="mt-2.5 line-clamp-2 text-sm leading-[1.7] text-ink-muted">{offering.description}</p>
          ) : null}
          <span className="mt-auto inline-flex items-center gap-2 pt-5 text-[11px] font-extrabold uppercase tracking-[0.16em] text-ink transition-colors group-hover:text-gold-dark">
            {offering.cta ?? "Explore"}
            <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden>→</span>
          </span>
        </div>
      </Link>
    </Reveal>
  );
}

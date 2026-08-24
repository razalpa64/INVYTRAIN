import Image from "next/image";
import Link from "next/link";
import Badge from "./Badge";
import PriceTag from "./PriceTag";
import type { Offering } from "@/lib/types";

export default function OfferingCard({ offering }: { offering: Offering }) {
  return (
    <article className="group flex flex-col overflow-hidden border border-line bg-surface/40 transition-colors hover:border-gold/60">
      <div className="relative aspect-[4/3] overflow-hidden bg-surface-strong">
        {offering.image ? (
          <Image
            src={offering.image}
            alt={offering.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center font-serif text-3xl text-ink-muted">
            INVYTRA
          </div>
        )}
        {offering.badge ? <div className="absolute left-4 top-4"><Badge label={offering.badge} /></div> : null}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        {offering.category ? (
          <p className="text-[11px] uppercase tracking-[0.2em] text-gold">{offering.category}</p>
        ) : null}
        <h3 className="font-serif text-2xl leading-tight text-ink">{offering.title}</h3>
        {offering.description ? <p className="text-sm leading-relaxed text-ink-muted">{offering.description}</p> : null}
        <div className="mt-auto flex items-center justify-between gap-3 pt-4">
          <PriceTag offering={offering} />
          <Link
            href={offering.link ?? "#"}
            data-cursor="ENTER"
            className="cta-link text-xs font-semibold uppercase tracking-[0.16em] text-ink"
          >
            {offering.cta ?? "View"}
            <span className="arrow">→</span>
            <span className="underline-track" />
            <span className="underline-fill" />
          </Link>
        </div>
      </div>
    </article>
  );
}

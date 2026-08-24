import type { Offering } from "@/lib/types";

export default function PriceTag({ offering, className = "" }: { offering: Offering; className?: string }) {
  if (!offering.price) {
    return <span className={`text-xs font-bold uppercase tracking-[0.18em] text-[#f5c842] ${className}`}>Contact for details</span>;
  }
  return (
    <span className={`flex items-baseline gap-2 ${className}`}>
      <span className="font-serif text-xl font-bold text-white">{offering.price}</span>
      {offering.oldPrice ? <span className="text-xs text-white/50 line-through">{offering.oldPrice}</span> : null}
      {offering.discount ? <span className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#f5c842]">{offering.discount}</span> : null}
    </span>
  );
}

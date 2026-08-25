import Image from "next/image";
import Link from "next/link";
import Reveal from "./motion/Reveal";
import type { Offering } from "@/lib/types";

const SIZE_CLASSES: Record<string, string> = {
  large: "h-[24rem] sm:col-span-2 sm:h-[22rem] md:col-span-2 md:row-span-2 md:h-auto",
  vertical: "h-[24rem] sm:h-[22rem] md:row-span-2 md:h-auto",
  wide: "h-[22rem] sm:col-span-2 sm:h-[18rem] md:col-span-2 md:h-auto",
  small: "h-[22rem] sm:h-[18rem] md:h-auto",
};

export default function FeaturedItem({ offering, index }: { offering: Offering; index: number }) {
  const sizeClass = SIZE_CLASSES[offering.gallerySize ?? "small"] ?? "min-h-[220px]";

  return (
    <Reveal className={`group relative overflow-hidden rounded-[22px] ${sizeClass}`} delay={index * 90}>
      <Link
        href={offering.link ?? "#"}
        className="interactive-card relative block h-full w-full overflow-hidden rounded-[22px]"
        style={{
          border: "1px solid var(--line-strong)",
          background: "var(--surface)",
          boxShadow: "0 10px 30px rgba(0,0,0,0.03)",
        }}
      >
        {offering.image ? (
          <Image
            src={offering.image}
            alt={offering.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
        ) : (
          <div
            className="absolute inset-0 flex items-center justify-center p-8"
            style={{ background: "var(--surface-strong)" }}
          >
            <span className="font-serif text-5xl font-bold opacity-20" style={{ color: "var(--ink)" }}>
              {offering.venture.toUpperCase()}
            </span>
          </div>
        )}

        {/* Gradient overlay */}
        <div
          className="absolute inset-0 transition-opacity duration-400"
          style={{
            background: "linear-gradient(to top, rgba(24,23,22,0.78) 0%, rgba(24,23,22,0.16) 58%, transparent 100%)",
          }}
        />

        <div className="absolute inset-x-0 bottom-0 flex flex-col justify-end gap-2 p-6 md:p-8">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/65">
            {offering.venture === "project" ? "Invytra Project" : offering.venture === "learning" ? "Invytra Learning" : "Invytra Event"}
          </p>
          <p
            className="text-[9px] font-extrabold uppercase tracking-[0.25em] text-[#E4BA65]"
          >
            {offering.category ?? offering.venture}
          </p>
          <h3 className="font-serif text-[clamp(1.45rem,2.6vw,2.25rem)] font-bold leading-[1.05] text-white">
            {offering.title}
          </h3>
          <div className="mt-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#E4BA65]">
            <span>{offering.cta ?? "Explore"}</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </div>
        </div>
      </Link>
    </Reveal>
  );
}

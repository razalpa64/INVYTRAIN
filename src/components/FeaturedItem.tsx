import Image from "next/image";
import Link from "next/link";
import Reveal from "./motion/Reveal";
import type { Offering } from "@/lib/types";

const SIZE_CLASSES: Record<string, string> = {
  large: "md:col-span-2 md:row-span-2 min-h-[360px]",
  vertical: "md:row-span-2 min-h-[360px]",
  wide: "md:col-span-2 min-h-[220px]",
  small: "min-h-[220px]",
};

export default function FeaturedItem({ offering, index }: { offering: Offering; index: number }) {
  const sizeClass = SIZE_CLASSES[offering.gallerySize ?? "small"] ?? "min-h-[220px]";

  return (
    <Reveal className={`group relative overflow-hidden rounded-2xl ${sizeClass}`} delay={index * 90}>
      <Link
        href={offering.link ?? "#"}
        className="block h-full w-full overflow-hidden rounded-2xl"
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
            className="object-cover transition-transform duration-[1000ms] cubic-bezier(0.16,1,0.3,1) group-hover:scale-[1.05]"
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
            background: "linear-gradient(to top, rgba(24,23,22,0.85) 0%, rgba(24,23,22,0.2) 50%, transparent 100%)",
          }}
        />

        <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 p-6 md:p-8">
          <p
            className="text-[9px] font-extrabold uppercase tracking-[0.25em] text-[#E4BA65]"
          >
            {offering.category ?? offering.venture}
          </p>
          <h3 className="font-serif text-2xl font-bold leading-tight text-white md:text-3xl">
            {offering.title}
          </h3>
          <div className="mt-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#E4BA65]">
            <span>Explore</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </div>
        </div>
      </Link>
    </Reveal>
  );
}

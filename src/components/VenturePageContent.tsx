import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/chrome/Nav";
import Footer from "@/components/Footer";
import OfferingCard from "@/components/OfferingCard";
import VentureGuide from "@/components/VentureGuide";
import AdUnit from "@/components/AdUnit";
import MobileCtaBar from "@/components/MobileCtaBar";
import Reveal from "@/components/motion/Reveal";
import { getOfferings, getSiteConfig, getVentureBySlug } from "@/lib/data";
import { ventureWhatsappLink } from "@/lib/whatsapp";
import type { VentureSlug } from "@/lib/types";

const ACCENTS: Record<VentureSlug, string> = {
  project: "#9C5B33",
  learning: "#2F6B5C",
  event: "#A97F2F",
};

export default async function VenturePageContent({ slug }: { slug: VentureSlug }) {
  const [config, venture, offerings] = await Promise.all([
    getSiteConfig(),
    getVentureBySlug(slug),
    getOfferings(slug),
  ]);

  if (!venture) return null;
  const accent = ACCENTS[slug];
  const whatsapp = ventureWhatsappLink(config, slug);

  return (
    <>
      <Nav brandName={config.brand.name} />
      <main>
        {/* Hero */}
        <section className="paper border-b border-line">
          <div className="mx-auto max-w-[1400px] px-5 pb-14 pt-28 sm:px-6 md:px-10 md:pb-20 md:pt-36">
            <Reveal>
              <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-ink-muted">
                <Link href="/" className="transition-colors hover:text-gold-dark">Invytra</Link>
                <span aria-hidden>/</span>
                <span style={{ color: accent }}>{venture.name.replace("INVYTRA ", "")}</span>
              </nav>
            </Reveal>
            <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16">
              <div>
                <Reveal>
                  <p className="index-chip">
                    <b>{venture.number}</b> {venture.label}
                  </p>
                </Reveal>
                <Reveal delay={70}>
                  <h1 className="mt-5 font-display text-[clamp(2.7rem,8.5vw,5.4rem)] text-ink">
                    {venture.headline.map((line, i) => (
                      <span key={line} className="block">
                        {i === venture.headline.length - 1 ? <span className="display-italic">{line}</span> : line}
                      </span>
                    ))}
                  </h1>
                </Reveal>
                <Reveal delay={140}>
                  <p className="mt-6 max-w-xl text-base leading-[1.85] text-ink-muted md:text-lg">{venture.description}</p>
                </Reveal>
                <Reveal delay={200}>
                  <ul className="mt-7 flex flex-wrap gap-2">
                    {venture.features.slice(0, 4).map((feature) => (
                      <li key={feature} className="rounded-full border border-line-strong bg-surface px-3.5 py-1.5 text-xs font-bold text-ink-soft">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Reveal>
                <Reveal delay={260}>
                  <div className="mt-9 flex flex-col gap-3 min-[480px]:flex-row min-[480px]:flex-wrap">
                    <a href={whatsapp} target="_blank" rel="noreferrer" className="btn-shimmer px-8 py-4 text-[11px]">
                      Chat on WhatsApp →
                    </a>
                    <a href="#packages" className="btn-outline-gold px-8 py-4 text-[11px]">
                      See packages
                    </a>
                  </div>
                </Reveal>
              </div>
              <Reveal variant="image" delay={140}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.6rem] bg-bg-2 lg:aspect-[4/3.4]">
                  <Image
                    src={`/images/${slug}-new.jpg`}
                    alt={venture.name}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="img-warm object-cover"
                  />
                  <span className="absolute inset-x-0 top-0 h-1 bg-[#C49A48] opacity-80" />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Packages / offerings */}
        <section id="packages" className="mx-auto max-w-[1400px] scroll-mt-24 px-5 py-16 sm:px-6 md:px-10 md:py-20">
          <Reveal>
            <p className="index-chip"><b>—</b> Packages & work</p>
            <h2 className="mb-10 mt-4 font-display text-[clamp(2.2rem,5.5vw,3.8rem)] text-ink">
              Start with a <span className="display-italic">proven package</span>
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {offerings.length ? (
              offerings.map((offering, i) => (
                <Reveal key={offering.id} delay={i * 70} className="h-full">
                  <OfferingCard offering={offering} />
                </Reveal>
              ))
            ) : (
              <p className="col-span-full py-10 text-center text-sm uppercase tracking-[0.18em] text-ink-muted">
                New offerings coming soon. Reach out for details.
              </p>
            )}
          </div>
        </section>

        <VentureGuide slug={slug} />

        <AdUnit />

        {/* Closing CTA */}
        <section className="border-t border-line bg-bg-2">
          <div className="mx-auto max-w-[1400px] px-5 py-16 text-center sm:px-6 md:px-10 md:py-20">
            <Reveal>
              <p className="eyebrow">Not sure where to start?</p>
            </Reveal>
            <Reveal delay={70}>
              <h2 className="mx-auto mt-4 max-w-2xl font-display text-[clamp(2.2rem,6vw,4rem)] text-ink">
                Tell us what you need — <span className="display-italic">we&rsquo;ll reply honestly.</span>
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <div className="mt-8 flex flex-col justify-center gap-3 min-[480px]:flex-row">
                <a href={whatsapp} target="_blank" rel="noreferrer" className="btn-shimmer px-8 py-4 text-[11px]">
                  Chat on WhatsApp →
                </a>
                <Link href="/#contact" className="btn-outline-gold px-8 py-4 text-[11px]">
                  Contact form
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer config={config} />
      <MobileCtaBar whatsappHref={whatsapp} label={`Chat — ${venture.name.replace("INVYTRA ", "")}`} />
    </>
  );
}

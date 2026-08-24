import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/chrome/Nav";
import Footer from "@/components/Footer";
import OfferingCard from "@/components/OfferingCard";
import Reveal from "@/components/motion/Reveal";
import { getOfferings, getSiteConfig, getVentureBySlug } from "@/lib/data";
import { ventureWhatsappLink } from "@/lib/whatsapp";
import type { VentureSlug } from "@/lib/types";

export default async function VenturePageContent({ slug }: { slug: VentureSlug }) {
  const [config, venture, offerings] = await Promise.all([
    getSiteConfig(),
    getVentureBySlug(slug),
    getOfferings(slug),
  ]);

  if (!venture) return null;

  return (
    <>
      <Nav brandName={config.brand.name} />
      <main className="has-custom-cursor">
        <section className="relative flex min-h-[80svh] items-center overflow-hidden pt-32">
          <div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 items-center gap-12 px-6 md:grid-cols-2 md:px-10">
            <div>
              <Reveal>
                <span className="font-serif text-6xl text-gold/70">{venture.number}</span>
              </Reveal>
              <Reveal delay={80}>
                <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-gold">{venture.label}</p>
              </Reveal>
              <Reveal delay={140}>
                <h1 className="mt-4 font-serif text-5xl leading-[1.02] text-ink md:text-6xl">
                  {venture.headline.map((line) => (
                    <span className="block" key={line}>
                      {line}
                    </span>
                  ))}
                </h1>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-6 max-w-md text-base leading-relaxed text-ink-muted">{venture.description}</p>
              </Reveal>
              <Reveal delay={260}>
                <a
                  href={ventureWhatsappLink(config, slug)}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="CHAT"
                  className="cta-link mt-10 inline-flex text-xs font-semibold uppercase tracking-[0.22em] text-ink"
                >
                  Chat on WhatsApp
                  <span className="arrow">→</span>
                  <span className="underline-track" />
                  <span className="underline-fill" />
                </a>
              </Reveal>
            </div>
            <Reveal variant="image" className="relative aspect-[4/5] w-full overflow-hidden md:aspect-[5/4]">
              {venture.heroImage ? (
                <Image src={venture.heroImage} alt={venture.name} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
              ) : null}
            </Reveal>
          </div>
        </section>

        <section className="mx-auto max-w-[1400px] px-6 py-20 md:px-10">
          <Reveal>
            <div className="gold-draw is-visible mb-14" />
          </Reveal>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {offerings.length ? (
              offerings.map((offering, i) => (
                <Reveal key={offering.id} delay={i * 80}>
                  <OfferingCard offering={offering} />
                </Reveal>
              ))
            ) : (
              <p className="col-span-full text-center text-sm uppercase tracking-[0.2em] text-ink-muted">
                New offerings coming soon. Reach out for details.
              </p>
            )}
          </div>
        </section>

        <section className="border-t border-line py-20 text-center">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em] text-gold">Not sure where to start?</p>
          </Reveal>
          <Reveal delay={80}>
            <Link href="/#contact" className="cta-link mt-4 inline-flex font-serif text-2xl text-ink">
              Tell us what you need
              <span className="arrow">→</span>
              <span className="underline-track" />
              <span className="underline-fill" />
            </Link>
          </Reveal>
        </section>
      </main>
      <Footer config={config} />
    </>
  );
}

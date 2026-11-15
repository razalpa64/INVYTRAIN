import type { ReactNode } from "react";
import Nav from "@/components/chrome/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/motion/Reveal";
import { getSiteConfig } from "@/lib/data";

/**
 * Shared shell for standalone informational pages (About, Privacy,
 * Terms): site nav, a simple editorial header, readable body column,
 * and the standard footer.
 */
export default async function InfoPage({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  children: ReactNode;
}) {
  const config = await getSiteConfig();

  return (
    <>
      <Nav brandName={config.brand.name} />
      <main className="has-custom-cursor">
        <section className="mx-auto max-w-[1400px] px-6 pt-36 md:px-10">
          <Reveal>
            <p className="eyebrow mb-5">{eyebrow}</p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="max-w-3xl font-serif text-5xl leading-[1.05] text-ink md:text-6xl">{title}</h1>
          </Reveal>
          {intro ? (
            <Reveal delay={140}>
              <p className="mt-6 max-w-2xl text-base leading-[1.9] text-ink-muted">{intro}</p>
            </Reveal>
          ) : null}
          <div className="gold-draw is-visible mb-4 mt-12" />
        </section>
        <section className="mx-auto max-w-3xl px-6 pb-24 pt-6 md:px-10">{children}</section>
      </main>
      <Footer config={config} />
    </>
  );
}

/** Section heading used inside informational pages. */
export function InfoH2({ children }: { children: ReactNode }) {
  return <h2 className="mb-4 mt-10 font-serif text-2xl leading-snug text-ink first:mt-0 md:text-3xl">{children}</h2>;
}

/** Body paragraph used inside informational pages. */
export function InfoP({ children }: { children: ReactNode }) {
  return <p className="mb-4 text-[15px] leading-[1.9] text-ink-muted">{children}</p>;
}

/** Bulleted list used inside informational pages. */
export function InfoList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="mb-4 list-disc space-y-2 pl-5 text-[15px] leading-[1.9] text-ink-muted">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

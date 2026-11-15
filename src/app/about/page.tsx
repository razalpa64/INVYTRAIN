import type { Metadata } from "next";
import Link from "next/link";
import InfoPage, { InfoH2, InfoList, InfoP } from "@/components/InfoPage";
import { siteContent } from "@/lib/content";
import { getStats, getVentures } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Invytra",
  description:
    "Invytra is a growing venture connecting education, technology and celebrations — the story, principles and people behind Invytra Project, Learning and Event.",
};

export default async function AboutPage() {
  const [ventures, stats] = await Promise.all([getVentures(), getStats()]);

  return (
    <InfoPage
      eyebrow="About Invytra"
      title="Ideas today. Impact tomorrow."
      intro={siteContent.about.lines[0]}
    >
      <InfoP>{siteContent.about.lines[1]}</InfoP>
      <InfoP>
        That conviction is why Invytra is not a generalist agency. A final-year engineering student defending a
        capstone, a parent looking for a tutor who actually knows their child, and a couple inviting two hundred
        guests to a wedding do not need the same service — they need three different crafts, each practised deeply.
        Invytra is the shared home, and shared standard, for those three crafts.
      </InfoP>

      <InfoH2>What we do</InfoH2>
      {ventures.map((venture) => (
        <div key={venture.slug} className="mb-6">
          <h3 className="font-serif text-xl text-ink">
            {venture.name} <span className="text-sm uppercase tracking-[0.2em] text-gold">— {venture.label}</span>
          </h3>
          <InfoP>{venture.description}</InfoP>
          <InfoList items={venture.features} />
          <p>
            <Link href={venture.link.startsWith("http") ? `/${venture.slug}` : venture.link} className="text-sm font-semibold uppercase tracking-[0.16em] text-gold">
              Explore {venture.name.replace("INVYTRA ", "")} →
            </Link>
          </p>
        </div>
      ))}

      <InfoH2>How we work</InfoH2>
      <InfoP>
        Every engagement — a software build, a tutoring plan, an invitation site — runs on the same four principles:
      </InfoP>
      <div className="mb-4 space-y-5">
        {siteContent.principles.items.map((principle) => (
          <div key={principle.n} className="border-t border-line pt-4">
            <h3 className="font-serif text-xl text-ink">
              <span className="text-gold">{principle.n}.</span> {principle.title}
            </h3>
            <p className="mt-1 text-[15px] leading-[1.9] text-ink-muted">{principle.body}</p>
          </div>
        ))}
      </div>
      <InfoP>
        In practice this means: you talk directly to the person doing your work, scope and price are agreed in
        writing before anything begins, progress is shown rather than promised, and what we deliver is yours —
        source code, documentation and websites included, with no hidden lock-ins.
      </InfoP>

      {stats.length ? (
        <>
          <InfoH2>Invytra so far</InfoH2>
          <div className="mb-4 grid grid-cols-2 gap-6">
            {stats.map((stat) => (
              <div key={stat.id} className="border border-line bg-bg-2 p-5 text-center">
                <p className="font-serif text-4xl text-gold">{stat.value}</p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-ink-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </>
      ) : null}

      <InfoH2>Talk to us</InfoH2>
      <InfoP>
        Whether it is a project deadline, a child&rsquo;s report card, or a wedding date circled on the calendar,
        the conversation starts the same way: tell us what you are trying to do. Use the{" "}
        <Link href="/#contact" className="text-gold underline">
          contact section
        </Link>{" "}
        or message us on WhatsApp, and we will reply with honest next steps — including if we are not the right fit.
      </InfoP>
    </InfoPage>
  );
}

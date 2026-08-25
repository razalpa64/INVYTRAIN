import Reveal from "./motion/Reveal";
import Image from "next/image";
import { siteContent } from "@/lib/content";

const PRINCIPLE_ACCENTS = ["#A86835", "#3F7267", "#B8893E"];

export default function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden border-t" style={{ background: "var(--bg-2)", borderColor: "var(--line)" }}>
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-36">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow mb-5">About Invytra</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="font-serif text-5xl font-bold leading-[0.95] tracking-tight md:text-7xl" style={{ color: "var(--ink)" }}>
                Built with<br /><span style={{ color: "var(--gold)" }}>intention.</span>
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-8 max-w-md text-base font-medium leading-[1.9]" style={{ color: "var(--ink-muted)" }}>
                {siteContent.about.lines[0]}
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-10 flex items-center gap-5 border-t pt-6" style={{ borderColor: "var(--line-strong)" }}>
                <span className="font-serif text-5xl font-bold" style={{ color: "var(--gold)" }}>03</span>
                <p className="max-w-[12rem] text-[10px] font-extrabold uppercase tracking-[0.2em]" style={{ color: "var(--ink-muted)" }}>
                  Dedicated experiences.<br />One Invytra standard.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="relative min-h-40 overflow-hidden rounded-2xl lg:col-span-3" data-parallax="20">
            <Image src="/images/event-photo.jpg" alt="" fill sizes="(max-width: 1024px) 100vw, 25vw" className="object-cover" />
          </div>

          <div className="lg:col-span-4">
            <Reveal delay={120}>
              <p className="max-w-2xl font-serif text-3xl font-medium leading-[1.25] md:text-5xl" style={{ color: "var(--ink)" }}>
                {siteContent.about.lines[1]}
              </p>
            </Reveal>
            <div className="mt-14 grid gap-0 border-t" style={{ borderColor: "var(--line-strong)" }}>
              {siteContent.principles.items.slice(0, 3).map((principle, index) => (
                <Reveal key={principle.n} delay={180 + index * 80}>
                  <div className="grid gap-4 border-b py-7 md:grid-cols-[4rem_1fr_1.4fr] md:items-start" style={{ borderColor: "var(--line-strong)" }}>
                    <span className="font-serif text-2xl font-bold" style={{ color: PRINCIPLE_ACCENTS[index] }}>{principle.n}</span>
                    <h3 className="font-serif text-2xl font-bold" style={{ color: "var(--ink)" }}>{principle.title}</h3>
                    <p className="text-sm font-medium leading-[1.75]" style={{ color: "var(--ink-muted)" }}>{principle.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

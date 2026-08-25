import Reveal from "./motion/Reveal";
import Image from "next/image";
import { siteContent } from "@/lib/content";

const PRINCIPLE_ACCENTS = ["#A86835", "#3F7267", "#B8893E"];

export default function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden border-t" style={{ background: "var(--bg-2)", borderColor: "var(--line)" }}>
      <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-6 md:px-10 md:py-32">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-start lg:gap-24 xl:gap-32">
          <div>
            <Reveal>
              <p className="eyebrow mb-5">About Invytra</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="font-serif text-[clamp(3rem,7vw,5.5rem)] font-bold leading-[0.92] tracking-tight" style={{ color: "var(--ink)" }}>
                <span className="block">Built with</span>
                <span className="block" style={{ color: "var(--gold)" }}>intention.</span>
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-7 max-w-lg text-base font-medium leading-[1.8]" style={{ color: "var(--ink-muted)" }}>
                {siteContent.about.lines[0]}
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-9 flex items-center gap-4 border-t pt-5" style={{ borderColor: "var(--line-strong)" }}>
                <span className="font-serif text-4xl font-bold" style={{ color: "var(--gold)" }}>03</span>
                <p className="max-w-[14rem] text-[10px] font-extrabold uppercase tracking-[0.18em]" style={{ color: "var(--ink-muted)" }}>
                  Dedicated experiences. One Invytra standard.
                </p>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="mt-10 border-t pt-5" style={{ borderColor: "var(--line-strong)" }}>
                <p className="eyebrow mb-4">Three divisions. One standard.</p>
                <div className="grid gap-0">
                  {siteContent.bridge.items.map((item, index) => (
                    <div key={item.label} className="flex items-center justify-between border-b py-3" style={{ borderColor: "var(--line)" }}>
                      <div className="flex items-baseline gap-3">
                        <span className="font-serif text-lg font-bold" style={{ color: PRINCIPLE_ACCENTS[index] }}>{item.label}</span>
                        <span className="text-[10px] font-bold uppercase tracking-[0.16em]" style={{ color: "var(--ink-muted)" }}>{item.sub}</span>
                      </div>
                      <span className="text-xs" style={{ color: PRINCIPLE_ACCENTS[index] }}>↗</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={380}>
              <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-2xl border" style={{ borderColor: "var(--line-strong)", background: "var(--surface)" }}>
                <Image
                  src="/images/project-photo.jpg"
                  alt="A carefully crafted Invytra project workspace"
                  fill
                  sizes="(max-width: 1024px) 100vw, 35vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                <p className="absolute bottom-4 left-4 text-[10px] font-extrabold uppercase tracking-[0.2em] text-white/85">
                  Thoughtful work, made visible
                </p>
              </div>
            </Reveal>
          </div>

          <div>
            <Reveal delay={120}>
              <p className="max-w-2xl font-serif text-[clamp(1.8rem,3.2vw,3.25rem)] font-medium leading-[1.12]" style={{ color: "var(--ink)" }}>
                {siteContent.about.lines[1]}
              </p>
            </Reveal>
            <div className="mt-10 grid gap-0 border-t" style={{ borderColor: "var(--line-strong)" }}>
              {siteContent.principles.items.map((principle, index) => (
                <Reveal key={principle.n} delay={180 + index * 80}>
                  <div className="grid gap-3 border-b py-5 sm:grid-cols-[3.5rem_minmax(0,1fr)] sm:gap-5" style={{ borderColor: "var(--line-strong)" }}>
                    <span className="font-serif text-2xl font-bold" style={{ color: PRINCIPLE_ACCENTS[index % PRINCIPLE_ACCENTS.length] }}>{principle.n}</span>
                    <div>
                      <h3 className="font-serif text-2xl font-bold leading-tight" style={{ color: "var(--ink)" }}>{principle.title}</h3>
                      <p className="mt-2 max-w-xl text-sm font-medium leading-[1.75]" style={{ color: "var(--ink-muted)" }}>{principle.body}</p>
                    </div>
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

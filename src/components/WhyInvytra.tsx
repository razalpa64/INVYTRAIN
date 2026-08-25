"use client";

import Reveal from "./motion/Reveal";
import Image from "next/image";
import { siteContent } from "@/lib/content";

export default function WhyInvytra() {
  return (
    <section
      className="relative overflow-hidden border-t"
      style={{ borderColor: "var(--line)", background: "var(--bg)" }}
    >
      <div className="relative mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-36">
        <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-12 md:items-end">
          <div className="md:col-span-6">
            <Reveal>
              <p className="eyebrow mb-5">{siteContent.principles.title.split(".")[0]}</p>
            </Reveal>
            <Reveal delay={80}>
              <h2
                className="font-serif font-bold leading-[0.98] tracking-tight"
                style={{ fontSize: "clamp(2.8rem, 5.5vw, 4.8rem)", color: "var(--ink)" }}
              >
                {siteContent.principles.title}
              </h2>
            </Reveal>
          </div>
          <div className="relative hidden min-h-44 overflow-hidden rounded-2xl md:col-span-3 md:col-start-7 md:block">
            <Image src="/images/project-visual.svg" alt="" fill sizes="25vw" className="object-cover" />
          </div>
          <div className="md:col-span-3 md:col-start-10">
            <Reveal delay={150}>
              <p className="text-sm leading-[1.8] font-medium" style={{ color: "var(--ink-muted)" }}>
                Every venture we build stands on these non-negotiable principles of craft and integrity.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {siteContent.principles.items.map((p, i) => (
            <Reveal key={p.n} delay={i * 80}>
              <div
                className="group relative overflow-hidden rounded-2xl p-8 md:p-10 transition-all duration-300"
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--line-strong)",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.03)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = "var(--gold)";
                  el.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = "var(--line-strong)";
                  el.style.transform = "translateY(0)";
                }}
              >
                <span
                  className="relative font-serif text-sm font-bold"
                  style={{ color: "var(--gold)" }}
                >
                  {p.n}
                </span>

                <h3
                  className="relative mt-3 font-serif text-3xl font-bold leading-tight"
                  style={{ color: "var(--ink)" }}
                >
                  {p.title}
                </h3>

                <p
                  className="relative mt-4 max-w-md text-sm leading-[1.8] font-medium"
                  style={{ color: "var(--ink-muted)" }}
                >
                  {p.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

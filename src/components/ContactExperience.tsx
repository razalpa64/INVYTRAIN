"use client";

import { useMemo, useState } from "react";
import Reveal from "./motion/Reveal";
import { buildWhatsappLink } from "@/lib/whatsapp";
import type { SiteConfigData, VentureSlug } from "@/lib/types";

type Choice = { key: VentureSlug; title: string; tagline: string; accent: string };

const CHOICES: Choice[] = [
  { key: "project",  title: "BUILD",      tagline: "I need a project built.",        accent: "#A86835" },
  { key: "learning", title: "LEARN",      tagline: "I need learning support.",        accent: "#3F7267" },
  { key: "event",    title: "CELEBRATE",  tagline: "I need an event experience.",     accent: "#B8893E" },
];

type Field = { name: string; label: string; type?: "text" | "textarea" | "date" | "number" };

const FIELDS: Record<VentureSlug, Field[]> = {
  project:  [
    { name: "name",        label: "Your Name" },
    { name: "college",     label: "College / Institution" },
    { name: "projectType", label: "Project Type" },
    { name: "technology",  label: "Technology Stack" },
    { name: "deadline",    label: "Deadline", type: "date" },
    { name: "budget",      label: "Budget" },
    { name: "description", label: "Brief Description", type: "textarea" },
    { name: "contact",     label: "Contact Number" },
  ],
  learning: [
    { name: "studentName",  label: "Student Name" },
    { name: "className",    label: "Class / Grade" },
    { name: "subject",      label: "Subject" },
    { name: "schedule",     label: "Preferred Schedule" },
    { name: "parentContact",label: "Parent Contact" },
  ],
  event: [
    { name: "eventType",   label: "Event Type" },
    { name: "eventDate",   label: "Event Date", type: "date" },
    { name: "guestCount",  label: "Guest Count", type: "number" },
    { name: "style",       label: "Invitation Style" },
    { name: "packageName", label: "Package" },
    { name: "contact",     label: "Contact Number" },
  ],
};

export default function ContactExperience({ config }: { config: SiteConfigData }) {
  const [selected, setSelected] = useState<VentureSlug | null>(null);
  const [values, setValues] = useState<Record<string, string>>({});

  const fields = selected ? FIELDS[selected] : [];
  const activeChoice = CHOICES.find((c) => c.key === selected);

  const message = useMemo(() => {
    if (!selected) return "";
    const base = config.whatsapp.messages[selected];
    const details = fields
      .map((f) => (values[f.name] ? `${f.label}: ${values[f.name]}` : null))
      .filter(Boolean)
      .join("\n");
    return details ? `${base}\n\n${details}` : base;
  }, [selected, values, fields, config]);

  function update(name: string, value: string) {
    setValues((prev) => ({ ...prev, [name]: value }));
  }

  const inputBase: React.CSSProperties = {
    width: "100%",
    background: "var(--surface)",
    border: "1px solid var(--line-strong)",
    borderRadius: "0.75rem",
    padding: "0.875rem 1.125rem",
    fontSize: "0.875rem",
    color: "var(--ink)",
    outline: "none",
    fontFamily: "var(--font-sans)",
    transition: "border-color 0.3s ease",
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t"
      style={{ borderColor: "var(--line)", background: "var(--bg)" }}
    >
      <div className="relative mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-36">
        <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="md:col-span-6">
            <Reveal>
              <p className="eyebrow mb-5">Let&apos;s talk</p>
            </Reveal>
            <Reveal delay={80}>
              <h2
                className="font-serif font-bold leading-[0.95] tracking-tight"
                style={{ fontSize: "clamp(2.8rem, 5.5vw, 4.8rem)", color: "var(--ink)" }}
              >
                What are you<br />
                <span style={{ color: "var(--gold)" }}>Looking For?</span>
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-5 md:col-start-8 md:flex md:items-end">
            <Reveal delay={150}>
              <p className="text-sm leading-[1.8] font-medium" style={{ color: "var(--ink-muted)" }}>
                Select what you need below to customize your message. We reply on WhatsApp within hours.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Choice tiles */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {CHOICES.map((choice, i) => {
            const isSelected = selected === choice.key;
            return (
              <Reveal key={choice.key} delay={i * 80}>
                <button
                  type="button"
                  onClick={() => { setSelected(choice.key); setValues({}); }}
                  data-cursor="SELECT"
                  className="group relative w-full overflow-hidden rounded-2xl p-8 text-left transition-all duration-300"
                  style={{
                    background: "var(--surface)",
                    border: `1px solid ${isSelected ? choice.accent : "var(--line-strong)"}`,
                    boxShadow: isSelected ? "0 10px 30px rgba(0,0,0,0.05)" : "none",
                  }}
                >
                  <h3
                    className="font-serif text-3xl font-bold leading-none"
                    style={{ color: isSelected ? choice.accent : "var(--ink)" }}
                  >
                    {choice.title}
                  </h3>
                  <p className="mt-3 text-sm leading-[1.7] font-medium" style={{ color: "var(--ink-muted)" }}>
                    {choice.tagline}
                  </p>
                </button>
              </Reveal>
            );
          })}
        </div>

        {/* Form */}
        {selected && (
          <div
            className="mt-12 rounded-2xl p-8 md:p-12"
            style={{
              background: "var(--surface)",
              border: "1px solid var(--line-strong)",
              boxShadow: "0 10px 30px rgba(0,0,0,0.03)",
            }}
          >
            <p className="eyebrow mb-8" style={{ color: activeChoice?.accent }}>
              Tell Us More
            </p>

            <form
              className="grid grid-cols-1 gap-5 md:grid-cols-2"
              onSubmit={(e) => {
                e.preventDefault();
                window.open(buildWhatsappLink(config, message), "_blank", "noopener,noreferrer");
              }}
            >
              {fields.map((field) =>
                field.type === "textarea" ? (
                  <div key={field.name} className="md:col-span-2">
                    <label
                      className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em]"
                      style={{ color: "var(--ink-muted)" }}
                    >
                      {field.label}
                    </label>
                    <textarea
                      rows={4}
                      value={values[field.name] ?? ""}
                      onChange={(e) => update(field.name, e.target.value)}
                      style={{ ...inputBase, resize: "vertical" }}
                      onFocus={(e) => {
                        (e.target as HTMLTextAreaElement).style.borderColor = "var(--gold)";
                      }}
                      onBlur={(e) => {
                        (e.target as HTMLTextAreaElement).style.borderColor = "var(--line-strong)";
                      }}
                    />
                  </div>
                ) : (
                  <div key={field.name}>
                    <label
                      className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em]"
                      style={{ color: "var(--ink-muted)" }}
                    >
                      {field.label}
                    </label>
                    <input
                      type={field.type ?? "text"}
                      value={values[field.name] ?? ""}
                      onChange={(e) => update(field.name, e.target.value)}
                      style={inputBase}
                      onFocus={(e) => {
                        (e.target as HTMLInputElement).style.borderColor = "var(--gold)";
                      }}
                      onBlur={(e) => {
                        (e.target as HTMLInputElement).style.borderColor = "var(--line-strong)";
                      }}
                    />
                  </div>
                )
              )}

              <div className="md:col-span-2">
                <button
                  type="submit"
                  data-cursor="SEND"
                  className="btn-shimmer px-8 py-4 text-[11px] tracking-[0.18em]"
                >
                  Send via WhatsApp →
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Contact info cards */}
        <div className="mt-14 grid gap-4 sm:grid-cols-3">
          {[
            { href: `tel:${config.contact.phone.replace(/\s/g, "")}`, label: "Call or WhatsApp", value: config.contact.phone },
            { href: config.contact.instagram, label: "Instagram", value: "@invytra", target: "_blank" },
            { href: `mailto:${config.contact.email}`, label: "Email", value: config.contact.email },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.target}
              rel={item.target ? "noreferrer" : undefined}
              className="rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--line-strong)",
              }}
            >
              <span className="block text-[10px] font-bold uppercase tracking-[0.22em]" style={{ color: "var(--gold)" }}>
                {item.label}
              </span>
              <span className="mt-2 block break-all text-sm font-bold" style={{ color: "var(--ink)" }}>
                {item.value}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";

export default function ReviewForm() {
  const [name, setName] = useState("");
  const [review, setReview] = useState("");

  function submit(e: React.FormEvent) {
    e.preventDefault();
    window.open(
      `https://wa.me/918606159002?text=${encodeURIComponent(
        `Hello Invytra, I would like to share a review.\n\nName: ${name}\nReview: ${review}`
      )}`,
      "_blank",
      "noopener,noreferrer"
    );
  }

  return (
    <form onSubmit={submit}>
      {/* Header */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.22em]" style={{ color: "var(--gold)" }}>
            Share your experience
          </p>
          <p className="mt-2 font-serif text-3xl" style={{ color: "var(--ink)" }}>
            Leave a review
          </p>
        </div>
        <p className="max-w-xs text-sm leading-relaxed" style={{ color: "var(--ink-muted)" }}>
          Your review opens in WhatsApp so our team can confirm it before publishing.
        </p>
      </div>

      {/* Fields */}
      <div className="mt-7 flex flex-col gap-4">
        <input
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          className="w-full rounded-xl border px-4 py-3.5 text-sm outline-none transition-colors"
          style={{
            borderColor: "var(--line)",
            background: "transparent",
            color: "var(--ink)",
          }}
          onFocus={(e) => (e.currentTarget.style.borderColor = "var(--gold)")}
          onBlur={(e) => (e.currentTarget.style.borderColor = "var(--line)")}
        />
        <input
          required
          value={review}
          onChange={(e) => setReview(e.target.value)}
          placeholder="Write your review"
          className="w-full rounded-xl border px-4 py-3.5 text-sm outline-none transition-colors"
          style={{
            borderColor: "var(--line)",
            background: "transparent",
            color: "var(--ink)",
          }}
          onFocus={(e) => (e.currentTarget.style.borderColor = "var(--gold)")}
          onBlur={(e) => (e.currentTarget.style.borderColor = "var(--line)")}
        />
        <button
          type="submit"
          className="w-full rounded-xl py-3.5 text-[11px] font-extrabold uppercase tracking-[0.2em] transition-opacity duration-300 hover:opacity-80 sm:w-auto sm:self-start sm:px-8"
          style={{ background: "var(--ink)", color: "var(--bg)" }}
        >
          Send Review ↗
        </button>
      </div>
    </form>
  );
}

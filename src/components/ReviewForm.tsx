"use client";

import { useState } from "react";

export default function ReviewForm() {
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  function submit(e: React.FormEvent) { e.preventDefault(); window.open(`https://wa.me/918606159002?text=${encodeURIComponent(`Hello Invytra, I would like to share a review.\n\nName: ${name}\nReview: ${review}`)}`, "_blank", "noopener,noreferrer"); }
  return <form onSubmit={submit} className="mt-12 rounded-2xl border border-line bg-bg p-6 md:p-8"><div className="flex flex-col justify-between gap-4 md:flex-row md:items-end"><div><p className="text-[10px] font-bold uppercase tracking-[0.22em] text-gold">Share your experience</p><p className="mt-2 font-serif text-3xl text-ink">Leave a review</p></div><p className="max-w-xs text-sm text-ink-muted">Your review opens in WhatsApp so our team can confirm it before publishing.</p></div><div className="mt-7 grid gap-4 md:grid-cols-[.7fr_1.3fr_auto]"><input required value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" className="rounded-xl border border-line bg-transparent px-4 py-3 text-sm outline-none focus:border-gold" /><input required value={review} onChange={(e) => setReview(e.target.value)} placeholder="Write your review" className="rounded-xl border border-line bg-transparent px-4 py-3 text-sm outline-none focus:border-gold" /><button type="submit" className="rounded-xl bg-ink px-5 py-3 text-[10px] font-bold uppercase tracking-[.16em] text-bg">Send review ↗</button></div></form>;
}

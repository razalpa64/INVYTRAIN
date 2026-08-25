"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.7);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-[800] flex h-11 w-11 items-center justify-center rounded-full border text-lg transition-all duration-500 hover:-translate-y-1 md:bottom-8 md:right-8"
      style={{
        background: "var(--surface)",
        borderColor: "var(--line-strong)",
        color: "var(--gold)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(12px)",
        pointerEvents: visible ? "auto" : "none",
        boxShadow: "0 10px 28px rgba(0,0,0,0.10)",
      }}
    >
      <span aria-hidden="true">↑</span>
    </button>
  );
}

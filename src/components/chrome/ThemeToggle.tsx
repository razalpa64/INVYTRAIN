"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    window.localStorage.setItem("invytra-theme", next ? "dark" : "light");
  }

  return (
    <button
      type="button"
      onClick={toggle}
      data-cursor="TOGGLE"
      aria-label="Toggle cinematic dark mode"
      className={`group flex h-8 w-14 items-center rounded-full border border-line px-1 transition-colors ${className}`}
    >
      <span
        className="h-5 w-5 rounded-full bg-gold transition-transform duration-500 ease-out"
        style={{ transform: dark ? "translateX(24px)" : "translateX(0)" }}
      />
    </button>
  );
}

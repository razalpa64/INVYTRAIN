"use client";

import { useEffect, useState, useRef } from "react";

const LETTERS = ["I", "N", "V", "Y", "T", "R", "A"];

export default function IntroLoader() {
  const [shouldRender, setShouldRender] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if user has already seen intro in this session or prefers reduced motion
    const seen = typeof window !== "undefined" && window.sessionStorage.getItem("invytra-intro-seen");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (seen || reduceMotion) {
      setShouldRender(false);
      window.dispatchEvent(new Event("invytra-intro-complete"));
      return;
    }

    document.body.style.overflow = "hidden";

    let animationFrameId: number;
    let startTime: number | null = null;
    const duration = 2400;

    const updateLoader = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const currentProgress = Math.min(100, Math.floor((elapsed / duration) * 100));

      setProgress(currentProgress);

      if (elapsed < duration) {
        animationFrameId = requestAnimationFrame(updateLoader);
      } else {
        setProgress(100);
        // Start exit animation
        setTimeout(() => {
          setIsExiting(true);
        }, 50);

        // Unmount & trigger hero entrance after curtain opens (total = 2.0s)
        setTimeout(() => {
          setShouldRender(false);
          document.body.style.overflow = "";
          try {
            window.sessionStorage.setItem("invytra-intro-seen", "1");
          } catch (e) {
            // ignore storage errors
          }
          window.dispatchEvent(new Event("invytra-intro-complete"));
        }, 700);
      }
    };

    animationFrameId = requestAnimationFrame(updateLoader);

    return () => {
      cancelAnimationFrame(animationFrameId);
      document.body.style.overflow = "";
    };
  }, []);

  if (!shouldRender) return null;

  // Calculate letter reveal based on progress (0% -> 70% reveals letters 0 to 6)
  const activeLettersCount = Math.min(7, Math.floor((progress / 70) * 7));

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[99999] flex items-center justify-center overflow-hidden select-none"
      style={{
        pointerEvents: isExiting ? "none" : "auto",
      }}
    >
      {/* Top Curtain Panel */}
      <div
        className="absolute inset-x-0 top-0 h-1/2"
        style={{
          background: "var(--bg)",
          transform: isExiting ? "translateY(-100%)" : "translateY(0%)",
          transition: "transform 0.5s cubic-bezier(0.76, 0, 0.24, 1)",
          boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
        }}
      />

      {/* Bottom Curtain Panel */}
      <div
        className="absolute inset-x-0 bottom-0 h-1/2"
        style={{
          background: "var(--bg)",
          transform: isExiting ? "translateY(100%)" : "translateY(0%)",
          transition: "transform 0.5s cubic-bezier(0.76, 0, 0.24, 1)",
          boxShadow: "0 -10px 40px rgba(0,0,0,0.1)",
        }}
      />

      {/* Ambient Glow */}
      <div
        className="orb orb-gold pointer-events-none"
        style={{
          width: 650,
          height: 650,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          opacity: isExiting ? 0 : 0.30,
          transition: "opacity 0.5s ease",
        }}
      />

      {/* Content Container */}
      <div
        className="relative z-10 flex flex-col items-center justify-center px-6 transition-all duration-500"
        style={{
          opacity: isExiting ? 0 : 1,
          transform: isExiting ? "scale(0.95)" : "scale(1)",
        }}
      >
        {/* Eyebrow / Counter */}
        <div className="mb-6 flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-[color:var(--gold)] animate-pulse" />
          <span
            className="font-serif text-base font-bold tracking-widest"
            style={{ color: "var(--gold)" }}
          >
            {String(progress).padStart(2, "0")}%
          </span>
        </div>

        {/* INVYTRA Typography */}
        <div className="flex items-center gap-1 md:gap-2">
          {LETTERS.map((letter, index) => {
            const isRevealed = index < activeLettersCount;
            return (
              <span
                key={index}
                className="font-serif font-bold tracking-widest text-4xl sm:text-6xl md:text-7xl lg:text-8xl transition-all duration-400"
                style={{
                  color: isRevealed ? "var(--ink)" : "var(--line-strong)",
                  opacity: isRevealed ? 1 : 0.2,
                  transform: isRevealed ? "translateY(0)" : "translateY(8px)",
                  textShadow: isRevealed ? "0 0 30px rgba(184, 137, 62, 0.35)" : "none",
                  filter: isRevealed ? "blur(0px)" : "blur(4px)",
                }}
              >
                {letter}
              </span>
            );
          })}
        </div>

        {/* Subtitle */}
        <p
          className="mt-6 text-[11px] font-extrabold uppercase tracking-[0.4em] transition-opacity duration-600"
          style={{
            color: "var(--gold)",
            opacity: progress > 40 ? 0.95 : 0,
          }}
        >
          Learn • Create • Celebrate
        </p>

        {/* Sleek Progress Line */}
        <div
          className="mt-8 h-[2px] w-56 overflow-hidden rounded-full"
          style={{ background: "var(--line)" }}
        >
          <div
            className="h-full rounded-full transition-all duration-75"
            style={{
              width: `${progress}%`,
              background: "var(--gold)",
              boxShadow: "0 0 12px var(--gold)",
            }}
          />
        </div>
      </div>
    </div>
  );
}

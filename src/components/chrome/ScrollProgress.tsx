"use client";

import { useEffect, useRef } from "react";

export default function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      const scrollTop = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const progress = height > 0 ? Math.min(1, Math.max(0, scrollTop / height)) : 0;
      if (barRef.current) barRef.current.style.transform = `scaleX(${progress})`;
      raf = requestAnimationFrame(update);
    };
    raf = requestAnimationFrame(update);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="fixed left-0 top-0 z-[9998] h-[2px] w-full bg-transparent">
      <div ref={barRef} className="h-full w-full origin-left bg-gold" style={{ transform: "scaleX(0)" }} />
    </div>
  );
}

"use client";

import { useEffect, useRef } from "react";

export default function RevealLines({
  lines,
  className = "",
  style,
  stagger = 120,
  baseDelay = 0,
}: {
  lines: string[];
  className?: string;
  style?: React.CSSProperties;
  stagger?: number;
  baseDelay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll<HTMLElement>("[data-reveal]").forEach((line) => line.classList.add("is-visible"));
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref}>
      {lines.map((line, i) => (
        <span className="line-mask" key={line + i}>
          <span
            data-reveal="line"
            style={{ "--reveal-delay": baseDelay + i * stagger, ...style } as React.CSSProperties}
            className={className}
          >
            {line}
          </span>
        </span>
      ))}
    </div>
  );
}

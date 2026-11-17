"use client";

import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    adsbygoogle?: Array<Record<string, unknown>>;
  }
}

const AD_CLIENT =
  process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID ?? "ca-pub-2630095534690757";

/** Display ad unit slot created in AdSense (Ads → By ad unit). */
export const DISPLAY_AD_SLOT = "1553855785";

type AdUnitProps = {
  /** AdSense ad slot ID. Defaults to the site's display ad unit. */
  slot?: string;
  className?: string;
};

/**
 * Manual Google AdSense display ad unit (responsive).
 *
 * The section renders NOTHING until Google actually fills the unit —
 * an unfilled slot (site not yet approved, no demand, ad blocker)
 * used to reserve a big dashed empty box that looked like a broken
 * section. We watch the <ins> for AdSense's filled status/height and
 * only then reveal the labelled container.
 */
export default function AdUnit({ slot = DISPLAY_AD_SLOT, className = "" }: AdUnitProps) {
  const insRef = useRef<HTMLModElement | null>(null);
  const [filled, setFilled] = useState(false);

  useEffect(() => {
    const el = insRef.current;
    if (!el || el.dataset.adLoaded === "true") return;
    el.dataset.adLoaded = "true";
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      // AdSense script blocked (e.g. ad blocker) — fail silently.
    }

    // Reveal only once AdSense marks the unit filled / gives it height.
    const started = Date.now();
    const timer = window.setInterval(() => {
      const node = insRef.current;
      if (!node) return;
      const status = node.getAttribute("data-adsbygoogle-status");
      if (status === "done" || node.offsetHeight > 40) {
        setFilled(true);
        window.clearInterval(timer);
      } else if (Date.now() - started > 6000) {
        window.clearInterval(timer); // unfilled — stay invisible
      }
    }, 400);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section
      aria-label="Advertisement"
      className={`mx-auto w-full max-w-[1400px] px-6 md:px-10 ${filled ? "py-10" : "h-0 overflow-hidden py-0"} ${className}`}
      aria-hidden={!filled || undefined}
    >
      {filled ? (
        <p className="mb-3 text-center text-[10px] uppercase tracking-[0.3em] text-ink-faint">Advertisement</p>
      ) : null}
      <div className="mx-auto w-full max-w-[970px]">
        <ins
          ref={insRef}
          className="adsbygoogle block"
          style={{ display: "block" }}
          data-ad-client={AD_CLIENT}
          data-ad-slot={slot}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef } from "react";

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
 * The adsbygoogle.js loader itself is included site-wide in the root
 * layout <head>; this component renders the <ins> placement and pushes
 * it onto the queue once mounted. Ads only fill after the site is
 * approved ("Ready") in AdSense — until then this reserves a tidy,
 * labelled slot that simply stays blank.
 */
export default function AdUnit({ slot = DISPLAY_AD_SLOT, className = "" }: AdUnitProps) {
  const insRef = useRef<HTMLModElement | null>(null);

  useEffect(() => {
    const el = insRef.current;
    // Guard against double-push (React StrictMode / remounts), which
    // makes AdSense throw "already have ads in them" errors.
    if (!el || el.dataset.adLoaded === "true") return;
    el.dataset.adLoaded = "true";
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      // AdSense script blocked (e.g. ad blocker) — fail silently.
    }
  }, []);

  return (
    <section aria-label="Advertisement" className={`mx-auto w-full max-w-[1400px] px-6 py-10 md:px-10 ${className}`}>
      <p className="mb-3 text-center text-[10px] uppercase tracking-[0.3em] text-ink-muted">Advertisement</p>
      <div className="mx-auto min-h-[100px] w-full max-w-[970px]">
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

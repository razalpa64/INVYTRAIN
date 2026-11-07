import type { Metadata } from "next";
import type { ReactNode } from "react";
import Script from "next/script";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/chrome/SmoothScrollProvider";
import CustomCursor from "@/components/chrome/CustomCursor";
import ScrollProgress from "@/components/chrome/ScrollProgress";
import ScrollEffects from "@/components/chrome/ScrollEffects";
import BackToTop from "@/components/chrome/BackToTop";
import IntroLoader from "@/components/IntroLoader";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

/**
 * Google AdSense publisher ID (public — it appears in the page source).
 * Override per-environment via NEXT_PUBLIC_ADSENSE_CLIENT_ID if needed.
 */
export const ADSENSE_CLIENT_ID =
  process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID ?? "ca-pub-2630095534690757";

export const metadata: Metadata = {
  metadataBase: new URL("https://invytra.com"),
  // Lets Google verify site ownership for AdSense.
  other: {
    "google-adsense-account": ADSENSE_CLIENT_ID,
  },
  title: {
    default: "INVYTRA — Learn. Create. Celebrate.",
    template: "%s — INVYTRA",
  },
  description:
    "Invytra is a growing venture connecting education, technology and unforgettable experiences — through Invytra Project, Invytra Learning and Invytra Event.",
  openGraph: {
    title: "INVYTRA — Learn. Create. Celebrate.",
    description:
      "Invytra is a growing venture connecting education, technology and unforgettable experiences.",
    siteName: "Invytra",
    type: "website",
    images: ["/images/project-photo.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "INVYTRA — Learn. Create. Celebrate.",
    description: "Ideas today. Impact tomorrow.",
    images: ["/images/project-photo.jpg"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${manrope.variable}`} suppressHydrationWarning>
      <head>
        {/* Google AdSense (Auto Ads) — enable Auto Ads for this site in the
            AdSense dashboard and Google will place ads automatically. */}
        <Script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT_ID}`}
          crossOrigin="anonymous"
          strategy="beforeInteractive"
        />
      </head>
      <body className="bg-bg text-ink antialiased" suppressHydrationWarning>
        <SmoothScrollProvider>
          <IntroLoader />
          <ScrollProgress />
          <ScrollEffects />
          <BackToTop />
          <CustomCursor />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}

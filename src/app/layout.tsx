import type { Metadata } from "next";
import type { ReactNode } from "react";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://invytra.com"),
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

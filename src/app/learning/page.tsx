import type { Metadata } from "next";
import VenturePageContent from "@/components/VenturePageContent";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Invytra Learning — One Tutor. One Student.",
  description:
    "Personalized one-to-one tutoring and educational services designed to give every student focused attention.",
  openGraph: {
    title: "Invytra Learning — One Tutor. One Student.",
    description: "Personalized learning designed to give every student focused attention and stronger foundations.",
    images: ["/images/learning-tutor.jpg"],
  },
};

export default function LearningPage() {
  return <VenturePageContent slug="learning" />;
}

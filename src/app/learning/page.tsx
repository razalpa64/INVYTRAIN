import type { Metadata } from "next";
import VenturePageContent from "@/components/VenturePageContent";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Invytra Learning — One Tutor. One Student.",
  description:
    "100% online one-to-one tutoring with personalized classes, individual attention, flexible learning, and easy communication from anywhere.",
  openGraph: {
    title: "Invytra Learning — One Tutor. One Student.",
    description: "One student. One dedicated tutor. A focused online learning experience.",
    images: ["/images/learning-tutor.jpg"],
  },
};

export default function LearningPage() {
  return <VenturePageContent slug="learning" />;
}

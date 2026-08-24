import type { Metadata } from "next";
import VenturePageContent from "@/components/VenturePageContent";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Invytra Project — Design. Develop. Deliver.",
  description:
    "College projects, software development, academic solutions, documentation and digital products — built by Invytra Project.",
  openGraph: {
    title: "Invytra Project — Design. Develop. Deliver.",
    description: "Turning college ideas into meaningful software, digital products and academic experiences.",
    images: ["/images/project-desk.jpg"],
  },
};

export default function ProjectPage() {
  return <VenturePageContent slug="project" />;
}

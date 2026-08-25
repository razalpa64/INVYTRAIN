import type { Metadata } from "next";
import VenturePageContent from "@/components/VenturePageContent";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Invytra Project — Design. Develop. Deliver.",
  description:
    "Online academic software project support for college students, including final-year projects, mini projects, development, documentation, and guidance.",
  openGraph: {
    title: "Invytra Project — Design. Develop. Deliver.",
    description: "Build, understand, and complete academic software projects with professional development support.",
    images: ["/images/project-desk.jpg"],
  },
};

export default function ProjectPage() {
  return <VenturePageContent slug="project" />;
}

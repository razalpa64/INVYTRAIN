import type { Metadata } from "next";
import VenturePageContent from "@/components/VenturePageContent";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Invytra Event — Your Moment, Reimagined.",
  description: "Premium digital invitations, wedding websites and immersive event experiences by Invytra Event.",
  openGraph: {
    title: "Invytra Event — Your Moment, Reimagined.",
    description: "Premium digital invitations and immersive event experiences crafted for moments worth remembering.",
    images: ["/images/event-phone.jpg"],
  },
};

export default function EventPage() {
  return <VenturePageContent slug="event" />;
}

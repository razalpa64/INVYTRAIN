import type { Metadata } from "next";
import InfoPage, { InfoH2, InfoList, InfoP } from "@/components/InfoPage";
import { getSiteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms on which Invytra provides academic project support, online tutoring and digital event invitation services through invytra.in.",
};

export default async function TermsPage() {
  const config = await getSiteConfig();
  const email = config.contact.email;

  return (
    <InfoPage
      eyebrow="Legal"
      title="Terms of Service"
      intro="These terms describe how Invytra provides its services and what you can expect from us — and what we expect in return. Last updated: November 2026."
    >
      <InfoH2>Our services</InfoH2>
      <InfoP>Invytra provides three online services:</InfoP>
      <InfoList
        items={[
          <>
            <strong className="text-ink">Invytra Project</strong> — design, development, documentation and
            presentation support for academic software projects (final-year, mini and custom builds).
          </>,
          <>
            <strong className="text-ink">Invytra Learning</strong> — live one-to-one online tutoring, mentorship and
            exam preparation.
          </>,
          <>
            <strong className="text-ink">Invytra Event</strong> — design and hosting of digital invitation and event
            websites, including RSVP collection.
          </>,
        ]}
      />
      <InfoP>
        The specific scope, deliverables, schedule and price for any engagement are agreed with you in writing
        (email or WhatsApp) before work begins. Those agreed details form part of these terms for your engagement.
      </InfoP>

      <InfoH2>Enquiries and quotations</InfoH2>
      <InfoP>
        Prices shown on this website are starting points for typical packages. Your actual quotation depends on
        scope and is confirmed before any payment. Submitting an enquiry does not create a contract; a contract
        begins when scope and price are agreed and any agreed advance payment is made.
      </InfoP>

      <InfoH2>Your responsibilities</InfoH2>
      <InfoList
        items={[
          "Provide accurate requirements and material (topics, guidelines, syllabi, event details, photos) in reasonable time.",
          "For academic projects: ensure the work we help you build and understand is submitted and presented in line with your institution's rules. Our service is development and guidance support — understanding and representing the work as your own effort remains your responsibility.",
          "For tutoring: ensure the student can attend scheduled sessions with a suitable device and connection, and give reasonable notice for rescheduling.",
          "For event sites: ensure you have the right to use photos, names and details you ask us to publish.",
        ]}
      />

      <InfoH2>Deliverables and ownership</InfoH2>
      <InfoP>
        On full payment, you receive the agreed deliverables — for projects this includes the source code and
        documentation; for event sites, the live website for your event. You may use delivered work for its intended
        purpose without restriction from us. We may describe engagements in general terms (for example project type,
        without your confidential material) when presenting our portfolio.
      </InfoP>

      <InfoH2>Payments and revisions</InfoH2>
      <InfoP>
        Payment schedules are agreed per engagement. Reasonable revisions within the agreed scope are included as
        described in your quotation; work outside the agreed scope is quoted separately before it is done. If an
        engagement is cancelled after work has begun, payment for work completed up to that point remains due.
      </InfoP>

      <InfoH2>Availability and liability</InfoH2>
      <InfoP>
        We work carefully to deliver on the schedules we agree, and to keep hosted event websites available and
        performing well. However, to the extent permitted by law, our liability for any engagement is limited to the
        fees paid for that engagement, and we are not responsible for outcomes outside our control (for example
        examination results, institutional decisions, or third-party platform outages).
      </InfoP>

      <InfoH2>Website content</InfoH2>
      <InfoP>
        Content on invytra.in is provided for general information about our services and may change as services
        evolve. Testimonials reflect the experiences of individual clients. If you believe any website content
        infringes your rights, contact us and we will review it promptly.
      </InfoP>

      <InfoH2>Contact</InfoH2>
      <InfoP>Questions about these terms: {email}.</InfoP>
    </InfoPage>
  );
}

import type { Metadata } from "next";
import InfoPage, { InfoH2, InfoList, InfoP } from "@/components/InfoPage";
import { getSiteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Invytra collects, uses and protects information — including how Google AdSense and third-party advertising cookies work on invytra.in.",
};

export default async function PrivacyPage() {
  const config = await getSiteConfig();
  const email = config.contact.email;

  return (
    <InfoPage
      eyebrow="Legal"
      title="Privacy Policy"
      intro="This policy explains what information Invytra collects when you use invytra.in and our services, how we use it, and the choices you have. Last updated: November 2026."
    >
      <InfoH2>Who we are</InfoH2>
      <InfoP>
        Invytra operates three service divisions — Invytra Project (academic software project support), Invytra
        Learning (online one-to-one tutoring) and Invytra Event (digital event invitations) — through this website,
        invytra.in. References to &ldquo;we&rdquo;, &ldquo;us&rdquo; and &ldquo;Invytra&rdquo; mean the Invytra team
        reachable at {email}.
      </InfoP>

      <InfoH2>Information we collect</InfoH2>
      <InfoP>We only collect information that is needed to respond to enquiries and deliver our services:</InfoP>
      <InfoList
        items={[
          <>
            <strong className="text-ink">Enquiry details</strong> — when you contact us by email, phone or WhatsApp,
            we receive your name, contact details and the contents of your message (for example your project topic,
            your child&rsquo;s class and subjects, or your event date).
          </>,
          <>
            <strong className="text-ink">Service details</strong> — if you become a client, we keep the material
            needed to do the work: project requirements and files, tutoring schedules and progress notes, or event
            details, photos and guest RSVP responses you ask us to manage.
          </>,
          <>
            <strong className="text-ink">Reviews</strong> — if you submit a review through this website, we store the
            name, category and text you provide so we can moderate and publish it.
          </>,
          <>
            <strong className="text-ink">Technical data</strong> — like most websites, our hosting may automatically
            record standard log data such as IP address, browser type and pages visited, used only for security and
            reliable operation.
          </>,
        ]}
      />

      <InfoH2>How we use information</InfoH2>
      <InfoList
        items={[
          "To reply to enquiries and provide quotations.",
          "To deliver the service you engaged us for (building a project, tutoring sessions, or an event website).",
          "To communicate about schedules, milestones, deliverables and support.",
          "To improve our services and this website, in aggregate and without identifying individuals.",
        ]}
      />
      <InfoP>
        We do not sell your personal information. We share it only with service providers who help us operate (for
        example hosting and email providers), only as far as they need it, or where required by law.
      </InfoP>

      <InfoH2>Cookies and advertising (Google AdSense)</InfoH2>
      <InfoP>
        This website uses Google AdSense to display advertising. In connection with this, third-party vendors,
        including Google, use cookies to serve ads based on your prior visits to this website or other websites on
        the internet. Specifically:
      </InfoP>
      <InfoList
        items={[
          "Google's use of advertising cookies enables it and its partners to serve ads to you based on your visits to this site and/or other sites on the Internet.",
          <>
            You may opt out of personalised advertising by visiting{" "}
            <a className="text-gold underline" href="https://www.google.com/settings/ads" target="_blank" rel="noreferrer">
              Google Ads Settings
            </a>
            .
          </>,
          <>
            You can learn more about how Google uses data from sites that use its services at{" "}
            <a className="text-gold underline" href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noreferrer">
              policies.google.com/technologies/partner-sites
            </a>
            , and opt out of some third-party vendors&rsquo; cookies at{" "}
            <a className="text-gold underline" href="https://www.aboutads.info/choices" target="_blank" rel="noreferrer">
              aboutads.info/choices
            </a>
            .
          </>,
          "Your browser can also be set to refuse cookies altogether; the site will continue to work, though some features may be less convenient.",
        ]}
      />
      <InfoP>
        Our own use of cookies is minimal and functional (for example remembering display preferences such as
        light/dark theme). We do not operate our own behavioural advertising profiles.
      </InfoP>

      <InfoH2>Data retention and security</InfoH2>
      <InfoP>
        Enquiry messages are kept for as long as needed to handle the enquiry and any resulting work. Client project
        files, tutoring records and event data are retained while the engagement is active and for a reasonable
        period afterwards for support and record-keeping. We apply sensible technical and organisational measures to
        protect stored information, but no internet transmission is completely secure.
      </InfoP>

      <InfoH2>Children&rsquo;s privacy</InfoH2>
      <InfoP>
        Invytra Learning provides tutoring for school students, arranged and paid for by a parent or guardian.
        Enquiries about a student&rsquo;s tutoring should be made by the parent or guardian, and we collect only the
        academic information needed to plan and deliver lessons.
      </InfoP>

      <InfoH2>Your choices</InfoH2>
      <InfoP>
        You may ask us at any time what personal information we hold about you, and request that we correct or delete
        it. Contact us at {email} and we will respond within a reasonable time.
      </InfoP>

      <InfoH2>Changes to this policy</InfoH2>
      <InfoP>
        If we change this policy materially, we will update this page and revise the date at the top. Continued use
        of the website after a change means you accept the updated policy.
      </InfoP>
    </InfoPage>
  );
}

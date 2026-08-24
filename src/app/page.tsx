import Nav from "@/components/chrome/Nav";
import Hero from "@/components/Hero";
import WhatIsInvytra from "@/components/WhatIsInvytra";
import LearnCreateCelebrate from "@/components/LearnCreateCelebrate";
import VentureChapter from "@/components/VentureChapter";
import FeaturedWork from "@/components/FeaturedWork";
import LiveContent from "@/components/LiveContent";
import StatsSection from "@/components/StatsSection";
import WhyInvytra from "@/components/WhyInvytra";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactExperience from "@/components/ContactExperience";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import OurSites from "@/components/OurSites";
import { getFeaturedWork, getOfferings, getSiteConfig, getStats, getTestimonials, getVentures } from "@/lib/data";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const [config, ventures, offerings, featured, stats, testimonials] = await Promise.all([
    getSiteConfig(),
    getVentures(),
    getOfferings(),
    getFeaturedWork(),
    getStats(),
    getTestimonials(),
  ]);

  const previewFor = (slug: string) =>
    offerings.find((o) => o.venture === slug && o.featured) ?? offerings.find((o) => o.venture === slug);

  return (
    <>
      <Nav brandName={config.brand.name} />
      <main className="has-custom-cursor">
        <Hero
          eyebrow={config.hero.eyebrow}
          titleLines={config.hero.titleLines}
          description={config.hero.description}
          primaryCTA={config.hero.primaryCTA}
          secondaryCTA={config.hero.secondaryCTA}
        />
        <WhatIsInvytra />
        <LearnCreateCelebrate />

        <div id="ventures">
          {ventures.map((venture, i) => (
            <VentureChapter key={venture.id} venture={venture} preview={previewFor(venture.slug)} index={i} />
          ))}
        </div>

        {config.settings.showFeatured ? <FeaturedWork items={featured} /> : null}

        <LiveContent items={offerings} />

        {config.settings.showStats ? <StatsSection stats={stats} /> : null}

        <WhyInvytra />

        {config.settings.showTestimonials ? <TestimonialsSection testimonials={testimonials} /> : null}

        <OurSites ventures={ventures} />

        <ContactExperience config={config} />

        <FinalCTA />
      </main>
      <Footer config={config} />
    </>
  );
}

import Nav from "@/components/chrome/Nav";
import Hero from "@/components/Hero";
import LearnCreateCelebrate from "@/components/LearnCreateCelebrate";
import Manifesto from "@/components/Manifesto";
import ServicesOverview from "@/components/ServicesOverview";
import BuildForEveryone from "@/components/BuildForEveryone";
import AboutSection from "@/components/AboutSection";
import FeaturedWork from "@/components/FeaturedWork";
import StatsSection from "@/components/StatsSection";
import WhyInvytra from "@/components/WhyInvytra";
import ProcessSection from "@/components/ProcessSection";
import CraftStack from "@/components/CraftStack";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactExperience from "@/components/ContactExperience";
import HomeFaq from "@/components/HomeFaq";
import FinalCTA from "@/components/FinalCTA";
import AdUnit from "@/components/AdUnit";
import MobileCtaBar from "@/components/MobileCtaBar";
import Footer from "@/components/Footer";
import { buildWhatsappLink } from "@/lib/whatsapp";
import { getFeaturedWork, getSiteConfig, getStats, getTestimonials } from "@/lib/data";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const [config, featured, stats, testimonials] = await Promise.all([
    getSiteConfig(),
    getFeaturedWork(),
    getStats(),
    getTestimonials(),
  ]);

  return (
    <>
      <Nav brandName={config.brand.name} />
      <main className="has-custom-cursor">
        {/* 1 · Kinetic hero */}
        <Hero
          eyebrow={config.hero.eyebrow}
          titleLines={config.hero.titleLines}
          description={config.hero.description}
          primaryCTA={config.hero.primaryCTA}
          secondaryCTA={config.hero.secondaryCTA}
        />
        <LearnCreateCelebrate />

        {/* 2 · Manifesto statement */}
        <Manifesto />

        {/* 3 · The divisions (services showcase) */}
        <ServicesOverview />

        {/* 4 · Built for everyone (audiences) */}
        <BuildForEveryone />

        <AdUnit />

        {/* 5 · Proof of work */}
        {config.settings.showFeatured ? <FeaturedWork items={featured} /> : null}

        {/* 6 · Numbered principles / advantages */}
        <WhyInvytra />

        {/* 7 · Our story */}
        <AboutSection />

        {/* 8 · Engineering ecosystem + how it works */}
        <CraftStack />
        <ProcessSection />

        {config.settings.showStats ? <StatsSection stats={stats} /> : null}

        {/* 9 · Voices */}
        {config.settings.showTestimonials ? <TestimonialsSection testimonials={testimonials} /> : null}

        <HomeFaq />

        <ContactExperience config={config} />

        <FinalCTA />
      </main>
      <Footer config={config} />
      <MobileCtaBar whatsappHref={buildWhatsappLink(config, "Hello Invytra, I would like to know more about your services.")} />
    </>
  );
}

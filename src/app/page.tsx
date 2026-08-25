import Nav from "@/components/chrome/Nav";
import Hero from "@/components/Hero";
import LearnCreateCelebrate from "@/components/LearnCreateCelebrate";
import ServicesOverview from "@/components/ServicesOverview";
import AboutSection from "@/components/AboutSection";
import FeaturedWork from "@/components/FeaturedWork";
import StatsSection from "@/components/StatsSection";
import WhyInvytra from "@/components/WhyInvytra";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactExperience from "@/components/ContactExperience";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
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
        <Hero
          eyebrow={config.hero.eyebrow}
          titleLines={config.hero.titleLines}
          description={config.hero.description}
          primaryCTA={config.hero.primaryCTA}
          secondaryCTA={config.hero.secondaryCTA}
        />
        <LearnCreateCelebrate />
        <ServicesOverview />

        {config.settings.showFeatured ? <FeaturedWork items={featured} /> : null}

        {config.settings.showStats ? <StatsSection stats={stats} /> : null}

        <WhyInvytra />

        {config.settings.showTestimonials ? <TestimonialsSection testimonials={testimonials} /> : null}

        <ContactExperience config={config} />

        <AboutSection />

        <FinalCTA />
      </main>
      <Footer config={config} />
    </>
  );
}

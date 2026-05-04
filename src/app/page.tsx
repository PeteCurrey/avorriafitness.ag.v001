import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { ProblemSection } from "@/components/problem-section";
import { PillarsSection } from "@/components/pillars-section";
import { FeaturesDeepDive } from "@/components/features-deep-dive";
import { DemoShowcase } from "@/components/demo-showcase";
import { PricingSection } from "@/components/pricing-section";
import { TrustBar } from "@/components/trust-bar";
import { FooterCta } from "@/components/footer-cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-brand-dark overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <PillarsSection />
      <FeaturesDeepDive />
      <DemoShowcase />
      <PricingSection />
      <TrustBar />
      <FooterCta />
      <Footer />
    </main>
  );
}

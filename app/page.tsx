import { CtaSection } from "@/components/home/cta-section";
import { FeaturesSection } from "@/components/home/features-section";
import { Footer } from "@/components/home/footer";
import { Header } from "@/components/home/Header";
import { HeroSection } from "@/components/home/hero-section";
import { PricingSection } from "@/components/home/pricing-section";
import { Button } from "@/components/ui/button";


export default function Home() {
  return (
    <div className="text-3xl">
      <Header/>
      <HeroSection/>
      <FeaturesSection/>
      <PricingSection/>
      <CtaSection/>
      <Footer/>
    </div>
  );
}

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import RiskSection from "@/components/RiskSection";
import IndustrySelector from "@/components/IndustrySelector";
import ProcessSection from "@/components/ProcessSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

import SEO from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Signal | Enterprise Technical Content Marketing"
        description="We combine enterprise AI speed with human expert verification to write technical content that builds authority, not liability."
        canonical="/"
      />
      <Navbar />
      <Hero />
      <RiskSection />
      <IndustrySelector />
      <ProcessSection />
      <PricingSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;

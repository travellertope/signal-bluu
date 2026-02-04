import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import RiskSection from "@/components/RiskSection";
import IndustrySelector from "@/components/IndustrySelector";
import ProcessSection from "@/components/ProcessSection";
import PricingSection from "@/components/PricingSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <RiskSection />
      <IndustrySelector />
      <ProcessSection />
      <PricingSection />
      <Footer />
    </div>
  );
};

export default Index;

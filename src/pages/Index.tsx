
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import SocialProofSection from "@/components/landing/SocialProofSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import ExamplesSection from "@/components/landing/ExamplesSection";
import StatsSection from "@/components/landing/StatsSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";
import { Share2, MessageSquare } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col font-inter">
      <Navbar />
      <HeroSection />
      <SocialProofSection />
      <HowItWorksSection />
      <FeaturesSection />
      <TestimonialsSection />
      <ExamplesSection />
      <StatsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;

import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import PricingSection from "@/components/home/PricingSection";
import FAQSection from "@/components/home/FAQSection";
import ContactSection from "@/components/home/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950">
      <HeroSection />
      <ServicesSection />
      <HowItWorksSection />
      <PricingSection />
      <FAQSection />
      <ContactSection />
    </main>
  );
}
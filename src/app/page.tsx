import FeatureSection from "@/components/FeatureSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import SupportSection from "@/components/SupportSection";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-dark-bg text-foreground">
      <HeroSection />
      <FeatureSection />
      <HowItWorks />
      <SupportSection />
      <Footer />
    </main>
  );
}

import CallToAction from "@/layout/CallToAction";
import FeaturesSection from "@/layout/FeaturesSection";
import HeroSection from "@/layout/HeroSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <HeroSection />
      <FeaturesSection />
      <CallToAction />
    </main>
  );
}

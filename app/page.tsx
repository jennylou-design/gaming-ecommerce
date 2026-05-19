import FloatingSidebar from "@/components/sidebar/FloatingSidebar";
import HeroSection from "@/components/layout/HeroSection";
import BentoGrid from "@/components/layout/BentoGrid";
import MouseGlow from "@/components/animations/MouseGlow";

export default function Home() {
  return (
    <main className="bg-[#050816] text-white overflow-hidden">
      <MouseGlow />
      
      <FloatingSidebar />

      <HeroSection />

      <BentoGrid />
    </main>
  );
}
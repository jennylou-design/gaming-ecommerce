import FloatingSidebar from "@/components/sidebar/FloatingSidebar";
import HeroSection from "@/components/layout/HeroSection";
import BentoGrid from "@/components/layout/BentoGrid";
import MouseGlow from "@/components/animations/MouseGlow";
import ProductShowcase from "@/components/products/ProductShowcase";
import Particles from "@/components/animations/Particles";
import CartDrawer from "@/components/layout/CartDrawer";

export default function Home() {
  return (
    <main className="bg-[#050816] text-white overflow-hidden">
      <MouseGlow /> 
      <Particles />
      <CartDrawer />
      
      <FloatingSidebar />

      <HeroSection />

      <BentoGrid />

      <ProductShowcase />
    </main>
  );
}
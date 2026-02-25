import { HeroSection } from "@/components/home/HeroSection";
import { ProductShowcase } from "@/components/home/ProductShowcase";
import { CompanyHighlights } from "@/components/home/CompanyHighlights";
import { CTASection } from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProductShowcase />
      <CompanyHighlights />
      <CTASection />
    </>
  );
}

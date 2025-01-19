import { CTAsection } from "@/components/landing-page/call-to-action-section";
import { HeroSection } from "@/components/landing-page/heroSection";
import { TestimonialCarouselSection } from "@/components/landing-page/testimonialsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TestimonialCarouselSection />
      <CTAsection />
    </>
  );
}

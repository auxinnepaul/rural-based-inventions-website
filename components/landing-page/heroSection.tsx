import { HeroWithMockup } from "../blocks/hero-with-mockup";

export function HeroSection() {
  return (
    <div className="">
      <HeroWithMockup
        title="Investing in Rural Growth and Development"
        description="We are committed to creating sustainable solutions that uplift rural communities and promote lasting change."
        primaryCta={{
          text: "See Who Are",
          href: "/about",
        }}
        secondaryCta={{
          text: "Let's Talk",
          href: "/contact",
        }}
        mockupImage={{
          alt: "AI Platform Dashboard",
          width: 748,
          height: 365,
          src: "https://images.unsplash.com/photo-1737157998574-2a75f0c52a09?q=80&w=1924&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }}
      />
    </div>
  );
}

import { CTAsection } from "@/components/landing-page/call-to-action-section";
import { HeroSection } from "@/components/landing-page/heroSection";
import { AchievementsAndImpactStories } from "@/components/landing-page/achievements-impactStories";
import { MissionFeature } from "@/components/landing-page/MissionFeature";

export default function Home() {
  return (
    <>
      <HeroSection />
      <MissionFeature />
      <AchievementsAndImpactStories />
      <CTAsection />
    </>
  );
}

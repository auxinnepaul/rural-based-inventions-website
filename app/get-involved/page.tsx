import { FadeInView } from "@/components/animations/FadeInView";
import { SlideInView } from "@/components/animations/SlideInView";
import { RotateInView } from "@/components/animations/RotateInView";
import { StaggerChildren } from "@/components/animations/StaggerChildren";
import VolunteerForm from "./VolunteerForm";
import OpportunityCard from "./OpportunityCard";

export default function GetInvolvedPage() {
  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-4 py-12">
        <FadeInView>
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-">
            Get Involved with RAN
          </h1>
        </FadeInView>

        <SlideInView direction="up" className="mt-3">
          <p className="text-xl text-center mb-12 max-w-3xl mx-auto custom-text-color">
            Join us in our mission to empower rural communities. There are many
            ways you can contribute to making a lasting impact.
          </p>
        </SlideInView>

        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          <SlideInView direction="left">
            <VolunteerForm />
          </SlideInView>

          <SlideInView direction="right">
            <div className="bg-zinc-100 dark:bg-neutral-900 p-8 rounded-lg shadow-xl">
              <h2 className="text-2xl font-semibold mb-4 text-primary">
                Why Get Involved?
              </h2>
              <ul className="list-disc list-inside space-y-2 custom-text-color text-lg">
                <li>Make a tangible difference in rural communities</li>
                <li>Gain valuable experience in sustainable development</li>
                <li>
                  Work with passionate individuals from diverse backgrounds
                </li>
                <li>Develop new skills and expand your network</li>
                <li>Be part of innovative solutions to rural challenges</li>
              </ul>
            </div>
          </SlideInView>
        </div>

        <RotateInView>
          <h2 className="text-3xl font-semibold text-center mb-8 text-primary">
            Volunteer Opportunities
          </h2>
        </RotateInView>

        <StaggerChildren>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <OpportunityCard
              title="Community Outreach"
              description="Engage with local communities to assess needs and promote our programs"
              commitment="Flexible, 5-10 hours/week"
            />
            <OpportunityCard
              title="Agricultural Support"
              description="Assist in implementing sustainable farming techniques and training programs"
              commitment="Seasonal, full-time during planting/harvest"
            />
            <OpportunityCard
              title="Education Initiatives"
              description="Teach or assist in our rural education programs, focusing on literacy and skill development"
              commitment="Part-time, 3-6 months commitment"
            />
          </div>
        </StaggerChildren>
      </main>
    </div>
  );
}

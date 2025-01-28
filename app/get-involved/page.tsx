import { FadeInView } from "@/components/animations/FadeInView";
import { SlideInView } from "@/components/animations/SlideInView";
import { RotateInView } from "@/components/animations/RotateInView";
import { StaggerChildren } from "@/components/animations/StaggerChildren";
import VolunteerForm from "./VolunteerForm";
import OpportunityCard from "./OpportunityCard";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export default function GetInvolvedPage() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <FadeInView>
          <div className="relative h-[400px] w-full overflow-hidden shadow-2xl rounded-md">
            {/* Background Image */}
            <Image
              src="https://images.unsplash.com/photo-1609668528780-e364738d8ba5?q=80&w=1921&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Rural landscape with a barn and fields"
              fill
              style={{ objectFit: "cover" }}
              quality={100}
              priority
              className="blur-sm scale-105"
            />

            <div className="absolute inset-0 bg-black/30 dark:bg-black/50 z-10"></div>

            <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
              <SlideInView direction="up">
                <Badge className="mb-2">Get Involved</Badge>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white dark:text-white">
                  Get Involved with RAN
                </h1>
                <p className="text-md sm:text-lg md:text-xl mb-6 text-white dark:text-gray-200 max-w-2xl">
                  Discover how Rural Advancement Network is making a lasting
                  impact in rural communities through our innovative and
                  sustainable projects.
                </p>
              </SlideInView>
            </div>
          </div>
        </FadeInView>

        <div className="grid md:grid-cols-2 gap-12 items-start py-10 md:py-16">
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
      </div>
    </div>
  );
}

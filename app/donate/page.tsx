import { FadeInView } from "@/components/animations/FadeInView";
import { SlideInView } from "@/components/animations/SlideInView";
import { ScaleInView } from "@/components/animations/ScaleInView";
import { RotateInView } from "@/components/animations/RotateInView";
import { StaggerChildren } from "@/components/animations/StaggerChildren";
import DonationForm from "./DonationForm";
import ImpactCard from "./ImpactCard";

export default function DonatePage() {
  return (
    <div className="min-h-screen ">
      <main className="container mx-auto px-4 py-12">
        <FadeInView>
          <h1 className="text-4xl font-bold text-center mb-8 text-green-800">
            Support Our Cause
          </h1>
        </FadeInView>

        <SlideInView direction="up">
          <p className="text-xl text-center text-gray-700 mb-12 max-w-3xl mx-auto">
            Your donation helps us empower rural communities through sustainable
            development, education, and healthcare initiatives.
          </p>
        </SlideInView>

        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          <SlideInView direction="left">
            <DonationForm />
          </SlideInView>

          <SlideInView direction="right">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4 text-green-700">
                Why Donate?
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Empower rural communities</li>
                <li>Support sustainable agriculture</li>
                <li>Improve access to healthcare</li>
                <li>Provide quality education</li>
                <li>Create lasting positive change</li>
              </ul>
            </div>
          </SlideInView>
        </div>

        <RotateInView>
          <h2 className="text-3xl font-semibold text-center mb-8 text-green-700">
            Your Impact
          </h2>
        </RotateInView>

        <StaggerChildren>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <ImpactCard
              amount="$25"
              description="Provides school supplies for a child in a rural community"
            />
            <ImpactCard
              amount="$50"
              description="Supports a farmer with sustainable agriculture training"
            />
            <ImpactCard
              amount="$100"
              description="Funds a mobile health clinic visit to a remote village"
            />
          </div>
        </StaggerChildren>

        <ScaleInView>
          <div className="bg-green-700 text-white rounded-lg p-8 text-center">
            <h2 className="text-3xl font-semibold mb-4">Other Ways to Help</h2>
            <p className="text-lg mb-6">
              Can&apos;t donate right now? You can still make a difference by
              volunteering your time or spreading awareness about our cause.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-white text-green-700 font-semibold py-2 px-6 rounded-full hover:bg-gray-100 transition duration-300">
                Volunteer
              </button>
              <button className="bg-white text-green-700 font-semibold py-2 px-6 rounded-full hover:bg-gray-100 transition duration-300">
                Share Our Story
              </button>
            </div>
          </div>
        </ScaleInView>
      </main>
    </div>
  );
}

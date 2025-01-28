import { FadeInView } from "@/components/animations/FadeInView";
import { SlideInView } from "@/components/animations/SlideInView";
import { ScaleInView } from "@/components/animations/ScaleInView";
import { RotateInView } from "@/components/animations/RotateInView";
import { StaggerChildren } from "@/components/animations/StaggerChildren";
import DonationForm from "./DonationForm";
import ImpactCard from "./ImpactCard";
import Image from "next/image";

export default function DonatePage() {
  return (
    <div className=" ">
      <SlideInView direction="up">
        <div className="relative overflow-hidden bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <div className="relative z-10 bg-slate-50 dark:bg-zinc-950 pb-6 md:pb-10 lg:max-w-2xl lg:w-full shadow-2xl">
              <div className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div className="sm:text-center lg:text-left">
                  <FadeInView>
                    <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
                      <span className="block xl:inline">Make a Difference</span>{" "}
                      <span className="block text-blue-600 dark:text-blue-400 xl:inline">
                        Support Our Cause
                      </span>
                    </h1>
                  </FadeInView>
                  <p className="mt-3 text-base text-gray-500 dark:text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    Your donation can change lives. Join us in our mission to
                    create lasting impact in rural communities through
                    innovative and sustainable projects.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <Image
              src="https://images.unsplash.com/photo-1538356343135-65849f66b4a1?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Rural community helped by donations"
              width={1920}
              height={1080}
              className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            />
          </div>
        </div>
      </SlideInView>
      <main className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          <SlideInView direction="left">
            <DonationForm />
          </SlideInView>

          <SlideInView direction="right">
            <div className="border p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4 text-blue-700">
                Why Donate?
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
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
          <h2 className="text-3xl font-semibold text-center mb-8 text-blue-700">
            Your Impact
          </h2>
        </RotateInView>

        <StaggerChildren>
          <div className="grid md:grid-cols-3 gap-8 mb-16 ">
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

        <div className="max-w-screen-md mx-auto text-center mt-10 md:py-16">
          <svg
            className="w-10 h-10 mx-auto mb-3 text-blue-700 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 14"
          >
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
          </svg>
          <blockquote>
            <p className="text-2xl italic font-medium text-gray-900 dark:text-white">
              &quot;Small acts, when multiplied by millions of people, can
              transform the world.&quot;
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center mt-6 space-x-3">
            <Image
              className="w-6 h-6 rounded-full"
              src="https://plus.unsplash.com/premium_photo-1701205421505-340ee702de8c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fGFmcmljYW4lMjB3b21hbiUyMGltYWdlfGVufDB8fDB8fHww"
              alt="profile picture"
              width={1920}
              height={1080}
            />
            <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
              <cite className="pr-3 text-blue-700 font-medium dark:text-white">
                Ann Balantidium
              </cite>
              <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">
                CEO at RAN
              </cite>
            </div>
          </figcaption>
        </div>
        <ScaleInView>
          <div className="bg-blue-700 text-white rounded-lg p-8 text-center">
            <h2 className="text-3xl font-semibold mb-4">Other Ways to Help</h2>
            <p className="text-lg mb-6">
              Can&apos;t donate right now? You can still make a difference by
              volunteering your time or spreading awareness about our cause.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-white text-blue-700 font-semibold py-2 px-6 rounded-full hover:bg-gray-100 transition duration-300">
                Volunteer
              </button>
              <button className="bg-white text-blue-700 font-semibold py-2 px-6 rounded-full hover:bg-gray-100 transition duration-300">
                Share Our Story
              </button>
            </div>
          </div>
        </ScaleInView>
      </main>
    </div>
  );
}

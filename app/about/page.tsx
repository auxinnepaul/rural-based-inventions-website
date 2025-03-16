import OurTeam from "./our-team";
import Image from "next/image";
import { FadeInView } from "@/components/animations/FadeInView";
import { SlideInView } from "@/components/animations/SlideInView";
import { ScaleInView } from "@/components/animations/ScaleInView";
import { RotateInView } from "@/components/animations/RotateInView";

import { Card, CardContent } from "@/components/ui/card";
import OurValues from "./our-values";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { APP_NAME } from "@/lib/constants";
import { NumberTicker } from "@/components/magic-ui/number-ticker";
import MissionVissionFocusSection from "./mission-vission";
import OurStorySection from "./our-story";

export default function FeatureSection() {
  return (
    <main className="min-h-screen mx-auto py-10 md">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1487546331507-fcf8a5d27ab3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Rural community"
            className="object-cover w-full h-full"
            width={500}
            height={300}
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 text-start text-white px-4 max-w-4xl mx-auto">
          <Badge className="mb-2">About Us</Badge>
          <p className="text-5xl md:text-7xl font-bold mb-6">
            We are {APP_NAME}
          </p>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            And our unwavering task is on empowering rural communities in Kenya
            through sustainable interventions. We are dedicated to driving
            positive change, fostering local development, and creating lasting
            impact where it matters most.
          </p>
          <Link href="/donate">
            <Button
              size="lg"
              className="bg-white text-green-700 hover:bg-gray-100"
            >
              Support Our Mission <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
      <section className="py-16 md:py-32">
        <div className="container mx-auto px-4 py-12  space-y-8 md:space-y-12">
          <div className="relative z-10 max-w-2xl space-y-6">
            <FadeInView>
              <h2 className="text-4xl font-medium lg:text-5xl max-w-xl">
                About {APP_NAME}
              </h2>
            </FadeInView>

            <SlideInView direction="right" delay={0.2}>
              <p className="text-lg md:text-xl">
                We a non-governmental organization dedicated to improving the
                lives of people in rural communities. We believe in sustainable
                development, education, and empowerment to create lasting
                positive change.
              </p>
              <p className="text-lg md:text-xl mt-6">
                We believe in empowerment as a cornerstone of our mission.
                Empowerment means enabling individuals and communities to take
                control of their own destinies, fostering self-reliance and
                resilience. We champion equality, ensuring that every community
                member, regardless of gender, age, or background, has equal
                access to opportunities and resources.
              </p>
            </SlideInView>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div>
              <FadeInView>
                <p className="text-lg md:text-xl font-bold">
                  Through innovation and dedication, we strive to uplift and
                  impact lives, creating opportunities for growth and
                  sustainability.
                </p>
              </FadeInView>

              <div className="mb-12 mt-12 grid grid-cols-2 gap-2 md:mb-0">
                <div className="space-y-4">
                  <div className="bg-linear-to-r from-zinc-950 to-zinc-600 bg-clip-text text-5xl font-bold  dark:from-white dark:to-zinc-800">
                    +
                    <NumberTicker value={100000} />
                  </div>
                  <p>Lives to transform</p>
                </div>
                <div className="space-y-4">
                  <div className="bg-linear-to-r from-zinc-950 to-zinc-600 bg-clip-text text-5xl font-bold  dark:from-white dark:to-zinc-800">
                    +
                    <NumberTicker value={10000} />
                  </div>
                  <p>Lives already touched</p>
                </div>
              </div>
            </div>
            <div className="relative space-y-4">
              <blockquote className="border-l-4 pl-4">
                <p className="text-lg md:text-xl">
                  At the heart of our mission lies a dedication to building
                  resilient, thriving communities. These communities are the
                  beneficiaries and driving force behind our work. Our mission
                  isn't just words on paper; it's the driving force behind every
                  initiative we undertake.
                </p>

                <div className="mt-6 space-y-3">
                  <cite className="block font-medium">
                    Balantidium, CEO, {APP_NAME}
                  </cite>
                  <img
                    className="h-5 w-fit dark:invert"
                    src="https://html.tailus.io/blocks/customers/nvidia.svdg"
                    alt="App Logo"
                    height="20"
                    width="auto"
                  />
                </div>
              </blockquote>
            </div>
          </div>
        </div>
      </section>
      <MissionVissionFocusSection />
      <OurStorySection />
      <OurValues />
      <OurTeam />
      <div className="">
        <div className="container mx-auto px-4 py-12">
          <ScaleInView delay={0.4}>
            <div className=" border bg-stone-600 dark:bg-stone-950 text-white rounded-lg p-8 text-center">
              <h2 className="text-3xl font-semibold mb-4">Join Our Cause</h2>
              <p className="text-lg mb-6">
                Together, we can make a difference in rural communities.
                Volunteer, donate, or spread the word about our mission.
              </p>
              <Link href={"/get-involved"}>
                <Button className="font-semibold py-2 px-6 rounded-full transition duration-300">
                  Get Involved
                </Button>
              </Link>
            </div>
          </ScaleInView>
        </div>
      </div>
    </main>
  );
}

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

export default function FeatureSection() {
  return (
    <main className="min-h-screen max-w-[1600px] mx-auto py-10 md">
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
            We are Rural Advancement Network (RAN-KENYA)
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

      <div className="">
        <div className="container mx-auto px-4 py-12">
          <div className="dark:bg-card dark:shadow-[2px_2px_4px_rgba(0,0,0,0.4),-1px_-1px_3px_rgba(255,255,255,0.1)] p-6 rounded-lg">
            <FadeInView>
              <h1 className="text-4xl font-bold text-center mb-8 text-green-800">
                About Rural Advancement Network
              </h1>
            </FadeInView>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <SlideInView direction="left">
                <Image
                  src="https://images.unsplash.com/photo-1504634482029-3b2b5d57d4b6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHJ1cmFsJTIwd2V0bGFuZHMlMjBhZnJpY2FuJTIwYXJlYXxlbnwwfHwwfHx8MA%3D%3D"
                  alt="Rural community"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </SlideInView>
              <SlideInView direction="right" delay={0.2}>
                <div className="text-gray-600 dark:text-gray-400 ">
                  <p className="text-lg md:text-xl leading-relaxed mt-2">
                    We a non-governmental organization dedicated to improving
                    the lives of people in rural communities. We believe in
                    sustainable development, education, and empowerment to
                    create lasting positive change.
                  </p>
                  <p className="text-lg md:text-xl leading-relaxed mt-2">
                    We believe in empowerment as a cornerstone of our mission.
                    Empowerment means enabling individuals and communities to
                    take control of their own destinies, fostering self-reliance
                    and resilience. We champion equality, ensuring that every
                    community member, regardless of gender, age, or background,
                    has equal access to opportunities and resources.
                  </p>
                  <p className="text-lg md:text-xl leading-relaxed mt-2">
                    At the heart of our mission lies a dedication to building
                    resilient, thriving communities. These communities are the
                    beneficiaries and driving force behind our work. Our mission
                    isn&apos;t just words on paper; it&apos;s the driving force
                    behind every initiative we undertake.
                  </p>
                </div>
              </SlideInView>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4 py-6 md:py-10">
            <div>
              <Card className="dark:bg-stone-950 p-2 md:p-4">
                <CardContent>
                  <RotateInView>
                    <h2 className="text-3xl font-bold text-center mb-8 text-green-700">
                      OUR MISSION
                    </h2>
                  </RotateInView>
                  <FadeInView delay={0.3}>
                    <p className="text-xl text-start text-gray-600 dark:text-gray-400  mb-12 max-w-3xl mx-auto">
                      Our mission is clear and resolute: to uplift and transform
                      the lives of rural communities in Kenya. We are dedicated
                      to implementing sustainable interventions that address
                      pressing challenges and promote local development.
                    </p>
                  </FadeInView>
                </CardContent>
              </Card>
            </div>
            <div>
              <Card className="dark:bg-stone-950 p-2 md:p-4">
                <CardContent>
                  <RotateInView>
                    <h2 className="text-3xl font-bold text-center mb-8 text-green-700">
                      OUR FOCUS
                    </h2>
                  </RotateInView>
                  <FadeInView delay={0.3}>
                    <p className="text-xl text-start dark:text-gray-400 mb-12 max-w-3xl mx-auto">
                      Our focus extends beyond short-term fixes; we&apos;re
                      dedicated to fostering long-lasting, positive change.
                      Through collaboration and a deep understanding of the
                      local context, we strive to promote local development and
                      improve the quality of life for all.
                    </p>
                  </FadeInView>
                </CardContent>
              </Card>
            </div>
          </div>

          <OurValues />
          <OurTeam />
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

"use client";

import Image from "next/image";
import { FadeInView } from "@/components/animations/FadeInView";
import { SlideInView } from "@/components/animations/SlideInView";
import { ScaleInView } from "@/components/animations/ScaleInView";
import { RotateInView } from "@/components/animations/RotateInView";
import { StaggerChildren } from "@/components/animations/StaggerChildren";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Heart, Sprout, BookOpen, Users, MoveRight } from "lucide-react";
import { WorkCards } from "./WorkCards";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export default function OurWorkPage() {
  return (
    <>
      <FadeInView>
        <div className="relative h-[650px] overflow-hidden bg-blue-100 dark:bg-zinc-900 py-2 md:py-10">
          <div className="absolute inset-0 bg-blue-300 dark:bg-slate-950 transform -skew-y-6 origin-top-left"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between h-full px-4 md:px-0 max-w-[1400px] mx-auto">
            <div className="text-white md:w-1/2 mb-8 md:mb-0 py-16 md:py-10">
              <Badge className="mb-2">Our Work</Badge>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
                Empowering Rural Communities
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-xl">
                At Rural Advancement Network, we&apos;re dedicated to
                transforming lives and fostering sustainable development in
                rural Kenya.
              </p>
              <Link
                href="/projects"
                className="inline-block bg-white text-primary font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:bg-green-50 hover:scale-105 shadow-md"
              >
                <div className="flex flee-col">
                  <p>Explore more Works projects</p>
                  <MoveRight className=" animate-bounce" />
                </div>
              </Link>
            </div>
            <div className="md:w-1/2 relative h-64 md:h-full">
              <Image
                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                alt="Rural landscape"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg shadow-2xl"
                quality={100}
                priority
              />
            </div>
          </div>
        </div>
      </FadeInView>

      <main className="py-16">
        <div className="container mx-auto px-2">
          <SlideInView direction="up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                Impact Areas
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We focus on key areas that create lasting change in rural
                communities
              </p>
            </div>
          </SlideInView>

          <StaggerChildren className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <Sprout className="h-12 w-12 text-green-600" />,
                title: "Sustainable Agriculture",
                description:
                  "Empowering farmers with innovative techniques and resources to increase crop yields and ensure food security.",
              },
              {
                icon: <BookOpen className="h-12 w-12 text-blue-600" />,
                title: "Education",
                description:
                  "Providing access to quality education and vocational training to unlock opportunities for rural youth.",
              },
              {
                icon: <Heart className="h-12 w-12 text-red-600" />,
                title: "Healthcare",
                description:
                  "Improving access to essential healthcare services and promoting community health initiatives.",
              },
              {
                icon: <Users className="h-12 w-12 text-purple-600" />,
                title: "Community Development",
                description:
                  "Fostering strong, self-reliant communities through leadership training and local empowerment programs.",
              },
            ].map((area, index) => (
              <ScaleInView key={index} delay={index * 0.1}>
                <Card className="text-center dark:bg-gray-800 dark:text-gray-100">
                  <CardHeader>
                    <div className="mx-auto">{area.icon}</div>
                    <CardTitle className="text-xl font-semibold">
                      {area.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="dark:text-gray-300">
                      {area.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </ScaleInView>
            ))}
          </StaggerChildren>
        </div>
        <div>
          <div className="container mx-auto px-2">
            <SlideInView direction="up" className="mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                Our Work in Action
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10 text-center">
                Explore our impactful projects dedicated to empowering
                communities through sustainable solutions, education, and
                innovation.
              </p>
            </SlideInView>
          </div>
          <WorkCards />
        </div>

        <div className="container mx-auto px-2">
          <RotateInView>
            <div className="mt-24 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-6 ">Our Approach</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                At RAN, we believe in sustainable, community-driven development.
                Our approach is rooted in:
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-4">
                <li>
                  Empowering local communities to lead their own development
                </li>
                <li>
                  Fostering partnerships with local organizations and government
                  entities
                </li>
                <li>
                  Implementing innovative, scalable solutions tailored to rural
                  contexts
                </li>
                <li>
                  Promoting environmental sustainability in all our initiatives
                </li>
                <li>
                  Ensuring transparency and accountability in our operations
                </li>
              </ul>
            </div>
          </RotateInView>
        </div>
      </main>
    </>
  );
}

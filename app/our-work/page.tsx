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
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Sprout, BookOpen, Users } from "lucide-react";
import { WorkCards } from "./WorkCards";
import Link from "next/link";

export default function OurWorkPage() {
  return (
    <div className="min-h-screen">
      <FadeInView>
        <section className="relative py-24 text-white overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Rural landscape"
              layout="fill"
              objectFit="cover"
              className="opacity-30"
            />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Empowering Rural Communities
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mb-8">
              At Rural Advancement Network, we&apos;re dedicated to transforming
              lives and fostering sustainable development in rural Kenya.
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
      </FadeInView>

      <main className="container mx-auto px-4 py-16">
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

        <SlideInView direction="up" className="mt-24">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Our Work in Action
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10 text-center">
            Explore our impactful projects dedicated to empowering communities
            through sustainable solutions, education, and innovation.
          </p>
        </SlideInView>

        <WorkCards />

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
      </main>
    </div>
  );
}

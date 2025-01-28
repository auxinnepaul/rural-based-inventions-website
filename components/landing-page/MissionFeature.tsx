import { FadeInView } from "@/components/animations/FadeInView";
import { SlideInView } from "@/components/animations/SlideInView";
import { ScaleInView } from "@/components/animations/ScaleInView";
import { Heart, Users, Leaf, Globe, ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { Badge } from "../ui/badge";

export function MissionFeature() {
  const features = [
    {
      icon: <Users className="h-8 w-8 text-blue-500" />,
      title: "Community-Led",
      description:
        "RAN is a woman-led community-based organization empowering the Abanyala fisher indigenous people and local communities in Western Kenya.",
    },
    {
      icon: <Heart className="h-8 w-8 text-red-500" />,
      title: "Empowerment & Advocacy",
      description:
        "We advance rights, improve health, and restore human dignity through advocacy and fostering self-determination.",
    },
    {
      icon: <Leaf className="h-8 w-8 text-green-500" />,
      title: "Environmental Stewardship",
      description:
        "Our wetland community conservation approach promotes sustainable livelihoods and environmental protection.",
    },
    {
      icon: <Globe className="h-8 w-8 text-purple-500" />,
      title: "Cultural Preservation",
      description:
        "RAN strengthens relationships with the environment, culture, and traditions of indigenous communities.",
    },
  ];

  return (
    <section className="py-10 md:py-16 my-10 md:my-16 bg-gradient-to-b from-blue-50 to-white dark:from-zinc-800 dark:to-neutral-900">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <Badge className="mb-2"> Our Mission</Badge>
            <FadeInView>
              <p className="mt-2 text-2xl md:text-6xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                Transforming Rural Communities, Cultivating Prosperity
              </p>
            </FadeInView>
            <SlideInView direction="up">
              <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-300 lg:mx-auto">
                We&apos;re making rural areas more than just habitable –
                we&apos;re creating thriving communities where peace of mind and
                opportunity flourish beyond what you&apos;d find in bustling
                towns.
              </p>
            </SlideInView>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {features.map((feature) => (
                <ScaleInView key={feature.title} className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 dark:bg-blue-600 text-white">
                      {/* <feature.icon className="h-6 w-6" aria-hidden="true" /> */}
                      {feature.icon}
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-white">
                      {feature.title}
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-300">
                    {feature.description}
                  </dd>
                </ScaleInView>
              ))}
            </dl>
          </div>
          <FadeInView delay={0.4}>
            <div className="mt-16 text-center">
              <p className="text-lg text-gray-700 dark:text-gray-200 max-w-4xl mx-auto">
                Our long-standing commitment is to help communities flourish and
                thrive in the face of climate threats and challenges, ensuring a
                sustainable future for generations to come.
              </p>
            </div>
          </FadeInView>
          <div className="mt-10 text-center">
            <Link
              href="/projects"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition duration-150 ease-in-out"
            >
              Discover Our Impact
              <ArrowRightIcon
                className="ml-2 -mr-1 h-5 w-5"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>

        <FadeInView delay={0.4}>
          <div className="mt-16 text-center">
            <p className="text-lg text-gray-700 dark:text-gray-200 max-w-4xl mx-auto">
              Our long-standing commitment is to help communities flourish and
              thrive in the face of climate threats and challenges, ensuring a
              sustainable future for generations to come.
            </p>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}

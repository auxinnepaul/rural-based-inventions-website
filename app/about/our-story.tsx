import Image from "next/image";
import { Calendar, MapPin, Users } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { APP_NAME } from "@/lib/constants";
import { FadeInView } from "@/components/animations/FadeInView";
import { ScaleInView } from "@/components/animations/ScaleInView";

export default function OurStorySection() {
  return (
    <section className="py-14 md:py-20  bg-muted">
      <div className="container mx-auto px-2 md:px-0">
        <div className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <FadeInView>
                <div className="space-y-4">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Our Story
                  </h1>
                  <p className="text-muted-foreground md:text-xl">
                    The {APP_NAME} was founded with a simple yet powerful
                    vision: to create thriving, sustainable rural communities
                    where people can live with dignity and opportunity.
                  </p>
                </div>
              </FadeInView>
              <div className="relative h-[400px] overflow-hidden rounded-lg">
                <Image
                  src="https://images.unsplash.com/photo-1522543558187-768b6df7c25c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UnVyYWwlMjBhZnJpY2FuJTIwY29tbXVuaXR5JTIwZ2F0aGVyaW5nfGVufDB8fDB8fHww"
                  alt="Rural community gathering"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        <ScaleInView delay={0.4}>
          <section className="w-full py-12 md:py-16">
            <div className="container px-4 md:px-6">
              <div className="mx-auto max-w-7xl space-y-8">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Our Beginning</h3>
                  <p className="text-muted-foreground">
                    {APP_NAME} was established in 2024 by a group of community
                    organizers, farmers, and rural development specialists who
                    recognized that rural communities faced unique challenges
                    that required dedicated attention and specialized
                    approaches.
                  </p>
                  <p className="text-muted-foreground">
                    What began as a small grassroots initiative in three
                    counties has grown into a network that spans multiple
                    states, connecting rural communities with resources,
                    expertise, and each other.
                  </p>
                </div>

                <div className="relative h-[400px] overflow-hidden rounded-lg my-8">
                  <Image
                    src="https://images.unsplash.com/photo-1527525443983-6e60c75fff46?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Rural landscape with community members working together"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Our Growth</h3>
                  <p className="text-muted-foreground">
                    Over the years, we've expanded our programs to address the
                    evolving needs of rural communities. From agricultural
                    innovation and small business development to healthcare
                    access and broadband connectivity, our work touches on all
                    aspects of rural life.
                  </p>
                  <p className="text-muted-foreground">
                    Today, {APP_NAME} works with over 200 communities across the
                    region, providing technical assistance, training, and
                    advocacy support to help rural residents build the future
                    they envision for themselves.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </ScaleInView>

        <FadeInView>
          <section className="w-full py-12 md:py-16 bg-muted">
            <div className="container px-4 md:px-6">
              <div className="space-y-4 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Our Impact
                </h2>
                <p className="text-muted-foreground md:text-xl max-w-3xl mx-auto">
                  For nearly a decade, we've been working alongside rural
                  communities to create lasting change.
                </p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center gap-2 text-primary">
                      <Users className="h-5 w-5" />
                      <span className="font-medium">Community Development</span>
                    </div>
                    <h3 className="text-2xl font-bold">50,000+</h3>
                    <p className="text-muted-foreground">
                      Rural residents served through our community development
                      programs
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center gap-2 text-primary">
                      <MapPin className="h-5 w-5" />
                      <span className="font-medium">Geographic Reach</span>
                    </div>
                    <h3 className="text-2xl font-bold">200+</h3>
                    <p className="text-muted-foreground">
                      Communities across the region where we've implemented
                      programs
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center gap-2 text-primary">
                      <Calendar className="h-5 w-5" />
                      <span className="font-medium">Years of Service</span>
                    </div>
                    <h3 className="text-2xl font-bold">18 Years</h3>
                    <p className="text-muted-foreground">
                      Of dedicated service to rural communities since our
                      founding in 2005
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </FadeInView>
      </div>
    </section>
  );
}

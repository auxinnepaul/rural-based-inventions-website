import { FadeInView } from "@/components/animations/FadeInView";
import { CardContent, CardHeader } from "@/components/ui/card";
import { Settings2, Sparkles, Zap } from "lucide-react";
import { ReactNode } from "react";

export default function MissionVisionFocusSection() {
  return (
    <section className="bg-zinc-50 py-16 md:py-32 dark:bg-zinc-900">
      <div className="mx-auto px-6 max-w-7xl">
        <div className="text-center">
          <h2 className="text-4xl font-semibold lg:text-5xl text-zinc-900 dark:text-white">
            Empowering Rural Communities
          </h2>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-300 mx-auto max-w-2xl p-4">
            We are committed to fostering sustainable growth, innovation, and
            self-reliance in rural areas through technology, education, and
            community-driven initiatives.
          </p>
        </div>

        <div className="mx-auto mt-8 grid max-w-sm divide-y overflow-hidden shadow-md md:mt-16 md:max-w-[1600px] md:grid-cols-3 md:divide-x md:divide-y-0 bg-white dark:bg-zinc-800 rounded-xl">
          <FadeInView delay={0.3}>
            <FeatureCard
              icon={<Zap className="size-6" aria-hidden />}
              title="OUR MISSION"
              description="Our mission is clear and resolute: to uplift and transform the lives of rural communities in Kenya. We are dedicated to implementing sustainable interventions that address pressing challenges and promote local development."
            />
          </FadeInView>

          <FadeInView delay={0.3}>
            <FeatureCard
              icon={<Settings2 className="size-6" aria-hidden />}
              title="OUR VISION"
              description="Our vision is to create self-sustaining communities empowered with the tools, knowledge, and infrastructure needed for long-term prosperity and growth."
            />
          </FadeInView>

          <FadeInView delay={0.3}>
            <FeatureCard
              icon={<Sparkles className="size-6" aria-hidden />}
              title="OUR FOCUS"
              description="Our focus extends beyond short-term fixes; we're dedicated to fostering long-lasting, positive change. Through collaboration and a deep understanding of the local context, we strive to promote local development and improve the quality of life for all."
            />
          </FadeInView>
        </div>
      </div>
    </section>
  );
}

const FeatureCard = ({
  icon,
  title,
  description,
}: {
  icon: ReactNode;
  title: string;
  description: string;
}) => (
  <div className="group p-6">
    <CardHeader className="pb-3">
      <CardDecorator>{icon}</CardDecorator>
      <h3 className="mt-6 font-bold text-lg text-zinc-900 dark:text-white">
        {title}
      </h3>
    </CardHeader>
    <CardContent>
      <p className="text-sm md:text-lg text-zinc-600 dark:text-zinc-300">
        {description}
      </p>
    </CardContent>
  </div>
);

const CardDecorator = ({ children }: { children: ReactNode }) => (
  <div className="relative mx-auto size-36 flex items-center justify-center border-l border-t dark:border-zinc-700">
    <div className="size-12 flex items-center justify-center bg-white dark:bg-zinc-800 rounded-full shadow-md">
      {children}
    </div>
  </div>
);

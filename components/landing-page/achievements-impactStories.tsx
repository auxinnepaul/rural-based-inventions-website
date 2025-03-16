import { FadeInView } from "@/components/animations/FadeInView";
import { ScaleInView } from "@/components/animations/ScaleInView";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Droplet, School, Sprout } from "lucide-react";
import { Marquee } from "../magic-ui/marquee";
import { SlideInView } from "../animations/SlideInView";
import { RotateInView } from "../animations/RotateInView";
import { NumberTicker } from "../magic-ui/number-ticker";
import Image from "next/image";

const testimonials = [
  {
    name: "Akinyi Ochieng",
    title: "Founder of West Water",
    avatar:
      "https://images.unsplash.com/photo-1523824921871-d6f1a15151f1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFmcmljYW4lMjBwZXBsZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
    quote:
      "Thanks to RAN's sustainable farming program, I've doubled my crop yield and can now afford to send all my children to school.",
    impact: "Increased income by 120%",
  },
  {
    name: "Sue Owino",
    title: "Chairlady Women Inclusive Org",
    avatar:
      "https://images.unsplash.com/photo-1533146692536-e70f31e14b36?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGFmcmljYW4lMjBwZXBsZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
    quote:
      "The women's empowerment workshop gave me the skills and confidence to start my own small business. I'm now financially independent.",
    impact: "Started a successful local business",
  },
  {
    name: "Barasa Enock",
    title: "Jesus Ministry Church Postor",
    avatar:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fGFmcmljYW4lMjBwZXBsZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
    quote:
      "RAN's clean water project in our village has significantly reduced waterborne diseases. Our children are healthier and attend school more regularly.",
    impact: "50% reduction in waterborne diseases",
  },
];

const achievements = [
  {
    icon: <Users className="h-12 w-12 text-blue-500" />,
    title: "Lives Impacted",
    value: "50000",
    description: "Community members reached through our programs",
    imageUrl:
      "https://images.unsplash.com/photo-1599962417947-6f2cbfef84e3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fExpdmVzJTIwSW1wYWN0ZWR8ZW58MHx8MHx8fDA%3D",
  },
  {
    icon: <Droplet className="h-12 w-12 text-cyan-500" />,
    title: "Clean Water Access",
    value: "30",
    description: "Villages provided with sustainable water solutions",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1676231363860-b6ad0de309af?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    icon: <School className="h-12 w-12 text-yellow-500" />,
    title: "Education Support",
    value: "5000",
    description: "Children supported with educational resources",
    imageUrl:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    icon: <Sprout className="h-12 w-12 text-green-500" />,
    title: "Sustainable Farming",
    value: "1000",
    description:
      "Farmers trained in eco-friendly agricultural practices Children supported with educational resources",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1679428401908-1ebebf678cb4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export function AchievementsAndImpactStories() {
  return (
    <section className="py-16">
      <div className="max-w-[1200px] mx-auto py-10 md:py-10">
        <RotateInView>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 text-black dark:text-green-100">
            Our Key Achievements
          </h2>
        </RotateInView>
        <FadeInView>
          <p className="text-xl text-center text-gray-600 dark:text-gray-300 mb-2 max-w-3xl mx-auto">
            We have successfully implemented numerous projects aimed at
            enhancing sustainable development in rural communities.
          </p>
        </FadeInView>

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background ">
          <Marquee pauseOnHover className="[--duration:20s] h-[400px]">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {achievements.map((achievement, index) => (
                <ScaleInView key={index} delay={index * 0.1}>
                  <Card className="text-center h-full w-[500px] bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
                    {/* Background Image */}
                    <div
                      className="absolute inset-0 bg-cover bg-center rounded-lg opacity-30"
                      style={{
                        backgroundImage: `url('${achievement.imageUrl}')`,
                      }}
                    />
                    <CardHeader className="relative z-10">
                      <div className="mx-auto mb-4">{achievement.icon}</div>
                      <CardTitle className="text-xl font-semibold text-gray-800 dark:text-gray-100 z-10">
                        {achievement.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <p className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                        <NumberTicker
                          value={Number(achievement.value)}
                          className="whitespace-pre-wrap text-8xl font-medium tracking-tighter text-blue-600 dark:text-white"
                        />
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg">
                        {achievement.description}
                      </p>
                    </CardContent>
                  </Card>
                </ScaleInView>
              ))}
            </div>
          </Marquee>
          <h2 className="text-3xl md:text-4xl font-bold text-center mt-4 mb-2 text-black dark:text-green-100">
            Impact Stories
          </h2>
          <Marquee reverse pauseOnHover className="[--duration:20s]  ">
            <div className=" ">
              <div className="grid items-center gap-6 grid-cols-2 md:grid-cols-3">
                {testimonials.map((item, idx) => (
                  <Card
                    key={idx}
                    className="shadow-md h-full w-[500px] dark:bg-stone-900"
                  >
                    <CardContent className="p-4">
                      <svg
                        className="w-9 h-9 text-gray-300"
                        viewBox="0 0 35 35"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.47895 14.5833C9.15374 14.5833 8.84166 14.6329 8.53103 14.6781C8.63166 14.3398 8.7352 13.9956 8.90145 13.6865C9.0677 13.2373 9.32728 12.8479 9.58541 12.4556C9.80124 12.0312 10.1819 11.7439 10.4619 11.3808C10.755 11.0279 11.1546 10.7931 11.471 10.5C11.7817 10.1937 12.1885 10.0406 12.5123 9.82478C12.8506 9.63082 13.1452 9.41645 13.4602 9.31437L14.2462 8.99062L14.9375 8.70332L14.2302 5.87708L13.3596 6.08707C13.081 6.15707 12.7412 6.23874 12.3548 6.33645C11.9596 6.40937 11.5381 6.60916 11.0685 6.79145C10.6048 6.99853 10.0681 7.13853 9.56937 7.47103C9.0677 7.78895 8.48874 8.05437 7.97833 8.4802C7.48395 8.91916 6.88749 9.29978 6.44708 9.85833C5.96583 10.3804 5.49041 10.9287 5.12145 11.5529C4.69416 12.1479 4.40395 12.8012 4.0977 13.4473C3.82062 14.0933 3.59749 14.754 3.4152 15.3956C3.06958 16.6819 2.91499 17.904 2.8552 18.9496C2.80562 19.9967 2.83478 20.8673 2.89603 21.4973C2.91791 21.7948 2.95874 22.0835 2.98791 22.2833L3.02437 22.5283L3.06228 22.5196C3.32167 23.7312 3.91877 24.8446 4.78452 25.7311C5.65028 26.6175 6.7493 27.2408 7.95447 27.5287C9.15963 27.8166 10.4217 27.7575 11.5946 27.3581C12.7676 26.9587 13.8035 26.2354 14.5825 25.2719C15.3616 24.3083 15.8519 23.1439 15.9969 21.9133C16.1418 20.6828 15.9353 19.4363 15.4014 18.3181C14.8675 17.2 14.028 16.2558 12.9799 15.5949C11.9318 14.934 10.718 14.5832 9.47895 14.5833ZM25.5206 14.5833C25.1954 14.5833 24.8833 14.6329 24.5727 14.6781C24.6733 14.3398 24.7769 13.9956 24.9431 13.6865C25.1094 13.2373 25.369 12.8479 25.6271 12.4556C25.8429 12.0312 26.2235 11.7439 26.5035 11.3808C26.7967 11.0279 27.1962 10.7931 27.5127 10.5C27.8233 10.1937 28.2302 10.0406 28.554 9.82478C28.8923 9.63082 29.1869 9.41645 29.5019 9.31437L30.2879 8.99062L30.9792 8.70332L30.2719 5.87708L29.4012 6.08707C29.1227 6.15707 28.7829 6.23874 28.3965 6.33645C28.0012 6.40937 27.5798 6.60916 27.1102 6.79145C26.6479 6.99999 26.1098 7.13853 25.611 7.47249C25.1094 7.79041 24.5304 8.05582 24.02 8.48166C23.5256 8.92062 22.9292 9.30124 22.4887 9.85833C22.0075 10.3804 21.5321 10.9287 21.1631 11.5529C20.7358 12.1479 20.4456 12.8012 20.1394 13.4473C19.8623 14.0933 19.6392 14.754 19.4569 15.3956C19.1112 16.6819 18.9567 17.904 18.8969 18.9496C18.8473 19.9967 18.8765 20.8673 18.9377 21.4973C18.9596 21.7948 19.0004 22.0835 19.0296 22.2833L19.066 22.5283L19.104 22.5196C19.3633 23.7312 19.9604 24.8446 20.8262 25.7311C21.6919 26.6175 22.791 27.2408 23.9961 27.5287C25.2013 27.8166 26.4634 27.7575 27.6363 27.3581C28.8093 26.9587 29.8452 26.2354 30.6242 25.2719C31.4033 24.3083 31.8936 23.1439 32.0385 21.9133C32.1834 20.6828 31.977 19.4363 31.4431 18.3181C30.9092 17.2 30.0697 16.2558 29.0216 15.5949C27.9735 14.934 26.7597 14.5832 25.5206 14.5833Z"
                          fill="currentColor"
                        />
                      </svg>
                      <blockquote className="text-gray-800 dark:text-indigo-50 text-lg font-semibold py-2">
                        {item.quote}
                      </blockquote>
                      <div className="flex items-center gap-x-4 p-4 mt-6 bg-indigo-50">
                        <Image
                          src={item.avatar}
                          alt=""
                          className="w-16 h-16 rounded-full border-2 border-indigo-500"
                          width={1920}
                          height={1080}
                        />
                        <div>
                          <span className="block text-gray-800 font-semibold">
                            {item.name}
                          </span>
                          <span className="block text-indigo-600 text-sm mt-0.5">
                            {item.title}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </Marquee>
          <SlideInView direction="up">
            <p className="text-xl text-center text-gray-600 dark:text-gray-300 mt-2 mb-12 max-w-3xl mx-auto">
              Real stories of change from the communities we serve. See how RAN
              is making a difference in people&apos;s lives.
            </p>
          </SlideInView>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
        </div>
      </div>
    </section>
  );
}

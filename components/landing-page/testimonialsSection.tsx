import Image from "next/image";
import { TestimonialCarousel } from "../blocks/testimonials-block";

const TESTIMONIAL_DATA = [
  {
    id: 1,
    name: "Emily Roberts",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    description:
      "Working with the Rural Advancement Network has been an eye-opening experience. The impact they’re making is truly remarkable.",
  },
  {
    id: 2,
    name: "James Thompson",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    description:
      "A great initiative that’s helping to transform rural communities and create sustainable opportunities.",
  },
  {
    id: 3,
    name: "Sarah Williams",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    description:
      "Incredible dedication to rural development. Their projects have a real, positive impact on the communities they serve.",
  },
];

export function TestimonialCarouselSection() {
  return (
    <div className="flex flex-col items-center justify-center max-w-7xl mx-auto text-center">
      <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular text-center mb-6">
        Thousands Board the Movement for Rural Growth
      </h2>
      <span className="text-2xl mb-6">
        Swipe to hear from those who’ve experienced the impact
      </span>
      <TestimonialCarousel
        testimonials={TESTIMONIAL_DATA}
        className="max-w-2xl mx-auto"
      />
      <figure className="max-w-screen-md mx-auto text-center mt-16">
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
            src="https://images.unsplash.com/photo-1664575603992-0f17b771dd91?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Ann Balantidium profile picture"
            width={500}
            height={300}
          />
          <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
            <cite className="pr-3 text-blue-700 font-medium dark:text-white">
              Ann Balantidium
            </cite>
            <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">
              CEO at RUN
            </cite>
          </div>
        </figcaption>
      </figure>
    </div>
  );
}

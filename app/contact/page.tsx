import Image from "next/image";
import ContactForm from "./contactUs-form";
import SocialMediaLinks from "../../components/SocialMediaLinks";
import { FadeInView } from "@/components/animations/FadeInView";
import { SlideInView } from "@/components/animations/SlideInView";
import { ScaleInView } from "@/components/animations/ScaleInView";
import { Badge } from "@/components/ui/badge";

export default function Contact() {
  return (
    <div className="max-w-[1600px] mx-auto px-2 py-10 md:py-16">
      <div className="flex overflow-hidden">
        <div className="flex-1 hidden lg:block">
          <Image
            src="https://images.unsplash.com/photo-1559030623-0226b1241edd?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Rural landscape"
            width={1600}
            height={900}
            className="w-full h-screen object-cover rounded-md drop-shadow-2xl"
          />
        </div>
        <div className="py-12 flex-1 lg:flex lg:justify-center lg:h-screen lg:overflow-auto">
          <div className="max-w-lg flex-1 mx-auto px-4">
            <FadeInView>
              <Badge className="mb-2">Contact</Badge>
              <div>
                <h3 className="text-3xl font-semibold sm:text-4xl">
                  Get in touch
                </h3>
                <p className="mt-3 text-muted-foreground">
                  We&apos;d love to hear from you! Please fill out the form
                  below or connect with us on social media.
                </p>
              </div>
            </FadeInView>

            <SlideInView direction="up" delay={0.2}>
              <div className="mt-8">
                <ContactForm />
              </div>
            </SlideInView>

            <ScaleInView delay={0.4}>
              <div className="mt-12">
                <h4 className="text-xl font-semibold mb-4">Connect with us</h4>
                <SocialMediaLinks />
              </div>
            </ScaleInView>
          </div>
        </div>
      </div>
    </div>
  );
}

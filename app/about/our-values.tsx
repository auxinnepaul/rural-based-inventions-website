import { FadeInView } from "@/components/animations/FadeInView";
import { SlideInView } from "@/components/animations/SlideInView";
import { StaggerChildren } from "@/components/animations/StaggerChildren";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const values = [
  {
    title: "Ethical Practices and transparency in our work",
    description:
      "We prioritize honesty, integrity, and transparency in all our actions and communications, building trust with our stakeholders.",
  },
  {
    title: "Reciprocity of learning and Respect",
    description:
      "Respect is at the core of our interactions with individuals and communities. We value mutual learning and respect, believe in a two-way exchange of insights and recognize the importance of sharing knowledge and honoring diverse perspectives.",
  },
  {
    title: "Creativity and innovativeness",
    description:
      "We embrace creativity and innovation as catalysts for positive change. We continuously seek new and inventive solutions to address complex challenges facing rural communities in Kenya. By fostering a culture of creativity, we stay adaptive and responsive to evolving needs and circumstances.",
  },
  {
    title: "Equality",
    description:
      "Equality is a fundamental principle of our work. We are committed to promoting equal opportunities and addressing disparities, regardless of gender, age, ethnicity, or socioeconomic background. Our programs aim to empower all community members to participate fully and equally in the development process.",
  },
  {
    title: "Integrity",
    description:
      "Integrity is non-negotiable for us. We adhere to a code of moral and ethical principles, ensuring that our actions align with our values. By demonstrating integrity in all our endeavors, we build trust and credibility, which are vital for our organization's success.",
  },
  {
    title: "Good governance and accountability at all levels of society",
    description:
      "We advocate for good governance and accountability not only within our organization but also in the broader society. We believe that transparent and accountable institutions are key drivers of sustainable development. We work to promote these principles at the community, local, and national levels.",
  },
];

export default function OurValues() {
  return (
    <section className="py-24 ">
      <div className="container mx-auto px-4">
        <FadeInView>
          <div className="text-start mb-16">
            <h2 className="text-4xl font-semibold text-blue-700 dark:text-blue-400 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400  max-w-3xl">
              Our core values are the foundation of our organization, guiding
              every aspect of our work. They symbolize our unwavering commitment
              to the communities we serve and drive positive change in rural
              Kenya.
            </p>
          </div>
        </FadeInView>

        <StaggerChildren>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => (
              <SlideInView
                key={index}
                direction={index % 2 === 0 ? "left" : "right"}
              >
                <Card className="bg-slate-100 dark:bg-neutral-900">
                  <CardHeader>
                    <CardTitle className="text-blue-700 dark:text-blue-400">
                      {value.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-400">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </SlideInView>
            ))}
          </div>
        </StaggerChildren>
      </div>
    </section>
  );
}

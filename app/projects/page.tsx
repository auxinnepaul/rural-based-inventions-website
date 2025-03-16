import Image from "next/image";
import { FadeInView } from "@/components/animations/FadeInView";
import { SlideInView } from "@/components/animations/SlideInView";
import { StaggerChildren } from "@/components/animations/StaggerChildren";
import ProjectImageSlider from "./ProjectImageSlider";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Sustainable Agriculture Initiative",
    description:
      "Empowering local farmers with modern, sustainable farming techniques to improve crop yields and food security.",
    images: [
      "https://plus.unsplash.com/premium_photo-1724129051915-200cc1a1f81e?w=600&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=600&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1529313780224-1a12b68bed16?w=600&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1505764706515-aa95265c5abc?q=80&w=2073&auto=format&fit=crop",
    ],
    tags: ["Agriculture", "Sustainability", "Food Security"],
  },
  {
    title: "Rural Education Enhancement",
    description:
      "Improving access to quality education in rural areas through infrastructure development and teacher training programs.",
    images: [
      "https://plus.unsplash.com/premium_photo-1713890424186-11d3584a22fc?w=600&auto=format&fit=crop&q=60",
      "https://plus.unsplash.com/premium_photo-1713890431555-a86ba9933f11?w=600&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1567057419565-4349c49d8a04?w=600&auto=format&fit=crop&q=60",
      "https://plus.unsplash.com/premium_photo-1683135221637-aa707fd349b6?w=600&auto=format&fit=crop&q=60",
    ],
    tags: ["Education", "Infrastructure", "Community Development"],
  },
  {
    title: "Clean Water Access Project",
    description:
      "Implementing sustainable water solutions to provide clean, safe drinking water to rural communities.",
    images: [
      "https://plus.unsplash.com/premium_photo-1675624629079-e4bc75b079ac?q=80&w=2070&auto=format&fit=crop",
      "https://plus.unsplash.com/premium_photo-1664205027904-257984cbc206?w=600&auto=format&fit=crop&q=60",
      "https://plus.unsplash.com/premium_photo-1666956174245-5fe4e8a77603?w=600&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1516888892881-aad840c56db2?w=600&auto=format&fit=crop&q=60",
    ],
    tags: ["Water", "Health", "Sanitation"],
  },
  {
    title: "Women's Empowerment Program",
    description:
      "Supporting rural women through skills training, microfinance initiatives, and leadership development.",
    images: [
      "https://images.unsplash.com/photo-1487546331507-fcf8a5d27ab3?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509099342178-e323b1717dba?w=600&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1674574124649-778f9afc0e9c?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1562964400-f8ec1ef25777?w=600&auto=format&fit=crop&q=60",
    ],
    tags: ["Women Empowerment", "Skills Training", "Microfinance"],
  },
  {
    title: "Renewable Energy for Rural Areas",
    description:
      "Providing access to solar and wind energy solutions to improve rural electrification and reduce reliance on non-renewable energy sources.",
    images: [
      "https://plus.unsplash.com/premium_photo-1679917152773-588c2a0a9ad7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8UmVuZXdhYmxlJTIwRW5lcmd5JTIwZm9yJTIwUnVyYWwlMjBBcmVhc3xlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1459802243250-97792e921da4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fFJlbmV3YWJsZSUyMEVuZXJneSUyMGZvciUyMFJ1cmFsJTIwQXJlYXN8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UmVuZXdhYmxlJTIwRW5lcmd5JTIwZm9yJTIwUnVyYWwlMjBBcmVhc3xlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1521618755572-156ae0cdd74d?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    tags: ["Renewable Energy", "Solar Power", "Sustainability"],
  },
  {
    title: "Health and Nutrition Initiative",
    description:
      "Promoting better healthcare in underserved communities through mobile health clinics, vaccination drives, and nutrition programs.",
    images: [
      "https://plus.unsplash.com/premium_photo-1687975124236-7150896a1563?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fEhlYWx0aCUyMGFuZCUyME51dHJpdGlvbiUyMEluaXRpYXRpdmV8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/flagged/photo-1551049215-23fd6d2ac3f1?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1583947581279-4eec08383c38?q=80&w=1927&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1580377968103-84cadc052dc7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    tags: ["Healthcare", "Nutrition", "Community Wellness"],
  },
  {
    title: "Forest Conservation and Reforestation",
    description:
      "Restoring degraded landscapes and promoting conservation efforts through community-led tree planting programs.",
    images: [
      "https://images.unsplash.com/photo-1473773508845-188df298d2d1?w=600&auto=format&fit=crop&q=60",
      "https://plus.unsplash.com/premium_photo-1686507726414-602c7856a2ff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Rm9yZXN0JTIwQ29uc2VydmF0aW9uJTIwYW5kJTIwUmVmb3Jlc3RhdGlvbiUyMGFmcmljYXxlbnwwfHwwfHx8MA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1694475004289-7c3d7beb7d1d?q=80&w=1858&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1492496913980-501348b61469?w=600&auto=format&fit=crop&q=60",
    ],
    tags: ["Forestry", "Environment", "Climate Action"],
  },
  {
    title: "Local Art and Handicrafts Support",
    description:
      "Encouraging traditional craftsmanship by providing rural artisans with access to global markets and modern business training.",
    images: [
      "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1471666875520-c75081f42081?q=80&w=1944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1579762715459-5a068c289fda?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1492037766660-2a56f9eb3fcb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    tags: ["Art", "Handicrafts", "Economic Empowerment"],
  },
  {
    title: "Youth Digital Skills Training",
    description:
      "Equipping young people in rural areas with essential digital skills to improve job prospects and foster innovation.",
    images: [
      "https://images.unsplash.com/uploads/1412273646059cc129bb5/eae0a1da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1483058712412-4245e9b90334?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1494883759339-0b042055a4ee?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    tags: ["Digital Literacy", "Education", "Technology"],
  },
];

export default function ProjectsPage() {
  return (
    <div className="">
      <FadeInView>
        <div className="container mx-auto px-4 mt-6">
          <div className="relative h-[600px] overflow-hidden">
            <div className="absolute inset-0">
              <Image
                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                alt="Rural landscape"
                fill
                style={{ objectFit: "cover" }}
                quality={100}
                priority
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent opacity-70"></div>
            <div className="relative z-10 flex flex-col justify-center h-full text-white px-4 sm:px-6 lg:px-8 max-w-4xl">
              <Badge className="mb-2 w-20">Projects</Badge>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 leading-tight">
                Our Projects
              </h1>
              <p className="text-xl md:text-2xl  mb-8 max-w-2xl font-light">
                Discover how Rural Advancement Network is making a lasting
                impact in rural communities through our innovative and
                sustainable projects.
              </p>
              <p className="text-base md:text-xl mb-8 max-w-3xl font-light backdrop-blur-sm bg-white/30 p-6 rounded-lg">
                From supporting farmers with modern techniques to advancing
                education and healthcare, our projects drive sustainable growth
                and enhance quality of life.
              </p>
            </div>
          </div>
        </div>
      </FadeInView>

      <main className="container mx-auto px-4 py-12">
        <StaggerChildren>
          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project, index) => (
              <SlideInView
                key={index}
                direction={index % 2 === 0 ? "left" : "right"}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ProjectImageSlider images={project.images} />
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </SlideInView>
            ))}
          </div>
        </StaggerChildren>
      </main>
    </div>
  );
}

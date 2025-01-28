import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { StaggerChildren } from "@/components/animations/StaggerChildren";
import { ScaleInView } from "@/components/animations/ScaleInView";
import Image from "next/image";

interface WorkItem {
  title: string;
  description: string;
  image: string;
  category: string;
  impact: string;
}

const workItems: WorkItem[] = [
  {
    title: "Sustainable Farming Initiative",
    description:
      "Empowering local farmers with modern, eco-friendly agricultural techniques to boost crop yields and ensure food security.",
    image:
      "https://images.unsplash.com/photo-1535090467336-9501f96eef89?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fFN1c3RhaW5hYmxlJTIwRmFybWluZyUyMEluaXRpYXRpdmV8ZW58MHx8MHx8fDA%3D",
    category: "Agriculture",
    impact: "500+ farmers trained, 30% increase in crop yield",
  },
  {
    title: "Rural Education Program",
    description:
      "Providing access to quality education for children in remote areas through mobile schools and teacher training programs.",
    image:
      "https://images.unsplash.com/photo-1567057419565-4349c49d8a04?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fFJ1cmFsJTIwRWR1Y2F0aW9uJTIwUHJvZ3JhbSUyMGZvciUyMHdvbWVufGVufDB8fDB8fHww",
    category: "Education",
    impact: "1000+ children enrolled, 20 mobile schools established",
  },
  {
    title: "Community Health Outreach",
    description:
      "Bringing essential healthcare services to underserved rural communities through mobile clinics and health education initiatives.",
    image:
      "https://images.unsplash.com/photo-1564121211835-e88c852648ab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Healthcare",
    impact: "5000+ patients treated, 30% reduction in preventable diseases",
  },
  {
    title: "Women's Empowerment Workshop",
    description:
      "Equipping rural women with skills and resources for economic independence through vocational training and microfinance support.",
    image:
      "https://images.unsplash.com/photo-1674574124649-778f9afc0e9c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Community Development",
    impact: "300+ women trained, 50 new businesses started",
  },
  {
    title: "Clean Water Project",
    description:
      "Installing sustainable water systems in villages to provide clean, safe drinking water and improve overall community health.",
    image:
      "https://plus.unsplash.com/premium_photo-1729537378593-c671a38972ea?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Infrastructure",
    impact: "10 villages served, 5000+ people with access to clean water",
  },
  {
    title: "Youth Leadership Program",
    description:
      "Nurturing the next generation of community leaders through mentorship, skill-building workshops, and community service projects.",
    image:
      "https://images.unsplash.com/photo-1496516348160-24b35a31856f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Youth Development",
    impact: "200 youth trained, 20 community projects implemented",
  },
];

export function WorkCards() {
  return (
    <div className="relative  overflow-hidden bg-blue-100 dark:bg-zinc-900 py-2 md:py-10">
      <div className="absolute inset-0 bg-zinc-100 dark:bg-slate-950 transform -skew-y-6 origin-top-right"></div>
      <div className="container mx-auto px-2">
        <StaggerChildren className="relative z-10  grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {workItems.map((item, index) => (
            <ScaleInView key={index} delay={index * 0.1}>
              <Card className="flex flex-col h-full">
                <CardHeader className="p-0">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </CardHeader>
                <CardContent className="flex-grow p-4">
                  <Badge className="mb-2">{item.category}</Badge>
                  <CardTitle className="text-xl mb-2">{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardContent>
                <CardFooter className="p-4 bg-muted">
                  <p className="text-sm font-medium">Impact: {item.impact}</p>
                </CardFooter>
              </Card>
            </ScaleInView>
          ))}
        </StaggerChildren>
      </div>
    </div>
  );
}

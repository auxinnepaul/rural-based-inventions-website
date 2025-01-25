import { FadeInView } from "@/components/animations/FadeInView";
import { ScaleInView } from "@/components/animations/ScaleInView";
import Image from "next/image";

export default function OurTeam() {
  const team = [
    {
      avatar:
        "https://images.unsplash.com/photo-1509305717900-84f40e786d82?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGFmcmljYW4lMjBtYWxlJTIwcGVvcGxlfGVufDB8fDB8fHww",
      name: "Wanyonyi Barasa",
      title: "Product Designer",
      desc: "Wanyonyi focuses on designing intuitive solutions for rural communities, ensuring accessible technology for farmers and small businesses.",
      linkedin: "javascript:void(0)",
      twitter: "javascript:void(0)",
      github: "javascript:void(0)",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1512361436605-a484bdb34b5f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFmcmljYW4lMjBmZW1hbGUlMjBwZW9wbGV8ZW58MHx8MHx8fDA%3D",
      name: "Nabwire Achieng",
      title: "Software Engineer",
      desc: "Nabwire develops software solutions that enhance agricultural productivity and empower rural businesses through digital tools.",
      linkedin: "javascript:void(0)",
      twitter: "javascript:void(0)",
      github: "javascript:void(0)",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1504363081893-c8226db66926?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YWZyaWNhbiUyMGZlbWFsZSUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D",
      name: "Opiyo Odongo",
      title: "Full Stack Engineer",
      desc: "Opiyo builds scalable and robust platforms that connect rural entrepreneurs with resources, markets, and financial tools.",
      linkedin: "javascript:void(0)",
      twitter: "javascript:void(0)",
      github: "javascript:void(0)",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1506956191951-7a88da4435e5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGFmcmljYW4lMjBmZW1hbGUlMjBwZW9wbGV8ZW58MHx8MHx8fDA%3D",
      name: "Anyango Were",
      title: "Head of Designers",
      desc: "Anyango leads the creative team, ensuring that all digital products and platforms are user-friendly and cater to rural needs.",
      linkedin: "javascript:void(0)",
      twitter: "javascript:void(0)",
      github: "javascript:void(0)",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1512372923090-7b14fb496d44?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGFmcmljYW4lMjBtYWxlJTIwcGVvcGxlfGVufDB8fDB8fHww",
      name: "Simiyu Makokha",
      title: "Product Designer",
      desc: "Simiyu specializes in designing mobile applications that provide essential services to small-scale farmers and rural enterprises.",
      linkedin: "javascript:void(0)",
      twitter: "javascript:void(0)",
      github: "javascript:void(0)",
    },
    {
      avatar:
        "https://plus.unsplash.com/premium_photo-1664910122035-4956029cd100?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGFmcmljYW4lMjBmZW1hbGUlMjBwZW9wbGV8ZW58MHx8MHx8fDA%3D",
      name: "Namulala Wabwire",
      title: "Product Manager",
      desc: "Namulala oversees the development of projects aimed at improving rural livelihoods through technology and innovation.",
      linkedin: "javascript:void(0)",
      twitter: "javascript:void(0)",
      github: "javascript:void(0)",
    },
  ];

  return (
    <section className="py-14">
      <div className="max-w-screen-xl mx-auto px-2 md:px-0">
        <FadeInView delay={0.3}>
          <div className="max-w-xl">
            <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              Meet our Team
            </h3>
            <p className="text-gray-600 mt-3">
              Our team is a diverse and passionate group committed to empowering
              rural communities in Kenya. Meet the dedicated individuals behind
              our mission.
            </p>
          </div>
        </FadeInView>
        <ScaleInView delay={0.4}>
          <div className="mt-12">
            <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
              {team.map((item, idx) => (
                <li key={idx}>
                  <div className="w-full h-60 md:h-80">
                    <Image
                      src={item.avatar}
                      className="w-full h-full object-cover object-center shadow-md rounded-xl"
                      alt=""
                      width={"700"}
                      height={"8000"}
                    />
                  </div>
                  <div className="mt-4">
                    <h4 className="text-lg text-gray-700 font-semibold">
                      {item.name}
                    </h4>
                    <p className="text-indigo-600">{item.title}</p>
                    <p className="text-gray-600 mt-2">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </ScaleInView>
      </div>
    </section>
  );
}

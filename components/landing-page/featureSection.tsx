"use client";

import { motion } from "framer-motion";
import { Heart, Users, Sprout, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function FeatureSection() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
            alt="Rural community"
            className="object-cover w-full h-full"
            width={"600"}
            height={"700"}
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <motion.div
          className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Rural Advancement Network
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8 text-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Empowering rural communities through sustainable development and
            education
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Button
              size="lg"
              className="bg-primary text-white hover:bg-primary/90 mr-4"
            >
              Get Involved
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent text-white border-white hover:bg-white hover:text-black"
            >
              Learn More
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <motion.div
          className="max-w-7xl mx-auto px-4"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div className="text-center mb-16" variants={fadeIn}>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Our Impact Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We focus on key areas that create lasting change in rural
              communities
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Heart className="w-12 h-12 text-primary" />,
                title: "Healthcare Access",
                description:
                  "Improving access to quality healthcare services in rural areas",
              },
              {
                icon: <Users className="w-12 h-12 text-primary" />,
                title: "Community Building",
                description:
                  "Strengthening local communities through collaborative programs",
              },
              {
                icon: <Sprout className="w-12 h-12 text-primary" />,
                title: "Sustainable Agriculture",
                description:
                  "Promoting sustainable farming practices and food security",
              },
              {
                icon: <GraduationCap className="w-12 h-12 text-primary" />,
                title: "Education",
                description:
                  "Providing quality education and skill development opportunities",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                variants={{
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                }}
              >
                <div className="mb-6 inline-block bg-primary/10 p-3 rounded-lg">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </main>
  );
}

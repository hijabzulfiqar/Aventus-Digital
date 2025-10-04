"use client";

import { motion, Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    title: "Affiliate Network Management",
    description:
      "Connect with premium affiliates and manage campaigns through our sophisticated network platform with real-time analytics.",
    hoverBg: "hover:bg-red-600",
    defaultBg: "bg-gray-800/50",
    icon: "🤝",
  },
  {
    title: "Performance Marketing",
    description:
      "Data-driven campaigns that deliver measurable results. We optimize every touchpoint to maximize your ROI and conversion rates.",
    hoverBg: "hover:bg-gray-700",
    defaultBg: "bg-gray-800/50",
    icon: "📊",
  },
  {
    title: "Brand Partnership Strategy",
    description:
      "Strategic partnerships that align with your brand values and audience. We identify and cultivate long-term affiliate relationships.",
    hoverBg: "hover:bg-red-600",
    defaultBg: "bg-gray-800/50",
    icon: "🎯",
  },
  {
    title: "Advanced Attribution & Analytics",
    description:
      "Comprehensive tracking and attribution models that provide deep insights into campaign performance and affiliate effectiveness.",
    hoverBg: "hover:bg-gray-700",
    defaultBg: "bg-gray-800/50",
    icon: "🔍",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  hover: {
    y: -12,
    scale: 1.02,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const iconVariants: Variants = {
  initial: { scale: 1, rotate: 0 },
  hover: {
    scale: 1.1,
    rotate: 5,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const titleVariants: Variants = {
  initial: { x: 0 },
  hover: {
    x: 6,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const arrowVariants: Variants = {
  initial: { x: 0, y: 0, rotate: 0, opacity: 0.7 },
  hover: {
    x: 4,
    y: -4,
    rotate: 15,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

export default function OurServices() {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto bg-gray-950">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
      >
        <motion.div
          variants={headerVariants}
          className="mb-16 justify-center text-center"
        >
          <h2 className="text-lg font-bold text-gray-300 mb-6 tracking-[0.25em] uppercase">
            Our Services
          </h2>
          <div className="w-16 h-0.5 bg-red-600 mb-6 justify-center mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover="hover"
              className="group"
            >
              <Card
                className={`h-full border border-gray-700/50 shadow-lg shadow-black/50 hover:shadow-2xl hover:shadow-red-900/30 transition-all duration-500 cursor-pointer ${service.defaultBg} ${service.hoverBg} group-hover:text-white backdrop-blur-sm`}
              >
                <CardContent className="p-8 h-full min-h-[280px]">
                  <motion.h3
                    className="text-2xl font-bold mb-4 text-white group-hover:text-white"
                    variants={titleVariants}
                  >
                    {service.title}
                  </motion.h3>

                  <p className="text-gray-300 group-hover:text-white/90 leading-relaxed mb-8">
                    {service.description}
                  </p>

                  <div className="flex justify-end">
                    <motion.div
                      className="w-10 h-10 rounded-full bg-gray-700 group-hover:bg-white/20 flex items-center justify-center"
                      variants={arrowVariants}
                    >
                      <ArrowUpRight className="w-5 h-5 text-gray-300 group-hover:text-white" />
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

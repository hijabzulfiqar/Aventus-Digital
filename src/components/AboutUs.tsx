"use client";

import { motion, type Variants } from "framer-motion";
import { Button } from "@/components/ui/button";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const contentVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const boxVariants: Variants = {
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

export default function AboutUs() {
  return (
    <section className="relative min-h-screen py-20 px-6 flex items-center justify-center bg-[#0a0e1a]">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
        className="max-w-6xl mx-auto w-full"
      >
        {/* ABOUT US Label */}
        <motion.div variants={headerVariants} className="text-center mb-16">
          <h2 className="text-sm font-medium text-gray-400 tracking-[0.3em] uppercase mb-12">
            ABOUT US
          </h2>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-12">
            <span className="text-[#ef4444]">Aventus Digital</span>{" "}
            <span className="text-white">is built on</span>
            <br />
            <span className="text-white">15 years of affiliate marketing</span>
            <br />
            <span className="text-white">experience and over $100M in</span>
            <br />
            <span className="text-white">revenue</span>
          </h1>

          {/* Description */}
          <motion.p
            className="text-gray-400 text-base md:text-xl leading-relaxed max-w-4xl mx-auto mb-16"
            variants={contentVariants}
          >
            Aventus Digital was founded to bring proven expertise to a new era
            of affiliate growth. We empower brands and affiliates through
            strategic partnerships, data intelligence, and next-gen optimization
            to deliver superior ROI.
          </motion.p>
        </motion.div>

        {/* Feature Boxes and Log In Button Container */}
        <div className="relative">
          {/* Feature Boxes */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
            variants={contentVariants}
          >
            <motion.div
              variants={boxVariants}
              className="relative p-8 border-2 border-[#ef4444]/30 rounded-lg bg-gradient-to-b from-[#1a0a0f] to-transparent hover:border-[#ef4444]/50 transition-colors duration-300 text-center"
            >
              <h3 className="text-2xl font-bold text-[#ef4444] mb-2">
                Strategic
              </h3>
              <p className="text-gray-400 text-sm">Partnerships</p>
            </motion.div>

            <motion.div
              variants={boxVariants}
              className="relative p-8 border-2 border-[#ef4444]/30 rounded-lg bg-gradient-to-b from-[#1a0a0f] to-transparent hover:border-[#ef4444]/50 transition-colors duration-300 text-center"
            >
              <h3 className="text-2xl font-bold text-[#ef4444] mb-2">
                Data-Driven
              </h3>
              <p className="text-gray-400 text-sm">Optimization</p>
            </motion.div>

            <motion.div
              variants={boxVariants}
              className="relative p-8 border-2 border-[#ef4444]/30 rounded-lg bg-gradient-to-b from-[#1a0a0f] to-transparent hover:border-[#ef4444]/50 transition-colors duration-300 text-center"
            >
              <h3 className="text-2xl font-bold text-[#ef4444] mb-2">
                Cutting-Edge
              </h3>
              <p className="text-gray-400 text-sm">Technology</p>
            </motion.div>
          </motion.div>

          {/* Log In Button - Positioned at bottom right */}
          {/* <motion.div variants={contentVariants} className="flex justify-end">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Button
                size="lg"
                className="px-10 py-6 bg-[#ef4444] hover:bg-[#dc2626] text-white rounded-full font-semibold text-base shadow-lg shadow-red-900/50 hover:shadow-xl hover:shadow-red-900/70 transition-all duration-200"
              >
                Log In
              </Button>
            </motion.div>
          </motion.div> */}
        </div>
      </motion.div>
    </section>
  );
}

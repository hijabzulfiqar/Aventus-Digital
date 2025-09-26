"use client";

import { motion } from "framer-motion";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowUpRight, CirclePlay } from "lucide-react";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
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

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-gradient-to-b from-gray-50/30 to-transparent">
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        className={cn(
          "mask-[radial-gradient(600px_circle_at_center,white,transparent)]",
          "inset-x-0 h-full skew-y-12"
        )}
      />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative z-10 text-center max-w-5xl"
      >
        {/* Enhanced Badge */}
        <motion.div variants={itemVariants}>
          <Badge
            variant="secondary"
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium bg-green-50 text-green-700 border border-green-200 hover:bg-green-100 transition-colors duration-200"
            asChild
          >
            <Link href="#" className="no-underline">
              <span className="flex items-center gap-1">
                Trusted by 500+ Brands
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </Link>
          </Badge>
        </motion.div>

        {/* Improved Heading */}
        <motion.h1
          variants={itemVariants}
          className="mt-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.1] text-gray-900"
        >
          <span className="block">Scale Your Brand with</span>
          <span className="block">
            <span className="text-green-700 relative">
              Strategic Affiliate
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-green-700/20 rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
              />
            </span>
          </span>
          <span className="block">Marketing</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="mt-8 text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto"
        >
          Aventus Digital connects brands with high-performing affiliates to
          drive measurable growth. Our data-driven approach delivers superior
          ROI through precision-targeted campaigns.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <Button
              size="lg"
              className="rounded-full text-base px-8 py-3 bg-green-700 hover:bg-green-800 shadow-lg hover:shadow-xl transition-all duration-200 font-semibold"
            >
              Start Growing Today
              <ArrowUpRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <Button
              variant="outline"
              size="lg"
              className="rounded-full text-base px-8 py-3 border-2 border-gray-300 hover:bg-gray-50 font-semibold"
            >
              <CirclePlay className="mr-2 h-5 w-5" />
              See Results
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;

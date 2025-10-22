"use client";

import { motion, type Variants } from "framer-motion";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  Crosshair,
  Mountain,
  Moon,
  Flag,
  Activity,
  Settings,
  Landmark,
  BookOpen,
  Shirt,
  Star,
} from "lucide-react";
import Link from "next/link";

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

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center py-20 px-6 overflow-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      {/* Starry background effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-900/20 via-gray-900 to-gray-950"></div>
        <div
          className="stars absolute inset-0"
          style={{
            background: `
            radial-gradient(2px 2px at 20px 30px, white, transparent),
            radial-gradient(2px 2px at 60px 70px, white, transparent),
            radial-gradient(1px 1px at 50px 50px, white, transparent),
            radial-gradient(1px 1px at 130px 80px, white, transparent),
            radial-gradient(2px 2px at 90px 10px, white, transparent),
            radial-gradient(1px 1px at 110px 120px, white, transparent),
            radial-gradient(1px 1px at 150px 60px, white, transparent),
            radial-gradient(2px 2px at 180px 90px, white, transparent),
            radial-gradient(1px 1px at 10px 100px, white, transparent),
            radial-gradient(1px 1px at 40px 140px, white, transparent)
          `,
            backgroundSize: "200px 200px",
            backgroundRepeat: "repeat",
            opacity: 0.5,
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent"></div>
      </div>
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.05}
        duration={3}
        className={cn(
          "mask-[radial-gradient(600px_circle_at_center,white,transparent)]",
          "inset-x-0 h-full skew-y-12 opacity-30"
        )}
      />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative z-10 text-center max-w-5xl"
      >
        {/* Enhanced Badge */}
        {/* <motion.div variants={itemVariants}>
          <Badge
            variant="secondary"
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium bg-red-950/50 text-red-400 border border-red-800/50 hover:bg-red-900/50 transition-colors duration-200 backdrop-blur-sm mt-14"
            asChild
          >
            <Link href="#" className="no-underline">
              <span className="flex items-center gap-1">
                Trusted by 500+ Brands
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </Link>
          </Badge>
        </motion.div> */}

        {/* Improved Heading */}
        <motion.h1
          variants={itemVariants}
          className="mt-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.1] text-white"
        >
          <span className="block">
            The{" "}
            <span className="text-red-500 relative">
              Conservative
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-red-500/30 rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
              />
            </span>
          </span>
          <span className="block">Affiliate Marketplace</span>
          <span className="block">Built for Performance</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="mt-8 text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto"
        >
          Aventus Digital connects high-performing affiliates with
          freedom-driven brands across survival, outdoor, 2A, political, and
          alternative health verticals — empowering measurable growth through
          precision marketing.
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
              className="rounded-full text-base px-8 py-3 bg-red-600 hover:bg-red-700 shadow-lg shadow-red-900/50 hover:shadow-xl hover:shadow-red-900/70 transition-all duration-200 font-semibold text-white"
            >
              I am an Affiliate
              <ArrowRight className="ml-2 h-5 w-5" />
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
              className="rounded-full text-base px-8 py-3 border-2 border-gray-600 bg-gray-800 hover:bg-gray-800 text-white hover:text-white font-semibold backdrop-blur-sm"
            >
              I am a Brand
            </Button>
          </motion.div>
        </motion.div>

        {/* Category Icons */}
        <motion.div
          variants={itemVariants}
          className="mt-20 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 max-w-4xl mx-auto"
        >
          {/* Row 1 */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center gap-3 cursor-pointer group"
          >
            <div className="w-12 h-12 flex items-center justify-center text-red-500 group-hover:text-red-400 transition-colors">
              <Crosshair className="w-10 h-10" />
            </div>
            <span className="text-sm text-gray-400 group-hover:text-white transition-colors">
              Survival
            </span>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center gap-3 cursor-pointer group"
          >
            <div className="w-12 h-12 flex items-center justify-center text-red-500 group-hover:text-red-400 transition-colors">
              <Mountain className="w-10 h-10" />
            </div>
            <span className="text-sm text-gray-400 group-hover:text-white transition-colors">
              Outdoor
            </span>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center gap-3 cursor-pointer group"
          >
            <div className="w-12 h-12 flex items-center justify-center text-red-500 group-hover:text-red-400 transition-colors">
              <Moon className="w-10 h-10" />
            </div>
            <span className="text-sm text-gray-400 group-hover:text-white transition-colors">
              2A
            </span>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center gap-3 cursor-pointer group"
          >
            <div className="w-12 h-12 flex items-center justify-center text-red-500 group-hover:text-red-400 transition-colors">
              <Flag className="w-10 h-10" />
            </div>
            <span className="text-sm text-gray-400 group-hover:text-white transition-colors">
              Political
            </span>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center gap-3 cursor-pointer group"
          >
            <div className="w-12 h-12 flex items-center justify-center text-red-500 group-hover:text-red-400 transition-colors">
              <Activity className="w-10 h-10" />
            </div>
            <span className="text-sm text-gray-400 group-hover:text-white transition-colors">
              Alt Health
            </span>
          </motion.div>

          {/* Row 2 */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center gap-3 cursor-pointer group"
          >
            <div className="w-12 h-12 flex items-center justify-center text-red-500 group-hover:text-red-400 transition-colors">
              <Settings className="w-10 h-10" />
            </div>
            <span className="text-sm text-gray-400 group-hover:text-white transition-colors">
              Gadgets
            </span>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center gap-3 cursor-pointer group"
          >
            <div className="w-12 h-12 flex items-center justify-center text-red-500 group-hover:text-red-400 transition-colors">
              <Landmark className="w-10 h-10" />
            </div>
            <span className="text-sm text-gray-400 group-hover:text-white transition-colors">
              Precious Metals
            </span>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center gap-3 cursor-pointer group"
          >
            <div className="w-12 h-12 flex items-center justify-center text-red-500 group-hover:text-red-400 transition-colors">
              <BookOpen className="w-10 h-10" />
            </div>
            <span className="text-sm text-gray-400 group-hover:text-white transition-colors">
              Faith
            </span>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center gap-3 cursor-pointer group"
          >
            <div className="w-12 h-12 flex items-center justify-center text-red-500 group-hover:text-red-400 transition-colors">
              <Shirt className="w-10 h-10" />
            </div>
            <span className="text-sm text-gray-400 group-hover:text-white transition-colors">
              Apparel
            </span>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center gap-3 cursor-pointer group"
          >
            <div className="w-12 h-12 flex items-center justify-center text-red-500 group-hover:text-red-400 transition-colors">
              <Star className="w-10 h-10" />
            </div>
            <span className="text-sm text-gray-400 group-hover:text-white transition-colors">
              Veterans
            </span>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;

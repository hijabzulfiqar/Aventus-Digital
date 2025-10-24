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

        {/* CTA Buttons - Enhanced with Extra Width */}
        <motion.div
          variants={itemVariants}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          {/* Affiliate Button - Primary */}
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <Button
              size="lg"
              className="group rounded-full text-lg px-16 py-7 bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:from-red-600 hover:via-red-700 hover:to-red-800 shadow-2xl shadow-red-900/50 hover:shadow-3xl hover:shadow-red-900/80 transition-all duration-300 font-bold text-white border-0 min-w-[280px]"
            >
              I am an Affiliate
              <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </motion.div>

          {/* Brand Button - Secondary */}
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <Button
              variant="outline"
              size="lg"
              className="group rounded-full text-lg px-16 py-7 border-2 border-white/30 hover:border-red-500/80 bg-white/5 hover:bg-red-500/15 text-white hover:text-white font-bold backdrop-blur-md shadow-lg shadow-black/20 hover:shadow-2xl hover:shadow-red-900/40 transition-all duration-300 min-w-[280px]"
            >
              I am a Brand
              <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
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

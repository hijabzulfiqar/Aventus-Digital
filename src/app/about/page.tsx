"use client";

import { motion, type Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Home, Heart, AlertTriangle, Cross, Flag } from "lucide-react";
import {
  ArrowRight,
  Database,
  Users,
  Briefcase,
  BarChart3,
  Target,
  Shield,
  TrendingUp,
  Rocket,
} from "lucide-react";
import Link from "next/link";

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

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0a0e1a] via-[#0f1420] to-[#0a0e1a] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated gradient orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 -right-20 w-96 h-96 bg-red-600/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-20 -left-20 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"
        />
      </div>

      <section className="relative py-20 px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="max-w-7xl mx-auto w-full"
        >
          {/* Header Section - Enhanced */}
          <motion.div variants={headerVariants} className="text-center mb-24">
            {/* <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-red-600/10 border border-red-600/20 rounded-full text-red-500 text-sm font-semibold mb-8"
            >
              <Zap className="w-4 h-4" />
              ABOUT AVENTUS DIGITAL
            </motion.div> */}

            {/* Main Heading with gradient text */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mt-10 leading-tight mb-8">
              <span className="text-white">Built on </span>
              <span className="bg-gradient-to-r from-red-500 to-red-600 text-transparent bg-clip-text">
                15 years
              </span>
              <span className="text-white"> of</span>
              <br />
              <span className="text-white">performance marketing</span>
              <br />
              <span className="text-white">experience and </span>
              <span className="bg-gradient-to-r from-red-500 to-red-600 text-transparent bg-clip-text">
                $100M+
              </span>
              <br />
              <span className="text-white">in affiliate revenue.</span>
            </h1>

            {/* Description with better styling */}
            <motion.p
              className="text-gray-300 text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto font-light"
              variants={contentVariants}
            >
              Aventus Digital exists to help mission-driven brands and
              high-caliber publishers scale with precision. We're{" "}
              <span className="text-red-500 font-semibold">
                operators first
              </span>
              —combining data, partnerships, and disciplined execution to
              deliver results that last.
            </motion.p>

            {/* Decorative line */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.5 }}
              className="max-w-xs mx-auto mt-12 h-px bg-gradient-to-r from-transparent via-red-600/50 to-transparent"
            />
          </motion.div>

          {/* What We Do Section - Enhanced */}
          <motion.div variants={contentVariants} className="mb-32">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                What We{" "}
                <span className="bg-gradient-to-r from-red-500 to-red-600 text-transparent bg-clip-text">
                  Do
                </span>
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Comprehensive solutions designed to accelerate your growth
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Service 1 */}
              <motion.div
                variants={boxVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative p-8 border border-red-600/20 rounded-2xl bg-gradient-to-br from-red-950/10 via-transparent to-transparent hover:border-red-600/40 transition-all duration-300 backdrop-blur-sm"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative flex items-start gap-5">
                  <div className="w-14 h-14 flex items-center justify-center text-red-500 bg-red-950/50 rounded-xl group-hover:scale-110 transition-transform">
                    <Target className="w-7 h-7" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-red-500 transition-colors">
                      Marketplace Access
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      Gain entry to a curated marketplace where media buyers,
                      mailers, native buyers, and listicle owners promote
                      high-performing offers matched by traffic channel and
                      audience fit.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Service 2 */}
              <motion.div
                variants={boxVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative p-8 border border-red-600/20 rounded-2xl bg-gradient-to-br from-red-950/10 via-transparent to-transparent hover:border-red-600/40 transition-all duration-300 backdrop-blur-sm"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative flex items-start gap-5">
                  <div className="w-14 h-14 flex items-center justify-center text-red-500 bg-red-950/50 rounded-xl group-hover:scale-110 transition-transform">
                    <Database className="w-7 h-7" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-red-500 transition-colors">
                      Data Monetization (Email & SMS)
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      Turn idle lists into revenue. We manage, segment, and
                      activate email/SMS with a performance-first
                      engine—leveraging our own offers and owned audiences when
                      it benefits outcomes.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Service 3 */}
              <motion.div
                variants={boxVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative p-8 border border-red-600/20 rounded-2xl bg-gradient-to-br from-red-950/10 via-transparent to-transparent hover:border-red-600/40 transition-all duration-300 backdrop-blur-sm"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative flex items-start gap-5">
                  <div className="w-14 h-14 flex items-center justify-center text-red-500 bg-red-950/50 rounded-xl group-hover:scale-110 transition-transform">
                    <Users className="w-7 h-7" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-red-500 transition-colors">
                      Co-Registration (Co-Reg)
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      Accelerate newsletter growth with compliant, intent-based
                      subscriber acquisition aligned to your content and goals.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Service 4 */}
              <motion.div
                variants={boxVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative p-8 border border-red-600/20 rounded-2xl bg-gradient-to-br from-red-950/10 via-transparent to-transparent hover:border-red-600/40 transition-all duration-300 backdrop-blur-sm"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative flex items-start gap-5">
                  <div className="w-14 h-14 flex items-center justify-center text-red-500 bg-red-950/50 rounded-xl group-hover:scale-110 transition-transform">
                    <Briefcase className="w-7 h-7" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-red-500 transition-colors">
                      Agency of Record
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      White-glove management for brands: partner recruitment,
                      offer optimization, QA/compliance, payouts, and
                      transparent reporting.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* How We Work Section - Enhanced */}
          <motion.div variants={contentVariants} className="mb-32">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                How We{" "}
                <span className="bg-gradient-to-r from-red-500 to-red-600 text-transparent bg-clip-text">
                  Work
                </span>
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Our proven 5-step methodology for delivering exceptional results
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {[
                {
                  num: 1,
                  title: "Diagnose",
                  desc: "Audit offers, funnels, traffic mix, and list quality.",
                },
                {
                  num: 2,
                  title: "Design",
                  desc: "Build a channel-specific plan (creative, targeting, cadences).",
                },
                {
                  num: 3,
                  title: "Deploy",
                  desc: "Launch fast with tight feedback loops and clear SLAs.",
                },
                {
                  num: 4,
                  title: "Optimize",
                  desc: "Iterate on EPC, LTV, and CAC targets with real-time data.",
                },
                {
                  num: 5,
                  title: "Scale",
                  desc: "Double down on winners, retire laggards, protect deliverability and brand integrity.",
                },
              ].map((step, index) => (
                <motion.div
                  key={step.num}
                  variants={boxVariants}
                  whileHover={{ y: -8 }}
                  className="group relative p-6 border border-red-600/20 rounded-xl bg-gradient-to-b from-red-950/10 to-transparent hover:border-red-600/40 transition-all duration-300 text-center"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-red-600/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative">
                    <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center text-red-500 text-2xl font-bold border-2 border-red-600/30 rounded-full bg-red-950/30 group-hover:scale-110 group-hover:border-red-500 transition-all">
                      {step.num}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-500 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Why Aventus Section - Enhanced */}
          <motion.div variants={contentVariants} className="mb-32">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Why{" "}
                <span className="bg-gradient-to-r from-red-500 to-red-600 text-transparent bg-clip-text">
                  Aventus
                </span>
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                The competitive advantages that set us apart
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: BarChart3,
                  title: "Operator DNA",
                  desc: "Hands-on execution, not slideware.",
                },
                {
                  icon: TrendingUp,
                  title: "Performance Precision",
                  desc: "Decisions grounded in data and unit economics.",
                },
                {
                  icon: Users,
                  title: "Partner-First",
                  desc: "Transparent terms, aligned incentives, durable relationships.",
                },
                {
                  icon: Shield,
                  title: "Compliance & Brand Safety",
                  desc: "CAN-SPAM, TCPA, and creative QA baked into the workflow.",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  variants={boxVariants}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="group relative p-8 border border-red-600/20 rounded-xl bg-gradient-to-b from-red-950/10 to-transparent hover:border-red-600/40 transition-all duration-300 text-center"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-red-600/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative">
                    <div className="w-16 h-16 mx-auto mb-5 flex items-center justify-center text-red-500 bg-red-950/30 rounded-xl group-hover:scale-110 transition-transform">
                      <item.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-500 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Verticals We Serve Section - Beautiful Card Grid */}
          <motion.div variants={contentVariants} className="mb-32">
            <div className="text-center mb-16">
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-500/10 to-transparent border border-red-500/20 mb-6"
                whileHover={{ scale: 1.05 }}
              >
                <Target className="w-4 h-4 text-red-500" />
                <span className="text-sm font-medium text-gray-300 tracking-wide uppercase">
                  Our Expertise
                </span>
              </motion.div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Verticals We{" "}
                <span className="bg-gradient-to-r from-red-500 to-red-600 text-transparent bg-clip-text">
                  Serve
                </span>
              </h2>

              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                Specialized expertise across high-performing niches with proven
                track records
              </p>
            </div>

            {/* Beautiful Card Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Vertical 1 */}
              <motion.div
                variants={boxVariants}
                whileHover={{ y: -8, scale: 1.03 }}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-red-950/20 via-gray-900/50 to-transparent border-2 border-red-500/20 hover:border-red-500/40 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-3xl group-hover:bg-red-500/20 transition-colors duration-300" />

                <div className="relative p-8">
                  <div className="w-14 h-14 mb-5 flex items-center justify-center bg-gradient-to-br from-red-500/20 to-red-600/10 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-7 h-7 text-red-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-red-500 transition-colors">
                    Survival & Outdoor
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Emergency preparedness, tactical gear, outdoor equipment,
                    and survival essentials
                  </p>
                </div>
              </motion.div>

              {/* Vertical 2 */}
              <motion.div
                variants={boxVariants}
                whileHover={{ y: -8, scale: 1.03 }}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-red-950/20 via-gray-900/50 to-transparent border-2 border-red-500/20 hover:border-red-500/40 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-3xl group-hover:bg-red-500/20 transition-colors duration-300" />

                <div className="relative p-8">
                  <div className="w-14 h-14 mb-5 flex items-center justify-center bg-gradient-to-br from-red-500/20 to-red-600/10 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <TrendingUp className="w-7 h-7 text-red-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-red-500 transition-colors">
                    Financial & Gold/IRA
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Precious metals, retirement planning, wealth protection, and
                    investment solutions
                  </p>
                </div>
              </motion.div>

              {/* Vertical 3 */}
              <motion.div
                variants={boxVariants}
                whileHover={{ y: -8, scale: 1.03 }}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-red-950/20 via-gray-900/50 to-transparent border-2 border-red-500/20 hover:border-red-500/40 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-3xl group-hover:bg-red-500/20 transition-colors duration-300" />

                <div className="relative p-8">
                  <div className="w-14 h-14 mb-5 flex items-center justify-center bg-gradient-to-br from-red-500/20 to-red-600/10 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <Home className="w-7 h-7 text-red-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-red-500 transition-colors">
                    Home Services
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Solar, HVAC, roofing, security systems, and home improvement
                    solutions
                  </p>
                </div>
              </motion.div>

              {/* Vertical 4 */}
              <motion.div
                variants={boxVariants}
                whileHover={{ y: -8, scale: 1.03 }}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-red-950/20 via-gray-900/50 to-transparent border-2 border-red-500/20 hover:border-red-500/40 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-3xl group-hover:bg-red-500/20 transition-colors duration-300" />

                <div className="relative p-8">
                  <div className="w-14 h-14 mb-5 flex items-center justify-center bg-gradient-to-br from-red-500/20 to-red-600/10 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <Heart className="w-7 h-7 text-red-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-red-500 transition-colors">
                    Alternative Health
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Natural supplements, wellness products, holistic health, and
                    nutrition
                  </p>
                </div>
              </motion.div>

              {/* Vertical 5 */}
              <motion.div
                variants={boxVariants}
                whileHover={{ y: -8, scale: 1.03 }}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-red-950/20 via-gray-900/50 to-transparent border-2 border-red-500/20 hover:border-red-500/40 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-3xl group-hover:bg-red-500/20 transition-colors duration-300" />

                <div className="relative p-8">
                  <div className="w-14 h-14 mb-5 flex items-center justify-center bg-gradient-to-br from-red-500/20 to-red-600/10 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <AlertTriangle className="w-7 h-7 text-red-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-red-500 transition-colors">
                    Preparedness
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Emergency kits, food storage, self-reliance products, and
                    crisis readiness
                  </p>
                </div>
              </motion.div>

              {/* Vertical 6 */}
              <motion.div
                variants={boxVariants}
                whileHover={{ y: -8, scale: 1.03 }}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-red-950/20 via-gray-900/50 to-transparent border-2 border-red-500/20 hover:border-red-500/40 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-3xl group-hover:bg-red-500/20 transition-colors duration-300" />

                <div className="relative p-8">
                  <div className="w-14 h-14 mb-5 flex items-center justify-center bg-gradient-to-br from-red-500/20 to-red-600/10 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <Cross className="w-7 h-7 text-red-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-red-500 transition-colors">
                    Faith-Aligned Lifestyle
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Christian products, values-based content, faith-focused
                    media and resources
                  </p>
                </div>
              </motion.div>

              {/* Vertical 7 - Featured/Highlighted - CENTERED */}
              <motion.div
                variants={boxVariants}
                whileHover={{ y: -8, scale: 1.03 }}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-red-600/20 via-red-950/30 to-transparent border-2 border-red-500/40 hover:border-red-500/60 transition-all duration-300 lg:col-start-2"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-0 right-0 w-40 h-40 bg-red-500/20 rounded-full blur-3xl group-hover:bg-red-500/30 transition-colors duration-300" />

                <div className="relative p-8">
                  <div className="w-14 h-14 mb-5 flex items-center justify-center bg-gradient-to-br from-red-500/30 to-red-600/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <Flag className="w-7 h-7 text-red-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors">
                    Patriot-Oriented Brands
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    American-made products, conservative media, patriotic
                    merchandise, and freedom-focused brands
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Bottom CTA/Stats Bar */}
            <motion.div
              variants={contentVariants}
              className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-red-950/20 via-gray-900/30 to-red-950/20 border border-red-500/20 backdrop-blur-sm"
            >
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                  <p className="text-gray-300 text-lg">
                    <span className="text-red-500 font-bold">
                      Proven expertise
                    </span>{" "}
                    across multiple verticals with{" "}
                    <span className="text-white font-semibold">
                      data-driven strategies
                    </span>
                  </p>
                </div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    className="px-8 py-6 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-full font-semibold shadow-lg shadow-red-900/50"
                  >
                    Explore Opportunities
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Leadership Section - Enhanced */}
          <motion.div variants={contentVariants} className="mb-32">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-red-500 to-red-600 text-transparent bg-clip-text">
                  Leadership
                </span>
              </h2>
            </div>

            <motion.div
              variants={contentVariants}
              whileHover={{ scale: 1.02 }}
              className="relative p-10 border border-red-600/20 rounded-2xl bg-gradient-to-br from-red-950/10 via-transparent to-transparent max-w-4xl mx-auto backdrop-blur-sm"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-transparent rounded-2xl" />
              <p className="relative text-gray-300 text-xl leading-relaxed text-center">
                Aventus Digital is{" "}
                <span className="text-red-500 font-semibold">founder-led</span>{" "}
                and built on a track record of
                <span className="text-white font-bold"> 15+ years</span> driving
                <span className="text-red-500 font-bold"> $100M+</span> in
                affiliate revenue across leading networks. We bring that proven
                foundation to every engagement.
              </p>
            </motion.div>
          </motion.div>

          {/* Let's Build Section - Enhanced CTA */}
          <motion.div variants={contentVariants} className="text-center">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative p-12 border-2 border-red-600/30 rounded-3xl bg-gradient-to-br from-red-950/20 via-transparent to-transparent backdrop-blur-sm"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-transparent rounded-3xl" />
              <div className="relative">
                <Rocket className="w-16 h-16 text-red-500 mx-auto mb-6" />
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Let's{" "}
                  <span className="bg-gradient-to-r from-red-500 to-red-600 text-transparent bg-clip-text">
                    Build
                  </span>
                </h2>

                <p className="text-gray-300 text-xl mb-12 max-w-3xl mx-auto font-light">
                  Whether you're a brand ready to scale or a publisher seeking
                  high-performing offers, we'd love to connect.
                </p>

                <motion.div
                  className="flex flex-col sm:flex-row gap-6 justify-center"
                  variants={contentVariants}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Button
                      size="lg"
                      asChild
                      className="px-10 py-7 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-full font-bold text-lg shadow-2xl shadow-red-900/50 hover:shadow-red-900/70 transition-all duration-200"
                    >
                      <Link
                        href="https://aventus.everflowclient.io/advertiser/signup"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Brands: Start a conversation
                        <ArrowRight className="ml-2 h-6 w-6" />
                      </Link>
                    </Button>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Button
                      size="lg"
                      asChild
                      className="group relative px-10 py-7 bg-white hover:bg-gray-100 text-gray-900 hover:text-black rounded-full font-bold text-lg shadow-2xl shadow-white/20 hover:shadow-3xl hover:shadow-white/30 transition-all duration-300 border-0"
                    >
                      <Link
                        href="https://aventus.everflowclient.io/affiliate/signup"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3"
                      >
                        <span>Publishers: Apply for marketplace access</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </Button>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}

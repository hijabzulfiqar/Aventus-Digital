"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  Users,
  Target,
  Award,
  Lightbulb,
  TrendingUp,
  ArrowRight,
  Zap,
  Globe,
  Shield,
} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-950">
      {/* Hero Section */}
      <section className="relative bg-gray-950 py-20 lg:py-32 overflow-hidden">
        {/* Animated Background Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-grid-gray-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"
        />

        {/* Floating Background Orbs */}
        <motion.div
          animate={{
            y: [-20, 20, -20],
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-10 w-32 h-32 bg-red-600/10 rounded-full blur-2xl"
        />
        <motion.div
          animate={{
            y: [20, -20, 20],
            rotate: [360, 0],
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-40 right-20 w-24 h-24 bg-blue-200/30 rounded-full blur-2xl"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content Side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center lg:text-left"
            >
              {/* Trust Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="inline-flex items-center px-4 py-2 bg-red-600/10 text-red-600 rounded-full text-sm font-semibold mb-8"
              >
                <Shield className="w-4 h-4 mr-2" />
                Trusted by Industry Leaders Since 2019
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.1]"
              >
                About{" "}
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="text-red-600 relative"
                >
                  Aventus Digital
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 1.5 }}
                    className="absolute bottom-0 left-0 right-0 h-1 bg-red-600/30 rounded-full origin-left"
                  />
                </motion.span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl lg:max-w-none"
              >
                We're not just another marketing agency. We're growth
                architects, partnership builders, and revenue accelerators
                dedicated to transforming businesses through strategic affiliate
                marketing excellence.
              </motion.p>

              {/* Key Highlights */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="grid sm:grid-cols-2 gap-4 mb-10"
              >
                {[
                  { icon: Globe, text: "Global Network of 10K+ Affiliates" },
                  { icon: Zap, text: "AI-Powered Campaign Optimization" },
                  { icon: Target, text: "95% Campaign Success Rate" },
                  { icon: TrendingUp, text: "$50M+ Revenue Generated" },
                ].map((item, index) => (
                  <motion.div
                    key={item.text}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <item.icon className="w-5 h-5 text-red-600 flex-shrink-0" />
                    <span className="text-gray-200 font-medium text-sm">
                      {item.text}
                    </span>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Button
                    size="lg"
                    className="bg-red-600 hover:bg-red-600-dark text-white px-8 py-4 text-base font-semibold shadow-lg group"
                  >
                    Start Your Journey
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 text-base font-semibold"
                  >
                    Our Story
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Visual Side - Enhanced Dashboard */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex justify-center lg:justify-end"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="relative"
              >
                {/* Main Visual Container */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="relative bg-white rounded-3xl shadow-2xl p-8 max-w-md"
                >
                  <div className="space-y-6">
                    {/* Header with Team Indicator */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-600-dark rounded-full flex items-center justify-center">
                          <Users className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">
                            Team Performance
                          </div>
                          <div className="text-sm text-gray-500">
                            Live Analytics
                          </div>
                        </div>
                      </div>
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-3 h-3 bg-green-500 rounded-full"
                      />
                    </div>

                    {/* Enhanced Stats Grid */}
                    <div className="grid grid-cols-2 gap-4">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                          type: "spring",
                          stiffness: 200,
                          damping: 15,
                          delay: 1.2,
                        }}
                        className="bg-gradient-to-br from-red-600/10 to-red-600/20 rounded-xl p-4 text-center relative overflow-hidden"
                      >
                        <motion.div
                          animate={{ x: [-100, 100] }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        />
                        <div className="text-2xl font-bold text-red-600">
                          500+
                        </div>
                        <div className="text-sm text-gray-600">Partners</div>
                      </motion.div>
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                          type: "spring",
                          stiffness: 200,
                          damping: 15,
                          delay: 1.4,
                        }}
                        className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 text-center"
                      >
                        <div className="text-2xl font-bold text-blue-600">
                          4.2x
                        </div>
                        <div className="text-sm text-gray-600">Avg ROAS</div>
                      </motion.div>
                    </div>

                    {/* Progress Indicators */}
                    <div className="space-y-3">
                      <div className="text-sm font-medium text-gray-900">
                        Growth Metrics
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Revenue Growth</span>
                          <span className="font-semibold">340%</span>
                        </div>
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: "85%" }}
                          transition={{ duration: 2, delay: 1.5 }}
                          className="w-full bg-gray-200 rounded-full h-2"
                        >
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 1.5, delay: 2 }}
                            className="bg-gradient-to-r from-red-600 to-red-600-dark h-2 rounded-full"
                          />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Enhanced Floating Elements */}
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-red-600/20 to-red-600/30 rounded-full flex items-center justify-center"
                >
                  <Target className="w-8 h-8 text-red-600" />
                </motion.div>

                <motion.div
                  animate={{
                    y: [-10, 10, -10],
                    rotate: [0, -180, -360],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -bottom-8 -left-8 w-12 h-12 bg-gradient-to-br from-blue-200/40 to-purple-200/40 rounded-full flex items-center justify-center"
                >
                  <Lightbulb className="w-6 h-6 text-blue-600" />
                </motion.div>

                {/* Enhanced Results Badge */}
                <motion.div
                  initial={{ opacity: 0, y: -30, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.8, delay: 1.5 }}
                  className="absolute -top-4 left-4 bg-gradient-to-r from-white to-gray-50 rounded-full px-6 py-3 shadow-xl border border-gray-100"
                >
                  <div className="flex items-center space-x-3">
                    <motion.div
                      animate={{
                        scale: [1, 1.3, 1],
                        boxShadow: [
                          "0 0 0 0 rgba(34, 197, 94, 0.7)",
                          "0 0 0 10px rgba(34, 197, 94, 0)",
                          "0 0 0 0 rgba(34, 197, 94, 0)",
                        ],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="w-3 h-3 bg-green-500 rounded-full"
                    />
                    <span className="text-sm font-semibold text-gray-900">
                      Award-Winning Team
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 lg:py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                To empower businesses of all sizes to achieve sustainable growth
                through innovative affiliate marketing strategies. We believe in
                building authentic partnerships that create value for brands,
                affiliates, and customers alike.
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white mb-1">
                      Performance-Driven Results
                    </h3>
                    <p className="text-gray-400">
                      Every campaign is optimized for maximum ROI and
                      sustainable growth.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white mb-1">
                      Transparent Partnership
                    </h3>
                    <p className="text-gray-400">
                      Clear communication and honest reporting in all our
                      relationships.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white mb-1">
                      Cutting-Edge Technology
                    </h3>
                    <p className="text-gray-400">
                      Leveraging the latest tools and platforms for optimal
                      performance.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <div className="bg-gray-800 rounded-3xl shadow-2xl p-8 max-w-md border border-gray-700">
                  <div className="text-center space-y-6">
                    <div className="w-20 h-20 bg-red-600/10 rounded-full flex items-center justify-center mx-auto">
                      <Target className="w-10 h-10 text-red-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        500+
                      </h3>
                      <p className="text-gray-300">Successful Campaigns</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-red-600/10 rounded-xl p-4 text-center">
                        <div className="text-xl font-bold text-red-600">
                          $2.4M+
                        </div>
                        <div className="text-sm text-gray-300">
                          Revenue Generated
                        </div>
                      </div>
                      <div className="bg-blue-900/30 rounded-xl p-4 text-center">
                        <div className="text-xl font-bold text-blue-400">
                          4.2x
                        </div>
                        <div className="text-sm text-gray-300">
                          Average ROAS
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-red-600/20 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-red-600-dark/30 rounded-full animate-pulse delay-300"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              These principles guide everything we do and shape how we build
              relationships with our partners.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gray-800 rounded-2xl shadow-lg border border-gray-700">
              <div className="w-16 h-16 bg-red-600/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Partnership
              </h3>
              <p className="text-gray-300">
                Building long-term relationships based on mutual success and
                trust.
              </p>
            </div>

            <div className="text-center p-6 bg-gray-800 rounded-2xl shadow-lg border border-gray-700">
              <div className="w-16 h-16 bg-red-600/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Innovation
              </h3>
              <p className="text-gray-300">
                Continuously exploring new strategies and technologies to stay
                ahead.
              </p>
            </div>

            <div className="text-center p-6 bg-gray-800 rounded-2xl shadow-lg border border-gray-700">
              <div className="w-16 h-16 bg-red-600/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Excellence
              </h3>
              <p className="text-gray-300">
                Delivering exceptional results through attention to detail and
                expertise.
              </p>
            </div>

            <div className="text-center p-6 bg-gray-800 rounded-2xl shadow-lg border border-gray-700">
              <div className="w-16 h-16 bg-red-600/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Growth
              </h3>
              <p className="text-gray-300">
                Focused on driving measurable growth for all our partners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 lg:py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              A diverse group of marketing experts, data analysts, and
              relationship builders working together to drive your success.
            </p>
          </div>

          <div className="bg-gray-800 border border-gray-700 rounded-3xl p-8 lg:p-12 text-center">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Work with Experts?
              </h3>
              <p className="text-lg text-gray-300 mb-8">
                Our team combines over 50 years of combined experience in
                affiliate marketing, digital strategy, and performance
                optimization. We're here to help you achieve your growth goals.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-red-600 hover:bg-red-600-dark text-white px-8 py-4 text-lg font-semibold"
                >
                  Schedule a Consultation
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-8 py-4 text-lg font-semibold"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 lg:py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Results That Speak for Themselves
            </h2>
            <p className="text-lg text-gray-300">
              Here's what we've accomplished with our partners
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gray-800 rounded-2xl shadow-lg border border-gray-700">
              <div className="text-3xl font-bold text-red-600 mb-2">
                500+
              </div>
              <div className="text-gray-300 font-medium">Active Partners</div>
            </div>

            <div className="text-center p-6 bg-gray-800 rounded-2xl shadow-lg border border-gray-700">
              <div className="text-3xl font-bold text-red-600 mb-2">
                $2.4M+
              </div>
              <div className="text-gray-300 font-medium">Revenue Generated</div>
            </div>

            <div className="text-center p-6 bg-gray-800 rounded-2xl shadow-lg border border-gray-700">
              <div className="text-3xl font-bold text-red-600 mb-2">
                4.2x
              </div>
              <div className="text-gray-300 font-medium">Average ROAS</div>
            </div>

            <div className="text-center p-6 bg-gray-800 rounded-2xl shadow-lg border border-gray-700">
              <div className="text-3xl font-bold text-red-600 mb-2">98%</div>
              <div className="text-gray-300 font-medium">
                Client Satisfaction
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

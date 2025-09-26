"use client";

import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  type Variants,
} from "framer-motion";
import { useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";

const stats = [
  {
    number: 500,
    suffix: "+",
    label: "brand partners",
    delay: 0,
  },
  {
    number: 2400,
    suffix: "K+",
    label: "revenue generated",
    delay: 0.2,
  },
  {
    number: 98,
    suffix: "%",
    label: "client satisfaction",
    delay: 0.4,
  },
];

// Enhanced animated number component
function useAnimatedNumber(target: number, duration: number = 2500) {
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    duration,
    bounce: 0.2,
    restDelta: 0.1,
  });
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(target);
    }
  }, [isInView, target, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.round(latest).toString();
      }
    });
    return unsubscribe;
  }, [springValue]);

  return ref;
}

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

const statsVariants: Variants = {
  hidden: { opacity: 0, y: 60, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
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

const lineVariants: Variants = {
  hidden: { width: 0 },
  visible: {
    width: "4rem",
    transition: {
      duration: 0.8,
      delay: 0.6,
      ease: "easeOut",
    },
  },
};

export default function AboutUs() {
  return (
    <section className="py-24 px-4 max-w-7xl mx-auto bg-gradient-to-b from-gray-50/30 to-transparent">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
      >
        {/* Centered Header */}
        <motion.div variants={headerVariants} className="text-center mb-20">
          <motion.h2
            className="text-sm font-semibold text-gray-700 mb-6 tracking-[0.25em] uppercase"
            variants={headerVariants}
          >
            About Us
          </motion.h2>
          <motion.div
            className="w-20 h-0.5 bg-green-700 mx-auto mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
          <motion.h3
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight max-w-4xl mx-auto"
            variants={headerVariants}
          >
            <span className="text-green-700 relative">
              Aventus Digital
              <motion.div
                className="absolute -bottom-1 left-0 h-0.5 bg-green-700/30"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8 }}
              />
            </span>{" "}
            powers the next generation of affiliate marketing
          </motion.h3>
        </motion.div>

        {/* Enhanced Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-24">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={statsVariants}
              custom={index}
              className="text-center group"
            >
              <div className="relative">
                {/* Animated background circle */}
                <motion.div
                  className="absolute -inset-4 rounded-full bg-green-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />

                <div className="relative z-10">
                  <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-green-700 mb-3 leading-none">
                    <AnimatedNumber target={stat.number} delay={stat.delay} />
                    <span className="text-green-700">{stat.suffix}</span>
                  </div>

                  <motion.div
                    className="bg-green-700 h-0.5 mx-auto mb-4 group-hover:bg-green-600 transition-colors duration-300"
                    variants={lineVariants}
                  />

                  <p className="text-gray-600 text-lg font-medium capitalize tracking-wide group-hover:text-gray-800 transition-colors duration-300">
                    {stat.label}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Content Section */}
        <motion.div variants={contentVariants} className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 items-center">
            <motion.div
              variants={contentVariants}
              className="lg:col-span-3 text-center lg:text-left"
            >
              <motion.p
                className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8"
                variants={contentVariants}
              >
                We connect brands with high-performance affiliates through
                strategic partnerships, data-driven optimization, and
                cutting-edge technology. Our proven methodology consistently
                delivers superior ROI and sustainable growth for our partners.
              </motion.p>

              {/* Key highlights */}
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center"
                variants={contentVariants}
              >
                <div className="p-4 rounded-lg bg-green-50 border border-green-100">
                  <div className="text-2xl font-bold text-green-700 mb-2">
                    Strategic
                  </div>
                  <div className="text-sm text-gray-600">Partnerships</div>
                </div>
                <div className="p-4 rounded-lg bg-green-50 border border-green-100">
                  <div className="text-2xl font-bold text-green-700 mb-2">
                    Data-Driven
                  </div>
                  <div className="text-sm text-gray-600">Optimization</div>
                </div>
                <div className="p-4 rounded-lg bg-green-50 border border-green-100">
                  <div className="text-2xl font-bold text-green-700 mb-2">
                    Cutting-Edge
                  </div>
                  <div className="text-sm text-gray-600">Technology</div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              variants={contentVariants}
              className="lg:col-span-1 flex justify-center lg:justify-end"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="px-10 py-4 text-green-700 border-2 border-green-700 hover:bg-green-700 hover:text-white transition-all duration-300 font-semibold tracking-wider text-sm shadow-lg hover:shadow-xl rounded-full"
                >
                  LEARN MORE
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Optional bottom CTA section */}
        <motion.div
          variants={contentVariants}
          className="text-center mt-20 pt-16 border-t border-gray-200"
        >
          <motion.p
            className="text-gray-600 text-lg mb-6"
            variants={contentVariants}
          >
            Ready to scale your affiliate marketing efforts?
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={contentVariants}
          >
            <Button
              size="lg"
              className="px-8 py-3 bg-green-700 hover:bg-green-800 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Get Started Today
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-3 border-2 border-gray-300 hover:bg-gray-50 rounded-full font-semibold transition-all duration-200"
            >
              Schedule a Call
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

// Enhanced AnimatedNumber component
function AnimatedNumber({
  target,
  delay = 0,
}: {
  target: number;
  delay?: number;
}) {
  const ref = useAnimatedNumber(target);
  return <span ref={ref}>0</span>;
}

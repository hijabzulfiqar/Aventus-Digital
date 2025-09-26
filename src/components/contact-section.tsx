"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Users2,
  Zap,
  ArrowRight,
  Send,
  Star,
} from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    details: ["123 Digital Avenue", "Suite 456", "New York, NY 10001"],
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+1 (555) 123-4567"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@aventusdigital.com", "support@aventusdigital.com"],
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 4:00 PM"],
  },
];

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section
      className="relative bg-gradient-to-br from-gray-50 via-white to-army-green/5 py-20 lg:py-32 overflow-hidden"
      id="contact"
    >
      {/* Animated Background Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-grid-gray-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"
      />

      {/* Floating Background Shapes */}
      <motion.div
        animate={{
          y: [-30, 30, -30],
          rotate: [0, 180, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 right-10 w-40 h-40 bg-army-green/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          y: [40, -40, 40],
          x: [-20, 20, -20],
          scale: [1.2, 1, 1.2],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-20 left-10 w-32 h-32 bg-blue-200/20 rounded-full blur-2xl"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Hero Section for Contact Page */}
        <div className="text-center mb-20">
          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 bg-army-green/10 text-army-green rounded-full text-sm font-semibold mb-8"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            24/7 Support • Free Consultation • Expert Team
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Let's{" "}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-army-green relative"
            >
              Transform
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="absolute bottom-0 left-0 right-0 h-1 bg-army-green/30 rounded-full origin-left"
              />
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="text-gray-900"
            >
              Your Business
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg sm:text-xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto"
          >
            Ready to scale your business with expert affiliate marketing? Get
            your free consultation today and discover how we can accelerate your
            growth with proven strategies and cutting-edge technology.
          </motion.p>

          {/* Key Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex flex-wrap justify-center gap-8 mb-10"
          >
            {[
              { icon: Users2, text: "500+ Partner Success Stories" },
              { icon: Zap, text: "90-Day Results Guarantee" },
              { icon: Star, text: "98% Client Satisfaction" },
            ].map((item, index) => (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg"
              >
                <item.icon className="w-5 h-5 text-army-green" />
                <span className="text-gray-700 font-medium text-sm">
                  {item.text}
                </span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="w-20 h-1 bg-gradient-to-r from-army-green to-army-green-dark mx-auto rounded-full origin-center"
          />
        </div>

        {/* Main Content Grid - Fixed alignment */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8 h-full flex flex-col"
          >
            <div className="flex-1">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-2xl font-semibold text-gray-900 mb-6"
              >
                Get In Touch
              </motion.h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    whileHover={{
                      y: -8,
                      transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      },
                    }}
                  >
                    <Card className="bg-white/80 backdrop-blur-sm border-gray-200/50 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-3">
                          <motion.div
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{
                              type: "spring",
                              stiffness: 400,
                              damping: 10,
                            }}
                            className="w-12 h-12 bg-gradient-to-br from-army-green to-army-green-dark rounded-full flex items-center justify-center flex-shrink-0 shadow-lg"
                          >
                            <info.icon className="w-6 h-6 text-white" />
                          </motion.div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">
                              {info.title}
                            </h4>
                            {info.details.map((detail, idx) => (
                              <p
                                key={idx}
                                className="text-gray-600 text-sm leading-relaxed"
                              >
                                {detail}
                              </p>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Free Strategy Session Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="bg-gradient-to-br from-army-green to-army-green-dark text-white shadow-2xl overflow-hidden relative">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute top-4 right-4 w-16 h-16 bg-white/10 rounded-full flex items-center justify-center"
                >
                  <Star className="w-8 h-8 text-white" />
                </motion.div>
                <CardHeader>
                  <CardTitle className="text-white text-xl">
                    Free Strategy Session
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/90 mb-6 leading-relaxed">
                    Get a comprehensive analysis of your current marketing
                    strategy and discover opportunities for explosive growth
                    with our expert team.
                  </p>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Button
                      variant="secondary"
                      className="bg-white text-army-green hover:bg-gray-100 font-semibold group"
                    >
                      Book Your Session
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-full"
          >
            <Card className="bg-white/80 backdrop-blur-sm border-gray-200/50 shadow-2xl h-full flex flex-col">
              <CardHeader className="flex-shrink-0">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-8 h-8 bg-army-green/10 rounded-full flex items-center justify-center">
                    <Send className="w-4 h-4 text-army-green" />
                  </div>
                  <CardTitle className="text-2xl text-gray-900">
                    Send Us a Message
                  </CardTitle>
                </motion.div>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="text-gray-600 text-sm mt-2"
                >
                  We'll get back to you within 24 hours
                </motion.p>
              </CardHeader>

              <CardContent className="flex-1 flex flex-col">
                <form
                  onSubmit={handleSubmit}
                  className="space-y-5 flex-1 flex flex-col"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.0 }}
                    className="grid sm:grid-cols-2 gap-4"
                  >
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Full Name *
                      </label>
                      <motion.div
                        whileFocus={{ scale: 1.02 }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 20,
                        }}
                      >
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full border-gray-300 focus:border-army-green focus:ring-army-green/20"
                          placeholder="Your full name"
                        />
                      </motion.div>
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Email Address *
                      </label>
                      <motion.div
                        whileFocus={{ scale: 1.02 }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 20,
                        }}
                      >
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full border-gray-300 focus:border-army-green focus:ring-army-green/20"
                          placeholder="your@email.com"
                        />
                      </motion.div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                  >
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Company Name
                    </label>
                    <motion.div
                      whileFocus={{ scale: 1.02 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                    >
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full border-gray-300 focus:border-army-green focus:ring-army-green/20"
                        placeholder="Your company name"
                      />
                    </motion.div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.4 }}
                    className="flex-1 flex flex-col"
                  >
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Message *
                    </label>
                    <motion.div
                      whileFocus={{ scale: 1.01 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                      className="flex-1"
                    >
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full h-full min-h-[120px] border-gray-300 focus:border-army-green focus:ring-army-green/20 resize-none"
                        placeholder="Tell us about your project and how we can help you achieve your goals..."
                      />
                    </motion.div>
                  </motion.div>

                  <div className="space-y-4 mt-auto">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1.6 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-army-green to-army-green-dark hover:from-army-green-dark hover:to-army-green text-white font-semibold py-3 shadow-lg hover:shadow-xl transition-all duration-300 group"
                      >
                        Send Message
                        <motion.div
                          animate={{ x: [0, 5, 0] }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className="ml-2"
                        >
                          <Send className="w-4 h-4" />
                        </motion.div>
                      </Button>
                    </motion.div>

                    {/* Trust Indicators */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 1.8 }}
                      className="flex items-center justify-center space-x-4 text-sm text-gray-500"
                    >
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>Secure & Private</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span>24h Response</span>
                      </div>
                    </motion.div>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

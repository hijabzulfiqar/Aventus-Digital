import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Marquee } from "@/components/ui/marquee";
import Link from "next/link";
import React, { ComponentProps } from "react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    designation: "VP of Marketing",
    company: "EcoStyle Brands",
    testimonial:
      "Aventus Digital increased our affiliate revenue by 340% in just 6 months. Their strategic approach and partner network are unmatched!",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    designation: "E-commerce Director",
    company: "FitTech Solutions",
    testimonial:
      "The ROI we've achieved through their affiliate program management exceeded all expectations. Outstanding results and support.",
    avatar: "https://randomuser.me/api/portraits/men/6.jpg",
  },
  {
    id: 3,
    name: "Amanda Foster",
    designation: "Brand Manager",
    company: "Luxury Home Co.",
    testimonial:
      "Their data-driven approach to affiliate marketing transformed our customer acquisition strategy. Highly recommended!",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    id: 4,
    name: "David Kim",
    designation: "Growth Marketing Lead",
    company: "TechStart Inc.",
    testimonial:
      "Aventus Digital's performance marketing expertise helped us scale from startup to $10M ARR. Game-changing partnership!",
    avatar: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    id: 5,
    name: "Lisa Thompson",
    designation: "Marketing Director",
    company: "Beauty Essentials",
    testimonial:
      "The quality of affiliates and the attribution tracking they provide is exceptional. Our ROAS improved by 280%.",
    avatar: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    id: 6,
    name: "James Wilson",
    designation: "CEO",
    company: "Outdoor Gear Pro",
    testimonial:
      "Working with Aventus Digital was the best decision for our brand growth. Professional, results-driven, and transparent.",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
  },
];

const TestimonialsSections = () => (
  <div className="min-h-screen flex justify-center items-center py-12">
    <div className="h-full w-full">
      <h2 className="text-5xl font-semibold text-center tracking-[-0.03em] px-6 text-pretty">
        Client Success Stories
      </h2>
      <p className="mt-3 text-center text-muted-foreground text-xl">
        Discover how brands achieve exceptional growth through our affiliate marketing expertise
      </p>
      <div className="mt-14 relative">
        <div className="z-10 absolute left-0 inset-y-0 w-[15%] bg-gradient-to-r from-background to-transparent" />
        <div className="z-10 absolute right-0 inset-y-0 w-[15%] bg-gradient-to-l from-background to-transparent" />
        <Marquee pauseOnHover className="[--duration:20s]">
          <TestimonialList />
        </Marquee>
        <Marquee pauseOnHover reverse className="mt-0 [--duration:20s]">
          <TestimonialList />
        </Marquee>
      </div>
    </div>
  </div>
);

const TestimonialList = () =>
  testimonials.map((testimonial) => (
    <div
      key={testimonial.id}
      className="min-w-96 max-w-sm bg-accent rounded-xl p-6"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarFallback className="text-xl font-medium bg-primary text-primary-foreground">
              {testimonial.name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="text-lg font-semibold">{testimonial.name}</p>
            <p className="text-sm text-gray-500">{testimonial.designation}</p>
          </div>
        </div>
        <Button variant="ghost" size="icon" asChild>
          <Link href="#" target="_blank">
            <TwitterLogo className="w-4 h-4" />
          </Link>
        </Button>
      </div>
      <p className="mt-5 text-[17px]">{testimonial.testimonial}</p>
    </div>
  ));

const TwitterLogo = (props: ComponentProps<"svg">) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <title>X</title>
    <path
      fill="currentColor"
      d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
    />
  </svg>
);

export default TestimonialsSections;

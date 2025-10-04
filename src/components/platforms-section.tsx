import {
  TrendingUp,
  Users,
  Target,
  BarChart3,
  Shield,
  Zap,
} from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: TrendingUp,
    title: "Revenue Optimization",
    description:
      "Maximize affiliate commissions through data-driven optimization and strategic campaign management.",
  },
  {
    icon: Users,
    title: "Partner Network",
    description:
      "Access premium affiliate networks and build lasting partnerships with top-performing marketers.",
  },
  {
    icon: Target,
    title: "Precision Targeting",
    description:
      "Reach your ideal customers with advanced audience segmentation and behavioral targeting tools.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description:
      "Monitor campaign performance with comprehensive dashboards and actionable insights in real-time.",
  },
  {
    icon: Shield,
    title: "Brand Protection",
    description:
      "Ensure brand compliance and quality control across all affiliate marketing channels and partnerships.",
  },
  {
    icon: Zap,
    title: "Rapid Scaling",
    description:
      "Scale successful campaigns quickly with automated bidding and intelligent budget allocation systems.",
  },
  {
    icon: Target,
    title: "Conversion Tracking",
    description:
      "Track every conversion with pixel-perfect attribution to understand what drives your success.",
  },
  {
    icon: BarChart3,
    title: "Performance Reports",
    description:
      "Generate detailed performance reports that showcase ROI and campaign effectiveness to stakeholders.",
  },
  {
    icon: TrendingUp,
    title: "Growth Strategy",
    description:
      "Develop comprehensive growth strategies that align with your business objectives and market opportunities.",
  },
];

const Features07Page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950">
      <div className="max-w-(--breakpoint-xl) w-full py-10 px-6">
        <h2 className="text-4xl md:text-[2.75rem] md:leading-[1.2] font-semibold tracking-[-0.03em] sm:max-w-xl text-pretty sm:mx-auto sm:text-center text-white">
          Comprehensive Marketing Solutions
        </h2>
        <p className="mt-2 text-gray-400 text-lg sm:text-xl sm:text-center">
          Everything you need to succeed in affiliate marketing and digital growth.
        </p>
        <div className="mt-12 sm:mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-y-8">
          {features.map((feature, index) => (
            <Link key={index} href="#">
              <div className="flex gap-6 items-center rounded-lg -mx-2 sm:mx-0 max-w-lg hover:bg-gray-800/50 p-4 transition-colors border border-transparent hover:border-red-900/30">
                <div className="h-16 aspect-square shrink-0 rounded-lg bg-red-950/30 flex items-center justify-center border border-red-900/30">
                  <feature.icon className="w-8 h-8 text-red-500" />
                </div>
                <div className="">
                  <span className="font-semibold tracking-[-0.015em] text-lg text-white">
                    {feature.title}
                  </span>
                  <p className="mt-1 text-sm text-gray-400 text-pretty">
                    {feature.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features07Page;

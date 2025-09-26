import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Rocket, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: CheckCircle,
    title: "Develop Goals",
    description: "We work closely with you to understand your business needs and develop customized goals that align with your growth objectives.",
  },
  {
    number: "02",
    icon: Rocket,
    title: "On-boarding & Campaign Launch",
    description: "Our expert team handles the complete on-boarding process and launches your affiliate campaigns with precision and strategy.",
  },
  {
    number: "03",
    icon: TrendingUp,
    title: "Deliver Results & Optimize",
    description: "We continuously monitor performance, deliver proven results, and optimize campaigns to ensure maximum ROI and sustained growth.",
  },
];

export function WorkingWithSection() {
  return (
    <section className="bg-white py-20" id="working-with">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-6">
            Working with Aventus Digital
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our proven three-step process ensures successful affiliate marketing campaigns
            that drive real results for your business.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="bg-white border-2 border-gray-100 hover:border-army-green hover:shadow-lg transition-all duration-300 h-full">
                <CardHeader className="text-center pb-4">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-army-green rounded-full flex items-center justify-center mx-auto">
                      <step.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-black rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">{step.number}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-black">
                    {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>

              {/* Connecting Arrow */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="w-8 h-0.5 bg-army-green"></div>
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-army-green rotate-45 translate-x-1"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
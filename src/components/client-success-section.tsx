import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Target } from "lucide-react";

const Features03Page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-7xl mx-auto py-12 px-6">
        <h2 className="text-3xl leading-10 sm:text-4xl md:text-[40px] md:leading-13 font-semibold tracking-tight">
          Accelerate Growth: <br />
          Performance-Driven Affiliate Solutions
        </h2>
        <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-xl p-6 col-span-1 md:col-span-2 lg:col-span-1 shadow-lg">
            {/* Media 1 Mobile */}
            <div className="md:hidden mb-6 aspect-video w-full bg-army-green/10 rounded-xl flex items-center justify-center">
              <TrendingUp className="w-12 h-12 text-army-green" />
            </div>

            <span className="text-xl font-semibold tracking-tight">
              Scale Revenue
            </span>

            <ul className="mt-6 space-y-4">
              <li>
                <div className="flex items-start gap-3">
                  <TrendingUp className="shrink-0 text-army-green" />
                  <p className="-mt-0.5">
                    Connect with high-converting affiliates who drive real results
                    for your brand and maximize ROI.
                  </p>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <Target className="shrink-0 text-army-green" />
                  <p className="-mt-0.5">
                    Advanced targeting and optimization tools ensure your campaigns
                    reach the right audience at the perfect moment.
                  </p>
                </div>
              </li>
            </ul>

            <Button className="mt-8 w-full bg-army-green hover:bg-army-green-dark">
              Start Growing <ArrowRight />
            </Button>
          </div>
          {/* Media 1 Desktop */}
          <div className="hidden md:block bg-army-green/10 rounded-xl col-span-1 md:col-span-3 lg:col-span-2 flex items-center justify-center">
            <TrendingUp className="w-24 h-24 text-army-green" />
          </div>

          {/* Media 2 Desktop */}
          <div className="hidden md:block bg-gray-800/10 rounded-xl col-span-1 md:col-span-3 lg:col-span-2 flex items-center justify-center">
            <Target className="w-24 h-24 text-gray-800" />
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl p-6 col-span-1 md:col-span-2 lg:col-span-1 shadow-lg">
            {/* Media 2 Mobile */}
            <div className="md:hidden mb-6 aspect-video w-full bg-gray-800/10 rounded-xl flex items-center justify-center">
              <Target className="w-12 h-12 text-gray-800" />
            </div>

            <span className="text-xl font-semibold tracking-tight">
              Optimize Performance
            </span>

            <ul className="mt-6 space-y-4">
              <li>
                <div className="flex items-start gap-3">
                  <Target className="shrink-0 text-gray-800" />
                  <p className="-mt-0.5">
                    Real-time analytics and AI-powered insights help you optimize
                    campaigns for maximum conversion rates.
                  </p>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <TrendingUp className="shrink-0 text-gray-800" />
                  <p className="-mt-0.5">
                    Track every touchpoint with advanced attribution modeling
                    to understand what drives your success.
                  </p>
                </div>
              </li>
            </ul>

            <Button className="mt-8 w-full bg-gray-800 hover:bg-gray-900">
              View Analytics <ArrowRight />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features03Page;

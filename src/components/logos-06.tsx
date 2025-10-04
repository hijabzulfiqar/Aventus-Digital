import {
  Logo01,
  Logo02,
  Logo03,
  Logo04,
  Logo05,
  Logo06,
  Logo07,
  Logo08,
} from "@/components/ui/logos";
import { Marquee } from "@/components/ui/marquee";

const Logos06Page = () => {
  return (
    <div className="bg-gray-950 flex items-center justify-center px-6 py-12">
      <div className="overflow-hidden">
        <p className="text-center text-xl font-medium text-gray-400">
          Trusted by 500+ leading brands worldwide
        </p>

        <div className="mt-10 flex items-center justify-center gap-x-14 gap-y-10 max-w-(--breakpoint-xl)">
          <Marquee
            pauseOnHover
            className="[--duration:20s] [&_svg]:mr-10 mask-x-from-70% mask-x-to-90%"
          >
            <Logo01 />
            <Logo02 />
            <Logo03 />
            <Logo04 />
            <Logo05 />
            <Logo06 />
            <Logo07 />
            <Logo08 />
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Logos06Page;

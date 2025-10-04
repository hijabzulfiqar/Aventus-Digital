import { Button } from "@/components/ui/button";
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";

const Navigation = () => {
  return (
    <nav className="fixed top-6 inset-x-4 h-16 bg-gray-900/80 backdrop-blur-md border border-gray-800 max-w-screen-xl mx-auto rounded-full z-50">
      <div className="h-full flex items-center justify-between mx-auto px-4">
        <Logo />

        {/* Desktop Menu */}
        <NavMenu className="hidden md:block" />

        <div className="flex items-center gap-3">
          <Button
            // variant="outline"
            className="hidden sm:inline-flex rounded-full bg-gray-800 text-white hover:bg-gray-800 hover:text-white"
          >
            Brand Sign Up
          </Button>
          <Button
            // variant="outline"
            className="hidden sm:inline-flex rounded-full bg-gray-800 text-white hover:bg-gray-800 hover:text-white"
          >
            Affiliate Sign Up
          </Button>
          <Button className="rounded-full md:block hidden bg-red-600 text-white hover:bg-red-600 hover:text-white">
            Login
          </Button>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

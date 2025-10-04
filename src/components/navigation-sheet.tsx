import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";

export const NavigationSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-gray-800 text-white "
        >
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-gray-900/95 backdrop-blur-md border-gray-800">
        <Logo />
        <NavMenu orientation="vertical" className="mt-12" />
        <div className="mt-8 space-y-3">
          <Button
            variant="outline"
            className="w-full rounded-full bg-gray-800 text-white border-red-600/50"
          >
            Brand Sign Up
          </Button>
          <Button
            variant="outline"
            className="w-full rounded-full bg-gray-800 text-white border-red-600/50"
          >
            Affiliate Sign Up
          </Button>
          <Button className="w-full rounded-full bg-red-600 text-white">
            Login
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

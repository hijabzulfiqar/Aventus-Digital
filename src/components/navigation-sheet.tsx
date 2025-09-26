import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";

export const NavigationSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-full">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <Logo />
        <NavMenu orientation="vertical" className="mt-12" />
        <div className="mt-8 space-y-3">
          <Button variant="outline" className="w-full rounded-full">
            Brand Sign Up
          </Button>
          <Button variant="outline" className="w-full rounded-full">
            Affiliate Sign Up
          </Button>
          <Button className="w-full rounded-full">Login</Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

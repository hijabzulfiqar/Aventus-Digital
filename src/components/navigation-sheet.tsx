"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Logo } from "./logo";
import Link from "next/link";

const navLinks = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "/about" },
  { title: "Contact", href: "/contact" },
];

export const NavigationSheet = () => {
  const [open, setOpen] = useState(false);

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
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
        <div onClick={handleLinkClick}>
          <Logo />
        </div>
        <nav className="mt-12 flex flex-col gap-4">
          {navLinks.map(({ title, href }) => (
            <Link
              key={title}
              href={href}
              onClick={handleLinkClick}
              className="text-gray-300 hover:text-red-500 transition-colors px-3 py-2 text-lg"
            >
              {title}
            </Link>
          ))}
        </nav>
        <div className="mt-8 space-y-3">
          <Button
            variant="outline"
            className="w-full rounded-full bg-gray-800 text-white border-red-600/50"
            asChild
          >
            <Link
              href="https://aventus.everflowclient.io/advertiser/signup"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkClick}
            >
              Brand Sign Up
            </Link>
          </Button>
          <Button
            variant="outline"
            className="w-full rounded-full bg-gray-800 text-white border-red-600/50"
            asChild
          >
            <Link
              href="https://aventus.everflowclient.io/affiliate/signup"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkClick}
            >
              Affiliate Sign Up
            </Link>
          </Button>
          <Button className="w-full rounded-full bg-red-600 text-white" asChild>
            <Link
              href="https://aventus.everflowclient.io/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkClick}
            >
              Login
            </Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

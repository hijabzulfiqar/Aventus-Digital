import { Separator } from "@/components/ui/separator";
import {
  TwitterIcon,
  FacebookIcon,
  LinkedinIcon,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
const footerLinks = [
  {
    title: "About Us",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
  {
    title: "Terms & Conditions",
    href: "/terms",
  },
  {
    title: "Privacy Policy",
    href: "/privacy",
  },
];

const Footer05Page = () => {
  return (
    <div className=" flex flex-col">
      <div className="grow bg-gray-950" />
      <footer className="border-t border-gray-800 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-10 sm:py-12 flex flex-col justify-start items-center">
            {/* Logo */}
            <div className="flex items-center">
              <Image
                src="/images/Logo-w1.png"
                alt="Aventus Digital"
                width={80}
                height={32}
                className="object-contain max-h-12 sm:max-h-14 mb-1"
              />
            </div>

            <ul className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 sm:gap-x-8 text-sm sm:text-base">
              {footerLinks.map(({ title, href }) => (
                <li key={title}>
                  <Link
                    href={href}
                    className="text-gray-400 hover:text-red-500 transition-colors whitespace-nowrap"
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <Separator className="bg-gray-800" />
          <div className="py-6 sm:py-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-4 sm:gap-x-4">
            {/* Copyright */}
            <span className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
              &copy; {new Date().getFullYear()}{" "}
              <Link href="/" className="hover:text-red-500 transition-colors">
                Aventus Digital
              </Link>
              . All rights reserved.
            </span>

            <div className="flex items-center gap-5 sm:gap-6 text-gray-400">
              <Link
                href="https://twitter.com/aventusdigital"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-500 transition-colors hover:scale-110 duration-200"
                aria-label="Twitter"
              >
                <TwitterIcon className="h-5 w-5 sm:h-6 sm:w-6" />
              </Link>
              <Link
                href="https://www.facebook.com/profile.php?id=61583348263622"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-500 transition-colors hover:scale-110 duration-200"
                aria-label="Facebook"
              >
                <FacebookIcon className="h-5 w-5 sm:h-6 sm:w-6" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/aventusdigital"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-500 transition-colors hover:scale-110 duration-200"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="h-5 w-5 sm:h-6 sm:w-6" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer05Page;

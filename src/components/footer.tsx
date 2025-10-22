import { Separator } from "@/components/ui/separator";
import {
  DribbbleIcon,
  GithubIcon,
  TwitchIcon,
  TwitterIcon,
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
];

const Footer05Page = () => {
  return (
    <div className=" flex flex-col">
      <div className="grow bg-gray-950" />
      <footer className="border-t border-gray-800 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <div className="py-12 flex flex-col justify-start items-center">
            {/* Logo */}
            <div className="flex items-center">
              <Image
                src="/images/Logo-w1.png"
                alt="Aventus Digital"
                width={80}
                height={32}
                className="object-contain max-h-14 mb-1"
              />
            </div>

            <ul className="mt-6 flex items-center gap-4 flex-wrap">
              {footerLinks.map(({ title, href }) => (
                <li key={title}>
                  <Link
                    href={href}
                    className="text-gray-400 hover:text-red-500 transition-colors"
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <Separator className="bg-gray-800" />
          <div className="py-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6 xl:px-0">
            {/* Copyright */}
            <span className="text-gray-400">
              &copy; {new Date().getFullYear()}{" "}
              <Link href="/" className="hover:text-red-500 transition-colors">
                Aventus Digital
              </Link>
              . All rights reserved.
            </span>

            <div className="flex items-center gap-5 text-gray-400">
              <Link
                href="#"
                target="_blank"
                className="hover:text-red-500 transition-colors"
              >
                <TwitterIcon className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                target="_blank"
                className="hover:text-red-500 transition-colors"
              >
                <DribbbleIcon className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                target="_blank"
                className="hover:text-red-500 transition-colors"
              >
                <TwitchIcon className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                target="_blank"
                className="hover:text-red-500 transition-colors"
              >
                <GithubIcon className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer05Page;

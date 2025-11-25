import Image from "next/image";
import Link from "next/link";

export const Logo = () => (
  <Link href="/" className="flex items-center gap-1 hover:opacity-90 transition-opacity">
    <Image
      src="/images/Logo-w1.png"
      alt="Aventus Digital"
      width={80}
      height={32}
      className="object-contain max-h-14 mb-1"
    />
    <span className="text-xl text-white font-bold">Aventus Digital</span>
  </Link>
);

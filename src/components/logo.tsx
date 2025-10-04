import Image from "next/image";

export const Logo = () => (
  <div className="flex items-center gap-1">
    <Image
      src="/images/logo-w1.png"
      alt="Aventus Digital"
      width={80}
      height={32}
      className="object-contain max-h-14 mb-1"
    />
    <span className="text-xl text-white font-bold">Aventus Digital</span>
  </div>
);

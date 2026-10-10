"use client";

import Image from "@/components/SiteImage";

export default function LogosSection() {
  return (
    <section className="relative w-full bg-white py-12 md:py-16">
      <div className="flex items-center justify-center gap-4 md:gap-12 lg:gap-16 px-4 md:px-8">
        <Image
          src="/assets/home/pvt.png"
          alt="Fatir Developers"
          width={120}
          height={80}
          className="w-20 md:w-32 lg:w-36 h-auto object-contain"
        />
        <div className="h-10 md:h-16 w-[1.5px] bg-[#003C54]" />
        <Image
          src="/assets/home/consortium.png"
          alt="DM Consortium"
          width={120}
          height={80}
          className="w-20 md:w-32 lg:w-36 h-auto object-contain"
        />
        <div className="h-10 md:h-16 w-[1.5px] bg-[#003C54]" />
        <Image
          src="/assets/home/falah.png"
          alt="FALAH Developers"
          width={120}
          height={80}
          className="w-20 md:w-32 lg:w-36 h-auto object-contain"
        />
      </div>
    </section>
  );
}

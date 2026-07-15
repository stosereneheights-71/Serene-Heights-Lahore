"use client";

import Image from "next/image";

interface FullImageSectionProps {
  imageUrl: string;
  imageAlt: string;
  objectPosition?: string;
}

export default function FullImageSection({
  imageUrl,
  imageAlt,
  objectPosition = "center",
}: FullImageSectionProps) {
  return (
    <section className="relative w-full md:h-screen bg-white">
      <img
        src={imageUrl}
        alt={imageAlt}
        className="object-fill w-full md:h-full"
        loading="lazy"
        decoding="async"
      />
    </section>
  );
}

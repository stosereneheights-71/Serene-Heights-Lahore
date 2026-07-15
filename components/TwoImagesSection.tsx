"use client";

import Image from "next/image";

interface TwoImagesSectionProps {
  leftImageUrl: string;
  leftImageAlt: string;
  rightImageUrl: string;
  rightImageAlt: string;
  backgroundColor?: string;
}

export default function TwoImagesSection({
  leftImageUrl,
  leftImageAlt,
  rightImageUrl,
  rightImageAlt,
  backgroundColor = "#ffffff",
}: TwoImagesSectionProps) {
  return (
    <section className="relative w-full" style={{ backgroundColor }}>
      <div className="flex flex-col md:grid md:grid-cols-2 md:min-h-screen">
        {/* Left Section - Image (top on mobile) */}
        <div className="relative w-full min-h-[400px] h-[60vh] md:h-auto flex items-center justify-center bg-white">
          <img
            src={leftImageUrl}
            alt={leftImageAlt}
            className="object-fill w-full h-full"
            loading="lazy"
            decoding="async"
          />
        </div>
        {/* Right Section - Image (bottom on mobile) */}
        <div className="relative w-full min-h-[400px] h-[60vh] md:h-auto flex items-center justify-center bg-white">
          <img
            src={rightImageUrl}
            alt={rightImageAlt}
            className="object-fill w-full h-full"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
}

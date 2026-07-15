"use client";

import Image from "next/image";

interface OverlayImageWithTextSectionProps {
  backgroundImageUrl: string;
  overlayImageUrl: string;
  text: string;
  backgroundAlt?: string;
  overlayAlt?: string;
}

export default function OverlayImageWithTextSection({
  backgroundImageUrl,
  overlayImageUrl,
  text,
  backgroundAlt = "Background",
  overlayAlt = "Overlay",
}: OverlayImageWithTextSectionProps) {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImageUrl}
          alt={backgroundAlt}
          width={1000}
          height={1000}
          className="object-cover object-center md:object-fill w-full h-screen md:h-full"
          loading="lazy"
          sizes="100vw"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex items-center justify-center md:justify-end h-full px-4 md:px-8 lg:px-16">
        {/* Overlay Image and Text */}
        <div className="flex flex-col items-center md:items-end">
          {/* Blue Overlay Image */}
          <div className="relative w-[360px] h-[520px] mb-6">
            <Image
              src={overlayImageUrl}
              alt={overlayAlt}
              fill
              className="object-contain"
              loading="lazy"
              sizes="360px"
            />
          </div>

          {/* Text Below Image */}
          <div className="max-w-xs mb-10">
            <p
              className="text-white"
              style={{
                fontFamily: "Helvetica Neue, Arial, sans-serif",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "26px",
                letterSpacing: "0%",
                textAlign: "right",
                textShadow: "0 2px 8px rgba(0, 0, 0, 0.5)",
              }}
            >
              {text}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

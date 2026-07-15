"use client";

import Image from "next/image";

interface ImageWithTextSectionProps {
  imageUrl: string;
  imageAlt: string;
  logoUrl: string;
  logoAlt: string;
  text: string;
  imageOverlayText?: string;
  backgroundColor?: string;
}

export default function ImageWithTextSection({
  imageUrl,
  imageAlt,
  logoUrl,
  logoAlt,
  text,
  imageOverlayText,
  backgroundColor = "#ffffff",
}: ImageWithTextSectionProps) {
  return (
    <section
      className="relative w-full"
      style={{ backgroundColor }}
    >
      <div className="flex flex-col md:grid md:grid-cols-2 md:min-h-screen">
        {/* Left Section - Image (top on mobile) */}
        <div className="relative w-full min-h-[400px] h-[60vh] md:h-auto flex items-center justify-center bg-white">
          <img
            src={imageUrl}
            alt={imageAlt}
            className="object-fill w-full h-full"
            loading="lazy"
            decoding="async"
          />
          {/* Overlay Text */}
          {imageOverlayText && (
            <div className="absolute bottom-11 left-12 max-w-[264px]">
              <p
                className="proforma-400 text-white"
                style={{
                  letterSpacing: "0",
                  fontSize: "24px",
                  lineHeight: "24px",
                  textShadow: "0 2px 8px rgba(0, 0, 0, 0.3)",
                }}
              >
                {imageOverlayText}
              </p>
            </div>
          )}
        </div>

        {/* Right Section - Logo and Text (bottom on mobile) */}
        <div className="relative w-full md:h-auto flex flex-col items-center justify-center px-8 md:px-12 lg:px-16 py-12 md:py-16 bg-white">
          {/* Logo */}
          <div className="mb-8 md:mb-12">
            <Image
              src={logoUrl}
              alt={logoAlt}
              width={180}
              height={120}
              className="w-32 md:w-40 lg:w-48 h-auto object-contain"
            />
          </div>

          {/* Text */}
          <div className="max-w-md">
            <p
              className="text-left"
              style={{
                fontFamily: "Helvetica Neue, Arial, sans-serif",
                fontWeight: 400,
                fontSize: "clamp(20px, 2vw, 26px)",
                lineHeight: "29px",
                letterSpacing: "0%",
                color: "#003C54",
              }}
            >
              {text}
            </p>
          </div>
        </div>
        
        {/* Divider Bar - centered, on top of images */}
        <div className="absolute top-[60vh] left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-[14px] h-[230px] bg-primary rotate-90 md:top-1/2 md:rotate-0 md:h-[230px] md:w-[14px]" />
      </div>
    </section>
  );
}
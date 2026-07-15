"use client";

import Image from "next/image";

interface ImageWithTitledTextSectionProps {
  imageUrl: string;
  imageAlt: string;
  title: string;
  text: string;
  imageOverlayText?: string;
  backgroundColor?: string;
}

export default function ImageWithTitledTextSection({
  imageUrl,
  imageAlt,
  title,
  text,
  imageOverlayText,
  backgroundColor = "#ffffff",
}: ImageWithTitledTextSectionProps) {
  return (
    <section className="relative w-full" style={{ backgroundColor }}>
      <div className="flex flex-col md:grid md:grid-cols-2 md:min-h-screen">
        {/* Left Section - Image (top on mobile) */}
        <div className="relative w-full min-h-[400px] h-[60vh] md:h-auto flex items-center justify-center bg-white">
          <Image
            src={imageUrl}
            alt={imageAlt}
            width={1000}
            height={1000}
            className="object-cover w-full h-full"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {/* Overlay Text */}
          {imageOverlayText && (
            <div className="absolute bottom-8 left-4 md:left-12 right-4 md:right-auto max-w-[264px]">
              <p
                className="proforma-400 text-white"
                style={{
                  letterSpacing: "0",
                  fontSize: "clamp(18px, 4vw, 24px)",
                  lineHeight: "1.2",
                  textShadow: "0 2px 8px rgba(0, 0, 0, 0.3)",
                }}
              >
                {imageOverlayText}
              </p>
            </div>
          )}
        </div>

        {/* Right Section - Logo and Text (bottom on mobile) */}
        <div className="relative w-full md:h-auto flex flex-col items-center justify-center px-6 md:px-12 lg:px-16 py-12 md:py-16 bg-white overflow-hidden">
          {/* Logo */}
          <div className="mb-8 md:mb-12 w-full max-w-md">
            <h2
              className="text-left text-primary break-words"
              style={{
                fontFamily: "Celine Sans Regular, sans-serif",
                fontSize: "clamp(32px, 5vw, 48px)",
                fontWeight: 400,
                lineHeight: "42px",
                // letterSpacing: "0.052em",
                textTransform: "uppercase",
                marginBottom: "2px",
              }}
            >
              {title}
            </h2>
          </div>

          {/* Text */}
          <div className="w-full max-w-md">
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
      </div>
    </section>
  );
}

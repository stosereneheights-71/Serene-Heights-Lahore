"use client";

import Image from "next/image";

interface TextWithImageSectionProps {
  heading: string;
  subheadingKey: string;
  subheadingValue: string;
  paragraph1: string;
  paragraph2: string;
  imageUrl: string;
  imageAlt: string;
  backgroundColor?: string;
}

export default function TextWithImageSection({
  heading,
  subheadingKey,
  subheadingValue,
  paragraph1,
  paragraph2,
  imageUrl,
  imageAlt,
  backgroundColor = "#ffffff",
}: TextWithImageSectionProps) {
  return (
    <section
      className="relative w-full"
      style={{ backgroundColor }}
    >
      <div className="flex flex-col md:grid md:grid-cols-2 min-h-screen">
        {/* Left Section - Text Content (top on mobile) */}
        <div className="relative w-full flex flex-col justify-center px-8 md:px-12 lg:px-16 py-12 md:py-16">
          {/* Heading */}
          <h2
            className="mb-6 md:mb-8"
            style={{
              fontFamily: "Celine Sans Regular, sans-serif",
              fontSize: "clamp(32px, 5vw, 56px)",
              fontWeight: 400,
              lineHeight: "1.1",
              textTransform: "uppercase",
              color: "#003C54",
            }}
          >
            {(() => {
              // Only for the specific case COMMERCIAL FLOORS
              if (heading.trim().toUpperCase() === "COMMERCIAL FLOORS") {
                return [
                  <span
                    key="commercial"
                    className="block"
                    style={{ letterSpacing: "0.04em" }}
                  >
                    COMMERCIAL
                  </span>,
                  <span
                    key="floors"
                    className="block"
                    style={{ letterSpacing: "0em" }}
                  >
                    FLOORS
                  </span>,
                ];
              }
              // Default: split and render with default letter spacing
              return heading.split(" ").map((word, index) => (
                <span key={index} className="block">
                  {word}
                </span>
              ));
            })()}
          </h2>

          {/* Subheading Box */}
          <div
            className="inline-flex items-center justify-between gap-4 bg-[#DFBF7F] px-4 py-2 mb-6 md:mb-8 max-w-md"
          >
            <span
              style={{
                fontFamily: "Celine Sans Regular, sans-serif",
                fontSize: "clamp(16px, 2vw, 20px)",
                fontWeight: 400,
                // letterSpacing: "0.04em",
                textTransform: "uppercase",
                color: "#003C54",
              }}
            >
              {subheadingKey}
            </span>
            <span
              style={{
                fontFamily: "Proforma, sans-serif",
                fontSize: "clamp(11px, 1.2vw, 14px)",
                fontWeight: 400,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#003C54",
              }}
            >
              {subheadingValue}
            </span>
          </div>

          {/* Paragraph 1 */}
          <p
            className="mb-4 md:mb-6 max-w-md"
            style={{
              fontFamily: "Proforma, sans-serif",
              fontSize: "clamp(18px, 2vw, 24px)",
              fontWeight: 400,
              lineHeight: "26px",
              color: "#003C54",
            }}
          >
            {paragraph1}
          </p>

          {/* Paragraph 2 */}
          <p
            className="max-w-md"
            style={{
              fontFamily: "Helvetica Neue, Arial, sans-serif",
              fontSize: "clamp(18px, 2vw, 24px)",
              fontWeight: 400,
              lineHeight: "26px",
              letterSpacing: "0%",
              color: "#003C54",
            }}
          >
            {paragraph2}
          </p>
        </div>

        {/* Right Section - Image (bottom on mobile) */}
        <div className="relative w-full h-full md:h-auto">
          <Image
            src={imageUrl}
            alt={imageAlt}
            width={1000}
            height={1000}
            className="object-cover md:object-fill w-full h-screen md:h-full"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}

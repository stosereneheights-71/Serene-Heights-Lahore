"use client";

import Image from "next/image";

interface FloorConfig {
  label: string;
  description: string;
}

interface BuildingConfigurationSectionProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  descriptionParts: {
    highlight?: boolean;
    text: string;
  }[];
  floorConfigs: FloorConfig[];
}

export default function BuildingConfigurationSection({
  backgroundImage,
  title,
  subtitle,
  descriptionParts,
  floorConfigs,
}: BuildingConfigurationSectionProps) {
  return (
    <section className="relative w-full min-h-screen bg-gray-100">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt="Building Configuration"
          fill
          className="object-cover object-center lg:object-fill opacity-40 lg:opacity-100"
          loading="lazy"
          sizes="100vw"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 min-h-screen py-12 md:py-16 lg:py-20">
        <div className="w-full px-4 md:px-8 lg:px-16 flex flex-col gap-8 md:gap-12">
          {/* Blue Box */}
          <div className="bg-[#003C54] p-8 md:p-10 lg:p-12 max-w-sm md:max-w-md">
            {/* Title */}
            <h2
              className="text-white mb-2"
              style={{
                fontFamily: "Celine Sans Regular, sans-serif",
                fontSize: "clamp(32px, 5vw, 56px)",
                fontWeight: 400,
                lineHeight: "1.1",
                // letterSpacing: "0.04em",
                textTransform: "uppercase",
              }}
            >
              {title}
            </h2>

            {/* Subtitle */}
            <h3
              className="text-white mb-6 md:mb-8"
              style={{
                fontFamily: "Proforma, sans-serif",
                fontSize: "clamp(16px, 2.5vw, 36px)",
                fontWeight: 400,
                lineHeight: "1.2",
                // letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              {subtitle}
            </h3>

            {/* Description */}
            <p
              style={{
                fontFamily: "Proforma, sans-serif",
                fontSize: "clamp(14px, 1.5vw, 18px)",
                fontWeight: 400,
                lineHeight: "1.6",
              }}
            >
              {descriptionParts.map((part, index) => (
                <span
                  key={index}
                  style={{
                    color: part.highlight ? "#DFBF7F" : "#FFFFFF",
                  }}
                >
                  {part.text}
                </span>
              ))}
            </p>
          </div>

          {/* Floor Configurations - Outside Blue Box */}
          <div className="max-w-md md:max-w-md space-y-4 md:space-y-5">
            {floorConfigs.map((config, index) => (
              <div
                key={index}
                className="flex items-center justify-between border-b border-[#003C54] pb-3"
              >
                <span
                  className="text-[#003C54]"
                  style={{
                    fontFamily: "Celine Sans Regular, sans-serif",
                    fontSize: "clamp(16px, 2vw, 24px)",
                    fontWeight: 400,
                    // letterSpacing: "0.04em",
                    textTransform: "uppercase",
                  }}
                >
                  {config.label}
                </span>
                <span
                  className="text-[#003C54] text-right ml-4"
                  style={{
                    fontFamily: "Proforma, sans-serif",
                    fontSize: "clamp(11px, 1.2vw, 10px)",
                    fontWeight: 400,
                    letterSpacing: "0.052em",
                    textTransform: "uppercase",
                  }}
                >
                  {config.description}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

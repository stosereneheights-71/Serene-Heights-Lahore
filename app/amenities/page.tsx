"use client";


import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";
import AmenityGrid from "@/components/AmenityGrid";

export default function AmenitiesPage() {
  return (
    <div className="w-full">
      <style jsx>{`
        .section-04-gradient {
          background: linear-gradient(
            180deg,
            #003c54 0%,
            rgba(0, 60, 84, 0.6) 50%,
            rgba(0, 60, 84, 0) 100%
          );
        }
        @media (min-width: 1024px) {
          .section-04-gradient {
            background: linear-gradient(
              180deg,
              #003c54 0%,
              rgba(0, 60, 84, 0.9) 50%,
              rgba(0, 60, 84, 0) 100%
            );
          }
        }
      `}</style>
      {/* Section 01 */}
      <section className="relative w-full">
        <SectionHeader heading="DESIGN &" subheading="AMENITIES" />
      </section>

      {/* Section 02 */}
      <section id="architecture" className="relative w-full">
        <div className="flex flex-col md:grid md:grid-cols-2">
          {/* Left text column */}
          <div className="relative w-full flex items-center justify-start px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 py-8 sm:py-10 md:py-12 lg:py-16">
            <div className="max-w-2xl w-full">
              <div
                className="text-4xl sm:text-5xl md:text-5xl lg:text-7xl xl:text-[80px] leading-tight"
                style={{
                  fontFamily: "Celine Sans Regular, sans-serif",
                  fontWeight: 400,
                  letterSpacing: "0",
                  color: "#003C54",
                }}
              >
                ARCHITECTURE
              </div>

              <div className="mt-4 sm:mt-5">
                <div
                  className="text-xl sm:text-2xl md:text-3xl lg:text-[34px]"
                  style={{
                    fontFamily: "Helvetica Neue, Arial, sans-serif",
                    fontWeight: 400,
                    lineHeight: "100%",
                    letterSpacing: "0",
                    color: "#DFBF7F",
                  }}
                >
                  MODERN BY DESIGN.
                </div>
                <div
                  className="text-xl sm:text-2xl md:text-3xl lg:text-[34px]"
                  style={{
                    fontFamily: "Helvetica Neue, Arial, sans-serif",
                    fontWeight: 700,
                    lineHeight: "100%",
                    letterSpacing: "0",
                    color: "#DFBF7F",
                  }}
                >
                  ICONIC BY PRESENCE.
                </div>
              </div>

              <div
                className="mt-4 sm:mt-5 md:mt-6 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[26px] leading-relaxed"
                style={{
                  fontFamily: "Proforma, sans-serif",
                  fontWeight: 400,
                  letterSpacing: "0",
                  color: "#003C54",
                }}
              >
                The architectural expression of the building reflects
                contemporary design, clean geometry, and corporate
                sophistication. A sleek modern façade, defined by vertical
                elements and expansive glass panels, created a commanding
                presence while maintaining visual elegance.
              </div>

              <div
                className="mt-4 sm:mt-5 md:mt-6 lg:mt-8 text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] leading-relaxed"
                style={{
                  fontFamily: "Helvetica Neue, Arial, sans-serif",
                  fontWeight: 400,
                  letterSpacing: "0",
                  color: "#003C54",
                }}
              >
                Designed to stand out without excess, the structural balances
                transparency and solidity, allowing natural light to flow
                through workspaces while reinforcing a strong, professional
                identity from the outside.
                <br />
                The layered façade treatment adds depth and character, ensuring
                the building remains visually striking from every angle.
              </div>
            </div>
          </div>

          {/* Right image column */}
          <div className="relative w-full h-[400px] sm:h-[500px] md:h-auto md:min-h-[700px]">
            <Image
              src="/assets/amenities/amenities-1-new.jpg"
              alt="Amenities architecture illustration"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Section 03 */}
      <section
        id="amenities-services"
        className="relative w-full overflow-x-clip bg-[#003C54] py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24"
      >
        <div className="px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24">
          {/* Title */}
          <h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[74px] leading-tight"
            style={{
              fontFamily: "Celine Sans Regular, sans-serif",
              fontWeight: 400,
              letterSpacing: "0.025em",
              color: "#FFFFFF",
            }}
          >
            AMENITIES
          </h2>

          {/* Subtitle */}
          <p
            className="mt-4 sm:mt-5 md:mt-6 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[28px] leading-relaxed"
            style={{
              fontFamily: "Proforma, sans-serif",
              fontWeight: 400,
              letterSpacing: "0",
              color: "#FFFFFF",
            }}
          >
            High-speed elevators, Reception, Driveway and Ramps for easy access,
            Backup Power, Fire Safety, CCTV, and Emergency Exits.
          </p>

          {/* Services & Amenities heading */}
          <div className="inline-block mt-8 sm:mt-10 md:mt-12 py-2">
            <h3
              className="text-xl sm:text-2xl md:text-3xl lg:text-[34px]"
              style={{
                fontFamily: "Helvetica Neue, Arial, sans-serif",
                fontWeight: 400,
                lineHeight: "100%",
                letterSpacing: "0",
                color: "#DFBF7F",
              }}
            >
              SERVICES & AMENITIES
            </h3>
          </div>

          {/* Description */}
          <p
            className="mt-4 sm:mt-5 md:mt-6 lg:mt-8 max-w-5xl text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] leading-relaxed"
            style={{
              fontFamily: "Helvetica Neue, Arial, sans-serif",
              fontWeight: 400,
              letterSpacing: "0",
              color: "#FFFFFF",
            }}
          >
            Designed to support modern business, hospitality, and lifestyle
            needs, the project offers a comprehensive range of professionally
            managed facilities, ensuring comfort, efficiency, and long-term
            value.
          </p>

          <AmenityGrid />
        </div>
      </section>

      {/* Section 04 */}
      <section className="relative w-full">
        <div className="relative grid grid-cols-1 lg:grid-cols-5">
          {/* Left content - 40% */}
          <div className="lg:col-span-2 absolute lg:static inset-0 z-10 pointer-events-none lg:pointer-events-auto flex items-stretch order-2 lg:order-1">
            <div className="section-04-gradient absolute lg:static inset-0 lg:inset-auto w-full lg:w-[570px] h-full lg:h-auto flex flex-col justify-start py-10 px-6 lg:py-[140px] lg:px-[68px] gap-7 lg:ml-[75px] z-10 pointer-events-auto">
              {/* First paragraph */}
              <p
                className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-[22px] leading-relaxed"
                style={{
                  fontFamily: "Proforma, sans-serif",
                  fontWeight: 400,
                  letterSpacing: "0",
                  color: "#FFFFFF",
                }}
              >
                At street level, the design enhances approachability and
                accessibility, while upper levels project stature and
                exclusivity —{" "}
                <span style={{ color: "#DFBF7F" }}>
                  reinforcing the building&apos;s position as a premium
                  commercial landmark in its surroundings.
                </span>
              </p>

              {/* Second paragraph */}
              <p
                className="text-base sm:text-lg md:text-xl lg:text-lg xl:text-[20px] leading-relaxed"
                style={{
                  fontFamily: "Helvetica Neue, Arial, sans-serif",
                  fontWeight: 400,
                  letterSpacing: "0",
                  color: "#FFFFFF",
                }}
              >
                Purposefully crafted to appeal to corporates, investors, and
                high-end occupiers, the architecture is not just aesthetic —{" "}
                <span style={{ fontWeight: 500, color: "#DFBF7F" }}>
                  it is a statement of credibility, permanence, and
                  forward-thinking design.
                </span>
              </p>
            </div>
          </div>

          {/* Right image - 60% */}
          <div className="lg:col-span-3 relative w-full h-[854px] lg:h-full lg:min-h-[854px] order-1 lg:order-2">
            <Image
              src="/assets/amenities/amenities-2-new.jpg"
              alt="Building architecture"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 60vw"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

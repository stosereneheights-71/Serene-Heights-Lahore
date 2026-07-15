"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <div className="w-full">
      {/* Section 01 */}
      <section className="relative z-10 w-full h-[55vh] flex flex-col">
        {/* Top Section - Background with Logo and Text */}
        <div className="h-[55vh]">
          <HeroSection
            showLogo={false}
            heading="A NEW STANDARD OF"
            subheading="URBAN LIVING"
            fitParentHeight={true}
          />
        </div>

        {/* LDA Approved Badge - Straddling Boundary */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute z-20 right-4 top-[calc(55vh-30px)] sm:top-[calc(65vh-30px)] sm:right-6 lg:right-24 lg:top-[calc(55vh-56px)] xl:right-28 xl:top-[calc(55vh-64px)]"
        >
          <Image
            src="/assets/home/lda-approved.png"
            alt="LDA Approved"
            width={120}
            height={120}
            className="w-16 sm:w-20 lg:w-28 xl:w-32 h-auto drop-shadow-2xl md:pt-0 pt-10"
          />
        </motion.div>
      </section>

      <section>
        {/* Bottom Section - Building Video */}
        <div className="flex relative h-screen bg-transparent items-center justify-center">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full md:object-fill object-cover"
          >
            <source src="/assets/home/hero.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* Section 02 — image with centered Celine headline */}
      <section className="relative w-full bg-white">
        <div className="relative h-screen min-h-[600px] overflow-hidden">
          <Image
            src="/assets/home/building-prime.jpg"
            alt="Serene Heights - prime address"
            quality={80}
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
          />

          {/* Dark gradient shadow on top of the image */}
          <div className="absolute top-0 left-0 w-full h-[60%] bg-gradient-to-b from-black/90 via-black/30 to-transparent" />

          {/* Optional subtle overlay for the rest of the image */}
          <div className="absolute inset-0 bg-black/10" />

          {/* Overlay text at top, right below shade */}
          <div className="absolute top-0 left-0 w-full flex flex-col items-center pt-16 md:pt-24 lg:pt-32">
            <div className="text-center px-4 md:px-8 lg:px-16">
              <div className="text-white">
                <div className="celine-h6" style={{ letterSpacing: 0 }}>PRIME ADDRESS HIGH DEMAND.</div>
                <div className="celine-h6" style={{ letterSpacing: 0 }}>STRONG VALUE.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 03 — Project Location */}
      <section className="relative w-full min-h-screen md:h-screen flex flex-col items-center justify-start bg-white overflow-hidden">
        {/* Overlay for mobile: blue background with text, visible below md */}
        <div className="w-full bg-[#003C54] px-16 py-10 flex flex-col items-start md:hidden z-10">
          <h2 className="celine-h5 text-3xl xs:text-4xl font-normal leading-tight text-white mb-4">
            OUR PROJECT<br />LOCATION
          </h2>
          <p className="proforma-medium text-[18px] leading-relaxed mb-2" style={{ color: '#dfbf7f' }}>
            Strategically located on Gulberg Main Boulevard, this 21-story commercial high-rise sits
            <span className="text-white font-normal"> within walking distance of Lahore’s Central Business District, placing it at the centre of the city’s most active commercial zone.</span>
          </p>
        </div>

        {/* Desktop overlay: original top-left info box */}
        <div
          className="hidden md:flex absolute left-0 top-0 z-10 bg-[#003C54] flex-col rounded-none shadow-lg"
          style={{
            marginTop: "0px",
            marginLeft: "clamp(24px, 7vw, 100px)",
            height: "fit-content",
            padding: '2rem', // default
            maxWidth: '320px', // default
          }}
        >
          <style>{`
            @media (min-width: 769px) and (max-width: 1240px) {
              .project-overlay {
                padding: 1.25rem !important;
                max-width: 240px !important;
              }
              .project-overlay-title {
                font-size: 1.35rem !important;
                line-height: 1.1 !important;
              }
              .project-overlay-desc {
                font-size: 0.95rem !important;
                line-height: 1.3 !important;
              }
            }
              @media (max-width: 768px){
              .text-size {
                font-size: 3rem !important;
                line-height: 1.1 !important;
                padding-left: 1rem !important;
              }
          `}</style>
          <div className="project-overlay">
            <div className="celine-h5 text-white mb-4 project-overlay-title" style={{ letterSpacing: 0 }}>OUR PROJECT LOCATION</div>
            <div className="proforma-medium text-[18px] leading-relaxed project-overlay-desc">
              <span className="text-[#DFBF7F]">
                Strategically located on Gulberg Main Boulevard, this 21-story commercial high-rise sits{" "}
              </span>
              <span className="text-white">
                within walking distance of Lahore’s Central Business District, placing it at the centre of the city’s most active commercial zone.
              </span>
            </div>
          </div>
        </div>

        {/* Image below overlay for mobile, normal for desktop */}
        <div className="relative w-full flex justify-center items-center mt-6 md:mt-0 md:h-full" style={{ minHeight: '300px' }}>
          {/* Mobile image: object-contain, only visible below md, uses building-3-cropped.png */}
          <div className="w-full max-w-full aspect-video  relative rounded overflow-hidden md:hidden">
            <Image
              src="/assets/home/building-3.png"
              alt="Project Location Map"
              fill
              sizes="100vw"
              className="object-contain object-bottom"
              loading="lazy"
            />
          </div>
          {/* Desktop image: object-contain for md/lg, object-cover for xl+, fills section height */}
          <div className="hidden md:block w-full h-full max-w-full relative rounded overflow-hidden border border-[#e5e7eb] bg-white">
            <Image
              src="/assets/home/building-3.png"
              alt="Project Location Map"
              fill
              sizes="900px"
              className="object-contain xl:object-cover object-center"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Section 04 — Split layout with full-height right image and white left */}
      <section className="relative w-full bg-white md:h-screen md:grid md:grid-cols-2 md:overflow-hidden">
        {/* Left half: mobile stacked block + desktop split layers */}
        <div className="relative w-full md:h-full">
          {/* Mobile: 50/50 split — headline over white, tagline over teal */}
          <div className="md:hidden relative w-full h-[88vh]">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-white z-0" />
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[#003C54] z-0" />

            {/* Headline in white top area */}
            <div className="absolute left-8 right-8 top-0 h-1/2 z-10 flex flex-col justify-center">
              <div
                className="mb-4"
                style={{
                  fontFamily: "Proforma, sans-serif",
                  fontWeight: 400,
                  fontSize: "13px",
                  letterSpacing: "0.28em",
                  color: "#DFBF7F",
                }}
              >
                GULBERG MAIN BOULEVARD
              </div>
              <div
                style={{
                  fontFamily: "Celine Sans Regular, sans-serif",
                  fontWeight: 400,
                  fontSize: "clamp(34px, 11vw, 52px)",
                  lineHeight: "1.05",
                  color: "#003C54",
                }}
              >
                A LANDMARK<br />ADDRESS FOR<br />BUSINESS
              </div>
            </div>

            <div className="absolute left-8 bottom-8 z-20 max-w-[70%]">
              <div className="proforma-400 text-[17px] leading-snug text-[#DFBF7F]">
                A landmark commercial investment in one of Lahore’s most sought after business districts
              </div>
            </div>
          </div>

          {/* Desktop top half background (white) */}
          <div className="hidden md:block absolute top-0 left-0 w-full h-1/2 bg-white z-0" />
          {/* Desktop bottom half background (teal) */}
          <div className="hidden md:block absolute bottom-0 left-0 w-full h-1/2 bg-[#003C54] z-0" />

          {/* Desktop headline in white top half */}
          <div className="hidden md:flex absolute left-12 right-12 top-0 h-1/2 z-10 flex-col justify-center">
            <div
              className="mb-5"
              style={{
                fontFamily: "Proforma, sans-serif",
                fontWeight: 400,
                fontSize: "clamp(13px, 1vw, 16px)",
                letterSpacing: "0.3em",
                color: "#DFBF7F",
              }}
            >
              GULBERG MAIN BOULEVARD
            </div>
            <div
              style={{
                fontFamily: "Celine Sans Regular, sans-serif",
                fontWeight: 400,
                fontSize: "clamp(40px, 4.4vw, 72px)",
                lineHeight: "1.03",
                color: "#003C54",
              }}
            >
              A LANDMARK<br />ADDRESS FOR<br />BUSINESS
            </div>
          </div>

          {/* Desktop bottom-left text over teal */}
          <div className="hidden md:block absolute md:left-12 md:bottom-12 z-20 md:max-w-[320px]">
            <div className="proforma-400 md:text-[20px] leading-snug text-[#DFBF7F]">
              A landmark commercial investment in one of Lahore’s most sought after business districts
            </div>
          </div>
        </div>

        {/* Right half: full-height natural image on mobile, cover on desktop */}
        <div className="relative w-full md:h-full z-0">
          <Image
            src="/assets/home/building-8-new.jpg"
            alt="Building Front View"
            width={1200}
            height={760}
            quality={80}
            className="md:hidden w-full h-auto object-contain"
            sizes="100vw"
            loading="lazy"
          />
          <Image
            src="/assets/home/building-8-new.jpg"
            alt="Building Front View"
            fill
            quality={80}
            className="hidden md:block object-cover object-center"
            sizes="50vw"
            loading="lazy"
          />
        </div>
      </section>

      {/* Section 05 — Benchmark + Joint Venture logos */}
      <section className="relative w-full bg-white flex flex-col md:flex-row md:h-screen md:overflow-hidden">
        {/* Right part first on mobile */}
        <div className="relative w-full order-1 md:order-2 md:h-full flex flex-col items-center justify-center px-4 py-24 md:px-12">
          {/* Headings */}
          <div className="text-center mb-8 md:-mt-4 md:mb-16">
            <div
              style={{
                fontFamily: 'Celine Sans Regular, sans-serif',
                fontWeight: 400,
                fontSize: 'clamp(24px, 7.5vw, 56px)',
                lineHeight: '1.05',
                // letterSpacing: '0.02em',
                color: '#003C54',
              }}
            >
              A NEW BENCHMARK FOR
            </div>
            <div
              className="mt-3 md:mt-4"
              style={{
                fontFamily: 'Proforma, sans-serif',
                fontWeight: 400,
                fontSize: 'clamp(16px, 4.2vw, 28px)',
                lineHeight: '1.05',
                letterSpacing: '0.45em',
                color: '#003C54',
              }}
            >
              COMMERCIAL EXCELLENCE
            </div>
          </div>

          {/* Joint venture heading */}
          <div
            className="mb-5 mt-4 md:mt-4 md:mb-8"
            style={{
              fontFamily: 'Helvetica Neue, Arial, sans-serif',
              fontWeight: 400,
              fontSize: 'clamp(16px, 3.8vw, 22px)',
              lineHeight: '100%',
              letterSpacing: '0.08em',
              color: '#003C54',
            }}
          >
            JOINT VENTURE BY
          </div>

          {/* Mobile logos: vertical stack */}
          <div className="flex md:hidden flex-col items-center gap-6">
            <Image src="/assets/home/pvt.png" alt="Fatir Developers" width={120} height={120} className="w-24 h-24 object-contain" />
            <Image src="/assets/home/consortium.png" alt="DM Consortium" width={120} height={120} className="w-24 h-24 object-contain" />
            <Image src="/assets/home/falah.png" alt="FALAH Developers" width={120} height={120} className="w-24 h-24 object-contain" />
          </div>

          {/* Desktop logos: horizontal with separators */}
          <div className="hidden md:flex items-center justify-center gap-10">
            <Image src="/assets/home/pvt.png" alt="Fatir Developers" width={120} height={120} className="w-30 h-30 object-contain" />
            <div className="h-12 w-[1.5px] bg-[#003C54]" />
            <Image src="/assets/home/consortium.png" alt="DM Consortium" width={120} height={120} className="w-30 h-30 object-contain" />
            <div className="h-12 w-[1.5px] bg-[#003C54]" />
            <Image src="/assets/home/falah.png" alt="FALAH Developers" width={120} height={120} className="w-30 h-30 object-contain" />
          </div>
        </div>

        {/* Left image below on mobile */}
        <div className="relative w-full h-full order-2 md:order-1 md:w-1/2">
          <Image
            src="/assets/home/building-6-new.jpg"
            alt="Benchmark Building"
            quality={80}
            width={1200}
            height={760}
            className="md:hidden w-full h-auto object-contain"
            sizes="100vw"
            loading="lazy"
          />
          <Image
            src="/assets/home/building-6-new.jpg"
            alt="Benchmark Building"
            quality={80}
            fill
            className="hidden md:block object-cover object-center"
            sizes="50vw"
            loading="lazy"
          />
        </div>
      </section>

      {/* Section 06 — Vision Meets Vertical Excellence */}
      <section className="relative w-full flex flex-col md:h-screen md:grid md:grid-cols-[3fr_2fr] bg-white overflow-hidden">
        {/* Left: Building image takes ~60% width */}
        <div className="relative w-full h-full order-2 md:order-1 md:h-full">
          <Image
            src="/assets/home/building-7-new.jpg"
            alt="Serene Heights Perspective"
            width={1200}
            height={760}
            className="md:hidden w-full h-auto object-contain"
            sizes="100vw"
            loading="lazy"
          />
          <Image
            src="/assets/home/building-7-new.jpg"
            alt="Serene Heights Perspective"
            fill
            className="hidden md:block object-cover object-center"
            sizes="60vw"
            loading="lazy"
          />
        </div>

        {/* Right: Headline + description */}
        <div className="relative w-full order-1 md:order-2 flex items-center justify-center px-6 pt-12 pb-10 md:px-12 md:py-0 md:h-full">
          <div className="max-w-2xl md:py-0 py-12">
            <div
              style={{
                fontFamily: 'Celine Sans Regular, sans-serif',
                fontWeight: 400,
                fontSize: 'clamp(42px, 10.5vw, 62px)',
                lineHeight: 'clamp(44px, 10.8vw, 64px)',
                // letterSpacing: '0.025em',
                color: '#003C54',
              }}
            >
              WHERE VISION MEETS VERTICAL EXCELLENCE
            </div>

            <div
              className="mt-6"
              style={{
                fontFamily: 'Proforma, sans-serif',
                fontWeight: 400,
                fontSize: 'clamp(20px, 4.9vw, 28px)',
                lineHeight: 'clamp(26px, 5.5vw, 34px)',
                letterSpacing: '0',
                color: '#003C54',
                // width: '80%',
              }}
            >
              Serene Heights Lahore is envisioned as a future-ready commercial destination
              {" "}
              <span style={{ color: '#003C5466' }}>
                that reflects ambition, credibility, and progress. One of its Kind mixed use development in the heart of Downtown Lahore!
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 07 — Luxury That Rises With Purpose */}
      <section className="relative w-full h-screen bg-white overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 bottom-3 top-3">
          <Image
            src="/assets/home/building-brand.jpg"
            alt="Luxury that rises with purpose"
            fill
            sizes="100vw"
            quality={80}
            className="object-cover object-center"
            loading="lazy"
          />
        </div>

        {/* Top-left gradient panel with heading */}
        <div
          className="absolute top-0 luxury-panel"
          style={{
            width: "364px",
            height: "470px",
            left: "50%",
            transform: "translateX(-50%)",
            background: "linear-gradient(180deg, #003C54 0%, rgba(0, 60, 84, 0.2) 100%)",
            opacity: 1,
            padding: "68px 40px",
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          <div
            className="text-size"
            style={{
              fontFamily: "Celine Sans Regular, sans-serif",
              fontWeight: 400,
              fontSize: "clamp(28px, 7vw, 48px)",
              lineHeight: "1.2",
              // letterSpacing: "0.052em",
              color: "#FFFFFF",
            }}
          >
            LUXURY THAT RISES WITH PURPOSE
          </div>
        </div>

        <style>{`
          @media (min-width: 768px) {
            .luxury-panel {
              width: 392px !important;
              left: 75px !important;
              transform: none !important;
            }
          }
        `}</style>
      </section>
    </div>
  );
}

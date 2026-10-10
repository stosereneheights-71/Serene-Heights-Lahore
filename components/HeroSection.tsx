"use client";

import Image from "@/components/SiteImage";
import { motion } from "framer-motion";

interface HeroSectionProps {
  heading: string;
  subheading: string;
  showLogo?: boolean;
  fitParentHeight?: boolean;
}

export default function HeroSection({ heading, subheading, showLogo = false, fitParentHeight = false }: HeroSectionProps) {
  return (
    <div className={`relative w-full bg-[#003C54] flex flex-col pb-8 md:pb-0 md:justify-end ${fitParentHeight ? "h-full min-h-0" : "min-h-screen"}`}>
      <div className={`flex-1 flex flex-col items-start justify-end px-8 md:px-16 lg:px-32 xl:px-58 ${fitParentHeight ? "pb-4 md:pb-6 lg:pb-4" : "pb-8 md:pb-12 lg:pb-16"}`}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-7xl w-full"
        >
          {/* Logo - Above Text */}
          {showLogo && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className={`${fitParentHeight ? "mb-3 md:mb-3 lg:mb-4" : "mb-5 md:mb-7 lg:mb-8"}`}
            >
              <Image
                src="/assets/logo/serene-white-transp.png"
                alt="Serene Heights"
                width={75}
                height={75}
                className={`${fitParentHeight ? "w-16 md:w-20 lg:w-18 xl:w-20" : "w-20 md:w-28 lg:w-32 xl:w-36"} h-auto`}
              />
            </motion.div>
          )}
          <h1
            className="text-white mb-3 md:mb-5 lg:mb-6 text-left"
            style={{
              fontFamily: "Proforma, sans-serif",
              fontSize: "clamp(14px, 2.5vw, 40px)",
              fontWeight: 400,
              lineHeight: "120%",
              letterSpacing: typeof window !== 'undefined' && window.innerWidth < 768 ? '0.15em' : '0.4em',
              textTransform: "uppercase",
            }}
          >
            {heading}
          </h1>
          <h2
            className="text-white text-left mb-1"
            style={{
              fontFamily: "Celine Sans Regular, sans-serif",
              fontSize: "clamp(32px, 8vw, 120px)",
              fontWeight: 400,
              lineHeight: "105%",
              // letterSpacing: "0.04em",
              textTransform: "uppercase",
              marginBottom: "2px",
            }}
          >
            {subheading}
          </h2>
        </motion.div>
      </div>
    </div>
  );
}

"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "@/components/SiteImage";
import Link from "next/link";

const navLinks = [
  { name: "HOME", href: "/" },
  { name: "About", href: "/about" },
  { name: "THE PROJECT", href: "/the-project" },
  { name: "amenities", href: "/amenities" },
  { name: "invest", href: "/invest" },
  // { name: "contact us", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Desktop Navbar */}
      <motion.nav
        initial={false}
        animate={{
          backgroundColor: scrolled ? "#FFFFFF" : "#003C54",
          borderRadius: scrolled ? "80px" : "0px",
          width: scrolled ? "min(1200px, calc(100% - 40px))" : "100%",
          padding: scrolled ? "20px" : "24px 60px",
          position: "fixed",
          top: scrolled ? "20px" : "0px",
          left: scrolled ? "50%" : "0px",
          x: scrolled ? "-50%" : "0%",
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="z-50 hidden lg:flex items-center justify-between max-w-[1512px] mx-auto"
        style={{ willChange: "transform" }}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-[80px] h-[80px] ml-4 overflow-hidden shrink-0 md:w-[60px] md:h-[60px]">
            <Image
              src={scrolled ? "/assets/logo/serene-blue-transp.png" : "/assets/logo/serene-white-transp.png"}
              alt="Serene Heights Logo"
              width={128}
              height={128}
              className="w-full h-full object-fit"
            />
          </div>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-10 flex-1 justify-center">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-[14px] leading-[20px] uppercase transition-colors duration-300 hover:opacity-80 pb-1 ${
                  isActive
                    ? scrolled
                      ? "text-[#003C54] opacity-100"
                      : "text-[#E8E8E8] opacity-100 border-b-2 border-[#DFBF7F]"
                    : scrolled
                      ? "text-[#003C54] opacity-40 hover:opacity-100"
                      : "text-[#E8E8E8] opacity-100 hover:opacity-90 border-b-2 border-transparent"
                }`}
                style={{
                  fontFamily: '"Gravesend Sans", sans-serif',
                  fontWeight: isActive ? 700 : 500,
                  letterSpacing: isActive ? "5.2%" : "0.728px",
                }}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Contact Button */}
        <Link href="/contact" className="inline-block">
          <motion.button
            type="button"
            animate={{
              borderRadius: scrolled ? "40px" : "6px",
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="bg-[#DFBF7F] text-[#003C54] px-5 py-3 text-[14px] font-medium tracking-[0.728px] uppercase hover:bg-[#d4b470] transition-colors cursor-pointer"
            style={{
              fontFamily: '"Gravesend Sans", sans-serif',
              fontWeight: 500,
            }}
          >
            contact us
          </motion.button>
        </Link>
      </motion.nav>

      {/* Mobile Navbar */}
      <motion.nav
        initial={false}
        animate={{
          backgroundColor: "#fff",
        }}
        className="lg:hidden fixed top-4 left-1/2 -translate-x-1/2 z-[55] px-0 w-[92vw] max-w-[420px] rounded-full shadow-none"
        style={{ height: "64px", boxShadow: "none" }}
      >
        <div className="flex items-center justify-between w-full h-full px-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-[52px] w-auto">
              <Image
                src="/assets/logo/serene-blue-transp.png"
                alt="Serene Heights Logo"
                width={120}
                height={36}
                className="object-contain h-[52px] w-auto"
                priority
              />
            </div>
          </Link>

          {/* Hamburger Menu (SVG) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2"
            aria-label="Toggle menu"
          >
            <div className="w-7 h-7 flex items-center justify-center">
              <Image
                src={"/assets/nav/lines.svg"}
                alt="Open menu"
                width={28}
                height={28}
                className="w-7 h-7 object-contain"
                priority
              />
            </div>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu - Full Screen Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden fixed inset-0 bg-[#F5F5F5] z-[60] flex flex-col"
          >
            {/* Header with Logo and Close Button */}
            <div className="flex items-center justify-between px-6 py-6">
              <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                <div className="relative h-[60px] w-auto">
                  <Image
                    src="/assets/logo/serene-blue-transp.png"
                    alt="Serene Heights Logo"
                    width={93}
                    height={28}
                    className="object-contain h-[60px] w-auto"
                    priority
                  />
                </div>
              </Link>

              {/* Close Button (SVG) */}
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2"
                aria-label="Close menu"
              >
                <Image
                  src={"/assets/nav/cross.svg"}
                  alt="Close menu"
                  width={28}
                  height={28}
                  className="w-7 h-7 object-contain"
                  priority
                />
              </button>
            </div>

            {/* Navigation Links - Top Aligned */}
            <div className="flex-1 flex flex-col justify-start pt-8 px-6 space-y-8">
              {navLinks.map((link, index) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block text-[#003C54] text-[16px] leading-[24px] uppercase transition-all ${
                        isActive
                          ? "opacity-100 font-bold"
                          : "opacity-100 font-medium"
                      }`}
                      style={{
                        fontFamily: '"Gravesend Sans", sans-serif',
                        letterSpacing: "0.728px",
                      }}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* Contact Button - Fixed at Bottom */}
            <div className="px-6 pb-8">
              <Link href="/contact" className="block w-full">
                <motion.button
                  type="button"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-[#DFBF7F] text-[#003C54] px-6 py-4 rounded-full text-[14px] font-medium uppercase hover:bg-[#d4b470] transition-colors w-full tracking-[0.728px] cursor-pointer"
                  style={{
                    fontFamily: '"Gravesend Sans", sans-serif',
                    fontWeight: 500,
                  }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  CONTACT US
                </motion.button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

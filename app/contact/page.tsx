"use client";

import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";

export default function ContactPage() {
  return (
    <div className="w-full">
      {/* Section 01 - Hero */}
      <section className="relative w-full">
        <SectionHeader heading="CONTACT" subheading="US TODAY" />
      </section>

      {/* Section 02 - Contact Image with Overlay */}
      <section className="relative w-full" style={{ height: "100vh" }}>
        {/* Background Image - contact-1.png */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/assets/contact/contact-1.png"
            alt="Contact"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Bottom Right - Three Logo Boxes */}
        <div className="absolute bottom-4 left-4 right-4 md:bottom-12 md:right-6 md:left-auto lg:bottom-16 lg:right-8 flex gap-3 md:gap-6 justify-center md:justify-end">
          {/* Logo Box 1 */}
          <div 
            className="bg-white flex items-center justify-center"
            style={{
              width: "90px",
              height: "70px",
              padding: "12px",
            }}
          >
            <Image
              src="/assets/home/pvt.png"
              alt="PVT"
              width={88}
              height={48}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Logo Box 2 */}
          <div 
            className="bg-white flex items-center justify-center"
            style={{
              width: "90px",
              height: "70px",
              padding: "12px",
            }}
          >
            <Image
              src="/assets/home/consortium.png"
              alt="Consortium"
              width={88}
              height={48}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Logo Box 3 */}
          <div 
            className="bg-white flex items-center justify-center"
            style={{
              width: "90px",
              height: "70px",
              padding: "12px",
            }}
          >
            <Image
              src="/assets/home/falah.png"
              alt="Falah"
              width={88}
              height={48}
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Bluish Overlay at Top */}
        <div 
          className="absolute top-0 left-0 right-0 flex flex-col md:flex-row md:items-end md:justify-between px-6 py-6 md:px-16 lg:px-24 md:pb-12 lg:pb-16"
          style={{
            height: "auto",
            minHeight: "60%",
            backgroundColor: "#003C54",
            opacity: 0.8,
          }}
        >
          {/* Logo on Top/Left */}
          <div className="flex items-start md:items-end mb-auto md:mb-0">
            <Image
              src="/assets/logo/serene-white-transp.png"
              alt="Serene Heights"
              width={140}
              height={140}
              className="w-24 md:w-40 h-auto"
            />
          </div>

          {/* Contact Info - Center on mobile, Right on desktop */}
          <div className="flex flex-col gap-4 md:gap-4 text-right items-end justify-center md:flex-initial">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <div
                  style={{
                    fontFamily: "Helvetica Neue, Arial, sans-serif",
                    fontWeight: 500,
                    fontSize: 16,
                    lineHeight: "100%",
                    letterSpacing: "0%",
                    color: "#DFBF7F",
                  }}
                >
                  0304-1111106
                </div>
                <div
                  style={{
                    fontFamily: "Helvetica Neue, Arial, sans-serif",
                    fontWeight: 500,
                    fontSize: 16,
                    lineHeight: "100%",
                    letterSpacing: "0%",
                    color: "#DFBF7F",
                  }}
                >
                  For Corporate Office / Commercial
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <div
                  style={{
                    fontFamily: "Helvetica Neue, Arial, sans-serif",
                    fontWeight: 500,
                    fontSize: 16,
                    lineHeight: "100%",
                    letterSpacing: "0%",
                    color: "#DFBF7F",
                  }}
                >
                  0300-8497999
                </div>
                <div
                  style={{
                    fontFamily: "Helvetica Neue, Arial, sans-serif",
                    fontWeight: 500,
                    fontSize: 16,
                    lineHeight: "100%",
                    letterSpacing: "0%",
                    color: "#DFBF7F",
                  }}
                >
                  For Co-Working / Hotel Apartments
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <div
                  style={{
                    fontFamily: "Helvetica Neue, Arial, sans-serif",
                    fontWeight: 500,
                    fontSize: 16,
                    lineHeight: "100%",
                    letterSpacing: "0%",
                    color: "#DFBF7F",
                  }}
                >
                  info@sereneheightslahore.com
                </div>
                <div
                  style={{
                    fontFamily: "Helvetica Neue, Arial, sans-serif",
                    fontWeight: 500,
                    fontSize: 16,
                    lineHeight: "100%",
                    letterSpacing: "0%",
                    textAlign: "right",
                    color: "#FFFFFF",
                  }}
                >
                  sereneheightslahore.com
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

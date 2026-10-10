import Image from "@/components/SiteImage";
import React from "react";

interface AmenityCardProps {
  icon: string;
  alt: string;
  title: string;
  items: string[];
}

const AmenityCard: React.FC<AmenityCardProps> = ({ icon, alt, title, items }) => (
  <div className="flex items-start gap-3">
    <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0">
      <Image src={icon} alt={alt} width={48} height={48} className="w-full h-full object-contain" />
    </div>
    <div className="flex flex-col">
      <h4
        className="mb-3 sm:mb-4 text-lg sm:text-xl md:text-2xl lg:text-[26px]"
        style={{
          fontFamily: "Proforma, sans-serif",
          fontWeight: 400,
          lineHeight: "100%",
          letterSpacing: "0",
          color: "#DFBF7F",
        }}
      >
        {title}
      </h4>
      <ul className="space-y-2">
        {items.map((item, idx) => (
          <li
            key={idx}
            className="text-xs sm:text-sm"
            style={{
              fontFamily: "Helvetica Neue, Arial, sans-serif",
              fontWeight: 400,
              lineHeight: "140%",
              letterSpacing: "0",
              color: "#FFFFFF",
            }}
          >
            • {item}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default AmenityCard;

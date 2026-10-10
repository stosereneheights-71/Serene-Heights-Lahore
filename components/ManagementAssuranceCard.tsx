
import React from "react";
import Image from "@/components/SiteImage";

const ManagementAssuranceCard: React.FC = () => (
  <div className="bg-white overflow-visible h-full relative">
    {/* Badge/Header */}
    <div className="bg-[#DFBF7F] px-4 sm:px-5 md:px-6 py-3 sm:py-4">
      <h5
        className="text-lg sm:text-xl md:text-2xl lg:text-[24px]"
        style={{
          fontFamily: "Proforma, sans-serif",
          fontWeight: 600,
          lineHeight: "100%",
          letterSpacing: "0",
          color: "#003C54",
        }}
      >
        Management Assurance
      </h5>
    </div>
    {/* Content */}
    <div className="px-4 sm:px-5 md:px-6 py-4 sm:py-5 md:py-6 pr-12 sm:pr-14 md:pr-6">
      <p
        className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed"
        style={{
          fontFamily: "Helvetica Neue, Arial, sans-serif",
          fontWeight: 400,
          letterSpacing: "0",
          color: "#003C54",
        }}
      >
        All services and facilities will be managed exclusively by in-house management, ensuring consistent standards, accountability, and operational control. No unions or third-party operators are involved in day-to-day management.
      </p>
    </div>
    {/* Tick Icon on border */}
    <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 pointer-events-none">
      <Image
        src="/assets/amenities/tick.png"
        alt="Tick"
        width={64}
        height={64}
        className="w-full h-full object-contain"
        priority
      />
    </div>
  </div>
);

export default ManagementAssuranceCard;

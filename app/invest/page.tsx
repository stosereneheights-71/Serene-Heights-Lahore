"use client";

import SectionHeader from "@/components/SectionHeader";
import InvestmentCard from "@/components/InvestmentCard";

export default function InvestPage() {
  return (
    <div className="w-full">
      {/* Section 01 - Hero */}
      <section className="relative w-full">
        <SectionHeader heading="Investment" subheading="Opportunities" />
      </section>

      {/* Section 02 - Investment Cards */}
      <section className="relative w-full bg-white pt-8 sm:pt-12 md:pt-16 lg:pt-20 xl:pt-24">
        <div className="px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 pb-12 sm:pb-16 md:pb-20 lg:pb-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 items-stretch max-w-full">
            {/* Special First Card */}
            <div
              className="w-full h-auto min-h-[320px] sm:min-h-[360px] lg:min-h-[341px] p-6 sm:p-8 lg:p-6 flex flex-col justify-end rounded-b-[28px] -mt-12 sm:-mt-20 md:-mt-32 lg:-mt-[158px]"
              style={{
                backgroundColor: "#003C54",
              }}
            >
              <h2
                className="text-2xl sm:text-3xl lg:text-[20px] xl:text-[36px] leading-tight"
                style={{
                  fontFamily: "Celine Sans Regular, sans-serif",
                  fontWeight: 400,
                  letterSpacing: "0.052em",
                  color: "#DFBF7F",
                  textTransform: "uppercase",
                  lineHeight: "1.1",
                }}
              >
                UNIQUE
                <br />
                INVESTMENT
                <br />
                OPPORTUNITIES
              </h2>
            </div>

            <InvestmentCard
              iconSrc="/assets/invest/rental.png"
              iconAlt="High Rental Demand"
              title="High Rental Demand"
              description="Located on Gulberg Main Boulevard and within walking distance of the CBD, the project benefits from consistent demand from corporates, professionals, and hospitality users. Limited premium commercial supply in the area positions the development for strong occupancy and sustainable rental returns."
            />

            <InvestmentCard
              iconSrc="/assets/invest/capital.png"
              iconAlt="Capital Appreciation Potential"
              title="Capital Appreciation Potential"
              description="Early entry on a prime commercial artery allows investors to benefit from asset appreciation as construction progresses. Historically, well-located commercial developments on Main Boulevard have demonstrated strong capital growth over time."
            />

            <InvestmentCard
              iconSrc="/assets/invest/professional.png"
              iconAlt="Professional In-House Management"
              title="Professional In-House Management"
              description="All operations, maintenance, and facilities are managed through in-house professional management, ensuring consistent service standards, asset upkeep, and long-term value preservation — a key consideration for serious investors"
            />

            <InvestmentCard
              iconSrc="/assets/invest/assured.png"
              iconAlt="Assured Delivery Timeline"
              title="Assured Delivery Timeline"
              description="With a clearly defined 2-year delivery timeline, investors gain visibility and confidence on execution. Structured milestones and progress transparency ensure the project remains aligned with planned returns and market cycles."
            />

            <InvestmentCard
              iconSrc="/assets/invest/dedicated.png"
              iconAlt="Dedicated Above-Ground Parking Floors"
              title="Dedicated Above-Ground Parking Floors"
              description="One of Gulberg's biggest commercial constructions is accessed through 5 dedicated above-ground parking floors with direct access via drive-through ramps. This feature enhances tenant convenience, increases footfall, and significantly improves leasing potential."
            />

            <InvestmentCard
              iconSrc="/assets/invest/low-entry.png"
              iconAlt="Low-Entry Smart Property Investment"
              title="Low-Entry Smart Property Investment"
              description="Invest with as little as PKR 2 million through smart property units, offering the opportunity to become a part-owner of a prime commercial asset on Gulberg Main Boulevard. This model allows investors to access high-value real estate with lower capital exposure and diversified risk."
            />

            <InvestmentCard
              iconSrc="/assets/invest/flexible.png"
              iconAlt="Flexible Payment Plans"
              title="Flexible Payment Plans"
              description="Designed to reduce entry barriers, the project offers investor-friendly and flexible payment plans, allowing capital to be deployed gradually while value builds during construction. This structure enables better cash flow management and higher investment comfort."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

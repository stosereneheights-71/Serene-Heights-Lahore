import ImageWithTitledTextSection from "@/components/ImageAndTitledTextSection";
import BuildingConfigurationSection from "@/components/BuildingConfigurationSection";
import TwoImagesSection from "@/components/TwoImagesSection";
import TextWithImageSection from "@/components/TextWithImageSection";
import OverlayImageWithTextSection from "@/components/OverlayImageWithTextSection";
import FullImageSection from "@/components/FullImageSection";
import SectionHeader from "@/components/SectionHeader";

export default function TheProjectPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
        <section className="relative w-full flex flex-col">
          <SectionHeader heading="THE" subheading="PROJECT" />
      </section>

      <ImageWithTitledTextSection
        imageUrl="/assets/project/image-1-new.jpg"
        imageAlt="DM Consortium Interior"
        // imageOverlayText="With over 18 years of experience in Dubai’s real estate industry, Falah Developers is built on these values with a commitment to delivering projects that clients can trust, depend on, and take pride in."
        title="PROJECT OVERVIEW"
        text="The project offers investors an address with exceptional visibility, 
seamless connectivity, and sustained 
demand, making it ideal for corporate offices, professional firms, and 
commercial occupiers. With direct access from major arterial road and proximity to Lahore’s leading business and retail hubs, the development is positioned for long-term capital appreciation and consistent rental potential. A landmark commercial investment in one of Lahore’s most sought-after  business districts."
        backgroundColor="#ffffff"
      />

      {/* Building Configuration Section */}
      <section id="building-configuration">
        <BuildingConfigurationSection
          backgroundImage="/assets/project/Image2.png"
          title="BUILDING"
          subtitle="CONFIGURATION"
          descriptionParts={[
            {
              text: "Designed as a mixed-use vertical development, ",
              highlight: true,
            },
            {
              text: "the building includes Lower Ground +6 commercial floors, 5 parking floors, 7 office floors, 2 co-working floors, and 2 hotel apartment floors",
              highlight: false,
            },
          ]}
          floorConfigs={[
            { label: "LOWER GROUND +6", description: "COMMERCIAL FLOORS" },
            { label: "5", description: "PARKING FLOORS" },
            { label: "7 FLOORS", description: "MULTIPLE OFFICES" },
            { label: "2 FLOORS", description: "CO-WORKING" },
            { label: "2 FLOORS", description: "HOTEL APARTMENTS" },
          ]}
        />
      </section>

      {/* Two Images Section */}

      <TwoImagesSection
        leftImageUrl="/assets/project/Image3_v2.jpg"
        leftImageAlt="Work, Live, Stay & Rise Above"
        rightImageUrl="/assets/project/Image4.jpg"
        rightImageAlt="Building Floor Configuration"
        backgroundColor="#ffffff"
      />

      {/* Commercial Floors Section */}
      <section id="commercial-floors">
        <TextWithImageSection
          heading="COMMERCIAL FLOORS"
          subheadingKey="LOWER GROUND +6"
          subheadingValue="COMMERCIAL FLOORS"
          paragraph1="One of Gulberg's most persistent commercial challenges has always been parking accessibility — a factor that directly impacts footfall, tenant demand, and property value. This project redefines that experience."
          paragraph2="Designed with multiple parking levels and drive-through ramps, the building allows vehicular access to almost all floors, significantly reducing congestion and eliminating the inconvenience typically associated with high-density commercial areas."
          imageUrl="/assets/project/Image5.jpg"
          imageAlt="Commercial Floors View"
          backgroundColor="#ffffff"
        />

        {/* Overlay Image Section */}
        <OverlayImageWithTextSection
          backgroundImageUrl="/assets/project/Image6_1.jpg"
          overlayImageUrl="/assets/project/Image6_2.png"
          text="By solving a critical urban limitation, the project doesn't just compete in Gulberg — it sets a new benchmark for commercial developments."
          backgroundAlt="Commercial Space Interior"
          overlayAlt="Floor Plan Blueprint"
        />
      </section>

      <TextWithImageSection
        heading="OFFICE FLOORS"
        subheadingKey="X7"
        subheadingValue="OFFICE FLOORS"
        paragraph1="Located at the heart of Lahore’s most active commercial district, the office floors offer businesses an address that delivers visibility, accessibility, and influence. Operating from Gulberg’s central corridor places your business within immediate reach of key clients, partners, and decision-makers."
        paragraph2="This strategic positioning enhances brand presence, improves operational efficiency, and provides a competitive edge."
        imageUrl="/assets/project/Image7.jpg"
        imageAlt="Office Floors View"
        backgroundColor="#ffffff"
      />

      <OverlayImageWithTextSection
        backgroundImageUrl="/assets/project/Image8_1.jpg"
        overlayImageUrl="/assets/project/Image8_2.png"
        text="Allowing businesses not just to operate, but to lead and dominate in their market."
        backgroundAlt="Office Space Interior"
        overlayAlt="Office Blueprint"
      />

      <section id="hotel-apartments">
        <TextWithImageSection
          heading="HOTEL APARTMENTS"
          subheadingKey="X2"
          subheadingValue="APARTMENT FLOORS"
          paragraph1="Designed as a true home away from home, these fully furnished services apartments combine comfort with income potential. Operated under a professional hospitality model, the allow owners to enjoy personal stays while generating rental returns during high-demand periods"
          paragraph2="A seamless blend of lifestyle convenience 
and investment performance — offering both use and ROI from a single smart asset."
          imageUrl="/assets/project/Image9.jpg"
          imageAlt="Hotel Apartments View"
          backgroundColor="#ffffff"
        />

        <FullImageSection
          imageUrl="/assets/project/Image10.jpg"
          imageAlt="Apartment Interior"
          objectPosition="contain"
        />
      </section>

      <section id="co-working">
        <TextWithImageSection
          heading="CO-WORKING FLOORS"
          subheadingKey="X2"
          subheadingValue="CO-WORKING FLOORS"
          paragraph1="Designed for modern professionals and growing businesses, the co-working floors offer flexible, fully equipped workspaces in the heart of Gulberg. Shared amenities, collaborative zones, and private suites create an environment that supports productivity, networking, and scalability."
          paragraph2="Whether for startups, freelancers, or established teams seeking a premium address without long-term commitment, these floors deliver convenience, community, and commercial value in one smart workplace solution."
          imageUrl="/assets/project/Image11.jpg"
          imageAlt="Co-Working Floors View"
          backgroundColor="#ffffff"
        />

        <FullImageSection
          imageUrl="/assets/project/Image12.jpg"
          imageAlt="Co-Working Interior"
          objectPosition="contain"
        />
      </section>
    </div>
  );
}

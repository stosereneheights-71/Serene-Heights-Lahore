import Image from "@/components/SiteImage";

interface InvestmentCardProps {
  iconSrc: string;
  iconAlt: string;
  title: string;
  description: string;
}

export default function InvestmentCard({
  iconSrc,
  iconAlt,
  title,
  description,
}: InvestmentCardProps) {
  return (
    <div
      className="w-full h-full min-h-[320px] sm:min-h-[341px] p-6 sm:p-8 flex flex-col rounded-[28px] border-[1.5px]"
      style={{
        borderColor: "#DFBF7F",
      }}
    >
      <div className="w-12 h-12 sm:w-16 sm:h-16 mb-4 flex-shrink-0">
        <Image
          src={iconSrc}
          alt={iconAlt}
          width={64}
          height={64}
          className="w-full h-full object-contain"
        />
      </div>
      <h3
        className="mb-3 sm:mb-4"
        style={{
          fontFamily: "Helvetica Neue, Arial, sans-serif",
          fontWeight: 700,
          fontSize: 17,
          lineHeight: "100%",
          letterSpacing: "0",
          color: "#003C54",
        }}
      >
        {title}
      </h3>
      <p
        className="text-sm leading-[1.4]"
        style={{
          fontFamily: "Helvetica Neue, Arial, sans-serif",
          fontWeight: 400,
          color: "#003C54",
        }}
      >
        {description}
      </p>
    </div>
  );
}

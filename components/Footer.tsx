'use client';

import Image from 'next/image';
import Link from 'next/link';

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'The Project', href: '/the-project' },
  { name: 'Design & Amenities', href: '/amenities' },
  { name: 'Invest', href: '/invest' },
];

const projectLinks = [
  { name: 'Building Configuration', href: '/the-project#building-configuration' },
  { name: 'Commercial Floors', href: '/the-project#commercial-floors' },
  { name: 'Co-Working Floors', href: '/the-project#co-working' },
  { name: 'Hotel Apartments', href: '/the-project#hotel-apartments' },
  { name: 'Architecture', href: '/amenities#architecture' },
  { name: 'Amenities & Services', href: '/amenities#amenities-services' },
];

const contactInfo = [
  // {
  //   icon: '/assets/footer/call.png',
  //   text: '042 111 111 744',
  //   href: 'tel:042111111744',
  // },
  {
    icon: '/assets/footer/call.svg',
    lines: ['0304-1111106', 'For Corporate Office / Commercial'],
    href: 'tel:0304-1111106',
  },
  {
    icon: '/assets/footer/call.svg',
    lines: ['0300-8497999', 'For Co-Working / Hotel Apartments'],
    href: 'tel:0300-8497999',
  },
  {
    icon: '/assets/footer/sms.svg',
    text: 'info@sereneheightslahore.com',
    href: 'mailto:info@sereneheightslahore.com',
  },
  {
    icon: '/assets/footer/global.svg',
    text: 'sereneheightslahore.com',
    href: 'https://sereneheightslahore.com',
  },
  {
    icon: '/assets/footer/location.svg',
    text: 'Gulberg Main Boulevard, Lahore',
    href: '#',
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#242424] w-full">
      <div className="max-w-[1512px] mx-auto px-6 pt-[60px] pb-[20px] md:p-[100px]">
        <div className="flex flex-col gap-[60px] md:flex-row md:items-start md:justify-center md:gap-[80px]">
          {/* Logo + description — Figma: 424px wide, logo 128×128, gap 20px */}
          <div className="flex items-center gap-[40px] w-full md:w-[424px] md:flex-col md:items-start md:gap-[20px]">
            <div className="w-[80px] h-[80px] md:mb-5 overflow-hidden shrink-0 md:w-[120px] md:h-[120px]">
              <Image
                src="/assets/logo/serene-white-transp.png"
                alt="Serene Heights Logo"
                width={128}
                height={128}
                className="w-full h-full object-fit"
              />
            </div>
            <p
              className="text-[#E8E8E8] text-[16px] leading-normal"
              style={{ fontFamily: '"Helvetica Neue", Arial, sans-serif', fontWeight: 400 }}
            >
              A landmark 21-storey mixed-use commercial development on Gulberg Main Boulevard, Lahore.
            </p>
          </div>

          {/* Desktop: 3 columns, Mobile: 2 columns + contact row */}
          <div className="w-full grid grid-cols-2 gap-[32px] md:flex-1 md:grid-cols-[1fr_1fr_1fr]">
            {/* Figma: gap-24px between heading and links, gap-12px between links */}
            <div className="flex flex-col gap-[16px] md:gap-[24px]">
              <h3
                className="text-[#DFBF7F] text-[16px] md:text-[20px] leading-normal"
                style={{ fontFamily: '"Gravesend Sans", sans-serif', fontWeight: 500 }}
              >
                QUICK LINKS
              </h3>
              <div className="flex flex-col gap-[12px]">
                {quickLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-[#E8E8E8] text-[14px] md:text-[16px] leading-normal hover:text-[#DFBF7F] transition-colors"
                    style={{ fontFamily: '"Helvetica Neue", Arial, sans-serif', fontWeight: 400 }}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-[16px] md:gap-[24px]">
              <h3
                className="text-[#DFBF7F] text-[16px] md:text-[20px] leading-normal"
                style={{ fontFamily: '"Gravesend Sans", sans-serif', fontWeight: 500 }}
              >
                THE PROJECT
              </h3>
              <div className="flex flex-col gap-[12px]">
                {projectLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-[#E8E8E8] text-[14px] md:text-[16px] leading-normal hover:text-[#DFBF7F] transition-colors"
                    style={{ fontFamily: '"Helvetica Neue", Arial, sans-serif', fontWeight: 400 }}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="col-span-2 md:col-span-1 flex flex-col gap-[16px] md:gap-[24px]">
              <h3
                className="text-[#DFBF7F] text-[16px] md:text-[20px] leading-normal"
                style={{ fontFamily: '"Gravesend Sans", sans-serif', fontWeight: 500 }}
              >
                CONTACT INFO
              </h3>
              <div className="flex flex-col gap-[12px]">
                {contactInfo.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href? item.href : '#'}
                    className="flex items-center gap-[12px] text-[#E8E8E8] text-[14px] md:text-[16px] leading-normal hover:text-[#DFBF7F] transition-colors"
                    style={{ fontFamily: '"Helvetica Neue", Arial, sans-serif', fontWeight: 400 }}
                  >
                    <div className="relative w-5 h-5 md:w-[24px] md:h-[24px] shrink-0">
                      <Image src={item.icon} alt="" fill className="object-contain" />
                    </div>
                    {item.lines ? (
                      <span className="flex flex-col gap-[4px]">
                        {item.lines.map((line) => (
                          <span key={line}>{line}</span>
                        ))}
                      </span>
                    ) : (
                      <span>{item.text}</span>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-[48px] flex flex-col items-center gap-[12px] md:gap-[30px]">
          <div className="w-full h-px bg-[#ECECF2]" />
          <p
            className="text-[#E8E8E8] text-[12px] md:text-[14px] leading-normal text-center"
            style={{ fontFamily: '"Helvetica Neue", Arial, sans-serif', fontWeight: 400 }}
          >
            © 2025 Serene Heights Lahore. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#1E1E20] pt-20 pb-8 text-white w-full">
      {/* Background Watermark */}
      <div className="pointer-events-none absolute bottom-0 right-[-10%] z-0 select-none opacity-[0.03] mix-blend-overlay w-[120%] h-auto translate-y-1/4 translate-x-10 md:translate-x-[15%]">
        <Image
          src="/axiler-logo.svg"
          alt=""
          width={1600}
          height={600}
          className="h-auto w-full object-contain"
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Column 1: Brand & Newsletter (Span 5) */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:col-span-5">
            <Link href="/" className="inline-block">
              <Image
                src="/axiler-logo.svg"
                alt="Axiler"
                width={160}
                height={50}
                className="h-10 w-auto md:h-12"
              />
            </Link>
            <p className="mt-8 text-sm md:text-base font-medium text-neutral-100">
              Stay updated with the latest tech insights and product updates.
            </p>
            
            {/* Subscribe Input & Button */}
            <div className="mt-6 flex w-full max-w-md items-center justify-center lg:justify-start gap-4">
              <input
                type="email"
                placeholder="Enter your Email"
                className="h-[52px] w-full min-w-[200px] rounded-[26px] border border-neutral-700 bg-[#252528] px-6 text-[15px] text-white placeholder-neutral-300 shadow-sm focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary"
              />
              <button
                type="button"
                className="h-[52px] shrink-0 rounded-[26px] bg-[#5B5CE6] px-8 text-[15px] font-semibold tracking-wide text-white transition-all hover:bg-[#4a4be0] hover:shadow-lg"
              >
                Subscribe
              </button>
            </div>
          </div>

          {/* Column 2: Links (Span 3) */}
          <div className="flex flex-col items-center lg:items-end gap-[18px] text-[13px] font-bold tracking-widest text-neutral-200 lg:col-span-3 lg:col-start-6 mt-4 lg:mt-0">
            <Link href="#service" className="hover:text-white transition-colors">SERVICE</Link>
            <Link href="#testimonial" className="hover:text-white transition-colors">TESTIMONIAL</Link>
            <Link href="#demo" className="hover:text-white transition-colors">BOOK A DEMO</Link>
            <Link href="#rnd" className="hover:text-white transition-colors">R&D</Link>
            <Link href="#certification" className="hover:text-white transition-colors">CERTIFICATION</Link>
          </div>

          {/* Column 3: Certifications (Span 1) */}
          <div className="flex flex-row flex-wrap justify-center items-center gap-6 lg:flex-col lg:items-center w-full lg:col-span-1 mt-4 lg:mt-0">
            <Image src="/assets/logos/iso-logo.svg" alt="ISO" width={56} height={56} className="h-12 w-auto md:h-14" />
            <Image src="/assets/logos/soc2-logo.svg" alt="SOC 2" width={56} height={56} className="h-12 w-auto md:h-14" />
            <div className="flex justify-center items-center">
              <Image src="/assets/logos/gdpr-logo.svg" alt="GDPR" width={52} height={52} className="h-12 w-auto scale-110" />
            </div>
          </div>

          {/* Column 4: Contact (Span 3) */}
          <div className="flex flex-col items-center lg:items-end gap-10 lg:col-span-3 lg:ml-auto mt-4 lg:mt-0">
            
            <div className="flex items-center gap-4 text-right">
              <p className="text-[14.5px] font-medium leading-[1.6] text-neutral-100 hidden sm:block">
                HQ: 46-01, OCBC Centre, 65,<br />
                Chulia Street, Singapore 049513
              </p>
              {/* Mobile text version */}
              <p className="text-[14.5px] font-medium leading-[1.6] text-neutral-100 sm:hidden">
                HQ: 46-01, OCBC Centre, 65, Chulia Street, Singapore 049513
              </p>
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[#1E1E20] shadow-sm">
                <MapPin className="h-[22px] w-[22px]" strokeWidth={2.5} />
              </div>
            </div>

            <div className="flex items-center gap-4 text-right mt-1 lg:-mt-2">
              <p className="text-[14.5px] font-medium text-neutral-100">
                reachus@axiler.com
              </p>
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[#1E1E20] shadow-sm">
                <Mail className="h-[22px] w-[22px]" strokeWidth={2.5} />
              </div>
            </div>

          </div>

        </div>

        {/* Divider */}
        <div className="my-[44px] h-px w-full bg-white/10" />

        {/* Bottom Footer */}
        <div className="flex flex-col-reverse items-center justify-between gap-8 md:flex-row">
          
          <div className="flex flex-wrap items-center justify-center gap-6 text-[14px] font-medium text-[#A1A1AA]">
            <span className="cursor-default">© axiler</span>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          </div>

          <div className="flex items-center gap-[22px]">
            <Link href="https://facebook.com" aria-label="Facebook">
              <div className="flex items-center justify-center transition-all hover:scale-110">
                <Image src="/assets/logos/facebook-logo.svg" alt="Facebook" width={26} height={26} className="h-6 w-auto opacity-70 hover:opacity-100 transition-opacity" />
              </div>
            </Link>
            <Link href="https://x.com" aria-label="X (Twitter)">
              <div className="flex items-center justify-center transition-all hover:scale-110">
                <Image src="/assets/logos/x-logo.svg" alt="X" width={22} height={22} className="h-[22px] w-auto opacity-70 hover:opacity-100 transition-opacity" />
              </div>
            </Link>
            <Link href="https://linkedin.com" aria-label="LinkedIn">
              <div className="flex items-center justify-center transition-all hover:scale-110">
                <Image src="/assets/logos/linkedin-logo.svg" alt="LinkedIn" width={26} height={26} className="h-[22px] w-auto opacity-70 hover:opacity-100 transition-opacity" />
              </div>
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
}

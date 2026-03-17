"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#03040C] pt-24 pb-10 text-white w-full border-t border-white/5">
      {/* Background Ambience */}
      <div className="pointer-events-none absolute bottom-0 left-[20%] h-[300px] w-[600px] rounded-full bg-cyan-500/5 blur-[120px]" />
      
      {/* Background Watermark */}
      <div className="pointer-events-none absolute bottom-0 right-[-10%] z-0 select-none opacity-[0.02] mix-blend-overlay w-[120%] h-auto translate-y-1/4 translate-x-10 md:translate-x-[15%]">
        <Image
          src="/axiler-logo.svg"
          alt=""
          width={1600}
          height={600}
          className="h-auto w-full object-contain"
          priority
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 justify-between items-start">
          
          {/* Column 1: Brand & Newsletter (Span 5) */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:col-span-5">
            <Link href="/" className="inline-block transition-opacity hover:opacity-90">
              <Image
                src="/axiler-logo.svg"
                alt="Axiler"
                width={160}
                height={50}
                className="h-9 w-auto md:h-11"
              />
            </Link>
            <p className="mt-6 text-sm md:text-[15px] font-medium text-neutral-400 max-w-sm leading-relaxed">
              Stay updated with the latest agentic tech insights and autonomous security product updates.
            </p>
            
            {/* Subscribe Input & Button */}
            <div className="mt-8 flex w-full flex-col sm:flex-row max-w-md items-center justify-center lg:justify-start gap-4">
              <div className="relative w-full sm:max-w-[280px]">
                <input
                  type="email"
                  placeholder="Enter your Email"
                  className="relative h-12 w-full rounded-full border border-white/10 bg-[#0A0B14] px-6 text-sm text-white placeholder-neutral-500 transition-all focus:border-cyan-500/50 focus:bg-[#0c0d18] focus:outline-none focus:ring-1 focus:ring-cyan-500/50"
                />
              </div>
              <button
                type="button"
                className="relative flex w-full sm:w-auto h-12 shrink-0 items-center justify-center rounded-full bg-white px-7 text-sm font-bold text-black transition-all hover:bg-neutral-200 hover:scale-105 active:scale-95"
              >
                Subscribe
              </button>
            </div>
          </div>

          {/* Column 2: Links (Span 3) */}
          <div className="flex flex-col items-center lg:items-start gap-5 text-sm font-semibold tracking-wider text-neutral-400 lg:col-span-2 mt-4 lg:mt-0 uppercase">
            <Link href="#security-lifecycle" className="hover:text-white transition-colors">Service</Link>
            <Link href="#testimonials" className="hover:text-white transition-colors">Testimonial</Link>
            <Link href="#why-axiler" className="hover:text-white transition-colors">Why Axiler</Link>
            <Link href="#cade" className="hover:text-white transition-colors">Cade Platform</Link>
            <Link href="#faq" className="hover:text-white transition-colors">FAQ</Link>
          </div>

          {/* Column 3: Certifications (Span 1) */}
          <div className="flex flex-row flex-wrap justify-center lg:flex-col lg:items-center gap-8 lg:col-span-1 mt-4 lg:mt-0">
            <Image src="/assets/logos/iso-logo.svg" alt="ISO" width={56} height={56} className="h-10 w-auto opacity-70 hover:opacity-100 transition-opacity filter grayscale" />
            <Image src="/assets/logos/soc2-logo.svg" alt="SOC 2" width={56} height={56} className="h-10 w-auto opacity-70 hover:opacity-100 transition-opacity filter grayscale" />
            <Image src="/assets/logos/gdpr-logo.svg" alt="GDPR" width={52} height={52} className="h-10 w-auto opacity-70 hover:opacity-100 transition-opacity filter grayscale" />
          </div>

          {/* Column 4: Contact (Span 4) */}
          <div className="flex flex-col items-center lg:items-end gap-10 lg:col-span-4 mt-8 lg:mt-0">
            
            <div className="flex flex-col md:flex-row items-center gap-4 md:text-right group cursor-pointer lg:justify-end text-center">
              <p className="text-sm font-medium leading-relaxed text-neutral-400 group-hover:text-neutral-200 transition-colors max-w-[240px] md:max-w-[200px] order-2 md:order-1">
                HQ: 46-01, OCBC Centre, 65, Chulia Street, Singapore 049513
              </p>
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 bg-[#0A0B14] text-neutral-400 transition-all group-hover:border-white/30 group-hover:text-white order-1 md:order-2">
                <MapPin size={20} strokeWidth={1.5} />
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-4 md:text-right group cursor-pointer lg:justify-end text-center">
              <p className="text-sm font-medium text-neutral-400 group-hover:text-neutral-200 transition-colors order-2 md:order-1">
                reachus@axiler.com
              </p>
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 bg-[#0A0B14] text-neutral-400 transition-all group-hover:border-white/30 group-hover:text-white order-1 md:order-2">
                <Mail size={20} strokeWidth={1.5} />
              </div>
            </div>

          </div>

        </div>

        {/* Divider */}
        <div className="my-[44px] h-px w-full bg-white/5" />

        {/* Bottom Footer */}
        <div className="flex flex-col-reverse items-center justify-between gap-8 md:flex-row">
          
          <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-6 text-[13px] font-medium text-neutral-500 text-center">
            <span className="cursor-default tracking-wide uppercase w-full md:w-auto mb-2 md:mb-0">© Axiler {new Date().getFullYear()}</span>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <span className="hidden md:inline text-white/20">•</span>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          </div>

          <div className="flex items-center gap-6">
            <Link href="https://facebook.com" aria-label="Facebook" className="group">
              <div className="flex items-center justify-center transition-all group-hover:-translate-y-1">
                <Image src="/assets/logos/facebook-logo.svg" alt="Facebook" width={26} height={26} className="h-[20px] w-auto opacity-50 group-hover:opacity-100 transition-all filter group-hover:brightness-0 group-hover:invert" />
              </div>
            </Link>
            <Link href="https://x.com" aria-label="X (Twitter)" className="group">
              <div className="flex items-center justify-center transition-all group-hover:-translate-y-1">
                <Image src="/assets/logos/x-logo.svg" alt="X" width={22} height={22} className="h-4 w-auto opacity-50 group-hover:opacity-100 transition-all filter group-hover:brightness-0 group-hover:invert" />
              </div>
            </Link>
            <Link href="https://linkedin.com" aria-label="LinkedIn" className="group">
              <div className="flex items-center justify-center transition-all group-hover:-translate-y-1">
                <Image src="/assets/logos/linkedin-logo.svg" alt="LinkedIn" width={26} height={26} className="h-[18px] w-auto opacity-50 group-hover:opacity-100 transition-all filter group-hover:brightness-0 group-hover:invert" />
              </div>
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
}

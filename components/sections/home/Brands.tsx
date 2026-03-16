"use client";

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import Image from "next/image";

const BRANDS = [
  { name: "iFarmer", src: "/assets/brands/iframer.svg", width: 156, height: 48 },
  { name: "Grand Palace", src: "/assets/brands/grand-palace.svg", width: 120, height: 60 },
  { name: "SkilledIn Green", src: "/assets/brands/skilled-in.svg", width: 180, height: 48 },
  { name: "Renata PLC", src: "/assets/brands/renata.svg", width: 160, height: 40 },
  { name: "Roxy Paints", src: "/assets/brands/roxy-paints.svg", width: 140, height: 32 },
  { name: "Dekko Isho Group", src: "/assets/brands/dekko.svg", width: 160, height: 40 },
];

export default function Brands() {
  const { ref, isIntersecting } = useIntersectionObserver();

  return (
    <section id="brands" className="w-full bg-brands-bg py-16 md:py-24 overflow-hidden">
      <div
        ref={ref}
        className={`flex w-full flex-col gap-16 transition-all duration-700 ease-out motion-reduce:transition-none ${
          isIntersecting ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-semibold text-white">
          Brands Who Have Trusted Us
        </h2>

        {/* Marquee Container */}
        <div className="relative mx-auto w-full max-w-[1440px] before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-[15%] before:bg-linear-to-r before:from-brands-bg before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-[15%] after:bg-linear-to-l after:from-brands-bg after:to-transparent">
          <div className="flex w-max animate-marquee hover:play-state-paused">
            {/* First Set */}
            <div className="flex shrink-0 items-center gap-16 pr-16 md:gap-24 md:pr-24">
              {BRANDS.map((brand, i) => (
                <div
                  key={`brand-1-${i}`}
                  className="flex shrink-0 items-center justify-center transition-opacity hover:opacity-80"
                >
                  <Image
                    src={brand.src}
                    alt={`${brand.name} logo`}
                    width={brand.width}
                    height={brand.height}
                    className="h-10 md:h-12 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
            {/* Second Set for seamless loop */}
            <div
              className="flex shrink-0 items-center gap-16 pr-16 md:gap-24 md:pr-24"
              aria-hidden="true"
            >
              {BRANDS.map((brand, i) => (
                <div
                  key={`brand-2-${i}`}
                  className="flex shrink-0 items-center justify-center transition-opacity hover:opacity-80"
                >
                  <Image
                    src={brand.src}
                    alt={`${brand.name} logo`}
                    width={brand.width}
                    height={brand.height}
                    className="h-10 md:h-12 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

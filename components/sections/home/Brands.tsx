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

  const extendedBrands = Array.from({ length: 4 }, () => BRANDS).flat();

  return (
    <section
      id="brands"
      className="w-full bg-brands-bg py-12 px-4 sm:px-6 md:px-8 md:py-24 overflow-hidden"
    >
      <div
        ref={ref}
        className={`mx-auto flex w-full flex-col gap-10 md:gap-16 text-center transition-all duration-700 ease-out motion-reduce:transition-none ${
          isIntersecting ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <h2 className="text-balance text-3xl sm:text-[32px] md:text-[40px] lg:text-[48px] font-semibold leading-tight text-white">
          Brands Who Have Trusted Us
        </h2>

        {/* Marquee Container */}
        <div className="relative mx-auto w-full overflow-hidden before:pointer-events-none before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-[18%] sm:before:w-[14%] md:before:w-[10%] before:bg-linear-to-r before:from-brands-bg before:to-transparent after:pointer-events-none after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-[18%] sm:after:w-[14%] md:after:w-[10%] after:bg-linear-to-l after:from-brands-bg after:to-transparent">
          <div
            className="flex w-max animate-marquee hover:play-state-paused"
            style={{
              // Make the loop long enough that no restart is visible within 2 minutes
              animationDuration: "120s",
            }}
          >
            {/* First Set */}
            <div className="flex shrink-0 items-center gap-8 pr-8 sm:gap-12 sm:pr-12 md:gap-16 md:pr-16 lg:gap-24 lg:pr-24">
              {extendedBrands.map((brand, i) => (
                <div
                  key={`brand-1-${i}`}
                  className="flex shrink-0 items-center justify-center transition-opacity hover:opacity-80"
                >
                  <Image
                    src={brand.src}
                    alt={`${brand.name} logo`}
                    width={brand.width}
                    height={brand.height}
                    className="h-8 sm:h-9 md:h-10 lg:h-12 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
            {/* Second Set for seamless loop */}
            <div
              className="flex shrink-0 items-center gap-8 pr-8 sm:gap-12 sm:pr-12 md:gap-16 md:pr-16 lg:gap-24 lg:pr-24"
              aria-hidden="true"
            >
              {extendedBrands.map((brand, i) => (
                <div
                  key={`brand-2-${i}`}
                  className="flex shrink-0 items-center justify-center transition-opacity hover:opacity-80"
                >
                  <Image
                    src={brand.src}
                    alt={`${brand.name} logo`}
                    width={brand.width}
                    height={brand.height}
                    className="h-8 sm:h-9 md:h-10 lg:h-12 w-auto object-contain"
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

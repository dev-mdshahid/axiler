"use client";

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import Image from "next/image";

type IntegrationLogo = {
  name: string;
  src: string;
};

const INTEGRATION_ROWS: IntegrationLogo[][] = [
  [
    { name: "AWS", src: "/assets/integration-tools/logo.svg" },
    { name: "Auth0", src: "/assets/integration-tools/auth0.svg" },
    { name: "Docker", src: "/assets/integration-tools/docker.svg" },
    { name: "Slack", src: "/assets/integration-tools/slack.svg" },
    { name: "Feather", src: "/assets/integration-tools/feather.svg" },
    { name: "Integration 1", src: "/assets/integration-tools/logo%20(5).svg" },
    { name: "Integration 2", src: "/assets/integration-tools/logo%20(6).svg" },
    { name: "Integration 3", src: "/assets/integration-tools/logo%20(7).svg" },
    { name: "Integration 4", src: "/assets/integration-tools/logo%20(8).svg" },
    { name: "Integration 5", src: "/assets/integration-tools/logo%20(9).svg" },
    { name: "Integration 6", src: "/assets/integration-tools/logo%20(10).svg" },
  ],
  [
    { name: "Integration 7", src: "/assets/integration-tools/logo%20(11).svg" },
    { name: "Integration 8", src: "/assets/integration-tools/logo%20(12).svg" },
    { name: "Integration 9", src: "/assets/integration-tools/logo%20(13).svg" },
    {
      name: "Integration 10",
      src: "/assets/integration-tools/logo%20(14).svg",
    },
    {
      name: "Integration 11",
      src: "/assets/integration-tools/logo%20(15).svg",
    },
    {
      name: "Integration 12",
      src: "/assets/integration-tools/logo%20(16).svg",
    },
    {
      name: "Integration 13",
      src: "/assets/integration-tools/logo%20(17).svg",
    },
    {
      name: "Integration 14",
      src: "/assets/integration-tools/logo%20(18).svg",
    },
    {
      name: "Integration 15",
      src: "/assets/integration-tools/logo%20(19).svg",
    },
    {
      name: "Integration 16",
      src: "/assets/integration-tools/logo%20(20).svg",
    },
    {
      name: "Integration 17",
      src: "/assets/integration-tools/logo%20(21).svg",
    },
  ],
  [
    {
      name: "Integration 18",
      src: "/assets/integration-tools/logo%20(22).svg",
    },
    {
      name: "Integration 19",
      src: "/assets/integration-tools/logo%20(23).svg",
    },
    {
      name: "Integration 20",
      src: "/assets/integration-tools/logo%20(24).svg",
    },
    {
      name: "Integration 21",
      src: "/assets/integration-tools/logo%20(25).svg",
    },
    {
      name: "Integration 22",
      src: "/assets/integration-tools/logo%20(26).svg",
    },
    {
      name: "Integration 23",
      src: "/assets/integration-tools/logo%20(27).svg",
    },
    {
      name: "Integration 24",
      src: "/assets/integration-tools/logo%20(28).svg",
    },
    {
      name: "Integration 25",
      src: "/assets/integration-tools/logo%20(29).svg",
    },
    {
      name: "Integration 26",
      src: "/assets/integration-tools/logo%20(30).svg",
    },
    {
      name: "Integration 27",
      src: "/assets/integration-tools/logo%20(31).svg",
    },
    {
      name: "Integration 28",
      src: "/assets/integration-tools/logo%20(32).svg",
    },
    {
      name: "Integration 29",
      src: "/assets/integration-tools/logo%20(33).svg",
    },
  ],
];

export default function Integrations() {
  const { ref, isIntersecting } = useIntersectionObserver();

  return (
    <section
      id="integrations"
      className="relative w-full bg-[#050509] py-20 md:py-28 lg:py-36 overflow-hidden"
    >
      <div
        ref={ref}
        className={`relative z-10 mx-auto w-full transition-all duration-700 ease-out motion-reduce:transition-none ${
          isIntersecting
            ? "translate-y-0 opacity-100"
            : "translate-y-8 opacity-0"
        }`}
      >
        <div className="mb-14 sm:mb-20 flex flex-col items-center text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-5 inline-flex uppercase tracking-[0.2em] text-[11px] sm:text-xs font-bold text-blue-400 bg-blue-400/10 border border-blue-400/20 px-4 py-1.5 rounded-full">
            Seamless Integrations
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-5xl font-bold leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/60 mb-5">
            Integrates Seamlessly Into Ecosystems You Already Trust
          </h2>
          <p className="text-base sm:text-lg font-medium leading-relaxed text-neutral-400">
            Connect our autonomous security platform with your existing tools in minutes, minimizing friction and maximizing ROI.
          </p>
        </div>

        <div className="flex w-full flex-col gap-8">
          {INTEGRATION_ROWS.map((row, rowIndex) => {
            const extendedRow = Array.from({ length: 4 }, () => row).flat();

            return (
              <div
                key={rowIndex}
                className="relative mx-auto w-full overflow-hidden before:pointer-events-none before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-[18%] sm:before:w-[14%] md:before:w-[10%] before:bg-linear-to-r before:from-[#050509] before:to-transparent after:pointer-events-none after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-[18%] sm:after:w-[14%] md:after:w-[10%] after:bg-linear-to-l after:from-[#050509] after:to-transparent"
              >
                <div
                  className="flex w-max animate-marquee hover:play-state-paused"
                  style={{
                    // Top and bottom rows move to the right, middle row moves to the left
                    animationDirection: rowIndex === 1 ? "normal" : "reverse",
                    // Make the loop long enough that no restart is visible within 2 minutes
                    // and keep perceived speeds similar across directions
                    animationDuration: rowIndex === 1 ? "140s" : "120s",
                  }}
                >
                  {/* First set */}
                  <div className="flex shrink-0 items-center gap-6 pr-6 sm:gap-8 sm:pr-8 md:gap-10 md:pr-10 lg:gap-12 lg:pr-12">
                    {extendedRow.map((logo, i) => (
                      <div
                        key={`integration-row-${rowIndex}-1-${i}`}
                        className="flex shrink-0 items-center justify-center opacity-80 transition-opacity hover:opacity-100"
                      >
                        <Image
                          src={logo.src}
                          alt={`${logo.name} logo`}
                          width={72}
                          height={72}
                          className="h-10 w-10 sm:h-12 sm:w-12 md:h-[64px] md:w-[64px] lg:h-[72px] lg:w-[72px]"
                        />
                      </div>
                    ))}
                  </div>
                  {/* Second set for seamless loop */}
                  <div
                    className="flex shrink-0 items-center gap-6 pr-6 sm:gap-8 sm:pr-8 md:gap-10 md:pr-10 lg:gap-12 lg:pr-12"
                    aria-hidden="true"
                  >
                    {extendedRow.map((logo, i) => (
                      <div
                        key={`integration-row-${rowIndex}-2-${i}`}
                        className="flex shrink-0 items-center justify-center opacity-80 transition-opacity hover:opacity-100"
                      >
                        <Image
                          src={logo.src}
                          alt={`${logo.name} logo`}
                          width={72}
                          height={72}
                          className="h-10 w-10 sm:h-12 sm:w-12 md:h-[64px] md:w-[64px] lg:h-[72px] lg:w-[72px]"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import Image from "next/image";

const COMPARISONS = [
  {
    leftIconSrc: "/assets/icons/hourglass-start.svg",
    leftTitle: "100+ Days",
    leftDesc: "To Remediate a Vulnerability",
    rightText: "~1hr"
  },
  {
    leftIconSrc: "/assets/icons/shield.svg",
    leftTitle: "Fragmented",
    leftDesc: "Security Insights",
    rightText: "Centralized Visibility"
  },
  {
    leftIconSrc: "/assets/icons/archive-search.svg",
    leftTitle: "Hours",
    leftDesc: "Of Manual Review",
    rightText: "Upto 90% Less Human Intervention"
  }
];

export default function TheResult() {
  return (
    <SectionWrapper id="the-result" className="bg-(image:--background-image-result-gradient) py-20 md:py-28 lg:py-36">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center px-4 sm:px-6 lg:px-8">
        
        {/* Header section */}
        <div className="mb-14 flex flex-col items-center text-center md:mb-18 lg:mb-20">
          <h2 className="mb-5 text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">
            The Result
          </h2>
          <p className="max-w-2xl text-base font-medium leading-relaxed text-neutral-300 sm:text-lg">
            We Remove The Complexity With AI
          </p>
        </div>

        {/* Content Section */}
        <div className="mx-auto w-full max-w-[960px]">
          {/* Desktop Column Headers */}
          <div className="mb-8 hidden w-full flex-row items-end justify-between px-2 lg:flex lg:px-0">
            <div className="w-[320px] shrink-0 text-center text-[19px] font-semibold tracking-wide text-neutral-300">
              Traditional AppSec
            </div>
            <div className="flex-1" /> {/* Spacer for arrow */}
            <div className="flex w-[320px] shrink-0 items-center justify-center">
              <Image 
                src="/assets/what-it-does/cade-logo.svg" 
                alt="CADE Logo" 
                width={86} 
                height={43} 
                className="object-contain drop-shadow-md" 
              />
            </div>
          </div>

          {/* Rows */}
          <div className="flex flex-col gap-10 lg:gap-6">
            {COMPARISONS.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center lg:flex-row lg:justify-between">
                
                {/* Mobile Header Left (only first row) */}
                {idx === 0 && (
                  <div className="mb-4 text-center lg:hidden">
                    <h3 className="text-lg font-semibold tracking-wide text-neutral-200">Traditional AppSec</h3>
                  </div>
                )}

                {/* Left Card */}
                <div className="w-full max-w-[340px] shrink-0 lg:w-[320px] lg:max-w-none">
                  <div className="group relative flex min-h-[88px] w-full items-center rounded-2xl border border-result-block-border/40 bg-result-block-bg/60 px-5 py-4 shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-result-block-border hover:bg-result-block-bg hover:shadow-xl sm:px-6 lg:py-0">
                    <div className="flex size-10 shrink-0 items-center justify-center">
                      <Image 
                        src={item.leftIconSrc} 
                        alt={item.leftTitle} 
                        width={32} 
                        height={32} 
                        className="size-full object-contain opacity-80 transition-opacity duration-300 group-hover:opacity-100" 
                      />
                    </div>
                    <div className="ml-5 flex flex-col justify-center text-left">
                      <span className="text-[17px] font-bold tracking-wide text-foreground sm:text-lg">{item.leftTitle}</span>
                      <span className="mt-1 text-[13px] font-medium leading-snug text-neutral-400 sm:text-sm">{item.leftDesc}</span>
                    </div>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex flex-1 items-center justify-center px-4 py-5 lg:px-6 lg:py-0">
                  <Image
                    src="/assets/arrow-right.svg"
                    width={200}
                    height={20}
                    alt="Arrow Right"
                    className="hidden w-full max-w-[200px] object-contain opacity-60 transition-opacity duration-300 hover:opacity-100 lg:block"
                  />
                  <div className="flex items-center justify-center lg:hidden">
                    <Image
                      src="/assets/arrow-right.svg"
                      width={40}
                      height={40}
                      alt="Arrow Down"
                      className="rotate-90 object-contain opacity-60"
                    />
                  </div>
                </div>

                {/* Mobile Header Right (only first row) */}
                {idx === 0 && (
                  <div className="mb-4 mt-2 flex items-center justify-center lg:hidden">
                    <Image src="/assets/what-it-does/cade-logo.svg" alt="CADE Logo" width={76} height={38} className="object-contain" />
                  </div>
                )}

                {/* Right Card */}
                <div className="w-full max-w-[340px] shrink-0 lg:w-[320px] lg:max-w-none">
                  <div className="group relative flex min-h-[88px] w-full items-center justify-center rounded-2xl border border-result-block-border/40 bg-result-block-bg/60 px-5 py-4 text-center shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-result-block-border hover:bg-result-block-bg hover:shadow-xl sm:px-6 lg:py-0">
                    <span className="text-[17px] font-semibold tracking-wide text-neutral-200 transition-colors duration-300 group-hover:text-white sm:text-lg">
                      {item.rightText}
                    </span>
                  </div>
                </div>
                
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

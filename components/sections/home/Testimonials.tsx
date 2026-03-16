import { SectionWrapper } from "@/components/ui/SectionWrapper";
import Image from "next/image";
import { cn } from "@/lib/utils";

const TESTIMONIALS = [
  {
    name: "Natasha Syed - CEO",
    company: "Skilledin Green",
    text: "Implementing CADE has transformed the way we approach application security. Its real-time threat detection and automated protection have significantly reduced vulnerabilities, giving our team confidence and peace of mind. CADE's intuitive interface and actionable insights make it an indispensable part of our security strategy.",
    logoSrc: "/assets/brands/skilled-in.svg",
    glowClass: "shadow-[inset_0_2px_0_0_var(--color-testi-border-purple),0_-8px_32px_-12px_var(--color-testi-border-purple)] border-testi-border-purple/20",
  },
  {
    name: "A M Ishtiaque Sarwar - Managing Director",
    company: "aamarPay",
    text: "I wanted to express my heartfelt appreciation for the outstanding protection CADE has provided. Its advanced application security capabilities and real-time threat detection have been invaluable in safeguarding our organization's digital assets. The Axiler team was very responsive and supportive throughout the engagement.",
    logoSrc: "/assets/brands/aamarpay.svg",
    glowClass: "shadow-[inset_0_2px_0_0_var(--color-testi-border-cyan),0_-8px_32px_-12px_var(--color-testi-border-cyan)] border-testi-border-cyan/20",
  },
  {
    name: "Shahjalal Palash - Head of IT",
    company: "Renata PLC",
    text: "Axiler's security services helped us address and close our security gaps. They allowed us to resolve vulnerabilities quickly and efficiently. We appreciate their professional approach to securing our business environment.",
    logoSrc: "/assets/brands/renata.svg",
    glowClass: "shadow-[inset_0_2px_0_0_var(--color-testi-border-orange),0_-8px_32px_-12px_var(--color-testi-border-orange)] border-testi-border-orange/20",
  }
];

export default function Testimonials() {
  return (
    <SectionWrapper id="testimonials" className="relative py-20 md:py-28 lg:py-36">
      {/* Optional faint background grid similar to the screenshot */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[32px_32px]" />

      <div className="mx-auto flex w-full max-w-7xl flex-col items-center px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="mb-14 flex flex-col items-center text-center md:mb-16 lg:mb-20">
          <h2 className="mb-5 text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">
            Words Of Endorsement<br />From Our Clients
          </h2>
          <p className="max-w-2xl text-base font-medium leading-relaxed text-neutral-300 sm:text-lg">
            Check out what all our happy clients have to say about us!
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {TESTIMONIALS.map((col, idx) => (
            <div 
              key={idx}
              className={cn(
                "relative flex h-full flex-col overflow-hidden rounded-2xl border bg-[#0D0D0D]/80 p-8 backdrop-blur-md transition-all duration-300 hover:scale-[1.02]",
                col.glowClass
              )}
            >
              {/* Inner card background grid to match the design */}
              <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[48px_48px] mix-blend-overlay" />

              <div className="relative z-10 flex h-full flex-col">
                <div className="mb-6 font-rethink text-sm font-extrabold leading-none tracking-normal text-white">
                  <span>{col.name}</span>
                  <br />
                  <span>{col.company}</span>
                </div>
                
                <p className="flex-1 font-rethink text-sm font-normal leading-normal tracking-normal text-content-disabled align-middle">
                  {col.text}
                </p>

                <div className="mt-8 flex items-end">
                  <Image
                    src={col.logoSrc}
                    alt={`${col.company} logo`}
                    width={112}
                    height={38}
                    className="h-[38px] w-[112px] object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </SectionWrapper>
  );
}

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import Image from "next/image";
import { cn } from "@/lib/utils";

const TESTIMONIALS = [
  {
    name: "Natasha Syed",
    role: "CEO",
    company: "Skilledin Green",
    text: "Implementing CADE has transformed the way we approach application security. Its real-time threat detection and automated protection have significantly reduced vulnerabilities, giving our team confidence and peace of mind. CADE's intuitive interface and actionable insights make it an indispensable part of our security strategy.",
    logoSrc: "/assets/brands/skilled-in.svg",
    highlight: "from-purple-500/20 to-transparent",
    borderHighlight: "group-hover:border-purple-500/30 hover:shadow-[0_0_30px_rgba(168,85,247,0.05)]",
    quoteColor: "text-purple-500/20 group-hover:text-purple-500/40",
  },
  {
    name: "A M Ishtiaque Sarwar",
    role: "Managing Director",
    company: "aamarPay",
    text: "I wanted to express my heartfelt appreciation for the outstanding protection CADE has provided. Its advanced application security capabilities and real-time threat detection have been invaluable in safeguarding our organization's digital assets. The Axiler team was very responsive and supportive throughout the engagement.",
    logoSrc: "/assets/brands/aamarpay.svg",
    highlight: "from-cyan-500/20 to-transparent",
    borderHighlight: "group-hover:border-cyan-500/30 hover:shadow-[0_0_30px_rgba(34,211,238,0.05)]",
    quoteColor: "text-cyan-500/20 group-hover:text-cyan-500/40",
  },
  {
    name: "Shahjalal Palash",
    role: "Head of IT",
    company: "Renata PLC",
    text: "Axiler's security services helped us address and close our security gaps. They allowed us to resolve vulnerabilities quickly and efficiently. We appreciate their professional approach to securing our business environment.",
    logoSrc: "/assets/brands/renata.svg",
    highlight: "from-orange-500/20 to-transparent",
    borderHighlight: "group-hover:border-orange-500/30 hover:shadow-[0_0_30px_rgba(249,115,22,0.05)]",
    quoteColor: "text-orange-500/20 group-hover:text-orange-500/40",
  }
];

export default function Testimonials() {
  return (
    <SectionWrapper id="testimonials" className="relative w-full bg-[#03040C] overflow-hidden border-t border-white/5">
      {/* Background Ambience */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="absolute top-[10%] left-[10%] h-[300px] w-[500px] rounded-full bg-cyan-500/5 blur-[120px]" />
        <div className="absolute bottom-[20%] right-[10%] h-[300px] w-[400px] rounded-full bg-purple-500/5 blur-[120px]" />
      </div>

      <div className="mx-auto flex w-full max-w-7xl flex-col relative z-10">
        
        {/* Header Section */}
        <div className="mb-14 sm:mb-16 flex flex-col items-center text-center max-w-3xl mx-auto w-full">
          <div className="mb-5 inline-flex items-center uppercase tracking-[0.2em] text-[11px] sm:text-xs font-bold text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 px-4 py-1.5 rounded-full hover:bg-cyan-400/15 transition-colors">
            Success Stories
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/60 mb-5">
            Trusted by Cybersecurity Leaders
          </h2>
          <p className="text-sm sm:text-base font-medium leading-relaxed text-neutral-400">
            See how top-tier organizations leverage our autonomous security platform to reduce risk, ensure compliance, and scale operations securely.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="mx-auto grid w-full grid-cols-1 gap-6 lg:grid-cols-3 z-10">
          {TESTIMONIALS.map((testimonial, idx) => (
            <div 
              key={idx}
              className={cn(
                "group relative flex flex-col justify-between rounded-3xl border border-white/5 bg-[#0A0B14] p-6 sm:p-8 transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.02]",
                testimonial.borderHighlight
              )}
            >
              {/* Subtle hover gradient aura top-left */}
              <div 
                className={cn(
                  "absolute top-0 left-0 w-full h-[150px] rounded-t-3xl bg-linear-to-br opacity-0 transition-opacity duration-700 group-hover:opacity-10 pointer-events-none",
                  testimonial.highlight
                )}
              />
              
              <div className="relative z-10 flex-1 flex flex-col">
                {/* Decorative quote icon */}
                <div className="mb-6">
                  <svg className={cn("h-8 w-8 transition-colors duration-500", testimonial.quoteColor)} fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                    <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.694 20 9.24L20 10.054 24 10.054 24 18M3.017 18L3.017 10.609C3.017 4.905 6.748 1.039 12 0L12.995 2.151C10.563 3.068 9 5.694 9 9.24L9 10.054 13 10.054 13 18" />
                  </svg>
                </div>
                
                <p className="text-sm sm:text-[15px] leading-relaxed text-neutral-400 group-hover:text-neutral-300 transition-colors">
                  &quot;{testimonial.text}&quot;
                </p>
              </div>

              <div className="mt-8 flex items-center justify-between border-t border-white/5 pt-5 relative z-10 transition-colors group-hover:border-white/10">
                <div>
                  <div className="font-semibold text-white tracking-wide text-sm sm:text-base">
                    {testimonial.name}
                  </div>
                  <div className="text-[12px] sm:text-[13px] font-medium text-neutral-500 mt-1">
                    {testimonial.role} &bull; <span className="text-neutral-300">{testimonial.company}</span>
                  </div>
                </div>
                <div className="ml-4 shrink-0">
                  <Image
                    src={testimonial.logoSrc}
                    alt={`${testimonial.company} logo`}
                    width={80}
                    height={28}
                    className="h-6 sm:h-7 w-auto object-contain opacity-50 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
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

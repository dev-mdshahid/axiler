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
    borderHighlight: "group-hover:border-purple-500/50 hover:shadow-[0_0_30px_-5px_var(--tw-shadow-color)] hover:shadow-purple-500/30",
  },
  {
    name: "A M Ishtiaque Sarwar",
    role: "Managing Director",
    company: "aamarPay",
    text: "I wanted to express my heartfelt appreciation for the outstanding protection CADE has provided. Its advanced application security capabilities and real-time threat detection have been invaluable in safeguarding our organization's digital assets. The Axiler team was very responsive and supportive throughout the engagement.",
    logoSrc: "/assets/brands/aamarpay.svg",
    highlight: "from-cyan-500/20 to-transparent",
    borderHighlight: "group-hover:border-cyan-500/50 hover:shadow-[0_0_30px_-5px_var(--tw-shadow-color)] hover:shadow-cyan-500/30",
  },
  {
    name: "Shahjalal Palash",
    role: "Head of IT",
    company: "Renata PLC",
    text: "Axiler's security services helped us address and close our security gaps. They allowed us to resolve vulnerabilities quickly and efficiently. We appreciate their professional approach to securing our business environment.",
    logoSrc: "/assets/brands/renata.svg",
    highlight: "from-orange-500/20 to-transparent",
    borderHighlight: "group-hover:border-orange-500/50 hover:shadow-[0_0_30px_-5px_var(--tw-shadow-color)] hover:shadow-orange-500/30",
  }
];

export default function Testimonials() {
  return (
    <SectionWrapper id="testimonials" className="relative py-20 md:py-28 lg:py-36 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      <div className="absolute left-1/2 top-0 -z-10 -mt-24 w-full max-w-[1000px] -translate-x-1/2 opacity-30 blur-[100px]">
        <div className="aspect-2/1 bg-gradient-to-b from-blue-900 via-purple-900 to-transparent" />
      </div>

      <div className="mx-auto flex w-full max-w-7xl flex-col px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="mb-14 sm:mb-20 flex flex-col items-center text-center max-w-4xl mx-auto relative z-10">
          <div className="mb-5 inline-flex items-center uppercase tracking-[0.2em] text-[11px] sm:text-xs font-bold text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 px-4 py-1.5 rounded-full hover:bg-white/10 transition-colors">
            <span className="flex h-1.5 w-1.5 rounded-full bg-cyan-400 mr-2 shadow-[0_0_10px_rgba(34,211,238,0.8)]"></span>
            Client Success Stories
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-5xl font-bold leading-tight tracking-tight text-white mb-5 font-rethink">
            Words Of Endorsement<br className="hidden sm:block" /> From Our Clients
          </h2>
          <p className="text-base sm:text-lg font-medium leading-relaxed text-neutral-400 font-rethink">
            Discover how we&apos;re transforming security landscapes globally through the experiences of our valued partners.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3 z-10">
          {TESTIMONIALS.map((testimonial, idx) => (
            <div 
              key={idx}
              className={cn(
                "group relative flex flex-col justify-between rounded-3xl border border-white/10 bg-[#0D0D0D]/60 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2",
                testimonial.borderHighlight
              )}
            >
              {/* Card gradient aura on hover */}
              <div 
                className={cn(
                  "absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100",
                  testimonial.highlight
                )}
              />

              {/* Inner subtle grid */}
              <div className="absolute inset-x-0 inset-y-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] rounded-3xl [mask-image:linear-gradient(to_bottom,white,transparent_80%)]" />
              
              <div className="relative z-10">
                {/* Decorative quote icon */}
                <div className="mb-8">
                  <svg className="h-10 w-10 text-white/10 transition-colors duration-500 group-hover:text-white/20" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                    <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.694 20 9.24L20 10.054 24 10.054 24 18M3.017 18L3.017 10.609C3.017 4.905 6.748 1.039 12 0L12.995 2.151C10.563 3.068 9 5.694 9 9.24L9 10.054 13 10.054 13 18" />
                  </svg>
                </div>
                
                <p className="text-base leading-relaxed text-neutral-300 font-rethink relative z-10">
                  "{testimonial.text}"
                </p>
              </div>

              <div className="mt-10 flex items-center justify-between border-t border-white/5 pt-6 relative z-10">
                <div>
                  <div className="font-semibold text-white tracking-wide font-rethink">
                    {testimonial.name}
                  </div>
                  <div className="text-sm font-medium text-neutral-400 mt-1 font-rethink">
                    {testimonial.role} &bull; <span className="text-white/70">{testimonial.company}</span>
                  </div>
                </div>
                <div className="ml-4 shrink-0">
                  <Image
                    src={testimonial.logoSrc}
                    alt={`${testimonial.company} logo`}
                    width={96}
                    height={32}
                    className="h-8 w-auto object-contain opacity-50 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
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

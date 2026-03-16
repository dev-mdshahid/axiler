"use client";

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import Image from "next/image";
import { 
  TbHourglassEmpty, 
  TbShieldHalfFilled, 
  TbFileSearch, 
  TbBolt, 
  TbRadar, 
  TbBrain,
  TbArrowRight
} from "react-icons/tb";

const COMPARISONS = [
  {
    before: {
      title: "100+ Days",
      desc: "To Remediate a Vulnerability",
      icon: TbHourglassEmpty,
    },
    after: {
      title: "~1hr",
      desc: "To Remediate",
      icon: TbBolt,
      glow: "shadow-[0_0_30px_rgba(34,211,238,0.25)]",
      color: "text-cyan-400",
      bg: "bg-cyan-400/10",
      border: "border-cyan-400/20",
    }
  },
  {
    before: {
      title: "Fragmented",
      desc: "Security Insights",
      icon: TbShieldHalfFilled,
    },
    after: {
      title: "Centralized Visibility",
      desc: "Unified Risk Context",
      icon: TbRadar,
      glow: "shadow-[0_0_30px_rgba(59,130,246,0.25)]",
      color: "text-blue-400",
      bg: "bg-blue-400/10",
      border: "border-blue-400/20",
    }
  },
  {
    before: {
      title: "Hours",
      desc: "Of Manual Review",
      icon: TbFileSearch,
    },
    after: {
      title: "Upto 90% Less",
      desc: "Human Intervention",
      icon: TbBrain,
      glow: "shadow-[0_0_30px_rgba(168,85,247,0.25)]",
      color: "text-purple-400",
      bg: "bg-purple-400/10",
      border: "border-purple-400/20",
    }
  }
];

export default function TheResult() {
  const { ref: containerRef, isIntersecting } = useIntersectionObserver({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="the-result" className="relative w-full bg-[#03040C] py-20 md:py-28 lg:py-36 overflow-hidden">
      {/* Background Ambience */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
        <div className="absolute top-1/4 -left-[10%] h-[400px] w-[600px] rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute bottom-1/4 -right-[10%] h-[500px] w-[600px] rounded-full bg-purple-500/10 blur-[150px]" />
      </div>

      <div
        ref={containerRef}
        className={`relative z-10 mx-auto w-full max-w-[960px] px-4 sm:px-6 lg:px-8 transition-all duration-1000 ease-out ${
          isIntersecting ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
        }`}
      >
        {/* Header section */}
        <div className="mb-14 sm:mb-20 flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="mb-5 inline-flex uppercase tracking-[0.2em] text-[11px] sm:text-xs font-bold text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 px-4 py-1.5 rounded-full">
            Before & After
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-5xl font-bold leading-tight tracking-tight text-white mb-5">
            The Result
          </h2>
          <p className="text-base sm:text-lg font-medium leading-relaxed text-neutral-400">
            We Remove The Complexity With AI
          </p>
        </div>

        {/* Content Section */}
        <div className="mx-auto w-full relative z-10">
          
          {/* Desktop Column Headers */}
          <div className="hidden lg:grid grid-cols-[1fr_auto_1fr] items-end gap-6 mb-4">
            <div className="text-center text-xs font-bold uppercase tracking-[0.2em] text-neutral-500 ml-4">
              Traditional AppSec
            </div>
            <div className="w-10 sm:w-12"></div> {/* Spacer for arrow */}
            <div className="flex justify-center">
               <Image 
                 src="/assets/what-it-does/cade-logo.svg" 
                 alt="CADE Logo" 
                 width={80} 
                 height={40} 
                 className="object-contain drop-shadow-[0_0_15px_rgba(34,211,238,0.2)]" 
               />
            </div>
          </div>

          {/* Rows */}
          <div className="flex flex-col gap-3 lg:gap-4">
            {COMPARISONS.map((item, idx) => (
              <div 
                key={idx} 
                className="group relative flex flex-col lg:grid lg:grid-cols-[1fr_auto_1fr] items-center gap-3 sm:gap-4 lg:gap-6"
              >
                 {/* Mobile Header Left (only first row) */}
                 {idx === 0 && (
                    <div className="text-center text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-500 mb-1 lg:hidden w-full">
                      Traditional AppSec
                    </div>
                 )}

                 {/* Left side: Traditional */}
                 <div className="w-full flex items-center gap-4 p-4 sm:p-5 rounded-2xl sm:rounded-3xl bg-[#0A0B14] border border-white/5 relative z-10 transition-all duration-300 lg:group-hover:-translate-x-1 hover:border-white/10 hover:bg-white/5">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/5 text-neutral-400 group-hover:text-neutral-300 transition-colors shrink-0">
                        <item.before.icon size={24} />
                    </div>
                    <div className="flex flex-col text-left">
                       <span className="text-lg sm:text-xl font-bold text-white mb-0.5 tracking-tight">{item.before.title}</span>
                       <span className="text-sm text-neutral-400 font-medium">{item.before.desc}</span>
                    </div>
                 </div>

                 {/* Middle Arrow */}
                 <div className="flex justify-center items-center z-10 py-1 lg:py-0 shrink-0">
                    <div className={`relative flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-[#03040C] shadow-lg transition-all duration-300 group-hover:scale-110 lg:rotate-0 rotate-90 group-hover:border-white/20`}>
                       <div className={`absolute w-6 h-6 rounded-full ${item.after.bg} blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                       <TbArrowRight className={`relative z-10 ${item.after.color} opacity-80 group-hover:opacity-100 transition-opacity`} size={20} />
                    </div>
                 </div>

                 {/* Mobile Header Right (only first row) */}
                 {idx === 0 && (
                    <div className="flex justify-center mt-1 mb-1 lg:hidden w-full relative z-10">
                      <Image src="/assets/what-it-does/cade-logo.svg" alt="CADE" width={70} height={35} className="drop-shadow-sm" />
                    </div>
                 )}

                 {/* Right side: CADE Result */}
                 <div className={`w-full flex items-center gap-4 p-4 sm:p-5 rounded-2xl sm:rounded-3xl ${item.after.bg} ${item.after.border} border relative z-10 transition-all duration-300 lg:group-hover:translate-x-1 shadow-[inset_0_0_20px_rgba(0,0,0,0.2)] lg:shadow-none`}>
                    <div className={`absolute inset-0 rounded-2xl sm:rounded-3xl transition-opacity duration-300 opacity-0 group-hover:opacity-100 ${item.after.glow} pointer-events-none`} />
                    <div className={`flex items-center justify-center w-12 h-12 rounded-full border ${item.after.border} bg-[#0A0B14] ${item.after.color} shrink-0 relative z-10`}>
                        <item.after.icon size={24} />
                    </div>
                    <div className="flex flex-col text-left relative z-10">
                       <span className="text-lg sm:text-xl font-bold text-white mb-0.5 tracking-tight">{item.after.title}</span>
                       <span className={`text-sm font-medium ${item.after.color} opacity-90`}>{item.after.desc}</span>
                    </div>
                 </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

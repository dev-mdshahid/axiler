"use client";

import React from 'react';
import Image from 'next/image';
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { TbCalendarEvent, TbVideo, TbExternalLink } from "react-icons/tb";

export default function IndustryEvents() {
  const { ref: containerRef, isIntersecting } = useIntersectionObserver({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="relative w-full bg-[#03040C] py-16 md:py-24 overflow-hidden border-t border-white/5">
      {/* Background Ambience */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="absolute top-[10%] right-[-5%] h-[300px] w-[500px] rounded-full bg-cyan-500/5 blur-[120px]" />
      </div>

      <div
        ref={containerRef}
        className={`relative z-10 mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8 transition-all duration-1000 ease-out ${
          isIntersecting ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        {/* Header Section */}
        <div className="mb-14 sm:mb-20 flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="mb-5 inline-flex uppercase tracking-[0.2em] text-[11px] sm:text-xs font-bold text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 px-4 py-1.5 rounded-full">
              Cybersecurity Community
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-5xl font-bold leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/60 mb-5">
              Leading the Cybersecurity Conversation
            </h2>
            <p className="text-base sm:text-lg font-medium leading-relaxed text-neutral-400">
              Join us at premier industry events where we share insights on autonomous threat mitigation, AI-driven defense, and proactive security measures.
            </p>
          </div>
          

        {/* Top Buttons Segment */}
        <div className="flex flex-wrap gap-6 mb-12 relative z-20 md:pl-16">
          <button className="relative overflow-hidden group bg-white/5 text-white px-6 py-2 rounded-full font-medium text-sm border border-white/10 transition-all hover:bg-white/10 hover:border-white/20">
            <span className="relative z-10 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]"></span>
              On Going
            </span>
          </button>
          <button className="bg-transparent text-neutral-400 px-6 py-2 rounded-full font-medium text-sm transition-all hover:text-white hover:bg-white/5">
            Event Archive
          </button>
        </div>

        {/* Timeline Contents */}
        <div className="relative w-full">
          {/* The Vertical Line */}
          <div className="absolute left-[15px] md:left-[23px] top-6 bottom-0 w-[1px] bg-white/10 z-0"></div>
          
          <div className="flex flex-col gap-10">
            {/* Event 1 */}
            <div className="relative z-10 pl-10 md:pl-16 group">
              {/* Node Circle */}
              <div className="absolute left-[8px] md:left-[16px] top-[24px] w-[15px] h-[15px] rounded-full border-[1.5px] border-cyan-500/50 bg-[#03040C] z-20 flex items-center justify-center transition-all duration-300 group-hover:border-cyan-400 group-hover:shadow-[0_0_12px_rgba(34,211,238,0.4)]">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
              </div>
              
              <div className="relative w-full rounded-2xl border border-white/5 bg-[#0A0B14] p-6 md:p-8 hover:bg-[#0c0d18] transition-colors duration-300">
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-3 text-sm">
                    <div className="flex items-center text-cyan-400 font-bold uppercase tracking-wide gap-1.5">
                      <TbCalendarEvent size={16} className="opacity-80" />
                      15th March 2026
                    </div>
                    <span className="text-neutral-600">•</span>
                    <p className="text-neutral-400 font-medium bg-white/5 px-2.5 py-0.5 rounded-full border border-white/5 text-xs">
                      10:00 AM - 11:00 AM
                    </p>
                  </div>
                  
                  <h4 className="text-white font-semibold text-xl md:text-2xl mb-3">Financial Security Webinar</h4>
                  <p className="text-neutral-400 text-sm md:text-base mb-6 max-w-2xl leading-relaxed">
                    To explore AI-driven, context-aware defense for banks and digital financial platforms. Join our experts to understand the future of automated threat remediation.
                  </p>
                  
                  <button className="inline-flex items-center space-x-2 bg-white text-black hover:bg-neutral-200 text-sm font-semibold px-5 py-2 rounded-full transition duration-200">
                    <span>Register now</span>
                    <TbExternalLink size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Event 2 */}
            <div className="relative z-10 pl-10 md:pl-16 group">
              {/* Node Circle */}
              <div className="absolute left-[8px] md:left-[16px] top-[24px] w-[15px] h-[15px] rounded-full border-[1.5px] border-white/20 bg-[#03040C] z-20 flex items-center justify-center transition-all duration-300 group-hover:border-white/40">
                <div className="w-1.5 h-1.5 rounded-full bg-neutral-600 group-hover:bg-neutral-400 transition-colors"></div>
              </div>
              
              <div className="relative w-full rounded-2xl border border-white/5 bg-[#0A0B14] p-6 md:p-8 hover:bg-[#0c0d18] transition-colors duration-300">
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-3 text-sm flex-wrap">
                    <div className="flex items-center text-neutral-300 font-bold uppercase tracking-wide gap-1.5">
                      <TbVideo size={16} className="opacity-80" />
                      August 2025
                    </div>
                  </div>
                  
                  <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 w-full">
                    {/* Text Content */}
                    <div className="flex-1 flex flex-col justify-center">
                      <h4 className="text-white font-semibold text-xl md:text-2xl mb-4">
                        CADE Showcase <br /> <span className="text-neutral-400 text-lg md:text-xl font-medium">RMG Sector</span>
                      </h4>
                      <p className="text-neutral-400 text-sm md:text-base mb-4 leading-relaxed">
                        We hosted a dedicated CADE showcasing event for IT and Security leaders from leading RMG and textile enterprises.
                      </p>
                      <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
                        In collaboration with Golnnovior, the session brought together industry decision-makers to explore how agentic, context-aware security can address the unique operational and compliance challenges of large-scale manufacturing environments.
                      </p>
                    </div>
                    
                    {/* Image */}
                    <div className="w-full lg:w-[45%] xl:w-[40%]">
                      <div className="relative w-full h-[200px] md:h-[240px] rounded-xl overflow-hidden border border-white/5">
                        <Image 
                          src="/assets/blogs/blog-2.jpg" 
                          alt="CADE Showcase – RMG Sector" 
                          fill 
                          className="object-cover"
                          quality={90}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

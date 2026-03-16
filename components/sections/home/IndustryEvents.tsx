"use client";

import React from 'react';
import Image from 'next/image';
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { TbCalendarEvent, TbVideo, TbChevronDown, TbExternalLink } from "react-icons/tb";

export default function IndustryEvents() {
  const { ref: containerRef, isIntersecting } = useIntersectionObserver({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="relative w-full bg-[#03040C] py-20 md:py-28 lg:py-36 overflow-hidden border-t border-white/5">
      {/* Background Ambience */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="absolute top-[20%] right-0 h-[400px] w-[600px] rounded-full bg-blue-500/5 blur-[120px]" />
        <div className="absolute bottom-0 left-[10%] h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-[150px]" />
      </div>

      <div
        ref={containerRef}
        className={`relative z-10 mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8 transition-all duration-1000 ease-out ${
          isIntersecting ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
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

          {/* Timeline Layout */}
        <div className="w-full relative px-2 sm:px-4 md:px-8">
          
          {/* Top Buttons Segment */}
          <div className="flex flex-wrap gap-4 mb-20 md:pl-20 relative z-20">
            <button className="relative overflow-hidden group bg-white/10 text-white px-8 md:px-12 py-[11px] rounded-full font-semibold text-[15px] border border-white/20 transition-all hover:bg-white/15 hover:border-white/30 shadow-[0_0_20px_rgba(255,255,255,0.05)]">
              <span className="relative z-10 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                On Going
              </span>
            </button>
            <button className="bg-transparent text-neutral-400 px-8 md:px-12 py-[11px] rounded-full font-semibold text-[15px] border border-transparent transition-all hover:text-white hover:bg-white/5">
              Event Archive
            </button>
          </div>

          {/* Timeline Contents */}
          <div className="relative w-full">
            {/* The Vertical Line */}
            <div className="absolute left-[27px] top-8 bottom-[10%] w-[2px] bg-linear-to-b from-cyan-400/30 via-white/10 to-transparent z-0 hidden md:block rounded-full"></div>
            <div className="absolute left-[27px] top-8 bottom-[10%] w-[2px] bg-linear-to-b from-cyan-400/30 via-white/10 to-transparent z-0 md:hidden rounded-full"></div>
            
            {/* Event 1 */}
            <div className="relative z-10 pl-20 md:pl-[120px] mb-24 group">
              {/* Node Circle */}
              <div className="absolute left-[13px] top-[4px] w-[30px] h-[30px] rounded-full border border-cyan-400/40 bg-[#03040C] shadow-[0_0_15px_rgba(34,211,238,0.2)] z-20 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:border-cyan-400 group-hover:shadow-[0_0_25px_rgba(34,211,238,0.4)]">
                <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"></div>
              </div>
              
              <div className="relative w-full rounded-3xl border border-white/5 bg-[#0A0B14]/80 p-8 md:p-10 shadow-2xl overflow-hidden backdrop-blur-xl ring-1 ring-white/10 transition-all duration-300 hover:border-white/10 hover:-translate-y-1">
                {/* Glow */}
                <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-500/5 blur-[80px] pointer-events-none rounded-full" />
                
                <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-cyan-400/10 text-cyan-400">
                        <TbCalendarEvent size={18} />
                      </div>
                      <h3 className="text-cyan-400 font-bold text-lg tracking-wide uppercase">15th March 2026</h3>
                      <span className="text-neutral-500 text-sm hidden sm:inline-block px-2">•</span>
                      <p className="text-neutral-400 text-sm font-medium bg-white/5 px-3 py-1 rounded-full border border-white/5">10:00 AM - 11:00 AM</p>
                    </div>
                    
                    <h4 className="text-white font-bold text-2xl md:text-3xl mb-4 leading-tight">Financial Security Webinar</h4>
                    <p className="text-neutral-400 text-base md:text-lg mb-8 max-w-2xl leading-relaxed">
                      To explore AI-driven, context-aware defense for banks and digital financial platforms. Join our experts to understand the future of automated threat remediation.
                    </p>
                    
                    <button className="inline-flex items-center space-x-2 bg-white text-[#03040C] hover:bg-neutral-200 text-sm font-bold px-6 py-3 rounded-full transition duration-300 transform hover:scale-105 active:scale-95">
                      <span>Register now</span>
                      <TbExternalLink size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Event 2 */}
            <div className="relative z-10 pl-20 md:pl-[120px] mb-16 group">
              {/* Node Circle */}
              <div className="absolute left-[13px] top-[4px] w-[30px] h-[30px] rounded-full border border-white/20 bg-[#03040C] z-20 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:border-white/40">
                <div className="w-2.5 h-2.5 rounded-full bg-white/40"></div>
              </div>
              
              <div className="relative w-full rounded-3xl border border-white/5 bg-[#0A0B14]/80 p-8 md:p-10 shadow-2xl overflow-hidden backdrop-blur-xl ring-1 ring-white/10 transition-all duration-300 hover:border-white/10 hover:-translate-y-1">
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/5 text-neutral-400">
                      <TbVideo size={18} />
                    </div>
                    <h3 className="text-neutral-300 font-bold text-lg tracking-wide uppercase">August 2025</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 w-full">
                    {/* Text Content */}
                    <div className="flex flex-col justify-center">
                      <h4 className="text-white font-bold text-2xl md:text-3xl mb-6 leading-tight">CADE Showcase <br /> <span className="text-neutral-400 text-xl md:text-2xl">RMG Sector</span></h4>
                      <p className="text-neutral-400 text-base mb-6 leading-relaxed">
                        We hosted a dedicated CADE showcasing event for IT and Security leaders from leading RMG and textile enterprises.
                      </p>
                      <p className="text-neutral-400 text-base leading-relaxed">
                        In collaboration with Golnnovior, the session brought together industry decision-makers to explore how agentic, context-aware security can address the unique operational and compliance challenges of large-scale manufacturing environments.
                      </p>
                    </div>
                    
                    {/* Image Grid */}
                    <div className="w-full relative group/img">
                      <div className="absolute inset-0 bg-cyan-500/20 blur-2xl rounded-3xl opacity-0 group-hover/img:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative w-full h-[250px] sm:h-[350px] lg:h-[300px] xl:h-[350px] rounded-2xl overflow-hidden border border-white/10">
                        <Image 
                          src="/assets/blogs/blog-2.jpg" 
                          alt="CADE Showcase – RMG Sector" 
                          fill 
                          className="object-cover transition-transform duration-700 group-hover/img:scale-105"
                          quality={90}
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-[#0A0B14] via-transparent to-transparent opacity-80 mix-blend-multiply pointer-events-none"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Scroll/Load Icon */}
            <div className="flex justify-center mt-20 mb-4 w-full pl-0 md:pl-[60px]">
              <div className="group flex flex-col items-center justify-center gap-2 cursor-pointer transition-all hover:-translate-y-1">
                <div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center group-hover:border-cyan-400/50 group-hover:bg-cyan-400/10 transition-colors">
                  <TbChevronDown size={24} className="text-neutral-400 group-hover:text-cyan-400 group-hover:animate-bounce" />
                </div>
                <span className="text-neutral-500 text-xs font-semibold uppercase tracking-widest group-hover:text-cyan-400 transition-colors">
                  Load More
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

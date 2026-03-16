import React from 'react';
import Image from 'next/image';

export default function IndustryEvents() {
  return (
    <section className="py-20 md:py-28 bg-white font-sans w-full relative z-10 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col items-center mb-16 md:mb-20">
          <h2 className="text-[32px] sm:text-[40px] font-bold text-[#1f2937] md:mb-3 text-center">
            Industry Events & Engagements
          </h2>
          <p className="text-[#4b5563] text-[15px] sm:text-[16px] max-w-3xl mx-auto px-4 font-medium">
            Learn how different sectors are affected by cyber attacks and the importance of early security measures.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="w-full relative px-2 sm:px-4 md:px-8">
          
          {/* Top Buttons Segment */}
          <div className="flex flex-wrap gap-4 mb-20 md:pl-20 relative z-20">
            <button className="bg-[#7B83FA] text-white px-10 md:px-14 py-[11px] rounded-[6px] font-semibold text-[15px] shadow-sm transition-opacity hover:opacity-90">
              On Going
            </button>
            <button className="bg-[#E2E8F0] text-[#64748b] px-10 md:px-14 py-[11px] rounded-[6px] font-semibold text-[15px] transition-colors hover:bg-[#cbd5e1]">
              Event Archive
            </button>
          </div>

          {/* Timeline Contents */}
          <div className="relative w-full">
            {/* The Vertical Line */}
            <div className="absolute left-[11px] top-6 bottom-[10%] w-[2px] bg-[#E2E8F0] z-0 hidden md:block"></div>
            <div className="absolute left-[11px] top-6 bottom-[10%] w-[2px] bg-[#E2E8F0] z-0 md:hidden"></div>
            
            {/* Event 1 */}
            <div className="relative z-10 pl-16 md:pl-[100px] mb-[72px]">
              {/* Node Circle */}
              <div className="absolute left-[3px] top-[2px] w-[24px] h-[24px] rounded-full border-[3px] border-[#1C4FD6] bg-white z-20"></div>
              
              <div className="pt-[2px]">
                <h3 className="text-[#1f2937] font-bold text-[18px] mb-[2px]">15th March 2026</h3>
                <p className="text-[13px] text-[#64748b] font-semibold mb-5">10:00 AM - 11:00 AM</p>
                <h4 className="text-[#1f2937] font-bold text-[17px] mb-2.5">Financial Security Webinar</h4>
                <p className="text-[#64748b] text-[15px] mb-6 max-w-xl font-medium leading-relaxed">
                  To explore AI-driven, context-aware defense for banks and digital financial platforms
                </p>
                
                <button className="flex items-center space-x-2 bg-[#F1F5F9] hover:bg-[#E2E8F0] text-[#334155] text-[14px] font-semibold px-5 py-[10px] rounded-[6px] transition duration-200">
                  <span>Register now</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-80">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </button>
              </div>
            </div>

            {/* Event 2 */}
            <div className="relative z-10 pl-16 md:pl-[100px] mb-12">
              {/* Node Circle */}
              <div className="absolute left-[6px] top-[6px] w-[18px] h-[18px] rounded-full border-2 border-[#CBD5E1] bg-white z-20"></div>
              
              <div className="pt-0.5 w-full">
                <h3 className="text-[#1f2937] font-bold text-[18px] mb-6">August 2025</h3>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 w-full">
                  {/* Text Content */}
                  <div className="flex flex-col justify-start pt-1 max-w-2xl">
                    <h4 className="text-[#1f2937] font-bold text-[17px] mb-4">CADE Showcase – RMG Sector</h4>
                    <p className="text-[#64748b] text-[15px] mb-5 font-medium leading-[1.7]">
                      We hosted a dedicated CADE showcasing event for IT and Security leaders from leading RMG and textile enterprises.
                    </p>
                    <p className="text-[#64748b] text-[15px] font-medium leading-[1.7] pr-2">
                      In collaboration with Golnnovior, the session brought together industry decision-makers to explore how agentic, context-aware security can address the unique operational and compliance challenges of large-scale manufacturing environments.
                    </p>
                  </div>
                  
                  {/* Image Grid */}
                  <div className="w-full">
                    <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[350px] xl:h-[400px] rounded-[16px] overflow-hidden shadow-sm">
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

            {/* Bottom Scroll/Load Icon */}
            <div className="flex justify-center mt-16 mb-4 w-full">
              <div className="w-[30px] h-[44px] rounded-[15px] border-[1.5px] border-[#a5b4fc] flex flex-col items-center justify-start pt-[3px] cursor-pointer bg-white transition-transform hover:scale-105">
                <span className="text-[#7B83FA] font-bold text-[11px] leading-tight select-none">0</span>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#7B83FA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="-mt-[2px] opacity-90">
                  <polyline points="7 13 12 18 17 13"></polyline>
                  <polyline points="7 6 12 11 17 6"></polyline>
                </svg>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

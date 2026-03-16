"use client";

import { useState } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { LuTrendingUp, LuShield } from "react-icons/lu";
import { TbChartCandle, TbChartBar } from "react-icons/tb";

const TABS_DATA = [
  {
    id: "financial-services",
    label: "Financial Services",
    cards: [
      {
        icon: TbChartBar,
        overline: "BANKING & FINTECH",
        title: "Financial Gateway Security",
        description:
          "Protect financial transactions, APIs, and customer data with advanced threat detection and compliance-ready security.",
        tags: ["Payment Fraud", "Account Takeover", "API Abuse"],
      },
      {
        icon: LuShield,
        overline: "INSURANCE",
        title: "Insurance Platform Protection",
        description:
          "Secure digital insurance platforms from quote manipulation and fraudulent claims while ensuring compliance.",
        tags: ["Form Tampering", "Data Theft", "Rate Scraping"],
      },
      {
        icon: TbChartCandle,
        overline: "INVESTMENT PLATFORMS",
        title: "Trading Security",
        description:
          "Protect trading platforms from automated bots and ensure fair access to market data.",
        tags: ["Market Manipulation", "Data Scraping", "Bot Trading"],
      },
    ],
  },
  {
    id: "ecommerce-retail",
    label: "E-commerce & Retail",
    cards: [
      {
        icon: LuTrendingUp,
        overline: "RETAIL & DIGITAL",
        title: "E-Commerce Protection",
        description:
          "Prevent inventory hoarding, checkout abuse, and credential stuffing during high-traffic flash sales.",
        tags: ["Scalping", "Checkout Abuse", "Inventory Hoarding"],
      },
      {
        icon: LuShield,
        overline: "MARKETPLACES",
        title: "Marketplace Integrity",
        description:
          "Ensure trust and safety by blocking fake reviews, account takeovers, and seller fraud.",
        tags: ["Review Fraud", "Seller Fraud", "Account Abuse"],
      },
      {
        icon: TbChartBar,
        overline: "LOYALTY PROGRAMS",
        title: "Reward Security",
        description:
          "Stop automated exploitation of loyalty points, gift cards, and promotional discounts.",
        tags: ["Points Fraud", "Promo Abuse", "Gift Card Theft"],
      },
    ],
  },
  {
    id: "healthcare",
    label: "Healthcare",
    cards: [
      {
        icon: LuShield,
        overline: "PATIENT PORTALS",
        title: "Patient Data Security",
        description:
          "Secure patient health information (PHI) and portals against unauthorized access and data exfiltration.",
        tags: ["Data Exfiltration", "PHI Theft", "Unauthorized Access"],
      },
      {
        icon: TbChartCandle,
        overline: "CLINICAL TRIALS",
        title: "Research Integrity",
        description:
          "Protect proprietary medical research and clinical trial data from espionage and tampering.",
        tags: ["Data Tampering", "Espionage", "Research Theft"],
      },
      {
        icon: TbChartBar,
        overline: "TELEHEALTH",
        title: "Telehealth Platforms",
        description:
          "Ensure secure and compliant operations of remote health services and virtual consultations.",
        tags: ["Session Hijacking", "Compliance", "API Abuse"],
      },
    ],
  },
  {
    id: "saas-technology",
    label: "SaaS & Technology",
    cards: [
      {
        icon: LuTrendingUp,
        overline: "CLOUD SERVICES",
        title: "Cloud Infrastructure",
        description:
          "Defend cloud management planes, APIs, and critical infrastructure from sophisticated threats.",
        tags: ["API Exploitation", "Resource Hijacking", "DDoS"],
      },
      {
        icon: LuShield,
        overline: "B2B APPLICATIONS",
        title: "Enterprise App Security",
        description:
          "Secure enterprise applications against logic abuse, unauthorized access, and supply chain attacks.",
        tags: ["Logic Abuse", "Supply Chain", "Access Controls"],
      },
      {
        icon: TbChartCandle,
        overline: "DEV SEC OPS",
        title: "Development Pipelines",
        description:
          "Integrate security deeply into CI/CD pipelines to prevent secrets leakage and code tampering.",
        tags: ["Secrets Leakage", "Code Tampering", "Pipeline Attacks"],
      },
    ],
  },
];

export default function Services() {
  const { ref: containerRef, isIntersecting } = useIntersectionObserver({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeTab, setActiveTab] = useState(TABS_DATA[0].id);

  const activeData = TABS_DATA.find((tab) => tab.id === activeTab) || TABS_DATA[0];

  return (
    <section id="security-lifecycle" className="w-full bg-[#03040C] py-20 md:py-28 lg:py-36 relative overflow-hidden">
      {/* Background Glows */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[400px] w-[600px] bg-cyan-500/5 blur-[120px] rounded-full" />
      </div>

      <div
        ref={containerRef}
        className={`relative z-10 w-full transition-all duration-1000 ease-out ${
          isIntersecting ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
          <div className="mx-auto flex w-full max-w-7xl flex-col items-center px-4 sm:px-6 lg:px-8">
          <div className="mb-14 sm:mb-16 flex flex-col items-center text-center max-w-3xl mx-auto">
            <div className="mb-5 inline-flex uppercase tracking-[0.2em] text-[11px] sm:text-xs font-bold text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 px-4 py-1.5 rounded-full">
                Tailored Security Solutions
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/60 mb-5">
                Security Engineered for Every Industry
              </h2>
              <p className="text-sm sm:text-base font-medium leading-relaxed text-neutral-400">
                Whether in finance, healthcare, or retail, our AI-driven security modules adapt to your specific operational risks and compliance mandates seamlessly.
              </p>
            </div>

            {/* Outer Container for Tabs & Cards */}
          <div className="flex w-full flex-col gap-6 rounded-3xl border border-white/5 bg-[#0A0B14] p-5 md:flex-row lg:gap-8 lg:p-6">
            
            {/* Tabs Sidebar */}
            <div className="flex w-full flex-col gap-2 md:w-[260px] md:min-w-[260px]">
              {TABS_DATA.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex w-full items-center rounded-xl px-5 py-3.5 text-left text-sm md:text-base font-semibold transition-all duration-300 border ${
                    activeTab === tab.id
                      ? "bg-cyan-500/10 border-cyan-500/20 text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.05)]"
                      : "bg-transparent border-transparent text-neutral-400 hover:bg-white/5 hover:text-neutral-200"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Cards Area */}
            <div className="grid flex-1 grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {activeData.cards.map((card, idx) => (
                <div
                  key={`${activeData.id}-${idx}`}
                  className="group flex h-full flex-col items-start rounded-2xl border border-white/5 bg-[#03040C]/50 p-6 md:p-8 transition-all duration-300 hover:bg-white/[0.02] hover:border-white/10"
                >
                  <div className="mb-6 flex items-center justify-center w-12 h-12 rounded-xl border border-white/5 bg-white/5 text-cyan-400 transition-transform duration-300 group-hover:scale-110 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/20">
                    <card.icon size={24} strokeWidth={1.5} />
                  </div>
                  
                  <h4 className="mb-3 text-[10px] sm:text-[11px] font-bold tracking-widest text-neutral-500 uppercase">
                    {card.overline}
                  </h4>
                  
                  <h3 className="mb-4 text-lg sm:text-xl font-semibold leading-tight text-white group-hover:text-cyan-50 transition-colors">
                    {card.title}
                  </h3>
                  
                  <p className="mb-8 flex-1 text-sm sm:text-[15px] leading-relaxed text-neutral-400 group-hover:text-neutral-300 transition-colors">
                    {card.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {card.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="rounded-full border border-white/5 bg-white/5 px-3 py-1 text-[11px] sm:text-[12px] font-medium text-neutral-400 transition-colors group-hover:border-white/10 group-hover:text-neutral-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

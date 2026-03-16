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
    <section id="security-lifecycle" className="w-full bg-background py-20 md:py-28 lg:py-36 relative overflow-hidden">
      {/* Background Glows to match the screenshot vibe */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[500px] w-[800px] bg-brand-primary opacity-20 blur-[120px] rounded-full" />
      </div>

      <div
        ref={containerRef}
        className={`relative z-10 w-full transition-all duration-700 ease-out motion-reduce:transition-none ${
          isIntersecting ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
          <div className="mx-auto flex w-full max-w-7xl flex-col items-center px-4 sm:px-6 lg:px-8">
          <div className="mb-14 sm:mb-20 flex flex-col items-center text-center max-w-4xl mx-auto">
            <div className="mb-5 inline-flex uppercase tracking-[0.2em] text-[11px] sm:text-xs font-bold text-brand-primary bg-brand-primary/10 border border-brand-primary/20 px-4 py-1.5 rounded-full">
              Industries
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-5xl font-bold leading-tight tracking-tight text-white mb-5">
              Secure Every Sector
            </h2>
            <p className="text-base sm:text-lg font-medium leading-relaxed text-neutral-400">
              Axiler deploys purpose-built AI agents that operate across every layer of modern
              application security. From visibility and validation to autonomous remediation,
              security becomes continuous, contextual, and self-improving.
            </p>
          </div>

          {/* Outer Container for Tabs & Cards */}
          <div className="flex w-full flex-col gap-6 rounded-4xl border border-white/10 bg-[#161726]/80 p-6 md:flex-row backdrop-blur-sm lg:gap-8 lg:p-8">
            
            {/* Tabs Sidebar */}
            <div className="flex w-full flex-col gap-3 md:w-[280px] md:min-w-[280px]">
              {TABS_DATA.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex w-full items-center rounded-2xl px-6 py-5 text-left text-lg font-medium transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary ${
                    activeTab === tab.id
                      ? "bg-brand-primary text-white"
                      : "bg-[#1C1F33] text-neutral-300 hover:bg-[#232740] hover:text-white"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Cards Area */}
            <div className="grid flex-1 grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {activeData.cards.map((card, idx) => (
                <div
                  key={`${activeData.id}-${idx}`}
                  className="flex h-full flex-col items-start rounded-2xl border border-white/10 bg-transparent p-8 transition-all duration-300 hover:bg-white/2"
                >
                  <div className="mb-8 flex text-[32px] text-white/90">
                    <card.icon strokeWidth={1.5} />
                  </div>
                  
                  <h4 className="mb-3 text-[11px] font-bold tracking-widest text-[#A3A3A3]">
                    {card.overline}
                  </h4>
                  
                  <h3 className="mb-4 text-xl font-semibold leading-tight text-white">
                    {card.title}
                  </h3>
                  
                  <p className="mb-8 flex-1 text-[15px] leading-relaxed text-[#A3A3A3]">
                    {card.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {card.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="rounded-full border border-white/8 px-3 py-1.5 text-[12px] font-medium text-white/70"
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

"use client";

import { useState } from "react";
import { TbChevronDown, TbChevronUp } from "react-icons/tb";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

import {
  TbSettingsCheck,
  TbDeviceDesktopCode,
  TbRadar,
  TbPuzzle,
  TbSitemap,
  TbFileSearch,
  TbBrain,
  TbCube,
  TbFence,
  TbShieldCheck,
  TbHeartRateMonitor,
  TbZoomCheck,
  TbArrowsRightLeft,
  TbCloudStar,
  TbListDetails,
  TbSettingsAutomation,
  TbArrowsExchange,
  TbScan,
  TbBan,
  TbSparkles,
} from "react-icons/tb";

const THEMES = {
  cyan: { iconColor: "text-cyan-400", glow: "shadow-[0_0_20px_rgba(34,211,238,0.2)]" },
  blue: { iconColor: "text-blue-400", glow: "shadow-[0_0_20px_rgba(59,130,246,0.2)]" },
  indigo: { iconColor: "text-indigo-400", glow: "shadow-[0_0_20px_rgba(99,102,241,0.2)]" },
  purple: { iconColor: "text-purple-400", glow: "shadow-[0_0_20px_rgba(168,85,247,0.2)]" },
  fuchsia: { iconColor: "text-fuchsia-400", glow: "shadow-[0_0_20px_rgba(217,70,239,0.2)]" },
  emerald: { iconColor: "text-emerald-400", glow: "shadow-[0_0_20px_rgba(16,185,129,0.2)]" },
};

const LIFECYCLE_TABS = [
  {
    id: "secure-sdlc",
    title: "Secure SDLC",
    description:
      "Embedded AI agents operate across development pipelines, validating code, dependencies, and configurations in context.",
    steps: [
      { title: "Detect in CI", icon: TbSettingsCheck, theme: "cyan" },
      { title: "Confirm Exploitability", icon: TbDeviceDesktopCode, theme: "blue" },
      { title: "Prevent Merge", icon: TbBan, theme: "indigo" },
      { title: "Auto Remediate", icon: TbSparkles, theme: "purple" },
    ],
  },
  {
    id: "governance-compliance",
    title: "Governance & Compliance",
    description:
      "AI agents generate audit-ready evidence, map findings to regulatory frameworks, and produce executive-ready reporting automatically. Compliance becomes continuous, not reactive.",
    steps: [
      { title: "Evaluate Risk", icon: TbRadar, theme: "fuchsia" },
      { title: "Continuously Align", icon: TbPuzzle, theme: "purple" },
      { title: "Auto-Generate Evidence", icon: TbSitemap, theme: "blue" },
      { title: "Stay Audit-Ready", icon: TbFileSearch, theme: "emerald" },
    ],
  },
  {
    id: "secure-architecture",
    title: "Secure Architecture & Design",
    description:
      "Identify architectural risks in real time. Agentic intelligence evaluates design decisions and self-heals before they become vulnerabilities.",
    steps: [
      { title: "Interpret Architecture", icon: TbBrain, theme: "purple" },
      { title: "Simulate Threats", icon: TbCube, theme: "fuchsia" },
      { title: "Apply AI Guardrails", icon: TbFence, theme: "blue" },
      { title: "Validate Secure Design", icon: TbShieldCheck, theme: "emerald" },
    ],
  },
  {
    id: "threat-vulnerability",
    title: "Threat & Vulnerability Detection",
    description:
      "Detect real exploitability without requiring manual input by correlating runtime behavior with contextualized application risk.",
    steps: [
      { title: "Monitor Runtime Signals", icon: TbHeartRateMonitor, theme: "cyan" },
      { title: "Contextualize Risk", icon: TbZoomCheck, theme: "blue" },
      { title: "Validate Real Exploitability", icon: TbArrowsRightLeft, theme: "indigo" },
      { title: "Initiate Autonomous Action", icon: TbCloudStar, theme: "purple" },
    ],
  },
  {
    id: "autonomous-remediation",
    title: "Autonomous Remediation",
    description:
      "Prioritizes what truly matters. Apply fixes intelligently and prevent recurrence through closed-loop learning.",
    steps: [
      { title: "Prioritize Risks", icon: TbListDetails, theme: "purple" },
      { title: "Autonomously Apply Fixes", icon: TbSettingsAutomation, theme: "blue" },
      { title: "Reinforce System", icon: TbArrowsExchange, theme: "indigo" },
      { title: "Prevent Recurrence", icon: TbScan, theme: "emerald" },
    ],
  },
];

export default function Lifecycle() {
  const { ref: containerRef, isIntersecting } = useIntersectionObserver({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeTabId, setActiveTabId] = useState(LIFECYCLE_TABS[0].id);
  const [expandedStep, setExpandedStep] = useState<number | null>(null);
  const activeTab = LIFECYCLE_TABS.find((tab) => tab.id === activeTabId)!;

  return (
    <section
      id="security-lifecycle-main"
      className="relative w-full bg-[#03040C] py-20 md:py-28 lg:py-36 overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="absolute top-0 h-[500px] w-[800px] -translate-y-1/2 rounded-full bg-cyan-500/5 blur-[120px]" />
        <div className="absolute bottom-0 h-[600px] w-[600px] translate-y-1/3 rounded-full bg-purple-500/5 blur-[150px]" />
      </div>

      <div
        ref={containerRef}
        className={`relative z-10 mx-auto w-full max-w-7xl px-4 pt-10 sm:px-6 lg:px-8 transition-all duration-1000 ease-out ${
          isIntersecting ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
        }`}
      >
        {/* Header section */}
        <div className="mb-14 sm:mb-20 flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="mb-5 inline-flex uppercase tracking-[0.2em] text-[11px] sm:text-xs font-bold text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 px-4 py-1.5 rounded-full">
              Comprehensive AI Security Lifecycle
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-5xl font-bold leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/60 mb-5">
              End-to-End Autonomous Application Security
            </h2>
            <p className="text-base sm:text-lg font-medium leading-relaxed text-neutral-400">
              From code creation to runtime defense, our purpose-built AI agents operate across every phase to minimize your attack surface continuously.
            </p>
          </div>

        {/* Main Content Interface */}
        <div className="flex flex-col gap-8 lg:gap-10 mt-6 lg:mt-10 max-w-[1200px] mx-auto w-full">
          
          {/* Top: Horizontal Domain List Navigation */}
          <div className="w-full overflow-x-auto pb-4 -mb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <div className="flex items-center justify-start lg:justify-center gap-2 sm:gap-3 min-w-max px-2">
              {LIFECYCLE_TABS.map((tab, idx) => {
                const isActive = activeTabId === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setActiveTabId(tab.id);
                      setExpandedStep(null);
                    }}
                    className={`group relative flex items-center justify-center rounded-full px-5 py-3 md:px-6 md:py-3.5 text-sm md:text-[15px] font-medium transition-all duration-300 border shrink-0 ${
                      isActive
                        ? "border-cyan-400/50 bg-cyan-400/10 text-white shadow-[0_0_20px_rgba(34,211,238,0.15)]"
                        : "border-white/10 bg-[#0A0B14] text-neutral-400 hover:bg-white/5 hover:border-white/20 hover:text-neutral-200"
                    }`}
                  >
                    {isActive && (
                      <div className="absolute -bottom-px left-1/2 w-1/2 h-[2px] -translate-x-1/2 bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)] rounded-t-full" />
                    )}
                    <div className="flex items-center gap-3">
                      <span className={`text-[11px] md:text-xs font-bold font-mono tracking-widest ${isActive ? "text-cyan-400" : "text-neutral-500 group-hover:text-neutral-400"}`}>
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <span>{tab.title}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Domain View Container */}
          <div className="w-full relative rounded-3xl border border-white/5 bg-[#0A0B14]/80 px-6 py-10 sm:p-12 shadow-2xl overflow-hidden backdrop-blur-xl ring-1 ring-white/10">
            {/* Inner Glows */}
            <div className="absolute inset-0 bg-linear-to-b from-white/2 to-transparent pointer-events-none" />
            <div className="absolute top-0 right-0 w-full h-[500px] bg-linear-to-b from-blue-500/5 to-transparent blur-[100px] pointer-events-none" />

            {/* Use keyed wrapper to trigger fade-in animation consistently on tab switch */}
            <div className="relative z-10 animate-in fade-in zoom-in-95 duration-500 fill-mode-both" key={activeTab.id}>
              {/* Domain Description Header */}
              <div className="mb-14 overflow-hidden">
                 <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
                   {activeTab.title}
                 </h3>
                 <p className="text-base sm:text-lg text-neutral-400 max-w-3xl leading-relaxed">
                   {activeTab.description}
                 </p>
              </div>

              {/* The Timeline / Roadmap Horizontal Pipeline */}
              <div className="relative w-full mt-6 lg:mt-12 pt-4 pb-2">
                
                {/* Continuous Horizontal Connecting Line (Desktop) */}
                <div className="absolute top-[44px] -translate-y-1/2 left-[10%] right-[10%] h-[2px] bg-white/10 hidden lg:block rounded-full overflow-hidden">
                  <div className="h-full w-[40%] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent animate-pulse" style={{ animationDuration: "3s" }} />
                </div>
                
                {/* Vertical Connecting Line (Mobile) */}
                <div className="absolute top-8 bottom-8 left-[27px] w-[2px] bg-white/10 block lg:hidden rounded-full overflow-hidden">
                  <div className="w-full h-[40%] bg-gradient-to-b from-transparent via-cyan-400/50 to-transparent animate-pulse" style={{ animationDuration: "3s" }} />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 sm:gap-12 lg:gap-4 w-full relative">
                  {activeTab.steps.map((step, idx) => {
                    const theme = THEMES[step.theme as keyof typeof THEMES];
                    const isExpanded = expandedStep === idx;
                    
                    return (
                      <div key={idx} className="relative flex flex-row lg:flex-col items-start lg:items-center text-left lg:text-center group w-full">
                         
                         {/* Node on the Timeline */}
                         <div className="relative z-10 flex shrink-0 items-center justify-center w-[56px] h-[56px] rounded-full border border-white/10 bg-[#0A0B14] shadow-[0_0_15px_rgba(0,0,0,0.6)] group-hover:border-white/30 transition-all duration-500 mx-0 lg:mx-auto">
                            <div className={`absolute inset-0 rounded-full transition-all duration-500 opacity-0 group-hover:opacity-100 ${theme.glow}`} />
                            <step.icon size={24} strokeWidth={1.5} className={`${theme.iconColor} transition-transform duration-500 group-hover:scale-110 drop-shadow-[0_0_10px_currentColor]`} />
                         </div>

                         {/* Timeline Content */}
                         <div className="flex-1 mt-0 lg:mt-6 ml-6 lg:ml-0 flex flex-col items-start lg:items-center border-none bg-transparent pt-1 lg:pt-0 w-full">
                            <button
                              onClick={() => setExpandedStep(isExpanded ? null : idx)}
                              className="flex flex-col items-start lg:items-center w-full text-left lg:text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded-md"
                              aria-expanded={isExpanded}
                            >
                              <div className="mb-2 lg:mb-3 flex items-center justify-center">
                                <span className={`text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] px-2.5 py-1 rounded-full border border-white/10 bg-white/5 text-neutral-400 transition-all duration-300 ${theme.iconColor.replace('text-', 'group-hover:text-')} group-hover:border-current/30 group-hover:bg-white/10 shadow-sm`}>
                                  Phase 0{idx + 1}
                                </span>
                              </div>

                              <div className="flex items-start sm:items-center justify-between w-full lg:w-auto lg:justify-center gap-3 lg:gap-0">
                                <h4 className="text-lg lg:text-[19px] xl:text-[21px] font-semibold text-white mb-0 lg:mb-2 leading-snug tracking-wide transition-colors">
                                  {step.title}
                                </h4>
                                <span className="lg:hidden text-neutral-500 group-hover:text-white transition-colors shrink-0 mt-0.5 sm:mt-0">
                                  {isExpanded ? <TbChevronUp size={20} /> : <TbChevronDown size={20} />}
                                </span>
                              </div>
                            </button>
                            
                            <div className={`grid transition-[grid-template-rows] duration-300 ease-in-out w-full
                              ${isExpanded ? 'grid-rows-[1fr] opacity-100 mt-2 lg:mt-0' : 'grid-rows-[0fr] opacity-0 lg:grid-rows-[1fr] lg:opacity-100'}
                            `}>
                              <div className="overflow-hidden">
                                <p className="text-sm lg:text-[14px] text-neutral-400 leading-relaxed font-light lg:max-w-[220px] lg:mx-auto opacity-90 lg:opacity-80 group-hover:opacity-100 transition-opacity text-balance">
                                  Agent-led execution seamlessly inline within phase context.
                                </p>
                              </div>
                            </div>
                         </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

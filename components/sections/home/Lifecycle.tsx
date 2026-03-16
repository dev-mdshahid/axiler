"use client";

import { useState } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { LuChevronRight } from "react-icons/lu";
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
        <div className="flex flex-col xl:flex-row gap-8 lg:gap-12 mt-10">
          
          {/* Left: Domain List Navigation */}
          <div className="w-full xl:w-[380px] shrink-0 flex flex-col gap-2">
            <div className="mb-2 pl-4">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
                Lifecycle Domains
              </span>
            </div>
            
            {LIFECYCLE_TABS.map((tab, idx) => {
              const isActive = activeTabId === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTabId(tab.id)}
                  className={`group relative flex w-full flex-col justify-center rounded-2xl p-5 text-left transition-all duration-300 border ${
                    isActive
                      ? "border-white/10 bg-white/6 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.5)] backdrop-blur-md"
                      : "border-transparent hover:bg-white/2 hover:border-white/5"
                  }`}
                >
                  {/* Left Active Glow Line */}
                  {isActive && (
                    <div className="absolute left-0 top-1/2 h-10 w-1 -translate-y-1/2 rounded-r-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.5)]" />
                  )}

                  <div className="flex flex-col gap-4 w-full">
                    <div className="flex w-full items-center justify-between">
                      <div className="flex items-center gap-4">
                         <div className={`flex items-center justify-center w-8 h-8 rounded-full border text-xs font-bold transition-all duration-300 ${
                            isActive 
                              ? "border-cyan-400/30 bg-cyan-400/10 text-cyan-400" 
                              : "border-white/10 bg-white/5 text-neutral-500 group-hover:border-white/20 group-hover:text-neutral-300"
                         }`}>
                           {String(idx + 1).padStart(2, "0")}
                         </div>
                         <h3 className={`text-[17px] font-semibold tracking-wide transition-colors ${
                            isActive ? "text-white" : "text-neutral-400 group-hover:text-neutral-200"
                         }`}>
                           {tab.title}
                         </h3>
                      </div>
                      <LuChevronRight 
                        size={20}
                        className={`transition-all duration-300 ${
                          isActive 
                            ? "text-cyan-400 translate-x-0 opacity-100" 
                            : "text-neutral-600 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
                        }`} 
                      />
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Active Domain View */}
          <div className="flex-1 relative rounded-3xl border border-white/5 bg-[#0A0B14]/80 px-6 py-10 sm:p-12 shadow-2xl overflow-hidden backdrop-blur-xl ring-1 ring-white/10">
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

              {/* The Timeline / Steps */}
              <div className="relative flex flex-col lg:flex-row items-stretch gap-12 lg:gap-4 w-full">
                
                {/* Connecting Line (Desktop) */}
                <div className="absolute top-7 left-[30px] right-[30px] h-[2px] bg-white/5 hidden lg:block overflow-hidden rounded-full">
                   <div className="h-full w-1/3 bg-linear-to-r from-transparent via-cyan-400/50 to-transparent animate-pulse" />
                </div>
                {/* Connecting Line (Mobile) */}
                <div className="absolute top-[30px] bottom-[30px] left-7 w-[2px] bg-white/5 block lg:hidden overflow-hidden rounded-full">
                   <div className="w-full h-1/3 bg-linear-to-b from-transparent via-cyan-400/50 to-transparent animate-pulse" />
                </div>

                {activeTab.steps.map((step, idx) => {
                  const theme = THEMES[step.theme as keyof typeof THEMES];
                  
                  return (
                    <div key={idx} className="relative w-full lg:flex-1 flex flex-row lg:flex-col items-start gap-6 lg:gap-0 group">
                       
                       {/* Node / Icon */}
                       <div className="relative z-10 flex shrink-0 items-center justify-center w-14 h-14 rounded-full border border-white/10 bg-[#0A0B14] shadow-lg mb-0 lg:mb-8 group-hover:border-white/30 transition-all duration-300 mx-0 lg:mx-auto">
                          <div className={`absolute inset-0 rounded-full transition-opacity duration-300 opacity-0 group-hover:opacity-100 ${theme.glow}`} />
                          <step.icon size={26} strokeWidth={1.5} className={`${theme.iconColor} transition-transform duration-300 group-hover:scale-110 drop-shadow-[0_0_8px_currentColor]`} />
                       </div>

                       {/* Card Content */}
                       <div className="flex-1 flex flex-col w-full rounded-2xl border border-white/5 bg-white/2 p-6 lg:p-7 transition-all duration-300 hover:bg-white/4 hover:border-white/10 hover:-translate-y-1">
                          <div className="mb-3 flex items-center justify-between">
                             <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-500">Stage {idx + 1}</span>
                          </div>
                          <h4 className="text-lg font-semibold text-white mb-3 leading-snug">
                            {step.title}
                          </h4>
                          <div className="h-px w-8 bg-white/10 mb-4 transition-all duration-300 group-hover:w-full group-hover:bg-white/20" />
                          <p className="text-sm text-neutral-400 leading-relaxed font-light">
                            Agent-led validation and execution in this phase.
                          </p>
                       </div>

                    </div>
                  );
                })}
              </div>
              
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

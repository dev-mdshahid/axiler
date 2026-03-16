"use client";

import { useState } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { LuBan, LuSparkles, LuArrowRight } from "react-icons/lu";
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
} from "react-icons/tb";

const THEMES = {
  pink: {
    gradient: "from-[#FF8A9B]/10 to-transparent",
    border: "border-[#FF8A9B]/30",
    iconColor: "text-[#FF8A9B]",
  },
  orange: {
    gradient: "from-[#FFBB8A]/10 to-transparent",
    border: "border-[#FFBB8A]/30",
    iconColor: "text-[#FFBB8A]",
  },
  slate: {
    gradient: "from-[#A6B2D1]/10 to-transparent",
    border: "border-[#A6B2D1]/30",
    iconColor: "text-[#A6B2D1]",
  },
  indigo: {
    gradient: "from-[#8B9DF1]/10 to-transparent",
    border: "border-[#8B9DF1]/30",
    iconColor: "text-[#8B9DF1]",
  },
  purple: {
    gradient: "from-[#C58CFF]/10 to-transparent",
    border: "border-[#C58CFF]/30",
    iconColor: "text-[#C58CFF]",
  },
  blue: {
    gradient: "from-[#7EC4FF]/10 to-transparent",
    border: "border-[#7EC4FF]/30",
    iconColor: "text-[#7EC4FF]",
  },
  green: {
    gradient: "from-[#A0E6AD]/10 to-transparent",
    border: "border-[#A0E6AD]/30",
    iconColor: "text-[#A0E6AD]",
  },
};

const LIFECYCLE_TABS = [
  {
    id: "secure-sdlc",
    title: "Secure SDLC",
    description:
      "Embedded AI agents operate across development pipelines, validating code, dependencies, and configurations in context.",
    steps: [
      { title: "Detect in\nCI", icon: TbSettingsCheck, theme: "pink" },
      {
        title: "Confirm\nExploitability",
        icon: TbDeviceDesktopCode,
        theme: "orange",
      },
      { title: "Prevent Merge", icon: LuBan, theme: "slate" },
      { title: "Auto\nRemediate", icon: LuSparkles, theme: "indigo" },
    ],
  },
  {
    id: "governance-compliance",
    title: "Governance & Compliance",
    description:
      "AI agents generate audit-ready evidence, map findings to regulatory frameworks, and produce executive-ready reporting automatically. Compliance becomes continuous, not reactive.",
    steps: [
      { title: "Evaluate\nRisk", icon: TbRadar, theme: "pink" },
      { title: "Continuously\nAlign", icon: TbPuzzle, theme: "purple" },
      { title: "Auto-Generate\nEvidence", icon: TbSitemap, theme: "blue" },
      { title: "Stay Audit-\nReady", icon: TbFileSearch, theme: "green" },
    ],
  },
  {
    id: "secure-architecture",
    title: "Secure Architecture & Design",
    description:
      "Identify architectural risks in real time. Agentic intelligence evaluates design decisions and self-heals before they become vulnerabilities.",
    steps: [
      { title: "Interpret\nArchitecture", icon: TbBrain, theme: "purple" },
      { title: "Simulate\nThreats", icon: TbCube, theme: "pink" },
      { title: "Apply AI\nGuardrails", icon: TbFence, theme: "orange" },
      { title: "Validate Secure\nDesign", icon: TbShieldCheck, theme: "green" },
    ],
  },
  {
    id: "threat-vulnerability",
    title: "Threat & Vulnerability Detection",
    description:
      "Detect real exploitability without requiring manual input by correlating runtime behavior with contextualized application risk.",
    steps: [
      {
        title: "Monitor Runtime\nSignals",
        icon: TbHeartRateMonitor,
        theme: "pink",
      },
      { title: "Contextualize\nRisk", icon: TbZoomCheck, theme: "orange" },
      {
        title: "Validate Real\nExploitability",
        icon: TbArrowsRightLeft,
        theme: "blue",
      },
      {
        title: "Initiate\nAutonomous Action",
        icon: TbCloudStar,
        theme: "indigo",
      },
    ],
  },
  {
    id: "autonomous-remediation",
    title: "Autonomous Remediation",
    description:
      "Priorities what truly matters. Apply fixes intelligently and prevent recurrence through closed-loop learning.",
    steps: [
      { title: "Priorities\nRisks", icon: TbListDetails, theme: "purple" },
      {
        title: "Autonomously\nApply Fixes",
        icon: TbSettingsAutomation,
        theme: "blue",
      },
      { title: "Reinforce\nSystem", icon: TbArrowsExchange, theme: "indigo" },
      { title: "Prevent\nRecurrence", icon: TbScan, theme: "green" },
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
      className="w-full bg-background py-16 md:py-24 lg:py-32 relative overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[500px] w-[800px] bg-brand-primary opacity-20 blur-[120px] rounded-full" />
      </div>

      <div
        ref={containerRef}
        className={`relative z-10 w-full transition-all duration-700 ease-out motion-reduce:transition-none ${
          isIntersecting
            ? "translate-y-0 opacity-100"
            : "translate-y-8 opacity-0"
        }`}
      >
        <div className="mx-auto flex w-full max-w-[1400px] flex-col items-center px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col items-center text-center sm:mb-16 md:mb-20">
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              Agentic Intelligence Across <br className="hidden sm:block" />
              The Application Security Lifecycle
            </h2>
            <p className="mt-6 max-w-4xl text-base leading-relaxed text-neutral-400 sm:text-lg">
              Axiler deploys purpose-built AI agents that operate across every
              layer of modern application security. From visibility and
              validation to autonomous remediation, security becomes continuous,
              contextual, and self-improving.
            </p>
          </div>

          <div className="w-full rounded-[24px] md:rounded-[32px] border border-white/10 bg-[#222233] p-4 shadow-[0_30px_60px_rgba(0,0,0,0.5)] sm:p-6 lg:p-10 relative overflow-hidden">
            {/* A large radiant blur blob placed behind the right diagram side to simulate the background glow */}
            <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 h-[400px] w-[600px] bg-linear-to-r from-purple-500/10 via-pink-400/10 to-indigo-500/10 blur-[80px] pointer-events-none rounded-full" />

            <div className="relative z-10 flex flex-col gap-8 xl:flex-row xl:items-center xl:justify-between">
              {/* Left sidebar space (Tabs) */}
              <div className="flex w-full flex-col gap-3 xl:w-[480px] xl:min-w-[480px]">
                {LIFECYCLE_TABS.map((tab) => {
                  const isActive = activeTabId === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTabId(tab.id)}
                      className={`relative flex w-full flex-col rounded-[20px] px-6 py-4 text-left transition-all duration-300 ${
                        isActive
                          ? "bg-linear-to-r from-[#9862F0]/30 to-[#4E3182]/10 ring-[1.5px] ring-[#AF7EFF] shadow-[inset_0_0_24px_rgba(175,126,255,0.2),0_0_15px_rgba(175,126,255,0.2)]"
                          : "bg-[#333346]/80 hover:bg-[#3D3D52]/90 border border-transparent"
                      }`}
                    >
                      <h3
                        className={`text-[17px] font-semibold tracking-wide ${isActive ? "text-white" : "text-white/60"}`}
                      >
                        {tab.title}
                      </h3>
                      {isActive && tab.description && (
                        <p className="mt-2.5 text-[14px] sm:text-[15px] leading-relaxed text-[#D1D1E0]">
                          {tab.description}
                        </p>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Right content (Diagram side) */}
              <div
                key={activeTab.id}
                className="flex flex-1 items-center justify-center xl:justify-end py-8 xl:py-0 w-full overflow-x-auto scrollbar-hide animate-in fade-in duration-500"
              >
                <div className="flex min-w-max items-center justify-center gap-1 sm:gap-2 lg:gap-3 px-2 xl:px-4">
                  {activeTab.steps.map((step, idx) => {
                    const theme = THEMES[step.theme as keyof typeof THEMES];
                    return (
                      <div
                        key={idx}
                        className="flex items-center shrink-0 group relative z-10"
                      >
                        <div
                          className={`relative flex h-[150px] w-[115px] flex-col items-center justify-center gap-4 rounded-[20px] border ${theme.border} bg-[#2F2F42] bg-linear-to-b ${theme.gradient} p-4 transition-all duration-500 hover:-translate-y-1 sm:h-[180px] sm:w-[140px] lg:h-[210px] lg:w-[155px] shadow-[0_10px_30px_rgba(0,0,0,0.1)]`}
                        >
                          <div
                            className={`flex items-center justify-center ${theme.iconColor}`}
                          >
                            <step.icon
                              size={34}
                              strokeWidth={1.5}
                              className="drop-shadow-[0_0_8px_currentColor]"
                            />
                          </div>
                          <p className="text-center text-[12px] sm:text-[14px] font-semibold leading-[1.3] text-white whitespace-pre-line px-1">
                            {step.title}
                          </p>
                        </div>

                        {idx < activeTab.steps.length - 1 && (
                          <div className="mx-[6px] text-white/40 sm:mx-2 lg:mx-3 shrink-0 flex items-center justify-center">
                            <LuArrowRight size={16} />
                          </div>
                        )}
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

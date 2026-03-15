"use client";

import { useEffect, useState } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { GoBug } from "react-icons/go";
import { IoWarningOutline } from "react-icons/io5";
import { FiCheckCircle } from "react-icons/fi";
import { HiArrowUpTray } from "react-icons/hi2";

interface FlowStepConfig {
  icon: React.ReactNode;
  label: string;
  color: string;
  glowColor: string;
}

const TOOL_A_STEPS: FlowStepConfig[] = [
  {
    icon: <HiMagnifyingGlass className="size-5" aria-hidden="true" />,
    label: "Scans",
    color: "#C0A9FF",
    glowColor: "rgba(192,169,255,0.4)",
  },
  {
    icon: <GoBug className="size-5" aria-hidden="true" />,
    label: "Detects",
    color: "#22c55e",
    glowColor: "rgba(34,197,94,0.4)",
  },
  {
    icon: <IoWarningOutline className="size-5" aria-hidden="true" />,
    label: "Alerts",
    color: "#fbbf24",
    glowColor: "rgba(251,191,36,0.4)",
  },
  {
    icon: <HiArrowUpTray className="size-5" aria-hidden="true" />,
    label: "Escalates",
    color: "#f472b6",
    glowColor: "rgba(244,114,182,0.4)",
  },
];

const TOOL_B_STEP: FlowStepConfig = {
  icon: <FiCheckCircle className="size-5" aria-hidden="true" />,
  label: "Patches",
  color: "#22c55e",
  glowColor: "rgba(34,197,94,0.4)",
};

function FlowNode({
  step,
  index,
  animate,
}: {
  step: FlowStepConfig;
  index: number;
  animate: boolean;
}) {
  return (
    <div
      className="flex flex-col items-center gap-2"
      style={{
        opacity: animate ? 1 : 0,
        transform: animate ? "scale(1)" : "scale(0)",
        transition: `all 0.5s cubic-bezier(0.34,1.56,0.64,1) ${300 + index * 150}ms`,
      }}
    >
      <div
        className="flex size-11 items-center justify-center rounded-xl border sm:size-12"
        style={{
          borderColor: `${step.color}30`,
          background: `${step.color}0A`,
          color: step.color,
          boxShadow: animate
            ? `0 0 10px ${step.glowColor}, 0 0 20px ${step.glowColor}30`
            : "none",
          transition: `box-shadow 0.6s ease ${600 + index * 150}ms`,
        }}
      >
        {step.icon}
      </div>
      <span
        className="text-[11px] font-medium sm:text-xs"
        style={{ color: step.color }}
      >
        {step.label}
      </span>
    </div>
  );
}

function FlowConnector({
  animate,
  index,
}: {
  animate: boolean;
  index: number;
}) {
  return (
    <div className="flex items-center px-0.5 pb-5 sm:px-1">
      <svg
        width="36"
        height="12"
        viewBox="0 0 36 12"
        fill="none"
        className="w-6 sm:w-9"
        aria-hidden="true"
      >
        <line
          x1="0"
          y1="6"
          x2="28"
          y2="6"
          stroke="#404040"
          strokeWidth="3"
          strokeDasharray="4 3"
          opacity="0.3"
          style={{
            strokeDashoffset: animate ? 0 : 28,
            transition: `stroke-dashoffset 0.6s ease ${400 + index * 150}ms`,
            filter: "blur(2px)",
          }}
        />
        <line
          x1="0"
          y1="6"
          x2="28"
          y2="6"
          stroke="#525252"
          strokeWidth="1.5"
          strokeDasharray="4 3"
          style={{
            strokeDashoffset: animate ? 0 : 28,
            transition: `stroke-dashoffset 0.6s ease ${400 + index * 150}ms`,
          }}
        />
        <path
          d="M26 2L32 6L26 10"
          stroke="#525252"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          style={{
            opacity: animate ? 1 : 0,
            transition: `opacity 0.3s ease ${700 + index * 150}ms`,
          }}
        />
      </svg>
    </div>
  );
}

function BreakIndicator({ animate }: { animate: boolean }) {
  return (
    <div className="my-5 flex flex-col items-center gap-2 sm:my-6">
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        className="size-10 sm:size-12"
        aria-hidden="true"
      >
        <line
          x1="24"
          y1="0"
          x2="24"
          y2="15"
          stroke="#404040"
          strokeWidth="1.5"
          strokeDasharray="3 3"
          style={{
            strokeDashoffset: animate ? 0 : 20,
            transition: "stroke-dashoffset 0.5s ease 1s",
          }}
        />
        <circle
          cx="24"
          cy="24"
          r="10"
          fill="none"
          stroke="rgba(239,68,68,0.3)"
          strokeWidth="6"
          style={{
            opacity: animate ? 1 : 0,
            transition: "opacity 0.5s ease 1.2s",
            filter: "blur(4px)",
          }}
        />
        <circle
          cx="24"
          cy="24"
          r="9"
          fill="rgba(239,68,68,0.08)"
          stroke="#ef4444"
          strokeWidth="1.5"
          style={{
            opacity: animate ? 1 : 0,
            transform: animate ? "scale(1)" : "scale(0)",
            transformOrigin: "center",
            transition: "all 0.5s cubic-bezier(0.34,1.56,0.64,1) 1.1s",
          }}
        />
        <path
          d="M19 19L29 29M29 19L19 29"
          stroke="#ef4444"
          strokeWidth="1.5"
          strokeLinecap="round"
          style={{
            opacity: animate ? 1 : 0,
            transition: "opacity 0.3s ease 1.4s",
          }}
        />
        <line
          x1="24"
          y1="35"
          x2="24"
          y2="48"
          stroke="#404040"
          strokeWidth="1.5"
          strokeDasharray="3 3"
          style={{
            strokeDashoffset: animate ? 0 : 20,
            transition: "stroke-dashoffset 0.5s ease 1.5s",
          }}
        />
      </svg>
      <span
        className="text-[10px] font-semibold tracking-[0.15em] text-red-400/70 uppercase sm:text-xs"
        style={{
          opacity: animate ? 1 : 0,
          transition: "opacity 0.4s ease 1.6s",
        }}
      >
        Manual Handoff
      </span>
    </div>
  );
}

function ToolBox({
  label,
  toolNumber,
  children,
  animate,
  delay = 0,
}: {
  label: string;
  toolNumber: number;
  children: React.ReactNode;
  animate: boolean;
  delay?: number;
}) {
  return (
    <div
      className="w-full"
      style={{
        opacity: animate ? 1 : 0,
        transform: animate ? "translateY(0)" : "translateY(12px)",
        transition: `all 0.6s ease ${delay}ms`,
      }}
    >
      <div className="mb-2.5 flex items-center gap-2">
        <span className="flex size-5 items-center justify-center rounded-md bg-neutral-800 text-[10px] font-bold text-neutral-500">
          {toolNumber}
        </span>
        <span className="text-[10px] font-semibold tracking-[0.15em] text-neutral-400 uppercase sm:text-xs">
          {label}
        </span>
      </div>
      <div className="rounded-xl border border-dashed border-neutral-700/80 bg-neutral-900/20 px-3 py-5 sm:px-6 sm:py-6">
        {children}
      </div>
    </div>
  );
}

export function FragmentedToolCard({ animate = false }: { animate?: boolean }) {
  const [mounted, setMounted] = useState(false);
  const show = animate && mounted;

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-wid-card-border bg-wid-card-bg shadow-wid-card">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 70%, rgba(239,68,68,0.05) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />
      {/* Bottom-left glow — matches flow step colors */}
      <div
        className="pointer-events-none absolute -bottom-16 -left-16 size-48 rounded-full opacity-40 sm:size-56"
        style={{
          background:
            "radial-gradient(circle, rgba(192,169,255,0.25) 0%, rgba(244,114,182,0.18) 30%, rgba(239,68,68,0.12) 50%, rgba(34,197,94,0.08) 70%, transparent 100%)",
          filter: "blur(40px)",
        }}
        aria-hidden="true"
      />
      {/* Fill lower-right empty space */}
      <div
        className="pointer-events-none absolute -bottom-12 -right-12 h-40 w-3/4 opacity-50 sm:h-48 sm:w-2/3 md:h-56"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 70% 90%, rgba(192,169,255,0.12) 0%, rgba(244,114,182,0.06) 40%, rgba(34,197,94,0.04) 70%, transparent 100%)",
          filter: "blur(32px)",
        }}
        aria-hidden="true"
      />
      {/* Fill top-right area */}
      <div
        className="pointer-events-none absolute -right-8 top-8 h-32 w-1/2 opacity-60 sm:h-40 sm:w-2/5"
        style={{
          background:
            "radial-gradient(ellipse 70% 80% at 90% 20%, rgba(251,191,36,0.08) 0%, rgba(34,197,94,0.05) 50%, transparent 100%)",
          filter: "blur(28px)",
        }}
        aria-hidden="true"
      />
      {/* Subtle dot pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(255,255,255) 1px, transparent 0)`,
          backgroundSize: "24px 24px",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 flex flex-1 flex-col px-5 pt-8 pb-8 sm:px-8 sm:pt-10 sm:pb-10">
        {/* Badge */}
        <div
          className="mx-auto mb-5 flex items-center gap-1.5 rounded-full border border-red-500/20 bg-red-500/8 px-3 py-1"
          style={{
            opacity: show ? 1 : 0,
            transform: show ? "translateY(0)" : "translateY(-8px)",
            transition: "all 0.5s ease 100ms",
          }}
        >
          <span className="size-1.5 rounded-full bg-red-400" />
          <span className="text-xs font-medium text-red-400">
            Typical Solution
          </span>
        </div>

        {/* Title */}
        <h3
          className="mb-8 text-center text-lg font-bold text-foreground sm:mb-10 sm:text-xl"
          style={{
            opacity: show ? 1 : 0,
            transform: show ? "translateY(0)" : "translateY(8px)",
            transition: "all 0.5s ease 200ms",
          }}
        >
          Modern Security Is
          <br />
          <span className="text-neutral-400">Fragmented Across Tools</span>
        </h3>

        {/* Tool A */}
        <ToolBox
          label="Scanning Tool"
          toolNumber={1}
          animate={show}
          delay={250}
        >
          <div className="flex items-center justify-center gap-0">
            {TOOL_A_STEPS.map((step, i) => (
              <div key={step.label} className="flex items-center">
                <FlowNode step={step} index={i} animate={show} />
                {i < TOOL_A_STEPS.length - 1 && (
                  <FlowConnector animate={show} index={i} />
                )}
              </div>
            ))}
          </div>
        </ToolBox>

        <BreakIndicator animate={show} />

        {/* Tool B */}
        <ToolBox
          label="Patching Tool"
          toolNumber={2}
          animate={show}
          delay={1400}
        >
          <div className="flex justify-center">
            <FlowNode step={TOOL_B_STEP} index={5} animate={show} />
          </div>
        </ToolBox>

        {/* Spacer to push bottom text down consistently */}
        <div className="flex-1" />

        {/* Bottom text */}
        <p
          className="mt-8 text-center text-xs leading-relaxed text-neutral-500 sm:mt-10 sm:text-sm"
          style={{
            opacity: show ? 1 : 0,
            transform: show ? "translateY(0)" : "translateY(8px)",
            transition: "all 0.5s ease 1.8s",
          }}
        >
          Teams stitch signals manually,
          <br />
          while{" "}
          <span className="font-semibold text-red-400">
            attackers automate at scale.
          </span>
        </p>
      </div>
    </div>
  );
}

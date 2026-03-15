"use client";

import { useEffect, useState } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { GoBug } from "react-icons/go";
import { IoWarningOutline } from "react-icons/io5";
import { FiCheckCircle } from "react-icons/fi";
import { HiArrowUpTray } from "react-icons/hi2";

/* ── Flow step config ──────────────────────────────────────────── */
interface FlowStepConfig {
  icon: React.ReactNode;
  label: string;
  color: string;
  glowColor: string;
}

const TOOL_A_STEPS: FlowStepConfig[] = [
  {
    icon: <HiMagnifyingGlass className="size-4 sm:size-5" aria-hidden="true" />,
    label: "Scans",
    color: "#C0A9FF",
    glowColor: "rgba(192,169,255,0.4)",
  },
  {
    icon: <GoBug className="size-4 sm:size-5" aria-hidden="true" />,
    label: "Detects",
    color: "#22c55e",
    glowColor: "rgba(34,197,94,0.4)",
  },
  {
    icon: <IoWarningOutline className="size-4 sm:size-5" aria-hidden="true" />,
    label: "Alerts",
    color: "#fbbf24",
    glowColor: "rgba(251,191,36,0.4)",
  },
  {
    icon: <HiArrowUpTray className="size-4 sm:size-5" aria-hidden="true" />,
    label: "Escalates",
    color: "#f472b6",
    glowColor: "rgba(244,114,182,0.4)",
  },
];

const TOOL_B_STEP: FlowStepConfig = {
  icon: <FiCheckCircle className="size-4 sm:size-5" aria-hidden="true" />,
  label: "Patches",
  color: "#22c55e",
  glowColor: "rgba(34,197,94,0.4)",
};

/* ── Animated Flow Node ─────────────────────────────────────────── */
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
      className="flex flex-col items-center gap-1.5 sm:gap-2"
      style={{
        opacity: animate ? 1 : 0,
        transform: animate ? "scale(1)" : "scale(0)",
        transition: `all 0.5s cubic-bezier(0.34,1.56,0.64,1) ${300 + index * 150}ms`,
      }}
    >
      <div
        className="flex size-10 items-center justify-center rounded-xl border sm:size-12"
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
      <span className="text-xs font-medium" style={{ color: step.color }}>
        {step.label}
      </span>
    </div>
  );
}

/* ── Connector Arrow with animated dash ─────────────────────────── */
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
        className="w-7 sm:w-9"
        aria-hidden="true"
      >
        {/* Glow line */}
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
        {/* Main line */}
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

/* ── Break indicator (gap between tools) ───────────────────────── */
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
        {/* Dashed vertical line top */}
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
        {/* Red glow circle */}
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
        {/* Red circle ring */}
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
        {/* Cross inside circle */}
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
        {/* Dashed vertical line bottom */}
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
        className="text-xs font-semibold tracking-widest text-red-400/70 uppercase"
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

/* ── Tool Box with label ────────────────────────────────────────── */
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
        <span className="flex size-5 items-center justify-center rounded-md bg-neutral-800 text-xs font-bold text-neutral-500">
          {toolNumber}
        </span>
        <span className="text-xs font-semibold tracking-widest text-neutral-400 uppercase">
          {label}
        </span>
      </div>
      <div className="rounded-xl border border-dashed border-neutral-700/80 bg-neutral-900/20 px-4 py-5 sm:px-6 sm:py-6">
        {children}
      </div>
    </div>
  );
}

/* ── Main Card ──────────────────────────────────────────────────── */
export function FragmentedToolCard({ animate = false }: { animate?: boolean }) {
  const [mounted, setMounted] = useState(false);
  const show = animate && mounted;

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-wid-card-border bg-wid-card-bg shadow-wid-card">
      {/* Subtle background radial glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 70%, rgba(239,68,68,0.05) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      {/* ── Card Content ──────────────────────────────── */}
      <div className="relative z-10 flex flex-1 flex-col px-5 pt-7 pb-7 sm:px-8 sm:pt-9 sm:pb-9">
        {/* Badge */}
        <div
          className="mx-auto mb-4 flex items-center gap-1.5 rounded-full border border-red-500/20 bg-red-500/8 px-3 py-1"
          style={{
            opacity: show ? 1 : 0,
            transform: show ? "translateY(0)" : "translateY(-8px)",
            transition: "all 0.5s ease 100ms",
          }}
        >
          <span className="size-1.5 rounded-full bg-red-400" />
          <span className="text-xs font-medium text-red-400">The Problem</span>
        </div>

        {/* Title */}
        <h3
          className="mb-8 text-center text-base font-bold text-foreground sm:mb-10 sm:text-lg"
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

        {/* Tool A → pipeline flow */}
        <ToolBox label="Scanning Tool" toolNumber={1} animate={show} delay={250}>
          <div className="flex items-center justify-center gap-0.5 sm:gap-1">
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

        {/* Break */}
        <BreakIndicator animate={show} />

        {/* Tool B → single step */}
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
          <br className="hidden sm:block" />
          while{" "}
          <span className="font-medium text-red-400">
            attackers automate at scale.
          </span>
        </p>
      </div>
    </div>
  );
}

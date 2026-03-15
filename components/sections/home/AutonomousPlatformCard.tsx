"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { GoBug } from "react-icons/go";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { IoWarningOutline } from "react-icons/io5";
import { FiCheckCircle } from "react-icons/fi";

/* ── Branch config ──────────────────────────────────────────────── */
interface BranchConfig {
  icon: React.ReactNode;
  label: string;
  color: string;
  glowColor: string;
}

const BRANCHES: BranchConfig[] = [
  {
    icon: <GoBug className="size-4" aria-hidden="true" />,
    label: "Detects",
    color: "#22c55e",
    glowColor: "rgba(34,197,94,0.4)",
  },
  {
    icon: <HiMagnifyingGlass className="size-4" aria-hidden="true" />,
    label: "Prioritizes",
    color: "#fbbf24",
    glowColor: "rgba(251,191,36,0.4)",
  },
  {
    icon: <IoWarningOutline className="size-4" aria-hidden="true" />,
    label: "Responds",
    color: "#f472b6",
    glowColor: "rgba(244,114,182,0.4)",
  },
  {
    icon: <FiCheckCircle className="size-4" aria-hidden="true" />,
    label: "Remediates",
    color: "#C0A9FF",
    glowColor: "rgba(192,169,255,0.4)",
  },
];

/* ── Hub Center ─────────────────────────────────────────────────── */
function HubCenter({ animate }: { animate: boolean }) {
  return (
    <div
      className="relative flex shrink-0 items-center justify-center"
      style={{
        opacity: animate ? 1 : 0,
        transform: animate ? "scale(1)" : "scale(0.7)",
        transition: "all 0.7s cubic-bezier(0.34,1.56,0.64,1) 300ms",
      }}
    >
      {/* Outer rotating glow ring */}
      <div
        className="absolute size-24 rounded-full sm:size-28"
        style={{
          background:
            "conic-gradient(from 0deg, rgba(192,169,255,0.25), rgba(34,197,94,0.25), rgba(251,191,36,0.25), rgba(244,114,182,0.25), rgba(192,169,255,0.25))",
          animation: animate
            ? "wid-hub-ring-spin 8s linear infinite"
            : "none",
          filter: "blur(12px)",
          opacity: animate ? 1 : 0,
          transition: "opacity 0.8s ease 500ms",
        }}
        aria-hidden="true"
      />

      {/* Inner circle */}
      <div className="relative flex size-18 flex-col items-center justify-center rounded-full border border-neutral-700/80 bg-neutral-900/90 sm:size-22">
        <Image
          src="/assets/what-it-does/cade-logo.svg"
          alt="CADE logo"
          width={35}
          height={23}
          className="h-auto w-7 sm:w-9"
        />
        <span className="mt-1 text-center text-xs font-bold leading-none tracking-wide text-neutral-300">
          CADE
        </span>
      </div>
    </div>
  );
}

/*
 * ── Y-position config ────────────────────────────────────────────
 * Both the SVG endpoints and the absolutely-positioned labels share
 * these SAME percentage values so they always align perfectly.
 * Values represent the % from top of the diagram container where
 * each branch icon center sits.
 */
const BRANCH_Y_PERCENTS = [5, 35, 65, 95]; // top → bottom

/* ── Connector SVG (curved bezier from hub to branch row) ──────── */
function ConnectorSVG({
  animate,
  branches,
}: {
  animate: boolean;
  branches: BranchConfig[];
}) {
  /*
   * SVG viewBox: 0 0 120 100  (percentage-based coordinates)
   * Hub origin: x=0, y=50 (vertical center)
   * Endpoints: x=120, y = BRANCH_Y_PERCENTS[i]
   */
  const startX = 0;
  const startY = 50;
  const endX = 120;

  return (
    <svg
      viewBox="0 0 120 100"
      fill="none"
      className="absolute inset-0 h-full w-[55%]"
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      {branches.map((branch, i) => {
        const ey = BRANCH_Y_PERCENTS[i];
        const cp1x = 50;
        const cp1y = startY;
        const cp2x = 70;
        const cp2y = ey;
        const pathD = `M${startX},${startY} C${cp1x},${cp1y} ${cp2x},${cp2y} ${endX},${ey}`;
        const delay = 500 + i * 150;

        return (
          <g key={branch.label}>
            {/* Glow path (wider, blurred) */}
            <path
              d={pathD}
              stroke={branch.color}
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              opacity="0.2"
              style={{
                strokeDasharray: 300,
                strokeDashoffset: animate ? 0 : 300,
                transition: `stroke-dashoffset 0.9s ease ${delay}ms`,
                filter: `blur(4px)`,
              }}
              vectorEffect="non-scaling-stroke"
            />
            {/* Main path */}
            <path
              d={pathD}
              stroke={branch.color}
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
              style={{
                strokeDasharray: 300,
                strokeDashoffset: animate ? 0 : 300,
                transition: `stroke-dashoffset 0.9s ease ${delay}ms`,
              }}
              vectorEffect="non-scaling-stroke"
            />
            {/* Traveling dot */}
            <circle r="2" fill={branch.color} opacity="0">
              <animateMotion
                dur="3s"
                repeatCount="indefinite"
                begin={`${delay / 1000 + 0.8}s`}
                path={pathD}
              />
              <animate
                attributeName="opacity"
                values="0;0.9;0.9;0"
                dur="3s"
                repeatCount="indefinite"
                begin={`${delay / 1000 + 0.8}s`}
              />
            </circle>
            {/* Arrow dot at endpoint */}
            <circle
              cx={endX}
              cy={ey}
              r="2.5"
              fill={branch.color}
              style={{
                opacity: animate ? 1 : 0,
                transition: `opacity 0.4s ease ${delay + 600}ms`,
                filter: `drop-shadow(0 0 4px ${branch.glowColor})`,
              }}
            />
          </g>
        );
      })}
    </svg>
  );
}

/* ── Branch Label (absolutely positioned) ─────────────────────── */
function BranchLabel({
  branch,
  index,
  animate,
}: {
  branch: BranchConfig;
  index: number;
  animate: boolean;
}) {
  const delay = 700 + index * 150;
  const topPercent = BRANCH_Y_PERCENTS[index];

  return (
    <div
      className="absolute right-0 flex items-center gap-2.5"
      style={{
        top: `${topPercent}%`,
        transform: animate
          ? "translateY(-50%)"
          : "translateY(-50%) translateX(-12px)",
        opacity: animate ? 1 : 0,
        transition: `all 0.5s cubic-bezier(0.34,1.56,0.64,1) ${delay}ms`,
      }}
    >
      <div
        className="flex size-9 items-center justify-center rounded-xl border sm:size-10"
        style={{
          borderColor: `${branch.color}30`,
          background: `${branch.color}0A`,
          color: branch.color,
          boxShadow: animate
            ? `0 0 10px ${branch.glowColor}, 0 0 20px ${branch.glowColor}30`
            : "none",
          transition: `box-shadow 0.6s ease ${delay + 200}ms`,
        }}
      >
        {branch.icon}
      </div>
      <span
        className="text-sm font-semibold whitespace-nowrap sm:text-base"
        style={{ color: branch.color }}
      >
        {branch.label}
      </span>
    </div>
  );
}

/* ── Main Card ──────────────────────────────────────────────────── */
export function AutonomousPlatformCard({
  animate = false,
}: {
  animate?: boolean;
}) {
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
            "radial-gradient(ellipse at 30% 50%, rgba(192,169,255,0.05) 0%, transparent 60%), radial-gradient(ellipse at 50% 85%, rgba(34,197,94,0.04) 0%, transparent 50%)",
        }}
        aria-hidden="true"
      />

      {/* ── Card Content ──────────────────────────────── */}
      <div className="relative z-10 flex flex-1 flex-col px-5 pt-7 pb-7 sm:px-8 sm:pt-9 sm:pb-9">
        {/* Badge */}
        <div
          className="mx-auto mb-4 flex items-center gap-1.5 rounded-full border border-wid-accent-green/20 bg-wid-accent-green/10 px-3 py-1"
          style={{
            opacity: show ? 1 : 0,
            transform: show ? "translateY(0)" : "translateY(-8px)",
            transition: "all 0.5s ease 100ms",
          }}
        >
          <span className="size-1.5 rounded-full bg-wid-accent-green" />
          <span className="text-xs font-medium text-wid-accent-green">
            The Solution
          </span>
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
          One Autonomous Platform,
          <br />
          <span className="text-neutral-400">Context-Driven Control</span>
        </h3>

        {/* ── Diagram: Hub → Connectors → Labels ──────── */}
        <div className="mx-auto flex items-center justify-center gap-0">
          {/* Hub */}
          <HubCenter animate={show} />

          {/* Connectors + Labels in one relative container so they share coordinates */}
          <div className="relative h-56 w-48 sm:h-64 sm:w-56 md:h-72 md:w-64">
            {/* SVG connector lines — fills left ~55% of container */}
            <ConnectorSVG animate={show} branches={BRANCHES} />

            {/* Branch labels — absolutely positioned at matching Y percentages */}
            {BRANCHES.map((branch, i) => (
              <BranchLabel
                key={branch.label}
                branch={branch}
                index={i}
                animate={show}
              />
            ))}
          </div>
        </div>

        {/* Bottom text */}
        <p
          className="mt-8 text-center text-xs leading-relaxed text-neutral-500 sm:mt-10 sm:text-sm"
          style={{
            opacity: show ? 1 : 0,
            transform: show ? "translateY(0)" : "translateY(8px)",
            transition: "all 0.5s ease 1.6s",
          }}
        >
          From{" "}
          <span className="font-medium text-wid-accent-pink">
            threat to fix
          </span>
          , unified in one{" "}
          <span className="font-medium text-wid-accent-purple">
            agentic platform
          </span>
          , in{" "}
          <span className="font-medium text-wid-accent-green">real time</span>.
        </p>
      </div>
    </div>
  );
}

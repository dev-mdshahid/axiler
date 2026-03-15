"use client";

import { useEffect, useRef, useState } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { GoBug } from "react-icons/go";
import { IoWarningOutline } from "react-icons/io5";
import { FiCheckCircle } from "react-icons/fi";
import { HiArrowUpTray } from "react-icons/hi2";

// Loop cycle: glow moves Scans → arrow → Detects → arrow → Alerts → arrow → Escalates, then reset (no pause)
const CYCLE_DURATION_MS = 3000;
const SEGMENT_FRAC = 1 / 4; // each of 4 steps gets 1/4 of cycle
const GRAY_STROKE = "#404040";
const PROGRESS_RESET_EPS = 0.002; // treat as 0 when reset so first step stays gray

// Phase 2: after journey reaches Escalates — exact flow with gaps (all cumulative from phase2 start)
// Order: connecting line → patching tool grayed → patches glow → manual handoff → bottom text
const PHASE2_GAP_MS = 550; // gap between each step
const PHASE2_CONNECTOR_AT_MS = 0;
const PHASE2_PATCHING_SECTION_AT_MS = PHASE2_GAP_MS; // 550ms — section visible, patches grayed
const PHASE2_PATCHES_LIT_AT_MS = PHASE2_GAP_MS * 2; // 1100ms — patches icon glows
const PHASE2_HANDOFF_AFTER_PATCHES_MS = 1000; // extra gap so handoff clearly comes after patches
const PHASE2_HANDOFF_AT_MS =
  PHASE2_PATCHES_LIT_AT_MS + PHASE2_HANDOFF_AFTER_PATCHES_MS; // manual handoff
const ESCALATES_SEGMENT_START = 3 * SEGMENT_FRAC; // 0.75

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

function getSegmentProgress(cycleProgress: number, segmentIndex: number) {
  if (cycleProgress < PROGRESS_RESET_EPS) return 0;
  const segStart = segmentIndex * SEGMENT_FRAC;
  const segEnd = (segmentIndex + 1) * SEGMENT_FRAC;
  if (cycleProgress <= segStart) return 0;
  if (cycleProgress >= segEnd) return 1;
  return (cycleProgress - segStart) / SEGMENT_FRAC;
}

function isStepLit(cycleProgress: number, stepIndex: number) {
  if (cycleProgress < PROGRESS_RESET_EPS) return false;
  // Step 0 (Scans) lights at start; steps 1,2,3 light at end of segments 0,1,2
  if (stepIndex === 0) return true;
  return cycleProgress >= stepIndex * SEGMENT_FRAC;
}

function FlowNode({
  step,
  index,
  animate,
  lit,
}: {
  step: FlowStepConfig;
  index: number;
  animate: boolean;
  lit: boolean;
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
        className="flex size-11 items-center justify-center rounded-xl border sm:size-12 transition-colors duration-300"
        style={{
          borderColor: lit ? `${step.color}35` : "rgba(113,113,122,0.4)",
          background: lit ? `${step.color}0D` : "rgba(63,63,70,0.3)",
          color: lit ? step.color : "#71717a",
          transition:
            "border-color 0.3s ease, background 0.3s ease, color 0.3s ease",
        }}
      >
        {step.icon}
      </div>
      <span
        className="text-[11px] font-medium sm:text-xs transition-colors duration-300"
        style={{
          color: lit ? step.color : "#71717a",
        }}
      >
        {step.label}
      </span>
    </div>
  );
}

const ARROW_PATH_D = "M0,6 L28,6";

function FlowConnector({
  animate,
  revealProgress,
  color,
}: {
  animate: boolean;
  index: number;
  revealProgress: number;
  color: string;
  glowColor: string;
  isPaused: boolean;
  nextStepLit: boolean;
}) {
  const lineReveal = revealProgress;

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
        {/* Gray base line — dashed, always visible when card is shown */}
        <path
          d={ARROW_PATH_D}
          pathLength="1"
          stroke={GRAY_STROKE}
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity={animate ? 0.5 : 0}
          style={{
            strokeDasharray: "0.04 0.96",
            transition: "opacity 0.3s ease",
          }}
        />
        {/* Colored line — arrow lightens up as progress moves */}
        <path
          d={ARROW_PATH_D}
          pathLength="1"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          style={{
            strokeDasharray: 1,
            strokeDashoffset: 1 - lineReveal,
            opacity: lineReveal > 0 ? 1 : 0,
            transition: "stroke-dashoffset 0.08s linear, opacity 0.15s ease",
          }}
        />
        {/* Arrowhead — colored when segment complete */}
        <path
          d="M26 2L32 6L26 10"
          stroke={revealProgress >= 1 ? color : "#525252"}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          style={{
            opacity: animate ? 1 : 0,
            transition: "opacity 0.3s ease, stroke 0.3s ease",
          }}
        />
      </svg>
    </div>
  );
}

function BreakIndicator({
  showConnectingLine,
  showHandoff,
}: {
  showConnectingLine: boolean;
  showHandoff: boolean;
}) {
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
        {/* Top dashed line — part of connector */}
        <line
          x1="24"
          y1="0"
          x2="24"
          y2="15"
          stroke="#404040"
          strokeWidth="1.5"
          strokeDasharray="3 3"
          style={{
            strokeDashoffset: showConnectingLine ? 0 : 20,
            opacity: showConnectingLine ? 1 : 0,
            transition: "stroke-dashoffset 0.5s ease, opacity 0.4s ease",
          }}
        />
        {/* Red circle glow */}
        <circle
          cx="24"
          cy="24"
          r="10"
          fill="none"
          stroke="rgba(239,68,68,0.3)"
          strokeWidth="6"
          style={{
            opacity: showHandoff ? 1 : 0,
            transition: "opacity 0.4s ease",
            filter: "blur(4px)",
          }}
        />
        {/* Red circle */}
        <circle
          cx="24"
          cy="24"
          r="9"
          fill="rgba(239,68,68,0.08)"
          stroke="#ef4444"
          strokeWidth="1.5"
          style={{
            opacity: showHandoff ? 1 : 0,
            transform: showHandoff ? "scale(1)" : "scale(0)",
            transformOrigin: "center",
            transition: "all 0.45s cubic-bezier(0.34,1.56,0.64,1)",
          }}
        />
        {/* Cross icon */}
        <path
          d="M19 19L29 29M29 19L19 29"
          stroke="#ef4444"
          strokeWidth="1.5"
          strokeLinecap="round"
          style={{
            opacity: showHandoff ? 1 : 0,
            transition: "opacity 0.35s ease 0.1s",
          }}
        />
        {/* Bottom dashed line — connecting line at bottom */}
        <line
          x1="24"
          y1="35"
          x2="24"
          y2="48"
          stroke="#404040"
          strokeWidth="1.5"
          strokeDasharray="3 3"
          style={{
            strokeDashoffset: showConnectingLine ? 0 : 20,
            opacity: showConnectingLine ? 1 : 0,
            transition: "stroke-dashoffset 0.5s ease, opacity 0.4s ease",
          }}
        />
      </svg>
      <span
        className="text-[10px] font-semibold tracking-[0.15em] text-red-400/70 uppercase sm:text-xs"
        style={{
          opacity: showHandoff ? 1 : 0,
          transition: "opacity 0.4s ease",
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

export function FragmentedToolCard({
  animate = false,
  runCycle = true,
  onLeftComplete,
  resetTrigger = 0,
}: {
  animate?: boolean;
  runCycle?: boolean;
  onLeftComplete?: () => void;
  resetTrigger?: number;
}) {
  const [mounted, setMounted] = useState(false);
  const show = animate && mounted;

  const [cycleProgress, setCycleProgress] = useState(0);
  const cycleProgressRef = useRef(0);
  const lastTick = useRef<number>(0);
  const justResetRef = useRef(false);
  const [allGray, setAllGray] = useState(true); // start grayed out, then glow runs
  const allGrayRef = useRef(true);

  // Phase 2: triggered when journey first reaches Escalates; then sequential reveal
  const phase2TriggeredRef = useRef(false);
  const [phase2Triggered, setPhase2Triggered] = useState(false);
  const [showConnectingLine, setShowConnectingLine] = useState(false);
  const [showPatchingSection, setShowPatchingSection] = useState(false);
  const [showPatchesLit, setShowPatchesLit] = useState(false);
  const [showHandoff, setShowHandoff] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Parent-driven reset: when resetTrigger changes, reset entire left flow
  useEffect(() => {
    if (resetTrigger === 0) return; // skip initial mount
    phase2TriggeredRef.current = false;
    setPhase2Triggered(false);
    setShowConnectingLine(false);
    setShowPatchingSection(false);
    setShowPatchesLit(false);
    setShowHandoff(false);
    cycleProgressRef.current = 0;
    setCycleProgress(0);
    justResetRef.current = true;
    allGrayRef.current = true;
    setAllGray(true);
  }, [resetTrigger]);

  // Notify parent when left flow reaches final state (handoff shown)
  useEffect(() => {
    if (showHandoff && onLeftComplete) onLeftComplete();
  }, [showHandoff, onLeftComplete]);

  // Trigger phase 2 once when cycle first reaches Escalates segment
  useEffect(() => {
    if (!show || phase2TriggeredRef.current || !runCycle) return;
    if (cycleProgress >= ESCALATES_SEGMENT_START) {
      phase2TriggeredRef.current = true;
      setPhase2Triggered(true);
    }
  }, [show, runCycle, cycleProgress]);

  // Phase 2 sequential reveal: connector → patching grayed → patches glow → handoff
  useEffect(() => {
    if (!phase2Triggered) return;
    const t1 = window.setTimeout(
      () => setShowConnectingLine(true),
      PHASE2_CONNECTOR_AT_MS,
    );
    const t2 = window.setTimeout(
      () => setShowPatchingSection(true),
      PHASE2_PATCHING_SECTION_AT_MS,
    );
    const t3 = window.setTimeout(
      () => setShowPatchesLit(true),
      PHASE2_PATCHES_LIT_AT_MS,
    );
    const t4 = window.setTimeout(
      () => setShowHandoff(true),
      PHASE2_HANDOFF_AT_MS,
    );
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [phase2Triggered]);

  // Animation loop: advance cycle only when runCycle is true; parent handles reset via resetTrigger
  const rafId = useRef<number>(0);
  useEffect(() => {
    if (!show || !runCycle) return;
    lastTick.current = performance.now();
    const tick = (now: number) => {
      const deltaMs = now - lastTick.current;
      lastTick.current = now;
      let p = cycleProgressRef.current;

      if (justResetRef.current) {
        justResetRef.current = false;
      } else {
        p += deltaMs / CYCLE_DURATION_MS;
        if (allGrayRef.current && p > 0.02) {
          allGrayRef.current = false;
          setAllGray(false);
        }
      }
      if (p >= 1) {
        p = 1; // cap at complete; reset only via parent resetTrigger
      }
      cycleProgressRef.current = p;
      setCycleProgress(p);
      rafId.current = requestAnimationFrame(tick);
    };
    rafId.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId.current);
  }, [show, runCycle]);

  return (
    <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-wid-card-border bg-wid-card-bg shadow-wid-card">
      {/* Wave background — left half so it joins with right card */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage: "url(/assets/what-it-does/wave-shape.svg)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "0% 100%",
          backgroundSize: "200% auto",
        }}
        aria-hidden="true"
      />
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
                <FlowNode
                  step={step}
                  index={i}
                  animate={show}
                  lit={allGray ? false : isStepLit(cycleProgress, i)}
                />
                {i < TOOL_A_STEPS.length - 1 && (
                  <FlowConnector
                    animate={show}
                    index={i}
                    revealProgress={
                      allGray ? 0 : getSegmentProgress(cycleProgress, i)
                    }
                    color={TOOL_A_STEPS[i].color}
                    glowColor={TOOL_A_STEPS[i].glowColor}
                    isPaused={false}
                    nextStepLit={
                      allGray ? false : isStepLit(cycleProgress, i + 1)
                    }
                  />
                )}
              </div>
            ))}
          </div>
        </ToolBox>

        <BreakIndicator
          showConnectingLine={showConnectingLine}
          showHandoff={showHandoff}
        />

        {/* Tool B — hidden until phase 2; then visible grayed, then patches lit */}
        <ToolBox
          label="Patching Tool"
          toolNumber={2}
          animate={showPatchingSection}
          delay={0}
        >
          <div className="flex justify-center">
            <FlowNode
              step={TOOL_B_STEP}
              index={5}
              animate={showPatchingSection}
              lit={showPatchesLit}
            />
          </div>
        </ToolBox>

        {/* Spacer to push bottom text down consistently */}
        <div className="flex-1" />

        {/* Bottom text — always visible with the card (not part of animation flow) */}
        <p
          className="mt-8 text-center text-xs leading-relaxed text-neutral-500 sm:mt-10 sm:text-sm"
          style={{
            opacity: show ? 1 : 0,
            transform: show ? "translateY(0)" : "translateY(8px)",
            transition: "all 0.5s ease 200ms",
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

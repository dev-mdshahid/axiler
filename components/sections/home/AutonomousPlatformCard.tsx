"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { GoBug } from "react-icons/go";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { IoWarningOutline } from "react-icons/io5";
import { FiCheckCircle } from "react-icons/fi";

// Loop cycle: each branch gets a segment; spark moves along line, line colors with it, icon lights when spark reaches end
const CYCLE_DURATION_MS = 3000;
const SEGMENT_FRAC = 1 / 4; // each of 4 branches gets 1/4 of cycle
const GRAY_STROKE = "#404040";
const PROGRESS_RESET_EPS = 0.002; // treat as 0 when reset so first branch stays gray

interface BranchConfig {
  icon: React.ReactNode;
  label: string;
  color: string;
  glowColor: string;
}

const BRANCHES: BranchConfig[] = [
  {
    icon: <GoBug className="size-5" aria-hidden="true" />,
    label: "Detects",
    color: "#22c55e",
    glowColor: "rgba(34,197,94,0.4)",
  },
  {
    icon: <HiMagnifyingGlass className="size-5" aria-hidden="true" />,
    label: "Prioritizes",
    color: "#fbbf24",
    glowColor: "rgba(251,191,36,0.4)",
  },
  {
    icon: <IoWarningOutline className="size-5" aria-hidden="true" />,
    label: "Responds",
    color: "#f472b6",
    glowColor: "rgba(244,114,182,0.4)",
  },
  {
    icon: <FiCheckCircle className="size-5" aria-hidden="true" />,
    label: "Remediates",
    color: "#C0A9FF",
    glowColor: "rgba(192,169,255,0.4)",
  },
];

// Icon column width in px — must match the w-[ICON_COL_W] class below
const ICON_COL_W = 148;
// Hub circle diameter in px — must match size-[HUB_D] class below
const HUB_D = 90;
// Y positions of each branch as fraction of diagram height (tighter spacing)
const BRANCH_Y_FRACS = [0.14, 0.36, 0.58, 0.8];

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
      <div
        className="absolute rounded-full"
        style={{
          width: HUB_D * 1.35,
          height: HUB_D * 1.35,
          background:
            "conic-gradient(from 0deg, rgba(192,169,255,0.25), rgba(34,197,94,0.25), rgba(251,191,36,0.25), rgba(244,114,182,0.25), rgba(192,169,255,0.25))",
          animation: animate ? "wid-hub-ring-spin 8s linear infinite" : "none",
          filter: "blur(12px)",
          opacity: animate ? 1 : 0,
          transition: "opacity 0.8s ease 500ms",
        }}
        aria-hidden="true"
      />
      <div
        className="relative flex flex-col items-center justify-center rounded-full border border-neutral-700/80 bg-neutral-900/90"
        style={{ width: HUB_D, height: HUB_D }}
      >
        <Image
          src="/assets/what-it-does/cade-logo.svg"
          alt="CADE logo"
          width={35}
          height={23}
          className="h-auto w-12 sm:w-14"
        />
        {/* <span className="mt-1 text-center text-[10px] font-bold leading-none tracking-wide text-neutral-300">
          CADE
        </span> */}
      </div>
    </div>
  );
}

function BranchLabel({
  branch,
  index,
  animate,
  diagramH,
  lit,
  isPaused,
}: {
  branch: BranchConfig;
  index: number;
  animate: boolean;
  diagramH: number;
  lit: boolean;
  isPaused: boolean;
}) {
  const delay = 700 + index * 150;
  const topPx = BRANCH_Y_FRACS[index] * diagramH;
  const beatGlow = lit && isPaused;

  return (
    <div
      className="absolute right-0 flex items-center gap-2.5"
      style={{
        top: topPx,
        width: ICON_COL_W,
        transform: animate
          ? "translateY(-50%)"
          : "translateY(-50%) translateX(-10px)",
        opacity: animate ? 1 : 0,
        transition: `all 0.5s cubic-bezier(0.34,1.56,0.64,1) ${delay}ms`,
      }}
    >
      <div
        className={`flex size-11 shrink-0 items-center justify-center rounded-xl border sm:size-12 transition-colors duration-300 ${beatGlow ? "wid-icon-beat-glow" : ""}`}
        style={{
          borderColor: lit ? `${branch.color}35` : "rgba(113,113,122,0.4)",
          background: lit ? `${branch.color}0D` : "rgba(63,63,70,0.3)",
          color: lit ? branch.color : "#71717a",
          boxShadow: lit
            ? `0 0 10px ${branch.glowColor}, 0 0 20px ${branch.glowColor}30`
            : "none",
          transition:
            "border-color 0.3s ease, background 0.3s ease, color 0.3s ease, box-shadow 0.3s ease",
          ...(beatGlow && { ["--glow" as string]: branch.glowColor }),
        }}
      >
        {branch.icon}
      </div>
      <span
        className={`whitespace-nowrap text-xs font-semibold sm:text-sm transition-colors duration-300 ${beatGlow ? "wid-text-beat-glow" : ""}`}
        style={{
          color: lit ? branch.color : "#71717a",
          ...(beatGlow && { ["--glow" as string]: branch.glowColor }),
        }}
      >
        {branch.label}
      </span>
    </div>
  );
}

function getSegmentProgress(cycleProgress: number, branchIndex: number) {
  // When progress is at 0 (or just reset), all lines stay gray
  if (cycleProgress < PROGRESS_RESET_EPS) return 0;
  const segStart = branchIndex * SEGMENT_FRAC;
  const segEnd = (branchIndex + 1) * SEGMENT_FRAC;
  if (cycleProgress <= segStart) return 0;
  if (cycleProgress >= segEnd) return 1;
  return (cycleProgress - segStart) / SEGMENT_FRAC;
}

function isBranchLit(cycleProgress: number, branchIndex: number) {
  // When progress is at 0 (or just reset), no branch is lit
  if (cycleProgress < PROGRESS_RESET_EPS) return false;
  const segEnd = (branchIndex + 1) * SEGMENT_FRAC;
  return cycleProgress >= segEnd;
}

export function AutonomousPlatformCard({
  animate = false,
  grayedOut = false,
  runCycle = true,
  onRightComplete,
  resetTrigger = 0,
  showGreenGlow = false,
}: {
  animate?: boolean;
  grayedOut?: boolean;
  runCycle?: boolean;
  onRightComplete?: () => void;
  resetTrigger?: number;
  showGreenGlow?: boolean;
}) {
  const [mounted, setMounted] = useState(false);
  const show = animate && mounted;

  const diagramRef = useRef<HTMLDivElement>(null);
  const [dims, setDims] = useState<{ w: number; h: number } | null>(null);

  // Loop cycle: 0..1 over CYCLE_DURATION_MS; parent resets via resetTrigger
  const [cycleProgress, setCycleProgress] = useState(0);
  const cycleProgressRef = useRef(0);
  const pathRefs = useRef<(SVGPathElement | null)[]>([]);
  const [pathLengths, setPathLengths] = useState<number[]>([0, 0, 0, 0]);
  const pathLengthsRef = useRef<number[]>([0, 0, 0, 0]);
  pathLengthsRef.current = pathLengths;
  const [sparkPoints, setSparkPoints] = useState<
    ({ x: number; y: number } | null)[]
  >([null, null, null, null]);
  const rafId = useRef<number>(0);
  const lastTick = useRef<number>(0);
  const justResetRef = useRef(false);
  const [isPaused, setIsPaused] = useState(false);
  const [allGray, setAllGray] = useState(true); // start grayed when waiting for left
  const allGrayRef = useRef(true);
  const completedNotifiedRef = useRef(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Parent-driven reset: when resetTrigger changes, reset to initial gray state
  useEffect(() => {
    if (resetTrigger === 0) return;
    justResetRef.current = true;
    allGrayRef.current = true;
    setAllGray(true);
    setIsPaused(false);
    completedNotifiedRef.current = false;
    cycleProgressRef.current = 0;
    setCycleProgress(0);
  }, [resetTrigger]);

  useEffect(() => {
    function measure() {
      const el = diagramRef.current;
      if (!el) return;
      const { width, height } = el.getBoundingClientRect();
      if (width > 0 && height > 0) setDims({ w: width, h: height });
    }
    measure();
    const ro = new ResizeObserver(measure);
    if (diagramRef.current) ro.observe(diagramRef.current);
    return () => ro.disconnect();
  }, []);

  // Measure path lengths when paths are in DOM
  useEffect(() => {
    if (!show || !dims) return;
    const lengths = pathRefs.current.map((path) =>
      path ? path.getTotalLength() : 0,
    );
    if (lengths.some((l) => l > 0)) setPathLengths(lengths);
  }, [show, dims?.w, dims?.h]);

  // Notify parent once when right cycle reaches completion (stays at 1; parent handles 5s hold + reset)
  useEffect(() => {
    if (
      cycleProgress >= 1 &&
      !completedNotifiedRef.current &&
      onRightComplete
    ) {
      completedNotifiedRef.current = true;
      onRightComplete();
    }
  }, [cycleProgress, onRightComplete]);

  // Animation loop: advance only when runCycle and not grayedOut; cap at 1, no self-reset
  const effectiveGray = grayedOut || allGray;
  useEffect(() => {
    if (!show || !runCycle || grayedOut) return;
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
        p = 1;
        setIsPaused(true); // hold final state (spark/lines lit)
      }
      cycleProgressRef.current = p;
      setCycleProgress(p);

      const points: ({ x: number; y: number } | null)[] = [];
      const lengths = pathLengthsRef.current;
      for (let i = 0; i < BRANCHES.length; i++) {
        const path = pathRefs.current[i];
        const len = lengths[i];
        const sparkProg = getSegmentProgress(p, i);
        if (path && len > 0) {
          const pt = path.getPointAtLength(sparkProg * len);
          points.push({ x: pt.x, y: pt.y });
        } else {
          points.push(null);
        }
      }
      setSparkPoints(points);
      rafId.current = requestAnimationFrame(tick);
    };
    rafId.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId.current);
  }, [show, runCycle, grayedOut, pathLengths]);

  // All coordinates in real pixels
  const hubCx = HUB_D / 2; // hub centre X
  const hubCy = dims ? dims.h / 2 : 0; // hub centre Y (vertical middle)
  const lineEndX = dims ? dims.w - ICON_COL_W : 0; // where lines meet icon left edge

  return (
    <div
      className={`relative flex h-full flex-col overflow-hidden rounded-2xl border transition-all duration-500 ${
        grayedOut ? "opacity-70 grayscale" : "opacity-100 grayscale-0"
      } ${
        showGreenGlow
          ? "border-wid-accent-green/40 bg-wid-card-bg shadow-[0_0_32px_rgba(34,197,94,0.2),0_0_64px_rgba(34,197,94,0.1),0_8px_32px_-8px_rgba(0,0,0,0.4)] -translate-y-0.5"
          : "border-wid-card-border bg-wid-card-bg shadow-wid-card"
      }`}
    >
      {/* Wave background — right half so it joins with left card */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage: "url(/assets/what-it-does/wave-shape.svg)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "100% 100%",
          backgroundSize: "200% auto",
        }}
        aria-hidden="true"
      />
      {/* Glow blending with wave — bottom of card */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-90"
        style={{
          backgroundImage: "url(/assets/what-it-does/glow-shape.svg)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "0% 150%",
          backgroundSize: "contain",
          mixBlendMode: "screen",
        }}
        aria-hidden="true"
      />
      {/* Green glow background when right flow is active or in final state */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-700"
        style={{
          background:
            "radial-gradient(ellipse 80% 80% at 50% 50%, rgba(34,197,94,0.12) 0%, rgba(34,197,94,0.05) 50%, transparent 70%)",
          filter: "blur(28px)",
          opacity: showGreenGlow ? 1 : 0,
        }}
        aria-hidden="true"
      />
      {/* Background glows */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 30% 50%, rgba(192,169,255,0.05) 0%, transparent 60%), radial-gradient(ellipse at 50% 85%, rgba(34,197,94,0.04) 0%, transparent 50%)",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-16 -left-16 size-48 rounded-full opacity-40 sm:size-56"
        style={{
          background:
            "radial-gradient(circle, rgba(192,169,255,0.3) 0%, rgba(244,114,182,0.2) 30%, rgba(251,191,36,0.15) 50%, rgba(34,197,94,0.1) 70%, transparent 100%)",
          filter: "blur(40px)",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-12 -right-12 h-40 w-3/4 opacity-50 sm:h-48 sm:w-2/3 md:h-56"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 70% 90%, rgba(192,169,255,0.12) 0%, rgba(244,114,182,0.06) 40%, rgba(34,197,94,0.04) 70%, transparent 100%)",
          filter: "blur(32px)",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-8 top-8 h-32 w-1/2 opacity-60 sm:h-40 sm:w-2/5"
        style={{
          background:
            "radial-gradient(ellipse 70% 80% at 90% 20%, rgba(251,191,36,0.08) 0%, rgba(34,197,94,0.05) 50%, transparent 100%)",
          filter: "blur(28px)",
        }}
        aria-hidden="true"
      />
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
          className="mx-auto mb-5 flex items-center gap-1.5 rounded-full border border-wid-accent-green/20 bg-wid-accent-green/10 px-3 py-1"
          style={{
            opacity: show ? 1 : 0,
            transform: show ? "translateY(0)" : "translateY(-8px)",
            transition: "all 0.5s ease 100ms",
          }}
        >
          <span className="size-1.5 rounded-full bg-wid-accent-green" />
          <span className="text-xs font-medium text-wid-accent-green">
            Axiler Solution
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
          One Autonomous Platform,
          <br />
          <span className="text-neutral-400">Context-Driven Control</span>
        </h3>

        {/* Diagram — single relative container measured by ResizeObserver */}
        <div className="relative mx-auto w-full max-w-sm flex-1">
          <div
            ref={diagramRef}
            className="relative h-full min-h-64 w-full sm:min-h-72 md:min-h-80"
          >
            {/* Full-diagram SVG — pixel viewBox, no distortion */}
            {dims && (
              <svg
                viewBox={`0 0 ${dims.w} ${dims.h}`}
                width={dims.w}
                height={dims.h}
                fill="none"
                className="absolute inset-0"
                aria-hidden="true"
              >
                {BRANCHES.map((branch, i) => {
                  const ey = BRANCH_Y_FRACS[i] * dims.h;
                  const span = lineEndX - hubCx;
                  const cx1 = hubCx + span * 0.4;
                  const cx2 = hubCx + span * 0.7;
                  const pathD = `M${hubCx},${hubCy} C${cx1},${hubCy} ${cx2},${ey} ${lineEndX},${ey}`;
                  const lineReveal = effectiveGray
                    ? 0
                    : getSegmentProgress(cycleProgress, i);
                  const lit = effectiveGray
                    ? false
                    : isBranchLit(cycleProgress, i);
                  const point = sparkPoints[i];

                  return (
                    <g key={branch.label}>
                      {/* Gray base line — always visible */}
                      <path
                        ref={(el) => {
                          pathRefs.current[i] = el;
                        }}
                        d={pathD}
                        pathLength="1"
                        stroke={GRAY_STROKE}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        opacity="0.5"
                      />
                      {/* Colored line — reveals as spark moves; fully hidden when lineReveal is 0 */}
                      <path
                        d={pathD}
                        pathLength="1"
                        stroke={branch.color}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        style={{
                          strokeDasharray: 1,
                          strokeDashoffset: 1 - lineReveal,
                          opacity: lineReveal > 0 ? 1 : 0,
                          transition:
                            "stroke-dashoffset 0.08s linear, opacity 0.15s ease",
                          ...(isPaused &&
                            lit && {
                              color: branch.color,
                              animation:
                                "wid-line-glow-beat 2.2s ease-in-out infinite",
                            }),
                        }}
                      />
                      {/* Colored glow behind line — no beat so blur stays; hidden when lineReveal is 0 */}
                      <path
                        d={pathD}
                        pathLength="1"
                        stroke={branch.color}
                        strokeWidth="6"
                        strokeLinecap="round"
                        style={{
                          strokeDasharray: 1,
                          strokeDashoffset: 1 - lineReveal,
                          opacity: lineReveal > 0 ? 0.15 : 0,
                          transition:
                            "stroke-dashoffset 0.08s linear, opacity 0.15s ease",
                          filter: "blur(4px)",
                        }}
                      />
                      {/* Spark moving along path — visible only while traveling */}
                      {point && (
                        <circle
                          r="4"
                          cx={point.x}
                          cy={point.y}
                          fill={branch.color}
                          style={{
                            filter: `drop-shadow(0 0 6px ${branch.glowColor})`,
                            opacity:
                              lineReveal > 0.01 && lineReveal < 0.99 ? 1 : 0,
                            transition: "opacity 0.05s ease",
                          }}
                        />
                      )}
                      {/* Terminal dot — colored when branch is lit */}
                      <circle
                        cx={lineEndX}
                        cy={ey}
                        r="3.5"
                        fill={lit ? branch.color : GRAY_STROKE}
                        style={{
                          opacity: 0.8,
                          transition: "fill 0.3s ease",
                          color: branch.color,
                          filter: lit
                            ? `drop-shadow(0 0 4px ${branch.glowColor})`
                            : "none",
                          ...(isPaused &&
                            lit && {
                              animation:
                                "wid-line-glow-beat 2.2s ease-in-out infinite",
                            }),
                        }}
                      />
                    </g>
                  );
                })}
              </svg>
            )}

            {/* Hub — left edge, vertically centred */}
            <div className="absolute left-0 top-1/2 z-10 -translate-y-1/2">
              <HubCenter animate={show} />
            </div>

            {/* Label below hub */}
            <div
              className="absolute left-0 z-10 flex items-center justify-center"
              style={{
                width: HUB_D,
                top: "50%",
                transform: `translateY(${HUB_D / 2 + 6}px)`,
                opacity: show ? 1 : 0,
                transition: "opacity 0.6s ease 800ms",
              }}
            >
              <p className="text-center text-[10px] font-medium leading-tight text-neutral-500 sm:text-xs">
                Our one autonomous platform
              </p>
            </div>

            {/* Icon + label column — right edge */}
            {dims &&
              BRANCHES.map((branch, i) => (
                <BranchLabel
                  key={branch.label}
                  branch={branch}
                  index={i}
                  animate={show}
                  diagramH={dims.h}
                  lit={effectiveGray ? false : isBranchLit(cycleProgress, i)}
                  isPaused={isPaused}
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
          <span className="font-semibold text-wid-accent-pink">
            threat to fix
          </span>
          , unified in one{" "}
          <span className="font-semibold text-wid-accent-purple">
            agentic platform
          </span>
          , in{" "}
          <span className="font-semibold text-wid-accent-green">real time</span>
          .
        </p>
      </div>
    </div>
  );
}

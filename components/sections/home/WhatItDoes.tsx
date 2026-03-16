"use client";

import { useCallback, useEffect, useState } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { FragmentedToolCard } from "./FragmentedToolCard";
import { AutonomousPlatformCard } from "./AutonomousPlatformCard";

type FlowPhase = "left" | "shake" | "right" | "hold";

const SHAKE_DURATION_MS = 2000;

export default function WhatItDoes() {
  const { ref: sectionRef, isIntersecting: sectionVisible } =
    useIntersectionObserver({ threshold: 0.1 });

  const { ref: leftCardRef, isIntersecting: leftVisible } =
    useIntersectionObserver({ threshold: 0.15 });

  const { ref: rightCardRef, isIntersecting: rightVisible } =
    useIntersectionObserver({ threshold: 0.15 });

  const [phase, setPhase] = useState<FlowPhase>("left");
  const [resetTrigger, setResetTrigger] = useState(0);

  const onLeftComplete = useCallback(() => {
    setPhase("shake");
  }, []);

  const onRightComplete = useCallback(() => {
    setPhase("hold");
  }, []);

  // After shaky red animation (2s), start right side animation
  useEffect(() => {
    if (phase !== "shake") return;
    const t = setTimeout(() => setPhase("right"), SHAKE_DURATION_MS);
    return () => clearTimeout(t);
  }, [phase]);

  const runLeft = phase === "left";
  const runRight = phase === "right";
  const rightGrayedOut = phase === "left" || phase === "shake";
  const showGreenGlow = phase === "right" || phase === "hold";
  const isShaking = phase === "shake";

  return (
    <section
      id="what-it-does"
      aria-labelledby="what-it-does-heading"
      className="relative w-full bg-[#03040C] py-16 md:py-24 border-t border-white/5 overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="absolute top-[20%] left-[-10%] h-[400px] w-[500px] rounded-full bg-emerald-500/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[10%] h-[300px] w-[400px] rounded-full bg-purple-500/5 blur-[120px]" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div
          ref={sectionRef}
          className={`mb-14 sm:mb-16 flex flex-col items-center text-center max-w-3xl mx-auto transition-all duration-1000 ease-out motion-reduce:transition-none ${
            sectionVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <div className="mb-5 inline-flex uppercase tracking-[0.2em] text-[11px] sm:text-xs font-bold text-purple-400 bg-purple-400/10 border border-purple-400/20 px-4 py-1.5 rounded-full">
            Why Axiler
          </div>

          <h2
            id="what-it-does-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight mb-5"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/60">Fragmented Tools</span>
            <span className="mx-2 sm:mx-3 text-neutral-600 font-medium text-2xl sm:text-3xl lg:text-4xl inline-block -translate-y-0.5">vs.</span>
            <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-emerald-400">
              {""} One Autonomous Platform
            </span>
          </h2>

          <p className="text-sm sm:text-base font-medium leading-relaxed text-neutral-400">
            Traditional security stacks create noise.
            <br className="hidden sm:block" />
            Axiler unifies detection through remediation in a single agentic flow.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-2 lg:gap-8 w-full max-w-none">
          <div
            ref={leftCardRef}
            className={`transition-all duration-1000 ease-out motion-reduce:transition-none ${
              leftVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
            style={
              isShaking
                ? {
                    transform: "translateX(-2px)",
                    boxShadow:
                      "0 0 40px rgba(239,68,68,0.15), 0 0 80px rgba(239,68,68,0.08), inset 0 0 0 1px rgba(239,68,68,0.4)",
                    filter: "contrast(1.1) brightness(1.1) grayscale(0.2)",
                  }
                : {
                    boxShadow: "0 0 0 rgba(239,68,68,0)",
                  }
            }
          >
            <FragmentedToolCard
              animate={leftVisible}
              runCycle={runLeft}
              onLeftComplete={onLeftComplete}
              resetTrigger={resetTrigger}
            />
          </div>

          <div
            ref={rightCardRef}
            className={`transition-all duration-1000 ease-out delay-150 motion-reduce:transition-none ${
              rightVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <AutonomousPlatformCard
              animate={rightVisible}
              grayedOut={rightGrayedOut}
              runCycle={runRight}
              onRightComplete={onRightComplete}
              resetTrigger={resetTrigger}
              showGreenGlow={showGreenGlow}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

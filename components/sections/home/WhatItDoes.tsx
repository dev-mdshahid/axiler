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
      className="w-full bg-wid-section-bg py-20 md:py-28 lg:py-36"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div
          ref={sectionRef}
          className={`mb-14 text-center transition-all duration-700 ease-out motion-reduce:transition-none md:mb-18 lg:mb-20 ${
            sectionVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-wid-accent-purple uppercase sm:text-sm">
            Why Axiler
          </p>

          <h2
            id="what-it-does-heading"
            className="text-3xl leading-tight font-bold text-foreground sm:text-4xl lg:text-5xl"
          >
            <span className="text-foreground">Fragmented Tools</span>
            <span className="mx-2 text-neutral-500 sm:mx-3">vs.</span>
            {/* <br className="sm:hidden" /> */}
            <br />
            <span className="bg-linear-to-r from-wid-accent-purple to-wid-accent-green bg-clip-text text-transparent">
              One Autonomous Platform
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-neutral-400 sm:text-base">
            Traditional security stacks create noise.
            <br className="hidden sm:block" />
            Axiler unifies detection through remediation in a single agentic
            flow.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-2 lg:gap-8">
          <div
            ref={leftCardRef}
            className={`transition-all duration-700 ease-out motion-reduce:transition-none ${
              leftVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            } ${isShaking ? "wid-shake-red-2s" : ""}`}
            style={
              isShaking
                ? {
                    boxShadow:
                      "0 0 24px rgba(239,68,68,0.5), 0 0 48px rgba(239,68,68,0.25), inset 0 0 0 1px rgba(239,68,68,0.3)",
                  }
                : undefined
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
            className={`transition-all duration-700 ease-out delay-150 motion-reduce:transition-none ${
              rightVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
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

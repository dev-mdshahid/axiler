"use client";

import Link from "next/link";
import { useRef, useEffect, useState } from "react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const timeoutRef = useRef<number | null>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [hasVideoError, setHasVideoError] = useState(false);
  const [hasTimedOut, setHasTimedOut] = useState(false);

  useEffect(() => {
    timeoutRef.current = window.setTimeout(() => {
      // Only mark timeout if video still not loaded or errored
      if (!isVideoLoaded && !hasVideoError) {
        setHasTimedOut(true);
      }
    }, 8000);

    return () => {
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, [isVideoLoaded, hasVideoError]);

  return (
    <section
      id="hero"
      aria-label="Hero section"
      className="relative flex w-full flex-col items-center md:min-h-dvh md:justify-end overflow-hidden bg-black"
    >
      {/* ── Background Video ──────────────────────────────── */}
      {/*
        Mobile: relative positioning, object-contain
        Desktop (md+): absolute inset-0, object-cover for full-bleed cinematic effect.
      */}
      {!hasVideoError && (
        <div className="relative w-full aspect-video md:absolute md:inset-0 md:aspect-auto z-0 mt-20 md:mt-0">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className={`absolute inset-0 size-full object-contain transition-opacity duration-1000 motion-reduce:transition-none md:scale-100 md:object-cover ${
              isVideoLoaded ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden="true"
            onCanPlay={() => {
              setIsVideoLoaded(true);
              if (timeoutRef.current !== null) {
                window.clearTimeout(timeoutRef.current);
              }
            }}
            onError={() => {
              setHasVideoError(true);
              if (timeoutRef.current !== null) {
                window.clearTimeout(timeoutRef.current);
              }
            }}
          >
            <source src="/assets/hero-bg-video.mp4" type="video/mp4" />
          </video>

          {!isVideoLoaded && !hasTimedOut && (
            <div className="pointer-events-none absolute inset-0 z-0 flex flex-col items-center justify-center bg-[#030303] overflow-hidden">
              {/* Subtle Cyber Grid Background */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:32px_32px]" />
              
              {/* Top-down scanning laser line */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-white/30 shadow-[0_0_15px_#ffffff] animate-[ping_3s_linear_infinite]" />
              
              <div className="relative flex items-center justify-center">
                {/* Advanced targeting crosshairs */}
                <div className="absolute h-40 w-40 border border-white/5 rounded-full animate-[spin_10s_linear_infinite]" />
                <div className="absolute h-32 w-32 border-2 border-transparent border-t-white/40 border-b-white/40 rounded-full animate-[spin_3s_linear_infinite]" />
                
                {/* Data processing rings */}
                <div className="absolute h-24 w-24 border border-dashed border-white/20 rounded-full animate-[spin_5s_linear_infinite_reverse]" />
                <div className="absolute h-16 w-16 border-2 border-transparent border-r-white/60 border-l-white/60 rounded-full animate-[spin_2s_linear_infinite]" />
                
                {/* Core Lock / Processing unit */}
                <div className="h-6 w-6 border border-white/50 bg-white/5 animate-pulse flex items-center justify-center backdrop-blur-sm shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                  <div className="h-2 w-2 bg-white/90 animate-ping" />
                </div>
              </div>

              {/* Terminal / Code-style Status Output */}
              <div className="mt-16 flex flex-col items-center gap-1.5 font-mono z-10 w-full px-6">
                <p className="text-sm font-bold tracking-[0.2em] text-white/90 uppercase drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] flex items-center">
                  <span className="mr-2 opacity-50">_</span> INITIATING_SECURE_LINK
                  <span className="ml-1 inline-block w-2 bg-white/70 animate-pulse">_</span>
                </p>
                <div className="flex gap-2 items-center mt-1 text-[10px] sm:text-xs text-white/50 tracking-widest uppercase">
                  <span>[<span className="text-white/90 animate-pulse">OK</span>] Handshake</span>
                  <span>|</span>
                  <span>[<span className="text-white/90 animate-pulse">OK</span>] Encryption</span>
                  <span>|</span>
                  <span className="flex items-center gap-1">
                    Loading Payload
                    <span className="flex gap-0.5">
                      <span className="h-1 w-1 bg-white/60 rounded-full animate-[bounce_1s_infinite_-0.3s]" />
                      <span className="h-1 w-1 bg-white/60 rounded-full animate-[bounce_1s_infinite_-0.15s]" />
                      <span className="h-1 w-1 bg-white/60 rounded-full animate-[bounce_1s_infinite_0s]" />
                    </span>
                  </span>
                </div>
                <p className="text-[10px] tracking-[0.3em] font-semibold text-white/30 mt-4 uppercase">
                  SYS.ID: 0x8F9E2A // ZERO-TRUST ENV
                </p>
              </div>
            </div>
          )}
        </div>
      )}

      {hasVideoError && (
        <div className="relative md:absolute inset-0 flex items-center justify-center bg-transparent py-20 md:py-0">
          <p className="rounded-full bg-white/5 px-4 py-2 text-xs font-medium text-white/60 backdrop-blur">
            Background video unavailable in this environment.
          </p>
        </div>
      )}

      {/* ── Gradient Overlays ─────────────────────────────── */}
      {/* Top fade for navbar readability */}
      <div
        className="pointer-events-none hidden md:block absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background/80 to-transparent z-0"
        aria-hidden="true"
      />
      {/* Bottom fade for CTA readability */}
      <div
        className="pointer-events-none hidden md:block absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background/70 to-transparent z-0"
        aria-hidden="true"
      />

      {/* ── CTA Content ────────────────────────────────────── */}
      {/* <div className="relative z-10 flex flex-col items-center px-4 pb-12 pt-8 sm:pb-16 md:pt-0 md:pb-20 lg:pb-24">
        <Link
          href="#cade"
          className="inline-flex h-12 items-center justify-center rounded-lg bg-white px-8 text-base font-semibold text-black shadow-lg shadow-white/10 transition-all duration-300 hover:bg-neutral-200 hover:shadow-xl hover:shadow-white/20 active:scale-95 motion-reduce:transition-none sm:h-14 sm:px-10 sm:text-lg"
        >
          See How It Works
        </Link>
      </div> */}
    </section>
  );
}

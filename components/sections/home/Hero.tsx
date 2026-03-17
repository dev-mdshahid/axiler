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

  // Performance optimization: Pause video when not in viewport
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.currentTime = 0;
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [isVideoLoaded]);

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
            muted
            loop
            playsInline
            preload="metadata"
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
              
              <div className="relative flex items-center justify-center h-16 w-16 md:h-40 md:w-40 md:mt-0">
                {/* Advanced targeting crosshairs */}
                <div className="absolute h-16 w-16 md:h-40 md:w-40 border border-white/5 rounded-full animate-[spin_10s_linear_infinite]" />
                <div className="absolute h-14 w-14 md:h-32 md:w-32 border-2 border-transparent border-t-white/40 border-b-white/40 rounded-full animate-[spin_3s_linear_infinite]" />
                
                {/* Data processing rings */}
                <div className="absolute h-10 w-10 md:h-24 md:w-24 border border-dashed border-white/20 rounded-full animate-[spin_5s_linear_infinite_reverse]" />
                <div className="absolute h-6 w-6 md:h-16 md:w-16 border-2 border-transparent border-r-white/60 border-l-white/60 rounded-full animate-[spin_2s_linear_infinite]" />
                
                {/* Core Lock / Processing unit */}
                <div className="h-3 w-3 md:h-6 md:w-6 border border-white/50 bg-white/5 animate-pulse flex items-center justify-center backdrop-blur-sm shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                  <div className="h-1 w-1 md:h-2 md:w-2 bg-white/90 animate-ping" />
                </div>
              </div>

              {/* Terminal / Code-style Status Output */}
              <div className="mt-3 md:mt-12 flex flex-col items-center gap-0.5 font-mono z-10 w-full px-2 text-center">
                <p className="text-[7px] md:text-sm font-bold tracking-[0.1em] md:tracking-[0.2em] text-white/90 uppercase drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] flex items-center justify-center">
                  <span className="mr-1 md:mr-2 opacity-50">_</span> INITIATING_SECURE_LINK
                  <span className="ml-1 inline-block w-1 md:w-2 h-1.5 md:h-3 bg-white/70 animate-pulse" />
                </p>
                <div className="flex flex-row flex-nowrap justify-center gap-1 mx-auto mt-0.5 md:mt-2 text-[5px] md:text-xs text-white/50 tracking-[0.1em] md:tracking-widest uppercase text-center">
                  <span className="flex items-center">[<span className="text-white/90 animate-pulse mx-0.5">OK</span>] Handshake</span>
                  <span className="">|</span>
                  <span className="flex items-center">[<span className="text-white/90 animate-pulse mx-0.5">OK</span>] Encrypt</span>
                </div>
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

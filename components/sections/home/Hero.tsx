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
    setHasTimedOut(false);

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
      className="relative flex min-h-dvh w-full flex-col items-center justify-end overflow-hidden bg-background"
    >
      {/* ── Background Video ──────────────────────────────── */}
      {/*
        Mobile: object-contain keeps the full video visible (no cropping).
        The dark background fills the remaining space seamlessly.
        Desktop (md+): object-cover for full-bleed cinematic effect.
      */}
      {!hasVideoError && (
        <>
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className={`absolute inset-0 size-full scale-150 object-contain transition-opacity duration-1000 motion-reduce:transition-none sm:scale-130 md:scale-100 md:object-cover ${
              isVideoLoaded ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden="true"
            onLoadedData={() => {
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
            <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center bg-gradient-to-b from-background via-background/90 to-background">
              <div className="h-10 w-10 animate-spin rounded-full border-2 border-white/20 border-t-white/80" />
            </div>
          )}
        </>
      )}

      {hasVideoError && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-background">
          <p className="rounded-full bg-white/5 px-4 py-2 text-xs font-medium text-white/60 backdrop-blur">
            Background video unavailable in this environment.
          </p>
        </div>
      )}

      {/* ── Gradient Overlays ─────────────────────────────── */}
      {/* Top fade for navbar readability */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background/80 to-transparent"
        aria-hidden="true"
      />
      {/* Bottom fade for CTA readability */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background/70 to-transparent"
        aria-hidden="true"
      />

      {/* ── CTA Content ────────────────────────────────────── */}
      <div className="relative z-10 flex flex-col items-center px-4 pb-12 sm:pb-16 md:pb-20 lg:pb-24">
        <Link
          href="#demo"
          className="inline-flex h-12 items-center justify-center rounded-lg bg-brand-primary px-8 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:bg-brand-primary-dark hover:shadow-xl active:scale-95 motion-reduce:transition-none sm:h-14 sm:px-10 sm:text-lg"
        >
          Book a Demo
        </Link>
      </div>
    </section>
  );
}

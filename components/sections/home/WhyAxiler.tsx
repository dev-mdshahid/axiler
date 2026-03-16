"use client";

import { useRef, useState, useEffect } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export default function WhyAxiler() {
  const { ref: containerRef, isIntersecting } = useIntersectionObserver({
    triggerOnce: true,
    threshold: 0.1,
  });

  const videoContainerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedData = () => {
      setIsVideoLoaded(true);
    };

    // In case the video is already loaded before the effect runs
    if (video.readyState >= 3) {
      handleLoadedData();
    } else {
      video.addEventListener("loadeddata", handleLoadedData);
    }

    // Play/catch logic for initial load
    video.play().catch(() => {
      // Autoplay prevented by browser
    });

    return () => {
      video.removeEventListener("loadeddata", handleLoadedData);
    };
  }, []);

  // Performance optimization: Pause video when out of viewport
  useEffect(() => {
    const video = videoRef.current;
    const container = videoContainerRef.current;
    if (!video || !container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => { });
        } else {
          video.pause();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [isVideoLoaded]);

  return (
    <SectionWrapper id="why-axiler" className="bg-black">
      <div
        ref={containerRef}
        className={`flex w-full flex-col items-center justify-center transition-all duration-700 ease-out motion-reduce:transition-none ${isIntersecting ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
      >
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-10 lg:mb-16">
            <div className="mb-5 inline-flex uppercase tracking-[0.2em] text-[11px] sm:text-xs font-bold text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 px-4 py-1.5 rounded-full">
              Instant Remediation
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/60 mb-5">
              Experience Autonomous Security In Action
            </h2>
            <p className="text-base sm:text-lg font-medium leading-relaxed text-neutral-400">
              Watch our autonomous AI rapidly identify threats, analyze risk, and remediate vulnerabilities in real-time, eliminating manual overhead.
            </p>
          </div>
        </div>

        <div
          ref={videoContainerRef}
          className="relative flex w-full max-w-[1400px] rounded-xl sm:rounded-2xl border border-white/10 aspect-[16/9] sm:aspect-[21/9] lg:aspect-[2.35/1] items-center justify-center overflow-hidden shadow-2xl"
        >
          {/* Fallback space to prevent layout shift before video loads */}
          {!isVideoLoaded && (
            <div className="absolute inset-0 -z-10 animate-pulse bg-neutral-900/20" aria-hidden="true" />
          )}

          <video
            ref={videoRef}
            muted
            loop
            playsInline
            preload="metadata"
            className={`w-full h-full object-cover transition-opacity duration-1000 motion-reduce:transition-none ${isVideoLoaded ? "opacity-100" : "opacity-0"
              }`}
            aria-label="Why Axiler demonstration video"
          >
            <source src="/assets/videos/why-axiler.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </SectionWrapper>
  );
}

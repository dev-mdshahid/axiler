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
    <section id="why-axiler" className="w-full bg-black py-16 md:py-24 lg:py-32">
      <div
        ref={containerRef}
        className={`flex w-full flex-col items-center justify-center transition-all duration-700 ease-out motion-reduce:transition-none ${isIntersecting ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
      >
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col items-center text-center sm:mb-12 md:mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Why Axiler
            </h2>
          </div>
        </div>

        <div
          ref={videoContainerRef}
          className="relative flex w-full aspect-video items-center justify-center overflow-hidden"
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
    </section>
  );
}

"use client";

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { FaUserSecret } from "react-icons/fa";
import { TbBrain } from "react-icons/tb";
import { LuUser, LuFileText, LuNetwork, LuSettings } from "react-icons/lu";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { FiHexagon } from "react-icons/fi";
import { IoMdBug } from "react-icons/io";

const NODES = [
  { id: "attack", label: "Attack", cx: 120, cy: 250, w: 150, h: 64, color: "#ef4444", glow: "rgba(239, 68, 68, 0.15)", icon: <FaUserSecret className="size-5" /> },
  { id: "users", label: "Users", cx: 120, cy: 400, w: 150, h: 64, color: "#d4d4d8", glow: "rgba(255, 255, 255, 0.05)", icon: <LuUser className="size-5" /> },
  { id: "cade", label: "CADE Engine", cx: 360, cy: 325, w: 190, h: 72, color: "#60a5fa", glow: "rgba(96, 165, 250, 0.2)", icon: <LuNetwork className="size-6" /> },
  { id: "logs", label: "Incident Logs", cx: 590, cy: 250, w: 180, h: 64, color: "#22d3ee", glow: "rgba(34, 211, 238, 0.15)", icon: <LuFileText className="size-5" /> },
  { id: "ml", label: "ML Engine", cx: 590, cy: 400, w: 180, h: 64, color: "#c084fc", glow: "rgba(192, 132, 252, 0.15)", icon: <TbBrain className="size-5" /> },
  { id: "threat", label: "AI Threat Analysis", cx: 840, cy: 180, w: 220, h: 64, color: "#f43f5e", glow: "rgba(244, 63, 94, 0.15)", icon: <HiMagnifyingGlass className="size-5" /> },
  { id: "rule", label: "AI Generated Rule", cx: 840, cy: 325, w: 220, h: 64, color: "#fbbf24", glow: "rgba(251, 191, 36, 0.15)", icon: <LuSettings className="size-5" /> },
  { id: "webapp", label: "Web Application", cx: 840, cy: 470, w: 220, h: 64, color: "#4ade80", glow: "rgba(74, 222, 128, 0.15)", icon: null },
  { id: "heal", label: "Self Healing", cx: 1080, cy: 325, w: 170, h: 64, color: "#2dd4bf", glow: "rgba(45, 212, 191, 0.15)", icon: <FiHexagon className="size-5" /> },
];

export default function Cade() {
  const { ref: sectionRef, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="cade" className="w-full bg-background py-20 md:py-28 lg:py-36 relative overflow-hidden">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          ref={sectionRef}
          className={`transition-all duration-700 ease-out motion-reduce:transition-none ${
            isIntersecting ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          {/* Header */}
          <div className="mb-14 sm:mb-20 flex flex-col items-center text-center max-w-4xl mx-auto">
            <div className="mb-5 inline-flex uppercase tracking-[0.2em] text-[11px] sm:text-xs font-bold text-blue-400 bg-blue-400/10 border border-blue-400/20 px-4 py-1.5 rounded-full">
              Core Engine
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-5xl font-bold leading-tight tracking-tight text-white mb-5">
              CADE
            </h2>
            <p className="text-base sm:text-lg font-medium leading-relaxed text-neutral-400">
              Context Aware Defence Enforcer. Self-Healing Application Security Powered by Live Attack Intelligence
            </p>
          </div>

          {/* Diagram Area */}
          <div className="relative mx-auto w-full max-w-[1200px] overflow-x-auto overflow-y-hidden pb-12 scrollbar-none">
            <div className="relative mx-auto h-[600px] min-w-[1200px] select-none">
              
              {/* SVG Paths */}
              <svg className="absolute inset-0 z-0 h-full w-full pointer-events-none" aria-hidden="true">
                <defs>
                  <marker
                    id="arrow-right"
                    viewBox="0 0 10 10"
                    refX="9"
                    refY="5"
                    markerWidth="6"
                    markerHeight="6"
                    orient="auto-start-reverse"
                  >
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="#a1a1aa" opacity="0.6" />
                  </marker>
                  <marker
                    id="arrow-left"
                    viewBox="0 0 10 10"
                    refX="9"
                    refY="5"
                    markerWidth="6"
                    markerHeight="6"
                    orient="auto-start-reverse"
                  >
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="#a1a1aa" opacity="0.6" />
                  </marker>
                </defs>

                <g stroke="#a1a1aa" strokeWidth="1.5" fill="none" opacity="0.4" strokeLinecap="round" strokeLinejoin="round">
                  {/* Attack to CADE (midX = 247.5) */}
                  <path d="M 195 250 H 231.5 Q 247.5 250 247.5 266 V 309 Q 247.5 325 263.5 325 H 270" markerEnd="url(#arrow-right)" />
                  {/* Users to CADE */}
                  <path d="M 195 400 H 231.5 Q 247.5 400 247.5 384 V 341 Q 247.5 325 263.5 325 H 270" />
                  
                  {/* CADE to Logs (midX = 505) */}
                  <path d="M 455 325 H 489 Q 505 325 505 309 V 266 Q 505 250 521 250 H 540" markerEnd="url(#arrow-right)" />
                  {/* CADE to ML (midX = 505) */}
                  <path d="M 455 325 H 489 Q 505 325 505 341 V 384 Q 505 400 521 400 H 540" markerEnd="url(#arrow-right)" />
                  
                  {/* Logs to Threat (midX = 705) */}
                  <path d="M 680 250 H 689 Q 705 250 705 234 V 196 Q 705 180 721 180 H 730" markerEnd="url(#arrow-right)" />
                  
                  {/* ML to Web App (Left side) */}
                  <path d="M 680 400 H 689 Q 705 400 705 416 V 454 Q 705 470 721 470 H 730" markerEnd="url(#arrow-right)" />
                  
                  {/* Threat to Self Healing (Top) */}
                  <path d="M 950 180 H 1064 Q 1080 180 1080 196 V 293" markerEnd="url(#arrow-right)" />
                  
                  {/* Self Healing to Rule (Left-pointing) -> note: arrow-right will rotate since we draw right-to-left. 
                      Actually, a path from 995 to 950 points left. Arrow orient="auto" makes it follow perfectly! 
                      Wait, "auto-start-reverse" might need standard "auto". Let's change the marker's orient to "auto". */}
                  <path d="M 995 325 H 950" markerEnd="url(#arrow-right)" />
                  
                  {/* Self Healing to Web App (Right side) pointing Left */}
                  <path d="M 1080 357 V 454 Q 1080 470 1064 470 H 950" markerEnd="url(#arrow-right)" />
                  
                  {/* Rule to CADE (Left-pointing) */}
                  <path d="M 730 325 H 455" markerEnd="url(#arrow-right)" />
                </g>
              </svg>

              {/* Render Nodes */}
              {NODES.map((node) => {
                const isCade = node.id === "cade";
                return (
                  <div
                    key={node.id}
                    className="absolute z-10 flex items-center gap-3 rounded-2xl border bg-white/5 backdrop-blur-md px-4 py-3 sm:px-5 sm:py-3 transition-colors duration-300"
                    style={{
                      left: node.cx - node.w / 2,
                      top: node.cy - node.h / 2,
                      width: node.w,
                      height: node.h,
                      borderColor: "rgba(255,255,255,0.08)",
                      boxShadow: `0 0 40px -10px ${node.glow}, inset 0 0 20px -10px ${node.glow}`,
                    }}
                  >
                    {/* Inner static glow element for that soft colored ambient look */}
                    <div
                      className="absolute inset-0 -z-10 rounded-2xl opacity-60 mix-blend-screen pointer-events-none"
                      style={{
                        background: `radial-gradient(ellipse at center, ${node.glow} 0%, transparent 70%)`,
                      }}
                    />

                    {node.icon && (
                      <div
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-black/40 border border-white/5"
                        style={{ color: node.color }}
                      >
                        {node.icon}
                        {node.id === "threat" && (
                           <IoMdBug className="absolute text-[#f43f5e] size-3 ml-1 mt-1 opacity-80" />
                        )}
                      </div>
                    )}
                    
                    <span 
                      className="text-sm font-semibold tracking-wide whitespace-nowrap"
                      style={{ color: node.color }}
                    >
                      {node.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Footer Text */}
          <div className="mx-auto mt-16 max-w-4xl text-center">
            <p className="mb-6 text-[15px] leading-relaxed text-white/90 sm:text-base">
              CADE is an AI-driven AppSec solution that doesn't just detect vulnerabilities, it learns from real attack traffic and automatically remediates risk at the source.
            </p>
            <p className="text-[15px] leading-relaxed text-neutral-400 sm:text-base">
              It constantly monitors live application traffic, detects attack attempts, links them to vulnerable parts of your code, and responds by strengthening protection instantly.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

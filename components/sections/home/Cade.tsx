"use client";

import { useState } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { FaUserSecret } from "react-icons/fa";
import { TbBrain } from "react-icons/tb";
import { LuUser, LuFileText, LuNetwork, LuSettings, LuGlobe } from "react-icons/lu";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { FiHexagon } from "react-icons/fi";
import { IoMdBug } from "react-icons/io";

const NODES = [
  { id: "attack", label: "Attack", cx: 120, cy: 250, w: 150, h: 64, color: "#ef4444", glow: "rgba(239, 68, 68, 0.15)", icon: <FaUserSecret className="size-5" />, description: "Malicious payloads, zero-day exploits, and probing attempts targeting your infrastructure." },
  { id: "users", label: "Users", cx: 120, cy: 400, w: 150, h: 64, color: "#d4d4d8", glow: "rgba(255, 255, 255, 0.05)", icon: <LuUser className="size-5" />, description: "Legitimate user traffic flowing smoothly and securely into the application." },
  { id: "cade", label: "CADE Engine", cx: 360, cy: 325, w: 190, h: 72, color: "#60a5fa", glow: "rgba(96, 165, 250, 0.2)", icon: <LuNetwork className="size-6" />, description: "Context Aware Defense Enforcer continuously monitors, processes, and evaluates all incoming requests." },
  { id: "logs", label: "Incident Logs", cx: 590, cy: 250, w: 180, h: 64, color: "#22d3ee", glow: "rgba(34, 211, 238, 0.15)", icon: <LuFileText className="size-5" />, description: "Suspicious requests are immediately flagged, isolated, and logged for deep analysis." },
  { id: "ml", label: "ML Engine", cx: 590, cy: 400, w: 180, h: 64, color: "#c084fc", glow: "rgba(192, 132, 252, 0.15)", icon: <TbBrain className="size-5" />, description: "Application baseline behavior is continually learned to distinguish good traffic from novel attacks." },
  { id: "threat", label: "AI Threat Analysis", cx: 840, cy: 180, w: 220, h: 64, color: "#f43f5e", glow: "rgba(244, 63, 94, 0.15)", icon: <HiMagnifyingGlass className="size-5" />, description: "Heuristic models and AI break down attack vectors in real space to understand the attacker's intent." },
  { id: "rule", label: "AI Generated Rule", cx: 840, cy: 325, w: 220, h: 64, color: "#fbbf24", glow: "rgba(251, 191, 36, 0.15)", icon: <LuSettings className="size-5" />, description: "Custom WAF rules and virtual patches are dynamically synthesized on the fly." },
  { id: "webapp", label: "Web Application", cx: 840, cy: 470, w: 220, h: 64, color: "#4ade80", glow: "rgba(74, 222, 128, 0.15)", icon: <LuGlobe className="size-5" />, description: "Your core system stays completely online, highly performant, and automatically protected." },
  { id: "heal", label: "Self Healing", cx: 1080, cy: 325, w: 170, h: 64, color: "#2dd4bf", glow: "rgba(45, 212, 191, 0.15)", icon: <FiHexagon className="size-5" />, description: "Newly generated rules are autonomously hot-swapped into the engine, fixing vulnerabilities instantly." },
];

export default function Cade() {
  const { ref: sectionRef, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  return (
    <section id="cade" className="w-full bg-background pt-10 pb-12 md:pt-16 md:pb-20 lg:pt-20 lg:pb-24 relative overflow-hidden">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          ref={sectionRef}
          className={`transition-all duration-700 ease-out motion-reduce:transition-none ${isIntersecting ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
        >
          {/* Header */}
          <div className="mb-0 sm:mb-2 flex flex-col items-center text-center max-w-4xl mx-auto">
            <div className="mb-5 inline-flex uppercase tracking-[0.2em] text-[11px] sm:text-xs font-bold text-blue-400 bg-blue-400/10 border border-blue-400/20 px-4 py-1.5 rounded-full">
              Autonomous AI Engine
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-5xl font-bold leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/60 mb-5">
              Context Aware Defense Enforcer
            </h2>
            <p className="text-base sm:text-lg font-medium leading-relaxed text-neutral-400">
              Our proprietary CADE engine continually analyzes runtime behavior, identifies critical threats, and autonomously applies remediation.
            </p>
          </div>

          {/* Diagram Area */}
          <div 
            className="relative mx-auto w-full max-w-[1200px] overflow-x-auto overflow-y-hidden pt-0 pb-6 -mt-20 -mb-4 [&::-webkit-scrollbar]:h-2.5 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-white/5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-white/10 hover:[&::-webkit-scrollbar-thumb]:bg-white/20 transition-all font-sans"
          >
            <div className="relative mx-auto h-[620px] min-w-[1200px] select-none">

              {/* SVG Paths */}
              <svg className="absolute inset-0 z-0 h-full w-full pointer-events-none" aria-hidden="true">
                <defs>
                  <marker
                    id="arrow-end"
                    viewBox="0 0 10 10"
                    refX="9"
                    refY="5"
                    markerWidth="6"
                    markerHeight="6"
                    orient="auto"
                  >
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="#a1a1aa" opacity="0.6" />
                  </marker>
                </defs>

                <g stroke="#a1a1aa" strokeWidth="1.5" fill="none" opacity="0.25" strokeLinecap="round" strokeLinejoin="round">
                  {/* Attack to CADE */}
                  <path d="M 195 250 H 215 Q 230 250 230 265 V 310 Q 230 325 245 325 H 265" markerEnd="url(#arrow-end)" />
                  {/* Users to CADE */}
                  <path d="M 195 400 H 215 Q 230 400 230 385 V 340 Q 230 325 245 325 H 265" markerEnd="url(#arrow-end)" />

                  {/* CADE to Logs */}
                  <path d="M 455 305 H 462.5 Q 477.5 305 477.5 290 V 265 Q 477.5 250 492.5 250 H 500" markerEnd="url(#arrow-end)" />
                  {/* CADE to ML */}
                  <path d="M 455 345 H 462.5 Q 477.5 345 477.5 360 V 385 Q 477.5 400 492.5 400 H 500" markerEnd="url(#arrow-end)" />

                  {/* Logs to Threat */}
                  <path d="M 680 250 H 690 Q 705 250 705 235 V 195 Q 705 180 720 180 H 730" markerEnd="url(#arrow-end)" />

                  {/* ML to Web App */}
                  <path d="M 680 400 H 690 Q 705 400 705 415 V 455 Q 705 470 720 470 H 730" markerEnd="url(#arrow-end)" />

                  {/* Threat to Self Healing */}
                  <path d="M 950 180 H 1065 Q 1080 180 1080 195 V 293" markerEnd="url(#arrow-end)" />

                  {/* Self Healing to Rule */}
                  <path d="M 995 325 H 950" markerEnd="url(#arrow-end)" />

                  {/* Self Healing to Web App */}
                  <path d="M 1080 357 V 455 Q 1080 470 1065 470 H 950" markerEnd="url(#arrow-end)" />

                  {/* Rule to CADE */}
                  <path d="M 730 325 H 455" markerEnd="url(#arrow-end)" />
                </g>

                {/* Animated Data Flow Lines */}
                <g strokeWidth="2" fill="none" strokeDasharray="6 8" strokeLinecap="round" strokeLinejoin="round" opacity="0.7">
                  {/* Attack to CADE */}
                  <path d="M 195 250 H 215 Q 230 250 230 265 V 310 Q 230 325 245 325 H 265" stroke="#ef4444">
                    <animate attributeName="stroke-dashoffset" from="100" to="0" dur="2s" repeatCount="indefinite" />
                  </path>
                  {/* Users to CADE */}
                  <path d="M 195 400 H 215 Q 230 400 230 385 V 340 Q 230 325 245 325 H 265" stroke="#d4d4d8">
                    <animate attributeName="stroke-dashoffset" from="100" to="0" dur="2.5s" repeatCount="indefinite" />
                  </path>
                  {/* CADE to Logs */}
                  <path d="M 455 305 H 462.5 Q 477.5 305 477.5 290 V 265 Q 477.5 250 492.5 250 H 500" stroke="#22d3ee">
                    <animate attributeName="stroke-dashoffset" from="100" to="0" dur="1.5s" repeatCount="indefinite" />
                  </path>
                  {/* CADE to ML */}
                  <path d="M 455 345 H 462.5 Q 477.5 345 477.5 360 V 385 Q 477.5 400 492.5 400 H 500" stroke="#c084fc">
                    <animate attributeName="stroke-dashoffset" from="100" to="0" dur="1.5s" repeatCount="indefinite" />
                  </path>
                  {/* Logs to Threat */}
                  <path d="M 680 250 H 690 Q 705 250 705 235 V 195 Q 705 180 720 180 H 730" stroke="#f43f5e">
                    <animate attributeName="stroke-dashoffset" from="100" to="0" dur="1.5s" repeatCount="indefinite" />
                  </path>
                  {/* ML to Web App */}
                  <path d="M 680 400 H 690 Q 705 400 705 415 V 455 Q 705 470 720 470 H 730" stroke="#4ade80">
                    <animate attributeName="stroke-dashoffset" from="100" to="0" dur="2s" repeatCount="indefinite" />
                  </path>
                  {/* Threat to Self Healing */}
                  <path d="M 950 180 H 1065 Q 1080 180 1080 195 V 293" stroke="#2dd4bf">
                    <animate attributeName="stroke-dashoffset" from="100" to="0" dur="1.5s" repeatCount="indefinite" />
                  </path>
                  {/* Self Healing to Rule */}
                  <path d="M 995 325 H 950" stroke="#fbbf24">
                    <animate attributeName="stroke-dashoffset" from="100" to="0" dur="1s" repeatCount="indefinite" />
                  </path>
                  {/* Self Healing to Web App */}
                  <path d="M 1080 357 V 455 Q 1080 470 1065 470 H 950" stroke="#4ade80">
                    <animate attributeName="stroke-dashoffset" from="100" to="0" dur="2.5s" repeatCount="indefinite" />
                  </path>
                  {/* Rule to CADE */}
                  <path d="M 730 325 H 455" stroke="#60a5fa">
                    <animate attributeName="stroke-dashoffset" from="100" to="0" dur="2s" repeatCount="indefinite" />
                  </path>
                </g>
              </svg>

              {/* Render Nodes */}
              {NODES.map((node) => {
                const isCade = node.id === "cade";
                const isHovered = hoveredNode === node.id;
                const isLeft = node.cx < 300;
                const isRight = node.cx > 800;

                return (
                  <div
                    key={node.id}
                    onMouseEnter={() => setHoveredNode(node.id)}
                    onMouseLeave={() => setHoveredNode(null)}
                    className="absolute flex items-center gap-3 transition-all duration-300 pointer-events-auto"
                    style={{
                      left: node.cx - node.w / 2,
                      top: node.cy - node.h / 2,
                      width: node.w,
                      height: node.h,
                      zIndex: isHovered ? 50 : 10,
                    }}
                  >
                    {/* Soft Ambient Core Glow */}
                    <div 
                      className="absolute left-0 top-0 w-full h-full -z-10 rounded-2xl blur-[28px] transition-all duration-500 pointer-events-none"
                      style={{
                        backgroundColor: node.color,
                        opacity: isHovered ? 0.35 : 0.12,
                        transform: isHovered ? 'scale(1.1) translateY(4px)' : 'scale(1)',
                      }}
                    />

                    {/* Node Box */}
                    <div 
                      className={`relative w-full h-full flex items-center gap-3 rounded-2xl border bg-[#050505] backdrop-blur-xl px-4 sm:px-5 cursor-default transition-all duration-300 ${
                        isHovered ? 'scale-105 -translate-y-1 shadow-[0_15px_30px_-5px_rgba(0,0,0,0.8)]' : ''
                      }`}
                      style={{
                        borderColor: isHovered ? `${node.color}80` : (isCade ? "rgba(96, 165, 250, 0.4)" : "rgba(255,255,255,0.08)"),
                        boxShadow: isHovered ? `0 0 20px -5px ${node.color}30, inset 0 0 15px -10px ${node.color}20` : `inset 0 0 20px -10px transparent`,
                      }}
                    >
                      {isCade && (
                        <>
                          <div className="absolute inset-0 -z-20 rounded-2xl bg-blue-500/10 blur-xl animate-pulse" />
                          <div className="absolute -inset-2 -z-20 rounded-[24px] border border-blue-500/20 animate-ping" style={{ animationDuration: '3s' }} />
                        </>
                      )}

                      {/* Inner static glow element for that soft colored ambient look */}
                      <div
                        className={`absolute inset-0 -z-10 rounded-2xl mix-blend-screen pointer-events-none transition-opacity duration-300 ${
                          isHovered ? 'opacity-30' : 'opacity-60'
                        }`}
                        style={{
                          background: `radial-gradient(ellipse at center, ${node.glow} 0%, transparent 70%)`,
                        }}
                      />

                      {node.icon && (
                        <div
                          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-black/60 border transition-all duration-300 ${
                            isHovered ? 'border-white/20' : 'border-white/5'
                          }`}
                          style={{
                            color: node.color,
                            boxShadow: isHovered ? `0 0 15px -5px ${node.color}60` : 'none'
                          }}
                        >
                          {node.icon}
                          {node.id === "threat" && (
                            <IoMdBug className="absolute text-[#f43f5e] size-3 ml-1 mt-1 opacity-80" />
                          )}
                        </div>
                      )}

                      <span
                        className="text-sm font-bold tracking-wide whitespace-nowrap transition-all duration-300"
                        style={{ 
                          color: isHovered ? '#ffffff' : node.color,
                          textShadow: isHovered ? `0 0 10px ${node.color}80` : 'none'
                        }}
                      >
                        {node.label}
                      </span>
                    </div>
                    {/* Native Tooltip Popover */}
                    <div 
                      className={`absolute w-[280px] p-5 rounded-xl border bg-[#0c0c0e]/95 backdrop-blur-xl transition-all duration-300 pointer-events-none ${
                        isLeft ? 'origin-top-left left-0' : isRight ? 'origin-top-right right-0' : 'origin-top left-1/2 -translate-x-1/2'
                      } ${
                        isHovered ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-2 scale-95'
                      }`}
                      style={{
                        top: 'calc(100% + 12px)',
                        borderColor: `${node.color}50`,
                        boxShadow: `0 20px 40px -10px rgba(0,0,0,0.8), 0 0 20px -5px ${node.color}30`
                      }}
                    >
                      {/* Tooltip caret */}
                      <div 
                        className="absolute -top-[7px] w-3 h-3 border-t border-l bg-[#0c0c0e]" 
                        style={{ 
                          borderColor: `${node.color}50`,
                          ...(isLeft ? { left: node.w / 2, transform: 'translateX(-50%) rotate(45deg)' } 
                           : isRight ? { right: node.w / 2, transform: 'translate(50%, 0) rotate(45deg)' }
                           : { left: '50%', transform: 'translateX(-50%) rotate(45deg)' })
                        }} 
                      />
                      <h4 className="text-[13px] font-bold mb-1.5 uppercase tracking-widest relative z-10" style={{ color: node.color }}>
                        {node.label} Status
                      </h4>
                      <p className="text-[13px] text-neutral-300 leading-relaxed font-medium relative z-10">
                        {node.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Integrated Footer Banner */}
          <div className="relative mx-auto mt-0 max-w-5xl px-4 sm:px-6">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#050505]/40 backdrop-blur-xl p-8 sm:p-10 shadow-2xl">
              {/* Subtle thematic glow inside the footer */}
              <div className="absolute -top-24 -right-24 -z-10 h-64 w-64 rounded-full bg-blue-500/10 blur-[80px]" />
              <div className="absolute -bottom-24 -left-24 -z-10 h-64 w-64 rounded-full bg-teal-500/10 blur-[80px]" />
              
              <div className="flex flex-col items-center justify-between gap-6 text-center lg:flex-row lg:text-left">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-blue-400">
                  <FiHexagon className="size-6" />
                </div>
                <div className="flex-1 space-y-2">
                  <p className="text-lg font-semibold text-white tracking-wide">
                    Continuous Zero-Day Protection
                  </p>
                  <p className="text-[15px] leading-relaxed text-neutral-400 max-w-3xl">
                    CADE doesn&apos;t just detect vulnerabilities—it learns from real attack traffic in production, continuously isolating threats, and automatically hot-swapping defenses at the source.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

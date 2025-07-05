"use client"

import { useEffect, useState } from "react"

const techIcons = [
  { name: "React", symbol: "⚛", position: { top: "18%", right: "35%" }, size: "large" },
  { name: "JavaScript", symbol: "JS", position: { top: "28%", right: "15%" }, size: "large" },
  { name: "TypeScript", symbol: "TS", position: { top: "45%", right: "25%" }, size: "large" },
  { name: "AWS", symbol: "aws", position: { top: "38%", right: "8%" }, size: "medium" },
  { name: "GitHub", symbol: "⚡", position: { top: "58%", right: "18%" }, size: "medium" },
  { name: "Vue", symbol: "V", position: { top: "35%", right: "42%" }, size: "medium" },
  { name: "Node", symbol: "N", position: { top: "22%", right: "48%" }, size: "small" },
  { name: "Python", symbol: "Py", position: { top: "52%", right: "35%" }, size: "small" },
  { name: "Docker", symbol: "🐳", position: { top: "65%", right: "28%" }, size: "small" },
  { name: "CSS", symbol: "C", position: { top: "48%", right: "45%" }, size: "small" },
]

export function SinashoTechGrid() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Grid pattern - exact replica */}
      <svg className="absolute inset-0 w-full h-full opacity-20" style={{ right: "5%" }}>
        <defs>
          <pattern id="sinasho-grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="50%" height="100%" x="50%" fill="url(#sinasho-grid)" />

        {/* Connection lines between icons */}
        <g stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" fill="none" className="animate-pulse">
          <line x1="65%" y1="28%" x2="75%" y2="18%" />
          <line x1="75%" y1="18%" x2="85%" y2="35%" />
          <line x1="85%" y1="35%" x2="75%" y2="45%" />
          <line x1="75%" y1="45%" x2="82%" y2="58%" />
          <line x1="82%" y1="58%" x2="72%" y2="65%" />
          <line x1="65%" y1="28%" x2="75%" y2="45%" />
          <line x1="85%" y1="35%" x2="92%" y2="22%" />
        </g>
      </svg>

      {/* Tech Icons with exact positioning */}
      {techIcons.map((icon, index) => (
        <div
          key={icon.name}
          className="absolute animate-float-subtle"
          style={{
            ...icon.position,
            animationDelay: `${index * 0.2}s`,
            animationDuration: `${6 + (index % 3)}s`,
          }}
        >
          <div
            className={`
              ${
                icon.size === "large"
                  ? "w-16 h-16 text-lg"
                  : icon.size === "medium"
                    ? "w-12 h-12 text-sm"
                    : "w-10 h-10 text-xs"
              }
              bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl 
              flex items-center justify-center text-white font-bold 
              hover:bg-white/20 hover:scale-110 transition-all duration-300 
              shadow-lg hover:shadow-xl cursor-pointer
            `}
          >
            {icon.symbol}
          </div>
        </div>
      ))}

      {/* Floating particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-float-particle"
            style={{
              left: `${50 + Math.random() * 45}%`,
              top: `${20 + Math.random() * 60}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>
    </div>
  )
}

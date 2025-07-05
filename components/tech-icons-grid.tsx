"use client"

import { useEffect, useState } from "react"

const techIcons = [
  { name: "Python", symbol: "Py", position: { top: "15%", right: "20%" } },
  { name: "JavaScript", symbol: "JS", position: { top: "25%", right: "15%" } },
  { name: "TypeScript", symbol: "TS", position: { top: "35%", right: "25%" } },
  { name: "React", symbol: "⚛", position: { top: "20%", right: "35%" } },
  { name: "HTML", symbol: "H", position: { top: "45%", right: "20%" } },
  { name: "CSS", symbol: "C", position: { top: "55%", right: "30%" }, small: true },
  { name: "C++", symbol: "C++", position: { top: "40%", right: "10%" }, small: true },
  { name: "GitHub", symbol: "⚡", position: { top: "60%", right: "15%" } },
  { name: "Node", symbol: "N", position: { top: "30%", right: "40%" } },
  { name: "Kotlin", symbol: "K", position: { top: "50%", right: "40%" } },
]

export function TechIconsGrid() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Grid Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-20" style={{ right: "10%" }}>
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />

        {/* Connection Lines */}
        <g stroke="rgba(255,255,255,0.2)" strokeWidth="1" fill="none">
          <line x1="70%" y1="20%" x2="80%" y2="30%" />
          <line x1="80%" y1="30%" x2="75%" y2="45%" />
          <line x1="75%" y1="45%" x2="85%" y2="55%" />
          <line x1="85%" y1="40%" x2="90%" y2="25%" />
          <line x1="75%" y1="35%" x2="85%" y2="40%" />
        </g>
      </svg>

      {/* Tech Icons */}
      {techIcons.map((icon, index) => (
        <div
          key={icon.name}
          className="absolute animate-float"
          style={{
            ...icon.position,
            animationDelay: `${index * 0.3}s`,
            animationDuration: `${4 + (index % 2)}s`,
          }}
        >
          <div
            className={`${
              icon.small ? "w-10 h-10 text-xs" : "w-14 h-14 text-sm"
            } bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center text-white font-bold hover:bg-white/20 transition-all duration-300 hover:scale-110`}
          >
            {icon.symbol}
          </div>
        </div>
      ))}

      {/* Additional Decorative Elements */}
      <div className="absolute top-1/4 right-1/3 w-3 h-3 bg-purple-400 rounded-full animate-pulse opacity-60"></div>
      <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-40 delay-1000"></div>
      <div className="absolute top-2/3 right-1/3 w-4 h-4 bg-pink-400 rounded-full animate-pulse opacity-50 delay-2000"></div>
    </div>
  )
}

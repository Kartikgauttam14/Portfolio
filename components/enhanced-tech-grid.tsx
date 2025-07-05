"use client"

import { useEffect, useState } from "react"

const techIcons = [
  { name: "Python", symbol: "Py", position: { top: "15%", right: "20%" }, color: "from-yellow-400 to-yellow-600" },
  { name: "JavaScript", symbol: "JS", position: { top: "25%", right: "15%" }, color: "from-yellow-300 to-orange-500" },
  { name: "TypeScript", symbol: "TS", position: { top: "35%", right: "25%" }, color: "from-blue-400 to-blue-600" },
  { name: "React", symbol: "⚛", position: { top: "20%", right: "35%" }, color: "from-cyan-400 to-blue-500" },
  { name: "HTML", symbol: "H", position: { top: "45%", right: "20%" }, color: "from-orange-400 to-red-500" },
  {
    name: "CSS",
    symbol: "C",
    position: { top: "55%", right: "30%" },
    small: true,
    color: "from-blue-400 to-purple-500",
  },
  {
    name: "C++",
    symbol: "C++",
    position: { top: "40%", right: "10%" },
    small: true,
    color: "from-blue-500 to-purple-600",
  },
  { name: "GitHub", symbol: "⚡", position: { top: "60%", right: "15%" }, color: "from-gray-400 to-gray-600" },
  { name: "Node", symbol: "N", position: { top: "30%", right: "40%" }, color: "from-green-400 to-green-600" },
  { name: "Kotlin", symbol: "K", position: { top: "50%", right: "40%" }, color: "from-purple-400 to-pink-500" },
]

export function EnhancedTechGrid() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Enhanced Grid Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-30" style={{ right: "10%" }}>
        <defs>
          <pattern id="enhanced-grid" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
          </pattern>
          <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(168,85,247,0.4)" />
            <stop offset="50%" stopColor="rgba(236,72,153,0.4)" />
            <stop offset="100%" stopColor="rgba(59,130,246,0.4)" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#enhanced-grid)" />

        {/* Enhanced Connection Lines */}
        <g stroke="url(#line-gradient)" strokeWidth="2" fill="none" className="animate-pulse">
          <line x1="70%" y1="20%" x2="80%" y2="30%" />
          <line x1="80%" y1="30%" x2="75%" y2="45%" />
          <line x1="75%" y1="45%" x2="85%" y2="55%" />
          <line x1="85%" y1="40%" x2="90%" y2="25%" />
          <line x1="75%" y1="35%" x2="85%" y2="40%" />
        </g>
      </svg>

      {/* Enhanced Tech Icons */}
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
              icon.small ? "w-12 h-12 text-xs" : "w-16 h-16 text-sm"
            } bg-gradient-to-br ${icon.color} backdrop-blur-sm border border-white/30 rounded-2xl flex items-center justify-center text-white font-bold hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-lg cursor-pointer group`}
          >
            <span className="group-hover:scale-110 transition-transform">{icon.symbol}</span>
          </div>
        </div>
      ))}

      {/* Enhanced Decorative Elements */}
      <div className="absolute top-1/4 right-1/3 w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse opacity-80 shadow-lg"></div>
      <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-pulse opacity-60 delay-1000 shadow-lg"></div>
      <div className="absolute top-2/3 right-1/3 w-5 h-5 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full animate-pulse opacity-70 delay-2000 shadow-lg"></div>
    </div>
  )
}

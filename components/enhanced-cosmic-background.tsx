"use client"

import { useEffect, useState } from "react"

export function EnhancedCosmicBackground() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Main Aurora Effect */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[1000px] h-[700px]">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/50 via-pink-500/40 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/40 via-purple-500/50 to-transparent rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/30 via-blue-500/40 to-transparent rounded-full blur-xl animate-pulse delay-2000"></div>
      </div>

      {/* Secondary Light Effects */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/25 rounded-full blur-3xl animate-pulse delay-2000"></div>
      <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-3000"></div>
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-pink-500/15 rounded-full blur-2xl animate-pulse delay-4000"></div>

      {/* Enhanced Starfield */}
      <div className="absolute inset-0">
        {Array.from({ length: 100 }).map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full animate-pulse"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
              opacity: Math.random() * 0.8 + 0.2,
            }}
          />
        ))}
      </div>

      {/* Floating Orbs */}
      <div className="absolute inset-0">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-4 h-4 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full blur-sm animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>
    </div>
  )
}

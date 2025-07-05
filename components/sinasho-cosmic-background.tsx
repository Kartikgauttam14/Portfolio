"use client"

import { useEffect, useState } from "react"

export function SinashoCosmicBackground() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Main Aurora Arc Effect - Exact replica */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[1400px] h-[800px] -translate-y-32">
        {/* Primary aurora layer */}
        <div
          className="absolute inset-0 opacity-80"
          style={{
            background: `radial-gradient(ellipse 70% 50% at 50% 80%, 
              rgba(255, 255, 255, 0.8) 0%, 
              rgba(255, 255, 255, 0.6) 10%, 
              rgba(168, 85, 247, 0.8) 25%, 
              rgba(147, 51, 234, 0.6) 40%, 
              rgba(126, 34, 206, 0.4) 55%, 
              rgba(88, 28, 135, 0.2) 70%, 
              transparent 85%
            )`,
            filter: "blur(2px)",
          }}
        />

        {/* Secondary glow layer */}
        <div
          className="absolute inset-0 opacity-60"
          style={{
            background: `radial-gradient(ellipse 80% 60% at 50% 85%, 
              rgba(255, 255, 255, 0.4) 0%, 
              rgba(236, 72, 153, 0.6) 20%, 
              rgba(168, 85, 247, 0.5) 35%, 
              rgba(124, 58, 237, 0.3) 50%, 
              transparent 70%
            )`,
            filter: "blur(4px)",
          }}
        />

        {/* Outer glow */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background: `radial-gradient(ellipse 90% 70% at 50% 90%, 
              rgba(168, 85, 247, 0.3) 0%, 
              rgba(147, 51, 234, 0.2) 30%, 
              rgba(88, 28, 135, 0.1) 50%, 
              transparent 70%
            )`,
            filter: "blur(8px)",
          }}
        />
      </div>

      {/* Starfield - exact positioning */}
      <div className="absolute inset-0">
        {/* Large stars */}
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={`large-${i}`}
            className="absolute w-1 h-1 bg-white rounded-full opacity-80"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `twinkle ${2 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}

        {/* Medium stars */}
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={`medium-${i}`}
            className="absolute w-0.5 h-0.5 bg-white rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `twinkle ${3 + Math.random() * 2}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}

        {/* Small stars */}
        {Array.from({ length: 80 }).map((_, i) => (
          <div
            key={`small-${i}`}
            className="absolute w-px h-px bg-white rounded-full opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `twinkle ${4 + Math.random() * 2}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Additional atmospheric effects */}
      <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl animate-pulse opacity-60" />
      <div
        className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl animate-pulse opacity-40"
        style={{ animationDelay: "2s" }}
      />
    </div>
  )
}

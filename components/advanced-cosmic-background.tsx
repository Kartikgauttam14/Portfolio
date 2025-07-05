"use client"

import { useEffect, useState, useRef } from "react"

export function AdvancedCosmicBackground() {
  const [mounted, setMounted] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)

    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        })
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  if (!mounted) return null

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      {/* Enhanced Aurora Arc with mouse parallax */}
      <div
        className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[1600px] h-[900px] -translate-y-32 transition-transform duration-1000 ease-out"
        style={{
          transform: `translate(-50%, -8rem) translate(${mousePosition.x * 20}px, ${mousePosition.y * 10}px)`,
        }}
      >
        {/* Primary aurora layer with enhanced glow */}
        <div
          className="absolute inset-0 opacity-90 animate-aurora-pulse"
          style={{
            background: `radial-gradient(ellipse 75% 55% at 50% 80%, 
              rgba(255, 255, 255, 0.9) 0%, 
              rgba(255, 255, 255, 0.7) 8%, 
              rgba(168, 85, 247, 0.9) 22%, 
              rgba(147, 51, 234, 0.7) 38%, 
              rgba(126, 34, 206, 0.5) 52%, 
              rgba(88, 28, 135, 0.3) 68%, 
              transparent 82%
            )`,
            filter: "blur(1px)",
          }}
        />

        {/* Secondary glow with color shifting */}
        <div
          className="absolute inset-0 opacity-70 animate-aurora-shift"
          style={{
            background: `radial-gradient(ellipse 85% 65% at 50% 85%, 
              rgba(255, 255, 255, 0.5) 0%, 
              rgba(236, 72, 153, 0.7) 18%, 
              rgba(168, 85, 247, 0.6) 32%, 
              rgba(124, 58, 237, 0.4) 48%, 
              rgba(59, 130, 246, 0.2) 65%, 
              transparent 75%
            )`,
            filter: "blur(3px)",
          }}
        />

        {/* Outer atmospheric glow */}
        <div
          className="absolute inset-0 opacity-50 animate-aurora-drift"
          style={{
            background: `radial-gradient(ellipse 95% 75% at 50% 90%, 
              rgba(168, 85, 247, 0.4) 0%, 
              rgba(147, 51, 234, 0.3) 25%, 
              rgba(88, 28, 135, 0.2) 45%, 
              rgba(59, 130, 246, 0.1) 65%, 
              transparent 75%
            )`,
            filter: "blur(6px)",
          }}
        />

        {/* Inner bright core */}
        <div
          className="absolute inset-0 opacity-60 animate-aurora-core"
          style={{
            background: `radial-gradient(ellipse 60% 40% at 50% 75%, 
              rgba(255, 255, 255, 0.8) 0%, 
              rgba(255, 255, 255, 0.4) 15%, 
              rgba(168, 85, 247, 0.3) 35%, 
              transparent 50%
            )`,
            filter: "blur(0.5px)",
          }}
        />
      </div>

      {/* Enhanced Starfield with parallax layers */}
      <div className="absolute inset-0">
        {/* Background stars (slowest parallax) */}
        <div
          className="absolute inset-0"
          style={{
            transform: `translate(${mousePosition.x * 5}px, ${mousePosition.y * 3}px)`,
            transition: "transform 0.5s ease-out",
          }}
        >
          {Array.from({ length: 40 }).map((_, i) => (
            <div
              key={`bg-star-${i}`}
              className="absolute bg-white rounded-full animate-twinkle-slow opacity-40"
              style={{
                width: `${1 + Math.random() * 2}px`,
                height: `${1 + Math.random() * 2}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${4 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>

        {/* Midground stars */}
        <div
          className="absolute inset-0"
          style={{
            transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 6}px)`,
            transition: "transform 0.3s ease-out",
          }}
        >
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={`mid-star-${i}`}
              className="absolute bg-white rounded-full animate-twinkle opacity-60"
              style={{
                width: `${1.5 + Math.random() * 2}px`,
                height: `${1.5 + Math.random() * 2}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        {/* Foreground stars (fastest parallax) */}
        <div
          className="absolute inset-0"
          style={{
            transform: `translate(${mousePosition.x * 15}px, ${mousePosition.y * 10}px)`,
            transition: "transform 0.2s ease-out",
          }}
        >
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={`fg-star-${i}`}
              className="absolute bg-white rounded-full animate-twinkle-fast opacity-80"
              style={{
                width: `${2 + Math.random() * 2}px`,
                height: `${2 + Math.random() * 2}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
                boxShadow: "0 0 6px rgba(255, 255, 255, 0.8)",
              }}
            />
          ))}
        </div>
      </div>

      {/* Floating cosmic dust particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={`dust-${i}`}
            className="absolute rounded-full animate-float-cosmic opacity-30"
            style={{
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
              background: `radial-gradient(circle, rgba(168, 85, 247, 0.6) 0%, transparent 70%)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
              filter: "blur(1px)",
            }}
          />
        ))}
      </div>

      {/* Nebula clouds */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full animate-nebula-drift"
          style={{
            background: "radial-gradient(circle, rgba(168, 85, 247, 0.3) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        <div
          className="absolute bottom-1/3 left-1/4 w-80 h-80 rounded-full animate-nebula-drift-reverse"
          style={{
            background: "radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%)",
            filter: "blur(35px)",
            animationDelay: "3s",
          }}
        />
        <div
          className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full animate-nebula-pulse"
          style={{
            background: "radial-gradient(circle, rgba(236, 72, 153, 0.2) 0%, transparent 70%)",
            filter: "blur(30px)",
            animationDelay: "1.5s",
          }}
        />
      </div>
    </div>
  )
}

"use client"

import { useEffect, useState, useRef } from "react"

export function PremiumCosmicBackground() {
  const [mounted, setMounted] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollY, setScrollY] = useState(0)
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

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  if (!mounted) return null

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      {/* Main Aurora with enhanced parallax */}
      <div
        className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[1800px] h-[1000px] -translate-y-40"
        style={{
          transform: `translate(-50%, -10rem) translate(${mousePosition.x * 30}px, ${mousePosition.y * 15}px) translateY(${scrollY * 0.1}px)`,
          transition: "transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        }}
      >
        {/* Core aurora with breathing effect */}
        <div
          className="absolute inset-0 opacity-95 animate-aurora-breathe"
          style={{
            background: `radial-gradient(ellipse 80% 60% at 50% 80%, 
              rgba(255, 255, 255, 1) 0%, 
              rgba(255, 255, 255, 0.8) 5%, 
              rgba(168, 85, 247, 0.95) 20%, 
              rgba(147, 51, 234, 0.8) 35%, 
              rgba(126, 34, 206, 0.6) 50%, 
              rgba(88, 28, 135, 0.4) 65%, 
              transparent 80%
            )`,
            filter: "blur(0.5px)",
          }}
        />

        {/* Secondary glow with color morphing */}
        <div
          className="absolute inset-0 opacity-80 animate-aurora-morph"
          style={{
            background: `radial-gradient(ellipse 90% 70% at 50% 85%, 
              rgba(255, 255, 255, 0.6) 0%, 
              rgba(236, 72, 153, 0.8) 15%, 
              rgba(168, 85, 247, 0.7) 30%, 
              rgba(124, 58, 237, 0.5) 45%, 
              rgba(59, 130, 246, 0.3) 60%, 
              transparent 75%
            )`,
            filter: "blur(2px)",
          }}
        />

        {/* Outer atmospheric layer */}
        <div
          className="absolute inset-0 opacity-60 animate-aurora-drift-enhanced"
          style={{
            background: `radial-gradient(ellipse 100% 80% at 50% 90%, 
              rgba(168, 85, 247, 0.5) 0%, 
              rgba(147, 51, 234, 0.4) 20%, 
              rgba(88, 28, 135, 0.3) 40%, 
              rgba(59, 130, 246, 0.2) 60%, 
              rgba(16, 185, 129, 0.1) 80%, 
              transparent 85%
            )`,
            filter: "blur(4px)",
          }}
        />

        {/* Inner bright core with pulsing */}
        <div
          className="absolute inset-0 opacity-70 animate-aurora-pulse-core"
          style={{
            background: `radial-gradient(ellipse 65% 45% at 50% 75%, 
              rgba(255, 255, 255, 0.9) 0%, 
              rgba(255, 255, 255, 0.5) 10%, 
              rgba(168, 85, 247, 0.4) 25%, 
              rgba(236, 72, 153, 0.2) 40%, 
              transparent 50%
            )`,
            filter: "blur(0.3px)",
          }}
        />
      </div>

      {/* Enhanced multi-layer starfield */}
      <div className="absolute inset-0">
        {/* Deep background stars */}
        <div
          className="absolute inset-0"
          style={{
            transform: `translate(${mousePosition.x * 3}px, ${mousePosition.y * 2}px) translateY(${scrollY * 0.05}px)`,
            transition: "transform 0.8s ease-out",
          }}
        >
          {Array.from({ length: 60 }).map((_, i) => (
            <div
              key={`deep-star-${i}`}
              className="absolute bg-white rounded-full animate-twinkle-deep opacity-30"
              style={{
                width: `${0.5 + Math.random() * 1.5}px`,
                height: `${0.5 + Math.random() * 1.5}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${5 + Math.random() * 4}s`,
                boxShadow: "0 0 2px rgba(255, 255, 255, 0.3)",
              }}
            />
          ))}
        </div>

        {/* Mid-layer stars */}
        <div
          className="absolute inset-0"
          style={{
            transform: `translate(${mousePosition.x * 8}px, ${mousePosition.y * 5}px) translateY(${scrollY * 0.1}px)`,
            transition: "transform 0.6s ease-out",
          }}
        >
          {Array.from({ length: 40 }).map((_, i) => (
            <div
              key={`mid-star-${i}`}
              className="absolute bg-white rounded-full animate-twinkle-mid opacity-50"
              style={{
                width: `${1 + Math.random() * 2}px`,
                height: `${1 + Math.random() * 2}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${3 + Math.random() * 3}s`,
                boxShadow: "0 0 4px rgba(255, 255, 255, 0.5)",
              }}
            />
          ))}
        </div>

        {/* Foreground bright stars */}
        <div
          className="absolute inset-0"
          style={{
            transform: `translate(${mousePosition.x * 15}px, ${mousePosition.y * 10}px) translateY(${scrollY * 0.15}px)`,
            transition: "transform 0.4s ease-out",
          }}
        >
          {Array.from({ length: 25 }).map((_, i) => (
            <div
              key={`bright-star-${i}`}
              className="absolute bg-white rounded-full animate-twinkle-bright opacity-80"
              style={{
                width: `${1.5 + Math.random() * 2.5}px`,
                height: `${1.5 + Math.random() * 2.5}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
                boxShadow: "0 0 8px rgba(255, 255, 255, 0.8), 0 0 16px rgba(168, 85, 247, 0.3)",
              }}
            />
          ))}
        </div>
      </div>

      {/* Enhanced nebula clouds with morphing */}
      <div className="absolute inset-0 opacity-25">
        <div
          className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full animate-nebula-morph"
          style={{
            background:
              "radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, rgba(236, 72, 153, 0.2) 50%, transparent 70%)",
            filter: "blur(60px)",
            transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 15}px)`,
            transition: "transform 0.8s ease-out",
          }}
        />
        <div
          className="absolute bottom-1/3 left-1/4 w-[400px] h-[400px] rounded-full animate-nebula-morph-reverse"
          style={{
            background:
              "radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, rgba(16, 185, 129, 0.2) 50%, transparent 70%)",
            filter: "blur(50px)",
            animationDelay: "4s",
            transform: `translate(${mousePosition.x * -15}px, ${mousePosition.y * 10}px)`,
            transition: "transform 0.8s ease-out",
          }}
        />
        <div
          className="absolute top-1/2 right-1/3 w-[300px] h-[300px] rounded-full animate-nebula-pulse-enhanced"
          style={{
            background:
              "radial-gradient(circle, rgba(236, 72, 153, 0.3) 0%, rgba(168, 85, 247, 0.15) 50%, transparent 70%)",
            filter: "blur(40px)",
            animationDelay: "2s",
            transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * -8}px)`,
            transition: "transform 0.8s ease-out",
          }}
        />
      </div>

      {/* Cosmic dust particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={`cosmic-dust-${i}`}
            className="absolute rounded-full animate-float-cosmic-enhanced opacity-40"
            style={{
              width: `${2 + Math.random() * 6}px`,
              height: `${2 + Math.random() * 6}px`,
              background: `radial-gradient(circle, rgba(168, 85, 247, 0.8) 0%, rgba(236, 72, 153, 0.4) 50%, transparent 70%)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.4}s`,
              animationDuration: `${10 + Math.random() * 6}s`,
              filter: "blur(1px)",
              transform: `translate(${mousePosition.x * 25}px, ${mousePosition.y * 20}px)`,
              transition: "transform 0.6s ease-out",
            }}
          />
        ))}
      </div>

      {/* Shooting stars */}
      <div className="absolute inset-0">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={`shooting-star-${i}`}
            className="absolute w-1 h-1 bg-white rounded-full animate-shooting-star opacity-0"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 50}%`,
              animationDelay: `${i * 8 + Math.random() * 5}s`,
              animationDuration: "2s",
              boxShadow: "0 0 6px rgba(255, 255, 255, 0.8), 0 0 12px rgba(168, 85, 247, 0.4)",
            }}
          />
        ))}
      </div>
    </div>
  )
}

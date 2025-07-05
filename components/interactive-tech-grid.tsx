"use client"

import { useEffect, useState, useRef } from "react"

const techIcons = [
  {
    name: "React",
    symbol: "⚛️",
    position: { top: "18%", right: "35%" },
    size: "large",
    color: "from-cyan-400 to-blue-500",
  },
  {
    name: "JavaScript",
    symbol: "🟨",
    position: { top: "28%", right: "15%" },
    size: "large",
    color: "from-yellow-400 to-orange-500",
  },
  {
    name: "TypeScript",
    symbol: "🔷",
    position: { top: "45%", right: "25%" },
    size: "large",
    color: "from-blue-400 to-blue-600",
  },
  {
    name: "Python",
    symbol: "🐍",
    position: { top: "38%", right: "8%" },
    size: "medium",
    color: "from-yellow-400 to-green-500",
  },
  {
    name: "GitHub",
    symbol: "🐙",
    position: { top: "58%", right: "18%" },
    size: "medium",
    color: "from-gray-400 to-gray-600",
  },
  {
    name: "Vue",
    symbol: "💚",
    position: { top: "35%", right: "42%" },
    size: "medium",
    color: "from-green-400 to-emerald-500",
  },
  {
    name: "Node.js",
    symbol: "🟢",
    position: { top: "22%", right: "48%" },
    size: "small",
    color: "from-green-500 to-green-600",
  },
  {
    name: "CSS",
    symbol: "🎨",
    position: { top: "52%", right: "35%" },
    size: "small",
    color: "from-blue-400 to-purple-500",
  },
  {
    name: "Docker",
    symbol: "🐳",
    position: { top: "65%", right: "28%" },
    size: "small",
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "HTML",
    symbol: "🌐",
    position: { top: "48%", right: "45%" },
    size: "small",
    color: "from-orange-400 to-red-500",
  },
]

export function InteractiveTechGrid() {
  const [mounted, setMounted] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null)
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
    <div ref={containerRef} className="absolute inset-0 pointer-events-none">
      {/* Enhanced Grid pattern with animation */}
      <svg className="absolute inset-0 w-full h-full opacity-30" style={{ right: "5%" }}>
        <defs>
          <pattern id="enhanced-tech-grid" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
          </pattern>
          <linearGradient id="connection-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(168,85,247,0.6)" />
            <stop offset="50%" stopColor="rgba(236,72,153,0.8)" />
            <stop offset="100%" stopColor="rgba(59,130,246,0.6)" />
          </linearGradient>
        </defs>
        <rect width="50%" height="100%" x="50%" fill="url(#enhanced-tech-grid)" />

        {/* Animated connection lines */}
        <g stroke="url(#connection-gradient)" strokeWidth="1" fill="none" className="animate-pulse-slow">
          <line x1="65%" y1="28%" x2="75%" y2="18%" className="animate-draw-line" />
          <line x1="75%" y1="18%" x2="85%" y2="35%" className="animate-draw-line" style={{ animationDelay: "0.5s" }} />
          <line x1="85%" y1="35%" x2="75%" y2="45%" className="animate-draw-line" style={{ animationDelay: "1s" }} />
          <line x1="75%" y1="45%" x2="82%" y2="58%" className="animate-draw-line" style={{ animationDelay: "1.5s" }} />
          <line x1="82%" y1="58%" x2="72%" y2="65%" className="animate-draw-line" style={{ animationDelay: "2s" }} />
          <line x1="65%" y1="28%" x2="75%" y2="45%" className="animate-draw-line" style={{ animationDelay: "2.5s" }} />
        </g>
      </svg>

      {/* Interactive Tech Icons */}
      {techIcons.map((icon, index) => {
        const isHovered = hoveredIcon === icon.name
        const distance = Math.sqrt(
          Math.pow(Number.parseFloat(icon.position.right) / 100 - (1 - mousePosition.x), 2) +
            Math.pow(Number.parseFloat(icon.position.top) / 100 - mousePosition.y, 2),
        )
        const magnetEffect = distance < 0.15 ? (0.15 - distance) * 100 : 0

        return (
          <div
            key={icon.name}
            className="absolute animate-float-tech pointer-events-auto cursor-pointer group"
            style={{
              ...icon.position,
              animationDelay: `${index * 0.2}s`,
              animationDuration: `${6 + (index % 3)}s`,
              transform: `translate(${magnetEffect * (mousePosition.x - 0.5) * 2}px, ${magnetEffect * (mousePosition.y - 0.5) * 2}px)`,
              transition: "transform 0.3s ease-out",
            }}
            onMouseEnter={() => setHoveredIcon(icon.name)}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            <div
              className={`
                ${icon.size === "large" ? "w-18 h-18 text-lg" : icon.size === "medium" ? "w-14 h-14 text-sm" : "w-12 h-12 text-xs"}
                bg-gradient-to-br ${icon.color} backdrop-blur-sm border border-white/30 rounded-2xl 
                flex items-center justify-center text-white font-bold 
                transition-all duration-300 shadow-2xl
                ${isHovered ? "scale-125 shadow-purple-500/50" : "hover:scale-110"}
                group-hover:shadow-xl group-hover:border-white/50
              `}
              style={{
                boxShadow: isHovered
                  ? "0 0 30px rgba(168, 85, 247, 0.6), 0 0 60px rgba(168, 85, 247, 0.3)"
                  : "0 10px 25px rgba(0, 0, 0, 0.3)",
              }}
            >
              <span className={`transition-transform duration-300 ${isHovered ? "scale-110" : ""}`}>{icon.symbol}</span>
            </div>

            {/* Tooltip */}
            {isHovered && (
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-black/80 backdrop-blur-sm rounded-lg text-white text-xs font-medium whitespace-nowrap animate-fade-in">
                {icon.name}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/80" />
              </div>
            )}

            {/* Ripple effect on hover */}
            {isHovered && <div className="absolute inset-0 rounded-2xl border-2 border-white/50 animate-ping" />}
          </div>
        )
      })}

      {/* Interactive floating particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={`interactive-particle-${i}`}
            className="absolute rounded-full animate-float-particle-interactive opacity-40"
            style={{
              width: `${1 + Math.random() * 3}px`,
              height: `${1 + Math.random() * 3}px`,
              background: `radial-gradient(circle, rgba(168, 85, 247, 0.8) 0%, transparent 70%)`,
              left: `${50 + Math.random() * 45}%`,
              top: `${20 + Math.random() * 60}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
              transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 15}px)`,
              transition: "transform 0.5s ease-out",
              filter: "blur(0.5px)",
            }}
          />
        ))}
      </div>
    </div>
  )
}

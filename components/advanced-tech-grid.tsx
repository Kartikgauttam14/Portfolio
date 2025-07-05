"use client"

import { useEffect, useState, useRef } from "react"

const techIcons = [
  // Frontend Technologies - moved down by 8-10%
  {
    name: "React",
    category: "Frontend",
    icon: (
      <svg viewBox="0 0 24 24" className="w-full h-full">
        <circle cx="12" cy="12" r="2" fill="currentColor" />
        <path
          d="M12 1c-4.2 0-8 1.7-10.6 4.4C-.1 7.1-.1 16.9 1.4 18.6 3 20.3 6.8 22 12 22s9-1.7 10.6-3.4c1.5-1.7 1.5-11.5 0-13.2C20 1.7 16.2 1 12 1zm0 18c-3.3 0-6.2-1.3-7.8-2.8-.8-.8-.8-8.4 0-9.2C5.8 5.3 8.7 4 12 4s6.2 1.3 7.8 2.8c.8.8.8 8.4 0 9.2C18.2 17.7 15.3 19 12 19z"
          fill="currentColor"
        />
      </svg>
    ),
    position: { top: "20%", right: "35%" },
    size: "large",
    color: "from-cyan-400 to-blue-500",
    glow: "shadow-cyan-500/30",
  },
  {
    name: "JavaScript",
    category: "Language",
    icon: (
      <svg viewBox="0 0 24 24" className="w-full h-full">
        <rect width="24" height="24" rx="4" fill="#F7DF1E" />
        <path
          d="M17.5 12.5c0 2.5-1.5 3.5-3.5 3.5s-3.5-1-3.5-3.5V8h2v4.5c0 1 .5 1.5 1.5 1.5s1.5-.5 1.5-1.5V8h2v4.5z"
          fill="#000"
        />
        <path
          d="M9.5 12.5c0 2.5-1.5 3.5-3.5 3.5S2.5 15 2.5 12.5V8h2v4.5c0 1 .5 1.5 1.5 1.5s1.5-.5 1.5-1.5V8h2v4.5z"
          fill="#000"
        />
      </svg>
    ),
    position: { top: "24%", right: "15%" },
    size: "large",
    color: "from-yellow-400 to-orange-500",
    glow: "shadow-yellow-500/30",
  },
  {
    name: "TypeScript",
    category: "Language",
    icon: (
      <svg viewBox="0 0 24 24" className="w-full h-full">
        <rect width="24" height="24" rx="4" fill="#3178C6" />
        <path d="M9.5 8h5v1.5h-1.75v6h-1.5v-6H9.5V8z" fill="white" />
        <path
          d="M16 10.5h1.5c0-.8.3-1.5.8-2s1.2-.8 2-.8c.8 0 1.5.3 2 .8s.8 1.2.8 2c0 .5-.2 1-.5 1.3l-2 2c-.3.3-.5.8-.5 1.3v.4h3v1.5h-4.5v-1.9c0-.8.3-1.5.8-2l2-2c.3-.3.5-.8.5-1.3 0-.5-.2-1-.5-1.3s-.8-.5-1.3-.5-.9.2-1.3.5-.5.8-.5 1.3z"
          fill="white"
        />
      </svg>
    ),
    position: { top: "16%", right: "25%" },
    size: "large",
    color: "from-blue-400 to-blue-600",
    glow: "shadow-blue-500/30",
  },

  // Backend Technologies - moved down by 8-10%
  {
    name: "Python",
    category: "Language",
    icon: (
      <svg viewBox="0 0 24 24" className="w-full h-full">
        <path
          d="M12 2C8.7 2 8 2.7 8 4v2h8V4c0-1.3-.7-2-4-2zm0 20c3.3 0 4-.7 4-2v-2H8v2c0 1.3.7 2 4 2z"
          fill="#3776AB"
        />
        <path
          d="M8 6H4c-1.3 0-2 .7-2 2v8c0 1.3.7 2 2 2h4V6zm8 0v12h4c1.3 0 2-.7 2-2V8c0-1.3-.7-2-2-2h-4z"
          fill="#FFD43B"
        />
        <circle cx="6" cy="8" r="1" fill="white" />
        <circle cx="18" cy="16" r="1" fill="white" />
      </svg>
    ),
    position: { top: "26%", right: "8%" },
    size: "medium",
    color: "from-yellow-400 to-blue-500",
    glow: "shadow-yellow-500/30",
  },
  {
    name: "Node.js",
    category: "Backend",
    icon: (
      <svg viewBox="0 0 24 24" className="w-full h-full">
        <path
          d="M12 1.85c-.27 0-.55.07-.78.2l-7.44 4.3c-.48.28-.78.8-.78 1.36v8.58c0 .56.3 1.08.78 1.36l7.44 4.3c.46.26 1.04.26 1.5 0l7.44-4.3c.48-.28.78-.8.78-1.36V7.71c0-.56-.3-1.08-.78-1.36l-7.44-4.3c-.23-.13-.51-.2-.78-.2z"
          fill="#8CC84B"
        />
      </svg>
    ),
    position: { top: "14%", right: "45%" },
    size: "medium",
    color: "from-green-500 to-green-600",
    glow: "shadow-green-500/30",
  },

  // Second Row - moved down by 8-10%
  {
    name: "Vue.js",
    category: "Frontend",
    icon: (
      <svg viewBox="0 0 24 24" className="w-full h-full">
        <path d="M2 3h4l6 10 6-10h4L12 21 2 3z" fill="#4FC08D" />
        <path d="M6 3h2l4 6.5L16 3h2l-6 10L6 3z" fill="#35495E" />
      </svg>
    ),
    position: { top: "40%", right: "42%" },
    size: "medium",
    color: "from-green-400 to-emerald-500",
    glow: "shadow-green-500/30",
  },
  {
    name: "GitHub",
    category: "Tools",
    icon: (
      <svg viewBox="0 0 24 24" className="w-full h-full">
        <path
          d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"
          fill="currentColor"
        />
      </svg>
    ),
    position: { top: "43%", right: "18%" },
    size: "medium",
    color: "from-gray-400 to-gray-600",
    glow: "shadow-gray-500/30",
  },
  {
    name: "CSS3",
    category: "Frontend",
    icon: (
      <svg viewBox="0 0 24 24" className="w-full h-full">
        <path
          d="M3 2l1.5 17L12 21l7.5-2L21 2H3zm13.5 5.5H8l.2 2h8.1l-.6 6.5L12 17l-3.7-1-.2-2.5h1.8l.1 1.2 2 .5 2-.5.2-2.7H8.5l-.5-6h8.5l-.5 1.5z"
          fill="#1572B6"
        />
      </svg>
    ),
    position: { top: "36%", right: "32%" },
    size: "small",
    color: "from-blue-400 to-purple-500",
    glow: "shadow-blue-500/30",
  },
  {
    name: "HTML5",
    category: "Frontend",
    icon: (
      <svg viewBox="0 0 24 24" className="w-full h-full">
        <path
          d="M3 2l1.5 17L12 21l7.5-2L21 2H3zm13.5 5.5H8l.2 2h8.1l-.6 6.5L12 17l-3.7-1-.2-2.5h1.8l.1 1.2 2 .5 2-.5.2-2.7H8.5l-.5-6h8.5l-.5 1.5z"
          fill="#E34F26"
        />
      </svg>
    ),
    position: { top: "46%", right: "8%" },
    size: "small",
    color: "from-orange-400 to-red-500",
    glow: "shadow-orange-500/30",
  },

  // Third Row - moved down by 8-10%
  {
    name: "Docker",
    category: "DevOps",
    icon: (
      <svg viewBox="0 0 24 24" className="w-full h-full">
        <path
          d="M13.2 11.8h2.4v-2.4h-2.4v2.4zm-2.6 0h2.4v-2.4h-2.4v2.4zm-2.6 0h2.4v-2.4H7.9v2.4zm2.6-2.6h2.4V6.8h-2.4v2.4zm2.6 0h2.4V6.8h-2.4v2.4zm2.6 0h2.4V6.8h-2.4v2.4zm-5.2 0h2.4V6.8H10v2.4zm-2.6 0h2.4V6.8H7.4v2.4z"
          fill="#2496ED"
        />
      </svg>
    ),
    position: { top: "63%", right: "28%" },
    size: "small",
    color: "from-blue-500 to-cyan-500",
    glow: "shadow-blue-500/30",
  },
  {
    name: "AWS",
    category: "Cloud",
    icon: (
      <svg viewBox="0 0 24 24" className="w-full h-full">
        <path
          d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335c-.072.048-.144.072-.2.072-.08 0-.16-.04-.239-.112-.112-.12-.207-.248-.279-.383-.072-.135-.144-.296-.2-.495-.503.592-1.135.888-1.887.888-.54 0-.972-.152-1.279-.447-.31-.296-.463-.69-.463-1.176 0-.52.184-.94.558-1.255.374-.32.87-.479 1.494-.479.206 0 .422.016.65.056.23.04.47.088.726.16v-.511c0-.535-.112-.91-.328-1.119-.223-.207-.6-.312-1.15-.312-.248 0-.503.032-.758.088-.255.056-.51.127-.75.224-.112.048-.2.08-.24.096-.04.016-.07.024-.087.024-.08 0-.12-.056-.12-.175v-.279c0-.088.016-.16.056-.2.04-.048.112-.096.2-.144.247-.128.543-.232.886-.32.343-.087.71-.128 1.102-.128.84 0 1.454.192 1.85.58.39.383.59.966.59 1.742v2.295z"
          fill="#FF9900"
        />
      </svg>
    ),
    position: { top: "66%", right: "15%" },
    size: "small",
    color: "from-orange-400 to-yellow-500",
    glow: "shadow-orange-500/30",
  },
]

export function AdvancedTechGrid() {
  const [mounted, setMounted] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null)
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
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
      {/* Enhanced Grid with animated patterns */}
      <svg className="absolute inset-0 w-full h-full opacity-20" style={{ right: "5%" }}>
        <defs>
          <pattern id="advanced-tech-grid" width="50" height="50" patternUnits="userSpaceOnUse">
            <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
            <circle cx="25" cy="25" r="1" fill="rgba(168,85,247,0.3)" />
          </pattern>
          <linearGradient id="enhanced-connection-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(168,85,247,0.6)" />
            <stop offset="25%" stopColor="rgba(236,72,153,0.8)" />
            <stop offset="50%" stopColor="rgba(59,130,246,0.6)" />
            <stop offset="75%" stopColor="rgba(16,185,129,0.4)" />
            <stop offset="100%" stopColor="rgba(168,85,247,0.6)" />
          </linearGradient>
        </defs>
        <rect width="50%" height="100%" x="50%" fill="url(#advanced-tech-grid)" />

        {/* Dynamic connection network - adjusted for new positions */}
        <g stroke="url(#enhanced-connection-gradient)" strokeWidth="0.8" fill="none" className="animate-pulse-slow">
          {/* Horizontal connections */}
          <line x1="65%" y1="24%" x2="75%" y2="20%" className="animate-draw-line-enhanced" />
          <line
            x1="75%"
            y1="20%"
            x2="85%"
            y2="16%"
            className="animate-draw-line-enhanced"
            style={{ animationDelay: "0.5s" }}
          />
          <line
            x1="85%"
            y1="26%"
            x2="90%"
            y2="14%"
            className="animate-draw-line-enhanced"
            style={{ animationDelay: "1s" }}
          />

          {/* Vertical connections */}
          <line
            x1="75%"
            y1="24%"
            x2="78%"
            y2="40%"
            className="animate-draw-line-enhanced"
            style={{ animationDelay: "1.5s" }}
          />
          <line
            x1="85%"
            y1="26%"
            x2="88%"
            y2="43%"
            className="animate-draw-line-enhanced"
            style={{ animationDelay: "2s" }}
          />
          <line
            x1="68%"
            y1="43%"
            x2="72%"
            y2="63%"
            className="animate-draw-line-enhanced"
            style={{ animationDelay: "2.5s" }}
          />

          {/* Diagonal connections */}
          <line
            x1="68%"
            y1="40%"
            x2="82%"
            y2="46%"
            className="animate-draw-line-enhanced"
            style={{ animationDelay: "3s" }}
          />
          <line
            x1="82%"
            y1="43%"
            x2="85%"
            y2="63%"
            className="animate-draw-line-enhanced"
            style={{ animationDelay: "3.5s" }}
          />
        </g>
      </svg>

      {/* Advanced Tech Icons */}
      {techIcons.map((icon, index) => {
        const isHovered = hoveredIcon === icon.name
        const isCategoryActive = activeCategory === icon.category
        const distance = Math.sqrt(
          Math.pow(Number.parseFloat(icon.position.right) / 100 - (1 - mousePosition.x), 2) +
            Math.pow(Number.parseFloat(icon.position.top) / 100 - mousePosition.y, 2),
        )
        const magnetEffect = distance < 0.1 ? (0.1 - distance) * 100 : 0

        return (
          <div
            key={icon.name}
            className="absolute animate-float-tech-enhanced pointer-events-auto cursor-pointer group"
            style={{
              ...icon.position,
              animationDelay: `${index * 0.15}s`,
              animationDuration: `${6 + (index % 4)}s`,
              transform: `translate(${magnetEffect * (mousePosition.x - 0.5) * 1.2}px, ${magnetEffect * (mousePosition.y - 0.5) * 1.2}px)`,
              transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            }}
            onMouseEnter={() => {
              setHoveredIcon(icon.name)
              setActiveCategory(icon.category)
            }}
            onMouseLeave={() => {
              setHoveredIcon(null)
              setActiveCategory(null)
            }}
          >
            <div
              className={`
                ${icon.size === "large" ? "w-16 h-16 p-3" : icon.size === "medium" ? "w-14 h-14 p-2.5" : "w-12 h-12 p-2"}
                bg-gradient-to-br ${icon.color} backdrop-blur-md border border-white/40 rounded-2xl 
                flex items-center justify-center text-white font-bold 
                transition-all duration-500 ease-out
                ${isHovered ? `scale-125 ${icon.glow} shadow-2xl border-white/60` : "hover:scale-110 shadow-lg"}
                ${isCategoryActive && !isHovered ? "scale-105 opacity-80" : ""}
                group-hover:shadow-xl
              `}
              style={{
                boxShadow: isHovered
                  ? `0 0 40px rgba(168, 85, 247, 0.6), 0 0 80px rgba(168, 85, 247, 0.3), 0 20px 40px rgba(0, 0, 0, 0.3)`
                  : "0 10px 25px rgba(0, 0, 0, 0.2)",
                filter: isHovered ? "brightness(1.2)" : "brightness(1)",
              }}
            >
              <div className={`transition-all duration-300 ${isHovered ? "scale-110 rotate-12" : ""}`}>{icon.icon}</div>
            </div>

            {/* Enhanced Tooltip */}
            {isHovered && (
              <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 animate-fade-in-up z-50">
                <div className="bg-black/90 backdrop-blur-md rounded-xl px-4 py-2 shadow-2xl border border-white/20">
                  <div className="text-white text-sm font-semibold">{icon.name}</div>
                  <div className="text-purple-300 text-xs">{icon.category}</div>
                </div>
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/90" />
              </div>
            )}

            {/* Ripple effects */}
            {isHovered && (
              <>
                <div className="absolute inset-0 rounded-2xl border border-white/60 animate-ping opacity-75" />
                <div
                  className="absolute inset-0 rounded-2xl border border-purple-400/40 animate-ping opacity-50"
                  style={{ animationDelay: "0.2s" }}
                />
              </>
            )}

            {/* Particle burst on hover */}
            {isHovered && (
              <div className="absolute inset-0 pointer-events-none">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div
                    key={`particle-${i}`}
                    className="absolute w-1 h-1 bg-purple-400 rounded-full animate-particle-burst opacity-80"
                    style={{
                      left: "50%",
                      top: "50%",
                      animationDelay: `${i * 0.1}s`,
                      transform: `rotate(${i * 60}deg) translateY(-20px)`,
                    }}
                  />
                ))}
              </div>
            )}
          </div>
        )
      })}

      {/* Enhanced floating particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={`enhanced-particle-${i}`}
            className="absolute rounded-full animate-float-particle-enhanced opacity-40"
            style={{
              width: `${1 + Math.random() * 3}px`,
              height: `${1 + Math.random() * 3}px`,
              background: `radial-gradient(circle, rgba(168, 85, 247, 0.8) 0%, rgba(236, 72, 153, 0.4) 50%, transparent 70%)`,
              left: `${50 + Math.random() * 45}%`,
              top: `${25 + Math.random() * 60}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${8 + Math.random() * 6}s`,
              transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 15}px)`,
              transition: "transform 0.6s ease-out",
              filter: "blur(0.5px)",
              boxShadow: "0 0 4px rgba(168, 85, 247, 0.4)",
            }}
          />
        ))}
      </div>
    </div>
  )
}

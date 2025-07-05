"use client"

import { useEffect, useState, useRef } from "react"

const techIcons = [
  // First Row - Top positioned icons
  {
    name: "React",
    icon: (
      <svg viewBox="0 0 24 24" className="w-full h-full">
        <circle cx="12" cy="12" r="2" fill="currentColor" />
        <path
          d="M12 1c-4.2 0-8 1.7-10.6 4.4C-.1 7.1-.1 16.9 1.4 18.6 3 20.3 6.8 22 12 22s9-1.7 10.6-3.4c1.5-1.7 1.5-11.5 0-13.2C20 1.7 16.2 1 12 1zm0 18c-3.3 0-6.2-1.3-7.8-2.8-.8-.8-.8-8.4 0-9.2C5.8 5.3 8.7 4 12 4s6.2 1.3 7.8 2.8c.8.8.8 8.4 0 9.2C18.2 17.7 15.3 19 12 19z"
          fill="currentColor"
        />
      </svg>
    ),
    position: { top: "15%", right: "35%" },
    size: "medium",
    color: "from-cyan-400 to-blue-500",
  },
  {
    name: "JavaScript",
    icon: (
      <svg viewBox="0 0 24 24" className="w-full h-full">
        <rect width="24" height="24" rx="4" fill="#F7DF1E" />
        <path
          d="M17.5 12.5c0 2.5-1.5 3.5-3.5 3.5s-3.5-1-3.5-3.5V8h2v4.5c0 1 .5 1.5 1.5 1.5s1.5-.5 1.5-1.5V8h2v4.5zm-8 0c0 2.5-1.5 3.5-3.5 3.5S2.5 15 2.5 12.5V8h2v4.5c0 1 .5 1.5 1.5 1.5s1.5-.5 1.5-1.5V8h2v4.5z"
          fill="#000"
        />
      </svg>
    ),
    position: { top: "18%", right: "15%" },
    size: "medium",
    color: "from-yellow-400 to-orange-500",
  },
  {
    name: "TypeScript",
    icon: (
      <svg viewBox="0 0 24 24" className="w-full h-full">
        <rect width="24" height="24" rx="4" fill="#3178C6" />
        <path
          d="M9.5 8h5v1.5h-1.75v6h-1.5v-6H9.5V8zm6.5 2.5h1.5c0-.8.3-1.5.8-2s1.2-.8 2-.8c.8 0 1.5.3 2 .8s.8 1.2.8 2c0 .5-.2 1-.5 1.3l-2 2c-.3.3-.5.8-.5 1.3v.4h3v1.5h-4.5v-1.9c0-.8.3-1.5.8-2l2-2c.3-.3.5-.8.5-1.3 0-.5-.2-1-.5-1.3s-.8-.5-1.3-.5-.9.2-1.3.5-.5.8-.5 1.3z"
          fill="white"
        />
      </svg>
    ),
    position: { top: "12%", right: "25%" },
    size: "medium",
    color: "from-blue-400 to-blue-600",
  },
  {
    name: "Python",
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
    position: { top: "20%", right: "8%" },
    size: "small",
    color: "from-yellow-400 to-blue-500",
  },
  {
    name: "Node.js",
    icon: (
      <svg viewBox="0 0 24 24" className="w-full h-full">
        <path
          d="M12 1.85c-.27 0-.55.07-.78.2l-7.44 4.3c-.48.28-.78.8-.78 1.36v8.58c0 .56.3 1.08.78 1.36l7.44 4.3c.46.26 1.04.26 1.5 0l7.44-4.3c.48-.28.78-.8.78-1.36V7.71c0-.56-.3-1.08-.78-1.36l-7.44-4.3c-.23-.13-.51-.2-.78-.2z"
          fill="#8CC84B"
        />
      </svg>
    ),
    position: { top: "10%", right: "45%" },
    size: "small",
    color: "from-green-500 to-green-600",
  },

  // Second Row - Middle positioned icons with more spacing
  {
    name: "Vue.js",
    icon: (
      <svg viewBox="0 0 24 24" className="w-full h-full">
        <path d="M2 3h4l6 10 6-10h4L12 21 2 3z" fill="#4FC08D" />
        <path d="M6 3h2l4 6.5L16 3h2l-6 10L6 3z" fill="#35495E" />
      </svg>
    ),
    position: { top: "35%", right: "42%" },
    size: "small",
    color: "from-green-400 to-emerald-500",
  },
  {
    name: "GitHub",
    icon: (
      <svg viewBox="0 0 24 24" className="w-full h-full">
        <path
          d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"
          fill="currentColor"
        />
      </svg>
    ),
    position: { top: "38%", right: "18%" },
    size: "small",
    color: "from-gray-400 to-gray-600",
  },
  {
    name: "CSS3",
    icon: (
      <svg viewBox="0 0 24 24" className="w-full h-full">
        <path
          d="M3 2l1.5 17L12 21l7.5-2L21 2H3zm13.5 5.5H8l.2 2h8.1l-.6 6.5L12 17l-3.7-1-.2-2.5h1.8l.1 1.2 2 .5 2-.5.2-2.7H8.5l-.5-6h8.5l-.5 1.5z"
          fill="#1572B6"
        />
      </svg>
    ),
    position: { top: "32%", right: "32%" },
    size: "small",
    color: "from-blue-400 to-purple-500",
  },
  {
    name: "HTML5",
    icon: (
      <svg viewBox="0 0 24 24" className="w-full h-full">
        <path
          d="M3 2l1.5 17L12 21l7.5-2L21 2H3zm13.5 5.5H8l.2 2h8.1l-.6 6.5L12 17l-3.7-1-.2-2.5h1.8l.1 1.2 2 .5 2-.5.2-2.7H8.5l-.5-6h8.5l-.5 1.5z"
          fill="#E34F26"
        />
      </svg>
    ),
    position: { top: "40%", right: "8%" },
    size: "small",
    color: "from-orange-400 to-red-500",
  },

  // Third Row - Bottom positioned icons with even more spacing
  {
    name: "Docker",
    icon: (
      <svg viewBox="0 0 24 24" className="w-full h-full">
        <path
          d="M13.2 11.8h2.4v-2.4h-2.4v2.4zm-2.6 0h2.4v-2.4h-2.4v2.4zm-2.6 0h2.4v-2.4H7.9v2.4zm2.6-2.6h2.4V6.8h-2.4v2.4zm2.6 0h2.4V6.8h-2.4v2.4zm2.6 0h2.4V6.8h-2.4v2.4zm-5.2 0h2.4V6.8H10v2.4zm-2.6 0h2.4V6.8H7.4v2.4zm15.7 2.4c-.3-2.1-2.1-3.7-4.3-3.7-.5 0-1 .1-1.4.2-.5-3.6-3.6-6.4-7.4-6.4-2.3 0-4.4 1.1-5.7 2.8-.4-.1-.8-.1-1.2-.1C1.1 8.4 0 9.5 0 10.9s1.1 2.5 2.5 2.5h18.9c1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5z"
          fill="#2496ED"
        />
      </svg>
    ),
    position: { top: "58%", right: "28%" },
    size: "small",
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "AWS",
    icon: (
      <svg viewBox="0 0 24 24" className="w-full h-full">
        <path
          d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335c-.072.048-.144.072-.2.072-.08 0-.16-.04-.239-.112-.112-.12-.207-.248-.279-.383-.072-.135-.144-.296-.2-.495-.503.592-1.135.888-1.887.888-.54 0-.972-.152-1.279-.447-.31-.296-.463-.69-.463-1.176 0-.52.184-.94.558-1.255.374-.32.87-.479 1.494-.479.206 0 .422.016.65.056.23.04.47.088.726.16v-.511c0-.535-.112-.91-.328-1.119-.223-.207-.6-.312-1.15-.312-.248 0-.503.032-.758.088-.255.056-.51.127-.75.224-.112.048-.2.08-.24.096-.04.016-.07.024-.087.024-.08 0-.12-.056-.12-.175v-.279c0-.088.016-.16.056-.2.04-.048.112-.096.2-.144.247-.128.543-.232.886-.32.343-.087.71-.128 1.102-.128.84 0 1.454.192 1.85.58.39.383.59.966.59 1.742v2.295zm-2.598 1.018c.2 0 .407-.04.622-.112.215-.072.407-.2.566-.368.096-.104.168-.224.2-.36.032-.135.056-.296.056-.479v-.231c-.183-.064-.375-.112-.575-.144-.2-.032-.407-.048-.622-.048-.447 0-.774.088-1.006.272-.23.184-.343.439-.343.766 0 .303.08.535.247.694.168.16.415.24.743.24l.112.01zm4.87.704c-.104 0-.175-.016-.215-.056-.04-.032-.072-.104-.096-.2l-1.07-3.516c-.032-.104-.048-.175-.048-.215 0-.088.04-.135.127-.135h.518c.112 0 .184.016.215.056.048.032.08.104.096.2l.766 3.012.71-3.012c.024-.104.056-.168.096-.2.04-.04.112-.056.207-.056h.423c.112 0 .184.016.215.056.048.032.08.104.096.2l.718 3.044.783-3.044c.024-.104.056-.168.096-.2.04-.04.112-.056.207-.056h.487c.088 0 .135.04.135.135 0 .032-.008.064-.016.104-.008.04-.024.088-.048.152l-1.102 3.516c-.024.104-.056.168-.096.2-.04.04-.112.056-.207.056h-.455c-.112 0-.184-.016-.215-.056-.048-.04-.08-.104-.096-.2L9.78 8.684l-.710 2.862c-.016.104-.048.168-.088.2-.04.04-.112.056-.215.056h-.455zm7.254.144c-.295 0-.59-.032-.886-.104-.295-.072-.526-.16-.67-.256-.088-.056-.15-.12-.167-.168-.016-.048-.024-.104-.024-.168v-.287c0-.12.048-.18.135-.18.04 0 .08.008.127.024.048.016.12.048.2.08.27.112.55.2.838.248.287.048.566.072.838.072.447 0 .79-.08 1.038-.24.248-.16.375-.384.375-.67 0-.2-.064-.368-.184-.504-.127-.135-.336-.256-.622-.36l-.886-.28c-.447-.135-.774-.336-.99-.598-.207-.264-.31-.566-.31-.907 0-.264.056-.495.175-.694.112-.2.27-.368.463-.504.2-.135.43-.24.694-.31.264-.072.543-.104.838-.104.128 0 .256.008.39.032.135.016.256.048.375.08.112.032.215.072.31.112.096.04.168.08.2.12.048.048.08.096.104.16.024.064.04.135.04.2v.263c0 .12-.048.184-.135.184-.048 0-.127-.024-.207-.064-.27-.12-.574-.184-.918-.184-.407 0-.726.072-.95.216-.23.144-.336.368-.336.67 0 .2.072.375.207.51.135.136.375.264.71.368l.878.279c.447.144.766.336.966.583.2.248.295.543.295.886 0 .27-.056.51-.168.718-.112.207-.27.383-.478.526-.207.144-.454.248-.742.32-.295.08-.598.12-.918.12z"
          fill="#FF9900"
        />
        <path
          d="M22.548 17.967c-1.374 1.015-3.37 1.55-5.086 1.55-2.407 0-4.575-.886-6.21-2.358-.128-.12-.016-.28.144-.184 1.742 1.015 3.898 1.63 6.13 1.63 1.502 0 3.156-.31 4.67-.95.23-.104.423.152.28.312h.072z"
          fill="#FF9900"
        />
        <path
          d="M23.402 16.95c-.175-.224-1.15-.104-1.59-.056-.135.016-.16-.104-.032-.184.774-.543 2.048-.383 2.2-.2.15.184-.04 1.463-.774 2.071-.112.096-.223.048-.175-.08.167-.415.535-1.335.36-1.559l.01.008z"
          fill="#FF9900"
        />
      </svg>
    ),
    position: { top: "62%", right: "15%" },
    size: "small",
    color: "from-orange-400 to-yellow-500",
  },
]

export function TechLanguageIcons() {
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
      <svg className="absolute inset-0 w-full h-full opacity-20" style={{ right: "5%" }}>
        <defs>
          <pattern id="tech-language-grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
          </pattern>
          <linearGradient id="connection-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(168,85,247,0.4)" />
            <stop offset="50%" stopColor="rgba(236,72,153,0.6)" />
            <stop offset="100%" stopColor="rgba(59,130,246,0.4)" />
          </linearGradient>
        </defs>
        <rect width="50%" height="100%" x="50%" fill="url(#tech-language-grid)" />

        {/* Animated connection lines between rows */}
        <g stroke="url(#connection-gradient)" strokeWidth="0.8" fill="none" className="animate-pulse-slow">
          {/* First row connections */}
          <line x1="65%" y1="18%" x2="75%" y2="15%" className="animate-draw-line" />
          <line x1="75%" y1="15%" x2="85%" y2="12%" className="animate-draw-line" style={{ animationDelay: "0.5s" }} />
          <line x1="85%" y1="20%" x2="90%" y2="10%" className="animate-draw-line" style={{ animationDelay: "1s" }} />

          {/* Second row connections */}
          <line x1="68%" y1="35%" x2="78%" y2="38%" className="animate-draw-line" style={{ animationDelay: "1.5s" }} />
          <line x1="78%" y1="38%" x2="88%" y2="32%" className="animate-draw-line" style={{ animationDelay: "2s" }} />
          <line x1="88%" y1="40%" x2="92%" y2="35%" className="animate-draw-line" style={{ animationDelay: "2.5s" }} />

          {/* Third row connections */}
          <line x1="72%" y1="58%" x2="85%" y2="62%" className="animate-draw-line" style={{ animationDelay: "3s" }} />

          {/* Vertical connections between rows */}
          <line x1="75%" y1="18%" x2="78%" y2="35%" className="animate-draw-line" style={{ animationDelay: "3.5s" }} />
          <line x1="85%" y1="20%" x2="88%" y2="40%" className="animate-draw-line" style={{ animationDelay: "4s" }} />
        </g>
      </svg>

      {/* Tech Language Icons */}
      {techIcons.map((icon, index) => {
        const isHovered = hoveredIcon === icon.name
        const distance = Math.sqrt(
          Math.pow(Number.parseFloat(icon.position.right) / 100 - (1 - mousePosition.x), 2) +
            Math.pow(Number.parseFloat(icon.position.top) / 100 - mousePosition.y, 2),
        )
        const magnetEffect = distance < 0.12 ? (0.12 - distance) * 80 : 0

        return (
          <div
            key={icon.name}
            className="absolute animate-float-tech pointer-events-auto cursor-pointer group"
            style={{
              ...icon.position,
              animationDelay: `${index * 0.2}s`,
              animationDuration: `${6 + (index % 3)}s`,
              transform: `translate(${magnetEffect * (mousePosition.x - 0.5) * 1.5}px, ${magnetEffect * (mousePosition.y - 0.5) * 1.5}px)`,
              transition: "transform 0.3s ease-out",
            }}
            onMouseEnter={() => setHoveredIcon(icon.name)}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            <div
              className={`
                ${icon.size === "large" ? "w-14 h-14 p-2.5" : icon.size === "medium" ? "w-12 h-12 p-2" : "w-10 h-10 p-1.5"}
                bg-gradient-to-br ${icon.color} backdrop-blur-sm border border-white/30 rounded-xl 
                flex items-center justify-center text-white font-bold 
                transition-all duration-300 shadow-lg
                ${isHovered ? "scale-125 shadow-purple-500/40" : "hover:scale-110"}
                group-hover:shadow-xl group-hover:border-white/50
              `}
              style={{
                boxShadow: isHovered
                  ? "0 0 25px rgba(168, 85, 247, 0.5), 0 0 50px rgba(168, 85, 247, 0.2)"
                  : "0 8px 20px rgba(0, 0, 0, 0.25)",
              }}
            >
              <div className={`transition-transform duration-300 ${isHovered ? "scale-110" : ""}`}>{icon.icon}</div>
            </div>

            {/* Enhanced Tooltip */}
            {isHovered && (
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-black/90 backdrop-blur-sm rounded-md text-white text-xs font-medium whitespace-nowrap animate-fade-in z-50 shadow-lg">
                {icon.name}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-3 border-r-3 border-t-3 border-transparent border-t-black/90" />
              </div>
            )}

            {/* Subtle ripple effect on hover */}
            {isHovered && (
              <div className="absolute inset-0 rounded-xl border border-white/40 animate-ping opacity-75" />
            )}
          </div>
        )
      })}

      {/* Reduced floating particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={`tech-particle-${i}`}
            className="absolute rounded-full animate-float-particle-interactive opacity-30"
            style={{
              width: `${1 + Math.random() * 2}px`,
              height: `${1 + Math.random() * 2}px`,
              background: `radial-gradient(circle, rgba(168, 85, 247, 0.6) 0%, transparent 70%)`,
              left: `${50 + Math.random() * 45}%`,
              top: `${20 + Math.random() * 60}%`,
              animationDelay: `${i * 0.4}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
              transform: `translate(${mousePosition.x * 15}px, ${mousePosition.y * 10}px)`,
              transition: "transform 0.6s ease-out",
              filter: "blur(0.5px)",
            }}
          />
        ))}
      </div>
    </div>
  )
}

"use client"

import { useEffect, useState } from "react"

const techIcons = [
  { name: "Python", symbol: "Py", position: { top: "20%", right: "15%" } },
  { name: "JavaScript", symbol: "JS", position: { top: "30%", right: "25%" } },
  { name: "TensorFlow", symbol: "TF", position: { top: "15%", right: "35%" } },
  { name: "React", symbol: "R", position: { top: "40%", right: "10%" } },
  { name: "Node.js", symbol: "N", position: { top: "50%", right: "30%" } },
  { name: "AWS", symbol: "AWS", position: { top: "60%", right: "20%" } },
  { name: "Docker", symbol: "D", position: { top: "25%", left: "15%" } },
  { name: "Kubernetes", symbol: "K8s", position: { top: "35%", left: "25%" } },
  { name: "PyTorch", symbol: "PT", position: { top: "45%", left: "10%" } },
  { name: "MongoDB", symbol: "M", position: { top: "55%", left: "20%" } },
  { name: "Git", symbol: "Git", position: { top: "65%", left: "30%" } },
  { name: "TypeScript", symbol: "TS", position: { bottom: "20%", right: "15%" } },
]

export function FloatingIcons() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="absolute inset-0 pointer-events-none">
      {techIcons.map((icon, index) => (
        <div
          key={icon.name}
          className="absolute animate-float"
          style={{
            ...icon.position,
            animationDelay: `${index * 0.5}s`,
            animationDuration: `${3 + (index % 3)}s`,
          }}
        >
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center text-white font-bold text-xs sm:text-sm hover:bg-white/20 transition-all duration-300">
            {icon.symbol}
          </div>
        </div>
      ))}
    </div>
  )
}

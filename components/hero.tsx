"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { CosmicBackground } from "@/components/cosmic-background"
import { TechIconsGrid } from "@/components/tech-icons-grid"

export function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8 pt-20 overflow-hidden">
      {/* Cosmic Background */}
      <CosmicBackground />

      {/* Tech Icons Grid */}
      <TechIconsGrid />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
              <span className="text-white text-sm font-medium">Machine Learning Engineer</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Envisioning
                <br />
                tomorrow's world:
              </h1>
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                  Kartik Gauttam
                </span>
                's
                <br />
                visionary journey.
              </h2>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-300 max-w-lg leading-relaxed">
              I'm a Machine Learning Engineer & Software Engineer with experience in Website, Mobile, and Software
              development. Check out my projects and skills.
            </p>

            {/* CTA Button */}
            <Button
              size="lg"
              className="bg-purple-600/80 hover:bg-purple-600 backdrop-blur-sm text-white px-8 py-3 rounded-full text-base font-medium transition-all duration-300 border border-purple-500/30"
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            >
              Learn more
            </Button>
          </div>

          {/* Right side is handled by TechIconsGrid */}
        </div>
      </div>
    </section>
  )
}

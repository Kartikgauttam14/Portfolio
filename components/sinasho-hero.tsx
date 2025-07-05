"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { SinashoCosmicBackground } from "@/components/sinasho-cosmic-background"
import { SinashoTechGrid } from "@/components/sinasho-tech-grid"

export function SinashoHero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8 pt-20 overflow-hidden">
      {/* Sinasho Cosmic Background */}
      <SinashoCosmicBackground />

      {/* Tech Icons Grid */}
      <SinashoTechGrid />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Exact replica */}
          <div className="space-y-8">
            {/* Badge - exact styling */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
              <span className="text-white text-sm font-medium">Machine Learning Engineer</span>
            </div>

            {/* Main Heading - exact typography */}
            <div className="space-y-2">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Envisioning
                <br />
                tomorrow's world:
              </h1>
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  }}
                >
                  Kartik Gauttam
                </span>
                's
                <br />
                visionary journey.
              </h2>
            </div>

            {/* Description - exact styling */}
            <p className="text-lg text-gray-300 max-w-lg leading-relaxed">
              I'm a Machine Learning Engineer & Software Engineer with experience in Website, Mobile, and Software
              development. Check out my projects and skills.
            </p>

            {/* CTA Button - exact replica */}
            <Button
              className="bg-purple-600/80 hover:bg-purple-600 backdrop-blur-sm text-white px-8 py-3 rounded-lg text-base font-medium transition-all duration-300 border border-purple-500/30"
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            >
              Learn more
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom section indicator */}
      <div className="absolute bottom-20 left-8">
        <p className="text-purple-400 text-sm font-medium mb-2 tracking-[0.2em] uppercase">INTRODUCTION</p>
        <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">Overview.</h3>
      </div>
    </section>
  )
}

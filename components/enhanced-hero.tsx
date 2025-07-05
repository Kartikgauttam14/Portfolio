"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { EnhancedCosmicBackground } from "@/components/enhanced-cosmic-background"
import { EnhancedTechGrid } from "@/components/enhanced-tech-grid"
import { ChevronDown } from "lucide-react"

export function EnhancedHero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8 pt-20 overflow-hidden">
      {/* Enhanced Cosmic Background */}
      <EnhancedCosmicBackground />

      {/* Enhanced Tech Icons Grid */}
      <EnhancedTechGrid />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Enhanced Badge */}
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-md border border-white/30 shadow-lg">
              <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse shadow-lg"></div>
              <span className="text-white text-sm font-semibold tracking-wide">Machine Learning Engineer</span>
            </div>

            {/* Enhanced Main Heading */}
            <div className="space-y-6">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-[0.9] tracking-tight">
                <span className="block animate-slide-in-left">Envisioning</span>
                <span className="block animate-slide-in-left delay-200">tomorrow's world:</span>
              </h1>
              <h2 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.9] tracking-tight animate-slide-in-left delay-400">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient-x">
                  Kartik Gauttam
                </span>
                <span className="text-white">'s</span>
                <br />
                <span className="text-white">visionary journey.</span>
              </h2>
            </div>

            {/* Enhanced Description */}
            <p className="text-xl text-gray-300 max-w-2xl leading-relaxed font-light animate-fade-in delay-600">
              I'm a Machine Learning Engineer & Software Engineer with experience in Website, Mobile, and Software
              development. Check out my projects and skills.
            </p>

            {/* Enhanced CTA Button */}
            <div className="animate-fade-in delay-800">
              <Button
                size="lg"
                className="group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-2xl hover:shadow-purple-500/25 hover:scale-105 border border-white/20"
                onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
              >
                Learn more
                <ChevronDown className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

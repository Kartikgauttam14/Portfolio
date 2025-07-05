"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { AdvancedCosmicBackground } from "@/components/advanced-cosmic-background"
import { TechLanguageIcons } from "@/components/tech-language-icons"
import { ChevronDown, Sparkles } from "lucide-react"

export function EnhancedHeroSection() {
  const [mounted, setMounted] = useState(false)
  const [textVisible, setTextVisible] = useState(false)

  useEffect(() => {
    setMounted(true)
    const timer = setTimeout(() => setTextVisible(true), 500)
    return () => clearTimeout(timer)
  }, [])

  if (!mounted) return null

  return (
    <section className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8 pt-20 overflow-hidden">
      {/* Advanced Cosmic Background */}
      <AdvancedCosmicBackground />

      {/* Interactive Tech Grid */}
      <TechLanguageIcons />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Enhanced Left Content */}
          <div className="space-y-8">
            {/* Animated Badge */}
            <div
              className={`inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 backdrop-blur-md border border-white/30 shadow-xl transition-all duration-1000 ${textVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              <Sparkles className="w-4 h-4 text-purple-400 animate-pulse" />
              <span className="text-white text-sm font-semibold tracking-wide">Machine Learning Engineer</span>
              <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse shadow-lg" />
            </div>

            {/* Enhanced Main Heading with staggered animation */}
            <div className="space-y-4">
              <h1
                className={`text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-[0.9] tracking-tight transition-all duration-1000 delay-200 ${textVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              >
                <span className="block animate-text-shimmer bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent bg-[length:200%_100%]">
                  Envisioning
                </span>
                <span
                  className="block animate-text-shimmer bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent bg-[length:200%_100%]"
                  style={{ animationDelay: "0.5s" }}
                >
                  tomorrow's world:
                </span>
              </h1>
              <h2
                className={`text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.9] tracking-tight transition-all duration-1000 delay-400 ${textVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              >
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-flow bg-[length:300%_100%]">
                  Kartik Gauttam
                </span>
                <span className="text-white">'s</span>
                <br />
                <span className="text-white">visionary journey.</span>
              </h2>
            </div>

            {/* Enhanced Description */}
            <p
              className={`text-xl text-gray-300 max-w-2xl leading-relaxed font-light transition-all duration-1000 delay-600 ${textVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              I'm a Machine Learning Engineer & Software Engineer with experience in Website, Mobile, and Software
              development. <span className="text-purple-300 font-medium">Check out my projects and skills.</span>
            </p>

            {/* Enhanced CTA Button */}
            <div
              className={`transition-all duration-1000 delay-800 ${textVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <Button
                size="lg"
                className="group relative bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:from-purple-700 hover:via-pink-700 hover:to-blue-700 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-500 shadow-2xl hover:shadow-purple-500/30 hover:scale-105 border border-white/20 overflow-hidden"
                onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
              >
                <span className="relative z-10 flex items-center">
                  Learn more
                  <ChevronDown className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Bottom section indicator - Fixed alignment */}
      <div
        className={`absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center transition-all duration-1000 delay-1000 ${textVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <p className="text-purple-400 text-sm font-semibold mb-3 tracking-[0.3em] uppercase animate-pulse">
          INTRODUCTION
        </p>
        <h3 className="text-4xl sm:text-5xl md:text-6xl font-black text-white animate-text-shimmer bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent bg-[length:200%_100%]">
          Overview.
        </h3>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center backdrop-blur-sm">
          <div className="w-1 h-3 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full mt-2 animate-scroll-indicator" />
        </div>
      </div>
    </section>
  )
}

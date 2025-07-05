"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { PremiumCosmicBackground } from "@/components/premium-cosmic-background"
import { AdvancedTechGrid } from "@/components/advanced-tech-grid"
import { ChevronDown, Sparkles, Zap, Code2 } from "lucide-react"

export function PremiumHeroSection() {
  const [mounted, setMounted] = useState(false)
  const [textVisible, setTextVisible] = useState(false)
  const [currentWord, setCurrentWord] = useState(0)

  const words = ["Envisioning", "Building", "Creating", "Designing"]

  useEffect(() => {
    setMounted(true)
    const timer = setTimeout(() => setTextVisible(true), 800)

    const wordTimer = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length)
    }, 3000)

    return () => {
      clearTimeout(timer)
      clearInterval(wordTimer)
    }
  }, [])

  if (!mounted) return null

  return (
    <section className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8 pt-20 overflow-hidden">
      {/* Premium Cosmic Background */}
      <PremiumCosmicBackground />

      {/* Advanced Tech Grid */}
      <AdvancedTechGrid />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Enhanced Left Content */}
          <div className="space-y-10">
            {/* Premium Badge with icons */}
            <div
              className={`inline-flex items-center gap-4 px-8 py-4 rounded-full bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 backdrop-blur-xl border border-white/40 shadow-2xl transition-all duration-1200 ${textVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-6 scale-95"}`}
            >
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-purple-400 animate-pulse" />
                <Zap className="w-4 h-4 text-pink-400 animate-bounce" />
              </div>
              <span className="text-white text-base font-bold tracking-wide">Machine Learning Engineer</span>
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse shadow-lg" />
                <Code2 className="w-4 h-4 text-blue-400 animate-pulse" />
              </div>
            </div>

            {/* Dynamic Main Heading */}
            <div className="space-y-6">
              <h1
                className={`text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.85] tracking-tight transition-all duration-1200 delay-300 ${textVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              >
                <span className="block text-white animate-text-shimmer-enhanced bg-gradient-to-r from-white via-purple-200 via-pink-200 to-white bg-clip-text text-transparent bg-[length:300%_100%]">
                  {words[currentWord]}
                </span>
                <span
                  className="block text-white animate-text-shimmer-enhanced bg-gradient-to-r from-white via-blue-200 via-cyan-200 to-white bg-clip-text text-transparent bg-[length:300%_100%]"
                  style={{ animationDelay: "0.5s" }}
                >
                  tomorrow's world:
                </span>
              </h1>
              <h2
                className={`text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.85] tracking-tight transition-all duration-1200 delay-500 ${textVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              >
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 via-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent animate-gradient-flow-enhanced bg-[length:400%_100%]">
                  Kartik Gauttam
                </span>
                <span className="text-white">'s</span>
                <br />
                <span className="text-white">visionary journey.</span>
              </h2>
            </div>

            {/* Enhanced Description with typing effect */}
            <div
              className={`transition-all duration-1200 delay-700 ${textVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <p className="text-xl text-gray-300 max-w-2xl leading-relaxed font-light">
                I'm a <span className="text-purple-300 font-semibold">Machine Learning Engineer</span> &
                <span className="text-pink-300 font-semibold"> Software Engineer</span> with experience in
                <span className="text-blue-300 font-semibold"> Website</span>,
                <span className="text-cyan-300 font-semibold"> Mobile</span>, and
                <span className="text-green-300 font-semibold"> Software development</span>.
              </p>
              <p className="text-lg text-purple-300 font-medium mt-2 animate-pulse">
                Check out my projects and skills.
              </p>
            </div>

            {/* Premium CTA Button */}
            <div
              className={`transition-all duration-1200 delay-900 ${textVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <Button
                size="lg"
                className="group relative bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:from-purple-700 hover:via-pink-700 hover:to-blue-700 text-white px-12 py-5 rounded-full text-xl font-bold transition-all duration-700 shadow-2xl hover:shadow-purple-500/40 hover:scale-105 border border-white/30 overflow-hidden"
                onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
              >
                <span className="relative z-10 flex items-center">
                  Explore My Work
                  <ChevronDown className="w-6 h-6 ml-3 group-hover:translate-y-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-full blur opacity-30 group-hover:opacity-60 transition-opacity duration-500" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-enhanced">
        <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center backdrop-blur-sm bg-white/10 shadow-lg">
          <div className="w-2 h-4 bg-gradient-to-b from-purple-400 via-pink-400 to-blue-400 rounded-full mt-2 animate-scroll-indicator-enhanced" />
        </div>
      </div>
    </section>
  )
}

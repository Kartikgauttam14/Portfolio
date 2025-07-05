"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Instagram, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PremiumNavigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "About me", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experiences", href: "#experiences" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-6 transition-all duration-500 ${scrolled ? "py-4 bg-black/20 backdrop-blur-xl" : ""}`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Enhanced Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className="group">
            <span
              className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient-flow bg-[length:200%_100%] group-hover:scale-105 transition-transform duration-300"
              style={{ fontFamily: "cursive" }}
            >
              Kartik
            </span>
          </Link>
        </div>

        {/* Enhanced Center Navigation */}
        <div className="hidden md:block">
          <div className="bg-white/10 backdrop-blur-xl rounded-full px-8 py-3 border border-white/20 shadow-2xl hover:bg-white/15 transition-all duration-300">
            <div className="flex items-center space-x-8">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative text-white/80 hover:text-white px-3 py-2 text-sm font-medium transition-all duration-300 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item.name}
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Social Icons */}
        <div className="hidden md:flex items-center space-x-3">
          <Link
            href="https://www.instagram.com/gauttam.kartik/"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-11 h-11 bg-gradient-to-br from-pink-500/20 to-purple-500/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:from-pink-500/30 hover:to-purple-500/30 transition-all duration-300 border border-white/20 hover:border-white/40 hover:scale-110"
          >
            <Instagram className="w-4 h-4 text-white group-hover:scale-110 transition-transform duration-300" />
          </Link>
          <Link
            href="https://github.com/Kartikgauttam14"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-11 h-11 bg-gradient-to-br from-gray-500/20 to-blue-500/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:from-gray-500/30 hover:to-blue-500/30 transition-all duration-300 border border-white/20 hover:border-white/40 hover:scale-110"
          >
            <Github className="w-4 h-4 text-white group-hover:scale-110 transition-transform duration-300" />
          </Link>
        </div>

        {/* Enhanced Mobile menu button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            className="text-white hover:text-white hover:bg-white/10 transition-all duration-300"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </div>

      {/* Enhanced Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden mt-4 animate-fade-in">
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl px-4 py-6 border border-white/20 shadow-2xl">
            <div className="space-y-4">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-white/80 hover:text-white px-3 py-2 text-base font-medium transition-all duration-300 hover:bg-white/10 rounded-lg"
                  onClick={() => setIsOpen(false)}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="flex justify-center space-x-4 mt-6 pt-4 border-t border-white/20">
              <Link
                href="https://www.instagram.com/gauttam.kartik/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-300"
              >
                <Instagram className="w-6 h-6 text-white/80 hover:text-white" />
              </Link>
              <Link
                href="https://github.com/Kartikgauttam14"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-300"
              >
                <Github className="w-6 h-6 text-white/80 hover:text-white" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

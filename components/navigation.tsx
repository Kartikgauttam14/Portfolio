"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Instagram, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: "About me", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experiences", href: "#experiences" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className="text-3xl font-bold text-white" style={{ fontFamily: "cursive" }}>
            Kartik
          </Link>
        </div>

        {/* Center Navigation - Pill Shape */}
        <div className="hidden md:block">
          <div className="bg-white/10 backdrop-blur-md rounded-full px-6 py-2 border border-white/20">
            <div className="flex items-center space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white/80 hover:text-white px-3 py-2 text-sm font-medium transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            href="https://www.instagram.com/gauttam.kartik/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors border border-white/20"
          >
            <Instagram className="w-5 h-5 text-white" />
          </Link>
          <Link
            href="https://github.com/Kartikgauttam14"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors border border-white/20"
          >
            <Github className="w-5 h-5 text-white" />
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            className="text-white hover:text-white hover:bg-white/10"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden mt-4">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl px-4 py-6 border border-white/20">
            <div className="space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-white/80 hover:text-white px-3 py-2 text-base font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="flex justify-center space-x-4 mt-6 pt-4 border-t border-white/20">
              <Link href="https://www.instagram.com/gauttam.kartik/" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-6 h-6 text-white/80 hover:text-white" />
              </Link>
              <Link href="https://github.com/Kartikgauttam14" target="_blank" rel="noopener noreferrer">
                <Github className="w-6 h-6 text-white/80 hover:text-white" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

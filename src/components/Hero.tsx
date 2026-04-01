'use client'

import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-6 animate-slide-up">
            <div>
              <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-4">
                Hi, I'm{' '}
                <span className="bg-gradient bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Kartik Gauttam
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Full Stack Developer & AI/ML Enthusiast
              </p>
            </div>

            <p className="text-lg text-gray-700 dark:text-gray-400 leading-relaxed">
              Final-year B.Tech Computer Science student specializing in full-stack development and AI/ML systems. Open Source Contributor, Project Admin & Mentor at SSoC. Passionate about building scalable applications and exploring cutting-edge technologies.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 hover:shadow-lg active:scale-95"
              >
                View My Work
                <ArrowRight size={20} />
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 font-semibold rounded-lg hover:bg-blue-50 dark:hover:bg-slate-800 transition-all duration-300"
              >
                Get in Touch
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/Kartikgauttam14"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-gray-200 dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white transition-all duration-300"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/kartikgauttam14"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-gray-200 dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:kartik.k5553@gmail.com"
                className="p-3 rounded-lg bg-gray-200 dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white transition-all duration-300"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Right Side - Avatar/Illustration */}
          <div className="flex justify-center items-center animate-fade">
            <div className="w-80 h-80 rounded-2xl bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 p-1 shadow-2xl">
              <div className="w-full h-full rounded-xl bg-white dark:bg-slate-950 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-4xl font-bold text-white">KG</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 font-semibold">Kartik Gauttam</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Dev | AI/ML | Open Source</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

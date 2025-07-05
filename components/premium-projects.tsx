"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  Star,
  GitFork,
  Eye,
  Calendar,
  TrendingUp,
  Code2,
  Zap,
  Filter,
  ArrowUpRight,
  Sparkles,
} from "lucide-react"
import Link from "next/link"

const projects = [
  {
    id: 1,
    title: "FakenewsDetection",
    description:
      "An advanced machine learning project for detecting fake news using Python, NLP techniques, and deep learning models. Features real-time analysis with 94% accuracy and comprehensive data preprocessing pipeline.",
    tech: ["Python", "TensorFlow", "NLP", "Scikit-learn", "Pandas"],
    github: "https://github.com/Kartikgauttam14/FakenewsDetection",
    demo: "https://github.com/Kartikgauttam14/FakenewsDetection",
    featured: true,
    language: "Python",
    languageColor: "#3776ab",
    updated: "Updated last week",
    stats: { stars: 24, forks: 8, views: 156 },
    category: "AI/ML",
    status: "Active",
    complexity: "Advanced",
    theme: {
      primary: "from-amber-400 to-orange-500",
      secondary: "from-amber-500/20 to-orange-500/10",
      accent: "amber",
      glow: "shadow-amber-500/20",
    },
  },
  {
    id: 2,
    title: "Recipe-video-Sharing",
    description:
      "A modern TypeScript-based full-stack application for sharing recipe videos with real-time features, user authentication, video streaming, and responsive design optimized for mobile devices.",
    tech: ["TypeScript", "React", "Node.js", "MongoDB", "Socket.io"],
    github: "https://github.com/Kartikgauttam14/Recipe-video-Sharing",
    demo: "https://github.com/Kartikgauttam14/Recipe-video-Sharing",
    featured: true,
    language: "TypeScript",
    languageColor: "#3178c6",
    updated: "Updated on May 25",
    stats: { stars: 18, forks: 5, views: 89 },
    category: "Full-Stack",
    status: "Active",
    complexity: "Intermediate",
    theme: {
      primary: "from-blue-400 to-cyan-500",
      secondary: "from-blue-500/20 to-cyan-500/10",
      accent: "blue",
      glow: "shadow-blue-500/20",
    },
  },
  {
    id: 3,
    title: "Photographer_app",
    description:
      "An on-demand photographer hiring platform built with Python Django. Features comprehensive booking system, secure payment integration, portfolio showcase, and real-time chat functionality.",
    tech: ["Python", "Django", "PostgreSQL", "Redis", "AWS"],
    github: "https://github.com/Kartikgauttam14/Photographer_app",
    demo: "https://github.com/Kartikgauttam14/Photographer_app",
    featured: false,
    language: "Python",
    languageColor: "#3776ab",
    updated: "Updated on May 24",
    stats: { stars: 12, forks: 3, views: 67 },
    category: "Web App",
    status: "Completed",
    complexity: "Advanced",
    theme: {
      primary: "from-purple-400 to-pink-500",
      secondary: "from-purple-500/20 to-pink-500/10",
      accent: "purple",
      glow: "shadow-purple-500/20",
    },
  },
  {
    id: 4,
    title: "Making-Rose-With-Python",
    description:
      "A creative Python project that generates beautiful rose graphics using mathematical concepts, turtle graphics, and algorithmic art principles. Demonstrates mathematical beauty through code.",
    tech: ["Python", "Turtle Graphics", "Mathematics", "Algorithms"],
    github: "https://github.com/Kartikgauttam14/Making-Rose-With-Python",
    demo: "https://github.com/Kartikgauttam14/Making-Rose-With-Python",
    featured: false,
    language: "Python",
    languageColor: "#3776ab",
    updated: "Updated on Oct 19, 2024",
    stats: { stars: 35, forks: 12, views: 234 },
    category: "Creative",
    status: "Showcase",
    complexity: "Beginner",
    theme: {
      primary: "from-rose-400 to-pink-500",
      secondary: "from-rose-500/20 to-pink-500/10",
      accent: "rose",
      glow: "shadow-rose-500/20",
    },
  },
  {
    id: 5,
    title: "Kartikgauttam14",
    description:
      "Personal GitHub profile repository showcasing development journey, skills, and professional information with dynamic README, contribution stats, and automated updates.",
    tech: ["Markdown", "GitHub Actions", "Statistics", "Documentation"],
    github: "https://github.com/Kartikgauttam14/Kartikgauttam14",
    demo: "https://github.com/Kartikgauttam14/Kartikgauttam14",
    featured: false,
    language: "Markdown",
    languageColor: "#083fa1",
    updated: "Updated 3 weeks ago",
    stats: { stars: 8, forks: 2, views: 45 },
    category: "Profile",
    status: "Maintained",
    complexity: "Beginner",
    theme: {
      primary: "from-slate-400 to-gray-500",
      secondary: "from-slate-500/20 to-gray-500/10",
      accent: "slate",
      glow: "shadow-slate-500/20",
    },
  },
]

const categories = ["All", "AI/ML", "Full-Stack", "Web App", "Creative", "Profile"]
const statusOptions = ["All", "Active", "Completed", "Showcase", "Maintained"]

export function PremiumProjects() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedStatus, setSelectedStatus] = useState("All")
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const filteredProjects = projects.filter((project) => {
    const categoryMatch = selectedCategory === "All" || project.category === selectedCategory
    const statusMatch = selectedStatus === "All" || project.status === selectedStatus
    return categoryMatch && statusMatch
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-emerald-500/20 text-emerald-300 border-emerald-500/30"
      case "Completed":
        return "bg-blue-500/20 text-blue-300 border-blue-500/30"
      case "Showcase":
        return "bg-purple-500/20 text-purple-300 border-purple-500/30"
      case "Maintained":
        return "bg-amber-500/20 text-amber-300 border-amber-500/30"
      default:
        return "bg-gray-500/20 text-gray-300 border-gray-500/30"
    }
  }

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case "Advanced":
        return "bg-red-500/20 text-red-300 border-red-500/30"
      case "Intermediate":
        return "bg-yellow-500/20 text-yellow-300 border-yellow-500/30"
      case "Beginner":
        return "bg-green-500/20 text-green-300 border-green-500/30"
      default:
        return "bg-gray-500/20 text-gray-300 border-gray-500/30"
    }
  }

  return (
    <section id="projects" className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Premium Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10 backdrop-blur-xl border border-white/20 mb-8 animate-fade-in">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-purple-400 animate-pulse" />
              <TrendingUp className="w-5 h-5 text-pink-400" />
            </div>
            <span className="text-white text-base font-bold tracking-wide">PORTFOLIO SHOWCASE</span>
            <Code2 className="w-5 h-5 text-blue-400 animate-pulse" />
          </div>

          <h2 className="text-6xl sm:text-7xl lg:text-8xl font-black text-white mb-8 animate-fade-in delay-200">
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient-flow-enhanced bg-[length:300%_100%]">
              Featured
            </span>
            <span className="block text-white mt-2">Projects</span>
          </h2>

          <p className="text-xl text-gray-300 max-w-4xl mx-auto font-light leading-relaxed animate-fade-in delay-400">
            Explore my journey through <span className="text-purple-300 font-semibold">AI & Machine Learning</span>,
            <span className="text-pink-300 font-semibold"> Full-Stack Development</span>, and
            <span className="text-blue-300 font-semibold"> Creative Programming</span>
          </p>
        </div>

        {/* Enhanced Filters */}
        <div className="flex flex-col sm:flex-row gap-6 mb-16 animate-fade-in delay-600">
          {/* Category Filter */}
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-3">
              <Filter className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-semibold text-purple-300">Category</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={`transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white border-transparent shadow-lg"
                      : "border-white/20 text-white/80 hover:text-white hover:bg-white/10 bg-transparent"
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Status Filter */}
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-3">
              <Zap className="w-4 h-4 text-pink-400" />
              <span className="text-sm font-semibold text-pink-300">Status</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {statusOptions.map((status) => (
                <Button
                  key={status}
                  variant={selectedStatus === status ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedStatus(status)}
                  className={`transition-all duration-300 ${
                    selectedStatus === status
                      ? "bg-gradient-to-r from-pink-500 to-blue-500 text-white border-transparent shadow-lg"
                      : "border-white/20 text-white/80 hover:text-white hover:bg-white/10 bg-transparent"
                  }`}
                >
                  {status}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-20">
          {filteredProjects.map((project, index) => (
            <Card
              key={project.id}
              className={`group relative bg-black/40 backdrop-blur-xl border border-white/30 hover:border-white/50 transition-all duration-700 hover:scale-[1.02] animate-fade-in-up overflow-hidden ${
                project.featured ? "lg:col-span-2 xl:col-span-1" : ""
              }`}
              style={{
                animationDelay: `${index * 150}ms`,
              }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Animated Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.theme.primary} opacity-0 group-hover:opacity-5 transition-opacity duration-700`}
              />

              {/* Glow Effect */}
              <div
                className={`absolute inset-0 ${project.theme.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10 blur-xl`}
              />

              {/* Header Badges */}
              <div className="absolute top-4 right-4 z-20 flex gap-2">
                <Badge className={`${getStatusColor(project.status)} backdrop-blur-sm font-semibold`}>
                  {project.status}
                </Badge>
                {project.featured && (
                  <Badge className="bg-gradient-to-r from-purple-500/30 to-pink-500/30 text-purple-200 border-purple-500/40 backdrop-blur-sm font-semibold">
                    Featured
                  </Badge>
                )}
              </div>

              <CardHeader className="relative z-10 pb-4">
                {/* Project Meta */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-4 h-4 rounded-full shadow-lg border border-white/20"
                      style={{ backgroundColor: project.languageColor }}
                    />
                    <span className="text-sm text-gray-200 font-medium">{project.language}</span>
                    <div className="w-1 h-1 bg-gray-400 rounded-full" />
                    <span className="text-xs text-purple-200 font-semibold">{project.category}</span>
                  </div>

                  <Badge className={`${getComplexityColor(project.complexity)} font-semibold backdrop-blur-sm`}>
                    {project.complexity}
                  </Badge>
                </div>

                {/* Project Title */}
                <CardTitle className="text-white text-2xl font-black group-hover:text-white transition-all duration-300 mb-4 drop-shadow-sm">
                  {project.title}
                </CardTitle>

                {/* Project Description */}
                <p className="text-gray-200 text-sm leading-relaxed font-normal mb-6 line-clamp-4">
                  {project.description}
                </p>

                {/* Project Stats */}
                <div className="flex items-center gap-6 mb-4">
                  <div className="flex items-center gap-2 text-yellow-300">
                    <Star className="w-4 h-4 fill-current drop-shadow-sm" />
                    <span className="text-sm font-bold drop-shadow-sm">{project.stats.stars}</span>
                  </div>
                  <div className="flex items-center gap-2 text-blue-300">
                    <GitFork className="w-4 h-4 drop-shadow-sm" />
                    <span className="text-sm font-bold drop-shadow-sm">{project.stats.forks}</span>
                  </div>
                  <div className="flex items-center gap-2 text-emerald-300">
                    <Eye className="w-4 h-4 drop-shadow-sm" />
                    <span className="text-sm font-bold drop-shadow-sm">{project.stats.views}</span>
                  </div>
                </div>

                {/* Last Updated */}
                <div className="flex items-center gap-2 text-xs text-gray-300 mb-6">
                  <Calendar className="w-3 h-3" />
                  <span>{project.updated}</span>
                </div>
              </CardHeader>

              <CardContent className="relative z-10 pt-0">
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech, techIndex) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className={`text-xs px-3 py-1.5 bg-white/10 text-white border-white/30 font-medium hover:scale-105 transition-all duration-200 backdrop-blur-sm hover:bg-white/20`}
                      style={{ animationDelay: `${techIndex * 50}ms` }}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="flex-1 border-white/40 text-white hover:bg-white/20 bg-white/10 backdrop-blur-sm font-semibold transition-all duration-300 hover:scale-105 group/btn"
                  >
                    <Link href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform duration-300" />
                      Code
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className={`flex-1 bg-gradient-to-r ${project.theme.primary} bg-opacity-30 border-white/30 text-white hover:bg-opacity-40 backdrop-blur-sm font-semibold transition-all duration-300 hover:scale-105 group/btn`}
                  >
                    <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ArrowUpRight className="w-4 h-4 mr-2 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                      View
                    </Link>
                  </Button>
                </div>
              </CardContent>

              {/* Hover Border Animation */}
              <div
                className={`absolute inset-0 rounded-lg bg-gradient-to-r ${project.theme.primary} opacity-0 group-hover:opacity-20 transition-opacity duration-700 -z-10 blur-sm`}
              />
            </Card>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center animate-fade-in delay-800">
          <div className="inline-flex flex-col items-center gap-8 p-10 rounded-3xl bg-gradient-to-br from-purple-500/10 via-pink-500/5 to-blue-500/10 backdrop-blur-xl border border-white/20 shadow-2xl">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center shadow-2xl">
                <Github className="w-8 h-8 text-white" />
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-black text-white mb-2">Explore More Projects</h3>
                <p className="text-gray-400 text-base">Discover all repositories and open-source contributions</p>
              </div>
            </div>

            <Button
              size="lg"
              asChild
              className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:from-purple-700 hover:via-pink-700 hover:to-blue-700 text-white font-bold px-10 py-4 rounded-full hover:scale-105 transition-all duration-300 shadow-xl group border-0"
            >
              <Link
                href="https://github.com/Kartikgauttam14?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                View All Repositories on GitHub
                <ArrowUpRight className="w-5 h-5 ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

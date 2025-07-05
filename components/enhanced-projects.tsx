import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Star, GitFork, Eye, Calendar, TrendingUp } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "FakenewsDetection",
    description:
      "An advanced machine learning project for detecting fake news using Python, NLP techniques, and deep learning models. Features real-time analysis and high accuracy detection.",
    tech: ["Python", "Machine Learning", "NLP", "TensorFlow", "Scikit-learn"],
    github: "https://github.com/Kartikgauttam14/FakenewsDetection",
    demo: "https://github.com/Kartikgauttam14/FakenewsDetection",
    featured: true,
    language: "Python",
    updated: "Updated last week",
    gradient: "from-yellow-500/20 via-orange-500/15 to-red-500/10",
    stats: { stars: 24, forks: 8, views: 156 },
    category: "AI/ML",
    status: "Active",
    complexity: "Advanced",
  },
  {
    title: "Recipe-video-Sharing",
    description:
      "A modern TypeScript-based full-stack application for sharing recipe videos with real-time features, user authentication, and responsive design.",
    tech: ["TypeScript", "React", "Node.js", "MongoDB", "Socket.io"],
    github: "https://github.com/Kartikgauttam14/Recipe-video-Sharing",
    demo: "https://github.com/Kartikgauttam14/Recipe-video-Sharing",
    featured: true,
    language: "TypeScript",
    updated: "Updated on May 25",
    gradient: "from-blue-500/20 via-cyan-500/15 to-teal-500/10",
    stats: { stars: 18, forks: 5, views: 89 },
    category: "Full-Stack",
    status: "Active",
    complexity: "Intermediate",
  },
  {
    title: "Photographer_app",
    description:
      "An on-demand photographer hiring platform built with Python. Features booking system, payment integration, portfolio showcase, and real-time chat.",
    tech: ["Python", "Django", "PostgreSQL", "Redis", "AWS"],
    github: "https://github.com/Kartikgauttam14/Photographer_app",
    demo: "https://github.com/Kartikgauttam14/Photographer_app",
    featured: false,
    language: "Python",
    updated: "Updated on May 24",
    gradient: "from-purple-500/20 via-pink-500/15 to-rose-500/10",
    stats: { stars: 12, forks: 3, views: 67 },
    category: "Web App",
    status: "Completed",
    complexity: "Advanced",
  },
  {
    title: "Making-Rose-With-Python",
    description:
      "A creative Python project that generates beautiful rose graphics using mathematical concepts, turtle graphics, and algorithmic art principles.",
    tech: ["Python", "Turtle Graphics", "Mathematics", "Algorithms"],
    github: "https://github.com/Kartikgauttam14/Making-Rose-With-Python",
    demo: "https://github.com/Kartikgauttam14/Making-Rose-With-Python",
    featured: false,
    language: "Python",
    updated: "Updated on Oct 19, 2024",
    gradient: "from-pink-500/20 via-rose-500/15 to-red-500/10",
    stats: { stars: 35, forks: 12, views: 234 },
    category: "Creative",
    status: "Showcase",
    complexity: "Beginner",
  },
  {
    title: "Kartikgauttam14",
    description:
      "Personal GitHub profile repository showcasing development journey, skills, and professional information with dynamic README and stats.",
    tech: ["Markdown", "GitHub Actions", "Statistics", "Documentation"],
    github: "https://github.com/Kartikgauttam14/Kartikgauttam14",
    demo: "https://github.com/Kartikgauttam14/Kartikgauttam14",
    featured: false,
    language: "Markdown",
    updated: "Updated 3 weeks ago",
    gradient: "from-gray-500/20 via-slate-500/15 to-zinc-500/10",
    stats: { stars: 8, forks: 2, views: 45 },
    category: "Profile",
    status: "Maintained",
    complexity: "Beginner",
  },
]

export function EnhancedProjects() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-md border border-white/20 mb-6 animate-fade-in">
            <TrendingUp className="w-5 h-5 text-purple-400" />
            <span className="text-purple-300 text-sm font-semibold tracking-wide">PORTFOLIO SHOWCASE</span>
          </div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 animate-fade-in delay-200">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient-flow-enhanced bg-[length:300%_100%]">
              Featured
            </span>
            <br />
            <span className="text-white">Projects</span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed animate-fade-in delay-400">
            Showcasing my work in <span className="text-purple-300 font-semibold">AI/ML development</span>,
            <span className="text-pink-300 font-semibold"> full-stack solutions</span>, and
            <span className="text-blue-300 font-semibold"> creative programming</span>
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className={`group relative bg-gradient-to-br ${project.gradient} backdrop-blur-md border border-white/20 hover:border-white/40 transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl animate-fade-in-up overflow-hidden ${
                project.featured ? "lg:col-span-2 xl:col-span-1" : ""
              }`}
              style={{
                animationDelay: `${index * 150}ms`,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
              }}
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/5 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              {/* Status Badge */}
              <div className="absolute top-4 right-4 z-10">
                <div
                  className={`px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm border ${
                    project.status === "Active"
                      ? "bg-green-500/20 text-green-300 border-green-500/30"
                      : project.status === "Completed"
                        ? "bg-blue-500/20 text-blue-300 border-blue-500/30"
                        : project.status === "Showcase"
                          ? "bg-purple-500/20 text-purple-300 border-purple-500/30"
                          : "bg-gray-500/20 text-gray-300 border-gray-500/30"
                  }`}
                >
                  {project.status}
                </div>
              </div>

              <CardHeader className="relative z-10">
                {/* Project Meta */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-4 h-4 rounded-full ${
                        project.language === "TypeScript"
                          ? "bg-blue-500"
                          : project.language === "Python"
                            ? "bg-yellow-500"
                            : project.language === "JavaScript"
                              ? "bg-yellow-400"
                              : "bg-gray-500"
                      } shadow-lg`}
                    />
                    <span className="text-sm text-gray-400 font-medium">{project.language}</span>
                    <div className="w-1 h-1 bg-gray-500 rounded-full" />
                    <span className="text-xs text-purple-400 font-semibold">{project.category}</span>
                  </div>

                  <div
                    className={`px-2 py-1 rounded-md text-xs font-bold ${
                      project.complexity === "Advanced"
                        ? "bg-red-500/20 text-red-300"
                        : project.complexity === "Intermediate"
                          ? "bg-yellow-500/20 text-yellow-300"
                          : "bg-green-500/20 text-green-300"
                    }`}
                  >
                    {project.complexity}
                  </div>
                </div>

                {/* Project Title */}
                <CardTitle className="text-white text-2xl font-bold group-hover:text-purple-300 transition-colors duration-300 mb-3">
                  {project.title}
                </CardTitle>

                {/* Project Description */}
                <p className="text-gray-300 text-sm leading-relaxed font-light mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Project Stats */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1 text-yellow-400">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm font-medium">{project.stats.stars}</span>
                  </div>
                  <div className="flex items-center gap-1 text-blue-400">
                    <GitFork className="w-4 h-4" />
                    <span className="text-sm font-medium">{project.stats.forks}</span>
                  </div>
                  <div className="flex items-center gap-1 text-green-400">
                    <Eye className="w-4 h-4" />
                    <span className="text-sm font-medium">{project.stats.views}</span>
                  </div>
                </div>

                {/* Last Updated */}
                <div className="flex items-center gap-2 text-xs text-purple-400 mb-4">
                  <Calendar className="w-3 h-3" />
                  <span>{project.updated}</span>
                </div>
              </CardHeader>

              <CardContent className="relative z-10">
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1.5 bg-gradient-to-r from-purple-500/30 to-pink-500/30 text-purple-200 rounded-full border border-purple-500/40 font-medium shadow-sm hover:scale-105 transition-transform duration-200"
                      style={{ animationDelay: `${techIndex * 50}ms` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="flex-1 border-white/30 text-white hover:bg-white/20 bg-white/10 backdrop-blur-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg group"
                  >
                    <Link href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                      Code
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="flex-1 border-white/30 text-white hover:bg-white/20 bg-white/10 backdrop-blur-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg group"
                  >
                    <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                      View
                    </Link>
                  </Button>
                </div>
              </CardContent>

              {/* Animated Border */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10 blur-xl" />
            </Card>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center">
          <div className="inline-flex flex-col items-center gap-6 p-8 rounded-3xl bg-gradient-to-br from-purple-500/10 via-pink-500/5 to-blue-500/10 backdrop-blur-md border border-white/20 shadow-2xl animate-fade-in delay-500">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
                <Github className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <h3 className="text-xl font-bold text-white mb-1">Explore More Projects</h3>
                <p className="text-gray-400 text-sm">Discover all repositories and contributions</p>
              </div>
            </div>

            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-white/30 text-white hover:bg-white/20 bg-white/10 backdrop-blur-sm font-semibold px-8 py-3 rounded-full hover:scale-105 transition-all duration-300 shadow-lg group"
            >
              <Link
                href="https://github.com/Kartikgauttam14?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                View All 5 Repositories on GitHub
                <ExternalLink className="w-4 h-4 ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl animate-pulse opacity-60" />
      <div
        className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl animate-pulse opacity-40"
        style={{ animationDelay: "2s" }}
      />
    </section>
  )
}

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "FakenewsDetection",
    description:
      "A machine learning project for detecting fake news using Python and natural language processing techniques.",
    tech: ["Python", "Machine Learning", "NLP", "Data Science"],
    github: "https://github.com/Kartikgauttam14/FakenewsDetection",
    demo: "https://github.com/Kartikgauttam14/FakenewsDetection",
    featured: true,
    language: "Python",
    updated: "Updated last week",
  },
  {
    title: "Recipe-video-Sharing",
    description: "A TypeScript-based application for sharing recipe videos with modern web technologies.",
    tech: ["TypeScript", "Web Development", "Video Sharing", "Frontend"],
    github: "https://github.com/Kartikgauttam14/Recipe-video-Sharing",
    demo: "https://github.com/Kartikgauttam14/Recipe-video-Sharing",
    featured: true,
    language: "TypeScript",
    updated: "Updated on May 25",
  },
  {
    title: "Photographer_app",
    description:
      "This is the on demand Photographer hiring application built with Python for connecting clients with photographers.",
    tech: ["Python", "Web Application", "Hiring Platform", "Backend"],
    github: "https://github.com/Kartikgauttam14/Photographer_app",
    demo: "https://github.com/Kartikgauttam14/Photographer_app",
    featured: false,
    language: "Python",
    updated: "Updated on May 24",
  },
  {
    title: "Making-Rose-With-Python",
    description:
      "A creative Python project that generates beautiful rose graphics using programming and mathematical concepts.",
    tech: ["Python", "Graphics", "Mathematics", "Creative Coding"],
    github: "https://github.com/Kartikgauttam14/Making-Rose-With-Python",
    demo: "https://github.com/Kartikgauttam14/Making-Rose-With-Python",
    featured: false,
    language: "Python",
    updated: "Updated on Oct 19, 2024",
  },
  {
    title: "Kartikgauttam14",
    description: "Personal GitHub profile repository showcasing my development journey and professional information.",
    tech: ["Markdown", "Profile", "Documentation"],
    github: "https://github.com/Kartikgauttam14/Kartikgauttam14",
    demo: "https://github.com/Kartikgauttam14/Kartikgauttam14",
    featured: false,
    language: "Markdown",
    updated: "Updated 3 weeks ago",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Showcasing my work in web development, AI collaboration, and full-stack solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className={`bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 ${
                project.featured ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-white text-xl">{project.title}</CardTitle>
                  <div className="flex items-center gap-1">
                    <div
                      className={`w-3 h-3 rounded-full ${
                        project.language === "TypeScript"
                          ? "bg-blue-500"
                          : project.language === "Python"
                            ? "bg-yellow-500"
                            : project.language === "JavaScript"
                              ? "bg-yellow-400"
                              : "bg-gray-500"
                      }`}
                    ></div>
                    <span className="text-xs text-gray-400">{project.language}</span>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-2">{project.description}</p>
                <p className="text-xs text-purple-400">{project.updated}</p>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="border-white/20 text-white hover:bg-white/10 bg-transparent"
                  >
                    <Link href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="border-white/20 text-white hover:bg-white/10 bg-transparent"
                  >
                    <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            asChild
            className="border-white/20 text-white hover:bg-white/10 bg-transparent"
          >
            <Link href="https://github.com/Kartikgauttam14?tab=repositories" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              View All 5 Repositories on GitHub
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

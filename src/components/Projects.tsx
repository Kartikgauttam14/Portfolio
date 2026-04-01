'use client'

import { ExternalLink, Github } from 'lucide-react'

export default function Projects() {
  const projects = [
    {
      title: 'TripTogether',
      description:
        'Real-time group trip planning platform with collaborative features, payment integration, and cloud storage.',
      technologies: [
        'React',
        'Node.js',
        'PostgreSQL',
        'Socket.IO',
        'Stripe',
        'Cloudinary',
      ],
      link: '#',
      github: 'https://github.com/Kartikgauttam14/TripTogether',
      featured: true,
    },
    {
      title: 'Brain with AI',
      description:
        'Neural BCI dashboard classifying EEG signals using machine learning with Google Gemini AI integration for advanced analysis.',
      technologies: ['Streamlit', 'Next.js', 'PyTorch', 'Google Gemini AI'],
      link: '#',
      github: 'https://github.com/Kartikgauttam14/BrainWithAI',
      featured: true,
    },
    {
      title: 'FakeNewsDetection',
      description:
        'Transformer-based NLP system using BERT/RoBERTa with explainability features using SHAP and LIME.',
      technologies: ['FastAPI', 'Docker', 'BERT', 'RoBERTa', 'SHAP', 'LIME'],
      link: '#',
      github: 'https://github.com/Kartikgauttam14/FakeNewsDetection',
      featured: true,
    },
    {
      title: 'Techzolo',
      description: 'Technology learning platform with interactive courses and resources.',
      technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
      link: 'https://techzolo.vercel.app',
      github: '#',
      featured: false,
    },
    {
      title: 'Ayushmanbhav Hospital',
      description: 'Hospital management and patient portal with appointment scheduling.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      link: 'https://ayushmanbhav.vercel.app',
      github: '#',
      featured: false,
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Showcase of my recent work demonstrating full-stack development, AI/ML expertise, and problem-solving abilities.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {projects
            .filter((p) => p.featured)
            .map((project, index) => (
              <div
                key={project.title}
                className="group h-full bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-500 flex flex-col animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-1 p-6 flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium text-purple-700 dark:text-purple-300 bg-purple-100 dark:bg-purple-900 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="px-6 pb-6 flex gap-3">
                  {project.link !== '#' && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 flex-1 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all duration-300 justify-center"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  )}
                  {project.github !== '#' && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 flex-1 rounded-lg border-2 border-gray-300 dark:border-slate-600 text-gray-700 dark:text-gray-300 font-semibold hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-500 dark:hover:text-blue-400 transition-all duration-300 justify-center"
                    >
                      <Github size={18} />
                      Code
                    </a>
                  )}
                </div>
              </div>
            ))}
        </div>

        {/* Other Projects */}
        {projects.filter((p) => !p.featured).length > 0 && (
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Other Projects
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects
                .filter((p) => !p.featured)
                .map((project) => (
                  <div
                    key={project.title}
                    className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-gray-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-300"
                  >
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      {project.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs font-medium text-purple-700 dark:text-purple-300 bg-purple-100 dark:bg-purple-900 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline font-semibold"
                    >
                      View Project
                      <ExternalLink size={16} />
                    </a>
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

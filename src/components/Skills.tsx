'use client'

import { Code2, Brain, Cpu, GitBranch, Zap, Cloud } from 'lucide-react'

export default function Skills() {
  const skillCategories = [
    {
      icon: Code2,
      category: 'Languages',
      skills: ['JavaScript', 'TypeScript', 'Python'],
    },
    {
      icon: Cpu,
      category: 'Frontend',
      skills: ['React.js', 'Next.js', 'Tailwind CSS', 'Streamlit'],
    },
    {
      icon: GitBranch,
      category: 'Backend',
      skills: ['Node.js', 'Express', 'FastAPI', 'REST APIs'],
    },
    {
      icon: Brain,
      category: 'AI/ML',
      skills: ['PyTorch', 'BERT', 'RoBERTa', 'Google Gemini AI', 'SHAP', 'LIME'],
    },
    {
      icon: Cloud,
      category: 'Databases',
      skills: ['PostgreSQL', 'MongoDB', 'Prisma ORM'],
    },
    {
      icon: Zap,
      category: 'DevOps & Tools',
      skills: ['Docker', 'Git', 'Socket.IO', 'Cloudinary', 'Stripe'],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit of technologies and frameworks I use to build modern, scalable applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <div
                key={index}
                className="group bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-500 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white group-hover:dark:bg-blue-500 transition-all duration-300">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {category.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm font-medium text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-900 rounded-full hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

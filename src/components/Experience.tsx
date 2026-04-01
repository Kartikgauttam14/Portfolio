'use client'

import { Briefcase, MapPin, Calendar } from 'lucide-react'

export default function Experience() {
  const experiences = [
    {
      title: 'Project Admin & Mentor',
      company: 'Social Summer of Code (SSoC)',
      period: 'March 2026 – Present',
      location: 'Remote',
      description: [
        'Manages open-source repositories and oversees project governance',
        'Conducts code reviews and provides constructive feedback',
        'Mentors students in React, Node.js, and Python development',
        'Facilitates knowledge sharing and best practices across teams',
      ],
      skills: ['React', 'Node.js', 'Python', 'Git', 'Leadership'],
    },
    {
      title: 'Business Development Manager & Web Solutions',
      company: 'ServerStep',
      period: 'April 2023 – Present',
      location: 'Delhi NCR, India',
      description: [
        'Scoped and analyzed client requirements for web hosting solutions',
        'Supported client onboarding and implementation processes',
        'Designed and deployed custom web solutions',
        'Maintained strong client relationships and satisfaction',
      ],
      skills: ['Web Development', 'Client Management', 'Business Analysis'],
    },
  ]

  const education = [
    {
      degree: 'B.Tech in Computer Science & Engineering (AI & ML)',
      institution: 'Kurukshetra University',
      period: 'Sept 2024 – June 2027',
      description: 'Specialization in Artificial Intelligence and Machine Learning with focus on deep learning and NLP applications.',
    },
    {
      degree: 'Full Stack Development & APIs',
      institution: 'Udemy',
      courses: ['Full Stack Development', 'Python REST APIs', 'Docker & Kubernetes', 'MongoDB Mastery'],
    },
    {
      degree: 'Business Analytics & Excel',
      institution: 'Simplilearn',
      courses: ['Business Analytics', 'Excel Macros & VBA', 'Python Basics'],
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        {/* Experience */}
        <div className="mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4 animate-slide-up">
            Professional Experience
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 animate-slide-up">
            My journey in tech and professional development
          </p>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-slate-700 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                      <Briefcase className="text-blue-600 dark:text-blue-400" size={24} />
                      {exp.title}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold mt-1">
                      {exp.company}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-600 dark:text-gray-400 flex items-center gap-2">
                      <Calendar size={18} />
                      {exp.period}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-600 dark:text-gray-400 flex items-center gap-2">
                      <MapPin size={18} />
                      {exp.location}
                    </p>
                  </div>
                </div>

                <ul className="space-y-2 mb-6">
                  {exp.description.map((point, i) => (
                    <li key={i} className="text-gray-700 dark:text-gray-300 flex items-start gap-3">
                      <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm font-medium text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-900 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4 animate-slide-up">
            Education
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 animate-slide-up">
            Continuous learning and professional development
          </p>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-slate-700 animate-slide-up"
                style={{ animationDelay: `${(experiences.length + index) * 0.1}s` }}
              >
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {edu.degree}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">
                  {edu.institution}
                </p>
                {edu.period && (
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                    {edu.period}
                  </p>
                )}
                {edu.description && (
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    {edu.description}
                  </p>
                )}
                {edu.courses && (
                  <div className="flex flex-wrap gap-2">
                    {edu.courses.map((course) => (
                      <span
                        key={course}
                        className="px-3 py-1 text-xs font-medium text-purple-700 dark:text-purple-300 bg-purple-100 dark:bg-purple-900 rounded-full"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

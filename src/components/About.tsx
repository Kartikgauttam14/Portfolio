'use client'

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-slate-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-8 animate-slide-up">
          About Me
        </h2>

        <div className="space-y-6 text-gray-700 dark:text-gray-300 text-lg leading-relaxed animate-slide-up">
          <p>
            I'm Kartik Gauttam, a final-year B.Tech Computer Science student at Kurukshetra University with a specialization in Artificial Intelligence and Machine Learning. I'm passionate about building innovative solutions that solve real-world problems using cutting-edge technologies.
          </p>

          <p>
            My journey in tech started in 2020 when I began contributing to open-source projects on GitHub. Since then, I've developed a strong foundation in full-stack development, from crafting beautiful user interfaces with React and Next.js to building robust backend systems with Node.js and Python-based APIs.
          </p>

          <p>
            As a Project Admin and Mentor at Social Summer of Code (SSoC), I have the privilege of guiding students and reviewing code contributions. This role has deepened my understanding of software architecture, best practices, and the importance of collaborative development.
          </p>

          <p>
            Beyond coding, I'm fascinated by the intersection of AI and real-world applications. I've worked on projects involving NLP (Natural Language Processing), EEG signal classification, and explainable AI, using technologies like BERT, PyTorch, and Google Gemini AI.
          </p>

          <p>
            Currently, I'm open to opportunities in Delhi NCR, Bangalore, Hyderabad, and Mumbai where I can contribute to innovative projects and continue growing as a software developer and AI enthusiast.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {[
            { number: '6+', label: 'Projects Shipped' },
            { number: '4+', label: 'Years of Coding' },
            { number: '15+', label: 'Technologies' },
            { number: '100%', label: 'Dedication' },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-slate-700 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {stat.number}
              </div>
              <p className="text-gray-600 dark:text-gray-400 font-semibold">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

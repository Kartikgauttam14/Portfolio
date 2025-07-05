import { Card, CardContent } from "@/components/ui/card"

const skillCategories = [
  {
    title: "Frontend Development",
    skills: ["JavaScript", "TypeScript", "React.js", "HTML", "CSS", "Frontend"],
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Backend Development",
    skills: ["Python", "Backend APIs", "Server Development", "Database"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Programming Languages",
    skills: ["Python", "JavaScript", "TypeScript", "C", "C++", "Kotlin"],
    color: "from-green-500 to-teal-500",
  },
  {
    title: "AI & Development",
    skills: ["AI Development", "Machine Learning", "Domain Development", "Web Development"],
    color: "from-orange-500 to-red-500",
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Skills & Technologies</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building intelligent systems and scalable applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={category.title}
              className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <CardContent className="p-6">
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mb-4`}
                >
                  <span className="text-white font-bold text-lg">{category.title.charAt(0)}</span>
                </div>
                <h3 className="text-white font-semibold text-lg mb-4">{category.title}</h3>
                <div className="space-y-2">
                  {category.skills.map((skill) => (
                    <div key={skill} className="text-gray-300 text-sm py-1 px-2 bg-white/5 rounded">
                      {skill}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

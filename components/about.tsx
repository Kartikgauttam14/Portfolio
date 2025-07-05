import Image from "next/image"

export function About() {
  return (
    <section id="about" className="py-32 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-left mb-20">
          <p className="text-purple-400 text-sm font-medium mb-6 tracking-[0.2em] uppercase">INTRODUCTION</p>
          <h2 className="text-6xl sm:text-7xl md:text-8xl font-bold text-white mb-8">Overview.</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a passionate frontend & backend developer from India with expertise in building modern web
              applications and exploring AI development opportunities. Currently working on domain and website
              development projects.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              With strong skills in Python, React.js, JavaScript, and other modern technologies, I specialize in
              creating efficient backend systems and intuitive frontend interfaces. I'm currently learning Python
              backend development and expanding my React.js expertise.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm actively looking to collaborate on AI Development projects and always excited to work on challenging
              programming problems. Feel free to reach out if you want to discuss Python, React.js, C, C++, HTML, CSS,
              or JavaScript!
            </p>
          </div>

          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-3xl backdrop-blur-sm border border-white/10 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent"></div>
              <div className="text-center relative z-10">
                <div className="w-48 h-48 rounded-full overflow-hidden mb-6 mx-auto backdrop-blur-sm border-4 border-white/20 shadow-2xl">
                  <Image
                    src="/images/profile.jpg"
                    alt="Kartik Gauttam - Frontend & Backend Developer"
                    width={192}
                    height={192}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3">Kartik Gauttam</h3>
                <p className="text-purple-400 text-lg mb-2">ML Engineer & Developer</p>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-300 text-sm font-medium">#OPENTOWORK</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

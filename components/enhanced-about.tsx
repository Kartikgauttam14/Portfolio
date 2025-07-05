import Image from "next/image"
import { Card } from "@/components/ui/card"

export function EnhancedAbout() {
  return (
    <section id="about" className="py-32 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-purple-400 text-sm font-semibold mb-6 tracking-[0.3em] uppercase animate-fade-in">
            INTRODUCTION
          </p>
          <h2 className="text-6xl sm:text-7xl md:text-8xl font-black text-white mb-8 animate-slide-in-left">
            Overview.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <p className="text-gray-300 text-lg leading-relaxed font-light">
              I'm a passionate frontend & backend developer from India with expertise in building modern web
              applications and exploring AI development opportunities. Currently working on domain and website
              development projects.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed font-light">
              With strong skills in Python, React.js, JavaScript, and other modern technologies, I specialize in
              creating efficient backend systems and intuitive frontend interfaces. I'm currently learning Python
              backend development and expanding my React.js expertise.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed font-light">
              I'm actively looking to collaborate on AI Development projects and always excited to work on challenging
              programming problems. Feel free to reach out if you want to discuss Python, React.js, C, C++, HTML, CSS,
              or JavaScript!
            </p>
          </div>

          <div className="relative animate-fade-in-up delay-300">
            <Card className="w-full h-96 bg-gradient-to-br from-purple-500/20 via-pink-500/10 to-blue-500/20 backdrop-blur-sm border border-white/20 flex items-center justify-center relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-tl from-blue-500/10 to-transparent"></div>

              <div className="text-center relative z-10">
                <div className="w-52 h-52 rounded-full overflow-hidden mb-6 mx-auto backdrop-blur-sm border-4 border-white/30 shadow-2xl hover:scale-105 transition-transform duration-300">
                  <Image
                    src="/images/profile.jpg"
                    alt="Kartik Gauttam - Frontend & Backend Developer"
                    width={208}
                    height={208}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Kartik Gauttam</h3>
                <p className="text-purple-400 text-lg mb-4 font-medium">ML Engineer & Developer</p>
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/40 shadow-lg">
                  <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full animate-pulse shadow-lg"></div>
                  <span className="text-green-300 text-sm font-semibold tracking-wide">#OPENTOWORK</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

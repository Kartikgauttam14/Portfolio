import { PremiumHeroSection } from "@/components/premium-hero-section"
import { EnhancedAbout } from "@/components/enhanced-about"
import { Skills } from "@/components/skills"
import { PremiumProjects } from "@/components/premium-projects"
import { Contact } from "@/components/contact"
import { PremiumNavigation } from "@/components/premium-navigation"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 relative overflow-hidden">
      <PremiumNavigation />
      <PremiumHeroSection />
      <EnhancedAbout />
      <Skills />
      <PremiumProjects />
      <Contact />
    </main>
  )
}

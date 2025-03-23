import BusinessAISection from "@/components/BusinessAISection"
import HeroSection from "@/components/HeroSection"
import Navbar from "@/components/Navbar"
import CompanyLogos from "@/components/Partners"
import Title from "@/components/shared/Title"

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <Title
        text="Alpharithm - Home"
      />
      <Navbar />
      <HeroSection />
      <CompanyLogos />
      <BusinessAISection />
    </main>
  )
}

import { Header } from "@/components/sections/header"
import { HeroSection } from "@/components/sections/hero"
import { StatsSection } from "@/components/sections/stats"
import { HowItWorksSection } from "@/components/sections/how-it-works"
import { PhoneMockupSection } from "@/components/sections/phone-mockup"
import { B2BSection } from "@/components/sections/b2b-section"
import { FAQSection } from "@/components/sections/faq-section"
import { Footer } from "@/components/sections/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <StatsSection />
      <section id="how-it-works">
        <HowItWorksSection />
      </section>
      <PhoneMockupSection />
      <section id="b2b">
        <B2BSection />
      </section>
      <section id="faq">
        <FAQSection />
      </section>
      <Footer />
    </main>
  )
}

import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProductsSection } from "@/components/products-section"
import { ProcessSection } from "@/components/process-section"
import { BenefitsSection } from "@/components/benefits-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { CtaBanner } from "@/components/cta-banner"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <ProcessSection />
      <BenefitsSection />
      <CtaBanner />
      <PortfolioSection />
      <ContactSection />
      <Footer />
    </main>
  )
}

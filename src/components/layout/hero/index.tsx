import { Container } from "@/components/ui/container"
import { HeroContent } from "./hero-content"
import { HeroVisual } from "./hero-visual"

export function HeroSection() {
  return (
    <section
      id="home"
      className="flex min-h-[80vh] items-center py-12 lg:py-24"
      aria-label="Introduction"
    >
      <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
        {/* Left Side: Content */}
        <div className="lg:col-span-7">
          <HeroContent />
        </div>

        {/* Right Side: Abstract Illustration */}
        <div className="flex justify-center lg:col-span-5 lg:justify-end">
          <HeroVisual />
        </div>
      </Container>
    </section>
  )
}
export default HeroSection

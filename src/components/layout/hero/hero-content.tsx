import { Heading } from "@/components/ui/heading"
import { Badge } from "@/components/ui/badge"
import { heroContent } from "@/content/hero"
import { HeroActions } from "./hero-actions"
import { HeroSocial } from "./hero-social"

export function HeroContent() {
  return (
    <div className="space-y-6">
      {/* Eyebrow badge */}
      {heroContent.badge && (
        <div>
          <Badge variant="brand" className="tracking-wider uppercase">
            {heroContent.badge}
          </Badge>
        </div>
      )}

      {/* Main heading */}
      <div className="space-y-3">
        <Heading
          size="h1"
          as="h1"
          className="leading-tight font-black tracking-tight"
        >
          {heroContent.title}
          <span className="text-gradient-brand mt-1 block">
            {heroContent.titleGradientText}
          </span>
        </Heading>
      </div>

      {/* Supporting description */}
      <p className="text-muted-foreground max-w-xl text-base leading-relaxed sm:text-lg">
        {heroContent.subtitle}
      </p>

      {/* CTA Buttons */}
      <HeroActions />

      {/* Divider */}
      <div className="bg-border/40 h-px w-full pt-1" />

      {/* Social Links */}
      <HeroSocial />
    </div>
  )
}

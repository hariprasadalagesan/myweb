"use client"

import { motion, useReducedMotion } from "framer-motion"
import { ArrowUpRight, Download } from "lucide-react"
import { Container } from "@/components/ui/container"
import { Heading } from "@/components/ui/heading"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { heroContent } from "@/content/hero"
import { socialLinks } from "@/content/social"
import { cn } from "@/lib/utils"

export function Hero() {
  const shouldReduceMotion = useReducedMotion()

  // Social platform icon helper
  const renderSocialIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case "github":
        return (
          <svg
            className="size-4.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
            <path d="M9 18c-4.51 2-5-2-7-2" />
          </svg>
        )
      case "linkedin":
        return (
          <svg
            className="size-4.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect width="4" height="12" x="2" y="9" rx="1" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        )
      case "twitter / x":
      case "twitter":
        return (
          <svg
            className="size-4.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
          </svg>
        )
      default:
        return null
    }
  }

  // Animation variants
  const leftSideVariants = {
    hidden: { opacity: 0, x: shouldReduceMotion ? 0 : -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  }

  const childVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
    },
  }

  return (
    <Container className="grid grid-cols-1 items-center gap-12 py-12 lg:grid-cols-12 lg:gap-8 lg:py-24">
      {/* LEFT: CONTENT AREA */}
      <motion.div
        variants={leftSideVariants}
        initial="hidden"
        animate="visible"
        className="space-y-6 lg:col-span-7"
      >
        {heroContent.badge && (
          <motion.div variants={childVariants}>
            <Badge variant="brand" className="tracking-wider uppercase">
              {heroContent.badge}
            </Badge>
          </motion.div>
        )}

        <motion.div variants={childVariants} className="space-y-3">
          <Heading size="h1" as="h1" className="font-black">
            {heroContent.title}
            <span className="text-gradient-brand mt-1 block">
              {heroContent.titleGradientText}
            </span>
          </Heading>
        </motion.div>

        <motion.p
          variants={childVariants}
          className="text-muted-foreground max-w-xl text-base leading-relaxed sm:text-lg"
        >
          {heroContent.subtitle}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={childVariants}
          className="flex flex-wrap gap-3 pt-2"
        >
          {heroContent.actions.map((action) => (
            <a
              key={action.label}
              href={action.href}
              className={cn(
                buttonVariants({
                  variant: action.variant,
                  size: action.variant === "ghost" ? "default" : "lg",
                }),
                "focus-visible:ring-brand-primary cursor-pointer gap-1.5 rounded-full focus-visible:ring-2"
              )}
            >
              {action.label}
              {action.icon === "ArrowRight" && (
                <ArrowUpRight className="size-4.5" />
              )}
              {action.icon === "Download" && <Download className="size-4" />}
            </a>
          ))}
        </motion.div>

        {/* Divider */}
        <motion.div
          variants={childVariants}
          className="bg-border/40 h-px w-full pt-1"
        />

        {/* Social Links */}
        <motion.div
          variants={childVariants}
          className="flex items-center gap-5 pt-1"
        >
          <span className="text-muted-foreground font-mono text-xs tracking-widest uppercase">
            Connect
          </span>
          <div className="flex items-center gap-4">
            {socialLinks
              .filter((link) => link.active && link.platform !== "Email")
              .map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground hover:text-foreground focus-visible:outline-brand-primary rounded-md p-1 transition-all duration-200 focus-visible:outline-2"
                  aria-label={`View Hariprasad's ${link.platform} profile`}
                >
                  {renderSocialIcon(link.platform)}
                </a>
              ))}
          </div>
        </motion.div>
      </motion.div>

      {/* RIGHT: ABSTRACT DEVELOPER ILLUSTRATION */}
      <div className="flex justify-center lg:col-span-5 lg:justify-end">
        <motion.div
          initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex aspect-square w-full max-w-sm items-center justify-center"
        >
          {/* Radial Gradient Backlight Glow */}
          <div className="from-brand-cyan/10 via-brand-primary/10 to-brand-purple/10 absolute inset-0 rounded-full bg-gradient-to-tr blur-3xl" />

          {/* Floating abstract code widget panel */}
          <motion.div
            animate={
              shouldReduceMotion
                ? {}
                : {
                    y: [0, -10, 0],
                  }
            }
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="glass-panel bg-card/40 dark:bg-card/25 shadow-premium-lg border-border/40 noise-overlay relative flex h-80 w-full flex-col overflow-hidden rounded-2xl"
          >
            {/* Mock Header Dots (Apple Inspired) */}
            <div className="border-border/20 flex items-center gap-1.5 border-b px-5 py-3.5">
              <span className="size-2.5 rounded-full bg-red-500/60 dark:bg-red-500/40" />
              <span className="size-2.5 rounded-full bg-amber-500/60 dark:bg-amber-500/40" />
              <span className="size-2.5 rounded-full bg-green-500/60 dark:bg-green-500/40" />
              <span className="text-muted-foreground/60 ml-3 font-mono text-[10px]">
                system.ts
              </span>
            </div>

            {/* Mock Editor Content area (Geometric code shapes) */}
            <div className="flex flex-grow flex-col justify-center space-y-3.5 p-6 font-mono text-[10px]">
              {/* Line 1 */}
              <div className="flex items-center gap-2">
                <span className="text-brand-purple font-semibold">import</span>
                <span className="text-foreground/80">{"{ architect }"}</span>
                <span className="text-brand-purple font-semibold">from</span>
                <span className="text-brand-cyan">"hariworks"</span>
              </div>

              {/* Line 2 */}
              <div className="flex items-center gap-2 pl-4">
                <span className="text-brand-orange">const</span>
                <span className="text-foreground/85">system</span>
                <span className="text-foreground/60">=</span>
                <span className="text-brand-primary">architect</span>
                <span className="text-foreground/50">()</span>
              </div>

              {/* Line 3 (Abstract grid shape inside window representing a compiler grid) */}
              <div className="py-2 pl-4">
                <div className="border-border/20 bg-background/30 grid-bg relative h-16 w-full overflow-hidden rounded-lg border opacity-75">
                  <div className="from-brand-cyan/20 to-brand-purple/20 absolute inset-0 bg-gradient-to-r opacity-30" />
                  {/* Floating visual nodes */}
                  <div className="bg-brand-cyan animate-pulse-slow absolute top-3 left-4 size-1.5 rounded-full" />
                  <div className="bg-brand-purple absolute right-10 bottom-4 size-2 animate-pulse rounded-full" />
                  <div className="bg-brand-orange absolute top-2 right-4 h-1 w-8 rounded" />
                </div>
              </div>

              {/* Line 4 */}
              <div className="flex items-center gap-2">
                <span className="text-brand-purple">export default</span>
                <span className="text-brand-primary">system</span>
                <span className="text-foreground/50">.</span>
                <span className="text-brand-cyan">deploy</span>
                <span className="text-foreground/50">()</span>
              </div>
            </div>

            {/* Abstract floating terminal dot */}
            <div className="text-muted-foreground/60 absolute right-5 bottom-4 flex items-center gap-2 font-mono text-[9px]">
              <span className="bg-brand-cyan size-2 animate-pulse rounded-full" />
              <span>production.ready</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </Container>
  )
}
export default Hero

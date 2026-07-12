"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Heading } from "@/components/ui/heading"
import { Badge } from "@/components/ui/badge"
import { heroContent } from "@/content/hero"
import { HeroActions } from "./hero-actions"
import { HeroSocial } from "./hero-social"
import {
  heroStagger,
  fadeIn,
  fadeInUp,
  scaleFadeIn,
  noMotion,
} from "@/lib/animations"

export function HeroContent() {
  const shouldReduceMotion = useReducedMotion()

  const container = shouldReduceMotion ? noMotion(heroStagger) : heroStagger
  const item = shouldReduceMotion ? noMotion(fadeInUp) : fadeInUp
  const badge = shouldReduceMotion ? noMotion(scaleFadeIn) : scaleFadeIn

  return (
    <motion.div
      className="space-y-6"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {/* Eyebrow badge */}
      {heroContent.badge && (
        <motion.div variants={badge}>
          <Badge variant="brand" className="tracking-wider uppercase">
            {heroContent.badge}
          </Badge>
        </motion.div>
      )}

      {/* Main heading */}
      <motion.div className="space-y-3" variants={item}>
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
      </motion.div>

      {/* Supporting description */}
      <motion.p
        className="text-muted-foreground max-w-xl text-base leading-relaxed sm:text-lg"
        variants={item}
      >
        {heroContent.subtitle}
      </motion.p>

      {/* CTA Buttons */}
      <motion.div variants={item}>
        <HeroActions />
      </motion.div>

      {/* Divider */}
      <motion.div className="bg-border/40 h-px w-full pt-1" variants={fadeIn} />

      {/* Social Links */}
      <motion.div variants={item}>
        <HeroSocial />
      </motion.div>
    </motion.div>
  )
}

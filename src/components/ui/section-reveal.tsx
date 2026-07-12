"use client"

import { motion, useReducedMotion } from "framer-motion"
import { sectionReveal, noMotion } from "@/lib/animations"
import { cn } from "@/lib/utils"

interface SectionRevealProps {
  children: React.ReactNode
  className?: string
  /** Delay before animation starts (seconds). Default 0. */
  delay?: number
}

/**
 * Wraps a section in a scroll-triggered fade-up entrance.
 * Fires once on first viewport entry. Respects prefers-reduced-motion.
 */
export function SectionReveal({
  children,
  className,
  delay = 0,
}: SectionRevealProps) {
  const shouldReduceMotion = useReducedMotion()

  const variants = shouldReduceMotion ? noMotion(sectionReveal) : sectionReveal

  return (
    <motion.div
      className={cn(className)}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={
        delay > 0
          ? { ease: [0.16, 1, 0.3, 1], duration: 0.6, delay }
          : undefined
      }
    >
      {children}
    </motion.div>
  )
}

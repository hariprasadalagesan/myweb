"use client"

import { motion, useReducedMotion } from "framer-motion"

export function HeroVisual() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <div
      className="relative flex aspect-square w-full max-w-sm items-center justify-center"
      aria-hidden="true"
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
    </div>
  )
}
export default HeroVisual

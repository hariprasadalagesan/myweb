import { Variants } from "framer-motion"

// ─── Ease Presets (Apple/Linear inspired) ─────────────────────────────────────
export const ease = {
  /** Standard spring — nav indicators, modals */
  spring: { type: "spring", stiffness: 380, damping: 30 } as const,
  /** Gentle spring — card elevation, social icons */
  gentle: { type: "spring", stiffness: 200, damping: 22 } as const,
  /** Snappy spring — button press, badges */
  snappy: { type: "spring", stiffness: 500, damping: 35 } as const,
  /** Bezier ease-out — page entrance, section reveals */
  easeOut: { ease: [0.16, 1, 0.3, 1], duration: 0.55 } as const,
  /** Fast micro — theme toggle, icon swap */
  micro: { ease: "easeInOut", duration: 0.18 } as const,
} as const

// Keep legacy alias for backwards compat
export const transitionPresets = {
  smooth: ease.spring,
  gentle: ease.gentle,
  easeOut: ease.easeOut,
  micro: ease.micro,
} as const

// ─── Core Entrance Variants ────────────────────────────────────────────────────

/** Full-page fade-in — wrap the root layout body */
export const pageEntrance: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { ease: [0.16, 1, 0.3, 1], duration: 0.4 },
  },
}

/** Fade in only — no movement */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: ease.easeOut,
  },
}

/** Fade in + slide up (primary section reveal) */
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: ease.easeOut,
  },
}

/** Fade in + slide down (navbar entrance) */
export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: ease.easeOut,
  },
}

/** Scale fade in — badges, pills, tags */
export const scaleFadeIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: ease.easeOut,
  },
}

// ─── Stagger Containers ────────────────────────────────────────────────────────

/**
 * Stagger children entrance.
 * @param staggerChildren gap between each child (default 0.08s)
 * @param delayChildren initial delay before first child (default 0)
 */
export const staggerContainer = (
  staggerChildren = 0.08,
  delayChildren = 0
): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
})

/**
 * Hero stagger — slightly larger gaps for dramatic entrance
 */
export const heroStagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
}

/**
 * Section reveal container — wraps an entire section.
 * Use with `whileInView` + `viewport={{ once: true }}`.
 */
export const sectionReveal: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.16, 1, 0.3, 1],
      duration: 0.6,
    },
  },
}

// ─── Interactive Hover/Tap Variants ───────────────────────────────────────────

/** Card soft elevation — project cards, skill cards */
export const cardHover = {
  rest: { scale: 1, y: 0 },
  hover: {
    scale: 1.015,
    y: -3,
    transition: ease.gentle,
  },
  tap: { scale: 0.995, y: 0, transition: ease.snappy },
}

/** Button press micro-animation */
export const buttonPress = {
  rest: { scale: 1 },
  hover: { scale: 1.02, transition: ease.gentle },
  tap: { scale: 0.97, transition: ease.snappy },
}

/** Icon hover scale — social links, action icons */
export const iconHover = {
  rest: { scale: 1 },
  hover: { scale: 1.12, transition: ease.gentle },
  tap: { scale: 0.92, transition: ease.snappy },
}

// ─── Reduced-Motion Safe Fallback ─────────────────────────────────────────────

/**
 * Returns variants that resolve instantly when reduced motion is preferred.
 * Usage: `const variants = reducedMotion ? noMotionVariants(base) : base`
 */
export function noMotion<T extends Variants>(variants: T): T {
  const safe: Variants = {}
  for (const key of Object.keys(variants)) {
    safe[key] = {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: { duration: 0 },
    }
  }
  return safe as T
}

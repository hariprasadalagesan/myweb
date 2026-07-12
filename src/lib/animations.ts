import { Variants } from "framer-motion"

// Standard ease transitions (Apple/Linear inspired)
export const transitionPresets = {
  smooth: { type: "spring", stiffness: 380, damping: 30 },
  gentle: { type: "spring", stiffness: 100, damping: 15 },
  easeOut: { ease: [0.16, 1, 0.3, 1], duration: 0.6 },
  micro: { ease: "easeInOut", duration: 0.2 },
} as const

// Fade in animation variant
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: transitionPresets.easeOut,
  },
}

// Fade in and slide up variant
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitionPresets.easeOut,
  },
}

// Fade in and slide down variant (useful for dropdowns/navbars)
export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitionPresets.easeOut,
  },
}

// Hover effects
export const hoverScale = {
  tap: { scale: 0.98 },
  hover: { scale: 1.02, transition: { duration: 0.2 } },
}

// Stagger child elements container variant
export const staggerContainer = (
  staggerChildren = 0.1,
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

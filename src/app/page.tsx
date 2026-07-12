"use client"

import * as React from "react"
import { motion } from "framer-motion"
import {
  Sparkles,
  Palette,
  Layers,
  ArrowRight,
  Check,
  Terminal,
  Eye,
  Sliders,
  Maximize2,
} from "lucide-react"
import { Container, SectionHeader } from "@/components/ui/container"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

// Animation configurations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
} as const

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
} as const

export default function Home() {
  const [copiedColor, setCopiedColor] = React.useState<string | null>(null)

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text)
    setCopiedColor(label)
    setTimeout(() => setCopiedColor(null), 2000)
  }

  const colors = [
    {
      label: "Background",
      variable: "var(--background)",
      hex: "oklch(0.99 0.003 240)",
      desc: "Main page body fill",
    },
    {
      label: "Foreground",
      variable: "var(--foreground)",
      hex: "oklch(0.12 0.015 240)",
      desc: "High contrast reading text",
    },
    {
      label: "Primary",
      variable: "var(--primary)",
      hex: "oklch(0.15 0.02 240)",
      desc: "Primary actions and branding",
    },
    {
      label: "Secondary",
      variable: "var(--secondary)",
      hex: "oklch(0.95 0.01 240)",
      desc: "Subtle backgrounds and panels",
    },
    {
      label: "Muted",
      variable: "var(--muted)",
      hex: "oklch(0.95 0.01 240)",
      desc: "Unfocused texts and dividers",
    },
    {
      label: "Accent",
      variable: "var(--accent)",
      hex: "oklch(0.94 0.015 240)",
      desc: "Component hover backdrops",
    },
    {
      label: "Border",
      variable: "var(--border)",
      hex: "oklch(0.92 0.01 240)",
      desc: "Fine divider and border lines",
    },
    {
      label: "Indigo Brand",
      variable: "var(--brand-primary)",
      hex: "oklch(0.55 0.22 260)",
      desc: "HariWorks signature accent",
    },
    {
      label: "Cyan Brand",
      variable: "var(--brand-cyan)",
      hex: "oklch(0.70 0.18 190)",
      desc: "Linear-style teal highlight",
    },
    {
      label: "Purple Brand",
      variable: "var(--brand-purple)",
      hex: "oklch(0.60 0.23 290)",
      desc: "Vibrant accent gradient stop",
    },
    {
      label: "Orange Brand",
      variable: "var(--brand-orange)",
      hex: "oklch(0.65 0.20 40)",
      desc: "Apple-style secondary focal point",
    },
  ]

  return (
    <Container className="py-12">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto mb-20 max-w-4xl text-center"
      >
        <span className="text-brand-primary bg-brand-primary/10 border-brand-primary/15 mb-6 inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs font-semibold tracking-wider uppercase">
          <Sparkles className="animate-spin-slow size-3.5" />
          Foundation Established
        </span>
        <h1 className="text-gradient-brand mb-6 font-black tracking-tight">
          HariWorks Design System
        </h1>
        <p className="text-muted-foreground mx-auto max-w-2xl text-xl leading-relaxed">
          A premium, minimal, and highly accessible user interface blueprint
          designed for engineer Hariprasad. Powered by Next.js 16, Tailwind CSS
          v4, and Framer Motion.
        </p>
      </motion.div>

      {/* Grid Layout of Design Sections */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-24"
      >
        {/* SECTION 1: TYPOGRAPHY & TEXT GRADIENTS */}
        <motion.div variants={itemVariants} className="scroll-mt-24">
          <SectionHeader
            title="Typography & Text Styles"
            subtitle="Premium sans-serif scales configured for semantic flow, balanced line-heights, and responsive font sizing."
            badge="01 / Typography"
          />

          <Card hoverGlow className="p-8">
            <div className="space-y-8">
              <div className="border-border/40 border-b pb-6">
                <span className="text-muted-foreground mb-2 block font-mono text-xs">
                  Display H1 (h1) — text-4xl sm:text-5xl md:text-6xl
                </span>
                <h1 className="text-foreground">
                  Building digital systems that scale.
                </h1>
              </div>

              <div className="border-border/40 border-b pb-6">
                <span className="text-muted-foreground mb-2 block font-mono text-xs">
                  Section Header H2 (h2) — text-2xl sm:text-3xl md:text-4xl
                </span>
                <h2 className="text-foreground">
                  Engineering with principles and aesthetics.
                </h2>
              </div>

              <div className="border-border/40 border-b pb-6">
                <span className="text-muted-foreground mb-2 block font-mono text-xs">
                  Sub-header H3 (h3) — text-xl sm:text-2xl
                </span>
                <h3 className="text-foreground">
                  The intersection of form and performance.
                </h3>
              </div>

              <div className="border-border/40 border-b pb-6">
                <span className="text-muted-foreground mb-2 block font-mono text-xs">
                  Body Text (p) — text-base leading-relaxed
                </span>
                <p>
                  HariWorks prioritizes atomic spacing guidelines, clean markup,
                  and optimized performance to guarantee an unmatched reading
                  experience.
                </p>
              </div>

              <div>
                <span className="text-muted-foreground mb-3 block font-mono text-xs">
                  Premium Text Gradients (.text-gradient & .text-gradient-brand)
                </span>
                <div className="flex flex-col gap-3 sm:flex-row sm:gap-8">
                  <h3 className="text-gradient font-bold">
                    Standard Silver-Charcoal Gradient
                  </h3>
                  <h3 className="text-gradient-brand font-bold">
                    Dynamic Linear Accent Gradient
                  </h3>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* SECTION 2: THEME TOKENS & COLORS */}
        <motion.div variants={itemVariants} className="scroll-mt-24">
          <SectionHeader
            title="Theme Tokens & Colors"
            subtitle="Curated HSL/OKLCH color system adjusted dynamically for perfect accessibility contrast in light & dark modes."
            badge="02 / Colors"
          />

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {colors.map((color) => (
              <Card
                key={color.label}
                interactive
                onClick={() => copyToClipboard(color.hex, color.label)}
                className="border-border/40 flex h-40 cursor-pointer flex-col justify-between overflow-hidden p-5 hover:scale-[1.02]"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="text-foreground text-sm font-bold">
                      {color.label}
                    </h4>
                    <span className="text-muted-foreground font-mono text-xs">
                      {color.hex}
                    </span>
                  </div>
                  <div
                    className="border-border/60 size-8 rounded-full border shadow-inner"
                    style={{ backgroundColor: color.variable }}
                  />
                </div>

                <div className="flex items-end justify-between">
                  <p className="text-muted-foreground/80 max-w-[80%] text-[11px] leading-snug">
                    {color.desc}
                  </p>
                  {copiedColor === color.label ? (
                    <span className="flex items-center gap-0.5 text-[10px] font-semibold text-emerald-500">
                      <Check className="size-3" /> Copied
                    </span>
                  ) : (
                    <span className="text-muted-foreground/40 group-hover:text-muted-foreground font-mono text-[10px]">
                      Copy
                    </span>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* SECTION 3: BUTTON CATALOG */}
        <motion.div variants={itemVariants} className="scroll-mt-24">
          <SectionHeader
            title="Premium Button System"
            subtitle="Configured states, shapes, and layouts with micro-active transforms and focus feedback."
            badge="03 / Buttons"
          />

          <Card hoverGlow className="p-8">
            <div className="space-y-8">
              <div>
                <span className="text-muted-foreground mb-4 block font-mono text-xs">
                  Button Variants
                </span>
                <div className="flex flex-wrap gap-4">
                  <Button variant="default">Default Button</Button>
                  <Button variant="secondary">Secondary Button</Button>
                  <Button variant="outline">Outline Button</Button>
                  <Button variant="ghost">Ghost Button</Button>
                  <Button variant="destructive">Destructive Button</Button>
                  <Button variant="link">Link Button</Button>
                </div>
              </div>

              <div className="bg-border/40 h-px" />

              <div>
                <span className="text-muted-foreground mb-4 block font-mono text-xs">
                  Button Sizes
                </span>
                <div className="flex flex-wrap items-center gap-4">
                  <Button size="xs" variant="outline">
                    Extra Small
                  </Button>
                  <Button size="sm" variant="outline">
                    Small Button
                  </Button>
                  <Button size="default" variant="outline">
                    Default Size
                  </Button>
                  <Button size="lg" variant="outline">
                    Large Button
                  </Button>
                </div>
              </div>

              <div className="bg-border/40 h-px" />

              <div>
                <span className="text-muted-foreground mb-4 block font-mono text-xs">
                  Interactive Combinations
                </span>
                <div className="flex flex-wrap gap-4">
                  <Button className="group cursor-pointer gap-2">
                    Get Started{" "}
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Button
                    variant="outline"
                    className="group cursor-pointer gap-2"
                  >
                    Explore Code{" "}
                    <Terminal className="text-brand-primary size-4" />
                  </Button>
                  <Button variant="secondary" className="cursor-pointer gap-2">
                    View Demo <Eye className="size-4" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* SECTION 4: CARDS & INTERACTIVES */}
        <motion.div variants={itemVariants} className="scroll-mt-24">
          <SectionHeader
            title="Cards & Interaction States"
            subtitle="Demonstrating glassmorphism panels, static card grids, and interactive light-following border glows."
            badge="04 / Cards"
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Card 1: Static Card */}
            <Card interactive={false} glass={false} className="p-6">
              <span className="bg-muted text-foreground mb-4 flex size-8 items-center justify-center rounded-lg">
                <Layers className="size-4.5" />
              </span>
              <h3 className="mb-2 text-lg font-semibold">Static Card</h3>
              <p className="mb-4 text-sm">
                A simple non-interactive container with solid backgrounds and
                subtle borders. Best for read-only sections.
              </p>
              <div className="bg-muted/40 text-muted-foreground rounded p-2 font-mono text-xs">
                interactive=&#123;false&#125; glass=&#123;false&#125;
              </div>
            </Card>

            {/* Card 2: Glass Card */}
            <Card
              interactive
              glass
              className="flex h-full flex-col justify-between p-6"
            >
              <div>
                <span className="bg-brand-primary/10 text-brand-primary mb-4 flex size-8 items-center justify-center rounded-lg">
                  <Palette className="size-4.5" />
                </span>
                <h3 className="mb-2 text-lg font-semibold">
                  Glassmorphic Card
                </h3>
                <p className="mb-4 text-sm">
                  Translucent backdrop filter panel reflecting layout colors
                  behind it. Perfect for modern, structured grids.
                </p>
              </div>
              <div className="bg-muted/40 text-muted-foreground mt-auto rounded p-2 font-mono text-xs">
                interactive=&#123;true&#125; glass=&#123;true&#125;
              </div>
            </Card>

            {/* Card 3: Hover Glow Card */}
            <Card
              hoverGlow
              interactive
              className="flex h-full flex-col justify-between p-6"
            >
              <div>
                <span className="mb-4 flex size-8 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-500">
                  <Sparkles className="size-4.5" />
                </span>
                <h3 className="mb-2 text-lg font-semibold">
                  Cursor-Follow Glow
                </h3>
                <p className="mb-4 text-sm">
                  Hover and move your cursor over this card. A radial gradient
                  tracks your movements and lights up the borders.
                </p>
              </div>
              <div className="bg-muted/40 text-muted-foreground mt-auto rounded p-2 font-mono text-xs">
                hoverGlow=&#123;true&#125;
              </div>
            </Card>
          </div>
        </motion.div>

        {/* SECTION 5: GRID & SECTION LAYOUTS */}
        <motion.div variants={itemVariants} className="scroll-mt-24">
          <SectionHeader
            title="Responsive Layout & Spacing Rules"
            subtitle="Consistent structural constraints that adapt seamlessly from mobile viewports to large-screen monitors."
            badge="05 / Layout"
          />

          <Card hoverGlow className="p-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="space-y-4">
                <h4 className="text-foreground flex items-center gap-2 text-base font-semibold">
                  <Sliders className="text-brand-primary size-4.5" /> Spacing
                  Tokens (Padding/Margins)
                </h4>
                <p className="text-sm">
                  We leverage strict spacing increments (`py-16 sm:py-24
                  md:py-32`) to achieve consistent rhythm throughout section
                  transitions.
                </p>
                <div className="grid grid-cols-5 gap-2 pt-2">
                  <div className="bg-brand-primary/5 border-brand-primary/10 flex h-10 items-center justify-center rounded border font-mono text-xs">
                    4
                  </div>
                  <div className="bg-brand-primary/10 border-brand-primary/15 flex h-10 items-center justify-center rounded border font-mono text-xs">
                    8
                  </div>
                  <div className="bg-brand-primary/15 border-brand-primary/20 flex h-10 items-center justify-center rounded border font-mono text-xs">
                    12
                  </div>
                  <div className="bg-brand-primary/20 border-brand-primary/25 flex h-10 items-center justify-center rounded border font-mono text-xs">
                    16
                  </div>
                  <div className="bg-brand-primary/25 border-brand-primary/30 flex h-10 items-center justify-center rounded border font-mono text-xs">
                    24
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-foreground flex items-center gap-2 text-base font-semibold">
                  <Maximize2 className="text-brand-primary size-4.5" />{" "}
                  Breakpoints & Containers
                </h4>
                <p className="text-sm">
                  Responsive design is mobile-first. Breakpoints follow Tailwind
                  standards, ensuring full compatibility across diverse screens:
                </p>
                <ul className="bg-muted/40 space-y-1 rounded-xl border p-4 font-mono text-xs">
                  <li className="flex justify-between">
                    <span>Mobile (Base)</span>{" "}
                    <span className="text-muted-foreground">&lt; 640px</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Small (sm)</span>{" "}
                    <span className="text-muted-foreground">640px</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Medium (md)</span>{" "}
                    <span className="text-muted-foreground">768px</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Large (lg)</span>{" "}
                    <span className="text-muted-foreground">1024px</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Extra Large (xl)</span>{" "}
                    <span className="text-muted-foreground">1280px</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </motion.div>
      </motion.div>
    </Container>
  )
}

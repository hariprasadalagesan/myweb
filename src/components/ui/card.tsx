"use client"

import * as React from "react"
import { motion, useMotionTemplate, useMotionValue } from "framer-motion"
import { cn } from "@/lib/utils"

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverGlow?: boolean
  glass?: boolean
  interactive?: boolean
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      className,
      hoverGlow = false,
      glass = true,
      interactive = true,
      children,
      ...props
    },
    ref
  ) => {
    // Mouse tracking for custom linear border-glow cursor follow
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    function handleMouseMove({
      currentTarget,
      clientX,
      clientY,
    }: React.MouseEvent) {
      const { left, top } = currentTarget.getBoundingClientRect()
      mouseX.set(clientX - left)
      mouseY.set(clientY - top)
    }

    const cardClasses = cn(
      "group relative overflow-hidden rounded-2xl border transition-all duration-300",
      glass
        ? "glass-panel bg-card/60 dark:bg-card/40"
        : "bg-card border-border text-card-foreground shadow-sm",
      interactive &&
        "hover:shadow-md hover:border-muted-foreground/30 hover:-translate-y-0.5",
      className
    )

    return (
      <div
        ref={ref}
        onMouseMove={hoverGlow ? handleMouseMove : undefined}
        className={cardClasses}
        {...props}
      >
        {/* Dynamic Glow Overlay for Linear-style cursor tracking */}
        {hoverGlow && (
          <motion.div
            className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{
              background: useMotionTemplate`
                radial-gradient(
                  450px circle at ${mouseX}px ${mouseY}px,
                  rgba(99, 102, 241, 0.08),
                  transparent 80%
                )
              `,
            }}
          />
        )}

        {/* Fine border glow overlay */}
        {hoverGlow && (
          <motion.div
            className="pointer-events-none absolute -inset-px z-10 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{
              background: useMotionTemplate`
                radial-gradient(
                  150px circle at ${mouseX}px ${mouseY}px,
                  rgba(99, 102, 241, 0.25),
                  transparent 80%
                )
              `,
            }}
          />
        )}

        <div className="noise-overlay relative z-20 h-full w-full">
          {children}
        </div>
      </div>
    )
  }
)
Card.displayName = "Card"

export const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

export const CardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-foreground text-lg font-semibold tracking-tight sm:text-xl",
      className
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

export const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-muted-foreground text-sm leading-normal", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

export const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-muted-foreground p-6 pt-0 text-sm", className)}
    {...props}
  />
))
CardContent.displayName = "CardContent"

export const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "border-border/20 mt-auto flex items-center border-t p-6 pt-0",
      className
    )}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

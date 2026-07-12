import * as React from "react"
import { cn } from "@/lib/utils"

// Container: handles horizontal width constraints and gutters
interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType
  clean?: boolean
}

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, as: Component = "div", clean = false, ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(
          !clean && "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8",
          className
        )}
        {...props}
      />
    )
  }
)
Container.displayName = "Container"

// Section: handles vertical layout structure and standard padding blocks
interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType
  background?: "default" | "muted" | "grid" | "gradient"
  decorations?: boolean
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  (
    {
      className,
      as: Component = "section",
      background = "default",
      decorations = false,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <Component
        ref={ref}
        className={cn(
          "relative overflow-hidden py-16 sm:py-24 md:py-32",
          background === "muted" && "bg-muted/40 dark:bg-muted/10",
          background === "grid" && "grid-bg bg-background",
          background === "gradient" &&
            "from-background to-muted/20 dark:to-muted/5 bg-gradient-to-b",
          className
        )}
        {...props}
      >
        {decorations && background === "grid" && (
          <div className="from-background to-background pointer-events-none absolute inset-0 bg-gradient-to-b via-transparent" />
        )}
        {children}
      </Component>
    )
  }
)
Section.displayName = "Section"

// SectionHeader: standardized layout titles, subtitles, and badges
interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  subtitle?: string
  badge?: string
  align?: "left" | "center"
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  badge,
  align = "left",
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        "mb-12 flex max-w-3xl flex-col sm:mb-16",
        align === "center" ? "mx-auto items-center text-center" : "text-left",
        className
      )}
      {...props}
    >
      {badge && (
        <span className="text-brand-primary bg-brand-primary/10 dark:bg-brand-primary/15 animate-pulse-slow mb-4 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold tracking-wider uppercase">
          {badge}
        </span>
      )}
      <h2 className="text-gradient text-3xl leading-tight font-bold sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground mt-4 text-lg leading-relaxed text-pretty">
          {subtitle}
        </p>
      )}
    </div>
  )
}
SectionHeader.displayName = "SectionHeader"

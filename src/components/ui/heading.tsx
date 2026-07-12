import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const headingVariants = cva(
  "font-heading tracking-tight text-foreground font-bold",
  {
    variants: {
      size: {
        h1: "text-4xl sm:text-5xl md:text-6xl leading-[1.1]",
        h2: "text-2xl sm:text-3xl md:text-4xl leading-[1.2]",
        h3: "text-xl sm:text-2xl leading-[1.3] font-semibold",
        h4: "text-lg sm:text-xl leading-[1.4] font-semibold",
        h5: "text-base sm:text-lg leading-[1.4] font-medium",
        h6: "text-sm sm:text-base leading-[1.4] font-medium",
      },
      gradient: {
        none: "",
        default: "text-gradient",
        brand: "text-gradient-brand",
      },
      align: {
        left: "text-left",
        center: "text-center",
        right: "text-right",
      },
    },
    defaultVariants: {
      size: "h2",
      gradient: "none",
      align: "left",
    },
  }
)

export interface HeadingProps
  extends
    React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
}

export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, size, gradient, align, as, ...props }, ref) => {
    const Component =
      as || (size as "h1" | "h2" | "h3" | "h4" | "h5" | "h6") || "h2"

    return (
      <Component
        ref={ref}
        className={cn(headingVariants({ size, gradient, align }), className)}
        {...props}
      />
    )
  }
)
Heading.displayName = "Heading"

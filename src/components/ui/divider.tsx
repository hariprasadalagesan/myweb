import * as React from "react"
import { cn } from "@/lib/utils"

export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical"
  variant?: "solid" | "gradient" | "dashed"
  labelPosition?: "start" | "center" | "end"
}

export const Divider = React.forwardRef<HTMLDivElement, DividerProps>(
  (
    {
      className,
      orientation = "horizontal",
      variant = "solid",
      labelPosition = "center",
      children,
      ...props
    },
    ref
  ) => {
    const isHorizontal = orientation === "horizontal"

    return (
      <div
        ref={ref}
        role="separator"
        aria-orientation={orientation}
        className={cn(
          "flex items-center",
          isHorizontal ? "my-6 w-full" : "mx-6 h-full self-stretch",
          className
        )}
        {...props}
      >
        {isHorizontal ? (
          <>
            <div
              className={cn(
                "h-px flex-grow",
                variant === "solid" && "bg-border",
                variant === "dashed" && "border-border border-t border-dashed",
                variant === "gradient" &&
                  "to-border bg-gradient-to-r from-transparent"
              )}
            />
            {children && (
              <span
                className={cn(
                  "text-muted-foreground px-3 font-mono text-xs font-medium whitespace-nowrap",
                  labelPosition === "start" && "order-first pr-3 pl-0",
                  labelPosition === "end" && "order-last pr-0 pl-3"
                )}
              >
                {children}
              </span>
            )}
            <div
              className={cn(
                "h-px flex-grow",
                variant === "solid" && "bg-border",
                variant === "dashed" && "border-border border-t border-dashed",
                variant === "gradient" &&
                  "to-border bg-gradient-to-l from-transparent",
                children && labelPosition === "end" && "hidden",
                children && labelPosition === "start" && "flex-grow"
              )}
            />
          </>
        ) : (
          <div
            className={cn(
              "h-full min-h-[1em] w-px",
              variant === "solid" && "bg-border",
              variant === "dashed" && "border-border border-l border-dashed",
              variant === "gradient" &&
                "via-border bg-gradient-to-b from-transparent to-transparent"
            )}
          />
        )}
      </div>
    )
  }
)
Divider.displayName = "Divider"

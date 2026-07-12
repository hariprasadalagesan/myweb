import { ArrowUpRight, Download } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { heroContent } from "@/content/hero"
import { cn } from "@/lib/utils"

export function HeroActions() {
  return (
    <div className="flex flex-wrap gap-3 pt-2">
      {heroContent.actions.map((action) => (
        <a
          key={action.label}
          href={action.href}
          className={cn(
            buttonVariants({
              variant: action.variant,
              size: action.variant === "ghost" ? "default" : "lg",
            }),
            "focus-visible:ring-brand-primary cursor-pointer gap-1.5 rounded-full focus-visible:ring-2"
          )}
        >
          {action.label}
          {action.icon === "ArrowRight" && (
            <ArrowUpRight className="size-4.5" />
          )}
          {action.icon === "Download" && <Download className="size-4" />}
        </a>
      ))}
    </div>
  )
}

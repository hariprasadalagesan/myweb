import { MapPin, Calendar } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Heading } from "@/components/ui/heading"
import { ExperienceItem } from "@/types"
import { cn } from "@/lib/utils"

export interface TimelineProps {
  items: ExperienceItem[]
  className?: string
}

export function Timeline({ items, className }: TimelineProps) {
  return (
    <div
      className={cn(
        "border-border/80 relative ml-4 space-y-12 border-l py-4 pl-6 md:ml-6 md:pl-8",
        className
      )}
    >
      {items.map((item, index) => (
        <div
          key={`${item.company}-${item.role}-${index}`}
          className="group relative"
        >
          {/* Bullet Point Indicator */}
          <span className="bg-background border-border group-hover:border-brand-primary absolute top-1.5 -left-[31px] flex size-4.5 items-center justify-center rounded-full border-2 transition-colors md:-left-[39px]">
            {item.current ? (
              <span className="relative flex size-2">
                <span className="bg-brand-primary absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"></span>
                <span className="bg-brand-primary relative inline-flex h-2 w-2 rounded-full"></span>
              </span>
            ) : (
              <span className="bg-muted-foreground/60 group-hover:bg-brand-primary size-1.5 rounded-full transition-colors" />
            )}
          </span>

          <div className="mb-3 flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
            {/* Header: Role & Company */}
            <div>
              <div className="mb-1 flex flex-wrap items-center gap-2">
                <Heading
                  size="h4"
                  as="h3"
                  className="text-foreground leading-snug font-semibold"
                >
                  {item.role}
                </Heading>
                <span className="text-muted-foreground text-sm font-medium">
                  at
                </span>
                <span className="text-foreground bg-muted/60 dark:bg-muted/30 border-border/10 rounded-full border px-2.5 py-0.5 text-sm font-bold">
                  {item.company}
                </span>
                {item.current && (
                  <Badge
                    variant="brand"
                    className="px-2 py-0 font-mono text-[10px] uppercase"
                  >
                    Current
                  </Badge>
                )}
              </div>

              {/* Location */}
              <div className="text-muted-foreground flex items-center gap-1.5 text-xs">
                <MapPin className="size-3.5" />
                <span>{item.location}</span>
              </div>
            </div>

            {/* Duration */}
            <div className="text-muted-foreground bg-muted/40 dark:bg-muted/10 border-border/10 flex items-center gap-1.5 rounded-lg border px-2.5 py-1 font-mono text-xs md:self-start">
              <Calendar className="size-3.5" />
              <span>{item.duration}</span>
            </div>
          </div>

          {/* Description points */}
          <ul className="mb-4 list-none space-y-2 pl-0">
            {item.description.map((bullet, idx) => (
              <li
                key={idx}
                className="text-muted-foreground relative pl-4 text-sm leading-relaxed"
              >
                <span className="bg-border group-hover:bg-brand-primary/45 absolute top-2.5 left-0 size-1.5 rounded-full transition-colors" />
                {bullet}
              </li>
            ))}
          </ul>

          {/* Technologies used */}
          {item.technologies && item.technologies.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {item.technologies.map((tech) => (
                <Badge
                  key={tech}
                  variant="outline"
                  className="px-2 py-0 font-mono text-[10px]"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
export default Timeline

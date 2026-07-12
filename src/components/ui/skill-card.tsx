"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Heading } from "@/components/ui/heading"
import { Badge } from "@/components/ui/badge"
import { SkillCategory } from "@/types"
import { cn } from "@/lib/utils"

export interface SkillCardProps {
  category: SkillCategory
  className?: string
}

export function SkillCard({ category, className }: SkillCardProps) {
  return (
    <Card
      hoverGlow
      interactive={false}
      className={cn("flex h-full flex-col justify-between", className)}
    >
      <CardContent className="flex h-full flex-col justify-between p-6">
        <div className="space-y-2">
          {/* Category Title */}
          <Heading size="h3" as="h3">
            {category.title}
          </Heading>

          {/* Category Description */}
          {category.description && (
            <p className="text-muted-foreground text-xs leading-relaxed">
              {category.description}
            </p>
          )}
        </div>

        {/* Skills Tag Cloud */}
        <div className="mt-auto flex flex-wrap gap-2 pt-6">
          {category.skills.map((skill) => (
            <Badge
              key={skill.name}
              variant="secondary"
              className="rounded-full px-2.5 py-0.5 text-[11px] font-medium"
            >
              {skill.name}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
export default SkillCard

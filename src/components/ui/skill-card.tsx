"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Heading } from "@/components/ui/heading"
import { SkillCategory } from "@/types"
import { cn } from "@/lib/utils"

export interface SkillCardProps {
  category: SkillCategory
  className?: string
}

export function SkillCard({ category, className }: SkillCardProps) {
  return (
    <Card hoverGlow interactive={false} className={cn("h-full", className)}>
      <CardContent className="p-6">
        {/* Category Title */}
        <Heading size="h3" as="h3" className="mb-2">
          {category.title}
        </Heading>

        {/* Category Description */}
        {category.description && (
          <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
            {category.description}
          </p>
        )}

        {/* Skills list */}
        <div className="space-y-4">
          {category.skills.map((skill) => (
            <div key={skill.name} className="space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <span className="text-foreground font-medium">
                  {skill.name}
                </span>
                {skill.proficiency && (
                  <span className="text-muted-foreground bg-muted/60 dark:bg-muted/40 rounded px-2 py-0.5 font-mono text-[10px]">
                    {skill.proficiency}
                  </span>
                )}
              </div>

              {/* Progress Bar Container */}
              {skill.level !== undefined && (
                <div className="bg-muted border-border/10 h-1.5 w-full overflow-hidden rounded-full border">
                  <motion.div
                    className="bg-brand-primary h-full rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
export default SkillCard

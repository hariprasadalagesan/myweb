"use client"

import { ExternalLink } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heading } from "@/components/ui/heading"
import { Project } from "@/types"
import { cn } from "@/lib/utils"

export interface ProjectCardProps {
  project: Project
  className?: string
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  const statusColorMap = {
    completed: "success",
    "in-progress": "warning",
    beta: "brand",
    maintenance: "default",
  } as const

  return (
    <Card
      hoverGlow
      interactive
      className={cn("flex h-full flex-col", className)}
    >
      <CardContent className="flex h-full flex-col p-6">
        {/* Category & Status Badge */}
        <div className="mb-4 flex items-center justify-between">
          <span className="text-brand-primary text-xs font-semibold tracking-wider uppercase">
            {project.category}
          </span>
          <Badge variant={statusColorMap[project.status]}>
            {project.status.replace("-", " ")}
          </Badge>
        </div>

        {/* Title */}
        <Heading
          size="h3"
          as="h3"
          className="group-hover:text-brand-primary mb-2 line-clamp-1"
        >
          {project.title}
        </Heading>

        {/* Description */}
        <p className="text-muted-foreground mb-6 line-clamp-3 flex-grow text-sm leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mb-6 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 4).map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="px-2 py-0 text-[10px]"
            >
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 4 && (
            <span className="text-muted-foreground self-center pl-1 font-mono text-[10px]">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>

        {/* Divider */}
        <div className="bg-border/40 mb-4 h-px w-full" />

        {/* Action Links */}
        <div className="mt-auto flex items-center justify-between">
          {project.year && (
            <span className="text-muted-foreground font-mono text-xs">
              {project.year}
            </span>
          )}
          <div className="ml-auto flex items-center gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-foreground p-1 transition-colors"
                aria-label={`View ${project.title} source code on GitHub`}
              >
                <svg
                  className="size-4.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </a>
            )}
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-foreground p-1 transition-colors"
                aria-label={`View ${project.title} live demo`}
              >
                <ExternalLink className="size-4.5" />
              </a>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
export default ProjectCard

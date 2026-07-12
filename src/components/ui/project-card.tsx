"use client"

import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heading } from "@/components/ui/heading"
import { buttonVariants } from "@/components/ui/button"
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
      interactive={false}
      className={cn("group flex h-full flex-col overflow-hidden", className)}
    >
      {/* 1. Project Image Placeholder Header with brand gradients and grid overlay */}
      <div className="border-border/20 from-brand-primary/10 via-brand-purple/10 to-brand-cyan/10 relative flex h-40 w-full items-center justify-center overflow-hidden border-b bg-gradient-to-br">
        <div className="grid-bg absolute inset-0 opacity-30" />
        {/* Glow core */}
        <div className="bg-brand-primary/20 absolute top-1/2 left-1/2 size-20 -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl" />
        {/* Pill descriptor */}
        <span className="text-muted-foreground bg-background/85 dark:bg-background/90 border-border/25 shadow-premium-sm relative z-10 rounded-full border px-3 py-1.5 font-mono text-[10px] tracking-widest uppercase backdrop-blur-md">
          {project.category}
        </span>
      </div>

      {/* 2. Card Content details */}
      <CardContent className="flex flex-grow flex-col p-6">
        {/* Header: Title & Status Badge */}
        <div className="mb-3 flex items-start justify-between gap-3">
          <Heading
            size="h3"
            as="h3"
            className="group-hover:text-brand-primary line-clamp-1 transition-colors"
          >
            {project.title}
          </Heading>
          <Badge
            variant={statusColorMap[project.status]}
            className="shrink-0 font-mono text-[9px] uppercase"
          >
            {project.status.replace("-", " ")}
          </Badge>
        </div>

        {/* Short Description */}
        <p className="text-muted-foreground mb-6 line-clamp-3 flex-grow text-sm leading-relaxed">
          {project.description}
        </p>

        {/* Technologies List */}
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

        {/* Bottom Actions Row */}
        <div className="mt-auto flex items-center justify-between">
          <Link
            href={`/projects/${project.slug}`}
            className={cn(
              buttonVariants({ variant: "outline", size: "sm" }),
              "focus-visible:ring-brand-primary cursor-pointer rounded-full text-xs font-semibold focus-visible:ring-2"
            )}
          >
            View Case Study
          </Link>
          <div className="flex items-center gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-foreground focus-visible:outline-brand-primary rounded-md p-1 transition-colors focus-visible:outline-2"
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
                className="text-muted-foreground hover:text-foreground focus-visible:outline-brand-primary rounded-md p-1 transition-colors focus-visible:outline-2"
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

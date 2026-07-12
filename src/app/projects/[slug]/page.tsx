import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ExternalLink, Database, Server } from "lucide-react"
import { Container, Section } from "@/components/ui/container"
import { Heading } from "@/components/ui/heading"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { projectsData } from "@/content/projects"
import { cn } from "@/lib/utils"

export interface PageProps {
  params: Promise<{ slug: string }>
}

// Generate static params for static site generation (SSG)
export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }))
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params
  const project = projectsData.find((p) => p.slug === slug)

  if (!project) {
    notFound()
  }

  const statusColorMap = {
    completed: "success",
    "in-progress": "warning",
    beta: "brand",
    maintenance: "default",
  } as const

  return (
    <Container className="py-12 md:py-20">
      {/* Back navigation link */}
      <div className="mb-8">
        <Link
          href="/#projects"
          className="text-muted-foreground hover:text-foreground group focus-visible:outline-brand-primary inline-flex cursor-pointer items-center gap-2 rounded-md p-1 text-sm transition-colors focus-visible:outline-2"
        >
          <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
          Back to Projects
        </Link>
      </div>

      {/* Hero section inside page */}
      <div className="border-border/40 space-y-4 border-b pb-8">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-brand-primary font-mono text-xs tracking-wider uppercase">
            {project.category}
          </span>
          <Badge variant={statusColorMap[project.status]}>
            {project.status.replace("-", " ")}
          </Badge>
        </div>

        <Heading size="h1" as="h1" className="leading-tight tracking-tight">
          {project.title}
        </Heading>

        <div className="text-muted-foreground flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-sm">
          {project.role && (
            <div className="flex items-center gap-1.5">
              <span className="text-muted-foreground/60">Role:</span>
              <span className="text-foreground">{project.role}</span>
            </div>
          )}
          {project.year && (
            <div className="flex items-center gap-1.5">
              <span className="text-muted-foreground/60">Year:</span>
              <span className="text-foreground">{project.year}</span>
            </div>
          )}
        </div>
      </div>

      {/* Main content grid */}
      <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-12">
        {/* Left Side: Case Study Content */}
        <div className="space-y-8 lg:col-span-8">
          <Section className="space-y-4 py-0">
            <Heading size="h2" as="h2" className="tracking-tight">
              Project Overview
            </Heading>
            <p className="text-muted-foreground text-base leading-relaxed">
              {project.longDescription || project.description}
            </p>
          </Section>

          {/* Technical Implementation details */}
          <Section className="space-y-6 py-0">
            <Heading size="h2" as="h2" className="tracking-tight">
              Technical Implementation
            </Heading>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <Card interactive={false}>
                <CardContent className="space-y-3 p-5">
                  <div className="flex items-center gap-2">
                    <Server className="text-brand-primary size-4" />
                    <Heading
                      size="h4"
                      as="h3"
                      className="text-foreground font-semibold"
                    >
                      API Architecture
                    </Heading>
                  </div>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    Designed using REST principles. Features standardized
                    request validation, async routing pipelines, and structured
                    JSON serializer schemas.
                  </p>
                </CardContent>
              </Card>

              <Card interactive={false}>
                <CardContent className="space-y-3 p-5">
                  <div className="flex items-center gap-2">
                    <Database className="text-brand-primary size-4" />
                    <Heading
                      size="h4"
                      as="h3"
                      className="text-foreground font-semibold"
                    >
                      Database & ORM
                    </Heading>
                  </div>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    Built relational tables in MySQL. Managed sessions,
                    connections, and complex table joins using SQLAlchemy and
                    SQLModel ORM strategies.
                  </p>
                </CardContent>
              </Card>
            </div>
          </Section>

          {/* Core challenges */}
          <Section className="space-y-4 py-0">
            <Heading size="h2" as="h2" className="tracking-tight">
              Engineering Achievements
            </Heading>
            <ul className="list-none space-y-3 pl-0">
              <li className="text-muted-foreground relative pl-5 text-sm leading-relaxed">
                <span className="bg-brand-primary absolute top-2.5 left-0 size-1.5 rounded-full" />
                Containerized backend web applications with Docker to guarantee
                absolute local configuration parity.
              </li>
              <li className="text-muted-foreground relative pl-5 text-sm leading-relaxed">
                <span className="bg-brand-primary absolute top-2.5 left-0 size-1.5 rounded-full" />
                Designed modular components preventing file coupling and
                spaghetti code practices.
              </li>
              <li className="text-muted-foreground relative pl-5 text-sm leading-relaxed">
                <span className="bg-brand-primary absolute top-2.5 left-0 size-1.5 rounded-full" />
                Implemented structured unit testing configurations verifying
                mock database transaction rollbacks.
              </li>
            </ul>
          </Section>
        </div>

        {/* Right Side: Metadata Sidebar Card */}
        <div className="lg:col-span-4">
          <div className="sticky top-24 space-y-6">
            <Card
              interactive={false}
              className="border-border/60 bg-muted/20 dark:bg-muted/10"
            >
              <CardContent className="space-y-6 p-6">
                {/* Tech Stack */}
                <div className="space-y-3">
                  <span className="text-muted-foreground block font-mono text-xs tracking-widest uppercase">
                    Technologies
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="px-2.5 py-0.5 font-mono text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Status info */}
                <div className="border-border/40 space-y-1.5 border-t pt-4">
                  <span className="text-muted-foreground block font-mono text-xs tracking-widest uppercase">
                    Status
                  </span>
                  <span className="text-foreground text-sm font-semibold tracking-wider uppercase">
                    {project.status.replace("-", " ")}
                  </span>
                </div>

                {/* Repository and Demos */}
                {(project.github || project.liveDemo) && (
                  <div className="border-border/40 flex flex-col gap-2.5 border-t pt-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className={cn(
                          buttonVariants({
                            variant: "default",
                            size: "default",
                          }),
                          "focus-visible:ring-brand-primary w-full cursor-pointer gap-2 rounded-full focus-visible:ring-2"
                        )}
                      >
                        <svg
                          className="size-4"
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
                        Source Code
                      </a>
                    )}
                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noreferrer"
                        className={cn(
                          buttonVariants({
                            variant: "outline",
                            size: "default",
                          }),
                          "focus-visible:ring-brand-primary w-full cursor-pointer gap-2 rounded-full focus-visible:ring-2"
                        )}
                      >
                        <ExternalLink className="size-4" />
                        Live Demo
                      </a>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Container>
  )
}

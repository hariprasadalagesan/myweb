import Link from "next/link"
import { notFound } from "next/navigation"
import {
  ArrowLeft,
  ExternalLink,
  Database,
  Server,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
} from "lucide-react"
import { Container, Section } from "@/components/ui/container"
import { Heading } from "@/components/ui/heading"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ProjectCard } from "@/components/ui/project-card"
import { projectsData } from "@/content/projects"
import { cn } from "@/lib/utils"
import { Metadata } from "next"
import { constructMetadata } from "@/utils/metadata"

export interface PageProps {
  params: Promise<{ slug: string }>
}

// Generate dynamic metadata
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params
  const project = projectsData.find((p) => p.slug === slug)
  if (!project) return {}

  return constructMetadata({
    title: `${project.title} Case Study`,
    description: project.description,
    urlPath: `/projects/${project.slug}`,
  })
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

  // Get 2 related projects to display at the bottom
  const relatedProjects = projectsData
    .filter((p) => p.slug !== project.slug)
    .slice(0, 2)

  return (
    <Container className="max-w-6xl py-12 md:py-20">
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

      {/* 1. HERO BANNER HEADER */}
      <div className="border-border/40 relative space-y-4 overflow-hidden border-b pb-8">
        {/* Glow decoration */}
        <div className="bg-brand-primary/10 absolute -top-12 -right-12 size-40 rounded-full blur-3xl" />

        <div className="relative z-10 flex flex-wrap items-center gap-3">
          <span className="text-brand-primary font-mono text-xs tracking-wider uppercase">
            {project.category}
          </span>
          <Badge variant={statusColorMap[project.status]}>
            {project.status.replace("-", " ")}
          </Badge>
        </div>

        <Heading
          size="h1"
          as="h1"
          className="relative z-10 max-w-4xl leading-tight tracking-tight"
        >
          {project.title}
        </Heading>

        <div className="text-muted-foreground relative z-10 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-sm">
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
        <div className="space-y-12 lg:col-span-8">
          {/* 2. OVERVIEW */}
          <Section className="space-y-4 py-0">
            <Heading size="h2" as="h2" className="tracking-tight">
              Overview
            </Heading>
            <p className="text-muted-foreground text-base leading-relaxed">
              {project.longDescription || project.description}
            </p>
          </Section>

          {/* 3. PROBLEM & 4. SOLUTION */}
          {(project.problemStatement || project.solution) && (
            <Section className="grid grid-cols-1 gap-6 py-0 md:grid-cols-2">
              {project.problemStatement && (
                <Card
                  interactive={false}
                  className="border-red-500/10 bg-red-500/5 dark:bg-red-500/5"
                >
                  <CardContent className="space-y-3 p-6">
                    <div className="flex items-center gap-2 text-red-500">
                      <AlertTriangle className="size-4.5 shrink-0" />
                      <Heading size="h4" as="h3" className="font-semibold">
                        Problem Statement
                      </Heading>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.problemStatement}
                    </p>
                  </CardContent>
                </Card>
              )}
              {project.solution && (
                <Card
                  interactive={false}
                  className="border-green-500/10 bg-green-500/5 dark:bg-green-500/5"
                >
                  <CardContent className="space-y-3 p-6">
                    <div className="flex items-center gap-2 text-green-500">
                      <CheckCircle2 className="size-4.5 shrink-0" />
                      <Heading size="h4" as="h3" className="font-semibold">
                        Proposed Solution
                      </Heading>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.solution}
                    </p>
                  </CardContent>
                </Card>
              )}
            </Section>
          )}

          {/* 5. ARCHITECTURE */}
          {project.architecture && (
            <Section className="space-y-4 py-0">
              <Heading size="h2" as="h2" className="tracking-tight">
                System Architecture
              </Heading>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {project.architecture}
              </p>
              {/* Architecture visual block */}
              <div className="border-border/20 bg-background/30 grid-bg relative flex h-44 w-full items-center justify-center overflow-hidden rounded-xl border p-6 text-center">
                <div className="from-brand-primary/5 to-brand-cyan/5 absolute inset-0 bg-gradient-to-r opacity-50" />
                <div className="text-muted-foreground relative z-10 space-y-2 font-mono text-[11px]">
                  <div className="flex items-center justify-center gap-2">
                    <Server className="text-brand-primary size-4 animate-pulse" />
                    <span className="text-foreground font-semibold uppercase">
                      API Client Request
                    </span>
                  </div>
                  <div className="bg-border mx-auto my-1 h-4 w-px" />
                  <div className="flex items-center justify-center gap-4">
                    <div className="border-border/40 bg-card rounded border px-2.5 py-1">
                      FastAPI routing
                    </div>
                    <div className="border-border/40 bg-card rounded border px-2.5 py-1">
                      SQLAlchemy ORM
                    </div>
                  </div>
                  <div className="bg-border mx-auto my-1 h-4 w-px" />
                  <div className="flex items-center justify-center gap-2">
                    <Database className="text-brand-cyan size-4" />
                    <span className="text-foreground font-semibold">
                      MySQL Relational DB
                    </span>
                  </div>
                </div>
              </div>
            </Section>
          )}

          {/* 6. FEATURES */}
          {project.features && project.features.length > 0 && (
            <Section className="space-y-4 py-0">
              <Heading size="h2" as="h2" className="tracking-tight">
                Key Features
              </Heading>
              <ul className="grid list-none grid-cols-1 gap-3 pl-0 sm:grid-cols-2">
                {project.features.map((feat) => (
                  <li
                    key={feat}
                    className="text-muted-foreground relative flex items-start gap-2 pl-6 text-sm leading-relaxed"
                  >
                    <CheckCircle2 className="text-brand-primary mt-0.5 size-4 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </Section>
          )}

          {/* 8. CHALLENGES FACED & 9. WHAT I LEARNED */}
          {(project.challenges || project.learned) && (
            <Section className="space-y-8 py-0">
              {project.challenges && (
                <div className="space-y-3">
                  <Heading size="h2" as="h2" className="tracking-tight">
                    Challenges Faced
                  </Heading>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.challenges}
                  </p>
                </div>
              )}
              {project.learned && (
                <div className="border-border/40 space-y-3 border-t pt-6">
                  <div className="text-brand-primary flex items-center gap-2">
                    <Lightbulb className="size-5" />
                    <Heading
                      size="h2"
                      as="h2"
                      className="text-foreground tracking-tight"
                    >
                      What I Learned
                    </Heading>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.learned}
                  </p>
                </div>
              )}
            </Section>
          )}

          {/* 10. GALLERY / SCREENSHOTS */}
          <Section className="space-y-4 py-0">
            <Heading size="h2" as="h2" className="tracking-tight">
              Gallery & Mock Previews
            </Heading>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="border-border/25 from-brand-primary/5 via-brand-purple/5 to-brand-cyan/5 group relative flex h-44 items-center justify-center overflow-hidden rounded-xl border bg-gradient-to-tr p-6">
                <div className="grid-bg absolute inset-0 opacity-20" />
                <span className="text-muted-foreground bg-background/80 border-border/20 rounded border px-3 py-1 font-mono text-[10px] tracking-widest uppercase">
                  Mock System Frame
                </span>
              </div>
              <div className="border-border/25 from-brand-cyan/5 via-brand-primary/5 to-brand-purple/5 group relative flex h-44 items-center justify-center overflow-hidden rounded-xl border bg-gradient-to-br p-6">
                <div className="grid-bg absolute inset-0 opacity-20" />
                <span className="text-muted-foreground bg-background/80 border-border/20 rounded border px-3 py-1 font-mono text-[10px] tracking-widest uppercase">
                  Active Database log
                </span>
              </div>
            </div>
          </Section>
        </div>

        {/* Right Side: Metadata Sidebar (7. Tech Stack, 11. Github, 12. Live Demo) */}
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
                    Technology Stack
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
                    Development Status
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

      {/* 13. RELATED PROJECTS */}
      {relatedProjects.length > 0 && (
        <div className="border-border/40 mt-20 space-y-8 border-t pt-16">
          <Heading
            size="h2"
            as="h2"
            className="text-center tracking-tight md:text-left"
          >
            Related Projects
          </Heading>
          <div className="grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
            {relatedProjects.map((relatedProj) => (
              <ProjectCard key={relatedProj.slug} project={relatedProj} />
            ))}
          </div>
        </div>
      )}
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareSourceCode",
            name: project.title,
            description: project.description,
            programmingLanguage: project.technologies,
            codeRepository: project.github || "",
            author: {
              "@type": "Person",
              name: "Hariprasad T A",
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://hariworks.com",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: project.title,
                item: `https://hariworks.com/projects/${project.slug}`,
              },
            ],
          }),
        }}
      />
    </Container>
  )
}

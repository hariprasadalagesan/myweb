import {
  ArrowUpRight,
  Mail,
  MapPin,
  Download,
  Cpu,
  Eye,
  Terminal,
  Layers,
} from "lucide-react"
import { Container, Section, SectionHeader } from "@/components/ui/container"
import { Heading } from "@/components/ui/heading"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Divider } from "@/components/ui/divider"
import { Card, CardContent } from "@/components/ui/card"
import { ProjectCard } from "@/components/ui/project-card"
import { SkillCard } from "@/components/ui/skill-card"
import { Timeline } from "@/components/ui/timeline"

import { HeroSection } from "@/components/layout/hero"

// Content imports
import { aboutContent } from "@/content/about"
import { skillsData } from "@/content/skills"
import { projectsData } from "@/content/projects"
import { experienceData, journeyTimelineData } from "@/content/experience"
import { currentlyBuildingData } from "@/content/currently-building"
import { contactContent } from "@/content/contact"
import { socialLinks } from "@/content/social"

export default function Home() {
  return (
    <Container clean>
      {/* 1. HERO SECTION */}
      <HeroSection />

      <Divider variant="gradient" />

      {/* 2. ABOUT SECTION */}
      <Section id="about" className="scroll-mt-20">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-20">
            {/* Bio text columns */}
            <div className="space-y-6 lg:col-span-7">
              <SectionHeader
                title={aboutContent.title}
                subtitle={aboutContent.subtitle}
                badge="01 / Profile"
              />
              <div className="space-y-4">
                {aboutContent.paragraphs.map((p, idx) => (
                  <p key={idx} className="text-muted-foreground">
                    {p}
                  </p>
                ))}
              </div>
            </div>

            {/* Metrics column */}
            <div className="lg:border-border/60 flex flex-col justify-center space-y-6 lg:col-span-5 lg:border-l lg:pl-12">
              {aboutContent.metrics.map((metric, idx) => (
                <div key={idx} className="space-y-1">
                  <span className="text-gradient-brand text-4xl leading-none font-black sm:text-5xl">
                    {metric.value}
                  </span>
                  <Heading
                    size="h4"
                    as="h4"
                    className="text-foreground font-semibold"
                  >
                    {metric.label}
                  </Heading>
                  {metric.description && (
                    <p className="text-muted-foreground text-xs">
                      {metric.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Divider variant="gradient" />

      {/* 3. PROJECTS SECTION */}
      <Section id="projects" className="scroll-mt-20">
        <Container>
          <SectionHeader
            title="Featured Works"
            subtitle="Explore real-world software platforms, smart networks, and pipelines I have architected."
            badge="02 / Portfolio"
            align="center"
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projectsData.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </Container>
      </Section>

      <Divider variant="gradient" />

      {/* 4. SKILLS SECTION */}
      <Section id="skills" className="scroll-mt-20">
        <Container>
          <SectionHeader
            title="Technical Competencies"
            subtitle="Strict proficiency layout of technologies, libraries, backends, and deployment tools I utilize."
            badge="03 / Skills"
            align="center"
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {skillsData.map((category) => (
              <SkillCard key={category.title} category={category} />
            ))}
          </div>
        </Container>
      </Section>

      <Divider variant="gradient" />

      {/* 5. EXPERIENCE SECTION */}
      <Section id="experience" className="scroll-mt-20">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-20">
            {/* Left Column: Career Timeline */}
            <div className="space-y-8 lg:col-span-7">
              <SectionHeader
                title="Career & Education"
                subtitle="Internship experience at Maestro Technology Services and Karpagam College degree."
                badge="04 / Experience"
              />
              <Timeline items={experienceData} />
            </div>

            {/* Right Column: Professional Journey Roadmap */}
            <div className="lg:border-border/60 space-y-8 lg:col-span-5 lg:border-l lg:pl-12">
              <SectionHeader
                title="Professional Journey"
                subtitle="Chronological roadmap highlights from student to Python backend intern."
                badge="Roadmap"
              />
              <div className="border-border/80 relative space-y-8 border-l py-2 pl-6">
                {journeyTimelineData.map((item, idx) => (
                  <div key={idx} className="group relative">
                    <span className="bg-background border-border group-hover:border-brand-primary absolute top-1 -left-[31px] flex size-4.5 items-center justify-center rounded-full border-2 transition-colors">
                      <span className="bg-muted-foreground/60 group-hover:bg-brand-primary size-1.5 rounded-full transition-colors" />
                    </span>
                    <div className="space-y-1">
                      <span className="text-brand-primary font-mono text-xs font-bold">
                        {item.year}
                      </span>
                      <p className="text-foreground text-sm leading-snug font-medium">
                        {item.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Divider variant="gradient" />

      {/* 5.5. CURRENTLY BUILDING SECTION */}
      <Section id="currently-building" className="scroll-mt-20">
        <Container>
          <SectionHeader
            title="Currently Building"
            subtitle="An active focus of tools, configurations, and IoT devices I am currently prototyping."
            badge="05 / Active Focus"
            align="center"
          />

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
            {currentlyBuildingData.map((item) => {
              const iconMap: Record<string, React.ReactNode> = {
                Cpu: <Cpu className="text-brand-primary size-5" />,
                Eye: <Eye className="text-brand-primary size-5" />,
                Terminal: <Terminal className="text-brand-primary size-5" />,
                Layers: <Layers className="text-brand-primary size-5" />,
              }
              return (
                <Card key={item.title} interactive={false}>
                  <CardContent className="space-y-4 p-6">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        {item.iconName && iconMap[item.iconName]}
                        <Heading
                          size="h4"
                          as="h3"
                          className="text-foreground font-semibold"
                        >
                          {item.title}
                        </Heading>
                      </div>
                      <Badge
                        variant="brand"
                        className="px-2 py-0.5 font-mono text-[9px] uppercase"
                      >
                        {item.status}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </Container>
      </Section>

      <Divider variant="gradient" />

      {/* 6. RESUME SECTION */}
      <Section id="resume" className="scroll-mt-20">
        <Container>
          <Card
            hoverGlow
            className="border-brand-primary/20 dark:border-brand-primary/10 bg-brand-primary/5 dark:bg-brand-primary/5 mx-auto max-w-4xl overflow-hidden"
          >
            <CardContent className="flex flex-col items-center justify-between gap-8 p-8 md:flex-row md:p-12">
              <div className="space-y-2 text-center md:text-left">
                <Heading size="h3" as="h3">
                  Interested in the full details?
                </Heading>
                <p className="text-muted-foreground max-w-md text-sm">
                  Download my comprehensive curriculum vitae detailing job
                  responsibilities, architectures, and complete project
                  references.
                </p>
              </div>
              <Button
                size="lg"
                className="shrink-0 cursor-pointer gap-2 rounded-full"
              >
                <Download className="size-4" /> Download Resume
              </Button>
            </CardContent>
          </Card>
        </Container>
      </Section>

      <Divider variant="gradient" />

      {/* 7. CONTACT SECTION */}
      <Section id="contact" className="scroll-mt-20">
        <Container>
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-12 md:grid-cols-2">
            {/* Contact Details */}
            <div className="space-y-6">
              <SectionHeader
                title={contactContent.title}
                subtitle={contactContent.description}
                badge="06 / Contact"
              />

              <div className="space-y-4 font-mono text-sm">
                <div className="flex items-center gap-3">
                  <Mail className="text-brand-primary size-4" />
                  <a
                    href={`mailto:${contactContent.email}`}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {contactContent.email}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="text-brand-primary size-4" />
                  <span className="text-muted-foreground">
                    {contactContent.location}
                  </span>
                </div>
              </div>

              {/* Social icons checklist */}
              <div className="border-border/40 flex flex-wrap gap-4 border-t pt-4">
                {socialLinks
                  .filter((l) => l.active && l.platform !== "Email")
                  .map((link) => (
                    <a
                      key={link.platform}
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-muted-foreground hover:text-foreground flex items-center gap-1 font-mono text-xs transition-colors"
                    >
                      {link.platform} <ArrowUpRight className="size-3" />
                    </a>
                  ))}
              </div>
            </div>

            {/* Contact Form Placeholder */}
            <div className="flex items-center">
              <Card interactive={false} className="w-full p-6">
                <div className="space-y-4">
                  <Heading size="h4" as="h4">
                    Send a Message
                  </Heading>
                  <p className="text-muted-foreground text-xs">
                    Contact form will be wired up to the production endpoint (
                    {contactContent.formActionUrl}).
                  </p>

                  {/* Styled Placeholders */}
                  <div className="space-y-3 pt-2">
                    <div className="bg-muted/60 dark:bg-muted/40 border-border/10 h-9 w-full rounded-lg border" />
                    <div className="bg-muted/60 dark:bg-muted/40 border-border/10 h-9 w-full rounded-lg border" />
                    <div className="bg-muted/60 dark:bg-muted/40 border-border/10 h-24 w-full rounded-lg border" />
                    <Button disabled className="w-full rounded-lg">
                      Submit Message
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "HariWorks",
            url: "https://hariworks.com",
            potentialAction: {
              "@type": "SearchAction",
              target: "https://hariworks.com/?q={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Hariprasad T A",
            jobTitle: "Python Backend Developer",
            worksFor: {
              "@type": "Organization",
              name: "Maestro Technology Services",
            },
            alumniOf: {
              "@type": "CollegeOrUniversity",
              name: "Karpagam College of Engineering",
            },
            url: "https://hariworks.com",
            sameAs: [
              "https://github.com/hariprasadalagesan",
              "https://linkedin.com/in/hariprasad-alagesan",
            ],
            knowsAbout: [
              "Python",
              "FastAPI",
              "SQLAlchemy",
              "MySQL",
              "Docker",
              "IoT",
              "REST APIs",
              "MQTT",
            ],
          }),
        }}
      />
    </Container>
  )
}

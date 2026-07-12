export interface SiteMetadata {
  name: string
  title: string
  description: string
  siteUrl: string
  keywords: string[]
  author: string
  ogImage: string
  twitterHandle?: string
}

export interface CTAAction {
  label: string
  href: string
  variant: "default" | "secondary" | "outline" | "ghost" | "link"
  icon?: string
}

export interface HeroContent {
  badge?: string
  title: string
  titleGradientText?: string
  subtitle: string
  actions: CTAAction[]
}

export interface MetricItem {
  value: string
  label: string
  description?: string
}

export interface AboutContent {
  title: string
  subtitle?: string
  paragraphs: string[]
  metrics: MetricItem[]
  corePrinciples: {
    title: string
    description: string
    icon?: string
  }[]
}

export interface SkillItem {
  name: string
  level?: number // Percentage e.g. 90
  proficiency?: "Beginner" | "Intermediate" | "Advanced" | "Expert"
  iconName?: string
}

export interface SkillCategory {
  title: string
  description?: string
  skills: SkillItem[]
}

export type ProjectStatus = "completed" | "in-progress" | "beta" | "maintenance"

export interface Project {
  title: string
  slug: string
  description: string
  longDescription?: string
  technologies: string[]
  github?: string
  liveDemo?: string
  images: string[]
  featured: boolean
  category: string
  status: ProjectStatus
  role?: string
  year?: string
}

export interface ExperienceItem {
  company: string
  logo?: string
  role: string
  location: string
  duration: string
  current: boolean
  description: string[]
  technologies?: string[]
}

export interface SocialLink {
  platform: string
  url: string
  label: string
  iconName?: string
  active: boolean
}

export interface ContactContent {
  title: string
  description: string
  email: string
  location: string
  formActionUrl?: string
}

export interface NavItem {
  label: string
  href: string
  isExternal?: boolean
  iconName?: string
}

export interface NavigationConfig {
  header: NavItem[]
  footer: {
    column1: {
      title: string
      links: NavItem[]
    }
    column2: {
      title: string
      links: NavItem[]
    }
  }
}

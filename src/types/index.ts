export interface NavItem {
  label: string
  href: string
  isExternal?: boolean
}

export interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  imageUrl?: string
  projectUrl?: string
  githubUrl?: string
  featured?: boolean
  role?: string
  year?: string
}

export interface Skill {
  name: string
  category: "frontend" | "backend" | "devops" | "tools" | "other"
  level?: number // 1 to 5 or percentage
  iconName?: string
}

export interface SectionHeaderProps {
  title: string
  subtitle?: string
  badge?: string
  align?: "left" | "center"
}

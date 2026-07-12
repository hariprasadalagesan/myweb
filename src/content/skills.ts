import { SkillCategory } from "@/types"

export const skillsData: SkillCategory[] = [
  {
    title: "Frontend Engineering",
    description: "Building responsive, fast, and accessible user interfaces.",
    skills: [
      {
        name: "React 19 / Next.js 16",
        level: 95,
        proficiency: "Expert",
        iconName: "React",
      },
      {
        name: "TypeScript",
        level: 90,
        proficiency: "Expert",
        iconName: "TypeScript",
      },
      {
        name: "Tailwind CSS v4",
        level: 95,
        proficiency: "Expert",
        iconName: "Tailwind",
      },
      {
        name: "Framer Motion",
        level: 85,
        proficiency: "Advanced",
        iconName: "Motion",
      },
      {
        name: "HTML5 / CSS3 / Web Standards",
        level: 95,
        proficiency: "Expert",
        iconName: "Html",
      },
    ],
  },
  {
    title: "Backend & Systems",
    description: "Creating secure, performant APIs and database systems.",
    skills: [
      {
        name: "Node.js / Express",
        level: 88,
        proficiency: "Advanced",
        iconName: "Nodejs",
      },
      {
        name: "REST & GraphQL APIs",
        level: 90,
        proficiency: "Expert",
        iconName: "Api",
      },
      {
        name: "PostgreSQL / Prisma",
        level: 85,
        proficiency: "Advanced",
        iconName: "Database",
      },
      {
        name: "Redis Caching",
        level: 80,
        proficiency: "Advanced",
        iconName: "Redis",
      },
    ],
  },
  {
    title: "DevOps & Tooling",
    description: "Automating pipelines, builds, and monitoring setups.",
    skills: [
      {
        name: "Docker / Containerization",
        level: 82,
        proficiency: "Advanced",
        iconName: "Docker",
      },
      {
        name: "CI/CD (GitHub Actions / GitLab)",
        level: 88,
        proficiency: "Advanced",
        iconName: "Cicd",
      },
      {
        name: "AWS Cloud Services",
        level: 80,
        proficiency: "Advanced",
        iconName: "Aws",
      },
      {
        name: "Git / Trunk-Based Workflows",
        level: 92,
        proficiency: "Expert",
        iconName: "Git",
      },
    ],
  },
]

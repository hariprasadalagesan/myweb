import { ExperienceItem } from "@/types"

export const experienceData: ExperienceItem[] = [
  {
    company: "ByteCraft Systems",
    role: "Lead Software Engineer",
    location: "Bangalore, India (Hybrid)",
    duration: "2023 - Present",
    current: true,
    description: [
      "Led the transition of enterprise monoliths into modular React/Next.js frontend micro-frontends, reducing initial page load by 40%.",
      "Architected real-time WebSocket connection layers handling 50k+ active clients, utilizing Node.js streams and Redis caching adapters.",
      "Mentored junior engineers and conducted structural design audits for product codebases.",
    ],
    technologies: ["Next.js", "TypeScript", "Node.js", "Redis", "AWS"],
  },
  {
    company: "Novatech Innovations",
    role: "Senior Full Stack Engineer",
    location: "Bangalore, India (On-site)",
    duration: "2021 - 2023",
    current: false,
    description: [
      "Developed secure RESTful and GraphQL API backends in Go and Node, reducing response times by 30% through DB query indexing.",
      "Engineered automated previews for pull requests using Kubernetes clusters, Docker configurations, and custom webhooks.",
      "Built clean, pixel-perfect layouts using styled-components and Tailwind CSS.",
    ],
    technologies: ["React", "Go", "Docker", "Kubernetes", "PostgreSQL"],
  },
  {
    company: "AppSphere Corp",
    role: "Software Engineer",
    location: "Remote",
    duration: "2019 - 2021",
    current: false,
    description: [
      "Integrated third-party payment channels (Stripe, PayPal) and authentication platforms (OAuth, Auth0) across consumer web interfaces.",
      "Configured unit and integration tests using Jest and React Testing Library, boosting coverage metrics to 85%.",
    ],
    technologies: ["React", "Redux", "Node.js", "Jest", "MongoDB"],
  },
]

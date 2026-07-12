import { SkillCategory } from "@/types"

export const skillsData: SkillCategory[] = [
  {
    title: "Backend Development",
    description:
      "Architecting REST endpoints, authorization systems, and server routers.",
    skills: [
      { name: "Python" },
      { name: "FastAPI" },
      { name: "SQLAlchemy" },
      { name: "REST APIs" },
      { name: "JWT Authentication" },
      { name: "Role-Based Access Control (RBAC)" },
    ],
  },
  {
    title: "Programming Languages",
    description: "Writing type-safe, normalized logic and data procedures.",
    skills: [
      { name: "Python" },
      { name: "SQL" },
      { name: "TypeScript (Learning)" },
    ],
  },
  {
    title: "Databases",
    description: "Modeling schemas, relations, and transactional logic.",
    skills: [
      { name: "MySQL" },
      { name: "ORM Design" },
      { name: "Query Optimization" },
    ],
  },
  {
    title: "IoT & Embedded",
    description: "Wiring microcontrollers and routing local broker messages.",
    skills: [
      { name: "ESP32" },
      { name: "MQTT Protocols" },
      { name: "Home Automation" },
    ],
  },
  {
    title: "Data Analytics",
    description: "Processing datasets and plotting insights.",
    skills: [
      { name: "Pandas" },
      { name: "NumPy" },
      { name: "Power BI" },
      { name: "Matplotlib" },
    ],
  },
  {
    title: "Tools & Platforms",
    description: "Containerizing services and testing APIs.",
    skills: [
      { name: "Git & GitHub" },
      { name: "Docker" },
      { name: "Postman" },
      { name: "VS Code" },
    ],
  },
  {
    title: "Software Engineering Concepts",
    description: "Methodologies and patterns for robust coding.",
    skills: [
      { name: "OOP (Object-Oriented Programming)" },
      { name: "API Design" },
      { name: "Agile Development" },
      { name: "CI/CD Pipelines" },
      { name: "Authentication" },
      { name: "Clean Code" },
    ],
  },
]

import { ExperienceItem, JourneyTimelineItem } from "@/types"

export const experienceData: ExperienceItem[] = [
  {
    company: "Maestro Technology Services",
    role: "Backend Developer Intern",
    location: "Bangalore, India",
    duration: "Jan 2026 - Apr 2026",
    current: false,
    description: [
      "Developed REST APIs using FastAPI.",
      "Implemented JWT Authentication and Role-Based Access Control (RBAC).",
      "Optimized database query performance using SQLAlchemy ORM.",
      "Worked in Agile sprints and participated in code reviews.",
      "Contributed to CI/CD pipelines to automate dev builds.",
    ],
    technologies: ["Python", "FastAPI", "SQLAlchemy", "MySQL", "Docker", "Git"],
  },
  {
    company: "Karpagam College of Engineering",
    role: "B.E. Computer Science Engineering",
    location: "Coimbatore, India",
    duration: "2021 - 2025",
    current: false,
    description: [
      "Completed comprehensive coursework in Data Structures, Database Management Systems, Operating Systems, and OOP.",
      "Maintained strong academic performance while prototyping IoT and backend applications.",
    ],
    technologies: ["Python", "SQL", "C++", "OOP", "DBMS"],
  },
]

export const journeyTimelineData: JourneyTimelineItem[] = [
  {
    year: "2021",
    title: "Started Computer Science Engineering",
  },
  {
    year: "2025",
    title: "Graduated with B.E. Computer Science degree",
  },
  {
    year: "2026",
    title: "Completed Backend Developer Internship",
  },
  {
    year: "2026",
    title: "Built Production Backend Projects (FastAPI / Docker)",
  },
  {
    year: "Present",
    title: "Building IoT & Automation Solutions (ESP32 / MQTT)",
  },
]

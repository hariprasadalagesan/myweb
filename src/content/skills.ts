import { SkillCategory } from "@/types"

export const skillsData: SkillCategory[] = [
  {
    title: "Backend Development",
    description:
      "Building robust, secure, and type-safe APIs using Python frameworks.",
    skills: [
      {
        name: "Python",
        level: 90,
        proficiency: "Advanced",
        iconName: "Python",
      },
      {
        name: "FastAPI / SQLModel",
        level: 85,
        proficiency: "Advanced",
        iconName: "FastAPI",
      },
      {
        name: "SQLAlchemy ORM",
        level: 80,
        proficiency: "Advanced",
        iconName: "SQLAlchemy",
      },
      {
        name: "REST APIs & JWT Auth",
        level: 85,
        proficiency: "Advanced",
        iconName: "Api",
      },
    ],
  },
  {
    title: "Databases & DevOps",
    description: "Designing schemas and containerizing backend applications.",
    skills: [
      { name: "MySQL", level: 80, proficiency: "Advanced", iconName: "MySQL" },
      {
        name: "Docker",
        level: 75,
        proficiency: "Intermediate",
        iconName: "Docker",
      },
      {
        name: "Git & GitHub",
        level: 85,
        proficiency: "Advanced",
        iconName: "Git",
      },
    ],
  },
  {
    title: "IoT & Data Analytics",
    description: "Connecting hardware to brokers and processing raw datasets.",
    skills: [
      {
        name: "ESP32 Microcontrollers",
        level: 80,
        proficiency: "Advanced",
        iconName: "Esp32",
      },
      {
        name: "MQTT Broker Integration",
        level: 75,
        proficiency: "Intermediate",
        iconName: "Mqtt",
      },
      {
        name: "Data Analytics (Pandas)",
        level: 70,
        proficiency: "Intermediate",
        iconName: "Pandas",
      },
    ],
  },
]

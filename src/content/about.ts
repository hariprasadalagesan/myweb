import { AboutContent } from "@/types"

export const aboutContent: AboutContent = {
  title: "About Me",
  subtitle:
    "Applying Computer Science fundamentals to build clean, functional, and efficient backend systems.",
  paragraphs: [
    "I am a recent Computer Science graduate with a strong foundation in software engineering principles, algorithms, and database design. My focus is on backend development, where I write clean, maintainable code to solve practical problems.",
    "Recently, I completed a Backend Developer Internship at Maestro Technology Services, where I worked with Python and FastAPI to build and optimize RESTful API services. I am highly motivated by automation and IoT projects, specifically combining microcontrollers like ESP32 with MQTT protocols.",
    "I approach software development with a continuous learning mindset. I am eager to contribute my skills to entry-level Backend Developer and Software Engineer roles, where I can collaborate with teams to deploy production-quality systems.",
  ],
  metrics: [
    {
      value: "1",
      label: "Backend Internship",
      description: "Maestro Technology Services",
    },
    {
      value: "6+",
      label: "Real-World Projects",
      description: "Including APIs, Web3, & IoT",
    },
    {
      value: "10+",
      label: "Technologies Mastered",
      description: "Python, FastAPI, Docker, & MySQL",
    },
    {
      value: "100%",
      label: "Continuous Learning",
      description: "Always building & reading code",
    },
  ],
  corePrinciples: [
    {
      title: "Clean API Design",
      description:
        "Developing well-documented, type-safe REST APIs with consistent error handling.",
      icon: "Layers",
    },
    {
      title: "IoT & Automation",
      description:
        "Connecting microcontrollers with MQTT brokers to enable localized, low-latency device control.",
      icon: "Zap",
    },
    {
      title: "Database Efficiency",
      description:
        "Designing optimized relational tables, indexing queries, and writing clean SQLAlchemy ORM code.",
      icon: "Database",
    },
  ],
}

import { CurrentlyBuildingItem } from "@/types"

export const currentlyBuildingData: CurrentlyBuildingItem[] = [
  {
    title: "Smart Home Automation",
    description:
      "Integrating ESP32 microcontrollers with MQTT brokers to enable localized, low-latency device controls and sensor logging.",
    status: "Active Research & Prototyping",
    iconName: "Cpu",
  },
  {
    title: "AI CCTV Monitoring",
    description:
      "Developing a Python-based frame processor that analyzes IP camera RTSP streams and flags human movement anomalies.",
    status: "In Progress",
    iconName: "Eye",
  },
  {
    title: "Python Backend APIs",
    description:
      "Refining custom templates using FastAPI, SQLModel, and OAuth2 JWT authorization strategies to enable fast project boot times.",
    status: "Refining Architecture",
    iconName: "Terminal",
  },
  {
    title: "HariWorks Portfolio",
    description:
      "Structuring a clean, minimal Next.js 16 landing page implementing strict RSC and standard relative OKLCH colors.",
    status: "Refining UI/UX",
    iconName: "Layers",
  },
]

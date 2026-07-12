import { AboutContent } from "@/types"

export const aboutContent: AboutContent = {
  title: "About Me",
  subtitle:
    "Engineering software with strict discipline, modular structures, and absolute visual precision.",
  paragraphs: [
    "I am a Senior Software Engineer with a deep passion for designing robust system architectures that solve genuine user problems. Over the last several years, I have collaborated with tech teams to deploy high-scale cloud apps and modern user interfaces.",
    "My development philosophy focuses on minimalism, readability, and performance. I believe software should not only execute correctly but be built as a self-documenting work of engineering art that other engineers can extend with ease.",
  ],
  metrics: [
    {
      value: "6+",
      label: "Years Experience",
      description: "Building production systems",
    },
    {
      value: "20+",
      label: "Projects Delivered",
      description: "Across enterprise and open source",
    },
    {
      value: "99.9%",
      label: "System Uptime",
      description: "Maintained in live deployments",
    },
  ],
  corePrinciples: [
    {
      title: "Architecture First",
      description:
        "A well-structured design prevents tech debt and enables clean future features.",
      icon: "Layers",
    },
    {
      title: "Performance & SEO",
      description:
        "Speed is a feature. Fast loading, semantic HTML, and proper indexability are non-negotiable.",
      icon: "Zap",
    },
    {
      title: "Accessibility Focused",
      description:
        "Ensuring keyboard navigation, ARIA tags, and color contrast ratios work for all visitors.",
      icon: "ShieldAlert",
    },
  ],
}

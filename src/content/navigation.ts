import { NavigationConfig } from "@/types"

export const navigationConfig: NavigationConfig = {
  header: [
    { label: "Home", href: "#" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Building", href: "#currently-building" },
  ],
  footer: {
    column1: {
      title: "Explore",
      links: [
        { label: "Home", href: "#" },
        { label: "Projects", href: "#projects" },
        { label: "Skills", href: "#skills" },
        { label: "Experience", href: "#experience" },
        { label: "Building", href: "#currently-building" },
      ],
    },
    column2: {
      title: "Socials",
      links: [
        {
          label: "GitHub",
          href: "https://github.com/hariprasadalagesan",
          isExternal: true,
        },
        {
          label: "LinkedIn",
          href: "https://linkedin.com/in/hariprasad-alagesan",
          isExternal: true,
        },
        {
          label: "Twitter / X",
          href: "https://x.com/hariprasad",
          isExternal: true,
        },
      ],
    },
  },
}

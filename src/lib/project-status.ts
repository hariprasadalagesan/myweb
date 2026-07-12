import { ProjectStatus } from "@/types"

/**
 * Maps a project status value to its Badge variant.
 * Shared between ProjectCard and project case study page.
 */
export const statusBadgeVariant: Record<
  ProjectStatus,
  "success" | "warning" | "brand" | "default"
> = {
  completed: "success",
  "in-progress": "warning",
  beta: "brand",
  maintenance: "default",
}

/**
 * Formats a project status string for display.
 * e.g. "in-progress" → "In Progress"
 */
export function formatStatus(status: ProjectStatus): string {
  return status
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
}

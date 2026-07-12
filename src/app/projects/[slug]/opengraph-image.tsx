import { ImageResponse } from "next/og"
import { projectsData } from "@/content/projects"

export const runtime = "edge"

export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

export default async function Image({ params }: { params: { slug: string } }) {
  const project = projectsData.find((p) => p.slug === params.slug)
  const title = project?.title || "Project Case Study"
  const category = project?.category || "Backend Development"

  return new ImageResponse(
    <div
      style={{
        background: "linear-gradient(to bottom right, #09090b, #18181b)",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "sans-serif",
        padding: "80px",
        color: "white",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 40,
          left: 40,
          right: 40,
          bottom: 40,
          border: "1px solid rgba(168, 85, 247, 0.15)",
          borderRadius: "16px",
          display: "flex",
        }}
      />
      <div
        style={{
          background: "rgba(168, 85, 247, 0.1)",
          border: "1px solid rgba(168, 85, 247, 0.3)",
          color: "#c084fc",
          padding: "8px 16px",
          borderRadius: "999px",
          fontSize: "14px",
          fontWeight: "600",
          textTransform: "uppercase",
          letterSpacing: "2px",
          marginBottom: "24px",
        }}
      >
        {category}
      </div>
      <div
        style={{
          fontSize: "52px",
          fontWeight: "800",
          textAlign: "center",
          marginBottom: "16px",
          background: "linear-gradient(to right, #ffffff, #a855f7)",
          backgroundClip: "text",
          color: "transparent",
          display: "flex",
        }}
      >
        {title}
      </div>
      <div
        style={{
          fontSize: "20px",
          color: "#a1a1aa",
          textAlign: "center",
          maxWidth: "850px",
          display: "flex",
        }}
      >
        Case study details and technical implementation metrics.
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 60,
          fontSize: "16px",
          color: "#52525b",
          fontWeight: "bold",
          textTransform: "uppercase",
          letterSpacing: "4px",
          display: "flex",
        }}
      >
        HariWorks.com
      </div>
    </div>,
    {
      ...size,
    }
  )
}

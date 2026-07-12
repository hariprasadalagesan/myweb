import Link from "next/link"
import { Container } from "@/components/ui/container"
import { buttonVariants } from "@/components/ui/button"
import { ArrowLeft, FileQuestion } from "lucide-react"
import { cn } from "@/lib/utils"
import { constructMetadata } from "@/utils/metadata"

export const metadata = constructMetadata({
  title: "Page Not Found",
  description: "The page you are looking for does not exist.",
  noIndex: true,
})

/**
 * Custom 404 page — branded and consistent with the design system.
 */
export default function NotFound() {
  return (
    <Container className="flex min-h-[70vh] flex-col items-center justify-center gap-8 py-24 text-center">
      {/* Icon */}
      <div className="bg-muted/40 border-border/40 flex size-20 items-center justify-center rounded-2xl border">
        <FileQuestion className="text-brand-primary size-9" />
      </div>

      {/* Eyebrow */}
      <span className="text-brand-primary font-mono text-xs tracking-widest uppercase">
        404 — Not Found
      </span>

      {/* Heading */}
      <div className="space-y-3">
        <h1 className="text-foreground text-3xl font-bold tracking-tight sm:text-4xl">
          Page doesn&apos;t exist
        </h1>
        <p className="text-muted-foreground mx-auto max-w-sm text-base leading-relaxed">
          The page you&apos;re looking for may have been moved, renamed, or
          never existed.
        </p>
      </div>

      {/* CTAs */}
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/"
          className={cn(
            buttonVariants({ variant: "default", size: "lg" }),
            "focus-visible:ring-brand-primary cursor-pointer gap-2 rounded-full focus-visible:ring-2"
          )}
        >
          <ArrowLeft className="size-4" />
          Back to Home
        </Link>
        <Link
          href="/#projects"
          className={cn(
            buttonVariants({ variant: "outline", size: "lg" }),
            "focus-visible:ring-brand-primary cursor-pointer rounded-full focus-visible:ring-2"
          )}
        >
          View Projects
        </Link>
      </div>
    </Container>
  )
}

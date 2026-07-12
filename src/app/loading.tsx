import { Container } from "@/components/ui/container"

/**
 * Global loading UI — shown while page segments load.
 * Uses CSS skeleton animation to prevent layout shift.
 */
export default function Loading() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center gap-6 py-24">
      {/* Animated brand dot loader */}
      <div
        className="flex items-center gap-2"
        aria-label="Loading"
        role="status"
      >
        <span className="bg-brand-primary size-2 animate-bounce rounded-full [animation-delay:0ms]" />
        <span className="bg-brand-primary size-2 animate-bounce rounded-full [animation-delay:150ms]" />
        <span className="bg-brand-primary size-2 animate-bounce rounded-full [animation-delay:300ms]" />
      </div>
      <p className="text-muted-foreground font-mono text-sm">Loading...</p>
    </Container>
  )
}

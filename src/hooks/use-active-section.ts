"use client"

import { useEffect, useState } from "react"

export function useActiveSection(
  sectionIds: string[],
  options?: IntersectionObserverInit
) {
  const [activeSection, setActiveSection] = useState<string>("")

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    if (elements.length === 0) return

    const visibleSections = new Map<string, boolean>()

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visibleSections.set(entry.target.id, entry.isIntersecting)
        })

        // Find the first section in the array that is currently intersecting
        const active = sectionIds.find((id) => visibleSections.get(id))
        if (active) {
          setActiveSection(active)
        }
      },
      {
        rootMargin: "-30% 0px -50% 0px", // focus on the middle section of the viewport
        threshold: 0.1,
        ...options,
      }
    )

    elements.forEach((el) => observer.observe(el))

    // Handle scroll back to top (default active to empty or home if scroll position is zero)
    const handleScroll = () => {
      if (window.scrollY < 100) {
        setActiveSection("")
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener("scroll", handleScroll)
    }
  }, [sectionIds, options])

  return activeSection
}

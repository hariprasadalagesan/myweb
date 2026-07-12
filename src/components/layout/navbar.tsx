"use client"

import * as React from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ArrowUpRight } from "lucide-react"
import { useScroll } from "@/hooks/use-scroll"
import { useActiveSection } from "@/hooks/use-active-section"
import { Button, buttonVariants } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { ThemeToggle } from "@/components/layout/theme-toggle"
import { NavItem } from "@/types"
import { cn } from "@/lib/utils"

const navItems: NavItem[] = [
  { label: "Home", href: "#" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
]

export function Navbar() {
  const scrolled = useScroll(10)
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

  // Track the active section in view using the intersection observer hook
  const activeSection = useActiveSection([
    "projects",
    "skills",
    "experience",
    "contact",
  ])

  // Close mobile menu on scroll
  React.useEffect(() => {
    if (scrolled) {
      setMobileMenuOpen(false)
    }
  }, [scrolled])

  // Helper to check if a navigation item is active
  const isItemActive = (href: string) => {
    if (href === "#") {
      return activeSection === ""
    }
    const targetId = href.replace("#", "")
    return activeSection === targetId
  }

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass-navbar py-3 shadow-sm"
          : "border-b border-transparent bg-transparent py-5"
      }`}
      role="banner"
    >
      <Container className="flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="#"
          className="group text-foreground focus-visible:outline-brand-primary flex items-center gap-1.5 rounded-md px-1 text-lg font-bold tracking-tight focus-visible:outline-2"
          aria-label="HariWorks Home"
        >
          <span className="relative flex size-2.5">
            <span className="bg-brand-primary absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"></span>
            <span className="bg-brand-primary relative inline-flex h-2.5 w-2.5 rounded-full"></span>
          </span>
          <span className="font-heading group-hover:text-brand-primary transition-colors">
            HariWorks
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden items-center gap-6 md:flex"
          role="navigation"
          aria-label="Main Navigation"
        >
          <ul className="bg-muted/20 dark:bg-muted/10 border-border/40 flex items-center gap-1 rounded-full border p-1.5">
            {navItems.map((item) => {
              const active = isItemActive(item.href)
              return (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "focus-visible:outline-brand-primary relative z-10 block rounded-full px-4 py-1.5 text-xs font-medium transition-colors duration-300 focus-visible:outline-2",
                      active
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {active && (
                      <motion.span
                        layoutId="active-desktop-nav"
                        className="bg-background dark:bg-card border-border/30 absolute inset-0 -z-10 rounded-full border shadow-sm"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                    {item.label}
                  </Link>
                </li>
              )
            })}
          </ul>

          <div className="bg-border/60 h-4 w-px" aria-hidden="true" />

          <ThemeToggle />

          <Link
            href="#contact"
            className={cn(
              buttonVariants({ variant: "outline", size: "sm" }),
              "focus-visible:ring-brand-primary cursor-pointer gap-1 rounded-full px-4 focus-visible:ring-2",
              isItemActive("#contact") &&
                "bg-muted text-foreground border-muted-foreground/30"
            )}
          >
            Contact <ArrowUpRight className="size-3" />
          </Link>
        </nav>

        {/* Mobile Control Group */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="focus-visible:ring-brand-primary size-9 rounded-full focus-visible:ring-2"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="text-foreground size-5" />
            ) : (
              <Menu className="text-foreground size-5" />
            )}
          </Button>
        </div>
      </Container>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="glass-navbar border-border absolute right-0 left-0 w-full overflow-hidden border-b md:hidden"
            role="navigation"
            aria-label="Mobile Navigation"
          >
            <nav className="flex flex-col space-y-4 p-6">
              <ul className="flex flex-col space-y-2">
                {navItems.map((item) => {
                  const active = isItemActive(item.href)
                  return (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        aria-current={active ? "page" : undefined}
                        className={cn(
                          "focus-visible:outline-brand-primary relative block rounded-xl px-4 py-2.5 text-sm font-medium transition-colors focus-visible:outline-2",
                          active
                            ? "text-brand-primary bg-brand-primary/5 font-semibold"
                            : "text-muted-foreground hover:text-foreground"
                        )}
                      >
                        {item.label}
                      </Link>
                    </li>
                  )
                })}
              </ul>

              <div className="bg-border/60 h-px w-full" aria-hidden="true" />

              <Link
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "w-full cursor-pointer justify-center gap-1 rounded-xl",
                  isItemActive("#contact") && "bg-muted text-foreground"
                )}
              >
                Contact <ArrowUpRight className="size-4" />
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
export default Navbar

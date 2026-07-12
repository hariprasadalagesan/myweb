import Link from "next/link"
import { Container } from "@/components/ui/container"
import { siteMetadata } from "@/content/site"
import { navigationConfig } from "@/content/navigation"
import { socialLinks } from "@/content/social"

export function Footer() {
  const currentYear = new Date().getFullYear()

  // Helper to render platform inline SVGs securely
  const renderSocialIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case "github":
        return (
          <svg
            className="size-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
            <path d="M9 18c-4.51 2-5-2-7-2" />
          </svg>
        )
      case "linkedin":
        return (
          <svg
            className="size-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect width="4" height="12" x="2" y="9" rx="1" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        )
      case "twitter / x":
      case "twitter":
        return (
          <svg
            className="size-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
          </svg>
        )
      case "email":
      case "mail":
        return (
          <svg
            className="size-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <footer
      className="border-border/80 bg-background/50 mt-20 border-t py-12"
      role="contentinfo"
    >
      <Container className="grid grid-cols-1 gap-8 md:grid-cols-4">
        {/* Brand Block */}
        <div className="space-y-4 md:col-span-2">
          <Link
            href="#"
            className="text-foreground focus-visible:outline-brand-primary flex w-fit items-center gap-1.5 rounded-md text-lg font-bold tracking-tight focus-visible:outline-2"
          >
            <span className="relative flex size-2.5">
              <span className="bg-brand-primary absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"></span>
              <span className="bg-brand-primary relative inline-flex h-2.5 w-2.5 rounded-full"></span>
            </span>
            <span className="font-heading">HariWorks</span>
          </Link>
          <p className="text-muted-foreground max-w-sm text-sm leading-relaxed">
            {siteMetadata.description}
          </p>
          {/* Social icons row */}
          <div className="flex items-center gap-4 pt-2">
            {socialLinks
              .filter((link) => link.active)
              .map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground hover:text-foreground hover:bg-muted/80 dark:hover:bg-muted/40 flex size-11 items-center justify-center rounded-full transition-all"
                  aria-label={`Visit Hariprasad's ${link.platform} profile`}
                >
                  {renderSocialIcon(link.platform)}
                </a>
              ))}
          </div>
        </div>

        {/* Footer Links Column 1 */}
        <div className="space-y-4">
          <h4 className="text-foreground text-xs font-bold tracking-wider uppercase">
            {navigationConfig.footer.column1.title}
          </h4>
          <ul className="space-y-2">
            {navigationConfig.footer.column1.links.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer Links Column 2 */}
        <div className="space-y-4">
          <h4 className="text-foreground text-xs font-bold tracking-wider uppercase">
            {navigationConfig.footer.column2.title}
          </h4>
          <ul className="space-y-2">
            {navigationConfig.footer.column2.links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={link.isExternal ? "_blank" : undefined}
                  rel={link.isExternal ? "noreferrer" : undefined}
                  className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1 text-sm transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      {/* Bottom copy */}
      <Container className="border-border/40 mt-8 flex flex-col items-center justify-between gap-4 border-t pt-8 sm:flex-row">
        <p className="text-muted-foreground font-mono text-xs">
          &copy; {currentYear} {siteMetadata.author}. All rights reserved.
        </p>
        <p className="text-muted-foreground/60 font-mono text-xs">
          Designed with Apple philosophy. Built with Next.js 16.
        </p>
      </Container>
    </footer>
  )
}
export default Footer

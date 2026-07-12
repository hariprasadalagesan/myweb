import { Geist, Geist_Mono } from "next/font/google"
import { ThemeProvider } from "@/components/providers/theme-provider"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { constructMetadata } from "@/utils/metadata"
import { siteMetadata } from "@/content/site"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata = constructMetadata({
  title: siteMetadata.title,
  description: siteMetadata.description,
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth`}
    >
      <body className="bg-background text-foreground selection:bg-brand-primary/20 selection:text-foreground flex min-h-full flex-col antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <a
            href="#main-content"
            className="focus:bg-background focus:text-foreground focus:border-brand-primary sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:rounded-md focus:border-2 focus:px-4 focus:py-2 focus:shadow-md"
          >
            Skip to Content
          </a>
          <Navbar />
          <main id="main-content" className="flex flex-1 flex-col pt-20">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

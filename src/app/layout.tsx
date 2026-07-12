import { Geist, Geist_Mono } from "next/font/google"
import { ThemeProvider } from "@/components/providers/theme-provider"
import { Navbar } from "@/components/layout/navbar"
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
  title: `${siteMetadata.name} — ${siteMetadata.title}`,
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
          <Navbar />
          <main className="flex flex-1 flex-col pt-20">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}

import { Metadata } from "next"

interface PageMetadataInput {
  title: string
  description: string
  urlPath?: string
  ogImage?: string
  noIndex?: boolean
}

export function constructMetadata({
  title,
  description,
  urlPath = "",
  ogImage = "/images/og-image.png",
  noIndex = false,
}: PageMetadataInput): Metadata {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://hariworks.com"
  const fullUrl = `${siteUrl}${urlPath}`
  const fullTitle = `${title} | HariWorks`

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: fullUrl,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: fullUrl,
      siteName: "HariWorks",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${title} - HariWorks`,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
      creator: "@hariprasad", // Replace or configure as necessary
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  }
}

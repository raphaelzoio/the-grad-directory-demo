import type React from "react"
import type { Metadata } from "next"
import { Belleza } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const belleza = Belleza({ subsets: ["latin"], weight: "400", variable: "--font-belleza" })

export const metadata: Metadata = {
  title: "Directory - Find Your Dream Job",
  description:
    "Discover thousands of job opportunities from top companies. Post jobs and connect with talented candidates.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${belleza.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

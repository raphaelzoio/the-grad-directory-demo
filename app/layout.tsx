import type React from "react"
import type { Metadata } from "next"
import { Nata_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const nataSans = Nata_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-sans"
})

export const metadata: Metadata = {
  title: "The Graduate Directory",
  description:
    "Discover thousands of job opportunities from top companies. Post jobs and connect with talented candidates.",
  generator: "v0.app",
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${nataSans.variable} font-sans font-medium antialiased`} style={{ "--font-serif": "var(--font-sans)" } as React.CSSProperties}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

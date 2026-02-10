import type React from "react"
import type { Metadata } from "next"
import { ViewTransition } from "react"
import { Noto_Serif, Lora, Belleza } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { NavbarWrapper } from "@/components/navbar-wrapper"
import { NavigationDirection } from "@/components/navigation-direction"
import "./globals.css"

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-serif",
})

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-lora",
})

const belleza = Belleza({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-belleza",
})

export const metadata: Metadata = {
  title: "The Graduate Directory",
  description:
    "Discover thousands of job opportunities from top companies. Post jobs and connect with talented candidates.",
  generator: "v0.app",
  icons: {
    icon: "/images/logo.jpg",
    apple: "/images/logo.jpg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${notoSerif.variable} ${lora.variable} ${belleza.variable} font-sans antialiased`}>
        <NavbarWrapper />
        <NavigationDirection />
        <ViewTransition default="cross-fade">
          {children}
        </ViewTransition>
        <Analytics />
      </body>
    </html>
  )
}

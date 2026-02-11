"use client"

import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Building2 } from "lucide-react"

export default function HomePage() {
  const router = useRouter()

  const handleLogin = (userType: "employer" | "graduate") => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem("userType", userType)
    }
    router.push("/dashboard")
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#445145" }}>
      {/* Header */}
      <header className="border-b border-white/20 sticky top-0 z-50" style={{ backgroundColor: "#445145" }}>
        <div className="container mx-auto px-4 py-5 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3" onClick={scrollToTop}>
            <span className="text-2xl font-belleza text-white tracking-tight">The Graduate Directory</span>
          </Link>
          <Link href="/about-employers" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
            About
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex-1 flex flex-col justify-center pt-16" style={{ backgroundColor: "#445145" }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-serif text-balance leading-tight">
                Search, refined
              </h1>
              <p className="text-base md:text-lg text-white/80 text-pretty max-w-2xl mx-auto leading-relaxed">
                The Graduate Directory is a closed private database of Oxbridge students and graduates, offering employers access to the country's most able and ambitious junior talent.
              </p>

              {/* Login Buttons */}
              <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2 pb-16">
                <Button
                  size="lg"
                  className="w-full sm:w-auto min-w-[220px] text-foreground text-base px-8 py-6 bg-white hover:bg-white/90"
                  onClick={() => handleLogin("employer")}
                >
                  <Building2 className="size-5 mr-2" />
                  See the database
                </Button>
              </div>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="w-full" style={{ backgroundColor: "#445145" }}>
        <div className="relative w-full opacity-60">
          <Image
            src="/images/landing-page.png"
            alt="The Graduate Directory"
            width={2560}
            height={1440}
            className="w-full h-auto block"
            priority
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/20 py-12" style={{ backgroundColor: "#445145" }}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto flex flex-col items-center gap-6">
            <button
              onClick={() => handleLogin("graduate")}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors cursor-pointer bg-transparent border-none"
            >
              For students and graduates
            </button>
            <div className="text-sm text-white/70">
              <p>&copy; 2026 The Graduate Directory. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

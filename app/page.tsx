"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Briefcase, Building2 } from "lucide-react"

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
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-center">
          <Link href="/" className="flex items-center gap-2" onClick={scrollToTop}>
            <div className="size-8 rounded-lg bg-primary flex items-center justify-center">
              <Briefcase className="size-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-semibold text-foreground font-['Belleza']">The Graduate Directory</span>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-3xl md:text-5xl lg:text-3xl text-foreground text-balance">
              The UK's premier graduate talent database
            </h1>
            <p className="text-lg md:text-xl lg:text-xl text-pretty max-w-3xl mx-auto leading-relaxed">
              The Graduate Directory is a closed private database of Oxbridge students and graduates, offering employers access to the country's most able  and ambitious junior talent.
            </p>

            {/* Login Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <Button size="lg" className="w-full sm:w-auto min-w-[200px]" asChild>
                <Link href="/about-graduates">
                  <Briefcase className="size-5 mr-2" />
                  I'm a Graduate
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto min-w-[200px] bg-transparent"
                asChild
              >
                <Link href="/about-employers">
                  <Building2 className="size-5 mr-2" />
                  I'm an Employer
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Logos */}
      <section className="py-16 border-t border-border bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <p className="text-center text-sm font-medium text-muted-foreground mb-12 uppercase tracking-wider">
              Trusted by Leading Organisations
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
              <div className="flex items-center justify-center h-20 w-full px-4">
                <span className="text-lg font-semibold text-foreground/70 hover:text-foreground transition-colors text-center">
                  Jane Street
                </span>
              </div>

              <div className="flex items-center justify-center h-20 w-full px-4">
                <span className="text-lg font-semibold text-foreground/70 hover:text-foreground transition-colors text-center">
                  Panmure Liberum
                </span>
              </div>

              <div className="flex items-center justify-center h-20 w-full px-4">
                <span className="text-lg font-semibold text-foreground/70 hover:text-foreground transition-colors text-center">
                  Advent International
                </span>
              </div>

              <div className="flex items-center justify-center h-20 w-full px-4">
                <span className="text-lg font-semibold text-foreground/70 hover:text-foreground transition-colors text-center">
                  BCG
                </span>
              </div>

              <div className="flex items-center justify-center h-20 w-full px-4">
                <span className="text-lg font-semibold text-foreground/70 hover:text-foreground transition-colors text-center">
                  Capgemini
                </span>
              </div>

              <div className="flex items-center justify-center h-20 w-full px-4">
                <span className="text-lg font-semibold text-foreground/70 hover:text-foreground transition-colors text-center">
                  AlixPartners
                </span>
              </div>

              <div className="flex items-center justify-center h-20 w-full px-4">
                <span className="text-lg font-semibold text-foreground/70 hover:text-foreground transition-colors text-center">
                  Egon Zehnder
                </span>
              </div>

              <div className="flex items-center justify-center h-20 w-full px-4">
                <span className="text-lg font-semibold text-foreground/70 hover:text-foreground transition-colors text-center">
                  Latham & Watkins
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center text-sm text-muted-foreground">
            <p>&copy; 2025 The Graduate Directory. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

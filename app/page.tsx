"use client"

import Image from "next/image"
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
        <div className="container mx-auto px-4 py-4">
          <Link href="/" className="flex items-center gap-3" onClick={scrollToTop}>
            <div className="size-10 rounded-lg bg-primary flex items-center justify-center">
              <Briefcase className="size-6 text-primary-foreground" />
            </div>
            <span className="text-2xl font-serif font-semibold text-foreground tracking-tight">TGD</span>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl space-y-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground text-balance leading-tight">
              The UK's premier graduate talent database
            </h1>
            <p className="text-base md:text-lg text-muted-foreground text-pretty max-w-2xl leading-relaxed">
              The Graduate Directory is a closed private database of Oxbridge students and graduates, offering employers access to the country's most able and ambitious junior talent.
            </p>

            {/* Login Buttons */}
            <div className="flex flex-col sm:flex-row items-start gap-4 pt-4">
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
<section className="py-16 border-t border-border bg-card">
  <div className="container mx-auto px-4">
    <div className="max-w-6xl mx-auto">
      <p className="text-sm font-medium text-muted-foreground mb-12 uppercase tracking-wider text-center">
        Trusted by Leading Organisations
      </p>
      <div className="flex justify-center">
        <Image
          src="/images/logo-20collage.png"
          alt="Trusted partner logos including Latham & Watkins, Advent, Farient Advisors, BCG, Beazley, Capgemini, FGS Global, and Panmure Liberum"
          width={1000}
          height={600}
          className="max-w-4xl w-full h-auto ml-8"
        />
      </div>
    </div>
  </div>
</section>

      {/* Footer */}
      <footer className="border-t border-border py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-sm text-muted-foreground">
            <p>&copy; 2025 The Graduate Directory. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

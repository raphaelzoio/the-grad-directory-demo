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
            <span className="text-xl font-semibold text-foreground">The Graduate Directory</span>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground text-balance">
              The UK's premier graduate database
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
              The Graduate Directory is a closed private database, offering employers access to the country's most
              promising, talented and ambitious young individuals.
            </p>

            {/* Login Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <Button size="lg" className="w-full sm:w-auto min-w-[200px]" onClick={() => handleLogin("graduate")}>
                <Briefcase className="size-5 mr-2" />
                Graduate Login
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto min-w-[200px] bg-transparent"
                onClick={() => handleLogin("employer")}
              >
                <Building2 className="size-5 mr-2" />
                Employer Login
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Logos */}
      <section className="py-16 border-t border-border bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <p className="text-center text-sm font-medium text-muted-foreground mb-8 uppercase tracking-wider">
              Trusted by Leading Organizations
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center justify-items-center">
              {/* Partnership Logo 1 */}
              <div className="flex items-center justify-center">
                <svg className="h-8 text-foreground/60" viewBox="0 0 120 40" fill="currentColor">
                  <rect x="10" y="10" width="100" height="20" rx="4" />
                  <text x="60" y="27" fontSize="14" textAnchor="middle" fill="white" fontWeight="bold">
                    ACME Corp
                  </text>
                </svg>
              </div>

              {/* Partnership Logo 2 */}
              <div className="flex items-center justify-center">
                <svg className="h-8 text-foreground/60" viewBox="0 0 120 40" fill="currentColor">
                  <circle cx="30" cy="20" r="15" />
                  <rect x="50" y="10" width="60" height="20" rx="4" />
                  <text x="80" y="27" fontSize="14" textAnchor="middle" fill="white" fontWeight="bold">
                    TechCo
                  </text>
                </svg>
              </div>

              {/* Partnership Logo 3 */}
              <div className="flex items-center justify-center">
                <svg className="h-8 text-foreground/60" viewBox="0 0 120 40" fill="currentColor">
                  <path d="M10 20 L30 10 L30 30 Z" />
                  <rect x="40" y="10" width="70" height="20" rx="4" />
                  <text x="75" y="27" fontSize="14" textAnchor="middle" fill="white" fontWeight="bold">
                    GlobalTech
                  </text>
                </svg>
              </div>

              {/* Partnership Logo 4 */}
              <div className="flex items-center justify-center">
                <svg className="h-8 text-foreground/60" viewBox="0 0 120 40" fill="currentColor">
                  <rect x="10" y="10" width="30" height="20" rx="4" />
                  <rect x="45" y="10" width="30" height="20" rx="4" />
                  <rect x="80" y="10" width="30" height="20" rx="4" />
                </svg>
              </div>

              {/* Partnership Logo 5 */}
              <div className="flex items-center justify-center">
                <svg className="h-8 text-foreground/60" viewBox="0 0 120 40" fill="currentColor">
                  <polygon points="20,10 30,30 10,30" />
                  <rect x="40" y="10" width="70" height="20" rx="4" />
                  <text x="75" y="27" fontSize="14" textAnchor="middle" fill="white" fontWeight="bold">
                    Innovate
                  </text>
                </svg>
              </div>

              {/* Partnership Logo 6 */}
              <div className="flex items-center justify-center">
                <svg className="h-8 text-foreground/60" viewBox="0 0 120 40" fill="currentColor">
                  <circle cx="25" cy="20" r="12" />
                  <circle cx="50" cy="20" r="12" />
                  <text x="85" y="27" fontSize="16" textAnchor="middle" fontWeight="bold">
                    Partners
                  </text>
                </svg>
              </div>

              {/* Partnership Logo 7 */}
              <div className="flex items-center justify-center">
                <svg className="h-8 text-foreground/60" viewBox="0 0 120 40" fill="currentColor">
                  <rect x="10" y="10" width="100" height="20" rx="10" />
                  <text x="60" y="27" fontSize="14" textAnchor="middle" fill="white" fontWeight="bold">
                    Enterprise Ltd
                  </text>
                </svg>
              </div>

              {/* Partnership Logo 8 */}
              <div className="flex items-center justify-center">
                <svg className="h-8 text-foreground/60" viewBox="0 0 120 40" fill="currentColor">
                  <path d="M20 20 L35 10 L50 20 L35 30 Z" />
                  <rect x="60" y="10" width="50" height="20" rx="4" />
                  <text x="85" y="27" fontSize="14" textAnchor="middle" fill="white" fontWeight="bold">
                    Future
                  </text>
                </svg>
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

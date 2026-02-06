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
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-border bg-card sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-center">
          <Link href="/" className="flex items-center gap-3" onClick={scrollToTop}>
            <Image
              src="/images/logo.jpg"
              alt="The Graduate Directory"
              width={40}
              height={40}
              className="size-10 rounded-lg"
            />
            <span className="text-2xl font-serif font-semibold text-foreground tracking-tight">The Graduate Directory</span>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 items-center">
            <div className="space-y-8">
              <h1 className="text-gray-600 text-3xl md:text-4xl lg:text-5xl font-serif text-foreground text-balance leading-tight">
                The UK's premier graduate talent database
              </h1>
              <p className="text-base md:text-lg text-gray-600 text-pretty max-w-2xl leading-relaxed">
                The Graduate Directory is a closed private database of Oxbridge students and graduates, offering employers access to the country's most able and ambitious junior talent.
              </p>

              {/* Login Buttons */}
              <div className="flex flex-col sm:flex-row items-start gap-4 pt-4">
                <Button
                  size="lg"
                  className="w-full sm:w-auto min-w-[200px]"
                  asChild
                >
                  <Link href="/about-employers">
                    <Building2 className="size-5 mr-2" />
                    For employers
                  </Link>
                </Button>
                <Button size="lg"
                  variant="secondary" className="w-full sm:w-auto min-w-[200px]" asChild>
                  <Link href="/about-graduates">
                    <Briefcase className="size-5" />
                    For students and graduates
                  </Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <Image
                src="/images/board_briefcase.png"
                alt="Graduate students"
                width={500}
                height={500}
                className="w-60 max-w-md h-auto border rounded-lg shadow-lg object-cover px-4 py-8 bg-white mr-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Logos */}
      <section className="py-16 border-t border-border bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <p className="text-xl font-medium text-muted-foreground mb-12 tracking-wider text-center">
          Trusted by leading organisations
            </p>
            <div className="flex justify-center items-center pl-8">
              <Image
                src="/images/logo-20collage.png"
                alt="Trusted partner logos including Latham & Watkins, Advent, Farient Advisors, BCG, Beazley, Capgemini, FGS Global, and Panmure Liberum"
                width={1789}
                height={388}
                className="max-w-3xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-border bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
              <h3 className="text-3xl md:text-4xl lg:text-4xl font-serif text-foreground text-balance leading-tight pb-6">
                Search, refined
              </h3>
              <p className="text-base md:text-lg text-muted-foreground text-pretty leading-relaxed">
                The directory deploys AI judiciously to help your search process: simply write a sentence about what you're looking for, and we can apply it to a filtering system to find the best people, while maintaining breadth of candidates and depth of quality.
              </p><br/>
              <p className="text-base md:text-lg text-muted-foreground text-pretty leading-relaxed">
                The database is designed to reduce companies having to sift through thousands of AI-written applications. Our platform allows you to connect directly with the top talent in the country, knowing that experience and credentials have already been validated.
              </p>
          </div>
        </div>
      </section>  

      {/* Footer */}
      <footer className="border-t border-border py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-sm text-muted-foreground">
              <p>&copy; 2026 The Graduate Directory. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

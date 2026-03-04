"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"

export default function AboutGraduatesPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const fromDashboard = searchParams.get("from") === "dashboard"

  const handleContinue = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem("userType", "graduate")
      sessionStorage.setItem("userType", "graduate")
    }
    router.push("/dashboard")
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-white/20 sticky top-0 z-50" style={{ backgroundColor: "#445145" }}>
        <div className="container mx-auto px-4 py-8 flex justify-center">
          <Link href="/" className="flex items-center gap-3">
            <span className="text-3xl font-belleza text-white tracking-tight">The Graduate Directory</span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Title */}
          <div className="text-center space-y-2">
            <h1 className="text-3xl md:text-3xl font-bold text-foreground">About</h1>
          </div>

          {/* Information Card */}
          <Card className="p-8 md:p-12" style={{ backgroundColor: "#E7D9CB" }}>
            <div className="space-y-6 text-foreground leading-relaxed">
              <div>
                <h2 className="text-lg font-semibold mb-2">Be found by the right employers</h2>
                <p className="text-base">
                  The Graduate Directory is a searchable database used by the UK's top employers to identify and connect with high-potential junior talent. Rather than submitting applications into the void, your profile does the work for you. Employers search the database based on specific criteria, so the interest you receive is relevant and targeted. Whether you are approaching graduation, in your first role, or a few years into your career, your profile remains active and visible to employers who are actively looking.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold mb-2">A profile that goes beyond your CV</h2>
                <p className="text-base">
                  The Graduate Directory gives you the tools to represent yourself properly. Introduce yourself on video, upload your dissertation, CV or portfolio, and specify the roles and sectors you are interested in. The employers searching the database are paying for access because they have a genuine hiring need, which means that when your profile matches what they are looking for, they are in a position to act quickly. Joining as a candidate is free, and we can offer a small fee to those who refer us to five other candidates, upon completion of their profiles.
                </p>
              </div>
            </div>
          </Card>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            {fromDashboard ? (
              <Button size="lg" variant="outline" asChild className="min-w-[200px]">
                <Link href="/dashboard">
                  <ArrowLeft className="size-5 mr-2" />
                  Back to dashboard
                </Link>
              </Button>
            ) : (
              <>
                <Button size="lg" variant="outline" asChild className="min-w-[200px]">
                  <Link href="/">
                    <ArrowLeft className="size-5 mr-2" />
                    Back to Home
                  </Link>
                </Button>
                <Button size="lg" onClick={handleContinue} className="min-w-[200px]">
                  Connect with employers
                  <ArrowRight className="size-5 ml-2" />
                </Button>
              </>
            )}
          </div>

          {/* Additional Info */}
          <div className="text-center text-sm text-muted-foreground">
            <p>Questions about joining? Contact us at hello@thegraduatedirectory.com</p>
          </div>
        </div>
      </main>
    </div>
  )
}

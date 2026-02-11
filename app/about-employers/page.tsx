"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"

export default function AboutEmployersPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const fromDashboard = searchParams.get("from") === "dashboard"

  const handleProceed = () => {
    localStorage.setItem("userType", "employer")
    sessionStorage.setItem("userType", "employer")
    router.push("/dashboard")
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-white/20 sticky top-0 z-50" style={{ backgroundColor: "#445145" }}>
        <div className="container mx-auto px-4 py-4 flex justify-center">
          <Link href="/" className="flex items-center gap-3">
            <span className="text-2xl font-belleza text-white tracking-tight">The Graduate Directory</span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Title */} 
          <div className="text-center space-y-2">
            <h1 className="text-3xl md:text-3xl font-bold text-foreground">About</h1>
            <p className="text-lg text-muted-foreground">For employers</p>
          </div>

          {/* Information Card */}
          <Card className="p-8 md:p-12" style={{ backgroundColor: "#E7D9CB" }}>
            <div className="space-y-6 text-foreground leading-relaxed">
              <p className="text-base">
                The Graduate Directory is a closed searchable database enabling employers to access the country's highest quality junior talent.
              </p>

              <p className="text-base">
                Employers can both post jobs and search the database in a wide variety of ways to identify and connect with employed and not yet employed graduates with up to 10 years’ experience in the workplace. State of the art profiles allow graduates to display skillsets comprehensively via inbuilt video introductions, upload of content such as CVs and dissertations, with ability to specify desired roles and sectors to optimise their employment prospects.
              </p>

              <p className="text-base">
                Employers use the database to rapidly and precisely target the high potential talent they seek and circumvent the consuming, high volume applications with little ability to distinguish between them.
              </p>

              <p className="text-base">
                We offer a simple charging structure. Employers can pay a one-off database search fee of £995 for a month of access if an SME or £1,995 if a large corporate. Alternatively, they can subscribe at £600 a month for a minimum of six months.
              </p>
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
                <Button size="lg" onClick={handleProceed} className="min-w-[200px]">
                  Log in
                  <ArrowRight className="size-5 ml-2" />
                </Button>
              </>
            )}
          </div>

          {/* Additional Info */}
          <div className="text-center text-sm text-muted-foreground">
            <p>Questions about membership? Contact us at hello@thegraduatedirectory.com</p>
          </div>
        </div>
      </main>
    </div>
  )
}

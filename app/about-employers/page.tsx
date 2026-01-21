"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Building2, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function AboutEmployersPage() {
  const router = useRouter()

  const handleProceed = () => {
    localStorage.setItem("userType", "employer")
    router.push("/dashboard")
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <Link href="/" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="size-4" />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Title */}
          <div className="text-center space-y-2">
            <h1 className="text-3xl md:text-3xl font-bold text-foreground">About The Graduate Directory</h1>
            <p className="text-lg text-muted-foreground">For employers</p>
          </div>

          {/* Information Card */}
          <Card className="p-8 md:p-12">
            <div className="space-y-6 text-foreground leading-relaxed">
              <p className="text-base">
                The Graduate Directory is a member-only platform community for the purposes of graduate recruitment.
                Employers can access a closed profile database in order to find and connect with top junior talent.
                They can post jobs, reach out directly to candidates and control the visibility of their profile.
              </p>

              <p className="text-base">
                Membership for SMEs is offered at £950 per month, and for Enterprise clients at £1,950 per month. This
                represents a competitive offer for those looking to invest in the long term in ambitious, high-potential
                candidates, or seeking a cost-effective alternative to lengthy, outsourced recruitment.
              </p>
            </div>
            </Card>

            {/* CTA Button */}
            <div className="mt-10 flex justify-center">
              <Button size="lg" onClick={handleProceed} className="min-w-[250px]">
                <Building2 className="size-5 mr-2" />
                Log in
              </Button>
            </div>

            {/* Back Link */}
          <div className="text-center mt-8">
            <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
              ← Back to Home
            </Link>
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

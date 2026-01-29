"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, ArrowLeft, Briefcase } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function AboutGraduatesPage() {
  const router = useRouter()

  const handleContinue = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem("userType", "graduate")
      sessionStorage.setItem("userType", "graduate")
    }
    router.push("/dashboard")
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-center">
          <Link href="/" className="flex items-center gap-3">
            <div className="size-10 rounded-lg bg-primary flex items-center justify-center">
              <Briefcase className="size-6 text-primary-foreground" />
            </div>
            <span className="text-2xl font-serif font-semibold text-foreground tracking-tight">The Graduate Directory</span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          {/* Title Section */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-3xl font-bold text-foreground mb-4 text-balance">
              About
            </h1>
            <p className="text-lg text-muted-foreground">
              For Oxbridge students and graduates
            </p>
          </div>

          {/* Content Card */}
          <Card className="p-8 md:p-12 mb-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-foreground leading-relaxed mb-6">
                The Graduate Directory is a closed database of profiles for the purposes of recruitment. It presents a valuable opportunity for Oxbridge students and recent graduates to
                gain exposure to top employers, indicate interest in their roles, and engage with recruitment
                processes on a deeper level.
              </p>
              <p className="text-foreground leading-relaxed mb-6">
                If you are a student or a recent graduate with 0-10 years of industry experience, and have completed one
                or more degrees at Oxford or Cambridge, you are eligible to join the directory free of charge. Your
                profile will become part of a searchable database where employers can view your academics, skills,
                interests, industry experience and personal projects. It is advised to make your profile as detailed as
                possible, as this will help improve your visibility on the search function.
              </p>
              <p className="text-foreground leading-relaxed">
                You also have access to a curated jobs board from top employers. You can apply to these roles and save
                jobs for later. Employers can message you directly in order to start conversations, even without
                engagement on a job listing.
              </p>
            </div>
          </Card>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" variant="outline" asChild className="min-w-[200px]">
              <Link href="/">
                <ArrowLeft className="size-5 mr-2" />
                Back to Home
              </Link>
            </Button>
            <Button size="lg" onClick={handleContinue} className="min-w-[200px]">
              Log in
              <ArrowRight className="size-5 ml-2" />
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}

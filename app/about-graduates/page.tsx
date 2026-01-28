"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, ArrowLeft, GraduationCap } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
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
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <Link href="/" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="size-4" />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          {/* Title Section */}
          <div className="flex items-center justify-center gap-6 mb-12">
            <Image
              src="/images/woman.png"
              alt="Professional woman"
              width={80}
              height={80}
              className="size-40 rounded-full object-contain"
            />
            <div className="text-center">
              <h1 className="text-3xl md:text-3xl font-bold text-foreground mb-4 text-balance">
                About
              </h1>
              <p className="text-lg text-muted-foreground">
                For Oxbridge students and graduates
              </p>
            </div>
            <Image
              src="/images/man.png"
              alt="Professional man"
              width={80}
              height={80}
              className="size-40 rounded-full object-contain"
            />
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

          {/* CTA Button */}
          <div className="flex justify-center">
            <Button size="lg" onClick={handleContinue} className="min-w-[250px]">
              Log in
              <ArrowRight className="size-5 ml-2" />
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}

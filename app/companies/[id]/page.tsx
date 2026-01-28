"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/navbar"
import {
  Building2,
  MapPin,
  Users,
  Calendar,
  Globe,
  ArrowLeft,
  Briefcase,
  Award,
  TrendingUp
} from "lucide-react"
import { useEffect, useState } from "react"

// Mock company data
const companyData = {
  1: {
    id: 1,
    name: "TechCorp Solutions Ltd",
    logo: "TC",
    industry: "Software Development",
    location: "London, UK",
    size: "500-1000 employees",
    founded: "2015",
    website: "www.techcorpsolutions.com",
    description: "TechCorp Solutions is a leading provider of enterprise software solutions, specializing in cloud-based platforms and digital transformation services. We help businesses modernize their operations and scale efficiently through cutting-edge technology.",
    mission: "To empower businesses worldwide with innovative technology solutions that drive growth and efficiency.",
    culture: "We foster a collaborative, innovative environment where talented individuals can grow their careers while working on meaningful projects. Our team values diversity, continuous learning, and work-life balance.",
    openPositions: 12,
    benefits: [
      "Private Healthcare",
      "Pension Scheme",
      "Remote Work Options",
      "Share Options",
      "25 Days Holiday + Bank Holidays",
      "Professional Development Budget",
      "Gym Membership",
      "Mental Health Support",
      "Cycle to Work Scheme",
      "Enhanced Parental Leave"
    ],
    values: [
      "Innovation First - We embrace new technologies and creative solutions",
      "Customer Success - Our clients' growth is our priority",
      "Collaboration - We achieve more together",
      "Continuous Learning - We invest in our people's development"
    ],
    offices: [
      { city: "London", address: "123 Tech Street, EC2A 4NE", employees: 450 },
      { city: "Manchester", address: "45 Innovation Hub, M1 2HQ", employees: 320 },
      { city: "Edinburgh", address: "78 Digital Quarter, EH1 3EG", employees: 230 }
    ],
    openJobs: [
      {
        id: 1,
        title: "Graduate Software Engineer",
        location: "London, UK",
        type: "Full-time",
        salary: "£35,000 - £45,000",
        department: "Engineering",
        startDate: "September 2026"
      },
      {
        id: 2,
        title: "Junior Data Analyst",
        location: "Manchester, UK",
        type: "Full-time",
        salary: "£32,000 - £40,000",
        department: "Data & Analytics",
        startDate: "July 2026"
      },
      {
        id: 3,
        title: "Product Design Intern",
        location: "Remote",
        type: "Internship",
        salary: "£25,000 - £30,000",
        department: "Design",
        startDate: "June 2026"
      },
      {
        id: 4,
        title: "Graduate Cloud Engineer",
        location: "Edinburgh, UK",
        type: "Full-time",
        salary: "£38,000 - £48,000",
        department: "Cloud Infrastructure",
        startDate: "August 2026"
      }
    ],
    awards: [
      "Best Employer for Graduates 2024",
      "Tech Company of the Year 2023",
      "Top 50 Places to Work in Tech"
    ]
  }
}

export default function CompanyPage({ params }: { params: Promise<{ id: string }> | { id: string } }) {
  const router = useRouter()
  const [userType, setUserType] = useState<"employer" | "graduate" | null>(null)
  const [companyId, setCompanyId] = useState<number | null>(null)
  const company = companyId ? companyData[companyId as keyof typeof companyData] : null

  useEffect(() => {
    async function loadParams() {
      const resolvedParams = await params
      setCompanyId(parseInt(resolvedParams.id))
    }
    loadParams()
  }, [params])

  useEffect(() => {
    if (typeof window !== "undefined") {
      const sessionType = sessionStorage.getItem("userType") as "employer" | "graduate" | null
      const localType = localStorage.getItem("userType") as "employer" | "graduate" | null
      const type = sessionType || localType

      if (!type) {
        router.push("/")
      } else {
        setUserType(type)
        sessionStorage.setItem("userType", type)
        localStorage.setItem("userType", type)
      }
    }
  }, [router])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  if (!userType || !company) {
    return null
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <Navbar userType={userType} currentPage="jobs" />

      <div className="container mx-auto px-4 py-8">
        <Link
          href="/dashboard"
          onClick={scrollToTop}
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"
        >
          <ArrowLeft className="size-4" />
          Back to dashboard
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Company Header */}
            <Card className="p-8">
              <div className="flex items-start gap-6 mb-6">
                <div className="size-20 rounded-xl bg-primary text-primary-foreground flex items-center justify-center font-bold text-2xl shrink-0">
                  {company.logo}
                </div>
                <div className="flex-1">
                  <h1 className="text-3xl font-bold text-foreground mb-2">{company.name}</h1>
                  <p className="text-lg text-muted-foreground mb-4">{company.industry}</p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="size-4" />
                      <span>{company.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Users className="size-4" />
                      <span>{company.size}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="size-4" />
                      <span>Founded {company.founded}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Globe className="size-4" />
                      <span>{company.website}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {company.awards.map((award) => (
                  <Badge key={award} variant="secondary" className="gap-1">
                    <Award className="size-3" />
                    {award}
                  </Badge>
                ))}
              </div>
            </Card>

            {/* About */}
            <Card className="p-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">About {company.name}</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">{company.description}</p>

              <h3 className="text-lg font-semibold text-foreground mb-3">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">{company.mission}</p>

              <h3 className="text-lg font-semibold text-foreground mb-3">Culture & Values</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">{company.culture}</p>
              <ul className="space-y-2">
                {company.values.map((value, index) => (
                  <li key={index} className="flex gap-3 text-muted-foreground">
                    <span className="text-primary mt-1.5">•</span>
                    <span className="flex-1 leading-relaxed">{value}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Benefits */}
            <Card className="p-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">Benefits & Perks</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {company.benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="size-1.5 rounded-full bg-primary shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Offices */}
            <Card className="p-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">Our Offices</h2>
              <div className="grid gap-4">
                {company.offices.map((office) => (
                  <div key={office.city} className="flex items-start gap-4 p-4 rounded-lg bg-muted/30">
                    <Building2 className="size-5 text-primary mt-0.5 shrink-0" />
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-1">{office.city}</h3>
                      <p className="text-sm text-muted-foreground mb-1">{office.address}</p>
                      <p className="text-xs text-muted-foreground">{office.employees} employees</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Open Positions */}
            <Card className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-foreground">Open Positions ({company.openJobs.length})</h2>
              </div>
              <div className="space-y-4">
                {company.openJobs.map((job) => (
                  <div key={job.id} className="p-5 rounded-lg border border-border hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{job.title}</h3>
                        <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <MapPin className="size-3" />
                            {job.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Briefcase className="size-3" />
                            {job.type}
                          </span>
                          <span className="flex items-center gap-1">
                            <TrendingUp className="size-3" />
                            {job.salary}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex gap-2">
                        <Badge variant="secondary">{job.department}</Badge>
                        <Badge variant="outline">Start: {job.startDate}</Badge>
                      </div>
                      <Button size="sm" asChild>
                        <Link href={`/jobs/${job.id}`} onClick={scrollToTop}>
                          View Job
                        </Link>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            <Card className="p-6 sticky top-24">
              <div className="space-y-4">
                <div className="text-center p-6 bg-primary/5 rounded-lg border border-primary/20">
                  <p className="text-4xl font-bold text-foreground mb-1">{company.openPositions}</p>
                  <p className="text-sm text-muted-foreground">Open Positions</p>
                </div>
                <Button size="lg" className="w-full">
                  View All Jobs
                </Button>
                <Button variant="outline" size="lg" className="w-full bg-transparent">
                  Follow Company
                </Button>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold text-foreground mb-4">Quick Facts</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Industry</p>
                  <p className="font-medium text-foreground">{company.industry}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Company Size</p>
                  <p className="font-medium text-foreground">{company.size}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Founded</p>
                  <p className="font-medium text-foreground">{company.founded}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Locations</p>
                  <p className="font-medium text-foreground">{company.offices.length} UK offices</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

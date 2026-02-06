"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/navbar"
import { BookmarkButton } from "@/components/bookmark-button"
import { ContactDialog } from "@/components/contact-dialog"
import {
  MapPin,
  Mail,
  Phone,
  Calendar,
  Briefcase,
  GraduationCap,
  Award,
  Download,
  Linkedin,
  Github,
  BookOpen,
  ExternalLink,
  ArrowLeft,
} from "lucide-react"
import Link from "next/link"

const oliviaProfile = {
  id: 7,
  name: "Olivia Patel",
  email: "olivia.patel@cam.ac.uk",
  phone: "+44 7700 567890",
  degree: "Mathematics, MASt (Part III)",
  university: "University of Cambridge",
  college: "Trinity College",
  graduationYear: 2024,
  classification: "Distinction",
  location: "London, UK",
  skills: ["Stochastic Calculus", "Python", "R", "Statistical Modelling", "Probability Theory", "LaTeX"],
  experience: "1 year",
  availability: "Immediate",
  avatar: "OP",
  bio: "Part III Mathematics graduate from the University of Cambridge with a Distinction, specialising in probability theory and stochastic analysis. Completed undergraduate degree at Warwick with First Class Honours before pursuing the MASt at Cambridge. Passionate about applying rigorous mathematical methods to quantitative finance and data science. Experienced in statistical modelling through an internship at a leading hedge fund.",
  linkedin: "linkedin.com/in/oliviapatel-maths",
  github: "github.com/oliviapatel-maths",
  portfolioUrl: "https://github.com/oliviapatel-maths",
  portfolioLabel: "View GitHub",
  workExperience: [
    {
      title: "Quantitative Research Intern",
      company: "Citadel Securities",
      duration: "Summer 2023",
      description:
        "Developed statistical arbitrage models using Python and R. Built time-series forecasting pipelines for equity derivatives. Presented research findings to the portfolio management team.",
    },
    {
      title: "Data Science Intern",
      company: "Barclays Investment Bank",
      duration: "Summer 2022",
      description:
        "Analysed large financial datasets to identify trading patterns. Built Monte Carlo simulation tools for risk assessment. Automated daily reporting workflows using Python.",
    },
    {
      title: "Undergraduate Teaching Assistant",
      company: "University of Warwick, Department of Mathematics",
      duration: "2021 - 2022",
      description:
        "Led tutorial sessions for first-year Analysis and Linear Algebra modules. Marked weekly problem sheets and provided detailed feedback to students.",
    },
  ],
  cambridgeModules: [
    {
      name: "Advanced Probability",
      grade: "Distinction (82%)",
      description: "Measure-theoretic probability, martingales, Brownian motion, and stochastic integration.",
    },
    {
      name: "Stochastic Calculus and Applications",
      grade: "Distinction (85%)",
      description: "Itô calculus, stochastic differential equations, and applications to mathematical finance.",
    },
    {
      name: "Statistical Theory",
      grade: "Distinction (79%)",
      description: "Decision theory, estimation, hypothesis testing, and asymptotic methods.",
    },
    {
      name: "Applied Probability",
      grade: "Distinction (80%)",
      description: "Markov chains, queuing theory, branching processes, and percolation.",
    },
    {
      name: "Mathematics of Machine Learning",
      grade: "Distinction (77%)",
      description: "Statistical learning theory, kernel methods, neural network theory, and generalisation bounds.",
    },
    {
      name: "Functional Analysis",
      grade: "Merit (72%)",
      description: "Banach and Hilbert spaces, spectral theory, and applications to differential equations.",
    },
  ],
  education: [
    {
      degree: "Master of Advanced Study in Mathematics (Part III)",
      school: "University of Cambridge, Trinity College",
      year: "2023 - 2024",
      honors: "Distinction, Senior Rouse Ball Prize",
    },
    {
      degree: "Bachelor of Science in Mathematics",
      school: "University of Warwick",
      year: "2020 - 2023",
      honors: "First Class Honours, Best Dissertation Prize",
    },
  ],
  certifications: [
    "CQF (Certificate in Quantitative Finance) - In Progress",
    "Bloomberg Market Concepts",
    "Python for Financial Analysis (Coursera)",
    "AWS Cloud Practitioner",
  ],
  awards: [
    "Senior Rouse Ball Prize - Cambridge Part III Mathematics",
    "Warwick Mathematics Department Dissertation Prize",
    "IMO Silver Medal (2019)",
    "UKMT Senior Mathematical Challenge Gold",
  ],
  languages: ["English (Native)", "Gujarati (Fluent)", "Hindi (Conversational)"],
  interests: ["Quantitative Finance", "Probability Theory", "Mathematical Olympiads", "Chess"],
}

export default function OliviaPatelProfile() {
  const router = useRouter()
  const [userType, setUserType] = useState<"employer" | "graduate" | null>(null)
  const graduate = oliviaProfile

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

  if (!userType) {
    return null
  }

  return (
    <div className="min-h-screen bg-muted/30">
      <Navbar userType={userType} currentPage={userType === "employer" ? "directory" : "jobs"} />

      <div className="bg-background border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/dashboard"
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="size-4" />
              Back to {userType === "employer" ? "Search" : "Dashboard"}
            </Link>
            <div className="flex items-center gap-2">
              <Badge variant="secondary">Active</Badge>
              <Badge className="bg-green-500 text-white">{graduate.availability} Availability</Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1 space-y-6">
            <Card className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="size-24 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-3xl mb-4">
                  {graduate.avatar}
                </div>
                <h1 className="text-2xl font-bold mb-1">{graduate.name}</h1>
                <p className="text-muted-foreground mb-1">{graduate.degree}</p>
                <p className="text-sm text-muted-foreground mb-4">{graduate.college}, {graduate.university}</p>
                <Badge className="bg-amber-500 text-white mb-4">{graduate.classification}</Badge>
                <div className="flex gap-2 mb-6">
                  <ContactDialog graduateName={graduate.name} />
                  <BookmarkButton graduateId={graduate.id} graduateName={graduate.name} />
                </div>
                <Button variant="outline" className="w-full bg-transparent" asChild>
                  <a href={graduate.portfolioUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="size-4 mr-2" />
                    {graduate.portfolioLabel}
                    <ExternalLink className="size-4 ml-1" />
                  </a>
                </Button>
                <Button variant="outline" className="w-full bg-transparent mt-2">
                  <Download className="size-4 mr-2" />
                  Download CV
                </Button>
              </div>

              <div className="mt-6 pt-6 border-t space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <Mail className="size-4 text-muted-foreground shrink-0" />
                  <span className="text-muted-foreground break-all">{graduate.email}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Phone className="size-4 text-muted-foreground shrink-0" />
                  <span className="text-muted-foreground">{graduate.phone}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <MapPin className="size-4 text-muted-foreground shrink-0" />
                  <span className="text-muted-foreground">{graduate.location}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Calendar className="size-4 text-muted-foreground shrink-0" />
                  <span className="text-muted-foreground">Graduated {graduate.graduationYear}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Briefcase className="size-4 text-muted-foreground shrink-0" />
                  <span className="text-muted-foreground">{graduate.experience} Experience</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t">
                <h3 className="font-semibold mb-3 text-sm">Online Presence</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground cursor-default">
                    <Linkedin className="size-4" />
                    <span>{graduate.linkedin}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground cursor-default">
                    <Github className="size-4" />
                    <span>{graduate.github}</span>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <BookOpen className="size-5" />
                Technical Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {graduate.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-white" style={{ backgroundColor: "#41888C" }}>
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-4">Languages</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {graduate.languages.map((lang) => (
                  <li key={lang}>• {lang}</li>
                ))}
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Award className="size-5" />
                Awards & Honours
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {graduate.awards.map((award) => (
                  <li key={award}>• {award}</li>
                ))}
              </ul>
            </Card>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <Card className="p-6">
              <h2 className="text-xl font-bold mb-4">About</h2>
              <p className="text-muted-foreground leading-relaxed">{graduate.bio}</p>
            </Card>

            <Card className="p-6">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <BookOpen className="size-5" />
                Cambridge Part III Modules
              </h2>
              <div className="grid gap-4">
                {graduate.cambridgeModules.map((module, index) => (
                  <div key={index} className="p-4 rounded-lg border bg-muted/30">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold">{module.name}</h3>
                      <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
                        {module.grade}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{module.description}</p>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Briefcase className="size-5" />
                Work Experience
              </h2>
              <div className="space-y-6">
                {graduate.workExperience.map((job, index) => (
                  <div
                    key={index}
                    className="relative pl-6 before:absolute before:left-0 before:top-2 before:size-3 before:rounded-full before:bg-primary"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-semibold">{job.title}</h3>
                        <p className="text-sm text-muted-foreground">{job.company}</p>
                      </div>
                      <Badge variant="outline">{job.duration}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{job.description}</p>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <GraduationCap className="size-5" />
                Education
              </h2>
              <div className="space-y-6">
                {graduate.education.map((edu, index) => (
                  <div key={index}>
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-semibold">{edu.degree}</h3>
                        <p className="text-sm text-muted-foreground">{edu.school}</p>
                      </div>
                      <Badge variant="outline">{edu.year}</Badge>
                    </div>
                    <p className="text-sm text-primary mt-2">{edu.honors}</p>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-xl font-bold mb-6">Certifications</h2>
              <ul className="space-y-2">
                {graduate.certifications.map((cert) => (
                  <li key={cert} className="flex items-center gap-2 text-sm">
                    <div className="size-2 rounded-full bg-primary shrink-0" />
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-6">
              <h2 className="text-xl font-bold mb-4">Areas of Interest</h2>
              <div className="flex flex-wrap gap-2">
                {graduate.interests.map((interest) => (
                  <Badge key={interest} variant="outline">
                    {interest}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

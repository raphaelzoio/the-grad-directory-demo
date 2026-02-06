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
  BookOpen,
  FileText,
  ExternalLink,
  ArrowLeft,
} from "lucide-react"
import Link from "next/link"

const jamesProfile = {
  id: 8,
  name: "James Wright",
  email: "james.wright@ppe.ox.ac.uk",
  phone: "+44 7700 678901",
  degree: "Philosophy, Politics and Economics (PPE), BA",
  university: "University of Oxford",
  college: "Balliol College",
  graduationYear: 2024,
  classification: "First Class Honours",
  location: "London, UK",
  skills: ["Economic Analysis", "Policy Research", "Public Speaking", "Stata", "Econometrics", "Essay Writing"],
  experience: "1 year",
  availability: "2 weeks",
  avatar: "JW",
  bio: "First Class PPE graduate from Balliol College, Oxford, with a strong focus on development economics and public policy. President of the Oxford Union in Michaelmas 2023. Experienced in policy research through internships at the Treasury and a leading think tank. Passionate about evidence-based policymaking and international development. Seeking roles in government, consulting, or international organisations.",
  linkedin: "linkedin.com/in/jameswright-ppe",
  portfolioUrl: "https://oxford.ac.uk/thesis/james-wright",
  portfolioLabel: "Read thesis",
  workExperience: [
    {
      title: "Policy Research Intern",
      company: "HM Treasury",
      duration: "Summer 2023",
      description:
        "Supported the fiscal policy team with analysis of public spending proposals. Drafted briefing papers for senior officials. Conducted econometric analysis on the impact of tax policy changes using Stata.",
    },
    {
      title: "Research Assistant",
      company: "Institute for Fiscal Studies (IFS)",
      duration: "2022 - 2023",
      description:
        "Contributed to research on educational inequality and labour market outcomes. Cleaned and analysed large administrative datasets. Co-authored a working paper on regional productivity disparities.",
    },
    {
      title: "Summer Analyst",
      company: "McKinsey & Company",
      duration: "Summer 2022",
      description:
        "Worked on a public sector engagement advising a government department on digital transformation. Conducted stakeholder interviews, built financial models, and presented recommendations to the client.",
    },
  ],
  oxfordPapers: [
    {
      name: "Microeconomics",
      grade: "First (76%)",
      description: "Consumer and producer theory, general equilibrium, welfare economics, and market failures.",
    },
    {
      name: "Macroeconomics",
      grade: "First (74%)",
      description: "Growth theory, business cycles, monetary and fiscal policy, and open economy macroeconomics.",
    },
    {
      name: "Quantitative Economics",
      grade: "First (72%)",
      description: "Econometric methods, time-series analysis, panel data, and causal inference techniques.",
    },
    {
      name: "Political Theory",
      grade: "First (75%)",
      description: "Justice, liberty, equality, and democracy from Plato to Rawls. Focus on contemporary liberalism.",
    },
    {
      name: "British Politics and Government",
      grade: "First (73%)",
      description: "Parliamentary sovereignty, electoral systems, party politics, and devolution.",
    },
    {
      name: "Ethics",
      grade: "First (71%)",
      description: "Metaethics, normative ethics, and applied ethics. Utilitarianism, deontology, and virtue ethics.",
    },
    {
      name: "Development Economics (Option)",
      grade: "First (78%)",
      description: "Poverty, inequality, aid effectiveness, and institutional development. Thesis on microfinance in Sub-Saharan Africa.",
    },
    {
      name: "Philosophy of Mind (Option)",
      grade: "First (70%)",
      description: "Consciousness, intentionality, mental causation, and the mind-body problem.",
    },
  ],
  education: [
    {
      degree: "Bachelor of Arts in Philosophy, Politics and Economics",
      school: "University of Oxford, Balliol College",
      year: "2021 - 2024",
      honors: "First Class Honours, Gibbs Prize in Economics",
    },
    {
      degree: "A-Levels",
      school: "Eton College",
      year: "2019 - 2021",
      honors: "A*A*A*A in Economics, Mathematics, History, Politics",
    },
  ],
  certifications: [
    "Bloomberg Market Concepts Certificate",
    "LSE Summer School - Advanced Econometrics",
    "Oxford Said Business School - Entrepreneurship Programme",
    "Civil Service Fast Stream Assessment - Passed",
  ],
  awards: [
    "Gibbs Prize in Economics - Best Finals Performance",
    "Oxford Union President - Michaelmas 2023",
    "Balliol College Academic Scholarship",
    "IFS Best Intern Research Contribution 2023",
  ],
  languages: ["English (Native)", "French (Fluent)", "German (Intermediate)"],
  interests: ["Development Economics", "Public Policy", "Debating", "Political Philosophy"],
}

export default function JamesWrightProfile() {
  const router = useRouter()
  const [userType, setUserType] = useState<"employer" | "graduate" | null>(null)
  const graduate = jamesProfile

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
              <Badge className="bg-amber-500 text-white">{graduate.availability} Availability</Badge>
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
                    <FileText className="size-4 mr-2" />
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
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <BookOpen className="size-5" />
                Key Skills
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
                Oxford PPE Papers & Results
              </h2>
              <div className="grid gap-4">
                {graduate.oxfordPapers.map((paper, index) => (
                  <div key={index} className="p-4 rounded-lg border bg-muted/30">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold">{paper.name}</h3>
                      <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
                        {paper.grade}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{paper.description}</p>
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
              <h2 className="text-xl font-bold mb-6">Certifications & Programmes</h2>
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

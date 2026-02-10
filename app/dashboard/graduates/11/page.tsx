"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
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
  Leaf,
  BookOpen,
  ExternalLink,
  ArrowLeft,
} from "lucide-react"
import Link from "next/link"

const priyaProfile = {
  id: 11,
  name: "Priya Sharma",
  email: "priya.sharma@cam.ac.uk",
  phone: "+44 7700 901234",
  degree: "Chemical Engineering, MEng",
  university: "University of Cambridge",
  college: "Churchill College",
  graduationYear: 2024,
  classification: "First Class Honours",
  location: "Manchester, UK",
  skills: ["Process Design", "ASPEN Plus", "MATLAB", "Sustainability", "CFD Modelling", "Process Safety"],
  experience: "1 year",
  availability: "Immediate",
  avatar: "PS",
  bio: "MEng Chemical Engineering graduate from Churchill College, Cambridge, with First Class Honours and a strong focus on sustainable process design. Dissertation on carbon capture technology using novel solvent systems. Industrial experience through a year-long placement at a major energy company. Passionate about applying engineering solutions to the climate crisis. Seeking a graduate engineer role in energy, sustainability, or process industries.",
  linkedin: "linkedin.com/in/priyasharma-chemeng",
  github: "github.com/priyasharma-eng",
  portfolioUrl: "https://github.com/priyasharma-eng",
  portfolioLabel: "View Projects",
  workExperience: [
    {
      title: "Process Engineering Placement",
      company: "BP, London",
      duration: "2022 - 2023",
      description:
        "Year-long industrial placement in the low-carbon energy division. Developed process simulations for hydrogen production using ASPEN Plus. Conducted techno-economic analysis of carbon capture retrofit options. Presented findings to senior engineers and contributed to a patent application.",
    },
    {
      title: "Summer Research Intern",
      company: "Cambridge Chemical Engineering Department",
      duration: "Summer 2022",
      description:
        "Investigated novel amine solvents for post-combustion carbon capture. Performed laboratory experiments and modelled absorption columns using MATLAB. Research contributed to a journal publication in Chemical Engineering Science.",
    },
    {
      title: "Engineering Outreach Coordinator",
      company: "Women in STEM Society, Cambridge",
      duration: "2021 - 2024",
      description:
        "Organised workshops and talks to encourage young women to pursue engineering. Led a team of 15 volunteers to deliver events reaching 500+ school students across Cambridgeshire.",
    },
  ],
  cambridgeModules: [
    {
      name: "Reactor Design and Separation Processes",
      grade: "First (80%)",
      description: "Chemical reactor engineering, distillation, absorption, extraction, and membrane separation processes.",
    },
    {
      name: "Fluid Mechanics and Thermodynamics",
      grade: "First (77%)",
      description: "Computational fluid dynamics, turbulent flow, non-Newtonian fluids, and advanced thermodynamic cycles.",
    },
    {
      name: "Process Systems Engineering",
      grade: "First (82%)",
      description: "Process optimisation, control theory, plant-wide control, and scheduling under uncertainty.",
    },
    {
      name: "Sustainability and Environmental Engineering",
      grade: "First (85%)",
      description: "Life cycle assessment, carbon footprinting, waste treatment, and circular economy principles.",
    },
    {
      name: "Energy Systems",
      grade: "First (78%)",
      description: "Renewable energy technologies, energy storage, grid integration, and hydrogen economy.",
    },
    {
      name: "Biochemical Engineering",
      grade: "First (74%)",
      description: "Bioreactor design, fermentation, downstream processing, and biopharmaceutical manufacturing.",
    },
  ],
  projects: [
    {
      name: "Carbon Capture Solvent Screening",
      description: "MEng dissertation investigating novel amine-based solvents for improved CO₂ absorption efficiency. Achieved 15% improvement over baseline monoethanolamine.",
      technologies: ["ASPEN Plus", "MATLAB", "Lab Experiments"],
    },
    {
      name: "Hydrogen Production Techno-Economic Model",
      description: "Built a comprehensive model comparing blue and green hydrogen production routes for the UK energy system.",
      technologies: ["Python", "Excel", "ASPEN Plus"],
    },
    {
      name: "Sustainable Brewery Design",
      description: "Group design project creating a zero-waste craft brewery with integrated heat recovery and water recycling.",
      technologies: ["ASPEN Plus", "AutoCAD", "Process Safety Analysis"],
    },
  ],
  education: [
    {
      degree: "Master of Engineering in Chemical Engineering",
      school: "University of Cambridge, Churchill College",
      year: "2020 - 2024",
      honors: "First Class Honours, IChemE Undergraduate Award",
    },
    {
      degree: "A-Levels",
      school: "Manchester Grammar School",
      year: "2018 - 2020",
      honors: "A*A*A* in Chemistry, Mathematics, Physics",
    },
  ],
  certifications: [
    "IChemE Associate Member (AMIChemE)",
    "NEBOSH Process Safety Management Certificate",
    "ASPEN Plus Advanced User Certification",
    "Sustainability and Climate Risk (CFA Institute)",
  ],
  awards: [
    "IChemE Undergraduate Award for Best Design Project",
    "Churchill College Engineering Prize 2024",
    "BP Placement Star Performer Award",
    "Cambridge University Engineering Society - Best Presentation",
  ],
  languages: ["English (Native)", "Hindi (Fluent)", "Punjabi (Conversational)"],
  interests: ["Green Energy", "Process Optimisation", "Carbon Capture", "STEM Outreach"],
}

const relatedProfiles = [
  { id: 9, name: "Hannah Liu", university: "Cambridge", degree: "Natural Sciences, MSci", classification: "First", avatar: "HL" },
  { id: 7, name: "Olivia Patel", university: "Cambridge", degree: "Mathematics, MASt", classification: "Distinction", avatar: "OP" },
  { id: 4, name: "David Kim", university: "Cambridge", degree: "Computer Engineering, BEng", classification: "First", avatar: "DK" },
]

export default function PriyaSharmaProfile() {
  const router = useRouter()
  const [userType, setUserType] = useState<"employer" | "graduate" | null>(null)
  const [cameFromBookmarks, setCameFromBookmarks] = useState(false)
  const graduate = priyaProfile

  useEffect(() => {
    if (typeof window !== "undefined") {
      const sessionType = sessionStorage.getItem("userType") as "employer" | "graduate" | null
      const localType = localStorage.getItem("userType") as "employer" | "graduate" | null
      const type = sessionType || localType

      if (!type) {
        router.push("/")
      } else {
        setUserType(type)
        const previousPathname = sessionStorage.getItem("previousPathname")
        setCameFromBookmarks(previousPathname === "/bookmarks")
        sessionStorage.setItem("userType", type)
        localStorage.setItem("userType", type)
      }
    }
  }, [router])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleBackToDashboard = () => {
    if (cameFromBookmarks) {
      sessionStorage.removeItem("graduateBackTransition")
    } else {
      sessionStorage.setItem("graduateBackTransition", "1")
    }
    scrollToTop()
  }

  if (!userType) {
    return null
  }

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="bg-background border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link
              href={cameFromBookmarks ? "/bookmarks" : "/dashboard"}
              onClick={handleBackToDashboard}
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="size-4" />
              Back to {cameFromBookmarks ? "Saved Candidates" : userType === "employer" ? "Search" : "Dashboard"}
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
                <Leaf className="size-5" />
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

            {/* Related Profiles */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Related profiles</h3>
              <div className="space-y-3">
                {relatedProfiles.map((profile) => (
                  <Link
                    key={profile.id}
                    href={`/dashboard/graduates/${profile.id}`}
                    className="block p-3 rounded-lg border bg-muted/30 hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <div className="size-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm shrink-0">
                        {profile.avatar}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-sm text-foreground mb-1.5">
                          {profile.name}
                        </h4>
                        <div className="flex flex-wrap gap-1">
                          <Badge variant="secondary" className="text-xs">{profile.university}</Badge>
                          <Badge variant="secondary" className="text-xs">{profile.degree}</Badge>
                          <Badge variant="secondary" className="text-xs">{profile.classification}</Badge>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
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
                Cambridge Chemical Engineering Modules
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
                <Leaf className="size-5" />
                Notable Projects
              </h2>
              <div className="space-y-4">
                {graduate.projects.map((project, index) => (
                  <div key={index} className="p-4 rounded-lg border bg-muted/30">
                    <h3 className="font-semibold mb-2">{project.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
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
              <h2 className="text-xl font-bold mb-6">Professional Certifications</h2>
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

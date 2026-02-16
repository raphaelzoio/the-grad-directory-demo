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
  Globe,
  Palette,
  Layout,
  ExternalLink,
  ChevronDown,
  ArrowLeft,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const jessicaProfile = {
  id: 5,
  name: "Jessica Martinez",
  email: "jessica.martinez@rca.ac.uk",
  phone: "+44 7700 567890",
  degree: "UX Design, MA",
  university: "Royal College of Art",
  department: "School of Design",
  graduationYear: 2024,
  classification: "Distinction",
  location: "Manchester, UK",
  skills: ["Figma", "UI/UX", "Design Systems", "User Research", "Prototyping", "Accessibility"],
  experience: "2 years",
  availability: "Immediate",
  avatar: "JM",
  bio: "MA UX Design graduate from the Royal College of Art with Distinction. Specialising in human-centred design and inclusive digital experiences. Two years of experience designing products used by millions at leading tech and finance companies. Passionate about accessibility and creating design systems that scale. Portfolio includes award-winning work for major brands.",
  linkedin: "linkedin.com/in/jessicamartinezux",
  portfolio: "jessicamartinez.design",
  workExperience: [
    {
      title: "UX Designer",
      company: "Monzo Bank",
      duration: "2023 - 2024",
      description:
        "Led redesign of the savings product, increasing user engagement by 35%. Created and maintained design system components. Conducted user research sessions and usability testing with over 100 participants.",
    },
    {
      title: "Product Design Intern",
      company: "Spotify",
      duration: "Summer 2023",
      description:
        "Designed new features for the mobile app's discovery experience. Collaborated with cross-functional teams across London and Stockholm. Presented design concepts to senior leadership.",
    },
    {
      title: "Freelance UI/UX Designer",
      company: "Self-employed",
      duration: "2021 - 2022",
      description:
        "Designed digital products for startups and established brands. Clients included fashion retailers, healthtech startups, and educational platforms. Built lasting client relationships through quality work.",
    },
  ],
  rcaModules: [
    {
      name: "Advanced Interaction Design",
      grade: "Distinction",
      description: "Complex interaction patterns, micro-interactions, and motion design principles.",
    },
    {
      name: "Design Research Methods",
      grade: "Distinction",
      description: "Qualitative and quantitative research methods, ethnography, and data synthesis.",
    },
    {
      name: "Service Design",
      grade: "Distinction",
      description: "End-to-end service blueprinting, touchpoint mapping, and organisational design.",
    },
    {
      name: "Design for Inclusion",
      grade: "Distinction",
      description: "Accessibility standards, inclusive design principles, and designing for diverse users.",
    },
    {
      name: "Design Systems",
      grade: "Merit",
      description: "Component libraries, design tokens, and scaling design across products.",
    },
    {
      name: "Critical Design Practice",
      grade: "Distinction",
      description: "Design theory, speculative design, and ethical considerations in digital products.",
    },
  ],
  projects: [
    {
      name: "NHS Mental Health App Redesign",
      description: "MA thesis project redesigning the NHS mental health services app. Conducted extensive user research with patients and healthcare professionals. Design adopted for pilot programme.",
      technologies: ["Figma", "User Research", "Prototyping", "Accessibility"],
    },
    {
      name: "Sustainable Fashion Marketplace",
      description: "End-to-end design for a circular fashion platform. Featured in Dezeen and won D&AD New Blood Award.",
      technologies: ["Figma", "Service Design", "Motion Design"],
    },
    {
      name: "Accessibility Design Toolkit",
      description: "Open-source Figma plugin and guidelines for designing accessible interfaces. Used by over 2,000 designers.",
      technologies: ["Figma Plugin Development", "WCAG Guidelines"],
    },
  ],
  education: [
    {
      degree: "Master of Arts in UX Design",
      school: "Royal College of Art",
      year: "2022 - 2024",
      honors: "Distinction, Helen Hamlyn Award for Inclusive Design",
    },
    {
      degree: "Bachelor of Arts in Graphic Design",
      school: "University of the Arts London",
      year: "2018 - 2021",
      honors: "First Class Honours",
    },
  ],
  certifications: [
    "Google UX Design Professional Certificate",
    "IAAP Certified Professional in Accessibility Core Competencies",
    "Nielsen Norman Group UX Certification",
    "Figma Professional Certification",
  ],
  awards: [
    "Helen Hamlyn Award for Inclusive Design 2024",
    "D&AD New Blood Award - Product Design",
    "RCA Dean's Prize Nominee",
    "Design Week Rising Star 2023",
  ],
  languages: ["English (Native)", "Spanish (Native)", "Portuguese (Conversational)"],
  interests: ["Product Design", "Accessibility", "Design Systems", "Social Impact"],
}

const relatedProfiles = [
  { id: 10, name: "Tom Okafor", university: "Oxford", degree: "English, BA", classification: "First", avatar: "TO" },
  { id: 12, name: "Freddie Lawson", university: "Oxford", degree: "History, BA", classification: "First", avatar: "FL" },
  { id: 3, name: "Emily Rodriguez", university: "Oxford", degree: "Law, BA", classification: "First", avatar: "ER" },
]

export default function JessicaMartinezProfile() {
  const router = useRouter()
  const [userType, setUserType] = useState<"employer" | "graduate" | null>(null)
  const [cameFromBookmarks, setCameFromBookmarks] = useState(false)
  const [modulesExpanded, setModulesExpanded] = useState(false)
  const [beyondCvExpanded, setBeyondCvExpanded] = useState(false)
  const graduate = jessicaProfile

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
              <Badge variant="secondary" className="text-white">Active</Badge>
              <Badge className="bg-green-500 text-white">{graduate.availability} Availability</Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Profile Card */}
            <Card className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="size-24 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-3xl mb-4">
                  {graduate.avatar}
                </div>
                <h1 className="text-2xl font-bold mb-1">{graduate.name}</h1>
                <p className="text-muted-foreground mb-1">{graduate.degree}</p>
                <p className="text-sm text-muted-foreground mb-4">{graduate.department}, {graduate.university}</p>
                <Badge className="bg-amber-500 text-white mb-4">{graduate.classification}</Badge>
                <div className="flex gap-2 mb-6">
                  <ContactDialog graduateName={graduate.name} />
                  <BookmarkButton graduateId={graduate.id} graduateName={graduate.name} />
                </div>
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
                    <Globe className="size-4" />
                    <span>{graduate.portfolio}</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Video Introduction */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Video Introduction</h3>
              <Image
                src="/images/playbutton.png"
                alt="The Graduate Directory"
                className="w-full h-auto block opacity-40"
                width={200}
                height={100}
                priority
              />
            </Card>

            {/* Skills */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Palette className="size-5" />
                Design Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {graduate.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-white" style={{ backgroundColor: "#445145" }}>
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>

            {/* Languages */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Languages</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {graduate.languages.map((lang) => (
                  <li key={lang}>• {lang}</li>
                ))}
              </ul>
            </Card>

            {/* Awards */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Award className="size-5" />
                Awards & Recognition
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

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* About */}
            <Card className="p-6">
              <h2 className="text-xl font-bold mb-4">About</h2>
              <p className="text-muted-foreground leading-relaxed">{graduate.bio}</p>
            </Card>

            {/* Beyond the CV */}
            <Card className="p-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold">Beyond the CV</h2>
                <button onClick={() => setBeyondCvExpanded(!beyondCvExpanded)} className="p-1 rounded-md hover:bg-muted transition-colors">
                  <ChevronDown className={`size-6 transition-transform duration-200 ${beyondCvExpanded ? "rotate-180" : ""}`} />
                </button>
              </div>
              <div className="flex flex-wrap gap-2 mt-3">
                <Badge className="text-sm bg-amber-500 text-white">Resourcefulness</Badge>
                <Badge className="text-sm bg-amber-500 text-white">Critical thinking</Badge>
              </div>
              {beyondCvExpanded && (
                <div className="mt-4 space-y-4">
                  <blockquote className="text-sm text-muted-foreground leading-relaxed border-l-2 border-primary/30 pl-4 italic">
                    &ldquo;During my internship at a fintech startup, our team lost access to key market data two days before a client presentation. I identified three free alternative data sources, taught myself basic Python scraping to compile the information, and delivered comparable insights. The client commended our adaptability, and the workaround became standard practice for the team&rsquo;s future projects.&rdquo;
                  </blockquote>
                  <p className="text-sm text-muted-foreground">Internship, Summer 2025</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    In her Abstract Box, Jessica answered the question &ldquo;If you had £10,000 and six months, what would you create or explore?&rdquo;.{" "}
                    <a href="#" className="text-primary hover:underline inline-flex items-center gap-1">
                      Read answer here
                      <ExternalLink className="size-3" />
                    </a>
                  </p>
                </div>
              )}
            </Card>

            {/* Work Experience */}
            <Card className="p-6">
              <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
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

            {/* Projects */}
            <Card className="p-6">
              <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Palette className="size-5" />
                Featured Projects
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

            {/* RCA Modules */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold flex items-center gap-2">
                  <Layout className="size-5" />
                  Royal College of Art MA Modules
                </h2>
                <button onClick={() => setModulesExpanded(!modulesExpanded)} className="p-1 rounded-md hover:bg-muted transition-colors">
                  <ChevronDown className={`size-6 transition-transform duration-200 ${modulesExpanded ? "rotate-180" : ""}`} />
                </button>
              </div>
              <div className="grid gap-4">
                {(modulesExpanded ? graduate.rcaModules : graduate.rcaModules.slice(0, 1)).map((module, index) => (
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

            {/* Education */}
            <Card className="p-6">
              <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
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

            {/* Certifications */}
            <Card className="p-6">
              <h2 className="text-xl font-bold mb-3">Professional Certifications</h2>
              <ul className="space-y-2">
                {graduate.certifications.map((cert) => (
                  <li key={cert} className="flex items-center gap-2 text-sm">
                    <div className="size-2 rounded-full bg-primary shrink-0" />
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Interests */}
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

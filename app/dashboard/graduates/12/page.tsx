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
  BookOpen,
  FileText,
  ExternalLink,
  ArrowLeft,
  ChevronDown,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const freddieProfile = {
  id: 12,
  name: "Freddie Lawson",
  email: "freddie.lawson@history.ox.ac.uk",
  phone: "+44 7700 012345",
  degree: "History, BA",
  university: "University of Oxford",
  college: "Christ Church",
  graduationYear: 2024,
  classification: "First Class Honours",
  location: "London, UK",
  skills: ["Archival Research", "Academic Writing", "Critical Analysis", "Public Speaking", "French Palaeography", "Digital Humanities"],
  experience: "1 year",
  availability: "2 weeks",
  avatar: "FL",
  bio: "First Class History graduate from Christ Church, Oxford, with a specialism in modern British political history. Dissertation on the 1945 general election and the creation of the welfare state received the highest mark in the year. Experienced in archival research, long-form writing, and public engagement through work at the BBC and the National Archives. Passionate about making history accessible to wider audiences. Seeking roles in journalism, policy research, or cultural institutions.",
  linkedin: "linkedin.com/in/freddielawson-history",
  portfolioUrl: "https://oxford.ac.uk/thesis/freddie-lawson",
  portfolioLabel: "Read thesis",
  workExperience: [
    {
      title: "Researcher",
      company: "BBC History Magazine",
      duration: "2023 - Present",
      description:
        "Research and fact-check feature articles on modern British and European history. Pitch and write 1,500-word pieces for print and online editions. Coordinated a special issue on the 80th anniversary of D-Day.",
    },
    {
      title: "Archives Intern",
      company: "The National Archives, Kew",
      duration: "Summer 2023",
      description:
        "Catalogued and digitised Cabinet papers from the Attlee government. Assisted researchers with archival queries and contributed to the public engagement blog. Helped organise an exhibition on post-war reconstruction.",
    },
    {
      title: "History Outreach Officer",
      company: "University of Oxford, Faculty of History",
      duration: "2022 - 2023",
      description:
        "Led access and outreach sessions for state school sixth-formers considering applying to Oxford. Designed workshops on historical source analysis and personal statement writing.",
    },
  ],
  oxfordPapers: [
    {
      name: "British History 1815-1924",
      grade: "First (79%)",
      description: "Political reform, industrialisation, empire, the Irish question, and the emergence of the Labour movement.",
    },
    {
      name: "British History since 1900",
      grade: "First (82%)",
      description: "The world wars, welfare state, decolonisation, Thatcherism, and New Labour. Dissertation period.",
    },
    {
      name: "European History 1815-1914",
      grade: "First (75%)",
      description: "Nationalism, revolution, the unification of Germany and Italy, and the origins of the First World War.",
    },
    {
      name: "Theory and Methods of History",
      grade: "First (74%)",
      description: "Historiography from Ranke to the postmodern turn. Marxist, Annales, and cultural history approaches.",
    },
    {
      name: "History of Political Thought",
      grade: "First (76%)",
      description: "Hobbes, Locke, Rousseau, Burke, Mill, and Marx. The development of liberalism, conservatism, and socialism.",
    },
    {
      name: "The Cold War (Option)",
      grade: "First (77%)",
      description: "Superpower rivalry, nuclear deterrence, proxy wars, and the collapse of the Soviet Union.",
    },
    {
      name: "Thesis: The 1945 Election and the Birth of the Welfare State",
      grade: "First (85%)",
      description: "Extended dissertation drawing on Cabinet papers, party archives, and oral histories to reassess Labour's landslide victory.",
    },
  ],
  education: [
    {
      degree: "Bachelor of Arts in History",
      school: "University of Oxford, Christ Church",
      year: "2021 - 2024",
      honors: "First Class Honours, Gladstone Memorial Prize",
    },
    {
      degree: "A-Levels",
      school: "Hampton School",
      year: "2019 - 2021",
      honors: "A*A*A in History, English Literature, Politics",
    },
  ],
  certifications: [
    "NCTJ Certificate in Journalism (In Progress)",
    "The National Archives - Digital Preservation Training",
    "Royal Historical Society - Student Fellow",
    "Oxford Digital Humanities Summer School",
  ],
  awards: [
    "Gladstone Memorial Prize - Best History Dissertation",
    "Christ Church Academic Scholarship",
    "BBC Young Historian of the Year - Runner-up 2020",
    "Oxford Union Debating Semi-finalist",
  ],
  languages: ["English (Native)", "French (Fluent)", "German (Intermediate)"],
  interests: ["Modern British History", "Journalism", "Political Biography", "Podcasting"],
}

const relatedProfiles = [
  { id: 10, name: "Tom Okafor", university: "Oxford", degree: "English, BA", classification: "First", avatar: "TO" },
  { id: 3, name: "Emily Rodriguez", university: "Oxford", degree: "Law, BA", classification: "First", avatar: "ER" },
  { id: 8, name: "James Wright", university: "Oxford", degree: "PPE, BA", classification: "First", avatar: "JW" },
]

export default function FreddieLawsonProfile() {
  const router = useRouter()
  const [userType, setUserType] = useState<"employer" | "graduate" | null>(null)
  const [cameFromBookmarks, setCameFromBookmarks] = useState(false)
  const [modulesExpanded, setModulesExpanded] = useState(false)
  const graduate = freddieProfile

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

            <Card className="p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <BookOpen className="size-5" />
                Key Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {graduate.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-white" style={{ backgroundColor: "#445145" }}>
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
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold flex items-center gap-2">
                  <BookOpen className="size-5" />
                  Oxford History Papers & Results
                </h2>
                <button onClick={() => setModulesExpanded(!modulesExpanded)} className="p-1 rounded-md hover:bg-muted transition-colors">
                  <ChevronDown className={`size-6 transition-transform duration-200 ${modulesExpanded ? "rotate-180" : ""}`} />
                </button>
              </div>
              <div className="grid gap-4">
                {(modulesExpanded ? graduate.oxfordPapers : graduate.oxfordPapers.slice(0, 1)).map((paper, index) => (
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

            <Card className="p-6">
              <h2 className="text-xl font-bold mb-3">Certifications & Training</h2>
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

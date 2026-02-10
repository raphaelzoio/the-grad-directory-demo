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
  PenTool,
  ExternalLink,
  ArrowLeft,
  ChevronDown,
} from "lucide-react"
import Link from "next/link"

const tomProfile = {
  id: 10,
  name: "Tom Okafor",
  email: "tom.okafor@eng.ox.ac.uk",
  phone: "+44 7700 890123",
  degree: "English Language and Literature, BA",
  university: "University of Oxford",
  college: "Magdalen College",
  graduationYear: 2023,
  classification: "First Class Honours",
  location: "Birmingham, UK",
  skills: ["Copywriting", "Content Strategy", "Editing", "Research", "SEO Writing", "Proofreading"],
  experience: "2 years",
  availability: "Immediate",
  avatar: "TO",
  bio: "First Class English graduate from Magdalen College, Oxford, with a specialism in modern and contemporary literature. Two years of professional writing and editorial experience across publishing, media, and digital marketing. Skilled in crafting compelling copy, managing content strategies, and conducting in-depth research. Published creative writing in several literary journals. Seeking a role in publishing, journalism, or content strategy.",
  linkedin: "linkedin.com/in/tomokafor-writer",
  portfolioUrl: "https://tomokafor.substack.com",
  portfolioLabel: "Read writing",
  workExperience: [
    {
      title: "Editorial Assistant",
      company: "Penguin Random House UK",
      duration: "2023 - Present",
      description:
        "Assist editors in the literary fiction division with manuscript assessment, copy-editing, and proofreading. Write jacket copy and catalogue descriptions. Liaise with authors and agents on editorial queries. Managed the editorial process for three debut novels.",
    },
    {
      title: "Content Writer",
      company: "The Guardian (Freelance)",
      duration: "2022 - 2023",
      description:
        "Contributed long-form features and book reviews to the culture section. Wrote pieces on contemporary fiction, poetry, and the publishing industry. Averaged 15,000 monthly reads per article.",
    },
    {
      title: "Communications Intern",
      company: "Oxford Literary Festival",
      duration: "Spring 2022",
      description:
        "Managed social media channels during the festival period. Wrote press releases and author profiles. Coordinated media coverage resulting in 40% increase in online engagement.",
    },
  ],
  oxfordPapers: [
    {
      name: "Shakespeare",
      grade: "First (76%)",
      description: "Close reading of the plays and poems, performance history, and critical approaches to Shakespeare studies.",
    },
    {
      name: "Victorian Literature",
      grade: "First (78%)",
      description: "The novel, poetry, and prose of the Victorian period including Dickens, Eliot, Tennyson, and the Brontës.",
    },
    {
      name: "Modern Literature (1910-present)",
      grade: "First (80%)",
      description: "Modernism, postmodernism, and contemporary writing. Focus on Woolf, Joyce, Beckett, and postcolonial fiction.",
    },
    {
      name: "Old English",
      grade: "First (72%)",
      description: "Language and literature of the Anglo-Saxon period including Beowulf, The Wanderer, and prose texts.",
    },
    {
      name: "The English Language",
      grade: "First (74%)",
      description: "History of the English language, sociolinguistics, pragmatics, and discourse analysis.",
    },
    {
      name: "Postcolonial Literature (Option)",
      grade: "First (82%)",
      description: "Literature of the postcolonial world with focus on African, Caribbean, and South Asian writing. Dissertation on Chimamanda Ngozi Adichie.",
    },
    {
      name: "Creative Writing (Option)",
      grade: "First (79%)",
      description: "Workshop-based module producing a portfolio of fiction and poetry. Supervised by published novelist.",
    },
  ],
  education: [
    {
      degree: "Bachelor of Arts in English Language and Literature",
      school: "University of Oxford, Magdalen College",
      year: "2020 - 2023",
      honors: "First Class Honours, Addison Prize for English Essay",
    },
    {
      degree: "A-Levels",
      school: "King Edward's School, Birmingham",
      year: "2018 - 2020",
      honors: "A*A*A in English Literature, History, French",
    },
  ],
  certifications: [
    "Society for Editors and Proofreaders (SfEP) - Entry-Level Member",
    "Google Digital Marketing Certificate",
    "SEO Content Writing (HubSpot Academy)",
    "Publishing Scotland Editorial Skills Course",
  ],
  awards: [
    "Addison Prize for English Essay - Magdalen College",
    "Oxford Newdigate Poetry Prize - Runner-up 2023",
    "Young Writer of the Year Shortlist - Sunday Times 2022",
    "Oxford Creative Writing Anthology - Featured Writer",
  ],
  languages: ["English (Native)", "French (Fluent)", "Igbo (Conversational)"],
  interests: ["Publishing", "Contemporary Fiction", "Poetry", "Literary Criticism"],
}

const relatedProfiles = [
  { id: 12, name: "Freddie Lawson", university: "Oxford", degree: "History, BA", classification: "First", avatar: "FL" },
  { id: 3, name: "Emily Rodriguez", university: "Oxford", degree: "Law, BA", classification: "First", avatar: "ER" },
  { id: 8, name: "James Wright", university: "Oxford", degree: "PPE, BA", classification: "First", avatar: "JW" },
]

export default function TomOkaforProfile() {
  const router = useRouter()
  const [userType, setUserType] = useState<"employer" | "graduate" | null>(null)
  const [cameFromBookmarks, setCameFromBookmarks] = useState(false)
  const [modulesExpanded, setModulesExpanded] = useState(false)
  const graduate = tomProfile

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
                    <PenTool className="size-4 mr-2" />
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
                <PenTool className="size-5" />
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
                  Oxford English Papers & Results
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
              <h2 className="text-xl font-bold mb-3">Certifications</h2>
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

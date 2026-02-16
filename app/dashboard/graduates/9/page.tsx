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
  FlaskConical,
  BookOpen,
  ExternalLink,
  ArrowLeft,
  ChevronDown,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const hannahProfile = {
  id: 9,
  name: "Hannah Liu",
  email: "hannah.liu@cam.ac.uk",
  phone: "+44 7700 789012",
  degree: "Natural Sciences, MSci",
  university: "University of Cambridge",
  college: "Pembroke College",
  graduationYear: 2024,
  classification: "First Class Honours",
  location: "Cambridge, UK",
  skills: ["Biochemistry", "Lab Techniques", "MATLAB", "Data Analysis", "Mass Spectrometry", "Cell Culture"],
  experience: "2 years",
  availability: "1 month",
  avatar: "HL",
  bio: "MSci Natural Sciences graduate from the University of Cambridge, specialising in Biochemistry. Achieved First Class Honours with a dissertation on protein misfolding in neurodegenerative diseases. Two years of laboratory research experience across academic and pharmaceutical settings. Skilled in molecular biology techniques, data analysis, and scientific communication. Seeking a research scientist role in drug discovery or biotech.",
  linkedin: "linkedin.com/in/hannahliu-natsci",
  github: "github.com/hannahliu-natsci",
  portfolioUrl: "https://github.com/hannahliu-natsci",
  portfolioLabel: "View Research",
  workExperience: [
    {
      title: "Research Placement Student",
      company: "AstraZeneca, Cambridge",
      duration: "2023 - 2024",
      description:
        "Completed an industrial placement in the oncology research division. Conducted cell-based assays to evaluate novel drug candidates. Analysed experimental data using MATLAB and contributed to two internal research presentations.",
    },
    {
      title: "Summer Research Intern",
      company: "MRC Laboratory of Molecular Biology",
      duration: "Summer 2022",
      description:
        "Investigated protein-protein interactions using cryo-EM and X-ray crystallography data. Performed molecular cloning and protein purification. Co-authored a poster presented at the Cambridge Biochemistry Symposium.",
    },
    {
      title: "Laboratory Demonstrator",
      company: "University of Cambridge, Department of Biochemistry",
      duration: "2022 - 2023",
      description:
        "Supervised practical sessions for second-year Natural Sciences students. Guided students through enzyme kinetics experiments and assessed written lab reports.",
    },
  ],
  cambridgeModules: [
    {
      name: "Molecular Biology",
      grade: "First (79%)",
      description: "Gene expression, DNA replication and repair, epigenetics, and genome organisation.",
    },
    {
      name: "Cell Biology",
      grade: "First (76%)",
      description: "Membrane trafficking, cell signalling, cytoskeleton dynamics, and cell division.",
    },
    {
      name: "Structural Biology and Biophysics",
      grade: "First (81%)",
      description: "Protein structure determination, X-ray crystallography, cryo-EM, and NMR spectroscopy.",
    },
    {
      name: "Pharmacology",
      grade: "First (74%)",
      description: "Drug-receptor interactions, pharmacokinetics, neuropharmacology, and clinical drug development.",
    },
    {
      name: "Immunology",
      grade: "First (72%)",
      description: "Innate and adaptive immunity, antibody structure, T-cell biology, and immunotherapy.",
    },
    {
      name: "Neurobiology",
      grade: "First (75%)",
      description: "Synaptic transmission, neural circuits, sensory systems, and neurodegeneration.",
    },
  ],
  education: [
    {
      degree: "Master of Science (Integrated) in Natural Sciences",
      school: "University of Cambridge, Pembroke College",
      year: "2020 - 2024",
      honors: "First Class Honours, College Prize for Biochemistry",
    },
    {
      degree: "A-Levels",
      school: "King Edward VI Grammar School, Chelmsford",
      year: "2018 - 2020",
      honors: "A*A*A* in Biology, Chemistry, Mathematics",
    },
  ],
  certifications: [
    "Good Clinical Practice (GCP) Certificate",
    "MATLAB for Life Sciences (MathWorks)",
    "Laboratory Safety and COSHH Training",
    "Scientific Writing (Nature Masterclasses)",
  ],
  awards: [
    "Pembroke College Prize for Biochemistry 2024",
    "Cambridge Biochemistry Department Dissertation Prize",
    "British Pharmacological Society Undergraduate Award",
    "AstraZeneca Placement Student of the Year Nominee",
  ],
  languages: ["English (Native)", "Mandarin (Fluent)", "French (Intermediate)"],
  interests: ["Drug Discovery", "Molecular Biology", "Science Communication", "Hiking"],
}

const relatedProfiles = [
  { id: 7, name: "Olivia Patel", university: "Cambridge", degree: "Mathematics, MASt", classification: "Distinction", avatar: "OP" },
  { id: 11, name: "Priya Sharma", university: "Cambridge", degree: "Chemical Engineering, MEng", classification: "First", avatar: "PS" },
  { id: 6, name: "Alex Thompson", university: "Cambridge", degree: "Data Intensive Science, MPhil", classification: "First", avatar: "AT" },
]

export default function HannahLiuProfile() {
  const router = useRouter()
  const [userType, setUserType] = useState<"employer" | "graduate" | null>(null)
  const [cameFromBookmarks, setCameFromBookmarks] = useState(false)
  const [modulesExpanded, setModulesExpanded] = useState(false)
  const [beyondCvExpanded, setBeyondCvExpanded] = useState(false)
  const graduate = hannahProfile

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
                <FlaskConical className="size-5" />
                Technical Skills
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
                    In her Abstract Box, Hannah answered the question &ldquo;If you had £10,000 and six months, what would you create or explore?&rdquo;.{" "}
                    <a href="#" className="text-primary hover:underline inline-flex items-center gap-1">
                      Read answer here
                      <ExternalLink className="size-3" />
                    </a>
                  </p>
                </div>
              )}
            </Card>

            <Card className="p-6">
              <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Briefcase className="size-5" />
                Research & Work Experience
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
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold flex items-center gap-2">
                  <BookOpen className="size-5" />
                  Cambridge Natural Sciences Modules
                </h2>
                <button onClick={() => setModulesExpanded(!modulesExpanded)} className="p-1 rounded-md hover:bg-muted transition-colors">
                  <ChevronDown className={`size-6 transition-transform duration-200 ${modulesExpanded ? "rotate-180" : ""}`} />
                </button>
              </div>
              <div className="grid gap-4">
                {(modulesExpanded ? graduate.cambridgeModules : graduate.cambridgeModules.slice(0, 1)).map((module, index) => (
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

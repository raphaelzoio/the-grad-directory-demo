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
  Database,
  TrendingUp,
  ArrowLeft,
} from "lucide-react"
import Link from "next/link"

const alexProfile = {
  id: 6,
  name: "Alex Thompson",
  email: "alex.thompson@cam.ac.uk",
  phone: "+44 7700 678901",
  degree: "Data Intensive Science, MPhil (1st)",
  university: "University of Cambridge",
  graduationYear: 2023,
  classification: "First Class Honours",
  location: "Bristol, UK",
  skills: ["Python", "Machine Learning", "TensorFlow", "PyTorch", "Data Analysis", "SQL"],
  experience: "3 years",
  availability: "2 weeks",
  avatar: "AT",
  bio: "First Class Data Intensive Science MPhil graduate from Cambridge with three years of experience in machine learning and AI research. Specialising in deep learning architectures and large-scale data processing. Strong background in academic research with publications in peer-reviewed journals. Seeking a senior data scientist role at an innovative organisation working on cutting-edge AI applications.",
  linkedin: "linkedin.com/in/alexthompsondata",
  workExperience: [
    {
      title: "Machine Learning Engineer",
      company: "DeepMind London",
      duration: "2023 - Present",
      description: "Developed and trained neural network models for natural language processing. Optimised training pipelines for 40% faster convergence. Published research on transformer architecture improvements.",
    },
    {
      title: "Data Scientist",
      company: "Bloomberg LP",
      duration: "2022 - 2023",
      description: "Built predictive models for financial market analysis using TensorFlow. Processed petabyte-scale datasets using distributed computing. Improved model accuracy from 85% to 92%.",
    },
    {
      title: "Research Associate",
      company: "Cambridge Computer Lab",
      duration: "2021 - 2022",
      description: "Conducted research on neural network optimisation techniques. Co-authored 3 published papers in top-tier conferences. Mentored 2 undergraduate researchers.",
    },
  ],
  courses: [
    { name: "Advanced Machine Learning", grade: "First (92%)" },
    { name: "Statistical Data Analysis", grade: "First (90%)" },
    { name: "Deep Learning Architecture", grade: "First (91%)" },
    { name: "Research Methodology", grade: "First (88%)" },
    { name: "Data Engineering at Scale", grade: "First (89%)" },
  ],
  education: [
    {
      degree: "Master of Philosophy in Data Intensive Science",
      school: "University of Cambridge",
      year: "2021 - 2023",
      honors: "First Class Honours, Hall Prize for Best Research",
    },
    {
      degree: "Bachelor of Arts in Mathematics",
      school: "University of Cambridge",
      year: "2018 - 2021",
      honors: "First Class Honours, Cambridge Mathematics Prize",
    },
  ],
  certifications: ["Google Cloud Professional Data Engineer", "TensorFlow Certified Developer"],
  awards: ["Cambridge Data Science Award 2023", "Best Paper - International ML Conference 2023"],
  languages: ["English (Native)", "Python (Advanced)", "SQL (Advanced)"],
  interests: ["Machine Learning", "AI Research", "Data Engineering", "Open Source ML"],
  projects: [
    {
      title: "Transformer Model Optimization",
      description: "Developed novel attention mechanism reducing computational complexity by 30% while maintaining performance on BERT benchmarks.",
    },
    {
      title: "Large Language Model Fine-tuning Framework",
      description: "Created distributed framework for fine-tuning LLMs on custom datasets, now used by 50+ researchers globally. Open-sourced with 2k GitHub stars.",
    },
  ],
}

const relatedProfiles = [
  { id: 1, name: "Sarah Johnson", university: "Oxford", degree: "Computer Science, BSc", classification: "First", avatar: "SJ" },
  { id: 7, name: "Olivia Patel", university: "Cambridge", degree: "Mathematics, MASt", classification: "Distinction", avatar: "OP" },
  { id: 9, name: "Hannah Liu", university: "Cambridge", degree: "Natural Sciences, MSci", classification: "First", avatar: "HL" },
]

export default function AlexThompsonProfile() {
  const router = useRouter()
  const [userType, setUserType] = useState<"employer" | "graduate" | null>(null)
  const [cameFromBookmarks, setCameFromBookmarks] = useState(false)
  const graduate = alexProfile

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
              <Badge className="bg-amber-500 text-white">{graduate.availability} Availability</Badge>
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
                <p className="text-sm text-muted-foreground mb-4">{graduate.university}</p>
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
            </Card>

            {/* Skills */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Database className="size-5" />
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

            {/* Languages */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Languages & Proficiencies</h3>
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
                Awards
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

            {/* Projects */}
            <Card className="p-6">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <TrendingUp className="size-5" />
                Research Projects
              </h2>
              <div className="space-y-4">
                {graduate.projects.map((project, index) => (
                  <div key={index} className="p-4 rounded-lg border bg-muted/30">
                    <h3 className="font-semibold mb-2">{project.title}</h3>
                    <p className="text-sm text-muted-foreground">{project.description}</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Work Experience */}
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

            {/* Academic Coursework */}
            <Card className="p-6">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Database className="size-5" />
                Academic Coursework
              </h2>
              <div className="grid gap-3">
                {graduate.courses.map((course, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg border bg-muted/30">
                    <h3 className="font-semibold text-sm">{course.name}</h3>
                    <Badge className="bg-amber-50 text-amber-700 border-amber-200">{course.grade}</Badge>
                  </div>
                ))}
              </div>
            </Card>

            {/* Education */}
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

            {/* Certifications */}
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

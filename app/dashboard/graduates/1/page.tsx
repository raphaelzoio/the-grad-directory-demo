"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"
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
  Code,
  Cpu,
  ExternalLink,
  ArrowLeft,
  ChevronDown,
} from "lucide-react"
import Link from "next/link"

const sarahProfile = {
  id: 1,
  name: "Sarah Johnson",
  email: "sarah.johnson@cs.ox.ac.uk",
  phone: "+44 7700 234567",
  degree: "Computer Science, BSc",
  university: "University of Oxford",
  college: "St John's College",
  graduationYear: 2024,
  classification: "First Class Honours",
  location: "London, UK",
  skills: ["React", "TypeScript", "Node.js", "Python", "Machine Learning", "AWS"],
  experience: "2 years",
  availability: "Immediate",
  avatar: "SJ",
  bio: "First Class Computer Science graduate from the University of Oxford with a strong foundation in software engineering and artificial intelligence. Passionate about building scalable web applications and exploring the intersection of machine learning and user experience. Experienced in full-stack development through internships at leading tech companies and personal projects. Seeking a graduate role in software engineering or AI/ML engineering.",
  linkedin: "linkedin.com/in/sarahjohnsoncs",
  github: "github.com/sarahjohnson",
  portfolioUrl: "https://github.com/sarahjohnson",
  portfolioLabel: "View GitHub",
  workExperience: [
    {
      title: "Software Engineering Intern",
      company: "Google",
      duration: "Summer 2023",
      description:
        "Developed features for Google Cloud Platform using Go and TypeScript. Implemented a new dashboard component that improved user workflow efficiency by 25%. Participated in code reviews and agile development practices.",
    },
    {
      title: "Machine Learning Research Assistant",
      company: "Oxford Department of Computer Science",
      duration: "2022 - 2023",
      description:
        "Assisted Professor Andrew Zisserman's research group on computer vision projects. Implemented and evaluated neural network architectures for image classification tasks. Co-authored a paper submitted to CVPR.",
    },
    {
      title: "Software Developer (Part-time)",
      company: "Oxford University Innovation",
      duration: "2022",
      description:
        "Built React-based web applications for university spin-out companies. Developed RESTful APIs using Node.js and PostgreSQL. Implemented CI/CD pipelines using GitHub Actions.",
    },
  ],
  oxfordModules: [
    {
      name: "Algorithms and Data Structures",
      grade: "First (78%)",
      description: "Advanced algorithmic techniques including graph algorithms, dynamic programming, and complexity analysis.",
    },
    {
      name: "Machine Learning",
      grade: "First (82%)",
      description: "Supervised and unsupervised learning, neural networks, and probabilistic models. Achieved highest mark in the cohort.",
    },
    {
      name: "Computer Graphics",
      grade: "First (75%)",
      description: "3D rendering, ray tracing, and shader programming using OpenGL and WebGL.",
    },
    {
      name: "Compilers",
      grade: "First (74%)",
      description: "Lexical analysis, parsing, semantic analysis, and code generation for programming languages.",
    },
    {
      name: "Computer Networks",
      grade: "First (72%)",
      description: "TCP/IP protocols, network security, distributed systems, and cloud computing fundamentals.",
    },
    {
      name: "Databases",
      grade: "First (76%)",
      description: "Relational databases, SQL, query optimisation, and NoSQL systems including MongoDB and Redis.",
    },
    {
      name: "Software Engineering",
      grade: "First (80%)",
      description: "Agile methodologies, design patterns, testing strategies, and large-scale software architecture.",
    },
    {
      name: "Artificial Intelligence",
      grade: "First (79%)",
      description: "Search algorithms, game playing, planning, and knowledge representation.",
    },
  ],
  projects: [
    {
      name: "AI-Powered Code Review Tool",
      description: "Built a VS Code extension using GPT-4 API to provide intelligent code suggestions and identify potential bugs. Over 5,000 downloads on the VS Code marketplace.",
      technologies: ["TypeScript", "Node.js", "OpenAI API"],
    },
    {
      name: "Distributed Task Scheduler",
      description: "Final year project implementing a fault-tolerant distributed task scheduling system. Achieved distinction for innovative use of consensus algorithms.",
      technologies: ["Go", "gRPC", "Docker", "Kubernetes"],
    },
    {
      name: "Neural Style Transfer App",
      description: "Mobile application applying artistic styles to photographs using convolutional neural networks.",
      technologies: ["Python", "PyTorch", "React Native"],
    },
  ],
  education: [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "University of Oxford, St John's College",
      year: "2021 - 2024",
      honors: "First Class Honours, College Computing Prize 2024",
    },
    {
      degree: "A-Levels",
      school: "Manchester Grammar School",
      year: "2019 - 2021",
      honors: "A*A*A*A* in Maths, Further Maths, Computer Science, Physics",
    },
  ],
  certifications: [
    "AWS Solutions Architect Associate",
    "Google Cloud Professional Data Engineer",
    "TensorFlow Developer Certificate",
    "MongoDB Certified Developer",
  ],
  awards: [
    "St John's College Computing Prize 2024",
    "Google Generation Scholar 2023",
    "Oxford Hackathon Winner 2023",
    "British Computing Society Prize",
  ],
  languages: ["English (Native)", "Mandarin (Conversational)", "French (Basic)"],
  interests: ["Artificial Intelligence", "Machine Learning", "Open Source", "Tech for Good"],
}

const relatedProfiles = [
  { id: 2, name: "Michael Chen", university: "Cambridge", degree: "Software Engineering, MSc", classification: "Distinction", avatar: "MC" },
  { id: 4, name: "David Kim", university: "Cambridge", degree: "Computer Engineering, BEng", classification: "First", avatar: "DK" },
  { id: 6, name: "Alex Thompson", university: "Cambridge", degree: "Data Intensive Science, MPhil", classification: "First", avatar: "AT" },
]

export default function SarahJohnsonProfile() {
  const router = useRouter()
  const [userType, setUserType] = useState<"employer" | "graduate" | null>(null)
  const [cameFromBookmarks, setCameFromBookmarks] = useState(false)
  const [modulesExpanded, setModulesExpanded] = useState(false)
  const [beyondCvExpanded, setBeyondCvExpanded] = useState(false)
  const graduate = sarahProfile

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

            {/* Skills */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Code className="size-5" />
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
                <Badge variant="secondary" className="text-sm">Resourcefulness</Badge>
                <Badge variant="secondary" className="text-sm">Critical thinking</Badge>
              </div>
              {beyondCvExpanded && (
                <div className="mt-4 space-y-4">
                  <blockquote className="text-sm text-muted-foreground leading-relaxed border-l-2 border-primary/30 pl-4 italic">
                    &ldquo;During my internship at a fintech startup, our team lost access to key market data two days before a client presentation. I identified three free alternative data sources, taught myself basic Python scraping to compile the information, and delivered comparable insights. The client commended our adaptability, and the workaround became standard practice for the team&rsquo;s future projects.&rdquo;
                  </blockquote>
                  <p className="text-sm text-muted-foreground">Internship, Summer 2025</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    In her Abstract Box, Sarah answered the question &ldquo;If you had £10,000 and six months, what would you create or explore?&rdquo;.{" "}
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
                <Code className="size-5" />
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

            {/* Oxford Modules */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold flex items-center gap-2">
                  <Cpu className="size-5" />
                  Oxford Computer Science Modules
                </h2>
                <button onClick={() => setModulesExpanded(!modulesExpanded)} className="p-1 rounded-md hover:bg-muted transition-colors">
                  <ChevronDown className={`size-6 transition-transform duration-200 ${modulesExpanded ? "rotate-180" : ""}`} />
                </button>
              </div>
              <div className="grid gap-4">
                {(modulesExpanded ? graduate.oxfordModules : graduate.oxfordModules.slice(0, 1)).map((module, index) => (
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

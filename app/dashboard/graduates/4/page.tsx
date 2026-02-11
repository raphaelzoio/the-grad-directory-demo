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
  Cpu,
  Cog,
  ArrowLeft,
  ChevronDown,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const davidProfile = {
  id: 4,
  name: "David Kim",
  email: "david.kim@ed.ac.uk",
  phone: "+44 7700 456789",
  degree: "Computer Engineering, BEng",
  university: "University of Edinburgh",
  school: "School of Engineering",
  graduationYear: 2023,
  classification: "First Class Honours",
  location: "Edinburgh, UK",
  skills: ["C++", "Rust", "Kubernetes", "Linux", "FPGA", "Embedded Systems"],
  experience: "2 years",
  availability: "1 month",
  avatar: "DK",
  bio: "First Class Computer Engineering graduate from the University of Edinburgh with expertise in systems programming and embedded systems. Strong background in low-level software development, operating systems, and hardware-software co-design. Two years of experience building performance-critical applications at semiconductor and robotics companies. Passionate about writing efficient, safe code using modern languages like Rust.",
  linkedin: "linkedin.com/in/davidkimeng",
  github: "github.com/dkim-systems",
  workExperience: [
    {
      title: "Systems Software Engineer",
      company: "ARM",
      duration: "2023 - Present",
      description:
        "Developing compiler optimisations for ARM processors. Working on LLVM backend improvements that achieved 15% performance gains on specific workloads. Contributing to open-source toolchain projects.",
    },
    {
      title: "Embedded Software Engineer",
      company: "Dyson",
      duration: "Summer 2022",
      description:
        "Developed firmware for motor control systems using C and assembly. Implemented real-time control algorithms with strict timing constraints. Reduced power consumption by 12% through software optimisations.",
    },
    {
      title: "Research Intern",
      company: "Edinburgh Robotics Centre",
      duration: "2021 - 2022",
      description:
        "Worked on autonomous drone navigation systems. Implemented sensor fusion algorithms combining LiDAR and camera data. Contributed to ROS2 packages for robot localisation.",
    },
  ],
  edinburghModules: [
    {
      name: "Operating Systems",
      grade: "First (84%)",
      description: "Process management, memory allocation, file systems, and concurrent programming in C.",
    },
    {
      name: "Computer Architecture",
      grade: "First (82%)",
      description: "CPU design, pipelining, cache hierarchies, and multi-core systems. Final project on branch prediction.",
    },
    {
      name: "Embedded Systems",
      grade: "First (86%)",
      description: "Microcontroller programming, real-time systems, and hardware interfacing. Highest mark in cohort.",
    },
    {
      name: "Digital System Design",
      grade: "First (79%)",
      description: "FPGA programming using Verilog, digital logic design, and hardware verification.",
    },
    {
      name: "Systems Programming",
      grade: "First (81%)",
      description: "Low-level C programming, memory management, debugging tools, and performance profiling.",
    },
    {
      name: "Computer Networks",
      grade: "First (75%)",
      description: "Network protocols, socket programming, and distributed systems fundamentals.",
    },
    {
      name: "Robotics",
      grade: "First (80%)",
      description: "Robot kinematics, control systems, sensor integration, and autonomous navigation.",
    },
  ],
  projects: [
    {
      name: "Custom RISC-V Processor",
      description: "Final year project designing and implementing a 5-stage pipelined RISC-V processor on FPGA. Achieved 100MHz clock speed with full RV32I instruction set support.",
      technologies: ["Verilog", "FPGA", "RISC-V", "Vivado"],
    },
    {
      name: "Real-Time Operating System",
      description: "Built a minimal RTOS for ARM Cortex-M microcontrollers with preemptive scheduling, semaphores, and message queues.",
      technologies: ["C", "ARM Assembly", "FreeRTOS", "STM32"],
    },
    {
      name: "Rust Memory Allocator",
      description: "Custom memory allocator written in Rust with different allocation strategies. Published as an open-source crate with 500+ downloads.",
      technologies: ["Rust", "Systems Programming"],
    },
  ],
  education: [
    {
      degree: "Bachelor of Engineering in Computer Engineering",
      school: "University of Edinburgh",
      year: "2019 - 2023",
      honors: "First Class Honours, Best Final Year Project Award",
    },
    {
      degree: "International Baccalaureate",
      school: "Seoul International School",
      year: "2017 - 2019",
      honors: "42/45 points, Higher Level Mathematics and Physics",
    },
  ],
  certifications: [
    "Red Hat Certified System Administrator (RHCSA)",
    "ARM Accredited Engineer",
    "Embedded Linux Development Certificate",
    "Rust Programming Certification",
  ],
  awards: [
    "Edinburgh Engineering Best Project Award 2023",
    "IET Prize for Computer Engineering",
    "ARM University Challenge Finalist 2022",
    "British Informatics Olympiad Bronze Medal",
  ],
  languages: ["English (Fluent)", "Korean (Native)", "Japanese (Conversational)"],
  interests: ["Systems Programming", "Embedded Systems", "Open Source Hardware", "Compiler Design"],
}

const relatedProfiles = [
  { id: 1, name: "Sarah Johnson", university: "Oxford", degree: "Computer Science, BSc", classification: "First", avatar: "SJ" },
  { id: 2, name: "Michael Chen", university: "Cambridge", degree: "Software Engineering, MSc", classification: "Distinction", avatar: "MC" },
  { id: 6, name: "Alex Thompson", university: "Cambridge", degree: "Data Intensive Science, MPhil", classification: "First", avatar: "AT" },
]

export default function DavidKimProfile() {
  const router = useRouter()
  const [userType, setUserType] = useState<"employer" | "graduate" | null>(null)
  const [cameFromBookmarks, setCameFromBookmarks] = useState(false)
  const [modulesExpanded, setModulesExpanded] = useState(false)
  const graduate = davidProfile

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
              <Badge className="bg-blue-500 text-white">{graduate.availability} Availability</Badge>
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
                <p className="text-sm text-muted-foreground mb-4">{graduate.school}, {graduate.university}</p>
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
                <Cpu className="size-5" />
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

            {/* Edinburgh Modules */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold flex items-center gap-2">
                  <Cog className="size-5" />
                  Edinburgh Engineering Modules
                </h2>
                <button onClick={() => setModulesExpanded(!modulesExpanded)} className="p-1 rounded-md hover:bg-muted transition-colors">
                  <ChevronDown className={`size-6 transition-transform duration-200 ${modulesExpanded ? "rotate-180" : ""}`} />
                </button>
              </div>
              <div className="grid gap-4">
                {(modulesExpanded ? graduate.edinburghModules : graduate.edinburghModules.slice(0, 1)).map((module, index) => (
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
                <Cpu className="size-5" />
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

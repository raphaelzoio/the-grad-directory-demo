"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Search,
  MapPin,
  Briefcase,
  Clock,
  Lightbulb,
  Code,
  Palette,
  BarChart,
  LogOut,
  TrendingUp,
  Building2,
  Eye,
  Edit,
  Trash2,
  User,
  AlertCircle,
  GraduationCap,
  Calendar,
  ChevronDown,
  Award,
  ExternalLink,
} from "lucide-react"
import { useEffect, useState, useRef } from "react"



const featuredJobs = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "Digital Solutions Ltd",
    location: "London, UK",
    type: "Full-time",
    salary: "£60,000 - £85,000 a year",
    tags: ["React", "TypeScript", "Next.js"],
    postedDays: 2,
    featured: true,
    startDate: "March 2026",
  },
  {
    id: 2,
    title: "Product Designer",
    company: "Creative Studios",
    location: "Remote",
    type: "Full-time",
    salary: "£50,000 - £70,000 a year",
    tags: ["Figma", "UI/UX", "Design Systems"],
    postedDays: 1,
    featured: true,
    startDate: "Immediate",
  },
  {
    id: 3,
    title: "Backend Engineer",
    company: "CloudScale UK",
    location: "Manchester, UK",
    type: "Full-time",
    salary: "£65,000 - £90,000 a year",
    tags: ["Node.js", "AWS", "PostgreSQL"],
    postedDays: 3,
    featured: false,
    startDate: "April 2026",
  },
  {
    id: 4,
    title: "Marketing Manager",
    company: "Growth Partners",
    location: "Edinburgh, UK",
    type: "Full-time",
    salary: "£45,000 - £60,000 a year",
    tags: ["SEO", "Content", "Analytics"],
    postedDays: 5,
    featured: false,
    startDate: "February 2026",
  },
  {
    id: 5,
    title: "Data Scientist",
    company: "FinTech Innovations",
    location: "Cambridge, UK",
    type: "Full-time",
    salary: "£70,000 - £95,000 a year",
    tags: ["Python", "ML", "TensorFlow"],
    postedDays: 1,
    featured: true,
    startDate: "Flexible",
  },
  {
    id: 6,
    title: "UX Researcher",
    company: "User First Design",
    location: "Bristol, UK",
    type: "Contract",
    salary: "£400 - £500 a day",
    tags: ["Research", "Interviews", "Usability"],
    postedDays: 4,
    featured: false,
    startDate: "May 2026",
  },
]

const categories = [
  { name: "Engineering", count: 234, icon: Code },
  { name: "Design", count: 89, icon: Palette },
  { name: "Product", count: 156, icon: Briefcase },
  { name: "Marketing", count: 78, icon: BarChart },
]

const employerJobs = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    location: "London, UK",
    type: "Full-time",
    salary: "£60,000 - £85,000 a year",
    applicants: 24,
    status: "Active",
    postedDate: "2025-01-10",
  },
  {
    id: 2,
    title: "Product Designer",
    location: "Remote",
    type: "Full-time",
    salary: "£50,000 - £70,000 a year",
    applicants: 18,
    status: "Active",
    postedDate: "2025-01-12",
  },
  {
    id: 3,
    title: "Backend Engineer",
    location: "Manchester, UK",
    type: "Full-time",
    salary: "£65,000 - £90,000 a year",
    applicants: 31,
    status: "Active",
    postedDate: "2025-01-08",
  },
  {
    id: 4,
    title: "DevOps Engineer",
    location: "Edinburgh, UK",
    type: "Full-time",
    salary: "£55,000 - £75,000 a year",
    applicants: 12,
    status: "Closed",
    postedDate: "2024-12-20",
  },
]

const mockGraduates = [
  {
    id: 1,
    name: "Sarah Johnson",
    degree: "Computer Science, BSc (1st)",
    university: "University of Oxford",
    graduationYear: 2024,
    location: "London, UK",
    skills: ["React", "TypeScript", "Node.js", "Python"],
    experience: "2 years",
    availability: "Immediate",
    avatar: "SJ",
    interests: "AI, Machine Learning",
    portfolioUrl: "https://github.com/sarahjohnson",
    portfolioLabel: "View GitHub",
  },
  {
    id: 2,
    name: "Michael Chen",
    degree: "Software Engineering, MSc (1st)",
    university: "University of Cambridge",
    graduationYear: 2023,
    location: "Cambridge, UK",
    skills: ["Java", "Spring Boot", "AWS", "Docker"],
    experience: "3 years",
    availability: "2 weeks",
    avatar: "MC",
    interests: "Cloud Architecture, DevOps",
    portfolioUrl: "https://michaelchen-projects.dev",
    portfolioLabel: "View Projects",
    openToRelocation: true,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    degree: "Law (Jurisprudence), BA (1st)",
    university: "University of Oxford",
    graduationYear: 2024,
    location: "London, UK",
    skills: ["SQE1", "SQE2", "First Class"],
    experience: "1 year",
    availability: "Immediate",
    avatar: "ER",
    interests: "Commercial Law, M&A",
    portfolioUrl: "https://oxford.ac.uk/dissertation/emily-rodriguez",
    portfolioLabel: "Read dissertation",
  },
  {
    id: 4,
    name: "David Kim",
    degree: "Computer Engineering, BEng (1st)",
    university: "University of Cambridge",
    graduationYear: 2023,
    location: "Edinburgh, UK",
    skills: ["C++", "Rust", "Kubernetes", "Linux"],
    experience: "2 years",
    availability: "1 month",
    avatar: "DK",
    interests: "Systems Programming, Embedded",
    openToRelocation: true,
  },
  {
    id: 5,
    name: "Jessica Martinez",
    degree: "UX Design, MA (1st)",
    university: "University of Oxford",
    graduationYear: 2024,
    location: "Manchester, UK",
    skills: ["Figma", "UI/UX", "Design Systems", "Research"],
    experience: "2 years",
    availability: "Immediate",
    avatar: "JM",
    interests: "Product Design, Accessibility",
  },
  {
    id: 6,
    name: "Alex Thompson",
    degree: "Data Intensive Science, MPhil (1st)",
    university: "University of Cambridge",
    graduationYear: 2023,
    location: "Bristol, UK",
    skills: ["Python", "Machine Learning", "TensorFlow", "Data Analysis"],
    experience: "3 years",
    availability: "2 weeks",
    avatar: "AT",
    interests: "Data Science, AI Research",
  },
]

const mockCompanies = [
  {
    id: 1,
    name: "TechCorp Solutions Ltd",
    industry: "Software Development",
    location: "London, UK",
    size: "500-1000 employees",
    logo: "TC",
    description: "Leading provider of enterprise software solutions",
    openPositions: 12,
    benefits: ["Private Healthcare", "Pension Scheme", "Remote Work", "Share Options"],
  },
  {
    id: 2,
    name: "DataDrive Analytics",
    industry: "Data Science",
    location: "Manchester, UK",
    size: "100-500 employees",
    logo: "DD",
    description: "Transforming data into actionable insights",
    openPositions: 8,
    benefits: ["Private Healthcare", "Unlimited Holiday", "Learning Budget"],
  },
  {
    id: 3,
    name: "CloudScale UK Ltd",
    industry: "Cloud Computing",
    location: "Edinburgh, UK",
    size: "1000+ employees",
    logo: "CS",
    description: "Building the future of cloud infrastructure",
    openPositions: 24,
    benefits: ["Private Healthcare", "Pension Scheme", "Remote Work", "Gym Membership"],
  },
  {
    id: 4,
    name: "FinTech Innovations",
    industry: "Financial Technology",
    location: "Cambridge, UK",
    size: "100-500 employees",
    logo: "FI",
    description: "Revolutionising digital banking and payments",
    openPositions: 15,
    benefits: ["Private Healthcare", "Share Options", "Flexible Hours"],
  },
  {
    id: 5,
    name: "DesignHub Studio",
    industry: "Design & UX",
    location: "Bristol, UK",
    size: "50-100 employees",
    logo: "DH",
    description: "Creating beautiful digital experiences",
    openPositions: 6,
    benefits: ["Private Healthcare", "Remote Work", "Creative Freedom"],
  },
  {
    id: 6,
    name: "AI Ventures Lab",
    industry: "Artificial Intelligence",
    location: "London, UK",
    size: "500-1000 employees",
    logo: "AV",
    description: "Pioneering AI-powered solutions for enterprises",
    openPositions: 18,
    benefits: ["Private Healthcare", "Pension Scheme", "Share Options", "Research Time"],
  },
]

export default function DashboardPage() {
  const router = useRouter()
  const [userType, setUserType] = useState<"employer" | "graduate" | null>(null)
  const [locationOpen, setLocationOpen] = useState(false)
  const [universityOpen, setUniversityOpen] = useState(false)
  const [subjectOpen, setSubjectOpen] = useState(false)
  const [experienceOpen, setExperienceOpen] = useState(false)
  const [availabilityOpen, setAvailabilityOpen] = useState(false)
  const [selectedLocations, setSelectedLocations] = useState<string[]>([])
  const [selectedUniversities, setSelectedUniversities] = useState<string[]>([])
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([])
  const [selectedExperience, setSelectedExperience] = useState<string[]>([])
  const [selectedAvailability, setSelectedAvailability] = useState<string[]>([])
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [selectedSectors, setSelectedSectors] = useState<string[]>([])
  const [selectedDegreeClass, setSelectedDegreeClass] = useState<string[]>([])
  const [selectedDiversity, setSelectedDiversity] = useState<string[]>([])
  const [inCurrentEmployment, setInCurrentEmployment] = useState(false)

  const [jobStartDateOpen, setJobStartDateOpen] = useState(false)
  const [jobSectorOpen, setJobSectorOpen] = useState(false)
  const [jobBusinessSizeOpen, setJobBusinessSizeOpen] = useState(false)
  const [selectedJobStartDates, setSelectedJobStartDates] = useState<string[]>([])
  const [selectedJobSectors, setSelectedJobSectors] = useState<string[]>([])
  const [selectedJobBusinessSizes, setSelectedJobBusinessSizes] = useState<string[]>([])

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Check sessionStorage first (current session), then localStorage (persisted)
      const sessionType = sessionStorage.getItem("userType") as "employer" | "graduate" | null
      const localType = localStorage.getItem("userType") as "employer" | "graduate" | null
      const type = sessionType || localType
      
      if (!type) {
        router.push("/")
      } else {
        setUserType(type)
        // Sync both storage mechanisms
        sessionStorage.setItem("userType", type)
        localStorage.setItem("userType", type)
      }
    }
  }, [router])

  const locationRef = useRef<HTMLDivElement>(null)
  const universityRef = useRef<HTMLDivElement>(null)
  const subjectRef = useRef<HTMLDivElement>(null)
  const experienceRef = useRef<HTMLDivElement>(null)
  const availabilityRef = useRef<HTMLDivElement>(null)
  const sectorRef = useRef<HTMLDivElement>(null)
  const degreeClassRef = useRef<HTMLDivElement>(null)

  const jobStartDateRef = useRef<HTMLDivElement>(null)
  const jobSectorRef = useRef<HTMLDivElement>(null)
  const jobBusinessSizeRef = useRef<HTMLDivElement>(null)
  const diversityRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node

      const refs = {
  location: locationRef,
  university: universityRef,
  subject: subjectRef,
  experience: experienceRef,
  availability: availabilityRef,
  sector: sectorRef,
  degreeClass: degreeClassRef,
  diversity: diversityRef,  // Add this line
}

      if (openDropdown && refs[openDropdown as keyof typeof refs]) {
        const ref = refs[openDropdown as keyof typeof refs]
        if (ref.current && !ref.current.contains(target)) {
          setOpenDropdown(null)
        }
      }

      if (jobStartDateRef.current && !jobStartDateRef.current.contains(event.target as Node)) {
        setJobStartDateOpen(false)
      }
      if (jobSectorRef.current && !jobSectorRef.current.contains(event.target as Node)) {
        setJobSectorOpen(false)
      }
      if (jobBusinessSizeRef.current && !jobBusinessSizeRef.current.contains(event.target as Node)) {
        setJobBusinessSizeOpen(false)
      }
    }

    // Only add event listener if there's an open dropdown, to prevent unnecessary calls
    if (openDropdown || jobStartDateOpen || jobSectorOpen || jobBusinessSizeOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    } else {
      document.removeEventListener("mousedown", handleClickOutside)
    }
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [openDropdown, jobStartDateOpen, jobSectorOpen, jobBusinessSizeOpen])

  const handleLogout = () => {
    if (typeof window !== "undefined") {
      sessionStorage.removeItem("userType")
    }
    router.push("/")
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const toggleSelection = (value: string, currentSelections: string[], setSelections: (v: string[]) => void) => {
    if (currentSelections.includes(value)) {
      setSelections(currentSelections.filter((item) => item !== value))
    } else {
      setSelections([...currentSelections, value])
    }
  }

  const getDisplayText = (selections: string[], placeholder: string) => {
    if (selections.length === 0) return placeholder
    if (selections.length === 1) return selections[0]
    return `${selections.length} selected`
  }

  const jobStartDateOptions = ["Immediate", "Within 1 month", "Within 3 months", "Within 6 months", "Flexible"]
  const jobSectorOptions = [
    "Finance & Banking",
    "Technology",
    "Consulting",
    "Legal",
    "Healthcare",
    "Marketing",
    "Engineering",
    "Retail",
  ]
  const jobBusinessSizeOptions = [
    "Startup (1-50)",
    "SME (51-250)",
    "Mid-size (251-1000)",
    "Large (1000+)",
    "Enterprise (10,000+)",
  ]

  const toggleJobStartDate = (option: string) => {
    setSelectedJobStartDates((prev) =>
      prev.includes(option) ? prev.filter((item) => item !== option) : [...prev, option],
    )
  }

  const toggleJobSector = (option: string) => {
    setSelectedJobSectors((prev) =>
      prev.includes(option) ? prev.filter((item) => item !== option) : [...prev, option],
    )
  }

  const toggleJobBusinessSize = (option: string) => {
    setSelectedJobBusinessSizes((prev) =>
      prev.includes(option) ? prev.filter((item) => item !== option) : [...prev, option],
    )
  }

  if (!userType) {
    return null
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      {userType === "graduate" && (
        <header className="border-b border-border bg-card sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/dashboard" className="flex items-center gap-2" onClick={scrollToTop}>
              <div className="size-8 rounded-lg bg-primary flex items-center justify-center">
                <Briefcase className="size-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-belleza text-foreground">The Graduate Directory</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link
                href="/dashboard"
                className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
                onClick={scrollToTop}
              >
                Find Jobs
              </Link>
              <Link
                href="/applications"
                className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
                onClick={scrollToTop}
              >
                My Applications
              </Link>
              <Link
                href="/messages"
                className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
                onClick={scrollToTop}
              >
                Messages
              </Link>
              
            </nav>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm" asChild>
                <Link href="/profile/edit" onClick={scrollToTop}>
                  <User className="size-4 mr-2" />
                  Edit Profile
                </Link>
              </Button>
              <Badge variant="secondary" className="hidden sm:inline-flex">
                Graduate
              </Badge>
              <Button variant="ghost" size="sm" onClick={handleLogout}>
                <LogOut className="size-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </header>
      )}

      {userType === "employer" && (
        <header className="border-b border-border bg-card sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/dashboard" className="flex items-center gap-2" onClick={scrollToTop}>
              <div className="size-8 rounded-lg bg-primary flex items-center justify-center">
                <Briefcase className="size-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-belleza text-foreground">The Graduate Directory</span>
            </Link>
            <div className="flex items-center gap-3">
              <Badge variant="secondary" className="hidden sm:inline-flex">
                Employer
              </Badge>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/messages" onClick={scrollToTop}>
                  Messages
                </Link>
              </Button>
              <Button size="sm" asChild>
                <Link href="/post-job" onClick={scrollToTop}>
                  Post a Job
                </Link>
              </Button>
              <Button variant="ghost" size="sm" onClick={handleLogout}>
                <LogOut className="size-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </header>
      )}

      {/* Main Content */}
      <main className="min-h-screen bg-background">
        {/* Profile Completion Banner for Graduates */}
        {userType === "graduate" && (
          <div className="bg-primary/10 border-b border-primary/20">
            <div className="container mx-auto px-4 py-4">
              <div className="flex items-start gap-4">
                <div className="size-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg flex-shrink-0">
                  ST
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-1">Sam Taylor Jr.</h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-2">
                    <div className="flex items-center gap-1.5">
                      <GraduationCap className="size-4" />
                      <span>History, BA - University of Oxford</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar className="size-4" />
                      <span>Graduated 2024</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-muted-foreground">Complete your profile to stand out to employers.</p>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          window.scrollTo({ top: 0, behavior: "smooth" })
                          window.location.href = "/profile/edit"
                        }}
                      >
                        Complete Profile
                      </Button>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 max-w-md h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-primary w-[85%] rounded-full" />
                      </div>
                      <span className="text-sm font-medium text-foreground">85%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Search Active Graduates section above Your Job Postings */}
        {userType === "employer" && (
          <section className="py-16 bg-muted/20 border-b border-border">
            <div className="container mx-auto px-4">
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-1">Search Talent</h2>
                <p className="text-sm text-muted-foreground">Find and connect with talented students and graduates</p>
              </div>

              <div className="space-y-6">
                <Card className="p-6">
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Location</label>
                      <div className="relative" ref={locationRef}>
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            setOpenDropdown(openDropdown === "location" ? null : "location")
                          }}
                          className="w-full h-10 px-4 rounded-md border border-input bg-background text-sm flex items-center justify-between hover:bg-muted/50 transition-colors"
                        >
                          <div className="flex items-center gap-2">
                            <MapPin className="size-5 text-muted-foreground" />
                            <span
                              className={selectedLocations.length === 0 ? "text-muted-foreground" : "text-foreground"}
                            >
                              {getDisplayText(selectedLocations, "Select locations")}
                            </span>
                          </div>
                          <ChevronDown className="size-4 text-muted-foreground" />
                        </button>
                        {openDropdown === "location" && (
                          <div
                            onClick={(e) => e.stopPropagation()}
                            className="absolute top-full left-0 right-0 mt-1 bg-card border border-border rounded-md shadow-lg z-20 max-h-60 overflow-y-auto"
                          >
                            {["Remote", "London", "Manchester", "Birmingham", "Edinburgh", "Bristol"].map((loc) => (
                              <label
                                key={loc}
                                className="flex items-center gap-2 px-4 py-2 hover:bg-muted/50 cursor-pointer"
                              >
                                <input
                                  type="checkbox"
                                  className="size-4"
                                  checked={selectedLocations.includes(loc)}
                                  onChange={() => toggleSelection(loc, selectedLocations, setSelectedLocations)}
                                />
                                <span className="text-sm">{loc}</span>
                              </label>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">University</label>
                      <div className="relative" ref={universityRef}>
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            setOpenDropdown(openDropdown === "university" ? null : "university")
                          }}
                          className="w-full h-10 px-4 rounded-md border border-input bg-background text-sm flex items-center justify-between hover:bg-muted/50 transition-colors"
                        >
                          <span
                            className={selectedUniversities.length === 0 ? "text-muted-foreground" : "text-foreground"}
                          >
                            {getDisplayText(selectedUniversities, "Select universities")}
                          </span>
                          <ChevronDown className="size-4 text-muted-foreground" />
                        </button>
                        {openDropdown === "university" && (
                          <div
                            onClick={(e) => e.stopPropagation()}
                            className="absolute top-full left-0 right-0 mt-1 bg-card border border-border rounded-md shadow-lg z-20 max-h-60 overflow-y-auto"
                          >
                            {[
                              "University of Oxford",
                              "University of Cambridge",
                              "Imperial College London",
                              "University College London",
                              "London School of Economics",
                              "University of Edinburgh",
                              "King's College London",
                              "University of Manchester",
                              "University of Bristol",
                              "University of Warwick",
                            ].map((uni) => (
                              <label
                                key={uni}
                                className="flex items-center gap-2 px-4 py-2 hover:bg-muted/50 cursor-pointer"
                              >
                                <input
                                  type="checkbox"
                                  className="size-4"
                                  checked={selectedUniversities.includes(uni)}
                                  onChange={() => toggleSelection(uni, selectedUniversities, setSelectedUniversities)}
                                />
                                <span className="text-sm">{uni}</span>
                              </label>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Subject</label>
                      <div className="relative" ref={subjectRef}>
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            setOpenDropdown(openDropdown === "subject" ? null : "subject")
                          }}
                          className="w-full h-10 px-4 rounded-md border border-input bg-background text-sm flex items-center justify-between hover:bg-muted/50 transition-colors"
                        >
                          <span className={selectedSubjects.length === 0 ? "text-muted-foreground" : "text-foreground"}>
                            {getDisplayText(selectedSubjects, "Select subjects")}
                          </span>
                          <ChevronDown className="size-4 text-muted-foreground" />
                        </button>
                        {openDropdown === "subject" && (
                          <div
                            onClick={(e) => e.stopPropagation()}
                            className="absolute top-full left-0 right-0 mt-1 bg-card border border-border rounded-md shadow-lg z-20 max-h-60 overflow-y-auto"
                          >
                            {[
                              "Computer Science",
                              "Engineering",
                              "Business & Management",
                              "Economics",
                              "Mathematics",
                              "Law",
                              "Medicine",
                              "Natural Sciences",
                              "History",
                              "English Literature",
                              "Politics & International Relations",
                              "Psychology",
                            ].map((subject) => (
                              <label
                                key={subject}
                                className="flex items-center gap-2 px-4 py-2 hover:bg-muted/50 cursor-pointer"
                              >
                                <input
                                  type="checkbox"
                                  className="size-4"
                                  checked={selectedSubjects.includes(subject)}
                                  onChange={() => toggleSelection(subject, selectedSubjects, setSelectedSubjects)}
                                />
                                <span className="text-sm">{subject}</span>
                              </label>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
  <label className="text-sm font-medium text-foreground">Years of experience</label>
  <div className="relative" ref={experienceRef}>
    <button
      onClick={(e) => {
        e.stopPropagation()
        setOpenDropdown(openDropdown === "experience" ? null : "experience")
      }}
      className="w-full h-10 px-4 rounded-md border border-input bg-background text-sm flex items-center justify-between hover:bg-muted/50 transition-colors"
    >
      <span
        className={selectedExperience.length === 0 ? "text-muted-foreground" : "text-foreground"}
      >
        {getDisplayText(selectedExperience, "Select experience")}
      </span>
      <ChevronDown className="size-4 text-muted-foreground" />
    </button>
    {openDropdown === "experience" && (
      <div
        onClick={(e) => e.stopPropagation()}
        className="absolute top-full left-0 right-0 mt-1 bg-card border border-border rounded-md shadow-lg z-20 max-h-60 overflow-y-auto"
      >
        {["Select all", "0-1", "1-2", "2-3", "3-4", "4-5", "5-6", "6-7", "7-8", "8-9", "9-10"].map((exp) => (
          <label
            key={exp}
            className="flex items-center gap-2 px-4 py-2 hover:bg-muted/50 cursor-pointer"
          >
            <input
              type="checkbox"
              className="size-4"
              checked={exp === "All" ? selectedExperience.includes("All") : selectedExperience.includes(exp)}
              onChange={() => {
                if (exp === "All") {
                  toggleSelection("All", selectedExperience, setSelectedExperience)
                } else {
                  // Remove "All" if selecting specific options
                  const newSelection = selectedExperience.filter(item => item !== "All")
                  toggleSelection(exp, newSelection, setSelectedExperience)
                }
              }}
            />
            <span className="text-sm">{exp}</span>
          </label>
        ))}
      </div>
    )}
  </div>
</div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Availability</label>
                      <div className="relative" ref={availabilityRef}>
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            setOpenDropdown(openDropdown === "availability" ? null : "availability")
                          }}
                          className="w-full h-10 px-4 rounded-md border border-input bg-background text-sm flex items-center justify-between hover:bg-muted/50 transition-colors"
                        >
                          <span
                            className={selectedAvailability.length === 0 ? "text-muted-foreground" : "text-foreground"}
                          >
                            {getDisplayText(selectedAvailability, "Select availability")}
                          </span>
                          <ChevronDown className="size-4 text-muted-foreground" />
                        </button>
                        {openDropdown === "availability" && (
                          <div
                            onClick={(e) => e.stopPropagation()}
                            className="absolute top-full left-0 right-0 mt-1 bg-card border border-border rounded-md shadow-lg z-20 max-h-60 overflow-y-auto"
                          >
                            {["Immediate", "2 weeks", "1 month", "3 months"].map((avail) => (
                              <label
                                key={avail}
                                className="flex items-center gap-2 px-4 py-2 hover:bg-muted/50 cursor-pointer"
                              >
                                <input
                                  type="checkbox"
                                  className="size-4"
                                  checked={selectedAvailability.includes(avail)}
                                  onChange={() => toggleSelection(avail, selectedAvailability, setSelectedAvailability)}
                                />
                                <span className="text-sm">{avail}</span>
                              </label>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Sector</label>
                      <div className="relative" ref={sectorRef}>
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            setOpenDropdown(openDropdown === "sector" ? null : "sector")
                          }}
                          className="w-full h-10 px-4 rounded-md border border-input bg-background text-sm flex items-center justify-between hover:bg-muted/50 transition-colors"
                        >
                          <span className={selectedSectors.length === 0 ? "text-muted-foreground" : "text-foreground"}>
                            {getDisplayText(selectedSectors, "Select sectors")}
                          </span>
                          <ChevronDown className="size-4 text-muted-foreground" />
                        </button>
                        {openDropdown === "sector" && (
                          <div
                            onClick={(e) => e.stopPropagation()}
                            className="absolute top-full left-0 right-0 mt-1 bg-card border border-border rounded-md shadow-lg z-20 max-h-60 overflow-y-auto"
                          >
                            {[
                              "Finance & Banking",
                              "Consulting",
                              "Technology",
                              "Legal",
                              "Healthcare",
                              "Energy & Utilities",
                              "Retail & Consumer",
                              "Media & Entertainment",
                              "Manufacturing",
                              "Public Sector",
                            ].map((sector) => (
                              <label
                                key={sector}
                                className="flex items-center gap-2 px-4 py-2 hover:bg-muted/50 cursor-pointer"
                              >
                                <input
                                  type="checkbox"
                                  className="size-4"
                                  checked={selectedSectors.includes(sector)}
                                  onChange={() => toggleSelection(sector, selectedSectors, setSelectedSectors)}
                                />
                                <span className="text-sm">{sector}</span>
                              </label>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Degree Class</label>
                      <div className="relative" ref={degreeClassRef}>
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            setOpenDropdown(openDropdown === "degreeClass" ? null : "degreeClass")
                          }}
                          className="w-full h-10 px-4 rounded-md border border-input bg-background text-sm flex items-center justify-between hover:bg-muted/50 transition-colors"
                        >
                          <span
                            className={selectedDegreeClass.length === 0 ? "text-muted-foreground" : "text-foreground"}
                          >
                            {getDisplayText(selectedDegreeClass, "Select degree class")}
                          </span>
                          <ChevronDown className="size-4 text-muted-foreground" />
                        </button>
                        {openDropdown === "degreeClass" && (
                          <div
                            onClick={(e) => e.stopPropagation()}
                            className="absolute top-full left-0 right-0 mt-1 bg-card border border-border rounded-md shadow-lg z-20 max-h-60 overflow-y-auto"
                          >
                            {["1st", "2.1", "Any"].map((degClass) => (
                              <label
                                key={degClass}
                                className="flex items-center gap-2 px-4 py-2 hover:bg-muted/50 cursor-pointer"
                              >
                                <input
                                  type="checkbox"
                                  className="size-4"
                                  checked={selectedDegreeClass.includes(degClass)}
                                  onChange={() =>
                                    toggleSelection(degClass, selectedDegreeClass, setSelectedDegreeClass)
                                  }
                                />
                                <span className="text-sm">{degClass}</span>
                              </label>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
  <label className="text-sm font-medium text-foreground">Diversity</label>
  <div className="relative" ref={diversityRef}>  {/* Changed from sectorRef */}
    <button
      onClick={(e) => {
        e.stopPropagation()
        setOpenDropdown(openDropdown === "diversity" ? null : "diversity")
      }}
      className="w-full h-10 px-4 rounded-md border border-input bg-background text-sm flex items-center justify-between hover:bg-muted/50 transition-colors"
    >
      <span
        className={selectedDiversity.length === 0 ? "text-muted-foreground" : "text-foreground"}
      >
        {getDisplayText(selectedDiversity, "Select diversity")}
      </span>
      <ChevronDown className="size-4 text-muted-foreground" />
    </button>
    {openDropdown === "diversity" && (
      <div
        onClick={(e) => e.stopPropagation()}
        className="absolute top-full left-0 right-0 mt-1 bg-card border border-border rounded-md shadow-lg z-20 max-h-60 overflow-y-auto"
      >
        {["Ethnically diverse", "Neurodiverse"].map((diversity) => (
          <label
            key={diversity}
            className="flex items-center gap-2 px-4 py-2 hover:bg-muted/50 cursor-pointer"
          >
            <input
              type="checkbox"
              className="size-4"
              checked={selectedDiversity.includes(diversity)}
              onChange={() =>
                toggleSelection(diversity, selectedDiversity, setSelectedDiversity)
              }
            />
            <span className="text-sm">{diversity}</span>
          </label>
        ))}
      </div>
    )}
  </div>
</div>

                  <div className="flex flex-wrap gap-2 mt-6">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <span>Popular skills:</span>
                    </div>
                    {["React", "Python", "TypeScript", "AWS", "Figma"].map((skill) => (
                      <Badge key={skill} variant="secondary" className="cursor-pointer hover:bg-secondary/80">
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 mt-6 pt-6 border-t">
                    <input
                      type="checkbox"
                      id="employment"
                      className="size-4"
                      checked={inCurrentEmployment}
                      onChange={(e) => setInCurrentEmployment(e.target.checked)}
                    />
                    <label htmlFor="employment" className="text-sm font-medium text-foreground cursor-pointer">
                      Currently in employment
                    </label>
                  </div>
                </Card>

                {/* Results */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-muted-foreground">42 active graduates found</p>
                    <select className="h-9 px-3 rounded-md border border-input bg-background text-sm">
                      <option>Most Recent</option>
                      <option>Best Match</option>
                      <option>Graduation Year</option>
                    </select>
                  </div>

                  <div className="grid gap-4">
                    {mockGraduates.map((graduate) => (
                      <Card key={graduate.id} className="p-6 hover:shadow-lg transition-shadow">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="flex items-start gap-4 flex-1">
                            <div className="size-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-lg shrink-0">
                              {graduate.avatar}
                            </div>
                            <div className="flex-1 min-w-0">
                              <Link href={`/dashboard/graduates/${graduate.id}`} onClick={scrollToTop} className="hover:underline">
                                <h3 className="font-semibold text-lg text-foreground mb-1">{graduate.name}</h3>
                              </Link>
                              <p className="text-sm text-muted-foreground mb-2">
                                {graduate.degree} • {graduate.university}
                              </p>
                              <div className="flex flex-wrap gap-2 mb-3">
                                {graduate.skills.map((skill) => (
                                  <Badge key={skill} variant="secondary">
                                    {skill}
                                  </Badge>
                                ))}
                              </div>
                              <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                                <div className="flex items-center gap-2 text-muted-foreground">
                                  <MapPin className="size-4" />
                                  <span>{graduate.location}</span>
                                </div>
                                <div className="flex items-center gap-2 text-muted-foreground">
                                  <Briefcase className="size-4" />
                                  <span>{graduate.experience} experience</span>
                                </div>
                                <div className="flex items-center gap-2 text-muted-foreground">
                                  <Clock className="size-4" />
                                  <span>{graduate.availability} availability</span>
                                </div>
                                <div className="flex items-center gap-2 text-muted-foreground">
                                  <TrendingUp className="size-4" />
                                  <span>Graduated {graduate.graduationYear}</span>
                                </div>
                                {graduate.openToRelocation && (
                                  <div className="flex items-center gap-2 text-muted-foreground">
                                    <MapPin className="size-4" />
                                    <span>Open to relocation</span>
                                  </div>
                                )}
                                <div className="flex items-center gap-2 text-muted-foreground">
                                  <Lightbulb className="size-4" />
                                  <span>Interested in: {graduate.interests}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex md:flex-col gap-2 shrink-0">
                            {graduate.portfolioUrl && (
                              <Button variant="outline" size="sm" className="w-full bg-transparent" asChild>
                                <a href={graduate.portfolioUrl} target="_blank" rel="noopener noreferrer">
                                  {graduate.portfolioLabel}
                                  <ExternalLink className="size-4 ml-1" />
                                </a>
                              </Button>
                            )}
                            <Button variant="outline" size="sm" className="w-full bg-transparent" asChild>
                              <Link href={`/dashboard/graduates/${graduate.id}`} onClick={scrollToTop}>
                                View Profile
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Prize Winners section between Search Active Graduates and Your Job Postings */}
        {userType === "employer" && (
          <section className="py-16 bg-gradient-to-b from-muted/30 to-background border-b border-border">
            <div className="container mx-auto px-4">
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-2">Prize Winners</h2>
                <p className="text-sm text-muted-foreground">
                  Exceptional graduates recognised for outstanding achievements
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {/* Prize Winner 1 */}
                <Card className="p-6 hover:shadow-lg transition-shadow border-primary/20">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="size-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-lg shrink-0">
                      EW
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-lg text-foreground">Eleanor Watson</h3>
                      <p className="text-sm text-muted-foreground">Economics, BA (1st)</p>
                      <p className="text-sm text-muted-foreground">University of Cambridge</p>
                    </div>
                  </div>

                  <div className="mb-4 p-3 bg-primary/10 rounded-md border border-primary/20">
                    <div className="flex items-start gap-2">
                      <Award className="size-4 text-primary mt-0.5 shrink-0" />
                      <div>
                        <p className="text-sm font-semibold text-foreground">Stevenson Prize for Economics</p>
                        <p className="text-xs text-muted-foreground">Best undergraduate dissertation 2024</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary">Data Analysis</Badge>
                    <Badge variant="secondary">Research</Badge>
                    <Badge variant="secondary">Python</Badge>
                  </div>

                  <div className="space-y-2 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <MapPin className="size-4" />
                      <span>London, UK</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="size-4" />
                      <span>Immediate availability</span>
                    </div>
                  </div>

                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    <Link href={`/dashboard/graduates/1`} onClick={scrollToTop}>
                      View Profile
                    </Link>
                  </Button>
                </Card>

                {/* Prize Winner 2 */}
                <Card className="p-6 hover:shadow-lg transition-shadow border-primary/20">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="size-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-lg shrink-0">
                      JH
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-lg text-foreground">James Harrison</h3>
                      <p className="text-sm text-muted-foreground">Computer Science, MEng (1st)</p>
                      <p className="text-sm text-muted-foreground">University of Oxford</p>
                    </div>
                  </div>

                  <div className="mb-4 p-3 bg-primary/10 rounded-md border border-primary/20">
                    <div className="flex items-start gap-2">
                      <Award className="size-4 text-primary mt-0.5 shrink-0" />
                      <div>
                        <p className="text-sm font-semibold text-foreground">ACM Student Research Award</p>
                        <p className="text-xs text-muted-foreground">Outstanding final year project in AI/ML</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary">Machine Learning</Badge>
                    <Badge variant="secondary">TensorFlow</Badge>
                    <Badge variant="secondary">Python</Badge>
                  </div>

                  <div className="space-y-2 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <MapPin className="size-4" />
                      <span>Cambridge, UK</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="size-4" />
                      <span>Available in 2 weeks</span>
                    </div>
                  </div>

                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    <Link href={`/dashboard/graduates/1`} onClick={scrollToTop}>
                      View Profile
                    </Link>
                  </Button>
                </Card>

                {/* Prize Winner 3 */}
                <Card className="p-6 hover:shadow-lg transition-shadow border-primary/20">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="size-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-lg shrink-0">
                      SP
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-lg text-foreground">Sophie Patel</h3>
                      <p className="text-sm text-muted-foreground">Engineering, BEng (1st)</p>
                      <p className="text-sm text-muted-foreground">University of Cambridge</p>
                    </div>
                  </div>

                  <div className="mb-4 p-3 bg-primary/10 rounded-md border border-primary/20">
                    <div className="flex items-start gap-2">
                      <Award className="size-4 text-primary mt-0.5 shrink-0" />
                      <div>
                        <p className="text-sm font-semibold text-foreground">IET Innovation Award</p>
                        <p className="text-xs text-muted-foreground">Best sustainable engineering project</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary">Sustainable Tech</Badge>
                    <Badge variant="secondary">IoT</Badge>
                    <Badge variant="secondary">C++</Badge>
                  </div>

                  <div className="space-y-2 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <MapPin className="size-4" />
                      <span>Manchester, UK</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="size-4" />
                      <span>Immediate availability</span>
                    </div>
                  </div>

                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    <Link href={`/dashboard/graduates/1`} onClick={scrollToTop}>
                      View Profile
                    </Link>
                  </Button>
                </Card>

                {/* Prize Winner 4 */}
                <Card className="p-6 hover:shadow-lg transition-shadow border-primary/20">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="size-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-lg shrink-0">
                      OA
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-lg text-foreground">Oliver Anderson</h3>
                      <p className="text-sm text-muted-foreground">Mathematics, MMath (1st)</p>
                      <p className="text-sm text-muted-foreground">University of Oxford</p>
                    </div>
                  </div>

                  <div className="mb-4 p-3 bg-primary/10 rounded-md border border-primary/20">
                    <div className="flex items-start gap-2">
                      <Award className="size-4 text-primary mt-0.5 shrink-0" />
                      <div>
                        <p className="text-sm font-semibold text-foreground">Smith Mathematics Prize</p>
                        <p className="text-xs text-muted-foreground">Outstanding achievement in pure mathematics</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary">Quantitative Analysis</Badge>
                    <Badge variant="secondary">R</Badge>
                    <Badge variant="secondary">Statistics</Badge>
                  </div>

                  <div className="space-y-2 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <MapPin className="size-4" />
                      <span>London, UK</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="size-4" />
                      <span>Available in 1 month</span>
                    </div>
                  </div>

                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    <Link href={`/dashboard/graduates/1`} onClick={scrollToTop}>
                      View Profile
                    </Link>
                  </Button>
                </Card>

                {/* Prize Winner 5 */}
                <Card className="p-6 hover:shadow-lg transition-shadow border-primary/20">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="size-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-lg shrink-0">
                      LP
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-lg text-foreground">Lily Park</h3>
                      <p className="text-sm text-muted-foreground">Physics, MASt (1st)</p>
                      <p className="text-sm text-muted-foreground">University of Cambridge</p>
                    </div>
                  </div>

                  <div className="mb-4 p-3 bg-primary/10 rounded-md border border-primary/20">
                    <div className="flex items-start gap-2">
                      <Award className="size-4 text-primary mt-0.5 shrink-0" />
                      <div>
                        <p className="text-sm font-semibold text-foreground">Ogden Trust Science Prize</p>
                        <p className="text-xs text-muted-foreground">Excellence in experimental physics research</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary">Data Science</Badge>
                    <Badge variant="secondary">MATLAB</Badge>
                    <Badge variant="secondary">Python</Badge>
                  </div>

                  <div className="space-y-2 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <MapPin className="size-4" />
                      <span>Edinburgh, UK</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="size-4" />
                      <span>Immediate availability</span>
                    </div>
                  </div>

                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    <Link href={`/dashboard/graduates/1`} onClick={scrollToTop}>
                      View Profile
                    </Link>
                  </Button>
                </Card>

                {/* Prize Winner 6 */}
                <Card className="p-6 hover:shadow-lg transition-shadow border-primary/20">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="size-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-lg shrink-0">
                      TM
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-lg text-foreground">Thomas Mitchell</h3>
                      <p className="text-sm text-muted-foreground">Law, BA (1st)</p>
                      <p className="text-sm text-muted-foreground">University of Oxford</p>
                    </div>
                  </div>

                  <div className="mb-4 p-3 bg-primary/10 rounded-md border border-primary/20">
                    <div className="flex items-start gap-2">
                      <Award className="size-4 text-primary mt-0.5 shrink-0" />
                      <div>
                        <p className="text-sm font-semibold text-foreground">Lincoln's Inn Prize</p>
                        <p className="text-xs text-muted-foreground">Top performance in contract law</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary">Legal Research</Badge>
                    <Badge variant="secondary">Contract Law</Badge>
                    <Badge variant="secondary">Analysis</Badge>
                  </div>

                  <div className="space-y-2 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <MapPin className="size-4" />
                      <span>Bristol, UK</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="size-4" />
                      <span>Available in 2 weeks</span>
                    </div>
                  </div>

                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    <Link href={`/dashboard/graduates/1`} onClick={scrollToTop}>
                      View Profile
                    </Link>
                  </Button>
                </Card>
              </div>
            </div>
          </section>
        )}

        {/* Your Job Postings section below Prize Winners */}
        {userType === "employer" && (
          <section className="py-16 border-b border-border">
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-semibold text-foreground mb-1">Your Job Postings</h2>
                  <p className="text-sm text-muted-foreground">Manage and track your active job listings</p>
                </div>
                <Button asChild>
                  <Link href="/post-job" onClick={scrollToTop}>
                    Post New Job
                  </Link>
                </Button>
              </div>

              <Card className="overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-muted/50">
                      <tr>
                        <th className="text-left py-4 px-6 text-sm font-semibold text-foreground">Job Title</th>
                        <th className="text-left py-4 px-6 text-sm font-semibold text-foreground">Location</th>
                        <th className="text-left py-4 px-6 text-sm font-semibold text-foreground">Type</th>
                        <th className="text-left py-4 px-6 text-sm font-semibold text-foreground">Salary</th>
                        <th className="text-left py-4 px-6 text-sm font-semibold text-foreground">Applicants</th>
                        <th className="text-left py-4 px-6 text-sm font-semibold text-foreground">Status</th>
                        <th className="text-left py-4 px-6 text-sm font-semibold text-foreground">Posted</th>
                        <th className="text-left py-4 px-6 text-sm font-semibold text-foreground">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {employerJobs.map((job) => (
                        <tr key={job.id} className="hover:bg-muted/30 transition-colors">
                          <td className="py-4 px-6">
                            <div className="font-medium text-foreground">{job.title}</div>
                          </td>
                          <td className="py-4 px-6">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <MapPin className="size-4" />
                              {job.location}
                            </div>
                          </td>
                          <td className="py-4 px-6">
                            <Badge variant="secondary">{job.type}</Badge>
                          </td>
                          <td className="py-4 px-6">
                            <span className="text-sm text-foreground">{job.salary}</span>
                          </td>
                          <td className="py-4 px-6">
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-medium text-foreground">{job.applicants}</span>
                              <span className="text-xs text-muted-foreground">candidates</span>
                            </div>
                          </td>
                          <td className="py-4 px-6">
                            <Badge variant={job.status === "Active" ? "default" : "secondary"}>{job.status}</Badge>
                          </td>
                          <td className="py-4 px-6">
                            <span className="text-sm text-muted-foreground">
                              {new Date(job.postedDate).toLocaleDateString("en-US", {
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                              })}
                            </span>
                          </td>
                          <td className="py-4 px-6">
                            <div className="flex items-center gap-2">
                              <Button variant="ghost" size="sm" asChild>
                                <Link href={`/jobs/${job.id}`} onClick={scrollToTop}>
                                  <Eye className="size-4" />
                                </Link>
                              </Button>
                              <Button variant="ghost" size="sm" disabled>
                                <Edit className="size-4" />
                              </Button>
                              <Button variant="ghost" size="sm" disabled>
                                <Trash2 className="size-4" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            </div>
          </section>
        )}

        {userType === "graduate" && (
          <section className="py-12 border-b border-border">
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold text-foreground">Featured Jobs</h2>
                <Button variant="outline" size="sm">
                  View All
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {/* Start Date Filter */}
                <div className="relative" ref={jobStartDateRef}>
                  <button
                    type="button"
                    onClick={() => setJobStartDateOpen(!jobStartDateOpen)}
                    className="w-full flex items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <span className="truncate">
                      {selectedJobStartDates.length === 0
                        ? "Start Date"
                        : selectedJobStartDates.length === 1
                          ? selectedJobStartDates[0]
                          : `${selectedJobStartDates.length} selected`}
                    </span>
                    <ChevronDown className="size-4 opacity-50" />
                  </button>
                  {jobStartDateOpen && (
                    <div className="absolute z-50 mt-1 w-full rounded-md border border-input bg-background shadow-lg">
                      <div className="p-2 space-y-1">
                        {jobStartDateOptions.map((option) => (
                          <label
                            key={option}
                            className="flex items-center gap-2 px-2 py-1.5 rounded hover:bg-muted cursor-pointer"
                          >
                            <input
                              type="checkbox"
                              checked={selectedJobStartDates.includes(option)}
                              onChange={() => toggleJobStartDate(option)}
                              className="rounded border-input"
                            />
                            <span className="text-sm">{option}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Sector Filter */}
                <div className="relative" ref={jobSectorRef}>
                  <button
                    type="button"
                    onClick={() => setJobSectorOpen(!jobSectorOpen)}
                    className="w-full flex items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <span className="truncate">
                      {selectedJobSectors.length === 0
                        ? "Sector"
                        : selectedJobSectors.length === 1
                          ? selectedJobSectors[0]
                          : `${selectedJobSectors.length} selected`}
                    </span>
                    <ChevronDown className="size-4 opacity-50" />
                  </button>
                  {jobSectorOpen && (
                    <div className="absolute z-50 mt-1 w-full rounded-md border border-input bg-background shadow-lg">
                      <div className="p-2 space-y-1">
                        {jobSectorOptions.map((option) => (
                          <label
                            key={option}
                            className="flex items-center gap-2 px-2 py-1.5 rounded hover:bg-muted cursor-pointer"
                          >
                            <input
                              type="checkbox"
                              checked={selectedJobSectors.includes(option)}
                              onChange={() => toggleJobSector(option)}
                              className="rounded border-input"
                            />
                            <span className="text-sm">{option}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Business Size Filter */}
                <div className="relative" ref={jobBusinessSizeRef}>
                  <button
                    type="button"
                    onClick={() => setJobBusinessSizeOpen(!jobBusinessSizeOpen)}
                    className="w-full flex items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <span className="truncate">
                      {selectedJobBusinessSizes.length === 0
                        ? "Business Size"
                        : selectedJobBusinessSizes.length === 1
                          ? selectedJobBusinessSizes[0]
                          : `${selectedJobBusinessSizes.length} selected`}
                    </span>
                    <ChevronDown className="size-4 opacity-50" />
                  </button>
                  {jobBusinessSizeOpen && (
                    <div className="absolute z-50 mt-1 w-full rounded-md border border-input bg-background shadow-lg">
                      <div className="p-2 space-y-1">
                        {jobBusinessSizeOptions.map((option) => (
                          <label
                            key={option}
                            className="flex items-center gap-2 px-2 py-1.5 rounded hover:bg-muted cursor-pointer"
                          >
                            <input
                              type="checkbox"
                              checked={selectedJobBusinessSizes.includes(option)}
                              onChange={() => toggleJobBusinessSize(option)}
                              className="rounded border-input"
                            />
                            <span className="text-sm">{option}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {featuredJobs.map((job) => (
                  <Link key={job.id} href={`/jobs/${job.id}`} onClick={scrollToTop}>
                    <Card className="p-6 h-full hover:shadow-lg transition-shadow cursor-pointer">
                      <div className="flex flex-col gap-4">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h3 className="font-semibold text-foreground mb-1 text-balance">{job.title}</h3>
                            <p className="text-sm text-muted-foreground">{job.company}</p>
                          </div>
                          {job.featured && <Badge className="bg-primary text-primary-foreground">Featured</Badge>}
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {job.tags.map((tag) => (
                            <Badge key={tag} variant="secondary">
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        <div className="space-y-2 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <MapPin className="size-4" />
                            <span>{job.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Briefcase className="size-4" />
                            <span>{job.type}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="size-4" />
                            <span>Posted {job.postedDays} days ago</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="size-4" />
                            <span>Starts: {job.startDate}</span>
                          </div>
                        </div>

                        <div className="pt-4 border-t border-border">
                          <p className="font-semibold text-foreground">{job.salary}</p>
                        </div>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Categories */}
        {userType === "graduate" && (
          <section className="py-12 border-b border-border">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-semibold text-foreground mb-6">Browse by Category</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {categories.map((category) => {
                  const Icon = category.icon
                  return (
                    <Card key={category.name} className="p-6 hover:shadow-md transition-shadow cursor-pointer">
                      <div className="flex flex-col items-center text-center gap-3">
                        <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <Icon className="size-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium text-foreground">{category.name}</h3>
                          <p className="text-sm text-muted-foreground">{category.count} jobs</p>
                        </div>
                      </div>
                    </Card>
                  )
                })}
              </div>
            </div>
          </section>
        )}

        {/* Companies Section */}
        {userType === "graduate" && (
          <section className="py-12">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-semibold text-foreground mb-6">Explore Top Companies</h2>

              <div className="space-y-4 mb-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 flex items-center gap-2 px-4 py-3 bg-card border border-input rounded-md">
                    <select className="flex-1 bg-transparent border-none outline-none text-sm text-foreground">
                      <option>All Industries</option>
                      <option>Technology</option>
                      <option>Finance</option>
                      <option>Healthcare</option>
                      <option>Education</option>
                    </select>
                  </div>

                  <div className="flex-1 flex items-center gap-2 px-4 py-3 bg-card border border-input rounded-md">
                    <select className="flex-1 bg-transparent border-none outline-none text-sm text-foreground">
                      <option>All Sizes</option>
                      <option>Startup (1-50)</option>
                      <option>SME (51-250)</option>
                      <option>Mid-size (251-1000)</option>
                      <option>Large (1000+)</option>
                      <option>Enterprise (10,000+)</option>
                    </select>
                  </div>

                  <div className="flex-1 flex items-center gap-2 px-4 py-3 bg-card border border-input rounded-md">
                    <MapPin className="size-5 text-muted-foreground" />
                    <select className="flex-1 bg-transparent border-none outline-none text-sm text-foreground">
                      <option>All Locations</option>
                      <option>London, UK</option>
                      <option>Manchester, UK</option>
                      <option>Edinburgh, UK</option>
                      <option>Cambridge, UK</option>
                      <option>Bristol, UK</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {mockCompanies.map((company) => (
                  <Card key={company.id} className="p-6 hover:shadow-lg transition-shadow">
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="size-16 rounded-lg bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl shrink-0">
                          {company.logo}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-lg text-foreground mb-1 text-balance">{company.name}</h3>
                          <p className="text-sm text-muted-foreground">{company.industry}</p>
                        </div>
                      </div>

                      <p className="text-sm text-muted-foreground line-clamp-2">{company.description}</p>

                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin className="size-4 shrink-0" />
                          <span>{company.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Building2 className="size-4 shrink-0" />
                          <span>{company.size}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Briefcase className="size-4 shrink-0" />
                          <span className="font-medium text-foreground">{company.openPositions} open positions</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {company.benefits.slice(0, 3).map((benefit) => (
                          <Badge key={benefit} variant="secondary" className="text-xs">
                            {benefit}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex gap-2 pt-2">
                        <Button variant="default" size="sm" className="flex-1" disabled>
                          View Jobs
                        </Button>
                        <Button variant="outline" size="sm" className="flex-1 bg-transparent" disabled>
                          Follow
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        {userType === "employer" && (
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <Card className="p-6 md:p-8 bg-muted text-foreground text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-balance">Get started</h2>
                <p className="text-lg mb-6 text-muted-foreground text-pretty max-w-2xl mx-auto">
                  Post your job opening and reach thousands of highly skilled candidates
                </p>
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/post-job" onClick={scrollToTop}>
                    Post a job
                  </Link>
                </Button>
              </Card>
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-12 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-semibold text-foreground mb-4">For Job Seekers</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Browse Jobs
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Companies
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Career Advice
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">For Employers</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Post a Job
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Resources
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>&copy; 2025 JobBoard. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

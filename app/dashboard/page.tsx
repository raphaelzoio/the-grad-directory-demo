"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/navbar"
import {
  Search,
  MapPin,
  Briefcase,
  Clock,
  Lightbulb,
  Code,
  Palette,
  BarChart,
  TrendingUp,
  Building2,
  Eye,
  Edit,
  Trash2,
  AlertCircle,
  GraduationCap,
  Calendar,
  ChevronDown,
  Award,
  ExternalLink,
  ArrowUpDown,
  BookOpen,
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

const mockJobs = [
  {
    id: 1,
    title: "Graduate Software Engineer",
    company: "TechCorp Solutions Ltd",
    location: "London, UK",
    description: "Join our engineering team to build scalable web applications using modern technologies.",
    applications: 24,
    postedDate: "3 days ago",
    tags: ["JavaScript", "React", "Node.js"],
  },
  {
    id: 2,
    title: "Junior Data Analyst",
    company: "DataDrive Analytics",
    location: "Manchester, UK",
    description: "Analyse large datasets and create insights to drive business decisions.",
    applications: 18,
    postedDate: "1 week ago",
    tags: ["Python", "SQL", "Tableau"],
  },
  {
    id: 3,
    title: "Graduate Product Designer",
    company: "DesignHub Studio",
    location: "Bristol, UK",
    description: "Design intuitive user experiences for our suite of digital products.",
    applications: 12,
    postedDate: "2 weeks ago",
    tags: ["Figma", "UX Research", "Prototyping"],
  },
]

const mockApplications = [
  {
    id: 1,
    jobTitle: "Graduate Software Engineer",
    company: "TechCorp Solutions Ltd",
    location: "London, UK",
    status: "Under Review",
    appliedDate: "2 days ago",
  },
  {
    id: 2,
    jobTitle: "Junior Data Analyst",
    company: "DataDrive Analytics",
    location: "Manchester, UK",
    status: "Accepted",
    appliedDate: "1 week ago",
  },
  {
    id: 3,
    jobTitle: "Product Designer Intern",
    company: "DesignHub Studio",
    location: "Bristol, UK",
    status: "Rejected",
    appliedDate: "2 weeks ago",
  },
]

const mockSavedJobs = [
  {
    id: 4,
    title: "Machine Learning Engineer",
    company: "AI Ventures Lab",
    location: "London, UK",
    description: "Build and deploy ML models for enterprise clients.",
    tags: ["Python", "TensorFlow", "AWS"],
  },
  {
    id: 5,
    title: "Cloud Infrastructure Engineer",
    company: "CloudScale UK Ltd",
    location: "Edinburgh, UK",
    description: "Design and maintain cloud infrastructure at scale.",
    tags: ["AWS", "Kubernetes", "Terraform"],
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
  const [searchKeywords, setSearchKeywords] = useState("")

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
      {userType && (
        <Navbar userType={userType} currentPage={userType === "employer" ? "directory" : "jobs"} />
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
          <section className="pt-6 pb-12 border-b border-border">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div className="mb-6">
                  <h2 className="text-2xl font-semibold text-foreground mb-1">Search Talent</h2>
                  <p className="text-sm text-muted-foreground">Find and connect with talented students and graduates</p>
                </div>

                {/* AI Search Bar */}
                <div className="mb-6">
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-muted-foreground" />
                    <input
                      type="text"
                      placeholder="Try: 'Oxford CS graduate with Python experience available immediately in London'"
                      value={searchKeywords}
                      onChange={(e) => setSearchKeywords(e.target.value)}
                      className="w-full h-14 pl-12 pr-32 rounded-lg border border-input bg-background text-base placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    />
                    <Button 
                      size="sm" 
                      className="absolute right-3 top-1/2 -translate-y-1/2"
                      onClick={() => {
                        // Demo: simulate autofilling filters
                        setSelectedLocations(["London"])
                        setSelectedUniversities(["University of Oxford"])
                        setSelectedSubjects(["Computer Science"])
                        setSelectedAvailability(["Immediate"])
                      }}
                    >
                      <Lightbulb className="size-4 mr-2" />
                      Smart Search
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">Describe what you are looking for and we will autofill the filters below</p>
                </div>

                {/* Compact Filters Row */}
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  {/* Location Filter */}
                  <div className="relative" ref={locationRef}>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        setOpenDropdown(openDropdown === "location" ? null : "location")
                      }}
                      className={`h-9 px-3 rounded-full border text-sm flex items-center gap-2 transition-colors ${
                        selectedLocations.length > 0 
                          ? "bg-primary/10 border-primary/30 text-foreground" 
                          : "border-input bg-background hover:bg-muted/50 text-muted-foreground"
                      }`}
                    >
                      <MapPin className="size-4" />
                      <span>{selectedLocations.length === 0 ? "Location" : selectedLocations.length === 1 ? selectedLocations[0] : `${selectedLocations.length} locations`}</span>
                      <ChevronDown className="size-3" />
                    </button>
                    {openDropdown === "location" && (
                      <div
                        onClick={(e) => e.stopPropagation()}
                        className="absolute top-full left-0 mt-1 bg-card border border-border rounded-md shadow-lg z-20 max-h-60 overflow-y-auto min-w-[180px]"
                      >
                        {["Remote", "London", "Manchester", "Birmingham", "Edinburgh", "Bristol", "Cambridge", "Oxford", "Leeds"].map((loc) => (
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

                  {/* University Filter */}
                  <div className="relative" ref={universityRef}>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        setOpenDropdown(openDropdown === "university" ? null : "university")
                      }}
                      className={`h-9 px-3 rounded-full border text-sm flex items-center gap-2 transition-colors ${
                        selectedUniversities.length > 0 
                          ? "bg-primary/10 border-primary/30 text-foreground" 
                          : "border-input bg-background hover:bg-muted/50 text-muted-foreground"
                      }`}
                    >
                      <GraduationCap className="size-4" />
                      <span>{selectedUniversities.length === 0 ? "University" : `${selectedUniversities.length} selected`}</span>
                      <ChevronDown className="size-3" />
                    </button>
                    {openDropdown === "university" && (
                      <div
                        onClick={(e) => e.stopPropagation()}
                        className="absolute top-full left-0 mt-1 bg-card border border-border rounded-md shadow-lg z-20 max-h-60 overflow-y-auto min-w-[250px]"
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

                  {/* Subject Filter */}
                  <div className="relative" ref={subjectRef}>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        setOpenDropdown(openDropdown === "subject" ? null : "subject")
                      }}
                      className={`h-9 px-3 rounded-full border text-sm flex items-center gap-2 transition-colors ${
                        selectedSubjects.length > 0 
                          ? "bg-primary/10 border-primary/30 text-foreground" 
                          : "border-input bg-background hover:bg-muted/50 text-muted-foreground"
                      }`}
                    >
                      <span>{selectedSubjects.length === 0 ? "Subject" : `${selectedSubjects.length} selected`}</span>
                      <ChevronDown className="size-3" />
                    </button>
                    {openDropdown === "subject" && (
                      <div
                        onClick={(e) => e.stopPropagation()}
                        className="absolute top-full left-0 mt-1 bg-card border border-border rounded-md shadow-lg z-20 max-h-60 overflow-y-auto min-w-[220px]"
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

                  {/* Experience Filter */}
                  <div className="relative" ref={experienceRef}>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        setOpenDropdown(openDropdown === "experience" ? null : "experience")
                      }}
                      className={`h-9 px-3 rounded-full border text-sm flex items-center gap-2 transition-colors ${
                        selectedExperience.length > 0 
                          ? "bg-primary/10 border-primary/30 text-foreground" 
                          : "border-input bg-background hover:bg-muted/50 text-muted-foreground"
                      }`}
                    >
                      <Briefcase className="size-4" />
                      <span>{selectedExperience.length === 0 ? "Experience" : `${selectedExperience.length} selected`}</span>
                      <ChevronDown className="size-3" />
                    </button>
                    {openDropdown === "experience" && (
                      <div
                        onClick={(e) => e.stopPropagation()}
                        className="absolute top-full left-0 mt-1 bg-card border border-border rounded-md shadow-lg z-20 max-h-60 overflow-y-auto min-w-[160px]"
                      >
                        {["0-1 years", "1-2 years", "2-3 years", "3-5 years", "5+ years"].map((exp) => (
                          <label
                            key={exp}
                            className="flex items-center gap-2 px-4 py-2 hover:bg-muted/50 cursor-pointer"
                          >
                            <input
                              type="checkbox"
                              className="size-4"
                              checked={selectedExperience.includes(exp)}
                              onChange={() => toggleSelection(exp, selectedExperience, setSelectedExperience)}
                            />
                            <span className="text-sm">{exp}</span>
                          </label>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Availability Filter */}
                  <div className="relative" ref={availabilityRef}>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        setOpenDropdown(openDropdown === "availability" ? null : "availability")
                      }}
                      className={`h-9 px-3 rounded-full border text-sm flex items-center gap-2 transition-colors ${
                        selectedAvailability.length > 0 
                          ? "bg-primary/10 border-primary/30 text-foreground" 
                          : "border-input bg-background hover:bg-muted/50 text-muted-foreground"
                      }`}
                    >
                      <Clock className="size-4" />
                      <span>{selectedAvailability.length === 0 ? "Availability" : selectedAvailability.length === 1 ? selectedAvailability[0] : `${selectedAvailability.length} selected`}</span>
                      <ChevronDown className="size-3" />
                    </button>
                    {openDropdown === "availability" && (
                      <div
                        onClick={(e) => e.stopPropagation()}
                        className="absolute top-full left-0 mt-1 bg-card border border-border rounded-md shadow-lg z-20 max-h-60 overflow-y-auto min-w-[160px]"
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

                  {/* Degree Class Filter */}
                  <div className="relative" ref={degreeClassRef}>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        setOpenDropdown(openDropdown === "degreeClass" ? null : "degreeClass")
                      }}
                      className={`h-9 px-3 rounded-full border text-sm flex items-center gap-2 transition-colors ${
                        selectedDegreeClass.length > 0 
                          ? "bg-primary/10 border-primary/30 text-foreground" 
                          : "border-input bg-background hover:bg-muted/50 text-muted-foreground"
                      }`}
                    >
                      <Award className="size-4" />
                      <span>{selectedDegreeClass.length === 0 ? "Degree Class" : selectedDegreeClass.join(", ")}</span>
                      <ChevronDown className="size-3" />
                    </button>
                    {openDropdown === "degreeClass" && (
                      <div
                        onClick={(e) => e.stopPropagation()}
                        className="absolute top-full left-0 mt-1 bg-card border border-border rounded-md shadow-lg z-20 max-h-60 overflow-y-auto min-w-[120px]"
                      >
                        {["1st", "2:1", "2:2", "Any"].map((degClass) => (
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

                  {/* Diversity Filter */}
                  <div className="relative" ref={diversityRef}>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        setOpenDropdown(openDropdown === "diversity" ? null : "diversity")
                      }}
                      className={`h-9 px-3 rounded-full border text-sm flex items-center gap-2 transition-colors ${
                        selectedDiversity.length > 0 
                          ? "bg-primary/10 border-primary/30 text-foreground" 
                          : "border-input bg-background hover:bg-muted/50 text-muted-foreground"
                      }`}
                    >
                      <span>{selectedDiversity.length === 0 ? "Diversity" : `${selectedDiversity.length} selected`}</span>
                      <ChevronDown className="size-3" />
                    </button>
                    {openDropdown === "diversity" && (
                      <div
                        onClick={(e) => e.stopPropagation()}
                        className="absolute top-full left-0 mt-1 bg-card border border-border rounded-md shadow-lg z-20 max-h-60 overflow-y-auto min-w-[180px]"
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

                  {/* Clear Filters */}
                  {(selectedLocations.length > 0 || selectedUniversities.length > 0 || selectedSubjects.length > 0 || selectedExperience.length > 0 || selectedAvailability.length > 0 || selectedDegreeClass.length > 0 || selectedDiversity.length > 0) && (
                    <button
                      onClick={() => {
                        setSelectedLocations([])
                        setSelectedUniversities([])
                        setSelectedSubjects([])
                        setSelectedExperience([])
                        setSelectedAvailability([])
                        setSelectedDegreeClass([])
                        setSelectedDiversity([])
                      }}
                      className="h-9 px-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Clear all
                    </button>
                  )}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Results Section */}
        {userType === "employer" && (
          <section className="py-8 border-b border-border">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                {/* Results Header */}
                <div className="flex items-center justify-between mb-6">
                  <p className="text-sm text-muted-foreground">42 active graduates found</p>
                  <button className="h-9 px-4 rounded-full border border-input bg-background text-sm flex items-center gap-2 hover:bg-muted/50 transition-colors">
                    <ArrowUpDown className="size-4" />
                    <span>Most Recent</span>
                  </button>
                </div>

                {/* Results Grid */}
                <div className="grid md:grid-cols-2 gap-4">
                  {mockGraduates.map((graduate) => (
                    <Card key={graduate.id} className="p-5 hover:shadow-md transition-shadow">
                      <div className="flex gap-4">
                        <div className="size-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold shrink-0">
                          {graduate.avatar}
                        </div>
                        <div className="flex-1 min-w-0">
                          <Link href={`/dashboard/graduates/${graduate.id}`} onClick={scrollToTop} className="hover:underline">
                            <h3 className="font-semibold text-foreground">{graduate.name}</h3>
                          </Link>
                          <p className="text-sm text-muted-foreground mb-2">
                            {graduate.degree} - {graduate.university}
                          </p>
                          <div className="flex flex-wrap gap-1.5 mb-3">
                            {graduate.skills.slice(0, 3).map((skill) => (
                              <Badge key={skill} variant="secondary" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                            {graduate.skills.length > 3 && (
                              <Badge variant="outline" className="text-xs">+{graduate.skills.length - 3}</Badge>
                            )}
                          </div>
                          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <MapPin className="size-3" />
                              {graduate.location}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="size-3" />
                              {graduate.availability}
                            </span>
                            <span className="flex items-center gap-1">
                              <Briefcase className="size-3" />
                              {graduate.experience}
                            </span>
                          </div>
                          {graduate.portfolioUrl && graduate.portfolioLabel && (
                            <div className="mt-2">
                              <Button
                                variant="outline"
                                size="sm"
                                className="h-7 text-xs gap-1.5"
                                onClick={(e) => e.preventDefault()}
                              >
                                {graduate.portfolioLabel.toLowerCase().includes("dissertation") ? (
                                  <BookOpen className="size-3" />
                                ) : (
                                  <ExternalLink className="size-3" />
                                )}
                                {graduate.portfolioLabel}
                              </Button>
                            </div>
                          )}
                        </div>
                        <div className="shrink-0">
                          <Button variant="outline" size="sm" className="bg-transparent" asChild>
                            <Link href={`/dashboard/graduates/${graduate.id}`} onClick={scrollToTop}>
                              View
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>

                {/* View All Button */}
                <div className="flex justify-center pt-6">
                  <Button asChild>
                    <Link href="#">View All Graduates</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        )}
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

                  <Button size="sm" asChild>
                    <Link href="/dashboard/graduates/1" onClick={scrollToTop}>
                      View Profile
                    </Link>
                  </Button>
                </Card>

                {/* Prize Winner 2 */}
                <Card className="p-6 hover:shadow-lg transition-shadow border-primary/20">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="size-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-lg shrink-0">
                      AJ
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-lg text-foreground">Aisha Johnson</h3>
                      <p className="text-sm text-muted-foreground">Computer Science, MEng (1st)</p>
                      <p className="text-sm text-muted-foreground">Imperial College London</p>
                    </div>
                  </div>

                  <div className="mb-4 p-3 bg-primary/10 rounded-md border border-primary/20">
                    <div className="flex items-start gap-2">
                      <Award className="size-4 text-primary mt-0.5 shrink-0" />
                      <div>
                        <p className="text-sm font-semibold text-foreground">Google Scholar Award</p>
                        <p className="text-xs text-muted-foreground">Excellence in AI and Machine Learning</p>
                      </div>
                    </div>
                  </div>

                  <Button size="sm" asChild>
                    <Link href="/dashboard/graduates/2" onClick={scrollToTop}>
                      View Profile
                    </Link>
                  </Button>
                </Card>

                {/* Prize Winner 3 */}
                <Card className="p-6 hover:shadow-lg transition-shadow border-primary/20">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="size-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-lg shrink-0">
                      RC
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-lg text-foreground">Rohan Chaudhury</h3>
                      <p className="text-sm text-muted-foreground">Physics, BA (1st)</p>
                      <p className="text-sm text-muted-foreground">University of Oxford</p>
                    </div>
                  </div>

                  <div className="mb-4 p-3 bg-primary/10 rounded-md border border-primary/20">
                    <div className="flex items-start gap-2">
                      <Award className="size-4 text-primary mt-0.5 shrink-0" />
                      <div>
                        <p className="text-sm font-semibold text-foreground">Hertz Fellowship Award</p>
                        <p className="text-xs text-muted-foreground">Exceptional STEM talent and innovation</p>
                      </div>
                    </div>
                  </div>

                  <Button size="sm" asChild>
                    <Link href="/dashboard/graduates/3" onClick={scrollToTop}>
                      View Profile
                    </Link>
                  </Button>
                </Card>
              </div>
            </div>
          </section>
        )}

        {/* Your Job Postings section */}
        {userType === "employer" && (
          <section className="py-16 border-b border-border">
            <div className="container mx-auto px-4">
              <div className="mb-8 flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-semibold text-foreground mb-2">Your Job Postings</h2>
                  <p className="text-sm text-muted-foreground">Manage and track your active job postings</p>
                </div>
                <Button asChild>
                  <Link href="/post-job" onClick={scrollToTop}>
                    Post New Job
                  </Link>
                </Button>
              </div>

              <div className="space-y-4">
                {mockJobs.map((job) => (
                  <Card key={job.id} className="p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-semibold text-foreground">{job.title}</h3>
                          <Badge>{job.applications} applications</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">{job.company} • {job.location}</p>
                        <p className="text-sm text-foreground mb-3">{job.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {job.tags.map((tag) => (
                            <Badge key={tag} variant="secondary">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="text-right shrink-0">
                        <p className="text-sm font-medium text-foreground mb-2">
                          Posted {job.postedDate}
                        </p>
                        <Button size="sm" variant="outline" asChild>
                          <Link href={`/jobs/${job.id}`} onClick={scrollToTop}>
                            View Details
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}
        
        {/* Saved Jobs for Graduates */}
        {userType === "graduate" && (
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-2">Saved Jobs</h2>
                <p className="text-sm text-muted-foreground">Jobs you've bookmarked for later</p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {mockSavedJobs.map((job) => (
                  <Card key={job.id} className="p-5 hover:shadow-md transition-shadow">
                    <div className="mb-3">
                      <h3 className="text-base font-semibold text-foreground mb-1">{job.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {job.company} • {job.location}
                      </p>
                    </div>
                    <p className="text-sm text-foreground mb-3">{job.description}</p>
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {job.tags.slice(0, 2).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button size="sm" asChild>
                      <Link href={`/jobs/${job.id}`} onClick={scrollToTop}>
                        Apply Now
                      </Link>
                    </Button>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
    )
  }


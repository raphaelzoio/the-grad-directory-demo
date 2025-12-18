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
} from "lucide-react"
import { useEffect, useState } from "react"

const featuredJobs = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$120k - $180k",
    tags: ["React", "TypeScript", "Next.js"],
    postedDays: 2,
    featured: true,
  },
  {
    id: 2,
    title: "Product Designer",
    company: "DesignHub",
    location: "Remote",
    type: "Full-time",
    salary: "$100k - $150k",
    tags: ["Figma", "UI/UX", "Design Systems"],
    postedDays: 1,
    featured: true,
  },
  {
    id: 3,
    title: "Backend Engineer",
    company: "CloudScale",
    location: "New York, NY",
    type: "Full-time",
    salary: "$130k - $190k",
    tags: ["Node.js", "AWS", "PostgreSQL"],
    postedDays: 3,
    featured: false,
  },
  {
    id: 4,
    title: "DevOps Engineer",
    company: "InfraWorks",
    location: "Austin, TX",
    type: "Full-time",
    salary: "$110k - $160k",
    tags: ["Kubernetes", "Docker", "CI/CD"],
    postedDays: 5,
    featured: false,
  },
  {
    id: 5,
    title: "Data Scientist",
    company: "DataVision",
    location: "Seattle, WA",
    type: "Full-time",
    salary: "$140k - $200k",
    tags: ["Python", "ML", "TensorFlow"],
    postedDays: 4,
    featured: false,
  },
  {
    id: 6,
    title: "Mobile Developer",
    company: "AppMakers",
    location: "Remote",
    type: "Contract",
    salary: "$90k - $130k",
    tags: ["React Native", "iOS", "Android"],
    postedDays: 7,
    featured: false,
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
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$120k - $180k",
    applicants: 24,
    status: "Active",
    postedDate: "2025-01-10",
  },
  {
    id: 2,
    title: "Product Designer",
    location: "Remote",
    type: "Full-time",
    salary: "$100k - $150k",
    applicants: 18,
    status: "Active",
    postedDate: "2025-01-12",
  },
  {
    id: 3,
    title: "Backend Engineer",
    location: "New York, NY",
    type: "Full-time",
    salary: "$130k - $190k",
    applicants: 31,
    status: "Active",
    postedDate: "2025-01-08",
  },
  {
    id: 4,
    title: "DevOps Engineer",
    location: "Austin, TX",
    type: "Full-time",
    salary: "$110k - $160k",
    applicants: 12,
    status: "Closed",
    postedDate: "2024-12-20",
  },
]

const mockGraduates = [
  {
    id: 1,
    name: "Sarah Johnson",
    degree: "Computer Science, BS",
    university: "Stanford University",
    graduationYear: 2024,
    location: "San Francisco, CA",
    skills: ["React", "TypeScript", "Node.js", "Python"],
    experience: "2 years",
    availability: "Immediate",
    avatar: "SJ",
  },
  {
    id: 2,
    name: "Michael Chen",
    degree: "Software Engineering, MS",
    university: "MIT",
    graduationYear: 2023,
    location: "Boston, MA",
    skills: ["Java", "Spring Boot", "AWS", "Docker"],
    experience: "3 years",
    availability: "2 weeks",
    avatar: "MC",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    degree: "Data Science, BS",
    university: "UC Berkeley",
    graduationYear: 2024,
    location: "Remote",
    skills: ["Python", "ML", "TensorFlow", "SQL"],
    experience: "1 year",
    availability: "Immediate",
    avatar: "ER",
  },
  {
    id: 4,
    name: "David Kim",
    degree: "Computer Engineering, BS",
    university: "Carnegie Mellon",
    graduationYear: 2023,
    location: "Seattle, WA",
    skills: ["C++", "Rust", "Kubernetes", "Linux"],
    experience: "2 years",
    availability: "1 month",
    avatar: "DK",
  },
  {
    id: 5,
    name: "Jessica Martinez",
    degree: "UX Design, MS",
    university: "RISD",
    graduationYear: 2024,
    location: "New York, NY",
    skills: ["Figma", "UI/UX", "Design Systems", "Research"],
    experience: "2 years",
    availability: "Immediate",
    avatar: "JM",
  },
  {
    id: 6,
    name: "Alex Thompson",
    degree: "Information Systems, BS",
    university: "Georgia Tech",
    graduationYear: 2023,
    location: "Atlanta, GA",
    skills: ["JavaScript", "React", "GraphQL", "MongoDB"],
    experience: "3 years",
    availability: "2 weeks",
    avatar: "AT",
  },
]

const mockCompanies = [
  {
    id: 1,
    name: "TechCorp Solutions",
    industry: "Software Development",
    location: "San Francisco, CA",
    size: "500-1000 employees",
    logo: "TC",
    description: "Leading provider of enterprise software solutions",
    openPositions: 12,
    benefits: ["Health Insurance", "401k", "Remote Work", "Stock Options"],
  },
  {
    id: 2,
    name: "DataDrive Analytics",
    industry: "Data Science",
    location: "New York, NY",
    size: "100-500 employees",
    logo: "DD",
    description: "Transforming data into actionable insights",
    openPositions: 8,
    benefits: ["Health Insurance", "Unlimited PTO", "Learning Budget"],
  },
  {
    id: 3,
    name: "CloudScale Inc",
    industry: "Cloud Computing",
    location: "Seattle, WA",
    size: "1000+ employees",
    logo: "CS",
    description: "Building the future of cloud infrastructure",
    openPositions: 24,
    benefits: ["Health Insurance", "401k", "Remote Work", "Gym Membership"],
  },
  {
    id: 4,
    name: "FinTech Innovations",
    industry: "Financial Technology",
    location: "Boston, MA",
    size: "100-500 employees",
    logo: "FI",
    description: "Revolutionizing digital banking and payments",
    openPositions: 15,
    benefits: ["Health Insurance", "Stock Options", "Flexible Hours"],
  },
  {
    id: 5,
    name: "DesignHub Studio",
    industry: "Design & UX",
    location: "Austin, TX",
    size: "50-100 employees",
    logo: "DH",
    description: "Creating beautiful digital experiences",
    openPositions: 6,
    benefits: ["Health Insurance", "Remote Work", "Creative Freedom"],
  },
  {
    id: 6,
    name: "AI Ventures Lab",
    industry: "Artificial Intelligence",
    location: "San Francisco, CA",
    size: "500-1000 employees",
    logo: "AV",
    description: "Pioneering AI-powered solutions for enterprises",
    openPositions: 18,
    benefits: ["Health Insurance", "401k", "Stock Options", "Research Time"],
  },
]

export default function DashboardPage() {
  const router = useRouter()
  const [userType, setUserType] = useState<"employer" | "graduate" | null>(null)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const type = sessionStorage.getItem("userType") as "employer" | "graduate" | null
      if (!type) {
        router.push("/")
      } else {
        setUserType(type)
      }
    }
  }, [router])

  const handleLogout = () => {
    if (typeof window !== "undefined") {
      sessionStorage.removeItem("userType")
    }
    router.push("/")
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
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
              <span className="text-xl font-semibold text-foreground">The Grad Directory</span>
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
              <span className="text-sm font-medium text-muted-foreground cursor-default">Companies</span>
              <span className="text-sm font-medium text-muted-foreground cursor-default">About</span>
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
              <span className="text-xl font-semibold text-foreground">The Grad Directory</span>
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

      {/* Hero Section */}
      {userType === "graduate" && (
        <section className="bg-gradient-to-b from-muted/50 to-background py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground text-balance">Find Your Dream Job Today</h1>
              <p className="text-lg md:text-xl text-muted-foreground text-pretty">
                Discover thousands of opportunities from top companies around the world
              </p>

              {/* Search Bar */}
              <Card className="p-2 shadow-lg">
                <div className="flex flex-col md:flex-row gap-2">
                  <div className="flex-1 flex items-center gap-2 px-3 py-2 bg-background rounded-md">
                    <Search className="size-5 text-muted-foreground" />
                    <input
                      type="text"
                      placeholder="Job title or keyword"
                      className="flex-1 bg-transparent border-none outline-none text-sm text-foreground placeholder:text-muted-foreground"
                    />
                  </div>
                  <div className="flex-1 flex items-center gap-2 px-3 py-2 bg-background rounded-md">
                    <MapPin className="size-5 text-muted-foreground" />
                    <input
                      type="text"
                      placeholder="Location"
                      className="flex-1 bg-transparent border-none outline-none text-sm text-foreground placeholder:text-muted-foreground"
                    />
                  </div>
                  <Button size="lg" className="md:w-auto">
                    Search Jobs
                  </Button>
                </div>
              </Card>

              <div className="flex flex-wrap items-center justify-center gap-2 text-sm text-muted-foreground">
                <span>Popular:</span>
                {["Designer", "Developer", "Manager", "Marketing"].map((term) => (
                  <button
                    key={term}
                    className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

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

      {userType === "employer" && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-foreground mb-1">Search Active Graduates</h2>
              <p className="text-sm text-muted-foreground">Find and connect with talented graduates</p>
            </div>

            <div className="space-y-6">
              {/* Search and Filters */}
              <Card className="p-6">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Search</label>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                      <input placeholder="Name, skills, degree..." className="pl-10" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Location</label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                      <select className="w-full h-10 pl-10 pr-4 rounded-md border border-input bg-background text-sm">
                        <option>All Locations</option>
                        <option>Remote</option>
                        <option>San Francisco, CA</option>
                        <option>New York, NY</option>
                        <option>Boston, MA</option>
                        <option>Seattle, WA</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Graduation Year</label>
                    <select className="w-full h-10 px-4 rounded-md border border-input bg-background text-sm">
                      <option>Any Year</option>
                      <option>2024</option>
                      <option>2023</option>
                      <option>2022</option>
                      <option>2021</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Availability</label>
                    <select className="w-full h-10 px-4 rounded-md border border-input bg-background text-sm">
                      <option>Any</option>
                      <option>Immediate</option>
                      <option>Within 2 weeks</option>
                      <option>Within 1 month</option>
                    </select>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Popular skills:</span>
                  <div className="flex flex-wrap gap-2">
                    <Button variant="outline" size="sm">
                      React
                    </Button>
                    <Button variant="outline" size="sm">
                      Python
                    </Button>
                    <Button variant="outline" size="sm">
                      TypeScript
                    </Button>
                    <Button variant="outline" size="sm">
                      AWS
                    </Button>
                    <Button variant="outline" size="sm">
                      Design
                    </Button>
                  </div>
                </div>
              </Card>

              {/* Results */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">{mockGraduates.length} active graduates found</p>
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
                            <h3 className="font-semibold text-lg text-foreground mb-1">{graduate.name}</h3>
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
                            </div>
                          </div>
                        </div>
                        <div className="flex md:flex-col gap-2 shrink-0">
                          <Button variant="outline" size="sm" className="w-full bg-transparent" asChild>
                            <Link href={`/dashboard/graduates/${graduate.id}`} onClick={scrollToTop}>
                              View Profile
                            </Link>
                          </Button>
                          <Button variant="outline" size="sm" className="w-full bg-transparent" disabled>
                            Contact
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

      {/* Companies Section */}
      {userType === "graduate" && (
        <section className="py-12 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-1">Explore Top Companies</h2>
                <p className="text-sm text-muted-foreground">Discover companies hiring talented graduates</p>
              </div>
              <Button variant="outline" size="sm">
                View All
              </Button>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex flex-col md:flex-row gap-3">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                  <input placeholder="Search companies..." className="pl-10" />
                </div>
                <div className="flex gap-2">
                  <select className="h-10 px-4 rounded-md border border-input bg-background text-sm min-w-[140px]">
                    <option>All Industries</option>
                    <option>Software Development</option>
                    <option>Data Science</option>
                    <option>Cloud Computing</option>
                    <option>Financial Technology</option>
                    <option>Design & UX</option>
                  </select>
                  <select className="h-10 px-4 rounded-md border border-input bg-background text-sm min-w-[140px]">
                    <option>All Locations</option>
                    <option>San Francisco, CA</option>
                    <option>New York, NY</option>
                    <option>Seattle, WA</option>
                    <option>Boston, MA</option>
                    <option>Austin, TX</option>
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

      {/* Featured Jobs */}
      {userType === "graduate" && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-foreground">Featured Jobs</h2>
              <Button variant="outline" size="sm">
                View All
              </Button>
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

      {/* CTA Section */}
      {userType === "employer" && (
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <Card className="p-8 md:p-12 bg-primary text-primary-foreground text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Ready to Hire Top Talent?</h2>
              <p className="text-lg mb-6 text-primary-foreground/90 text-pretty max-w-2xl mx-auto">
                Post your job opening and reach thousands of qualified candidates actively looking for their next
                opportunity
              </p>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/post-job" onClick={scrollToTop}>
                  Post a Job for Free
                </Link>
              </Button>
            </Card>
          </div>
        </section>
      )}

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

"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Briefcase,
  MapPin,
  DollarSign,
  Clock,
  Building2,
  LogOut,
  User,
  Search,
  Calendar,
  Filter,
  CheckCircle2,
  XCircle,
  AlertCircle,
} from "lucide-react"

const mockApplications = [
  {
    id: "1",
    jobTitle: "Senior Frontend Developer",
    company: "TechCorp Solutions",
    companyLogo: "🏢",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$120k - $160k",
    appliedDate: "2024-01-15",
    status: "Under Review",
    statusColor: "bg-blue-100 text-blue-700",
    description: "Building next-generation web applications with React and TypeScript",
  },
  {
    id: "2",
    jobTitle: "Product Designer",
    company: "Creative Labs",
    companyLogo: "🎨",
    location: "Remote",
    type: "Full-time",
    salary: "$100k - $140k",
    appliedDate: "2024-01-12",
    status: "Interview Scheduled",
    statusColor: "bg-green-100 text-green-700",
    description: "Design user-centered experiences for SaaS products",
  },
  {
    id: "3",
    jobTitle: "Data Scientist",
    company: "DataTech Inc",
    companyLogo: "📊",
    location: "New York, NY",
    type: "Full-time",
    salary: "$130k - $170k",
    appliedDate: "2024-01-10",
    status: "Rejected",
    statusColor: "bg-red-100 text-red-700",
    description: "Apply machine learning to solve complex business problems",
  },
  {
    id: "4",
    jobTitle: "Backend Engineer",
    company: "CloudBase",
    companyLogo: "☁️",
    location: "Austin, TX",
    type: "Full-time",
    salary: "$115k - $155k",
    appliedDate: "2024-01-08",
    status: "Under Review",
    statusColor: "bg-blue-100 text-blue-700",
    description: "Build scalable microservices and APIs",
  },
  {
    id: "5",
    jobTitle: "UX Researcher",
    company: "UserFirst Design",
    companyLogo: "🔍",
    location: "Boston, MA",
    type: "Full-time",
    salary: "$95k - $125k",
    appliedDate: "2024-01-05",
    status: "Application Sent",
    statusColor: "bg-gray-100 text-gray-700",
    description: "Conduct user research to inform product decisions",
  },
  {
    id: "6",
    jobTitle: "Mobile Developer",
    company: "AppWorks",
    companyLogo: "📱",
    location: "Seattle, WA",
    type: "Full-time",
    salary: "$110k - $150k",
    appliedDate: "2024-01-03",
    status: "Offer Received",
    statusColor: "bg-purple-100 text-purple-700",
    description: "Develop cross-platform mobile applications",
  },
]

export default function ApplicationsPage() {
  const router = useRouter()
  const [userType, setUserType] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState<string>("all")

  useEffect(() => {
    const type = sessionStorage.getItem("userType")
    if (!type) {
      router.push("/")
    } else if (type !== "graduate") {
      router.push("/dashboard")
    } else {
      setUserType(type)
    }
  }, [router])

  const handleLogout = () => {
    sessionStorage.removeItem("userType")
    router.push("/")
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const filteredApplications = mockApplications.filter((app) => {
    const matchesSearch =
      app.jobTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.company.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = statusFilter === "all" || app.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Offer Received":
        return <CheckCircle2 className="size-4 text-purple-700" />
      case "Interview Scheduled":
        return <Calendar className="size-4 text-green-700" />
      case "Rejected":
        return <XCircle className="size-4 text-red-700" />
      case "Under Review":
        return <AlertCircle className="size-4 text-blue-700" />
      default:
        return <Clock className="size-4 text-gray-700" />
    }
  }

  const statuses = ["all", ...Array.from(new Set(mockApplications.map((app) => app.status)))]

  if (!userType) {
    return null
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/dashboard" className="flex items-center gap-2" onClick={scrollToTop}>
            <div className="size-8 rounded-lg bg-primary flex items-center justify-center">
              <Briefcase className="size-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-semibold text-foreground">The Graduate Directory</span>
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
              className="text-sm font-medium text-primary transition-colors"
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

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-2 text-balance">My Applications</h1>
            <p className="text-muted-foreground text-lg">Track the status of your job applications</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <Card>
              <CardContent className="pt-6">
                <div className="text-2xl font-bold text-foreground">{mockApplications.length}</div>
                <p className="text-sm text-muted-foreground">Total Applications</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-2xl font-bold text-blue-600">
                  {mockApplications.filter((a) => a.status === "Under Review").length}
                </div>
                <p className="text-sm text-muted-foreground">Under Review</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-2xl font-bold text-green-600">
                  {mockApplications.filter((a) => a.status === "Interview Scheduled").length}
                </div>
                <p className="text-sm text-muted-foreground">Interviews</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-2xl font-bold text-purple-600">
                  {mockApplications.filter((a) => a.status === "Offer Received").length}
                </div>
                <p className="text-sm text-muted-foreground">Offers</p>
              </CardContent>
            </Card>
          </div>

          {/* Search and Filter */}
          <div className="mb-6 flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search by job title or company..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="size-4 text-muted-foreground" />
              <select
                className="px-4 py-2 rounded-lg border border-input bg-background text-foreground text-sm"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                {statuses.map((status) => (
                  <option key={status} value={status}>
                    {status === "all" ? "All Statuses" : status}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Applications List */}
          <div className="space-y-4">
            {filteredApplications.length === 0 ? (
              <Card>
                <CardContent className="py-12 text-center">
                  <p className="text-muted-foreground">No applications found</p>
                </CardContent>
              </Card>
            ) : (
              filteredApplications.map((application) => (
                <Card key={application.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row gap-6">
                      {/* Company Logo */}
                      <div className="flex-shrink-0">
                        <div className="size-16 rounded-lg bg-muted flex items-center justify-center text-3xl">
                          {application.companyLogo}
                        </div>
                      </div>

                      {/* Job Details */}
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                          <div>
                            <h3 className="text-xl font-semibold text-foreground mb-1 text-balance">
                              {application.jobTitle}
                            </h3>
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <Building2 className="size-4" />
                              <span className="text-sm font-medium">{application.company}</span>
                            </div>
                          </div>
                          <Badge className={application.statusColor}>
                            <span className="flex items-center gap-1">
                              {getStatusIcon(application.status)}
                              {application.status}
                            </span>
                          </Badge>
                        </div>

                        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{application.description}</p>

                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                          <div className="flex items-center gap-1">
                            <MapPin className="size-4" />
                            {application.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Briefcase className="size-4" />
                            {application.type}
                          </div>
                          <div className="flex items-center gap-1">
                            <DollarSign className="size-4" />
                            {application.salary}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="size-4" />
                            Applied on {new Date(application.appliedDate).toLocaleDateString()}
                          </div>
                        </div>

                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" disabled>
                            View Job
                          </Button>
                          <Button variant="outline" size="sm" disabled>
                            Withdraw
                          </Button>
                          <Button variant="outline" size="sm" disabled>
                            Message Recruiter
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </div>
      </main>
    </div>
  )
}

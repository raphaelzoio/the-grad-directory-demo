"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, MapPin, Users, Clock, Plus, Pencil } from "lucide-react"
import { useEffect, useState } from "react"

const mockPostedJobs = [
  {
    id: 1,
    title: "Graduate Investment Analyst",
    location: "London, UK",
    type: "Full-time",
    tags: ["Finance", "Excel", "Financial Modelling"],
    postedDate: "2 days ago",
    applicants: 18,
    status: "Active",
  },
  {
    id: 2,
    title: "Junior Software Engineer",
    location: "Cambridge, UK",
    type: "Full-time",
    tags: ["Python", "JavaScript", "SQL"],
    postedDate: "1 week ago",
    applicants: 34,
    status: "Active",
  },
  {
    id: 3,
    title: "Research Assistant",
    location: "Oxford, UK",
    type: "Part-time",
    tags: ["Research", "Data Analysis", "Academic Writing"],
    postedDate: "3 weeks ago",
    applicants: 12,
    status: "Closed",
  },
]

export default function YourJobsPage() {
  const router = useRouter()
  const [userType, setUserType] = useState<"employer" | "graduate" | null>(null)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const sessionType = sessionStorage.getItem("userType") as "employer" | "graduate" | null
      const localType = localStorage.getItem("userType") as "employer" | "graduate" | null
      const type = sessionType || localType

      if (!type || type !== "employer") {
        router.push("/dashboard")
      } else {
        setUserType(type)
      }
    }
  }, [router])

  if (!userType) {
    return null
  }

  return (
    <div className="min-h-screen bg-background">
      <main className="min-h-screen bg-background">
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Header */}
              <div className="mb-8 flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Briefcase className="size-6 text-primary" />
                    <h1 className="text-2xl font-semibold text-foreground">Your Jobs</h1>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Manage your job postings and view applicants.
                  </p>
                </div>
                <Button asChild>
                  <Link href="/post-job">
                    <Plus className="size-4 mr-2" />
                    Post a New Job
                  </Link>
                </Button>
              </div>

              {/* Jobs Count */}
              <div className="mb-6">
                <p className="text-sm text-muted-foreground">
                  {mockPostedJobs.length} job postings
                </p>
              </div>

              {/* Jobs List */}
              <div className="space-y-4">
                {mockPostedJobs.map((job) => (
                  <Card key={job.id} className="p-5 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="text-lg font-semibold text-foreground">
                                {job.title}
                              </h3>
                              <Badge
                                variant={job.status === "Active" ? "default" : "secondary"}
                                className="text-xs"
                              >
                                {job.status}
                              </Badge>
                            </div>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <span className="flex items-center gap-1.5">
                                <MapPin className="size-4" />
                                {job.location}
                              </span>
                              <span className="flex items-center gap-1.5">
                                <Briefcase className="size-4" />
                                {job.type}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-1.5 mb-3">
                          {job.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs text-white">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1.5">
                            <Clock className="size-3.5" />
                            Posted {job.postedDate}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Users className="size-3.5" />
                            {job.applicants} applicants
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2 shrink-0">
                        <Button size="sm" variant="outline" className="bg-transparent">
                          <Pencil className="size-4 mr-1" />
                          Edit
                        </Button>
                        <Button size="sm" variant="ghost" className="text-muted-foreground">
                          View Applicants
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Empty State */}
              {mockPostedJobs.length === 0 && (
                <Card className="p-12 text-center">
                  <Briefcase className="size-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">No jobs posted yet</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Post your first job to start receiving applications from qualified candidates.
                  </p>
                  <Button asChild>
                    <Link href="/post-job">
                      <Plus className="size-4 mr-2" />
                      Post a Job
                    </Link>
                  </Button>
                </Card>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

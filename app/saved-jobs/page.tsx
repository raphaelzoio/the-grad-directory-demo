"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/navbar"
import { Bookmark, MapPin, Building2, Trash2 } from "lucide-react"
import { useEffect, useState } from "react"

const mockSavedJobs = [
  {
    id: 4,
    title: "Machine Learning Engineer",
    company: "AI Ventures Lab",
    location: "London, UK",
    description: "Build and deploy ML models for enterprise clients.",
    tags: ["Python", "TensorFlow", "AWS"],
    savedDate: "2 days ago",
  },
  {
    id: 5,
    title: "Cloud Infrastructure Engineer",
    company: "CloudScale UK Ltd",
    location: "Edinburgh, UK",
    description: "Design and maintain cloud infrastructure at scale.",
    tags: ["AWS", "Kubernetes", "Terraform"],
    savedDate: "1 week ago",
  },
  {
    id: 6,
    title: "Full Stack Developer",
    company: "FinTech Innovations",
    location: "Cambridge, UK",
    description: "Build modern web applications for digital banking platforms.",
    tags: ["React", "Node.js", "PostgreSQL"],
    savedDate: "3 days ago",
  },
  {
    id: 7,
    title: "Data Analyst",
    company: "DataDrive Analytics",
    location: "Manchester, UK",
    description: "Analyse large datasets and create insights to drive business decisions.",
    tags: ["Python", "SQL", "Tableau"],
    savedDate: "5 days ago",
  },
]

export default function SavedJobsPage() {
  const router = useRouter()
  const [userType, setUserType] = useState<"employer" | "graduate" | null>(null)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const sessionType = sessionStorage.getItem("userType") as "employer" | "graduate" | null
      const localType = localStorage.getItem("userType") as "employer" | "graduate" | null
      const type = sessionType || localType

      if (!type || type !== "graduate") {
        router.push("/dashboard")
      } else {
        setUserType(type)
      }
    }
  }, [router])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  if (!userType) {
    return null
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar userType={userType} currentPage="bookmarks" />

      <main className="min-h-screen bg-background">
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Header */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-2">
                  <Bookmark className="size-6 text-primary" />
                  <h1 className="text-2xl font-semibold text-foreground">Saved Jobs</h1>
                </div>
                <p className="text-sm text-muted-foreground">
                  Jobs you've bookmarked for later. Apply when you're ready.
                </p>
              </div>

              {/* Saved Jobs Count */}
              <div className="mb-6">
                <p className="text-sm text-muted-foreground">
                  {mockSavedJobs.length} saved jobs
                </p>
              </div>

              {/* Saved Jobs List */}
              <div className="space-y-4">
                {mockSavedJobs.map((job) => (
                  <Card key={job.id} className="p-5 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="text-lg font-semibold text-foreground mb-1">
                              {job.title}
                            </h3>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <span className="flex items-center gap-1.5">
                                <Building2 className="size-4" />
                                {job.company}
                              </span>
                              <span className="flex items-center gap-1.5">
                                <MapPin className="size-4" />
                                {job.location}
                              </span>
                            </div>
                          </div>
                        </div>
                        <p className="text-sm text-foreground mb-3">{job.description}</p>
                        <div className="flex flex-wrap gap-1.5 mb-3">
                          {job.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs text-white">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <p className="text-xs text-muted-foreground">Saved {job.savedDate}</p>
                      </div>
                      <div className="flex flex-col gap-2 shrink-0">
                        <Button size="sm" asChild>
                          <Link href={`/jobs/${job.id}`} onClick={scrollToTop}>
                            Apply Now
                          </Link>
                        </Button>
                        <Button size="sm" variant="ghost" className="text-muted-foreground hover:text-destructive">
                          <Trash2 className="size-4 mr-1" />
                          Remove
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Empty State (shown when no saved jobs) */}
              {mockSavedJobs.length === 0 && (
                <Card className="p-12 text-center">
                  <Bookmark className="size-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">No saved jobs yet</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Browse jobs and click the bookmark icon to save them for later.
                  </p>
                  <Button asChild>
                    <Link href="/dashboard">Browse Jobs</Link>
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

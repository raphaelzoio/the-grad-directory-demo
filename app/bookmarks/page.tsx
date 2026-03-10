"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ContactDialog } from "@/components/contact-dialog"
import {
  MapPin,
  Briefcase,
  Bookmark,
  Clock,
  ExternalLink,
  BookOpen,
} from "lucide-react"

const bookmarkedGraduates = [
  {
    id: 1,
    name: "Sarah Johnson",
    degree: "Computer Science, BSc (1st)",
    university: "University of Oxford",
    location: "London, UK",
    skills: ["React", "TypeScript", "Node.js", "Python"],
    experience: "2 years",
    availability: "Immediate",
    avatar: "SJ",
    portfolioUrl: "https://github.com/sarahjohnson",
    portfolioLabel: "View GitHub",
  },
  {
    id: 2,
    name: "Michael Chen",
    degree: "Software Engineering, MSc (1st)",
    university: "University of Cambridge",
    location: "Cambridge, UK",
    skills: ["Java", "Spring Boot", "AWS", "Docker"],
    experience: "3 years",
    availability: "2 weeks",
    avatar: "MC",
    portfolioUrl: "https://michaelchen-projects.dev",
    portfolioLabel: "View Projects",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    degree: "Law (Jurisprudence), BA (1st)",
    university: "University of Oxford",
    location: "London, UK",
    skills: ["SQE1", "SQE2", "First Class", "Research"],
    experience: "1 year",
    availability: "Immediate",
    avatar: "ER",
    portfolioUrl: "https://oxford.ac.uk/dissertation/emily-rodriguez",
    portfolioLabel: "Read dissertation",
  },
]

export default function BookmarksPage() {
  const router = useRouter()
  const [userType, setUserType] = useState<"employer" | "graduate" | null>(null)

  useEffect(() => {
    const type = sessionStorage.getItem("userType") as "employer" | "graduate" | null
    if (!type) {
      router.push("/")
    } else if (type !== "employer") {
      router.push("/dashboard")
    } else {
      setUserType(type)
    }
  }, [router])

  if (!userType) {
    return null
  }

  return (
    <div className="min-h-screen bg-[var(--background-app)]">
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          <div className="mb-6">
            <h1 className="text-2xl font-semibold text-foreground mb-1">Saved Candidates</h1>
            <p className="text-sm text-muted-foreground">Your saved candidates for quick access</p>
          </div>

          <div className="mb-6">
            <Badge variant="secondary" className="text-sm text-white">
              {bookmarkedGraduates.length} saved candidate{bookmarkedGraduates.length !== 1 ? "s" : ""}
            </Badge>
          </div>

          {bookmarkedGraduates.length === 0 ? (
            <Card className="p-12 text-center">
              <Bookmark className="size-12 mx-auto text-muted-foreground mb-4" />
              <p className="text-muted-foreground mb-4">No bookmarked candidates yet</p>
              <Button asChild>
                <Link href="/dashboard">Browse Directory</Link>
              </Button>
            </Card>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {bookmarkedGraduates.map((graduate) => (
                <Link
                  key={graduate.id}
                  href={`/dashboard/graduates/${graduate.id}`}
                  className="no-underline hover:no-underline w-full block"
                  onClick={() => sessionStorage.setItem("previousPathname", "/bookmarks")}
                >
                  <Card
                    className="p-6 min-h-[243px] flex flex-col transition-shadow duration-200 relative overflow-hidden rounded-xl font-manrope border border-black/20 hover:shadow-lg"
                    style={{
                      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
                      background: `linear-gradient(to bottom, white 80%, white 85%, ${graduate.university.includes("Oxford") ? "#c5c3d9" : "#fbe8b3"})`,
                    }}
                  >
                    <div className="relative z-10 flex-1">
                      <div className="mb-3">
                        <h3 className="font-semibold text-xl font-manrope" style={{ color: "#1a1a1a" }}>{graduate.name}</h3>
                      </div>
                      <div className="text-left">
                        <p className="text-sm mb-1" style={{ color: "#444" }}>{graduate.degree}</p>
                        <p className="text-sm mb-2" style={{ color: "#555" }}>{graduate.university}</p>
                        <div className="flex flex-wrap gap-1.5 mb-3">
                          {graduate.skills.slice(0, 2).map((skill) => (
                            <Badge key={skill} variant="secondary" className="text-xs bg-white border border-border" style={{ color: "#333" }}>
                              {skill}
                            </Badge>
                          ))}
                          {graduate.skills.length > 2 && (
                            <Badge variant="outline" className="text-xs">+{graduate.skills.length - 2}</Badge>
                          )}
                        </div>
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs mb-3" style={{ color: "#555" }}>
                          <span className="flex items-center gap-1"><MapPin className="size-3" />{graduate.location}</span>
                          <span className="flex items-center gap-1"><Clock className="size-3" />{graduate.availability}</span>
                          <span className="flex items-center gap-1"><Briefcase className="size-3" />{graduate.experience}</span>
                        </div>
                        <div className="flex flex-wrap gap-1.5" onClick={(e) => e.preventDefault()}>
                          {graduate.portfolioUrl && (
                            <Button
                              variant="outline"
                              size="sm"
                              className="h-7 text-xs gap-1"
                              onClick={(e) => { e.stopPropagation(); window.open(graduate.portfolioUrl, "_blank") }}
                            >
                              {graduate.portfolioLabel.toLowerCase().includes("dissertation") ? <BookOpen className="size-2.5" /> : <ExternalLink className="size-2.5" />}
                              {graduate.portfolioLabel}
                            </Button>
                          )}
                          <ContactDialog
                            graduateName={graduate.name}
                            buttonClassName="h-7 text-xs"
                          />
                        </div>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

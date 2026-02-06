"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/navbar"
import { ContactDialog } from "@/components/contact-dialog"
import {
  MapPin,
  Calendar,
  Briefcase,
  Bookmark,
  GraduationCap,
} from "lucide-react"

const bookmarkedGraduates = [
  {
    id: 1,
    name: "Sarah Johnson",
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

  const handleRemoveBookmark = (id: number) => {
    // In a real app, this would remove the bookmark
    console.log("Remove bookmark:", id)
  }

  if (!userType) {
    return null
  }

  return (
    <div className="min-h-screen bg-[var(--background-app)]">
      <Navbar userType="employer" currentPage="bookmarks" />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6">
            <h1 className="text-2xl font-semibold text-foreground mb-1">Saved Candidates</h1>
            <p className="text-sm text-muted-foreground">
              Your saved candidates for quick access
            </p>
          </div>

          <div className="mb-6">
            <Badge variant="secondary" className="text-sm text-white">
              {bookmarkedGraduates.length} saved candidate{bookmarkedGraduates.length !== 1 ? "s" : ""}
            </Badge>
          </div>

          <div className="space-y-4">
            {bookmarkedGraduates.length === 0 ? (
              <Card className="p-12 text-center">
                <Bookmark className="size-12 mx-auto text-muted-foreground mb-4" />
                <p className="text-muted-foreground mb-4">No bookmarked candidates yet</p>
                <Button asChild>
                  <Link href="/dashboard">Browse Directory</Link>
                </Button>
              </Card>
            ) : (
              bookmarkedGraduates.map((graduate) => (
                <Card key={graduate.id} className="p-6 hover:shadow-md transition-shadow" style={{ backgroundColor: graduate.university.includes("Oxford") ? "#fde8e8" : "#d4edda" }}>
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="size-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">
                        {graduate.avatar}
                      </div>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="mb-3">
                        <h3 className="text-xl font-semibold text-foreground mb-1">
                          {graduate.name}
                        </h3>
                        <div className="flex items-center gap-2 text-muted-foreground mb-1">
                          <GraduationCap className="size-4" />
                          <span className="text-sm">{graduate.degree}</span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">
                          {graduate.college}, {graduate.university}
                        </p>
                        <Badge className="bg-green-800 text-white w-fit">
                          {graduate.classification}
                        </Badge>
                      </div>

                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <MapPin className="size-4" />
                          {graduate.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="size-4" />
                          Graduated {graduate.graduationYear}
                        </div>
                        <div className="flex items-center gap-1">
                          <Briefcase className="size-4" />
                          {graduate.experience} experience
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {graduate.skills.slice(0, 4).map((skill) => (
                          <Badge key={skill} variant="secondary" className="text-white">
                            {skill}
                          </Badge>
                        ))}
                        {graduate.skills.length > 4 && (
                          <Badge variant="outline">+{graduate.skills.length - 4} more</Badge>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 lg:ml-4 lg:min-w-[140px]">
                      <Button size="sm" className="w-full" asChild>
                        <Link href={`/dashboard/graduates/${graduate.id}`}>View Profile</Link>
                      </Button>
                      <ContactDialog graduateName={graduate.name} buttonClassName="w-full" />
                      <Button
                        size="sm"
                        variant="outline"
                        className="w-full"
                        onClick={() => handleRemoveBookmark(graduate.id)}
                      >
                        <Bookmark className="size-4 mr-1 fill-current" />
                        Remove
                      </Button>
                    </div>
                  </div>
                </Card>
              ))
            )}
          </div>
        </div>
      </main>
    </div>
  )
}

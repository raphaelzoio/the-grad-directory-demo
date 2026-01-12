"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { User, GraduationCap, Briefcase, Globe, Github, Linkedin, X, Plus, Save, ArrowLeft, Trash2 } from "lucide-react"
import Link from "next/link"

type Education = {
  id: number
  degree: string
  university: string
  graduationYear: string
  gpa: string
  gpaScale: string
  honors: string
}

export default function EditProfilePage() {
  const router = useRouter()
  const [userType, setUserType] = useState<string | null>(null)
  const [skills, setSkills] = useState([
    "React",
    "TypeScript",
    "Node.js",
    "Python",
    "PostgreSQL",
    "AWS",
    "Docker",
    "Git",
  ])
  const [newSkill, setNewSkill] = useState("")

  const [educations, setEducations] = useState<Education[]>([
    {
      id: 1,
      degree: "Bachelor of Science in Computer Science",
      university: "Stanford University",
      graduationYear: "2024",
      gpa: "3.9",
      gpaScale: "4.0",
      honors: "Summa Cum Laude, Dean's List all semesters",
    },
  ])

  useEffect(() => {
    if (typeof window !== "undefined") {
      const type = sessionStorage.getItem("userType")
      setUserType(type)

      if (type !== "graduate") {
        router.push("/dashboard")
      }
    }
  }, [router])

  const addSkill = () => {
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      setSkills([...skills, newSkill.trim()])
      setNewSkill("")
    }
  }

  const removeSkill = (skill: string) => {
    setSkills(skills.filter((s) => s !== skill))
  }

  const addEducation = () => {
    const newId = Math.max(...educations.map((e) => e.id), 0) + 1
    setEducations([
      ...educations,
      {
        id: newId,
        degree: "",
        university: "",
        graduationYear: "",
        gpa: "",
        gpaScale: "4.0",
        honors: "",
      },
    ])
  }

  const removeEducation = (id: number) => {
    if (educations.length > 1) {
      setEducations(educations.filter((e) => e.id !== id))
    }
  }

  const updateEducation = (id: number, field: keyof Education, value: string) => {
    setEducations(educations.map((e) => (e.id === id ? { ...e, [field]: value } : e)))
  }

  if (userType !== "graduate") {
    return null
  }

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <div className="bg-background border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/dashboard">
                  <ArrowLeft className="size-4 mr-2" />
                  Back to Dashboard
                </Link>
              </Button>
              <h1 className="text-xl font-bold">Edit Profile</h1>
            </div>
            <Button disabled>
              <Save className="size-4 mr-2" />
              Save Changes
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Personal Information */}
          <Card className="p-6">
            <div className="flex items-center gap-2 mb-6">
              <User className="size-5 text-primary" />
              <h2 className="text-xl font-bold">Personal Information</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" defaultValue="Sarah" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" defaultValue="Johnson" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" defaultValue="sarah.johnson@email.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" defaultValue="+1 (555) 123-4567" />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="location">Location</Label>
                <Input id="location" defaultValue="San Francisco, CA" />
              </div>
            </div>
          </Card>

          {/* Professional Summary */}
          <Card className="p-6">
            <div className="flex items-center gap-2 mb-6">
              <Briefcase className="size-5 text-primary" />
              <h2 className="text-xl font-bold">Professional Summary</h2>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Professional Title</Label>
                <Input id="title" defaultValue="Full-Stack Developer" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea
                  id="bio"
                  rows={5}
                  defaultValue="Passionate full-stack developer with a strong foundation in computer science and hands-on experience building scalable web applications. Experienced in modern JavaScript frameworks and cloud technologies. Eager to contribute to innovative projects and continue growing in a dynamic team environment."
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="experience">Years of Experience</Label>
                  <Input id="experience" defaultValue="2 years" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="availability">Availability</Label>
                  <Input id="availability" defaultValue="Immediate" />
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <GraduationCap className="size-5 text-primary" />
                <h2 className="text-xl font-bold">Education</h2>
              </div>
              <Button variant="outline" size="sm" onClick={addEducation}>
                <Plus className="size-4 mr-2" />
                Add another
              </Button>
            </div>
            <div className="space-y-6">
              {educations.map((edu, index) => (
                <div key={edu.id} className={`space-y-4 ${index > 0 ? "p-4 rounded-lg border bg-muted/30" : ""}`}>
                  {index > 0 && (
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-muted-foreground">Degree {index + 1}</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-destructive hover:text-destructive"
                        onClick={() => removeEducation(edu.id)}
                      >
                        <Trash2 className="size-4 mr-1" />
                        Remove
                      </Button>
                    </div>
                  )}
                  <div className="space-y-2">
                    <Label htmlFor={`degree-${edu.id}`}>Degree</Label>
                    <Input
                      id={`degree-${edu.id}`}
                      value={edu.degree}
                      onChange={(e) => updateEducation(edu.id, "degree", e.target.value)}
                      placeholder="e.g. Bachelor of Arts in History"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`university-${edu.id}`}>University</Label>
                    <Input
                      id={`university-${edu.id}`}
                      value={edu.university}
                      onChange={(e) => updateEducation(edu.id, "university", e.target.value)}
                      placeholder="e.g. University of Oxford"
                    />
                  </div>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor={`graduationYear-${edu.id}`}>Graduation Year</Label>
                      <Input
                        id={`graduationYear-${edu.id}`}
                        type="number"
                        value={edu.graduationYear}
                        onChange={(e) => updateEducation(edu.id, "graduationYear", e.target.value)}
                        placeholder="2024"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor={`gpa-${edu.id}`}>GPA</Label>
                      <Input
                        id={`gpa-${edu.id}`}
                        value={edu.gpa}
                        onChange={(e) => updateEducation(edu.id, "gpa", e.target.value)}
                        placeholder="3.9"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor={`gpaScale-${edu.id}`}>GPA Scale</Label>
                      <Input
                        id={`gpaScale-${edu.id}`}
                        value={edu.gpaScale}
                        onChange={(e) => updateEducation(edu.id, "gpaScale", e.target.value)}
                        placeholder="4.0"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`honors-${edu.id}`}>Honours & Awards</Label>
                    <Input
                      id={`honors-${edu.id}`}
                      value={edu.honors}
                      onChange={(e) => updateEducation(edu.id, "honors", e.target.value)}
                      placeholder="e.g. First Class Honours, Dean's List"
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Skills */}
          <Card className="p-6">
            <div className="flex items-center gap-2 mb-6">
              <Briefcase className="size-5 text-primary" />
              <h2 className="text-xl font-bold">Technical Skills</h2>
            </div>
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="pl-3 pr-1 py-1.5">
                    {skill}
                    <button
                      onClick={() => removeSkill(skill)}
                      className="ml-2 hover:bg-muted rounded-full p-0.5 transition-colors"
                    >
                      <X className="size-3" />
                    </button>
                  </Badge>
                ))}
              </div>
              <div className="flex gap-2">
                <Input
                  placeholder="Add a skill..."
                  value={newSkill}
                  onChange={(e) => setNewSkill(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault()
                      addSkill()
                    }
                  }}
                />
                <Button onClick={addSkill} variant="outline" size="icon">
                  <Plus className="size-4" />
                </Button>
              </div>
            </div>
          </Card>

          {/* Work Experience */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Briefcase className="size-5 text-primary" />
                <h2 className="text-xl font-bold">Work Experience</h2>
              </div>
              <Button variant="outline" size="sm" disabled>
                <Plus className="size-4 mr-2" />
                Add Experience
              </Button>
            </div>
            <div className="space-y-6">
              {/* Experience 1 */}
              <div className="p-4 rounded-lg border bg-muted/30 space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="jobTitle1">Job Title</Label>
                  <Input id="jobTitle1" defaultValue="Software Engineering Intern" />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="company1">Company</Label>
                    <Input id="company1" defaultValue="Tech Startup Inc." />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="duration1">Duration</Label>
                    <Input id="duration1" defaultValue="Summer 2023" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description1">Description</Label>
                  <Textarea
                    id="description1"
                    rows={3}
                    defaultValue="Developed and maintained React-based web applications, implemented RESTful APIs using Node.js, and collaborated with cross-functional teams on feature development."
                  />
                </div>
                <Button variant="ghost" size="sm" className="text-destructive" disabled>
                  Remove
                </Button>
              </div>

              {/* Experience 2 */}
              <div className="p-4 rounded-lg border bg-muted/30 space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="jobTitle2">Job Title</Label>
                  <Input id="jobTitle2" defaultValue="Full-Stack Developer" />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="company2">Company</Label>
                    <Input id="company2" defaultValue="University Innovation Lab" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="duration2">Duration</Label>
                    <Input id="duration2" defaultValue="2022 - 2024" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description2">Description</Label>
                  <Textarea
                    id="description2"
                    rows={3}
                    defaultValue="Built internal tools and dashboards for research projects, optimised database queries reducing load time by 40%, and mentored junior developers."
                  />
                </div>
                <Button variant="ghost" size="sm" className="text-destructive" disabled>
                  Remove
                </Button>
              </div>
            </div>
          </Card>

          {/* Projects */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Briefcase className="size-5 text-primary" />
                <h2 className="text-xl font-bold">Featured Projects</h2>
              </div>
              <Button variant="outline" size="sm" disabled>
                <Plus className="size-4 mr-2" />
                Add Project
              </Button>
            </div>
            <div className="space-y-6">
              {/* Project 1 */}
              <div className="p-4 rounded-lg border bg-muted/30 space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="projectName1">Project Name</Label>
                  <Input id="projectName1" defaultValue="E-commerce Platform" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="projectDesc1">Description</Label>
                  <Textarea
                    id="projectDesc1"
                    rows={3}
                    defaultValue="Full-stack e-commerce application with payment integration, inventory management, and real-time order tracking."
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="projectTech1">Technologies (comma-separated)</Label>
                  <Input id="projectTech1" defaultValue="React, Node.js, PostgreSQL, Stripe" />
                </div>
                <Button variant="ghost" size="sm" className="text-destructive" disabled>
                  Remove
                </Button>
              </div>

              {/* Project 2 */}
              <div className="p-4 rounded-lg border bg-muted/30 space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="projectName2">Project Name</Label>
                  <Input id="projectName2" defaultValue="Task Management App" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="projectDesc2">Description</Label>
                  <Textarea
                    id="projectDesc2"
                    rows={3}
                    defaultValue="Collaborative task management tool with real-time updates, team collaboration features, and analytics dashboard."
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="projectTech2">Technologies (comma-separated)</Label>
                  <Input id="projectTech2" defaultValue="TypeScript, Next.js, Supabase, Tailwind" />
                </div>
                <Button variant="ghost" size="sm" className="text-destructive" disabled>
                  Remove
                </Button>
              </div>
            </div>
          </Card>

          {/* Certifications */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <GraduationCap className="size-5 text-primary" />
                <h2 className="text-xl font-bold">Certifications</h2>
              </div>
              <Button variant="outline" size="sm" disabled>
                <Plus className="size-4 mr-2" />
                Add Certification
              </Button>
            </div>
            <div className="space-y-3">
              <Input defaultValue="AWS Certified Developer - Associate" />
              <Input defaultValue="MongoDB Certified Developer" />
              <Input defaultValue="Google Cloud Professional" />
            </div>
          </Card>

          {/* Languages */}
          <Card className="p-6">
            <div className="flex items-center gap-2 mb-6">
              <Globe className="size-5 text-primary" />
              <h2 className="text-xl font-bold">Languages</h2>
            </div>
            <div className="space-y-3">
              <div className="grid md:grid-cols-2 gap-4">
                <Input defaultValue="English" placeholder="Language" />
                <Input defaultValue="Native" placeholder="Proficiency" />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <Input defaultValue="Spanish" placeholder="Language" />
                <Input defaultValue="Conversational" placeholder="Proficiency" />
              </div>
              <Button variant="outline" size="sm" disabled>
                <Plus className="size-4 mr-2" />
                Add Language
              </Button>
            </div>
          </Card>

          {/* Social Links */}
          <Card className="p-6">
            <div className="flex items-center gap-2 mb-6">
              <Globe className="size-5 text-primary" />
              <h2 className="text-xl font-bold">Online Presence</h2>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="website" className="flex items-center gap-2">
                  <Globe className="size-4" />
                  Website
                </Label>
                <Input id="website" defaultValue="sarahjohnson.dev" placeholder="your-website.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="github" className="flex items-center gap-2">
                  <Github className="size-4" />
                  GitHub
                </Label>
                <Input id="github" defaultValue="github.com/sarahjohnson" placeholder="github.com/username" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="linkedin" className="flex items-center gap-2">
                  <Linkedin className="size-4" />
                  LinkedIn
                </Label>
                <Input
                  id="linkedin"
                  defaultValue="linkedin.com/in/sarahjohnson"
                  placeholder="linkedin.com/in/username"
                />
              </div>
            </div>
          </Card>

          {/* Interests */}
          <Card className="p-6">
            <div className="flex items-center gap-2 mb-6">
              <User className="size-5 text-primary" />
              <h2 className="text-xl font-bold">Interests</h2>
            </div>
            <Textarea
              rows={3}
              defaultValue="Open Source Contribution, UI/UX Design, Tech Blogging, Hackathons"
              placeholder="List your interests (comma-separated)"
            />
          </Card>

          {/* Save Button */}
          <div className="flex justify-end gap-3 pt-4">
            <Button variant="outline" asChild>
              <Link href="/dashboard">Cancel</Link>
            </Button>
            <Button disabled>
              <Save className="size-4 mr-2" />
              Save All Changes
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { UKCityAutocomplete } from "@/components/uk-city-autocomplete"
import { Navbar } from "@/components/navbar"
import { User, GraduationCap, Briefcase, Globe, Github, Linkedin, X, Plus, Save, Trash2 } from "lucide-react"
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
  const [location, setLocation] = useState("london")
  const [skills, setSkills] = useState([
    "Python",
    "Data Analysis",
    "Research",
    "Critical Thinking",
    "Academic Writing",
    "Public Speaking",
    "Microsoft Office",
    "LaTeX",
  ])
  const [newSkill, setNewSkill] = useState("")

  const [educations, setEducations] = useState<Education[]>([
    {
      id: 1,
      degree: "BA (Hons) Philosophy, Politics and Economics",
      university: "University of Oxford",
      graduationYear: "2024",
      gpa: "First Class",
      gpaScale: "Honours",
      honors: "Collection Prize, JCR Academic Scholar",
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
      <Navbar userType="graduate" currentPage="profile" />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Page Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Edit Profile</h1>
              <p className="text-muted-foreground">Update your profile information to help employers find you</p>
            </div>
            <Button disabled>
              <Save className="size-4 mr-2" />
              Save Changes
            </Button>
          </div>
          {/* Personal Information */}
          <Card className="p-6">
            <div className="flex items-center gap-2 mb-6">
              <User className="size-5 text-primary" />
              <h2 className="text-xl font-bold">Personal Information</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" defaultValue="Eleanor" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" defaultValue="Whitmore" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" defaultValue="eleanor.whitmore@ox.ac.uk" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" defaultValue="+44 7700 900123" />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="location">Location</Label>
                <UKCityAutocomplete
                  id="location"
                  value={location}
                  onValueChange={setLocation}
                  placeholder="Select your location"
                />
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
                <Input id="title" defaultValue="Policy & Strategy Analyst" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea
                  id="bio"
                  rows={5}
                  defaultValue="Oxford PPE graduate with a keen interest in public policy and economic strategy. Experienced in research and analysis through internships at leading think tanks and consultancies. Strong analytical mindset combined with excellent communication skills developed through debating and student journalism. Seeking opportunities in consulting, policy research, or corporate strategy."
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="experience">Years of Experience</Label>
                  <Input id="experience" defaultValue="1 year (internships)" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="availability">Availability</Label>
                  <Input id="availability" defaultValue="September 2024" />
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
                  <Input id="jobTitle1" defaultValue="Policy Research Intern" />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="company1">Company</Label>
                    <Input id="company1" defaultValue="Institute for Government" />
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
                    defaultValue="Conducted research on public sector reform initiatives, drafted policy briefings for senior researchers, and contributed to a published report on civil service modernisation."
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
                  <Input id="jobTitle2" defaultValue="Strategy Consulting Intern" />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="company2">Company</Label>
                    <Input id="company2" defaultValue="McKinsey & Company" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="duration2">Duration</Label>
                    <Input id="duration2" defaultValue="Summer 2022" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description2">Description</Label>
                  <Textarea
                    id="description2"
                    rows={3}
                    defaultValue="Supported client engagement in the financial services sector, built financial models and market analysis presentations, and participated in client workshops and stakeholder interviews."
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
                  <Input id="projectName1" defaultValue="Undergraduate Dissertation" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="projectDesc1">Description</Label>
                  <Textarea
                    id="projectDesc1"
                    rows={3}
                    defaultValue="Extended essay examining the impact of behavioural economics on UK pension policy reform. Awarded distinction and nominated for the Gibbs Prize."
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="projectTech1">Skills Demonstrated</Label>
                  <Input id="projectTech1" defaultValue="Research, Statistical Analysis, Policy Analysis, Academic Writing" />
                </div>
                <Button variant="ghost" size="sm" className="text-destructive" disabled>
                  Remove
                </Button>
              </div>

              {/* Project 2 */}
              <div className="p-4 rounded-lg border bg-muted/30 space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="projectName2">Project Name</Label>
                  <Input id="projectName2" defaultValue="Oxford Union Debate Series" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="projectDesc2">Description</Label>
                  <Textarea
                    id="projectDesc2"
                    rows={3}
                    defaultValue="Organised and chaired a term-long debate series on economic inequality, featuring speakers from government, academia, and industry. Managed a team of 8 volunteers."
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="projectTech2">Skills Demonstrated</Label>
                  <Input id="projectTech2" defaultValue="Event Management, Leadership, Public Speaking, Stakeholder Engagement" />
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
              <Input defaultValue="Bloomberg Market Concepts Certificate" />
              <Input defaultValue="CFA Level I Candidate" />
              <Input defaultValue="Excel Financial Modelling (Oxford Careers Service)" />
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
                <Input defaultValue="French" placeholder="Language" />
                <Input defaultValue="Professional Working" placeholder="Proficiency" />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <Input defaultValue="German" placeholder="Language" />
                <Input defaultValue="Intermediate" placeholder="Proficiency" />
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
                  Website / Portfolio
                </Label>
                <Input id="website" defaultValue="eleanorwhitmore.com" placeholder="your-website.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="github" className="flex items-center gap-2">
                  <Github className="size-4" />
                  GitHub
                </Label>
                <Input id="github" placeholder="github.com/username" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="linkedin" className="flex items-center gap-2">
                  <Linkedin className="size-4" />
                  LinkedIn
                </Label>
                <Input
                  id="linkedin"
                  defaultValue="linkedin.com/in/eleanorwhitmore"
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
              defaultValue="Debating, Economic History, Current Affairs, Rowing, Classical Music, Travel"
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

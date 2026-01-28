"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { UKCityAutocomplete } from "@/components/uk-city-autocomplete"
import { Navbar } from "@/components/navbar"
import { useEffect, useState } from "react"

export default function PostJobPage() {
  const router = useRouter()
  const [userType, setUserType] = useState<"employer" | "graduate" | null>(null)
  const [jobLocation, setJobLocation] = useState("")

  useEffect(() => {
    if (typeof window !== "undefined") {
      const type = sessionStorage.getItem("userType") as "employer" | "graduate" | null
      if (!type) {
        router.push("/")
      } else if (type === "graduate") {
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
      {/* Header */}
      <Navbar userType="employer" currentPage="your-jobs" />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3 text-balance">Post a Job</h1>
            <p className="text-muted-foreground text-pretty">
              Fill out the form below to post your job opening and reach thousands of qualified candidates
            </p>
          </div>

          <Card className="p-8">
            <form className="space-y-6">
              {/* Job Details Section */}
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-foreground">Job Details</h2>

                <div className="space-y-2">
                  <Label htmlFor="title">Job Title *</Label>
                  <Input id="title" placeholder="e.g. Senior Frontend Developer" className="w-full" />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="type">Employment Type *</Label>
                    <select
                      id="type"
                      className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground text-sm"
                    >
                      <option value="">Select type</option>
                      <option value="full-time">Full-time</option>
                      <option value="part-time">Part-time</option>
                      <option value="contract">Contract</option>
                      <option value="internship">Internship</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location">Location *</Label>
                    <UKCityAutocomplete
                      id="location"
                      value={jobLocation}
                      onValueChange={setJobLocation}
                      placeholder="Select location or Remote"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="salary-min">Salary Range (Optional)</Label>
                    <Input id="salary-min" type="number" placeholder="Min (e.g. 100000)" className="w-full" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="salary-max">&nbsp;</Label>
                    <Input id="salary-max" type="number" placeholder="Max (e.g. 150000)" className="w-full" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tags">Skills & Tags *</Label>
                  <Input id="tags" placeholder="e.g. React, TypeScript, Node.js (comma separated)" className="w-full" />
                  <p className="text-xs text-muted-foreground">
                    Add relevant skills and technologies, separated by commas
                  </p>
                </div>
              </div>

              {/* Job Description Section */}
              <div className="space-y-6 pt-6 border-t border-border">
                <h2 className="text-xl font-semibold text-foreground">Job Description</h2>

                <div className="space-y-2">
                  <Label htmlFor="description">About the Role *</Label>
                  <Textarea
                    id="description"
                    placeholder="Describe the role and what the candidate will be doing..."
                    className="min-h-32 resize-none"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="responsibilities">Key Responsibilities *</Label>
                  <Textarea
                    id="responsibilities"
                    placeholder="List the main responsibilities (one per line)..."
                    className="min-h-32 resize-none"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="requirements">Requirements *</Label>
                  <Textarea
                    id="requirements"
                    placeholder="List the required qualifications and experience (one per line)..."
                    className="min-h-32 resize-none"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="benefits">Benefits (Optional)</Label>
                  <Textarea
                    id="benefits"
                    placeholder="List the benefits and perks (one per line)..."
                    className="min-h-24 resize-none"
                  />
                </div>
              </div>

              {/* Company Information Section */}
              <div className="space-y-6 pt-6 border-t border-border">
                <h2 className="text-xl font-semibold text-foreground">Company Information</h2>

                <div className="space-y-2">
                  <Label htmlFor="company">Company Name *</Label>
                  <Input id="company" placeholder="Your company name" className="w-full" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company-description">Company Description *</Label>
                  <Textarea
                    id="company-description"
                    placeholder="Tell candidates about your company..."
                    className="min-h-24 resize-none"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="company-size">Company Size *</Label>
                    <select
                      id="company-size"
                      className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground text-sm"
                    >
                      <option value="">Select size</option>
                      <option value="1-10">1-10 employees</option>
                      <option value="11-50">11-50 employees</option>
                      <option value="51-200">51-200 employees</option>
                      <option value="201-500">201-500 employees</option>
                      <option value="501+">501+ employees</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="industry">Industry *</Label>
                    <Input id="industry" placeholder="e.g. Technology, Finance" className="w-full" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Contact Email *</Label>
                  <Input id="email" type="email" placeholder="jobs@company.com" className="w-full" />
                  <p className="text-xs text-muted-foreground">Where applications will be sent</p>
                </div>
              </div>

              {/* Submit Section */}
              <div className="pt-6 border-t border-border">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button type="submit" size="lg" className="flex-1">
                    Publish Job Posting
                  </Button>
                  <Button type="button" variant="outline" size="lg" className="flex-1 bg-transparent" asChild>
                    <Link href="/dashboard">Cancel</Link>
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground text-center mt-4">
                  By posting, you agree to our Terms of Service and Privacy Policy
                </p>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </div>
  )
}

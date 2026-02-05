import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, MapPin, Clock, DollarSign, Users, Building2, ArrowLeft, Share2, Bookmark } from "lucide-react"

// Mock job data
const jobData = {
  id: 1,
  title: "Senior Frontend Developer",
  company: "TechCorp Inc.",
  location: "San Francisco, CA",
  type: "Full-time",
  salary: "$120k - $180k",
  tags: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
  postedDays: 2,
  applicants: 24,
  description: `We are looking for an experienced Senior Frontend Developer to join our growing engineering team. You will be responsible for building and maintaining high-quality web applications using modern technologies.`,
  responsibilities: [
    "Build scalable and performant web applications using React and Next.js",
    "Collaborate with designers and backend engineers to deliver exceptional user experiences",
    "Write clean, maintainable, and well-documented code",
    "Mentor junior developers and contribute to team growth",
    "Participate in code reviews and technical discussions",
  ],
  requirements: [
    "5+ years of experience with React and modern JavaScript",
    "Strong understanding of TypeScript and Next.js",
    "Experience with state management (Redux, Zustand, or similar)",
    "Proficiency with CSS frameworks and responsive design",
    "Excellent problem-solving and communication skills",
    "Bachelor's degree in Computer Science or equivalent experience",
  ],
  benefits: [
    "Competitive salary and equity package",
    "Comprehensive health, dental, and vision insurance",
    "Unlimited PTO and flexible work schedule",
    "401(k) with company match",
    "Professional development budget",
    "Modern office in downtown San Francisco",
  ],
  companyInfo: {
    size: "50-200 employees",
    industry: "Technology",
    founded: "2018",
    description:
      "TechCorp Inc. is a fast-growing technology company building innovative solutions for modern businesses.",
  },
}

export default function JobDetailPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="size-8 rounded-lg bg-primary flex items-center justify-center">
              <Briefcase className="size-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-semibold text-foreground">The Graduate Directory</span>
          </Link>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" disabled>
              Sign In
            </Button>
            <Button size="sm" asChild>
              <Link href="/post-job">Post a Job</Link>
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"
        >
          <ArrowLeft className="size-4" />
          Back to jobs
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="p-8">
              <div className="space-y-6">
                <div>
                  <h1 className="text-3xl font-bold text-foreground mb-2 text-balance">{jobData.title}</h1>
                  <p className="text-xl text-muted-foreground">{jobData.company}</p>
                </div>

                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="size-4" />
                    <span>{jobData.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Briefcase className="size-4" />
                    <span>{jobData.type}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <DollarSign className="size-4" />
                    <span>{jobData.salary}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="size-4" />
                    <span>Posted {jobData.postedDays} days ago</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users className="size-4" />
                    <span>{jobData.applicants} applicants</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {jobData.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-white">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-3">About the Role</h2>
                  <p className="text-muted-foreground leading-relaxed">{jobData.description}</p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-3">Responsibilities</h2>
                  <ul className="space-y-2">
                    {jobData.responsibilities.map((item, index) => (
                      <li key={index} className="flex gap-3 text-muted-foreground">
                        <span className="text-primary mt-1.5">•</span>
                        <span className="flex-1 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-3">Requirements</h2>
                  <ul className="space-y-2">
                    {jobData.requirements.map((item, index) => (
                      <li key={index} className="flex gap-3 text-muted-foreground">
                        <span className="text-primary mt-1.5">•</span>
                        <span className="flex-1 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-3">Benefits</h2>
                  <ul className="space-y-2">
                    {jobData.benefits.map((item, index) => (
                      <li key={index} className="flex gap-3 text-muted-foreground">
                        <span className="text-primary mt-1.5">•</span>
                        <span className="flex-1 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <div className="flex items-start gap-4">
                <div className="size-16 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Building2 className="size-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-foreground mb-2">About {jobData.company}</h2>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{jobData.companyInfo.description}</p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Company Size</p>
                      <p className="font-medium text-foreground">{jobData.companyInfo.size}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Industry</p>
                      <p className="font-medium text-foreground">{jobData.companyInfo.industry}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Founded</p>
                      <p className="font-medium text-foreground">{jobData.companyInfo.founded}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            <Card className="p-6 sticky top-24">
              <div className="space-y-4">
                <Button size="lg" className="w-full" disabled>
                  Apply Now
                </Button>
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline" size="sm" className="w-full bg-transparent" disabled>
                    <Bookmark className="size-4 mr-2" />
                    Save
                  </Button>
                  <Button variant="outline" size="sm" className="w-full bg-transparent" disabled>
                    <Share2 className="size-4 mr-2" />
                    Share
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold text-foreground mb-4">Similar Jobs</h3>
              <div className="space-y-4">
                {[
                  { title: "Frontend Engineer", company: "StartupXYZ", location: "Remote" },
                  { title: "React Developer", company: "WebCo", location: "Austin, TX" },
                  { title: "Full Stack Developer", company: "CodeLabs", location: "Seattle, WA" },
                ].map((job, index) => (
                  <div key={index} className="block p-4 rounded-lg border border-border bg-muted/30 cursor-default">
                    <h4 className="font-medium text-foreground mb-1 text-sm">{job.title}</h4>
                    <p className="text-xs text-muted-foreground mb-2">{job.company}</p>
                    <p className="text-xs text-muted-foreground flex items-center gap-1">
                      <MapPin className="size-3" />
                      {job.location}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

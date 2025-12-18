"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, MapPin, Briefcase, Clock, TrendingUp } from "lucide-react"

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
  { name: "Engineering", count: 234, icon: Briefcase },
  { name: "Design", count: 89, icon: TrendingUp },
  { name: "Product", count: 156, icon: Briefcase },
  { name: "Marketing", count: 78, icon: TrendingUp },
]

export default function HomePage() {
  const router = useRouter()

  const handleLogin = (userType: "employer" | "graduate") => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem("userType", userType)
    }
    router.push("/dashboard")
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2" onClick={scrollToTop}>
            <div className="size-8 rounded-lg bg-primary flex items-center justify-center">
              <Briefcase className="size-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-semibold text-foreground">The Grad Directory</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
              onClick={scrollToTop}
            >
              Find Jobs
            </Link>
            <span className="text-sm font-medium text-muted-foreground cursor-default">Companies</span>
            <span className="text-sm font-medium text-muted-foreground cursor-default">About</span>
          </nav>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" onClick={() => handleLogin("graduate")}>
              Sign In as Graduate
            </Button>
            <Button size="sm" onClick={() => handleLogin("employer")}>
              Sign In as Employer
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
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

      {/* Categories */}
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

      {/* Featured Jobs */}
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

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <Card className="p-8 md:p-12 bg-primary text-primary-foreground text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Ready to Hire Top Talent?</h2>
            <p className="text-lg mb-6 text-primary-foreground/90 text-pretty max-w-2xl mx-auto">
              Post your job opening and reach thousands of qualified candidates actively looking for their next
              opportunity
            </p>
            <Button size="lg" variant="secondary" asChild onClick={() => handleLogin("employer")}>
              <Link href="/post-job" onClick={scrollToTop}>
                Post a Job for Free
              </Link>
            </Button>
          </Card>
        </div>
      </section>

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

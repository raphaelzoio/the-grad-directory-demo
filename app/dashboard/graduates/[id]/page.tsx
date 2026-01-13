import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  MapPin,
  Mail,
  Phone,
  Calendar,
  Briefcase,
  GraduationCap,
  Award,
  Download,
  MessageSquare,
  Star,
  Github,
  Linkedin,
  Globe,
  Code2,
} from "lucide-react"
import Link from "next/link"

const graduateProfiles = {
  "1": {
    id: 1,
    name: "Sarah Johnson",
    email: "sarah.johnson@email.com",
    phone: "+1 (555) 123-4567",
    degree: "Computer Science, BS",
    university: "Stanford University",
    graduationYear: 2024,
    gpa: "3.9/4.0",
    location: "San Francisco, CA",
    skills: ["React", "TypeScript", "Node.js", "Python", "PostgreSQL", "AWS", "Docker", "Git"],
    experience: "2 years",
    availability: "Immediate",
    avatar: "SJ",
    bio: "Passionate full-stack developer with a strong foundation in computer science and hands-on experience building scalable web applications. Experienced in modern JavaScript frameworks and cloud technologies. Eager to contribute to innovative projects and continue growing in a dynamic team environment.",
    website: "sarahjohnson.dev",
    github: "github.com/sarahjohnson",
    linkedin: "linkedin.com/in/sarahjohnson",
    workExperience: [
      {
        title: "Software Engineering Intern",
        company: "Tech Startup Inc.",
        duration: "Summer 2023",
        description:
          "Developed and maintained React-based web applications, implemented RESTful APIs using Node.js, and collaborated with cross-functional teams on feature development.",
      },
      {
        title: "Full-Stack Developer",
        company: "University Innovation Lab",
        duration: "2022 - 2024",
        description:
          "Built internal tools and dashboards for research projects, optimized database queries reducing load time by 40%, and mentored junior developers.",
      },
    ],
    projects: [
      {
        name: "E-commerce Platform",
        description:
          "Full-stack e-commerce application with payment integration, inventory management, and real-time order tracking.",
        tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
      },
      {
        name: "Task Management App",
        description:
          "Collaborative task management tool with real-time updates, team collaboration features, and analytics dashboard.",
        tech: ["TypeScript", "Next.js", "Supabase", "Tailwind"],
      },
    ],
    education: [
      {
        degree: "Bachelor of Science in Computer Science",
        school: "Stanford University",
        year: "2020 - 2024",
        honors: "Summa Cum Laude, Dean's List all semesters",
      },
    ],
    certifications: ["AWS Certified Developer - Associate", "MongoDB Certified Developer", "Google Cloud Professional"],
    languages: ["English (Native)", "Spanish (Conversational)"],
    interests: ["Open Source Contribution", "UI/UX Design", "Tech Blogging", "Hackathons"],
  },
}

export default function GraduateProfilePage({ params }: { params: { id: string } }) {
  const graduate = graduateProfiles[0]

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <div className="bg-background border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button variant="ghost" asChild>
              <Link href="/dashboard">← Back to Search</Link>
            </Button>
            <div className="flex items-center gap-2">
              <Badge variant="secondary">Active</Badge>
              <Badge className="bg-green-500 text-white">{graduate.availability} Availability</Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Profile Card */}
            <Card className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="size-24 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-3xl mb-4">
                  {graduate.avatar}
                </div>
                <h1 className="text-2xl font-bold mb-1">{graduate.name}</h1>
                <p className="text-muted-foreground mb-4">{graduate.degree}</p>
                <div className="flex gap-2 mb-6">
                  <Button size="sm" className="flex-1" disabled>
                    <MessageSquare className="size-4 mr-2" />
                    Contact
                  </Button>
                  <Button size="sm" variant="outline" disabled>
                    <Star className="size-4" />
                  </Button>
                </div>
                <Button variant="outline" className="w-full bg-transparent" disabled>
                  <Download className="size-4 mr-2" />
                  Download Resume
                </Button>
              </div>

              <div className="mt-6 pt-6 border-t space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <Mail className="size-4 text-muted-foreground shrink-0" />
                  <span className="text-muted-foreground break-all">{graduate.email}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Phone className="size-4 text-muted-foreground shrink-0" />
                  <span className="text-muted-foreground">{graduate.phone}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <MapPin className="size-4 text-muted-foreground shrink-0" />
                  <span className="text-muted-foreground">{graduate.location}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Calendar className="size-4 text-muted-foreground shrink-0" />
                  <span className="text-muted-foreground">Graduated {graduate.graduationYear}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Briefcase className="size-4 text-muted-foreground shrink-0" />
                  <span className="text-muted-foreground">{graduate.experience} Experience</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t">
                <h3 className="font-semibold mb-3 text-sm">Online Presence</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground cursor-default">
                    <Globe className="size-4" />
                    <span>{graduate.website}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground cursor-default">
                    <Github className="size-4" />
                    <span>{graduate.github}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground cursor-default">
                    <Linkedin className="size-4" />
                    <span>{graduate.linkedin}</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Skills */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Code2 className="size-5" />
                Technical Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {graduate.skills.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>

            {/* Languages */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Languages</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {graduate.languages.map((lang) => (
                  <li key={lang}>• {lang}</li>
                ))}
              </ul>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* About */}
            <Card className="p-6">
              <h2 className="text-xl font-bold mb-4">About</h2>
              <p className="text-muted-foreground leading-relaxed">{graduate.bio}</p>
            </Card>

            {/* Work Experience */}
            <Card className="p-6">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Briefcase className="size-5" />
                Work Experience
              </h2>
              <div className="space-y-6">
                {graduate.workExperience.map((job, index) => (
                  <div
                    key={index}
                    className="relative pl-6 before:absolute before:left-0 before:top-2 before:size-3 before:rounded-full before:bg-primary"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-semibold">{job.title}</h3>
                        <p className="text-sm text-muted-foreground">{job.company}</p>
                      </div>
                      <Badge variant="outline">{job.duration}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{job.description}</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Projects */}
            <Card className="p-6">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Code2 className="size-5" />
                Featured Projects
              </h2>
              <div className="grid gap-4">
                {graduate.projects.map((project, index) => (
                  <div key={index} className="p-4 rounded-lg border bg-muted/30">
                    <h3 className="font-semibold mb-2">{project.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Education */}
            <Card className="p-6">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <GraduationCap className="size-5" />
                Education
              </h2>
              {graduate.education.map((edu, index) => (
                <div key={index}>
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-semibold">{edu.degree}</h3>
                      <p className="text-sm text-muted-foreground">{edu.school}</p>
                      <p className="text-sm text-muted-foreground mt-1">GPA: {graduate.gpa}</p>
                    </div>
                    <Badge variant="outline">{edu.year}</Badge>
                  </div>
                  <p className="text-sm text-primary mt-2">{edu.honors}</p>
                </div>
              ))}
            </Card>

            {/* Certifications */}
            <Card className="p-6">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Award className="size-5" />
                Certifications
              </h2>
              <ul className="space-y-2">
                {graduate.certifications.map((cert) => (
                  <li key={cert} className="flex items-center gap-2 text-sm">
                    <div className="size-2 rounded-full bg-primary shrink-0" />
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Interests */}
            <Card className="p-6">
              <h2 className="text-xl font-bold mb-4">Interests</h2>
              <div className="flex flex-wrap gap-2">
                {graduate.interests.map((interest) => (
                  <Badge key={interest} variant="outline">
                    {interest}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

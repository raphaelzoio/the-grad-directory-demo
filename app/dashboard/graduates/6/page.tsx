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
  Linkedin,
  Github,
  Code,
  Database,
} from "lucide-react"
import Link from "next/link"

const alexProfile = {
  id: 6,
  name: "Alex Thompson",
  email: "alex.thompson@ucl.ac.uk",
  phone: "+44 7700 678901",
  degree: "Information Systems, BSc",
  university: "University College London",
  department: "Department of Computer Science",
  graduationYear: 2023,
  classification: "First Class Honours",
  location: "Bristol, UK",
  skills: ["JavaScript", "React", "GraphQL", "MongoDB", "Node.js", "PostgreSQL"],
  experience: "3 years",
  availability: "2 weeks",
  avatar: "AT",
  bio: "First Class Information Systems graduate from UCL with three years of full-stack development experience. Specialising in modern JavaScript ecosystems and building scalable web applications. Strong interest in startup environments and bringing products from concept to launch. Experienced in working with cross-functional teams and leading technical projects.",
  linkedin: "linkedin.com/in/alexthompsondev",
  github: "github.com/athompson-dev",
  workExperience: [
    {
      title: "Full-Stack Developer",
      company: "Deliveroo",
      duration: "2022 - 2023",
      description:
        "Built and maintained features for the restaurant partner portal. Implemented real-time order tracking using WebSockets. Led migration of legacy jQuery code to React, improving performance by 60%.",
    },
    {
      title: "Software Developer",
      company: "Just Eat Takeaway",
      duration: "2021 - 2022",
      description:
        "Developed GraphQL APIs for the mobile application. Implemented search functionality using Elasticsearch. Worked in an agile team delivering fortnightly releases.",
    },
    {
      title: "Junior Developer",
      company: "TechHub Bristol",
      duration: "2020 - 2021",
      description:
        "Built MVPs for early-stage startups in the accelerator programme. Worked with 5 different startups across fintech, healthtech, and edtech sectors. Developed skills in rapid prototyping and user feedback integration.",
    },
  ],
  uclModules: [
    {
      name: "Web Technologies",
      grade: "First (80%)",
      description: "Modern web development including HTML5, CSS3, JavaScript, and frameworks like React and Vue.",
    },
    {
      name: "Database Systems",
      grade: "First (78%)",
      description: "Relational and NoSQL databases, query optimisation, and database design principles.",
    },
    {
      name: "Software Engineering",
      grade: "First (82%)",
      description: "Agile methodologies, version control, testing, and continuous integration practices.",
    },
    {
      name: "Human-Computer Interaction",
      grade: "First (75%)",
      description: "User-centred design, usability evaluation, and interface design principles.",
    },
    {
      name: "Information Security",
      grade: "First (74%)",
      description: "Web security, authentication, encryption, and secure coding practices.",
    },
    {
      name: "Data Analytics",
      grade: "Merit (68%)",
      description: "Statistical analysis, data visualisation, and business intelligence tools.",
    },
    {
      name: "Systems Analysis and Design",
      grade: "First (76%)",
      description: "Requirements gathering, system modelling, and enterprise architecture.",
    },
  ],
  projects: [
    {
      name: "Open-Source Booking Platform",
      description: "Full-stack booking system for small businesses. 50+ GitHub stars and used by 20+ companies. Featured on Product Hunt.",
      technologies: ["Next.js", "GraphQL", "PostgreSQL", "Stripe"],
    },
    {
      name: "Real-Time Collaboration Tool",
      description: "Final year project building a collaborative document editor with live cursors and commenting. Achieved First with distinction.",
      technologies: ["React", "WebSocket", "MongoDB", "Redis"],
    },
    {
      name: "Developer Productivity CLI",
      description: "Command-line tool for automating common development tasks. Published on npm with 1,000+ weekly downloads.",
      technologies: ["Node.js", "TypeScript", "CLI"],
    },
  ],
  education: [
    {
      degree: "Bachelor of Science in Information Systems",
      school: "University College London",
      year: "2019 - 2023",
      honors: "First Class Honours, Best Final Year Project",
    },
    {
      degree: "A-Levels",
      school: "Bristol Grammar School",
      year: "2017 - 2019",
      honors: "A*A*A in Computer Science, Mathematics, Business Studies",
    },
  ],
  certifications: [
    "AWS Certified Developer Associate",
    "MongoDB Certified Developer",
    "Meta Front-End Developer Professional Certificate",
    "GraphQL Professional Certificate",
  ],
  awards: [
    "UCL Best Final Year Project 2023",
    "Deliveroo Hackathon Winner 2022",
    "Bristol Tech Festival Young Developer Award",
    "GitHub Arctic Code Vault Contributor",
  ],
  languages: ["English (Native)", "German (Intermediate)"],
  interests: ["Full-Stack Development", "Startups", "Open Source", "Developer Tools"],
}

export default function AlexThompsonProfile() {
  const graduate = alexProfile

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
              <Badge className="bg-amber-500 text-white">{graduate.availability} Availability</Badge>
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
                <p className="text-muted-foreground mb-1">{graduate.degree}</p>
                <p className="text-sm text-muted-foreground mb-4">{graduate.department}, {graduate.university}</p>
                <Badge className="bg-amber-500 text-white mb-4">{graduate.classification}</Badge>
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
                  Download CV
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
                    <Linkedin className="size-4" />
                    <span>{graduate.linkedin}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground cursor-default">
                    <Github className="size-4" />
                    <span>{graduate.github}</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Skills */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Code className="size-5" />
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

            {/* Awards */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Award className="size-5" />
                Awards & Recognition
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {graduate.awards.map((award) => (
                  <li key={award}>• {award}</li>
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

            {/* UCL Modules */}
            <Card className="p-6">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Database className="size-5" />
                UCL Information Systems Modules
              </h2>
              <div className="grid gap-4">
                {graduate.uclModules.map((module, index) => (
                  <div key={index} className="p-4 rounded-lg border bg-muted/30">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold">{module.name}</h3>
                      <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
                        {module.grade}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{module.description}</p>
                  </div>
                ))}
              </div>
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
                <Code className="size-5" />
                Notable Projects
              </h2>
              <div className="space-y-4">
                {graduate.projects.map((project, index) => (
                  <div key={index} className="p-4 rounded-lg border bg-muted/30">
                    <h3 className="font-semibold mb-2">{project.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
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
              <div className="space-y-6">
                {graduate.education.map((edu, index) => (
                  <div key={index}>
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-semibold">{edu.degree}</h3>
                        <p className="text-sm text-muted-foreground">{edu.school}</p>
                      </div>
                      <Badge variant="outline">{edu.year}</Badge>
                    </div>
                    <p className="text-sm text-primary mt-2">{edu.honors}</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Certifications */}
            <Card className="p-6">
              <h2 className="text-xl font-bold mb-6">Professional Certifications</h2>
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
              <h2 className="text-xl font-bold mb-4">Areas of Interest</h2>
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

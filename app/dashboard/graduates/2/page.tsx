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
  Cloud,
  Server,
  ExternalLink,
} from "lucide-react"
import Link from "next/link"

const michaelProfile = {
  id: 2,
  name: "Michael Chen",
  email: "michael.chen@imperial.ac.uk",
  phone: "+44 7700 345678",
  degree: "Software Engineering, MSc",
  university: "Imperial College London",
  department: "Department of Computing",
  graduationYear: 2023,
  classification: "Distinction",
  location: "Cambridge, UK",
  skills: ["Java", "Spring Boot", "AWS", "Docker", "Kubernetes", "Microservices"],
  experience: "3 years",
  availability: "2 weeks",
  avatar: "MC",
  bio: "MSc Software Engineering graduate from Imperial College London with Distinction. Specialising in cloud architecture and distributed systems. Three years of industry experience building scalable enterprise applications at leading fintech companies. Passionate about DevOps practices and infrastructure automation. Seeking a senior software engineering role focusing on cloud-native development.",
  linkedin: "linkedin.com/in/michaelchenswe",
  github: "github.com/mchen-dev",
  portfolioUrl: "https://michaelchen-projects.dev",
  portfolioLabel: "View Projects",
  workExperience: [
    {
      title: "Software Engineer",
      company: "Revolut",
      duration: "2022 - 2023",
      description:
        "Built microservices for the payments platform processing millions of transactions daily. Implemented event-driven architecture using Kafka. Reduced API latency by 40% through caching strategies and query optimisation.",
    },
    {
      title: "Backend Developer",
      company: "Goldman Sachs",
      duration: "2021 - 2022",
      description:
        "Developed trading platform components using Java and Spring Boot. Implemented real-time data processing pipelines. Contributed to the migration of legacy systems to cloud infrastructure.",
    },
    {
      title: "Software Engineering Intern",
      company: "Amazon Web Services",
      duration: "Summer 2021",
      description:
        "Worked on the EC2 team developing internal tooling for infrastructure management. Built monitoring dashboards and automated deployment pipelines using AWS CDK and TypeScript.",
    },
  ],
  imperialModules: [
    {
      name: "Distributed Systems",
      grade: "Distinction (85%)",
      description: "Consensus algorithms, fault tolerance, distributed databases, and cloud computing patterns.",
    },
    {
      name: "Advanced Software Engineering",
      grade: "Distinction (82%)",
      description: "Software architecture, design patterns, testing methodologies, and continuous delivery.",
    },
    {
      name: "Scalable Systems Design",
      grade: "Distinction (80%)",
      description: "High-availability systems, load balancing, caching strategies, and performance optimisation.",
    },
    {
      name: "Cloud Computing",
      grade: "Distinction (88%)",
      description: "AWS, Azure, and GCP services, serverless architecture, and infrastructure as code.",
    },
    {
      name: "Machine Learning for Software Engineers",
      grade: "Merit (72%)",
      description: "ML pipelines, model deployment, MLOps practices, and AI system integration.",
    },
    {
      name: "Security Engineering",
      grade: "Distinction (78%)",
      description: "Application security, cryptography, secure coding practices, and penetration testing.",
    },
  ],
  projects: [
    {
      name: "Cloud-Native E-Commerce Platform",
      description: "MSc thesis project building a fully containerised e-commerce platform with auto-scaling capabilities. Achieved 99.9% uptime under load testing.",
      technologies: ["Java", "Spring Cloud", "Kubernetes", "PostgreSQL", "Redis"],
    },
    {
      name: "Real-Time Analytics Dashboard",
      description: "Open-source project for visualising streaming data from Kafka topics. Used by 3 companies in production.",
      technologies: ["React", "TypeScript", "Apache Kafka", "InfluxDB"],
    },
    {
      name: "Infrastructure Automation Framework",
      description: "Terraform modules and Ansible playbooks for automated cloud infrastructure provisioning.",
      technologies: ["Terraform", "Ansible", "AWS", "Python"],
    },
  ],
  education: [
    {
      degree: "Master of Science in Software Engineering",
      school: "Imperial College London",
      year: "2022 - 2023",
      honors: "Distinction, Best Thesis Award Nominee",
    },
    {
      degree: "Bachelor of Engineering in Computer Engineering",
      school: "University of Hong Kong",
      year: "2017 - 2021",
      honors: "First Class Honours, Dean's List 2020-2021",
    },
  ],
  certifications: [
    "AWS Solutions Architect Professional",
    "AWS DevOps Engineer Professional",
    "Certified Kubernetes Administrator (CKA)",
    "HashiCorp Terraform Associate",
    "Oracle Certified Professional Java SE 17",
  ],
  awards: [
    "Imperial Computing Department Prize 2023",
    "AWS Community Builder 2023",
    "Revolut Hackathon Winner 2022",
    "Goldman Sachs Engineering Excellence Award",
  ],
  languages: ["English (Fluent)", "Cantonese (Native)", "Mandarin (Fluent)"],
  interests: ["Cloud Architecture", "DevOps", "Open Source", "FinTech"],
}

export default function MichaelChenProfile() {
  const graduate = michaelProfile

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
                <Button variant="outline" className="w-full bg-transparent" asChild>
                  <a href={graduate.portfolioUrl} target="_blank" rel="noopener noreferrer">
                    <Cloud className="size-4 mr-2" />
                    {graduate.portfolioLabel}
                    <ExternalLink className="size-4 ml-1" />
                  </a>
                </Button>
                <Button variant="outline" className="w-full bg-transparent mt-2" disabled>
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
                <Cloud className="size-5" />
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

            {/* Imperial Modules */}
            <Card className="p-6">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Server className="size-5" />
                Imperial College MSc Modules
              </h2>
              <div className="grid gap-4">
                {graduate.imperialModules.map((module, index) => (
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
                <Cloud className="size-5" />
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

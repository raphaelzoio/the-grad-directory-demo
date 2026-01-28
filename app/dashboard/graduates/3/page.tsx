import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookmarkButton } from "@/components/bookmark-button"
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
  Linkedin,
  Scale,
  BookOpen,
  FileText,
  ExternalLink,
} from "lucide-react"
import Link from "next/link"

const emilyProfile = {
  id: 3,
  name: "Emily Rodriguez",
  email: "emily.rodriguez@law.ox.ac.uk",
  phone: "+44 7700 123456",
  degree: "Law (Jurisprudence), BA",
  university: "University of Oxford",
  college: "Balliol College",
  graduationYear: 2024,
  classification: "First Class Honours",
  location: "London, UK",
  skills: ["SQE1", "SQE2", "First Class", "Legal Research", "Contract Law", "Advocacy"],
  experience: "1 year",
  availability: "Immediate",
  avatar: "ER",
  bio: "First Class Law graduate from the University of Oxford with a passion for commercial law and dispute resolution. Successfully completed both SQE1 and SQE2 examinations. Experienced in legal research, drafting, and client advisory work through vacation schemes at Magic Circle firms. Seeking a training contract to develop expertise in corporate and finance law.",
  linkedin: "linkedin.com/in/emilyrodriguezlaw",
  portfolioUrl: "https://oxford.ac.uk/dissertation/emily-rodriguez",
  portfolioLabel: "Read dissertation",
  workExperience: [
    {
      title: "Vacation Scheme",
      company: "Clifford Chance LLP",
      duration: "Summer 2023",
      description:
        "Completed a two-week vacation scheme in the Corporate and Finance departments. Drafted due diligence reports, attended client meetings, and assisted with a cross-border M&A transaction.",
    },
    {
      title: "Legal Intern",
      company: "Citizens Advice Bureau",
      duration: "2022 - 2023",
      description:
        "Provided pro bono legal advice on housing, employment, and consumer rights matters. Conducted legal research and prepared case summaries for supervising solicitors.",
    },
    {
      title: "Research Assistant",
      company: "Oxford Faculty of Law",
      duration: "2023",
      description:
        "Assisted Professor James Crawford with research on international commercial arbitration. Compiled case law analysis and contributed to an academic publication.",
    },
  ],
  oxfordPapers: [
    {
      name: "Contract Law",
      grade: "First (75%)",
      description: "Comprehensive study of the formation, content, vitiating factors, and remedies in contract law. Achieved highest mark in year group.",
    },
    {
      name: "Tort Law",
      grade: "First (72%)",
      description: "Analysis of negligence, nuisance, defamation, and economic torts with particular focus on duty of care and causation principles.",
    },
    {
      name: "Constitutional Law",
      grade: "First (74%)",
      description: "Study of parliamentary sovereignty, separation of powers, human rights, and the rule of law within the British constitutional framework.",
    },
    {
      name: "Criminal Law",
      grade: "First (71%)",
      description: "Examination of actus reus, mens rea, general defences, and specific offences including homicide, theft, and sexual offences.",
    },
    {
      name: "Administrative Law",
      grade: "First (73%)",
      description: "Judicial review, grounds of challenge, remedies, and the relationship between courts and the executive.",
    },
    {
      name: "European Union Law",
      grade: "First (70%)",
      description: "Principles of EU law including supremacy, direct effect, free movement of goods, persons and services.",
    },
    {
      name: "Jurisprudence",
      grade: "First (76%)",
      description: "Philosophy of law covering natural law theory, legal positivism, and critical legal studies. Selected mini-option on Law and Economics.",
    },
    {
      name: "Land Law",
      grade: "First (72%)",
      description: "Property rights, registration, leases, easements, covenants, and mortgages in English land law.",
    },
    {
      name: "Trusts",
      grade: "First (74%)",
      description: "Express, resulting and constructive trusts, breach of fiduciary duty, and equitable remedies.",
    },
    {
      name: "Commercial Law (Option)",
      grade: "First (77%)",
      description: "Sale of goods, international trade, letters of credit, and security interests. Dissertation on documentary credits in international shipping.",
    },
  ],
  education: [
    {
      degree: "Bachelor of Arts in Law (Jurisprudence)",
      school: "University of Oxford, Balliol College",
      year: "2021 - 2024",
      honors: "First Class Honours, College Law Prize Winner 2024",
    },
    {
      degree: "A-Levels",
      school: "Westminster School",
      year: "2019 - 2021",
      honors: "A*A*A* in Law, History, Economics",
    },
  ],
  certifications: [
    "SQE1 - Passed (August 2024)",
    "SQE2 - Passed (November 2024)",
    "Legal Practice Course (LPC) Exemptions",
    "Westlaw UK Certified Researcher",
    "LexisNexis Legal Research Certificate",
  ],
  awards: [
    "Balliol College Law Prize 2024 - Best Finals Performance",
    "Oxford Law Faculty Dissertation Prize - Commercial Law",
    "Inner Temple Scholarship Award",
    "Oxford Pro Bono Publico Recognition",
  ],
  languages: ["English (Native)", "Spanish (Fluent)", "French (Intermediate)"],
  interests: ["Commercial Arbitration", "Pro Bono Work", "Mooting", "Legal Tech"],
  mooting: [
    {
      competition: "Oxford Internal Mooting Competition",
      result: "Winner 2023",
      description: "Argued a complex contract law case on misrepresentation and rescission.",
    },
    {
      competition: "UK Supreme Court Mooting Competition",
      result: "Semi-finalist 2024",
      description: "Represented Oxford in a public law case concerning judicial review of ministerial decisions.",
    },
  ],
}

export default function EmilyRodriguezProfile() {
  const graduate = emilyProfile

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
                <p className="text-muted-foreground mb-1">{graduate.degree}</p>
                <p className="text-sm text-muted-foreground mb-4">{graduate.college}, {graduate.university}</p>
                <Badge className="bg-amber-500 text-white mb-4">{graduate.classification}</Badge>
                <div className="flex gap-2 mb-6">
                  <Button size="sm" className="flex-1" disabled>
                    <MessageSquare className="size-4 mr-2" />
                    Contact
                  </Button>
                  <BookmarkButton graduateId={graduate.id} graduateName={graduate.name} />
                </div>
                <Button variant="outline" className="w-full bg-transparent" asChild>
                  <a href={graduate.portfolioUrl} target="_blank" rel="noopener noreferrer">
                    <FileText className="size-4 mr-2" />
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
                </div>
              </div>
            </Card>

            {/* Qualifications */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Scale className="size-5" />
                Legal Qualifications
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
                Awards & Honours
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

            {/* Oxford Papers */}
            <Card className="p-6">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <BookOpen className="size-5" />
                Oxford Law Papers & Results
              </h2>
              <div className="grid gap-4">
                {graduate.oxfordPapers.map((paper, index) => (
                  <div key={index} className="p-4 rounded-lg border bg-muted/30">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold">{paper.name}</h3>
                      <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
                        {paper.grade}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{paper.description}</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Work Experience */}
            <Card className="p-6">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Briefcase className="size-5" />
                Legal Experience
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

            {/* Mooting */}
            <Card className="p-6">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Scale className="size-5" />
                Mooting & Advocacy
              </h2>
              <div className="space-y-4">
                {graduate.mooting.map((moot, index) => (
                  <div key={index} className="p-4 rounded-lg border bg-muted/30">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold">{moot.competition}</h3>
                      <Badge className="bg-primary text-primary-foreground">{moot.result}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{moot.description}</p>
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
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <FileText className="size-5" />
                Professional Qualifications
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

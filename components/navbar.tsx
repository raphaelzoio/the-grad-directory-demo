"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Briefcase, User, Bookmark } from "lucide-react"

interface NavbarProps {
  userType: "employer" | "graduate"
  currentPage?: "directory" | "jobs" | "applications" | "messages" | "your-jobs" | "bookmarks" | "profile"
}

export function Navbar({ userType, currentPage }: NavbarProps) {
  const router = useRouter()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleLogout = () => {
    if (typeof window !== "undefined") {
      sessionStorage.removeItem("userType")
      localStorage.removeItem("userType")
    }
    router.push("/")
  }

  const navLinkClass = (isActive: boolean) =>
    `text-sm font-medium transition-colors ${
      isActive ? "text-foreground" : "text-muted-foreground hover:text-primary"
    }`

  return (
    <header className="border-b border-border bg-card sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/dashboard" className="flex items-center gap-2" onClick={scrollToTop}>
            <div className="size-8 rounded-lg bg-primary flex items-center justify-center">
              <Briefcase className="size-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-belleza text-foreground"></span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            {userType === "employer" ? (
              <>
                <Link
                  href="/dashboard"
                  onClick={scrollToTop}
                  className={navLinkClass(currentPage === "directory")}
                >
                  Directory
                </Link>
                <Link
                  href="/bookmarks"
                  onClick={scrollToTop}
                  className={navLinkClass(currentPage === "bookmarks")}
                >
                  Bookmarks
                </Link>
                <Link
                  href="/messages"
                  onClick={scrollToTop}
                  className={navLinkClass(currentPage === "messages")}
                >
                  Messages
                </Link>
                <Link
                  href="/post-job"
                  onClick={scrollToTop}
                  className={navLinkClass(currentPage === "your-jobs")}
                >
                  Your jobs
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/dashboard"
                  onClick={scrollToTop}
                  className={navLinkClass(currentPage === "jobs")}
                >
                  Find Jobs
                </Link>
                <Link
                  href="/applications"
                  onClick={scrollToTop}
                  className={navLinkClass(currentPage === "applications")}
                >
                  My Applications
                </Link>
                <Link
                  href="/messages"
                  onClick={scrollToTop}
                  className={navLinkClass(currentPage === "messages")}
                >
                  Messages
                </Link>
              </>
            )}
          </nav>
        </div>
        <Button variant="ghost" size="icon" className="rounded-full" onClick={handleLogout} title="Logout">
          <User className="size-5" />
        </Button>
      </div>
    </header>
  )
}

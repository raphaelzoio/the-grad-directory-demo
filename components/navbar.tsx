"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { User, Bookmark, Bell } from "lucide-react"

interface NavbarProps {
  userType: "employer" | "graduate"
  currentPage?: "directory" | "jobs" | "applications" | "messages" | "your-jobs" | "bookmarks" | "profile" | "post-job" | "about"
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
      isActive ? "text-white" : "text-white/70 hover:text-white"
    }`

  return (
    <header className="border-b border-white/20 sticky top-0 z-50" style={{ backgroundColor: "#445145" }}>
      <div className="container mx-auto px-4 py-5 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/dashboard" className="flex items-center gap-2" onClick={scrollToTop}>
            <span className="text-xl font-belleza text-white">The Graduate Directory</span>
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
                  Saved Candidates
                </Link>
                <Link
                  href="/about-employers?from=dashboard"
                  onClick={scrollToTop}
                  className={navLinkClass(currentPage === "about")}
                >
                  About
                </Link>
                <Link
                  href="/messages"
                  onClick={scrollToTop}
                  className={navLinkClass(currentPage === "messages")}
                >
                  Messages
                </Link>
                <Link
                  href="/your-jobs"
                  onClick={scrollToTop}
                  className={navLinkClass(currentPage === "your-jobs")}
                >
                  Your Jobs
                </Link>
                <Link
                  href="/post-job"
                  onClick={scrollToTop}
                  className={navLinkClass(currentPage === "post-job")}
                >
                  Post a Job
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
                  href="/about-employers?from=dashboard"
                  onClick={scrollToTop}
                  className={navLinkClass(currentPage === "about")}
                >
                  About
                </Link>
                <Link
                  href="/saved-jobs"
                  onClick={scrollToTop}
                  className={navLinkClass(currentPage === "bookmarks")}
                >
                  Saved Jobs
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
        <div className="flex items-center gap-2 ml-auto">
          {userType === "graduate" ? (
          <div className="relative group">
            <Button variant="ghost" size="icon" className="rounded-full relative text-white hover:bg-white/10">
              <Bell className="size-5" />
              <span className="absolute -top-1 -right-1 size-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                1
              </span>
            </Button>
            <div className="absolute right-0 top-full mt-2 w-64 p-3 bg-card border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <p className="text-sm text-foreground">
                An employer at <span className="font-semibold">CloudFlow Solutions</span> has saved your profile
              </p>
            </div>
          </div>
          ) : null}
          <Button variant="ghost" size="icon" className="rounded-full text-white hover:bg-white/10" onClick={handleLogout} title="Logout">
            <User className="size-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}

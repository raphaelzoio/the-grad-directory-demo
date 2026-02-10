"use client"

import { usePathname } from "next/navigation"
import { useSyncExternalStore } from "react"
import { Navbar } from "@/components/navbar"

const PUBLIC_PATHS = ["/", "/about-graduates", "/about-employers"]

function getSnapshot(): "employer" | "graduate" | null {
  const sessionType = sessionStorage.getItem("userType") as "employer" | "graduate" | null
  const localType = localStorage.getItem("userType") as "employer" | "graduate" | null
  return sessionType || localType
}

function getServerSnapshot(): "employer" | "graduate" | null {
  return null
}

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback)
  return () => window.removeEventListener("storage", callback)
}

type CurrentPage = "directory" | "jobs" | "applications" | "messages" | "your-jobs" | "bookmarks" | "profile" | "post-job"

function getCurrentPage(pathname: string, userType: "employer" | "graduate"): CurrentPage | undefined {
  if (pathname === "/dashboard" || pathname.startsWith("/dashboard/graduates")) {
    return userType === "employer" ? "directory" : "jobs"
  }
  if (pathname === "/saved-jobs") return "bookmarks"
  if (pathname === "/messages") return "messages"
  if (pathname === "/applications") return "applications"
  if (pathname === "/bookmarks") return "bookmarks"
  if (pathname === "/your-jobs") return "your-jobs"
  if (pathname === "/post-job") return "post-job"
  if (pathname.startsWith("/profile")) return "profile"
  if (pathname.startsWith("/jobs")) return "jobs"
  return undefined
}

export function NavbarWrapper() {
  const pathname = usePathname()
  const userType = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)

  if (PUBLIC_PATHS.includes(pathname) || !userType) return null

  const currentPage = getCurrentPage(pathname, userType)

  return <Navbar userType={userType} currentPage={currentPage} />
}

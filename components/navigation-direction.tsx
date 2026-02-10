"use client"

import { usePathname } from "next/navigation"
import { useLayoutEffect, useRef } from "react"

function getDepth(pathname: string) {
  return pathname.split("/").filter(Boolean).length
}

function isGraduateProfile(pathname: string) {
  if (!pathname.startsWith("/dashboard/graduates/")) return false
  const segments = pathname.split("/").filter(Boolean)
  return segments.length === 3
}

export function NavigationDirection() {
  const pathname = usePathname()
  const prevPathname = useRef(pathname)

  useLayoutEffect(() => {
    const prev = prevPathname.current
    prevPathname.current = pathname

    if (prev === pathname) return

    sessionStorage.setItem("previousPathname", prev)

    const prevIsProfile = isGraduateProfile(prev)
    const currIsProfile = isGraduateProfile(pathname)

    if (prevIsProfile || currIsProfile) {
      document.documentElement.dataset.navDirection = "profile"
      return
    }

    const prevDepth = getDepth(prev)
    const currDepth = getDepth(pathname)

    if (currDepth > prevDepth) {
      document.documentElement.dataset.navDirection = "forward"
    } else if (currDepth < prevDepth) {
      document.documentElement.dataset.navDirection = "back"
    } else {
      document.documentElement.dataset.navDirection = "lateral"
    }
  }, [pathname])

  return null
}

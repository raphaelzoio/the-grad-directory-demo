"use client"

import { useSyncExternalStore, useCallback } from "react"
import { useRouter } from "next/navigation"

function getSnapshot(): "employer" | "graduate" | null {
  const sessionType = sessionStorage.getItem("userType") as "employer" | "graduate" | null
  const localType = localStorage.getItem("userType") as "employer" | "graduate" | null
  const type = sessionType || localType
  if (type) {
    sessionStorage.setItem("userType", type)
    localStorage.setItem("userType", type)
  }
  return type
}

function getServerSnapshot(): "employer" | "graduate" | null {
  return null
}

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback)
  return () => window.removeEventListener("storage", callback)
}

export function useUserType() {
  const router = useRouter()
  const userType = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)

  if (typeof window !== "undefined" && !userType) {
    router.push("/")
  }

  return userType
}

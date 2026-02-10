"use client"

import { motion, useReducedMotion } from "framer-motion"
import { usePathname } from "next/navigation"

export default function GraduatesTemplate({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.div
      key={pathname}
      initial={prefersReducedMotion ? { y: 0 } : { y: 36 }}
      animate={{ y: 0 }}
      transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}

import { ViewTransition } from "react"

export default function GraduatesTemplate({ children }: { children: React.ReactNode }) {
  return (
    <ViewTransition enter="slide-up">
      {children}
    </ViewTransition>
  )
}

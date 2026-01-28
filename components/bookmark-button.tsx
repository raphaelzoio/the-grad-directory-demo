"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Bookmark } from "lucide-react"

interface BookmarkButtonProps {
  graduateId: number
  graduateName: string
}

export function BookmarkButton({ graduateId, graduateName }: BookmarkButtonProps) {
  const [isBookmarked, setIsBookmarked] = useState(false)

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked)
  }

  return (
    <Button
      size="sm"
      variant={isBookmarked ? "default" : "outline"}
      onClick={handleBookmark}
      title={isBookmarked ? `Remove ${graduateName} from bookmarks` : `Bookmark ${graduateName}`}
    >
      <Bookmark className={`size-4 ${isBookmarked ? "fill-current" : ""}`} />
    </Button>
  )
}

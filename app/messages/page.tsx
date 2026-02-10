"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Search, Send, Paperclip, MoreVertical, Phone, Video, Archive, Star } from "lucide-react"

const employerConversations = [
  {
    id: 1,
    name: "Sarah Johnson",
    avatar: "/professional-woman-diverse.png",
    lastMessage: "Thank you for considering my application!",
    timestamp: "11:45 AM",
    unread: 1,
    online: true,
    position: "Software Engineer",
  },
  {
    id: 2,
    name: "Michael Chen",
    avatar: "/professional-man.jpg",
    lastMessage: "I would love to discuss this opportunity further.",
    timestamp: "Yesterday",
    unread: 0,
    online: false,
    position: "Product Manager",
  },
  {
    id: 3,
    name: "Emily Davis",
    avatar: "/young-professional-woman.png",
    lastMessage: "When can we schedule an interview?",
    timestamp: "Tuesday",
    unread: 3,
    online: true,
    position: "UX Designer",
  },
  {
    id: 4,
    name: "David Martinez",
    avatar: "/professional-man-suit.png",
    lastMessage: "I have attached my updated portfolio.",
    timestamp: "Monday",
    unread: 0,
    online: false,
    position: "Frontend Developer",
  },
]

const employerMessages = [
  {
    id: 1,
    sender: "them",
    content: "Hello! I am very interested in the Software Engineer position at your company.",
    timestamp: "11:30 AM",
  },
  {
    id: 2,
    sender: "them",
    content: "I have 3 years of experience with React and TypeScript and would love to contribute to your team.",
    timestamp: "11:31 AM",
  },
  {
    id: 3,
    sender: "me",
    content: "Thank you for your interest, Sarah! Your experience looks impressive.",
    timestamp: "11:35 AM",
  },
  {
    id: 4,
    sender: "me",
    content: "Would you be available for a phone screening this week?",
    timestamp: "11:36 AM",
  },
  {
    id: 5,
    sender: "them",
    content: "Yes, I am available this week. Thursday or Friday would work best for me.",
    timestamp: "11:40 AM",
  },
  {
    id: 6,
    sender: "me",
    content: "Great! Let's schedule it for Thursday at 2 PM. I'll send you a calendar invite.",
    timestamp: "11:42 AM",
  },
  {
    id: 7,
    sender: "them",
    content: "Thank you for considering my application!",
    timestamp: "11:45 AM",
  },
]

const mockConversations = [
  {
    id: 1,
    name: "TechCorp Solutions",
    avatar: "/modern-tech-office.png",
    lastMessage: "Thank you for your interest in the Software Engineer position.",
    timestamp: "10:30 AM",
    unread: 2,
    online: true,
  },
  {
    id: 2,
    name: "Global Industries Ltd",
    avatar: "/corporate-building.jpg",
    lastMessage: "We would like to schedule an interview with you.",
    timestamp: "Yesterday",
    unread: 0,
    online: false,
  },
  {
    id: 3,
    name: "Innovate Digital",
    avatar: "/digital-agency-team.png",
    lastMessage: "Your portfolio looks impressive!",
    timestamp: "Tuesday",
    unread: 1,
    online: true,
  },
  {
    id: 4,
    name: "Creative Studios",
    avatar: "/creative-studio.png",
    lastMessage: "Could you provide references?",
    timestamp: "Monday",
    unread: 0,
    online: false,
  },
]

const mockMessages = [
  {
    id: 1,
    sender: "them",
    content: "Hello! Thank you for applying to our Software Engineer position.",
    timestamp: "10:15 AM",
  },
  {
    id: 2,
    sender: "them",
    content: "We were impressed by your experience with React and TypeScript.",
    timestamp: "10:16 AM",
  },
  {
    id: 3,
    sender: "me",
    content: "Thank you for reaching out! I am very interested in this opportunity.",
    timestamp: "10:20 AM",
  },
  {
    id: 4,
    sender: "me",
    content:
      "I have been working with React for 3 years and would love to discuss how my experience aligns with your needs.",
    timestamp: "10:21 AM",
  },
  {
    id: 5,
    sender: "them",
    content: "That sounds great! Would you be available for a video interview next week?",
    timestamp: "10:25 AM",
  },
  {
    id: 6,
    sender: "me",
    content: "Yes, I am available next week. What times work best for you?",
    timestamp: "10:28 AM",
  },
  {
    id: 7,
    sender: "them",
    content: "Thank you for your interest in the Software Engineer position.",
    timestamp: "10:30 AM",
  },
]

export default function MessagesPage() {
  const router = useRouter()
  const [userType, setUserType] = useState<"employer" | "graduate" | null>(null)
  const [selectedConversation, setSelectedConversation] = useState<any>(null)

  useEffect(() => {
    const type = sessionStorage.getItem("userType") as "employer" | "graduate" | null
    if (!type) {
      router.push("/")
    } else {
      setUserType(type)
      setSelectedConversation(type === "employer" ? employerConversations[0] : mockConversations[0])
    }
  }, [router])

  if (!userType) {
    return null
  }

  const conversations = userType === "employer" ? employerConversations : mockConversations
  const messages = userType === "employer" ? employerMessages : mockMessages

  return (
    <div className="min-h-screen bg-background">
      {/* Messages Interface */}
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-[calc(100vh-140px)]">
          {/* Conversations List */}
          <Card className="lg:col-span-4 flex flex-col">
            <CardContent className="p-4 flex-1 flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Messages</h2>
                <Button variant="ghost" size="icon" disabled>
                  <MoreVertical className="size-5" />
                </Button>
              </div>

              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                <Input placeholder="Search messages..." className="pl-10" disabled />
              </div>

              <div className="flex-1 overflow-y-auto space-y-2">
                {conversations.map((conversation: any) => (
                  <div
                    key={conversation.id}
                    className={`flex items-start gap-3 p-3 rounded-lg cursor-pointer transition-colors ${
                      selectedConversation?.id === conversation.id ? "bg-muted" : "hover:bg-muted/50"
                    }`}
                    onClick={() => setSelectedConversation(conversation)}
                  >
                    <div className="relative">
                      <Avatar>
                        <AvatarImage src={conversation.avatar || "/placeholder.svg"} />
                        <AvatarFallback>{conversation.name[0]}</AvatarFallback>
                      </Avatar>
                      {conversation.online && (
                        <div className="absolute bottom-0 right-0 size-3 bg-green-500 rounded-full border-2 border-card" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <div>
                          <h3 className="font-medium text-sm truncate">{conversation.name}</h3>
                          {userType === "employer" && conversation.position && (
                            <p className="text-xs text-muted-foreground">{conversation.position}</p>
                          )}
                        </div>
                        <span className="text-xs text-muted-foreground">{conversation.timestamp}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-muted-foreground truncate">{conversation.lastMessage}</p>
                        {conversation.unread > 0 && (
                          <Badge
                            variant="default"
                            className="ml-2 size-5 rounded-full p-0 flex items-center justify-center text-xs"
                          >
                            {conversation.unread}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Chat Window */}
          <Card className="lg:col-span-8 flex flex-col">
            <CardContent className="p-0 flex-1 flex flex-col">
              {/* Chat Header */}
              <div className="p-4 border-b border-border flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <Avatar>
                      <AvatarImage src={selectedConversation?.avatar || "/placeholder.svg"} />
                      <AvatarFallback>{selectedConversation?.name?.[0]}</AvatarFallback>
                    </Avatar>
                    {selectedConversation?.online && (
                      <div className="absolute bottom-0 right-0 size-3 bg-green-500 rounded-full border-2 border-card" />
                    )}
                  </div>
                  <div>
                    <h3 className="font-semibold">{selectedConversation?.name}</h3>
                    <p className="text-xs text-muted-foreground">
                      {selectedConversation?.online ? "Active now" : "Offline"}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon" disabled>
                    <Phone className="size-5" />
                  </Button>
                  <Button variant="ghost" size="icon" disabled>
                    <Video className="size-5" />
                  </Button>
                  <Button variant="ghost" size="icon" disabled>
                    <Star className="size-5" />
                  </Button>
                  <Button variant="ghost" size="icon" disabled>
                    <Archive className="size-5" />
                  </Button>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <div key={message.id} className={`flex ${message.sender === "me" ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`max-w-[70%] rounded-lg p-3 ${
                        message.sender === "me" ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"
                      }`}
                    >
                      <p className="text-sm">{message.content}</p>
                      <p
                        className={`text-xs mt-1 ${
                          message.sender === "me" ? "text-primary-foreground/70" : "text-muted-foreground"
                        }`}
                      >
                        {message.timestamp}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Message Input */}
              <div className="p-4 border-t border-border">
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon" disabled>
                    <Paperclip className="size-5" />
                  </Button>
                  <Input placeholder="Type a message..." className="flex-1" disabled />
                  <Button disabled>
                    <Send className="size-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

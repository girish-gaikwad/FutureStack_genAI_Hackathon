"use client"

import { useState } from "react"
import { useTheme } from "next-themes"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  User,
  GraduationCap,
  BookOpen,
  Bookmark,
  History,
  Upload,
  Settings,
  Camera,
  Edit3,
  Save,
  Eye,
  Trash2,
  Download,
  Clock,
  FileText,
  LogOut,
  Moon,
  Sun,
  Edit2,
  Award
} from "lucide-react"
import Link from "next/link"

export default function ProfilePage() {
  const { theme, setTheme } = useTheme()
  const [isEditing, setIsEditing] = useState(false)
  const [profileData, setProfileData] = useState({
    name: "Udhaykarthick",
    email: "udhay@example.com",
    phone: "+91 98765 43210",
    location: "Chennai, Tamil Nadu",
    dateOfBirth: "2005-03-15",
    bio: "Passionate student preparing for competitive exams. Love mathematics and physics!",
    board: "CBSE",
    grade: "12th Grade",
    subjects: ["Mathematics", "Physics", "Chemistry", "Biology"]
  })

  // Mock data for saved content
  const savedContent = [
    { id: 1, title: "Quadratic Equations", subject: "Mathematics", type: "Chapter", addedDate: "2024-09-25" },
    { id: 2, title: "Laws of Motion", subject: "Physics", type: "Topic", addedDate: "2024-09-24" },
    { id: 3, title: "Organic Chemistry Basics", subject: "Chemistry", type: "Chapter", addedDate: "2024-09-23" },
    { id: 4, title: "Cell Biology", subject: "Biology", type: "Video", addedDate: "2024-09-22" }
  ]

  // Mock data for study sessions
  const studySessions = [
    { id: 1, title: "Linear Equations Practice", subject: "Mathematics", duration: "45 min", date: "2024-09-28", score: 85 },
    { id: 2, title: "Thermodynamics Quiz", subject: "Physics", duration: "30 min", date: "2024-09-28", score: 92 },
    { id: 3, title: "Periodic Table Review", subject: "Chemistry", duration: "25 min", date: "2024-09-27", score: 78 },
    { id: 4, title: "Photosynthesis Study", subject: "Biology", duration: "35 min", date: "2024-09-27", score: 88 }
  ]

  const availableSubjects = ["Mathematics", "Physics", "Chemistry", "Biology", "English", "Computer Science"]

  const handleSave = () => {
    setIsEditing(false)
    // Here you would typically save to a backend
    console.log("Profile saved:", profileData)
  }

  const handleCancel = () => {
    setIsEditing(false)
    // Reset to original data
  }

  const handleSubjectChange = (subject: string, checked: boolean) => {
    if (checked) {
      setProfileData(prev => ({ ...prev, subjects: [...prev.subjects, subject] }))
    } else {
      setProfileData(prev => ({ ...prev, subjects: prev.subjects.filter(s => s !== subject) }))
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-10 flex h-16 items-center gap-3 border-b bg-background/95 px-4 backdrop-blur">
        <div className="flex flex-1 items-center justify-between">
          <div className="flex items-center gap-4">
            <div>
              <h1 className="text-xl font-semibold">Profile</h1>
            </div>
          </div>
          {/* <div className="flex items-center gap-2">
            <Link href="/app/settings">
              <Button variant="outline" size="sm" className="gap-2 rounded-2xl">
                <Settings className="w-4 h-4" />
                Settings
              </Button>
            </Link>
          </div> */}
        </div>
      </header>
      
      <main className="flex-1 p-4 md:p-6">
        <div className="max-w-6xl mx-auto space-y-6">

        {/* Profile Header */}
        <Card className="overflow-hidden rounded-3xl">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="relative">
                <Avatar className="h-24 w-24">
                  <AvatarImage src="/placeholder-user.jpg" alt={profileData.name} />
                  <AvatarFallback className="text-2xl">{profileData.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <Button size="sm" className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full p-0">
                  <Camera className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <div className="space-y-2">
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div>
                      <h3 className="text-lg font-semibold">{profileData.name}</h3>
                      <p className="text-muted-foreground">{profileData.email}</p>
                      <Badge variant="secondary" className="mt-2">
                        Student
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-3">
                {isEditing ? (
                  <div className="flex space-x-3">
                    <Button
                      onClick={handleSave}
                      className="rounded-2xl"
                    >
                      Save Changes
                    </Button>
                    <Button
                      onClick={handleCancel}
                      variant="outline"
                      className="rounded-2xl"
                    >
                      Cancel
                    </Button>
                  </div>
                ) : (
                  <Button
                    onClick={() => setIsEditing(true)}
                    className="rounded-2xl"
                  >
                    <Edit2 className="h-4 w-4 mr-2" />
                    Edit Profile
                  </Button>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 rounded-2xl p-1">
            <TabsTrigger value="profile" className="rounded-xl">
              <User className="w-4 h-4 mr-2" />
              Profile
            </TabsTrigger>
            <TabsTrigger value="academic" className="rounded-xl">
              <GraduationCap className="w-4 h-4 mr-2" />
              Academic
            </TabsTrigger>
            <TabsTrigger value="activity" className="rounded-xl">
              <History className="w-4 h-4 mr-2" />
              Activity
            </TabsTrigger>
            <TabsTrigger value="library" className="rounded-xl">
              <BookOpen className="w-4 h-4 mr-2" />
              Library
            </TabsTrigger>
          </TabsList>

          {/* Profile Tab */}
          <TabsContent value="profile" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              {/* Personal Information */}
              <Card className="overflow-hidden rounded-3xl">
                <CardHeader className="border-b">
                  <CardTitle className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-muted">
                      <User className="w-5 h-5" />
                    </div>
                    Personal Information
                  </CardTitle>
                  <CardDescription>Your basic information</CardDescription>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      value={profileData.name}
                      onChange={(e) => setProfileData(prev => ({ ...prev, name: e.target.value }))}
                      disabled={!isEditing}
                      className="rounded-xl"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={profileData.email}
                      onChange={(e) => setProfileData(prev => ({ ...prev, email: e.target.value }))}
                      disabled={!isEditing}
                      className="rounded-xl"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={profileData.phone}
                      onChange={(e) => setProfileData(prev => ({ ...prev, phone: e.target.value }))}
                      disabled={!isEditing}
                      className="rounded-xl"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input
                      id="location"
                      value={profileData.location}
                      onChange={(e) => setProfileData(prev => ({ ...prev, location: e.target.value }))}
                      disabled={!isEditing}
                      className="rounded-xl"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="dob">Date of Birth</Label>
                    <Input
                      id="dob"
                      type="date"
                      value={profileData.dateOfBirth}
                      onChange={(e) => setProfileData(prev => ({ ...prev, dateOfBirth: e.target.value }))}
                      disabled={!isEditing}
                      className="rounded-xl"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea
                      id="bio"
                      value={profileData.bio}
                      onChange={(e) => setProfileData(prev => ({ ...prev, bio: e.target.value }))}
                      disabled={!isEditing}
                      className="rounded-xl"
                      rows={3}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Academic Information */}
              <Card className="overflow-hidden rounded-3xl">
                <CardHeader className="border-b">
                  <CardTitle className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-muted">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    Academic Details
                  </CardTitle>
                  <CardDescription>Your academic information</CardDescription>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="board">Board</Label>
                    <Select value={profileData.board} onValueChange={(value) => setProfileData(prev => ({ ...prev, board: value }))}>
                      <SelectTrigger className="rounded-xl">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="CBSE">CBSE</SelectItem>
                        <SelectItem value="ICSE">ICSE</SelectItem>
                        <SelectItem value="State Board">State Board</SelectItem>
                        <SelectItem value="Cambridge">Cambridge</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="class">Class</Label>
                    <Select value={profileData.grade} onValueChange={(value) => setProfileData(prev => ({ ...prev, grade: value }))}>
                      <SelectTrigger className="rounded-xl">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="9th Grade">9th Grade</SelectItem>
                        <SelectItem value="10th Grade">10th Grade</SelectItem>
                        <SelectItem value="11th Grade">11th Grade</SelectItem>
                        <SelectItem value="12th Grade">12th Grade</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-3">
                    <Label>Subjects</Label>
                    <div className="grid grid-cols-2 gap-3">
                      {availableSubjects.map((subject) => (
                        <div key={subject} className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id={subject}
                            checked={profileData.subjects.includes(subject)}
                            onChange={(e) => handleSubjectChange(subject, e.target.checked)}
                            className="rounded"
                          />
                          <Label htmlFor={subject} className="text-sm">{subject}</Label>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Academic Tab */}
          <TabsContent value="academic" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              {/* Study Progress */}
              <Card className="overflow-hidden rounded-3xl">
                <CardHeader className="border-b">
                  <CardTitle className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-muted">
                      <BookOpen className="w-5 h-5" />
                    </div>
                    Study Progress
                  </CardTitle>
                  <CardDescription>Your academic achievements</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">85%</div>
                      <p className="text-sm text-muted-foreground">Average Score</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600 dark:text-green-400">24</div>
                      <p className="text-sm text-muted-foreground">Completed Tests</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">168h</div>
                      <p className="text-sm text-muted-foreground">Study Time</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">12</div>
                      <p className="text-sm text-muted-foreground">Achievements</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Subject Performance */}
              <Card className="overflow-hidden rounded-3xl">
                <CardHeader className="border-b">
                  <CardTitle className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-muted">
                      <Award className="w-5 h-5" />
                    </div>
                    Subject Performance
                  </CardTitle>
                  <CardDescription>Performance by subject</CardDescription>
                </CardHeader>
                <CardContent className="p-6 space-y-3">
                  {[
                    { subject: "Mathematics", score: 92, color: "bg-blue-500" },
                    { subject: "Physics", score: 88, color: "bg-green-500" },
                    { subject: "Chemistry", score: 85, color: "bg-purple-500" },
                    { subject: "Biology", score: 90, color: "bg-orange-500" }
                  ].map((item, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">{item.subject}</span>
                        <span className="text-sm font-medium">{item.score}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div 
                          className={`${item.color} h-2 rounded-full`} 
                          style={{ width: `${item.score}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Activity Tab */}
          <TabsContent value="activity" className="space-y-6">
            <Card className="overflow-hidden rounded-3xl">
              <CardHeader className="border-b">
                <CardTitle className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-muted">
                    <History className="w-5 h-5" />
                  </div>
                  Recent Study Sessions
                </CardTitle>
                <CardDescription>Your recent learning activities</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <ScrollArea className="h-96">
                  {studySessions.map((session, index) => (
                    <div key={session.id}>
                      <div className="flex items-center justify-between p-6">
                        <div className="flex items-center gap-4">
                          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-muted">
                            <Clock className="w-4 h-4" />
                          </div>
                          <div>
                            <h4 className="font-medium">{session.title}</h4>
                            <p className="text-sm text-muted-foreground">
                              {session.subject} • {session.duration} • {session.date}
                            </p>
                          </div>
                        </div>
                        <Badge variant={session.score >= 80 ? "default" : "secondary"}>
                          {session.score}%
                        </Badge>
                      </div>
                      {index < studySessions.length - 1 && <Separator />}
                    </div>
                  ))}
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Library Tab */}
          <TabsContent value="library" className="space-y-6">
            <Card className="overflow-hidden rounded-3xl">
              <CardHeader className="border-b">
                <CardTitle className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-muted">
                    <Bookmark className="w-5 h-5" />
                  </div>
                  Saved Content
                </CardTitle>
                <CardDescription>Your bookmarked study materials</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <ScrollArea className="h-96">
                  {savedContent.map((item, index) => (
                    <div key={item.id}>
                      <div className="flex items-center justify-between p-6">
                        <div className="flex items-center gap-4">
                          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-muted">
                            <FileText className="w-4 h-4" />
                          </div>
                          <div>
                            <h4 className="font-medium">{item.title}</h4>
                            <p className="text-sm text-muted-foreground">
                              {item.subject} • {item.type} • Added {item.addedDate}
                            </p>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm" className="rounded-2xl">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="rounded-2xl">
                            <Download className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="rounded-2xl text-red-600 hover:text-red-700">
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                      {index < savedContent.length - 1 && <Separator />}
                    </div>
                  ))}
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>

        </Tabs>
        </div>
      </main>
    </div>
  )
}
"use client"

import { AnimatePresence, motion } from "framer-motion"
import {
  Award,
  Bell,
  BookOpen,
  Brain,
  Calendar,
  CheckCircle2,
  Clock,
  FileText,
  Flame,
  GraduationCap,
  Menu,
  MessageSquare,
  PanelLeft,
  Play,
  Plus,
  Search,
  Star,
  Target,
  TrendingUp,
  Trophy,
  Zap
} from "lucide-react"
import { useEffect, useState } from "react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { useAppStore } from "@/stores/appsidebarStore"
import OnboardingModal from "@/components/app/OnboardingModal"

// Student subjects with progress
const subjects = [
  {
    name: "Mathematics",
    icon: "📐",
    chapter: "Calculus - Derivatives",
    progress: 75,
    quizzes: 12,
    completed: 9,
    grade: "A",
    color: "from-blue-500 to-cyan-500"
  },
  {
    name: "Physics",
    icon: "⚡",
    chapter: "Electromagnetism",
    progress: 60,
    quizzes: 10,
    completed: 6,
    grade: "B+",
    color: "from-purple-500 to-pink-500"
  },
  {
    name: "Chemistry",
    icon: "🧪",
    chapter: "Organic Chemistry",
    progress: 85,
    quizzes: 15,
    completed: 13,
    grade: "A+",
    color: "from-green-500 to-emerald-500"
  },
  {
    name: "Biology",
    icon: "🧬",
    chapter: "Cell Biology",
    progress: 70,
    quizzes: 8,
    completed: 6,
    grade: "A-",
    color: "from-teal-500 to-cyan-500"
  },
]

// Recent quiz attempts
const recentQuizzes = [
  {
    subject: "Chemistry",
    chapter: "Organic Reactions",
    score: 95,
    date: "Today",
    questions: 20,
    time: "15 min"
  },
  {
    subject: "Mathematics",
    chapter: "Limits & Continuity",
    score: 82,
    date: "Yesterday",
    questions: 25,
    time: "18 min"
  },
  {
    subject: "Physics",
    chapter: "Newton's Laws",
    score: 78,
    date: "2 days ago",
    questions: 15,
    time: "12 min"
  },
  {
    subject: "Biology",
    chapter: "Photosynthesis",
    score: 88,
    date: "3 days ago",
    questions: 20,
    time: "16 min"
  },
]

// Study materials
const studyMaterials = [
  {
    title: "NCERT Solutions - Class 12 Math",
    subject: "Mathematics",
    type: "PDF",
    pages: 450,
    updated: "2 days ago"
  },
  {
    title: "Physics Formula Sheet",
    subject: "Physics",
    type: "PDF",
    pages: 25,
    updated: "1 week ago"
  },
  {
    title: "Chemistry Reaction Mechanisms",
    subject: "Chemistry",
    type: "Notes",
    pages: 80,
    updated: "3 days ago"
  },
  {
    title: "Biology Diagrams Collection",
    subject: "Biology",
    type: "Images",
    pages: 120,
    updated: "5 days ago"
  },
]

// Upcoming tests
const upcomingTests = [
  {
    subject: "Mathematics",
    chapter: "Calculus - Full Chapter",
    date: "Oct 15, 2024",
    daysLeft: 5,
    topics: ["Limits", "Derivatives", "Integration"]
  },
  {
    subject: "Physics",
    chapter: "Electricity & Magnetism",
    date: "Oct 20, 2024",
    daysLeft: 10,
    topics: ["Coulomb's Law", "Electric Field", "Magnetic Force"]
  },
  {
    subject: "Chemistry",
    chapter: "Organic Chemistry - Unit 2",
    date: "Oct 25, 2024",
    daysLeft: 15,
    topics: ["Reactions", "Mechanisms", "Stereochemistry"]
  },
]

// Learning videos
const learningVideos = [
  {
    title: "Understanding Derivatives - Complete Guide",
    subject: "Mathematics",
    duration: "45 min",
    views: "24K",
    instructor: "Dr. Sharma",
    difficulty: "Intermediate"
  },
  {
    title: "Electromagnetic Induction Explained",
    subject: "Physics",
    duration: "38 min",
    views: "18K",
    instructor: "Prof. Kumar",
    difficulty: "Advanced"
  },
  {
    title: "Organic Reaction Mechanisms Made Easy",
    subject: "Chemistry",
    duration: "52 min",
    views: "32K",
    instructor: "Dr. Patel",
    difficulty: "Intermediate"
  },
]

export default function StudentDashboard() {
  const [activeTab, setActiveTab] = useState("home")
  const { sidebarOpen, setSidebarOpen, mobileMenuOpen, setMobileMenuOpen } = useAppStore()
  const [notifications, setNotifications] = useState(3)
  const [streakDays, setStreakDays] = useState(15)
  const [showOnboarding, setShowOnboarding] = useState(false)

  useEffect(() => {
    // Check if onboarding has been completed
    const onboardingCompleted = localStorage.getItem("onboarding_completed")
    if (!onboardingCompleted) {
      setShowOnboarding(true)
    }
  }, [])

  const handleCloseOnboarding = () => {
    setShowOnboarding(false)
  }

  return (
    <>
      <header className="sticky top-0 z-10 flex h-16 items-center gap-3 border-b bg-background/95 px-4 backdrop-blur">
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(true)}>
          <Menu className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" className="hidden md:flex" onClick={() => setSidebarOpen(!sidebarOpen)}>
          <PanelLeft className="h-5 w-5" />
        </Button>
        <div className="flex flex-1 items-center justify-between">
          <h1 className="text-xl font-semibold">AI Tutor Dashboard</h1>
          <div className="flex items-center gap-3">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-2xl">
                    <MessageSquare className="h-5 w-5" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Ask AI Tutor</TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-2xl relative">
                    <Bell className="h-5 w-5" />
                    {notifications > 0 && (
                      <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                        {notifications}
                      </span>
                    )}
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Notifications</TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <Avatar className="h-9 w-9 border-2 border-primary">
              <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Student" />
              <AvatarFallback>ST</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <main className="flex-1 p-4 md:p-6">
        <Tabs defaultValue="home" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <TabsList className="grid w-full max-w-[600px] grid-cols-5 rounded-2xl p-1">
              <TabsTrigger value="home" className="rounded-xl">
                Home
              </TabsTrigger>
              <TabsTrigger value="subjects" className="rounded-xl">
                Subjects
              </TabsTrigger>
              <TabsTrigger value="quizzes" className="rounded-xl">
                Quizzes
              </TabsTrigger>
              <TabsTrigger value="materials" className="rounded-xl">
                Materials
              </TabsTrigger>
              <TabsTrigger value="progress" className="rounded-xl">
                Progress
              </TabsTrigger>
            </TabsList>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <TabsContent value="home" className="space-y-6 mt-0">
                {/* Hero Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 p-8 text-white"
                >
                  <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Badge className="bg-white/20 text-white hover:bg-white/30 rounded-xl">
                          <Flame className="w-3 h-3 mr-1" />
                          {streakDays} Day Streak
                        </Badge>
                        <Badge className="bg-white/20 text-white hover:bg-white/30 rounded-xl">
                          CBSE Class 12
                        </Badge>
                      </div>
                      <h2 className="text-3xl font-bold">Welcome Back, Student!</h2>
                      <p className="max-w-[600px] text-white/90">
                        Continue your learning journey. You're doing great! Keep up the momentum.
                      </p>
                      <div className="flex flex-wrap gap-3">
                        <Button className="rounded-2xl bg-white text-indigo-700 hover:bg-white/90">
                          <Brain className="mr-2 h-4 w-4" />
                          Ask AI Tutor
                        </Button>
                        <Button
                          variant="outline"
                          className="rounded-2xl bg-transparent border-white text-white hover:bg-white/10"
                        >
                          <Target className="mr-2 h-4 w-4" />
                          Set Goals
                        </Button>
                      </div>
                    </div>
                    <div className="hidden lg:flex flex-col gap-3 bg-white/10 backdrop-blur-md rounded-2xl p-6 min-w-[200px]">
                      <div className="text-center">
                        <div className="text-4xl font-bold">156</div>
                        <div className="text-sm text-white/80">Quizzes Completed</div>
                      </div>
                      <div className="h-px bg-white/20" />
                      <div className="text-center">
                        <div className="text-4xl font-bold">84%</div>
                        <div className="text-sm text-white/80">Average Score</div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Card className="rounded-3xl">
                    <CardContent className="p-6 text-center">
                      <Trophy className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                      <div className="text-2xl font-bold">24</div>
                      <div className="text-sm text-muted-foreground">Total Achievements</div>
                    </CardContent>
                  </Card>
                  <Card className="rounded-3xl">
                    <CardContent className="p-6 text-center">
                      <Clock className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                      <div className="text-2xl font-bold">42h</div>
                      <div className="text-sm text-muted-foreground">Study Time</div>
                    </CardContent>
                  </Card>
                  <Card className="rounded-3xl">
                    <CardContent className="p-6 text-center">
                      <CheckCircle2 className="w-8 h-8 text-green-500 mx-auto mb-2" />
                      <div className="text-2xl font-bold">156</div>
                      <div className="text-sm text-muted-foreground">Quizzes Done</div>
                    </CardContent>
                  </Card>
                  <Card className="rounded-3xl">
                    <CardContent className="p-6 text-center">
                      <Star className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                      <div className="text-2xl font-bold">4.2</div>
                      <div className="text-sm text-muted-foreground">Avg Rating</div>
                    </CardContent>
                  </Card>
                </div>

                {/* Subjects Overview */}
                <section className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-semibold">Your Subjects</h2>
                    <Button variant="ghost" className="rounded-2xl">
                      View All
                    </Button>
                  </div>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {subjects.map((subject) => (
                      <motion.div key={subject.name} whileHover={{ scale: 1.02, y: -5 }} whileTap={{ scale: 0.98 }}>
                        <Card className="overflow-hidden rounded-3xl border-2 hover:border-primary/50 transition-all">
                          <CardHeader className="pb-3">
                            <div className="flex items-center justify-between">
                              <div className={`text-4xl bg-gradient-to-br ${subject.color} w-14 h-14 rounded-2xl flex items-center justify-center`}>
                                {subject.icon}
                              </div>
                              <Badge variant="secondary" className="rounded-xl">{subject.grade}</Badge>
                            </div>
                          </CardHeader>
                          <CardContent className="space-y-3">
                            <div>
                              <CardTitle className="text-lg">{subject.name}</CardTitle>
                              <CardDescription className="text-sm">{subject.chapter}</CardDescription>
                            </div>
                            <div className="space-y-2">
                              <div className="flex justify-between text-sm">
                                <span className="text-muted-foreground">Progress</span>
                                <span className="font-semibold">{subject.progress}%</span>
                              </div>
                              <Progress value={subject.progress} className="h-2 rounded-xl" />
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {subject.completed}/{subject.quizzes} quizzes completed
                            </div>
                          </CardContent>
                          <CardFooter>
                            <Button className="w-full rounded-2xl" variant="secondary">
                              Continue Learning
                            </Button>
                          </CardFooter>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </section>

                {/* Recent Activity & Upcoming Tests */}
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                  <section className="space-y-4">
                    <h2 className="text-2xl font-semibold">Recent Quiz Attempts</h2>
                    <Card className="rounded-3xl">
                      <CardContent className="p-0">
                        <div className="divide-y">
                          {recentQuizzes.map((quiz, index) => (
                            <motion.div
                              key={index}
                              whileHover={{ backgroundColor: "rgba(0,0,0,0.02)" }}
                              className="p-4"
                            >
                              <div className="flex justify-between items-start mb-2">
                                <div>
                                  <h3 className="font-semibold">{quiz.subject}</h3>
                                  <p className="text-sm text-muted-foreground">{quiz.chapter}</p>
                                </div>
                                <Badge className={`rounded-xl ${
                                  quiz.score >= 90 ? 'bg-green-100 text-green-700' :
                                  quiz.score >= 75 ? 'bg-blue-100 text-blue-700' :
                                  'bg-amber-100 text-amber-700'
                                }`}>
                                  {quiz.score}%
                                </Badge>
                              </div>
                              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                <span>{quiz.questions} questions</span>
                                <span>•</span>
                                <span>{quiz.time}</span>
                                <span>•</span>
                                <span>{quiz.date}</span>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </section>

                  <section className="space-y-4">
                    <h2 className="text-2xl font-semibold">Upcoming Tests</h2>
                    <div className="space-y-3">
                      {upcomingTests.map((test, index) => (
                        <motion.div key={index} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                          <Card className="rounded-3xl">
                            <CardContent className="p-4">
                              <div className="flex justify-between items-start mb-2">
                                <div>
                                  <h3 className="font-semibold">{test.subject}</h3>
                                  <p className="text-sm text-muted-foreground">{test.chapter}</p>
                                </div>
                                <Badge variant="outline" className={`rounded-xl ${
                                  test.daysLeft <= 5 ? 'border-red-300 text-red-700' : 'border-blue-300 text-blue-700'
                                }`}>
                                  {test.daysLeft} days left
                                </Badge>
                              </div>
                              <div className="flex flex-wrap gap-2 mb-3">
                                {test.topics.map((topic, i) => (
                                  <Badge key={i} variant="secondary" className="rounded-lg text-xs">
                                    {topic}
                                  </Badge>
                                ))}
                              </div>
                              <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4 text-muted-foreground" />
                                <span className="text-sm text-muted-foreground">{test.date}</span>
                              </div>
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))}
                    </div>
                  </section>
                </div>

                {/* Learning Videos */}
                <section className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-semibold">Recommended Videos</h2>
                    <Button variant="ghost" className="rounded-2xl">Explore</Button>
                  </div>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    {learningVideos.map((video, index) => (
                      <motion.div key={index} whileHover={{ scale: 1.02, y: -5 }} whileTap={{ scale: 0.98 }}>
                        <Card className="rounded-3xl overflow-hidden">
                          <div className="aspect-video bg-gradient-to-br from-indigo-500 to-purple-600 relative">
                            <div className="absolute inset-0 flex items-center justify-center">
                              <Button size="icon" className="h-14 w-14 rounded-full bg-white/90 hover:bg-white">
                                <Play className="h-6 w-6 text-indigo-600" />
                              </Button>
                            </div>
                            <div className="absolute top-3 right-3">
                              <Badge className="bg-white/90 text-gray-900 rounded-xl">{video.duration}</Badge>
                            </div>
                          </div>
                          <CardContent className="p-4">
                            <Badge variant="outline" className="rounded-lg mb-2">{video.subject}</Badge>
                            <h3 className="font-semibold mb-2">{video.title}</h3>
                            <div className="flex items-center justify-between text-sm text-muted-foreground">
                              <span>{video.instructor}</span>
                              <span>{video.views} views</span>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </section>
              </TabsContent>

              <TabsContent value="subjects" className="space-y-6 mt-0">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-8 text-white"
                >
                  <h2 className="text-3xl font-bold mb-2">All Subjects</h2>
                  <p className="text-white/90">Master your NCERT curriculum with AI-powered learning</p>
                </motion.div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {subjects.map((subject) => (
                    <Card key={subject.name} className="rounded-3xl">
                      <CardHeader>
                        <div className="flex items-center gap-3">
                          <div className={`text-5xl bg-gradient-to-br ${subject.color} w-16 h-16 rounded-2xl flex items-center justify-center`}>
                            {subject.icon}
                          </div>
                          <div>
                            <CardTitle>{subject.name}</CardTitle>
                            <Badge variant="secondary"className="mt-1">{subject.grade}</Badge>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <div className="text-sm font-medium mb-1">Current Chapter</div>
                          <div className="text-sm text-muted-foreground">{subject.chapter}</div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Overall Progress</span>
                            <span className="font-semibold">{subject.progress}%</span>
                          </div>
                          <Progress value={subject.progress} className="h-2 rounded-xl" />
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Completed Quizzes</span>
                          <span className="font-medium">{subject.completed}/{subject.quizzes}</span>
                        </div>
                      </CardContent>
                      <CardFooter className="flex gap-2">
                        <Button className="flex-1 rounded-2xl">Start Learning</Button>
                        <Button variant="outline" className="rounded-2xl">
                          <BookOpen className="h-4 w-4" />
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="quizzes" className="space-y-6 mt-0">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="overflow-hidden rounded-3xl bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 p-8 text-white"
                >
                  <h2 className="text-3xl font-bold mb-2">Practice Quizzes</h2>
                  <p className="text-white/90">Test your knowledge and track your improvement</p>
                </motion.div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {subjects.map((subject) => (
                    <Card key={subject.name} className="rounded-3xl">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div className="flex items-center gap-3">
                            <div className={`text-4xl bg-gradient-to-br ${subject.color} w-12 h-12 rounded-2xl flex items-center justify-center`}>
                              {subject.icon}
                            </div>
                            <div>
                              <CardTitle>{subject.name}</CardTitle>
                              <CardDescription>{subject.chapter}</CardDescription>
                            </div>
                          </div>
                          <Badge className="rounded-xl">{subject.quizzes} quizzes</Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <Progress value={(subject.completed / subject.quizzes) * 100} className="h-2 rounded-xl mb-2" />
                        <div className="text-sm text-muted-foreground">
                          {subject.completed} of {subject.quizzes} completed
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full rounded-2xl">
                          <Zap className="mr-2 h-4 w-4" />
                          Take Quiz
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="materials" className="space-y-6 mt-0">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="overflow-hidden rounded-3xl bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 p-8 text-white"
                >
                  <h2 className="text-3xl font-bold mb-2">Study Materials</h2>
                  <p className="text-white/90">Access NCERT solutions, notes, and reference materials</p>
                </motion.div>

                <div className="space-y-3">
                  {studyMaterials.map((material, index) => (
                    <Card key={index} className="rounded-3xl">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-muted flex items-center justify-center">
                              <FileText className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                              <h3 className="font-semibold">{material.title}</h3>
                              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                                <Badge variant="outline" className="rounded-lg">{material.subject}</Badge>
                                <span>{material.pages} pages</span>
                                <span>•</span>
                                <span>Updated {material.updated}</span>
                              </div>
                            </div>
                          </div>
                          <Button variant="outline" className="rounded-2xl">
                            View
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="progress" className="space-y-6 mt-0">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="overflow-hidden rounded-3xl bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 p-8 text-white"
                >
                  <h2 className="text-3xl font-bold mb-2">Your Progress</h2>
                  <p className="text-white/90">Track your learning journey and achievements</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card className="rounded-3xl col-span-1">
                    <CardHeader>
                      <CardTitle>Overall Performance</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="text-center">
                        <div className="text-5xl font-bold text-primary">73%</div>
                        <div className="text-sm text-muted-foreground">Average Score</div>
                      </div>
                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between text-sm mb-2">
                            <span>Mathematics</span>
                            <span className="font-semibold">75%</span>
                          </div>
                          <Progress value={75} className="h-2 rounded-xl" />
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-2">
                            <span>Chemistry</span>
                            <span className="font-semibold">85%</span>
                          </div>
                          <Progress value={85} className="h-2 rounded-xl" />
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-2">
                            <span>Physics</span>
                            <span className="font-semibold">60%</span>
                          </div>
                          <Progress value={60} className="h-2 rounded-xl" />
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-2">
                            <span>Biology</span>
                            <span className="font-semibold">70%</span>
                          </div>
                          <Progress value={70} className="h-2 rounded-xl" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="rounded-3xl col-span-1 md:col-span-2">
                    <CardHeader>
                      <CardTitle>Recent Achievements</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        <div className="text-center p-4 rounded-2xl bg-yellow-50">
                          <Trophy className="w-10 h-10 text-yellow-500 mx-auto mb-2" />
                          <div className="font-semibold">Perfect Score</div>
                          <div className="text-xs text-muted-foreground">Chemistry Quiz</div>
                        </div>
                        <div className="text-center p-4 rounded-2xl bg-blue-50">
                          <Flame className="w-10 h-10 text-orange-500 mx-auto mb-2" />
                          <div className="font-semibold">15 Day Streak</div>
                          <div className="text-xs text-muted-foreground">Keep going!</div>
                        </div>
                        <div className="text-center p-4 rounded-2xl bg-green-50">
                          <Target className="w-10 h-10 text-green-500 mx-auto mb-2" />
                          <div className="font-semibold">Goal Achieved</div>
                          <div className="text-xs text-muted-foreground">100 quizzes</div>
                        </div>
                        <div className="text-center p-4 rounded-2xl bg-purple-50">
                          <Star className="w-10 h-10 text-purple-500 mx-auto mb-2" />
                          <div className="font-semibold">Top Performer</div>
                          <div className="text-xs text-muted-foreground">This week</div>
                        </div>
                        <div className="text-center p-4 rounded-2xl bg-pink-50">
                          <GraduationCap className="w-10 h-10 text-pink-500 mx-auto mb-2" />
                          <div className="font-semibold">Quick Learner</div>
                          <div className="text-xs text-muted-foreground">Fast completion</div>
                        </div>
                        <div className="text-center p-4 rounded-2xl bg-indigo-50">
                          <Award className="w-10 h-10 text-indigo-500 mx-auto mb-2" />
                          <div className="font-semibold">All Rounder</div>
                          <div className="text-xs text-muted-foreground">All subjects</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card className="rounded-3xl">
                  <CardHeader>
                    <CardTitle>Weekly Activity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Monday</span>
                        <div className="flex gap-1">
                          <div className="w-3 h-3 rounded-sm bg-green-500"></div>
                          <div className="w-3 h-3 rounded-sm bg-green-500"></div>
                          <div className="w-3 h-3 rounded-sm bg-green-500"></div>
                          <div className="w-3 h-3 rounded-sm bg-gray-200"></div>
                        </div>
                        <span className="text-sm text-muted-foreground">3 quizzes</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Tuesday</span>
                        <div className="flex gap-1">
                          <div className="w-3 h-3 rounded-sm bg-green-500"></div>
                          <div className="w-3 h-3 rounded-sm bg-green-500"></div>
                          <div className="w-3 h-3 rounded-sm bg-gray-200"></div>
                          <div className="w-3 h-3 rounded-sm bg-gray-200"></div>
                        </div>
                        <span className="text-sm text-muted-foreground">2 quizzes</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Wednesday</span>
                        <div className="flex gap-1">
                          <div className="w-3 h-3 rounded-sm bg-green-500"></div>
                          <div className="w-3 h-3 rounded-sm bg-green-500"></div>
                          <div className="w-3 h-3 rounded-sm bg-green-500"></div>
                          <div className="w-3 h-3 rounded-sm bg-green-500"></div>
                        </div>
                        <span className="text-sm text-muted-foreground">4 quizzes</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Thursday</span>
                        <div className="flex gap-1">
                          <div className="w-3 h-3 rounded-sm bg-green-500"></div>
                          <div className="w-3 h-3 rounded-sm bg-gray-200"></div>
                          <div className="w-3 h-3 rounded-sm bg-gray-200"></div>
                          <div className="w-3 h-3 rounded-sm bg-gray-200"></div>
                        </div>
                        <span className="text-sm text-muted-foreground">1 quiz</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Friday</span>
                        <div className="flex gap-1">
                          <div className="w-3 h-3 rounded-sm bg-green-500"></div>
                          <div className="w-3 h-3 rounded-sm bg-green-500"></div>
                          <div className="w-3 h-3 rounded-sm bg-green-500"></div>
                          <div className="w-3 h-3 rounded-sm bg-gray-200"></div>
                        </div>
                        <span className="text-sm text-muted-foreground">3 quizzes</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </motion.div>
          </AnimatePresence>
        </Tabs>
      </main>
      
      <OnboardingModal 
        isOpen={showOnboarding} 
        onClose={handleCloseOnboarding} 
      />
    </>
  )
}
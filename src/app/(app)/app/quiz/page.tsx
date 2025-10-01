"use client"
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { useAppStore } from '@/stores/appsidebarStore'
import { motion } from 'framer-motion'
import {
    Bell, BookOpen, Brain, Calendar, CheckCircle2, Clock, Globe, Menu, MessageSquare, PanelLeft, Award, TrendingUp, Target, Zap
} from 'lucide-react'
import Link from 'next/link'

function QuizPage() {
    const { sidebarOpen, setSidebarOpen, mobileMenuOpen, setMobileMenuOpen } = useAppStore()

    // NCERT Subjects with quiz data
    const subjects = [
        {
            name: "Mathematics",
            icon: <Brain className="text-blue-600" />,
            chapter: "Algebra",
            totalQuizzes: 12,
            completedQuizzes: 8,
            averageScore: 85,
            lastAttempt: "2 days ago",
            color: "bg-background shadow-xl border-blue-200",
            iconBg: "bg-blue-100"
        },
        {
            name: "Physics",
            icon: <Zap className="text-purple-600" />,
            chapter: "Mechanics",
            totalQuizzes: 10,
            completedQuizzes: 6,
            averageScore: 78,
            lastAttempt: "5 days ago",
            color: "bg-background shadow-xl border-purple-200",
            iconBg: "bg-purple-100"
        },
        {
            name: "Chemistry",
            icon: <Globe className="text-green-600" />,
            chapter: "Organic Chemistry",
            totalQuizzes: 15,
            completedQuizzes: 10,
            averageScore: 92,
            lastAttempt: "1 day ago",
            color: "bg-background shadow-xl border-green-200",
            iconBg: "bg-green-100"
        },
        {
            name: "Biology",
            icon: <BookOpen className="text-emerald-600" />,
            chapter: "Cell Biology",
            totalQuizzes: 8,
            completedQuizzes: 5,
            averageScore: 88,
            lastAttempt: "3 days ago",
            color: "bg-background shadow-xl border-emerald-200",
            iconBg: "bg-emerald-100"
        },
        {
            name: "Computer Science",
            icon: <Award className="text-amber-600" />,
            chapter: "Basics of Programming",
            totalQuizzes: 6,
            completedQuizzes: 3,
            averageScore: 75,
            lastAttempt: "1 week ago",
            color: "bg-background shadow-xlborder-amber-200",
            iconBg: "bg-amber-100"
        },
        {
            name: "Geography",
            icon: <Globe className="text-cyan-600" />,
            chapter: "Physical Geography",
            totalQuizzes: 9,
            completedQuizzes: 4,
            averageScore: 82,
            lastAttempt: "4 days ago",
            color: "bg-background shadow-xl border-cyan-200",
            iconBg: "bg-cyan-100"
        },
    ]

    // Recent quiz attempts
    const recentQuizzes = [
        {
            subject: "Chemistry",
            chapter: "Organic Reactions",
            score: 95,
            totalQuestions: 20,
            date: "Today",
            duration: "15 min",
            status: "Excellent"
        },
        {
            subject: "Mathematics",
            chapter: "Quadratic Equations",
            score: 82,
            totalQuestions: 25,
            date: "Yesterday",
            duration: "18 min",
            status: "Good"
        },
        {
            subject: "Physics",
            chapter: "Newton's Laws",
            score: 78,
            totalQuestions: 15,
            date: "2 days ago",
            duration: "12 min",
            status: "Good"
        },
        {
            subject: "Biology",
            chapter: "Cell Structure",
            score: 88,
            totalQuestions: 20,
            date: "3 days ago",
            duration: "16 min",
            status: "Very Good"
        },
    ]

    // Upcoming quizzes
    const upcomingQuizzes = [
        {
            subject: "Mathematics",
            chapter: "Trigonometry",
            questions: 30,
            difficulty: "Medium",
            estimatedTime: "20 min",
            topics: ["Identities", "Equations", "Graphs"]
        },
        {
            subject: "Physics",
            chapter: "Thermodynamics",
            questions: 25,
            difficulty: "Hard",
            estimatedTime: "25 min",
            topics: ["Laws", "Heat Transfer", "Entropy"]
        },
        {
            subject: "Chemistry",
            chapter: "Chemical Bonding",
            questions: 20,
            difficulty: "Easy",
            estimatedTime: "15 min",
            topics: ["Ionic", "Covalent", "Metallic"]
        },
    ]

    const getScoreColor = (score: number) => {
        if (score >= 90) return "text-green-600 bg-green-50"
        if (score >= 75) return "text-blue-600 bg-blue-50"
        if (score >= 60) return "text-amber-600 bg-amber-50"
        return "text-red-600 bg-red-50"
    }

    const getDifficultyColor = (difficulty: string) => {
        if (difficulty === "Easy") return "bg-green-100 text-green-700"
        if (difficulty === "Medium") return "bg-amber-100 text-amber-700"
        return "bg-red-100 text-red-700"
    }

    return (
        <div>
            <header className="sticky top-0 z-10 flex h-16 items-center gap-3 border-b bg-background/95 px-4 backdrop-blur">
                <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(true)}>
                    <Menu className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="hidden md:flex" onClick={() => setSidebarOpen(!sidebarOpen)}>
                    <PanelLeft className="h-5 w-5" />
                </Button>
                <div className="flex flex-1 items-center justify-between">
                    <h1 className="text-xl font-semibold">NCERT Quiz Dashboard</h1>
                    <div className="flex items-center gap-3">
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button variant="ghost" size="icon" className="rounded-2xl">
                                        <MessageSquare className="h-5 w-5" />
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>Help & Support</TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button variant="ghost" size="icon" className="rounded-2xl relative">
                                        <Bell className="h-5 w-5" />
                                        <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                                            3
                                        </span>
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>Quiz Reminders</TooltipContent>
                            </Tooltip>
                        </TooltipProvider>

                        <Avatar className="h-9 w-9 border-2 border-primary">
                            <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User" />
                            <AvatarFallback>ST</AvatarFallback>
                        </Avatar>
                    </div>
                </div>
            </header>

            <div className="space-y-6 p-6">
                {/* Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 p-8 text-white"
                >
                    <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                        <div className="space-y-4">
                            <Badge className="bg-white/20 text-white hover:bg-white/30 rounded-xl border-white/30">
                                <Target className="mr-1 h-3 w-3" />
                                CBSE Class 12
                            </Badge>
                            <h2 className="text-3xl font-bold">Master Your NCERT Chapters</h2>
                            <p className="max-w-[600px] text-white/90">
                                Test your knowledge with chapter-wise quizzes. Track your progress and improve your scores with detailed analytics.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <Button className="rounded-2xl bg-white text-indigo-700 hover:bg-white/90">
                                    <Brain className="mr-2 h-4 w-4" />
                                    Start Learning
                                </Button>
                                <Button
                                    variant="outline"
                                    className="rounded-2xl bg-transparent border-white text-white hover:bg-white/10"
                                >
                                    View Progress
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

                {/* Available Subjects */}
                <section className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <h2 className="text-2xl font-semibold">Available Subjects</h2>
                            <p className="text-sm text-muted-foreground">Choose a subject to start your quiz</p>
                        </div>
                        <Button variant="outline" className="rounded-2xl">
                            <TrendingUp className="mr-2 h-4 w-4" />
                            View Analytics
                        </Button>
                    </div>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {subjects.map((subject) => (
                            <motion.div
                                key={subject.name}
                                whileHover={{ scale: 1.02, y: -5 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Card className={`overflow-hidden rounded-3xl border-2 hover:shadow-lg transition-all duration-300 ${subject.color}`}>
                                    <CardHeader className="pb-3">
                                        <div className="flex items-start justify-between">
                                            <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${subject.iconBg}`}>
                                                {subject.icon}
                                            </div>
                                            <Badge variant="secondary" className="rounded-xl">
                                                {subject.completedQuizzes}/{subject.totalQuizzes}
                                            </Badge>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="space-y-3">
                                        <div>
                                            <CardTitle className="text-xl mb-1">{subject.name}</CardTitle>
                                            <CardDescription className="text-sm">Current: {subject.chapter}</CardDescription>
                                        </div>

                                        <div className="space-y-2">
                                            <div className="flex items-center justify-between text-sm">
                                                <span className="text-muted-foreground">Progress</span>
                                                <span className="font-semibold">{Math.round((subject.completedQuizzes / subject.totalQuizzes) * 100)}%</span>
                                            </div>
                                            <Progress
                                                value={(subject.completedQuizzes / subject.totalQuizzes) * 100}
                                                className="h-2 rounded-xl"
                                            />
                                        </div>

                                        <div className="flex items-center justify-between pt-2 text-sm">
                                            <div className="flex items-center gap-1 text-muted-foreground">
                                                <Award className="h-4 w-4" />
                                                Avg: {subject.averageScore}%
                                            </div>
                                            <div className="flex items-center gap-1 text-muted-foreground">
                                                <Clock className="h-4 w-4" />
                                                {subject.lastAttempt}
                                            </div>
                                        </div>
                                    </CardContent>
                                    <CardFooter className="pt-0">
                                        <Button className="w-full rounded-2xl" size="lg" asChild>
                                            <Link href={`/PracticeQuiz/${subject.name.toLowerCase()}`}>
                                                <BookOpen className="mr-2 h-4 w-4" />
                                                Start Quiz
                                            </Link>
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Recent & Upcoming Quizzes */}
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                    {/* Recent Quiz Attempts */}
                    <section className="space-y-4">
                        <div className="flex items-center justify-between">
                            <h2 className="text-2xl font-semibold">Recent Attempts</h2>
                            <Button variant="ghost" className="rounded-2xl">
                                View All
                            </Button>
                        </div>
                        <Card className="rounded-3xl">
                            <CardContent className="p-0">
                                <div className="divide-y">
                                    {recentQuizzes.map((quiz, index) => (
                                        <motion.div
                                            key={index}
                                            whileHover={{ backgroundColor: "rgba(0,0,0,0.02)" }}
                                            className="p-4"
                                        >
                                            <div className="flex items-start justify-between mb-2">
                                                <div>
                                                    <h3 className="font-semibold">{quiz.subject}</h3>
                                                    <p className="text-sm text-muted-foreground">{quiz.chapter}</p>
                                                </div>
                                                <Badge className={`rounded-xl font-semibold ${getScoreColor(quiz.score)}`}>
                                                    {quiz.score}%
                                                </Badge>
                                            </div>
                                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                                <div className="flex items-center gap-1">
                                                    <CheckCircle2 className="h-4 w-4" />
                                                    {Math.round(quiz.score * quiz.totalQuestions / 100)}/{quiz.totalQuestions} correct
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <Clock className="h-4 w-4" />
                                                    {quiz.duration}
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <Calendar className="h-4 w-4" />
                                                    {quiz.date}
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </section>

                    {/* Upcoming Quizzes */}
                    <section className="space-y-4">
                        <div className="flex items-center justify-between">
                            <h2 className="text-2xl font-semibold">Recommended Quizzes</h2>
                            <Button variant="ghost" className="rounded-2xl">
                                Customize
                            </Button>
                        </div>
                        <div className="space-y-3">
                            {upcomingQuizzes.map((quiz, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <Card className="rounded-3xl hover:shadow-md transition-shadow">
                                        <CardContent className="p-4">
                                            <div className="flex items-start justify-between mb-3">
                                                <div>
                                                    <h3 className="font-semibold text-lg">{quiz.subject}</h3>
                                                    <p className="text-sm text-muted-foreground">{quiz.chapter}</p>
                                                </div>
                                                <Badge className={`rounded-xl ${getDifficultyColor(quiz.difficulty)}`}>
                                                    {quiz.difficulty}
                                                </Badge>
                                            </div>

                                            <div className="flex flex-wrap gap-2 mb-3">
                                                {quiz.topics.map((topic, i) => (
                                                    <Badge key={i} variant="outline" className="rounded-lg text-xs">
                                                        {topic}
                                                    </Badge>
                                                ))}
                                            </div>

                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                                    <div className="flex items-center gap-1">
                                                        <BookOpen className="h-4 w-4" />
                                                        {quiz.questions} questions
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <Clock className="h-4 w-4" />
                                                        {quiz.estimatedTime}
                                                    </div>
                                                </div>
                                                <Button size="sm" className="rounded-xl">
                                                    Attempt
                                                </Button>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default QuizPage
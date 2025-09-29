"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { 
  LineChart, 
  Line, 
  AreaChart, 
  Area, 
  BarChart, 
  Bar, 
  PieChart, 
  Pie, 
  Cell,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  ComposedChart
} from "recharts"
import { 
  TrendingUp, 
  TrendingDown, 
  BookOpen, 
  Target, 
  Users, 
  Award,
  Clock,
  ChevronDown,
  Filter,
  Download,
  Calendar,
  Brain,
  Zap,
  BarChart3,
  Star,
  BookOpenCheck,
  GraduationCap,
  Activity,
  Lightbulb,
  CheckCircle,
  AlertCircle,
  ArrowUpRight,
  ArrowDownRight
} from "lucide-react"

// Enhanced mock data for analytics
const scoreData = [
  { month: "Jan", score: 65, avgScore: 70, syllabusCoverage: 25, questions: 45 },
  { month: "Feb", score: 72, avgScore: 73, syllabusCoverage: 35, questions: 62 },
  { month: "Mar", score: 78, avgScore: 75, syllabusCoverage: 48, questions: 89 },
  { month: "Apr", score: 85, avgScore: 77, syllabusCoverage: 62, questions: 124 },
  { month: "May", score: 82, avgScore: 78, syllabusCoverage: 75, questions: 156 },
  { month: "Jun", score: 88, avgScore: 80, syllabusCoverage: 88, questions: 189 },
]

const topicStrengthData = [
  { topic: "Algebra", weak: 15, strong: 85, total: 100, improvement: "+12%" },
  { topic: "Geometry", weak: 35, strong: 65, total: 100, improvement: "+8%" },
  { topic: "Calculus", weak: 25, strong: 75, total: 100, improvement: "+15%" },
  { topic: "Statistics", weak: 10, strong: 90, total: 100, improvement: "+5%" },
  { topic: "Trigonometry", weak: 40, strong: 60, total: 100, improvement: "+18%" },
  { topic: "Probability", weak: 45, strong: 55, total: 100, improvement: "+22%" },
]

const chapterMasteryData = [
  { chapter: "Linear Equations", mastery: 95, timeSpent: "12h", completed: true, syllabusCoverage: 100, difficulty: "Easy", lastStudied: "2 days ago" },
  { chapter: "Quadratic Functions", mastery: 87, timeSpent: "8h", completed: true, syllabusCoverage: 100, difficulty: "Medium", lastStudied: "4 days ago" },
  { chapter: "Polynomial Expressions", mastery: 72, timeSpent: "15h", completed: false, syllabusCoverage: 75, difficulty: "Medium", lastStudied: "1 day ago" },
  { chapter: "Logarithms", mastery: 65, timeSpent: "6h", completed: false, syllabusCoverage: 60, difficulty: "Hard", lastStudied: "3 days ago" },
  { chapter: "Exponential Functions", mastery: 58, timeSpent: "4h", completed: false, syllabusCoverage: 45, difficulty: "Hard", lastStudied: "5 days ago" },
  { chapter: "Complex Numbers", mastery: 45, timeSpent: "3h", completed: false, syllabusCoverage: 30, difficulty: "Hard", lastStudied: "1 week ago" },
]

const performanceRadarData = [
  { subject: "Problem Solving", yourScore: 85, classAvg: 75 },
  { subject: "Speed", yourScore: 78, classAvg: 70 },
  { subject: "Accuracy", yourScore: 92, classAvg: 80 },
  { subject: "Consistency", yourScore: 76, classAvg: 72 },
  { subject: "Conceptual Understanding", yourScore: 88, classAvg: 65 },
  { subject: "Application Skills", yourScore: 82, classAvg: 68 },
]

const weeklyActivityData = [
  { day: "Mon", studyTime: 2.5, questions: 15, accuracy: 78 },
  { day: "Tue", studyTime: 3.2, questions: 22, accuracy: 85 },
  { day: "Wed", studyTime: 1.8, questions: 12, accuracy: 92 },
  { day: "Thu", studyTime: 4.1, questions: 28, accuracy: 88 },
  { day: "Fri", studyTime: 2.9, questions: 18, accuracy: 82 },
  { day: "Sat", studyTime: 5.2, questions: 35, accuracy: 90 },
  { day: "Sun", studyTime: 3.8, questions: 25, accuracy: 86 },
]

const subjectDistributionData = [
  { name: "Mathematics", value: 35, color: "#8b5cf6" }, // violet
  { name: "Physics", value: 25, color: "#f97316" }, // orange
  { name: "Chemistry", value: 20, color: "#06b6d4" }, // cyan
  { name: "Biology", value: 20, color: "#10b981" }, // emerald
]

const learningStreaksData = [
  { week: "Week 1", streak: 3, target: 7 },
  { week: "Week 2", streak: 5, target: 7 },
  { week: "Week 3", streak: 7, target: 7 },
  { week: "Week 4", streak: 4, target: 7 },
]

export default function AnalyticsPage() {
  const [timeRange, setTimeRange] = useState("6months")
  const [subject, setSubject] = useState("mathematics")

  return (
    <div className="min-h-screen bg-background p-4 md:p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Modern Header */}
        <div className="bg-card border rounded-3xl p-6 md:p-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <h1 className="text-3xl md:text-4xl font-semibold text-foreground">
                  Performance Analytics
                </h1>
              </div>
              <p className="text-muted-foreground text-lg">
                Track your learning journey and master your syllabus
              </p>
              <div className="flex items-center gap-3 pt-2">
                <Badge variant="secondary" className="gap-1 rounded-xl">
                  <CheckCircle className="w-3 h-3" />
                  88% Syllabus Coverage
                </Badge>
                <Badge variant="outline" className="gap-1 rounded-xl">
                  <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  Top 15% Performer
                </Badge>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Select value={subject} onValueChange={setSubject}>
                <SelectTrigger className="w-[200px] rounded-2xl">
                  <SelectValue placeholder="Select Subject" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mathematics">📐 Mathematics</SelectItem>
                  <SelectItem value="physics">⚡ Physics</SelectItem>
                  <SelectItem value="chemistry">🧪 Chemistry</SelectItem>
                  <SelectItem value="biology">🌱 Biology</SelectItem>
                </SelectContent>
              </Select>
              
              <Select value={timeRange} onValueChange={setTimeRange}>
                <SelectTrigger className="w-[200px] rounded-2xl">
                  <SelectValue placeholder="Select Time Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1month">Last Month</SelectItem>
                  <SelectItem value="3months">Last 3 Months</SelectItem>
                  <SelectItem value="6months">Last 6 Months</SelectItem>
                  <SelectItem value="1year">Last Year</SelectItem>
                </SelectContent>
              </Select>
              
              <Button variant="outline" className="gap-2 rounded-2xl">
                <Download className="w-4 h-4" />
                Export Report
              </Button>
            </div>
          </div>
        </div>

        {/* Enhanced Key Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {/* Current Score Card */}
          <Card className="relative overflow-hidden bg-gradient-to-br from-violet-500 to-purple-600 text-white border-0 shadow-lg rounded-3xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/80 text-sm font-medium">Current Score</p>
                  <p className="text-3xl font-bold">88%</p>
                  <div className="flex items-center gap-1 mt-2">
                    <ArrowUpRight className="w-4 h-4 text-green-300" />
                    <span className="text-sm text-green-300">+6% this month</span>
                  </div>
                </div>
                <div className="p-3 bg-white/20 rounded-lg">
                  <Target className="w-6 h-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Study Streak Card */}
          <Card className="relative overflow-hidden bg-gradient-to-br from-orange-500 to-red-600 text-white border-0 shadow-lg rounded-3xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/80 text-sm font-medium">Study Streak</p>
                  <p className="text-3xl font-bold">12 days</p>
                  <div className="flex items-center gap-1 mt-2">
                    <Zap className="w-4 h-4 text-yellow-300" />
                    <span className="text-sm text-yellow-300">Personal best!</span>
                  </div>
                </div>
                <div className="p-3 bg-white/20 rounded-lg">
                  <Award className="w-6 h-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Class Rank Card */}
          <Card className="relative overflow-hidden bg-gradient-to-br from-blue-500 to-indigo-600 text-white border-0 shadow-lg rounded-3xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/80 text-sm font-medium">Class Rank</p>
                  <p className="text-3xl font-bold">#7</p>
                  <div className="flex items-center gap-1 mt-2">
                    <ArrowUpRight className="w-4 h-4 text-green-300" />
                    <span className="text-sm text-green-300">Top 15%</span>
                  </div>
                </div>
                <div className="p-3 bg-white/20 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Weekly Hours Card */}
          <Card className="relative overflow-hidden bg-gradient-to-br from-green-500 to-emerald-600 text-white border-0 shadow-lg rounded-3xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/80 text-sm font-medium">Weekly Hours</p>
                  <p className="text-3xl font-bold">23h</p>
                  <div className="flex items-center gap-1 mt-2">
                    <Clock className="w-4 h-4 text-orange-200" />
                    <span className="text-sm text-orange-200">+3h vs last week</span>
                  </div>
                </div>
                <div className="p-3 bg-white/20 rounded-lg">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Enhanced Main Analytics Content */}
        <Tabs defaultValue="overview" className="space-y-6">
          <div className="bg-card border rounded-3xl p-2">
            <TabsList className="grid w-full grid-cols-5 bg-transparent">
              <TabsTrigger value="overview" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-2xl">
                📊 Overview
              </TabsTrigger>
              <TabsTrigger value="topics" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-2xl">
                🧠 Topics
              </TabsTrigger>
              <TabsTrigger value="chapters" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-2xl">
                📚 Chapters
              </TabsTrigger>
              <TabsTrigger value="comparison" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-2xl">
                📈 Compare
              </TabsTrigger>
              <TabsTrigger value="insights" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-2xl">
                💡 Insights
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Overview Tab - Enhanced */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              {/* Score Trends Chart */}
              <Card className="col-span-1 lg:col-span-2 overflow-hidden rounded-3xl border-2 hover:border-primary/50 transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="flex items-center gap-2 text-foreground">
                        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600">
                          <Activity className="w-5 h-5 text-white" />
                        </div>
                        Performance Trends & Syllabus Coverage
                      </CardTitle>
                      <CardDescription className="text-muted-foreground">
                        Your score progression with syllabus completion tracking
                      </CardDescription>
                    </div>
                    <Badge variant="outline" className="gap-1 rounded-xl">
                      <TrendingUp className="w-3 h-3" />
                      +23% improvement
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <ResponsiveContainer width="100%" height={350}>
                    <ComposedChart data={scoreData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                      <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                      <YAxis stroke="hsl(var(--muted-foreground))" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'hsl(var(--card))', 
                          border: '1px solid hsl(var(--border))',
                          borderRadius: '8px',
                          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                          color: 'hsl(var(--foreground))'
                        }} 
                      />
                      <Legend />
                      <Area 
                        type="monotone" 
                        dataKey="syllabusCoverage" 
                        fill="#06b6d4" 
                        fillOpacity={0.2}
                        stroke="#06b6d4"
                        name="Syllabus Coverage (%)"
                      />
                      <Line 
                        type="monotone" 
                        dataKey="score" 
                        stroke="#8b5cf6" 
                        strokeWidth={3}
                        name="Your Score"
                        dot={{ fill: "#8b5cf6", strokeWidth: 2, r: 4 }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="avgScore" 
                        stroke="#64748b" 
                        strokeDasharray="5 5"
                        strokeWidth={2}
                        name="Class Average"
                        dot={{ fill: "#64748b", strokeWidth: 2, r: 3 }}
                      />
                      <Bar dataKey="questions" fill="#f97316" name="Questions Solved" opacity={0.7} />
                    </ComposedChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Weekly Activity */}
              <Card className="overflow-hidden rounded-3xl border-2 hover:border-primary/50 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-foreground">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-red-500">
                      <Calendar className="w-5 h-5 text-white" />
                    </div>
                    Weekly Study Pattern
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Daily study hours and accuracy trends
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={280}>
                    <ComposedChart data={weeklyActivityData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                      <XAxis dataKey="day" stroke="hsl(var(--muted-foreground))" />
                      <YAxis stroke="hsl(var(--muted-foreground))" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'hsl(var(--card))', 
                          border: '1px solid hsl(var(--border))',
                          borderRadius: '8px',
                          color: 'hsl(var(--foreground))'
                        }} 
                      />
                      <Bar dataKey="studyTime" fill="url(#studyTimeGradient)" name="Study Hours" />
                      <Line 
                        type="monotone" 
                        dataKey="accuracy" 
                        stroke="url(#accuracyGradient)" 
                        strokeWidth={3}
                        name="Accuracy (%)"
                        yAxisId="right"
                        dot={{ fill: "#f97316", strokeWidth: 2, r: 4 }}
                        activeDot={{ r: 6, fill: "#ea580c" }}
                      />
                      <defs>
                        <linearGradient id="studyTimeGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#8b5cf6" />
                          <stop offset="100%" stopColor="#6366f1" />
                        </linearGradient>
                        <linearGradient id="accuracyGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#f97316" />
                          <stop offset="100%" stopColor="#ea580c" />
                        </linearGradient>
                      </defs>
                    </ComposedChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Subject Distribution */}
              <Card className="overflow-hidden rounded-3xl border-2 hover:border-primary/50 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-foreground">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600">
                      <Target className="w-5 h-5 text-white" />
                    </div>
                    Study Time Distribution
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    How you allocate time across subjects
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={280}>
                    <PieChart>
                      <Pie
                        data={subjectDistributionData}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        dataKey="value"
                        label={({ name, value }) => `${name}: ${value}%`}
                      >
                        {subjectDistributionData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Topics Tab - Enhanced */}
          <TabsContent value="topics" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              {/* Topic Strength Analysis */}
              <Card className="lg:col-span-2 overflow-hidden rounded-3xl border-2 hover:border-primary/50 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-foreground">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 to-rose-600">
                      <Brain className="w-5 h-5 text-white" />
                    </div>
                    Topic Mastery Analysis
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Detailed breakdown of your strengths and improvement areas
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {topicStrengthData.map((topic, index) => (
                      <div key={topic.topic} className="group p-4 bg-gradient-to-r from-muted/30 to-card rounded-2xl border hover:border-primary/50 hover:shadow-md transition-all duration-200">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <div className={`w-3 h-3 rounded-full ${topic.strong >= 75 ? 'bg-green-500' : topic.strong >= 50 ? 'bg-yellow-500' : 'bg-red-400'}`} />
                            <h3 className="font-semibold text-foreground">{topic.topic}</h3>
                          </div>
                          <div className="flex items-center gap-3">
                            <Badge variant={topic.strong >= 75 ? "default" : "secondary"} className="gap-1 rounded-xl">
                              {topic.improvement}
                              <TrendingUp className="w-3 h-3" />
                            </Badge>
                            <div className="text-right">
                              <span className="text-lg font-bold text-violet-600">{topic.strong}%</span>
                              <p className="text-xs text-muted-foreground">mastery</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="relative">
                          <div className="flex gap-1 h-4 bg-slate-200 rounded-full overflow-hidden">
                            <div 
                              className="bg-gradient-to-r from-rose-400 to-red-500 h-full transition-all duration-500 ease-out" 
                              style={{ width: `${topic.weak}%` }}
                            />
                            <div 
                              className="bg-gradient-to-r from-emerald-500 to-green-600 h-full transition-all duration-500 ease-out" 
                              style={{ width: `${topic.strong}%` }}
                            />
                          </div>
                          <div className="flex justify-between text-xs text-muted-foreground mt-2">
                            <span className="flex items-center gap-1">
                              <AlertCircle className="w-3 h-3 text-red-400" />
                              Needs focus ({topic.weak}%)
                            </span>
                            <span className="flex items-center gap-1">
                              <CheckCircle className="w-3 h-3 text-green-500" />
                              Strong grasp ({topic.strong}%)
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions & Recommendations */}
              <Card className="bg-gradient-to-br from-violet-500/5 to-purple-600/5 border border-border rounded-3xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-foreground">
                    <div className="p-2 rounded-xl bg-gradient-to-r from-yellow-500 to-orange-600">
                      <Lightbulb className="w-5 h-5 text-white" />
                    </div>
                    Smart Recommendations
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-3 bg-card rounded-lg border border-border">
                    <div className="flex items-start gap-3">
                      <div className="p-1 bg-red-50 rounded-full">
                        <AlertCircle className="w-4 h-4 text-red-500" />
                      </div>
                      <div>
                        <p className="font-medium text-sm text-foreground">Focus on Probability</p>
                        <p className="text-xs text-muted-foreground mt-1">45% weak - needs immediate attention</p>
                        <Button size="sm" variant="outline" className="mt-2 h-7 text-xs">
                          Start Practice
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 bg-card rounded-lg border border-border">
                    <div className="flex items-start gap-3">
                      <div className="p-1 bg-yellow-50 dark:bg-yellow-500/10 rounded-full">
                        <Clock className="w-4 h-4 text-yellow-500" />
                      </div>
                      <div>
                        <p className="font-medium text-sm text-foreground">Review Trigonometry</p>
                        <p className="text-xs text-muted-foreground mt-1">40% weak - schedule revision</p>
                        <Button size="sm" variant="outline" className="mt-2 h-7 text-xs">
                          Schedule Review
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 bg-white rounded-lg border border-[#DCD5CF]">
                    <div className="flex items-start gap-3">
                      <div className="p-1 bg-green-50 rounded-full">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                      </div>
                      <div>
                        <p className="font-medium text-sm text-foreground">Maintain Statistics</p>
                        <p className="text-xs text-muted-foreground mt-1">90% strong - keep it up!</p>
                        <Button size="sm" variant="outline" className="mt-2 h-7 text-xs">
                          Advanced Topics
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Chapters Tab - Enhanced */}
          <TabsContent value="chapters" className="space-y-6">
            <Card className="bg-card/80 backdrop-blur-sm border border-border rounded-3xl">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2 text-foreground">
                      <div className="p-2 rounded-xl bg-gradient-to-r from-violet-500 to-purple-600">
                        <BookOpenCheck className="w-5 h-5 text-white" />
                      </div>
                      Chapter-wise Progress & Mastery
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      Detailed breakdown of your learning journey through each chapter
                    </CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Badge variant="outline" className="gap-1 rounded-xl">
                      <CheckCircle className="w-3 h-3 text-green-500" />
                      2 Completed
                    </Badge>
                    <Badge variant="secondary" className="gap-1 rounded-xl">
                      <Clock className="w-3 h-3 text-yellow-500" />
                      4 In Progress
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[600px] pr-4">
                  <div className="space-y-4">
                    {chapterMasteryData.map((chapter, index) => (
                      <div key={chapter.chapter} className="group">
                        <div className="p-6 border border-border rounded-3xl bg-gradient-to-r from-card to-muted/30 hover:shadow-lg hover:border-primary/50 transition-all duration-300">
                          {/* Header */}
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex items-start gap-4">
                              <div className="flex flex-col items-center">
                                <div className={`w-8 h-8 rounded-2xl flex items-center justify-center text-white font-bold text-sm ${
                                  chapter.completed 
                                    ? 'bg-gradient-to-br from-green-500 to-green-600' 
                                    : chapter.mastery >= 70 
                                      ? 'bg-gradient-to-br from-violet-500 to-purple-600'
                                      : 'bg-gradient-to-br from-orange-500 to-red-500'
                                }`}>
                                  {chapter.completed ? <CheckCircle className="w-4 h-4" /> : index + 1}
                                </div>
                                <div className={`w-0.5 h-8 mt-2 ${
                                  index < chapterMasteryData.length - 1 ? 'bg-border' : ''
                                }`} />
                              </div>
                              
                              <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                  <h3 className="font-semibold text-lg text-foreground">{chapter.chapter}</h3>
                                  <Badge variant={chapter.difficulty === 'Easy' ? 'default' : chapter.difficulty === 'Medium' ? 'secondary' : 'destructive'} className="text-xs">
                                    {chapter.difficulty}
                                  </Badge>
                                </div>
                                
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-3">
                                  <div className="text-center p-2 bg-card rounded-lg border border-border">
                                    <div className="text-2xl font-bold text-violet-600">{chapter.mastery}%</div>
                                    <div className="text-xs text-muted-foreground">Mastery</div>
                                  </div>
                                  <div className="text-center p-2 bg-card rounded-lg border border-border">
                                    <div className="text-2xl font-bold text-orange-600">{chapter.syllabusCoverage}%</div>
                                    <div className="text-xs text-muted-foreground">Syllabus</div>
                                  </div>
                                  <div className="text-center p-2 bg-card rounded-lg border border-border">
                                    <div className="text-lg font-bold text-blue-600">{chapter.timeSpent}</div>
                                    <div className="text-xs text-muted-foreground">Time Spent</div>
                                  </div>
                                  <div className="text-center p-2 bg-card rounded-lg border border-border">
                                    <div className="text-sm font-medium text-muted-foreground">{chapter.lastStudied}</div>
                                    <div className="text-xs text-muted-foreground">Last Study</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            
                            <div className="flex gap-2">
                              <Button size="sm" variant="outline" className="gap-1">
                                <BookOpen className="w-3 h-3" />
                                Study
                              </Button>
                              {chapter.mastery < 80 && (
                                <Button size="sm" variant="default" className="gap-1 rounded-xl bg-violet-600 hover:bg-violet-700">
                                  <Target className="w-3 h-3" />
                                  Practice
                                </Button>
                              )}
                            </div>
                          </div>
                          
                          {/* Progress Bars */}
                          <div className="space-y-3">
                            <div>
                              <div className="flex justify-between text-sm mb-1">
                                <span className="text-muted-foreground">Chapter Mastery</span>
                                <span className="font-medium text-foreground">{chapter.mastery}%</span>
                              </div>
                              <Progress 
                                value={chapter.mastery} 
                                className="h-3 bg-blue-100 [&>div]:bg-blue-600" 
                              />
                            </div>
                            
                            <div>
                              <div className="flex justify-between text-sm mb-1">
                                <span className="text-muted-foreground">Syllabus Coverage</span>
                                <span className="font-medium text-foreground">{chapter.syllabusCoverage}%</span>
                              </div>
                              <Progress 
                                value={chapter.syllabusCoverage} 
                                className="h-2 bg-green-100 [&>div]:bg-green-600"
                              />
                            </div>
                          </div>
                          
                          {/* Status Footer */}
                          <div className="flex items-center justify-between mt-4 pt-3 border-t border-border">
                            <div className="flex items-center gap-2">
                              {chapter.completed ? (
                                <Badge variant="default" className="gap-1 rounded-xl bg-green-500">
                                  <CheckCircle className="w-3 h-3" />
                                  Completed
                                </Badge>
                              ) : (
                                <Badge variant="secondary" className="gap-1 rounded-xl">
                                  <Clock className="w-3 h-3" />
                                  In Progress
                                </Badge>
                              )}
                              {chapter.mastery >= 90 && (
                                <Badge variant="outline" className="gap-1 rounded-xl">
                                  <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                                  Excellent
                                </Badge>
                              )}
                            </div>
                            
                            <div className="text-xs text-muted-foreground">
                              {chapter.completed ? 'Ready for advanced topics' : 
                               chapter.mastery >= 70 ? 'Good progress, keep going!' : 
                               'Needs more practice'}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Comparison Tab - Enhanced */}
          <TabsContent value="comparison" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              {/* Performance Comparison */}
              <Card className="bg-card/80 backdrop-blur-sm border border-border rounded-3xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-foreground">
                    <div className="p-2 rounded-xl bg-gradient-to-r from-orange-500 to-red-600">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    Performance vs Class Average
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    See how you stack up against your peers
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-gradient-to-r from-violet-500/10 to-purple-600/10 rounded-2xl border border-border">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-violet-600 rounded-xl">
                          <Target className="w-4 h-4 text-white" />
                        </div>
                        <span className="font-semibold text-foreground">Your Average Score</span>
                      </div>
                      <div className="text-right">
                        <span className="text-2xl font-bold text-violet-600">88%</span>
                        <div className="flex items-center gap-1 text-sm text-green-600">
                          <ArrowUpRight className="w-3 h-3" />
                          +12% vs class
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-gradient-to-r from-gray-500/10 to-gray-600/10 rounded-2xl border border-border">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-gray-600 rounded-xl">
                          <Users className="w-4 h-4 text-white" />
                        </div>
                        <span className="font-semibold text-foreground">Class Average</span>
                      </div>
                      <span className="text-2xl font-bold text-muted-foreground">76%</span>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-gradient-to-r from-green-500/10 to-green-600/10 rounded-2xl border border-border">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-green-500 rounded-xl">
                          <TrendingUp className="w-4 h-4 text-white" />
                        </div>
                        <span className="font-semibold text-foreground">Your Improvement</span>
                      </div>
                      <div className="text-right">
                        <span className="text-2xl font-bold text-green-600">+23%</span>
                        <div className="text-sm text-muted-foreground">since start</div>
                      </div>
                    </div>
                  </div>

                  {/* Performance Radar */}
                  <div className="pt-4">
                    <h4 className="font-semibold text-foreground mb-3">Skill Comparison</h4>
                    <ResponsiveContainer width="100%" height={250}>
                      <RadarChart data={performanceRadarData}>
                        <PolarGrid stroke="hsl(var(--border))" />
                        <PolarAngleAxis dataKey="subject" tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }} />
                        <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fontSize: 10, fill: 'hsl(var(--muted-foreground))' }} />
                        <Radar 
                          name="Your Score" 
                          dataKey="yourScore" 
                          stroke="#8b5cf6" 
                          fill="#8b5cf6" 
                          fillOpacity={0.3}
                          strokeWidth={2}
                        />
                        <Radar 
                          name="Class Average" 
                          dataKey="classAvg" 
                          stroke="hsl(var(--muted-foreground))" 
                          fill="hsl(var(--muted-foreground))" 
                          fillOpacity={0.1}
                          strokeWidth={2}
                        />
                        <Tooltip 
                          contentStyle={{ 
                            backgroundColor: 'hsl(var(--card))', 
                            border: '1px solid hsl(var(--border))',
                            borderRadius: '8px',
                            color: 'hsl(var(--foreground))'
                          }} 
                        />
                        <Legend />
                      </RadarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              {/* Leaderboard */}
              <Card className="bg-card/80 backdrop-blur-sm border border-border rounded-3xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-foreground">
                    <div className="p-2 rounded-xl bg-gradient-to-r from-yellow-500 to-orange-600">
                      <Award className="w-5 h-5 text-white" />
                    </div>
                    Class Leaderboard
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Top performers in your class this month
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { name: "Alex Chen", score: 95, avatar: "/professional-man-avatar-with-beard-and-glasses-loo.jpg", badge: "🥇", improvement: "+8%" },
                      { name: "Sarah Kim", score: 92, avatar: "/professional-woman-avatar-with-short-brown-hair-an.jpg", badge: "🥈", improvement: "+5%" },
                      { name: "You", score: 88, avatar: "/placeholder-user.jpg", isUser: true, badge: "🥉", improvement: "+6%" },
                      { name: "Mike Johnson", score: 85, avatar: "/professional-person-avatar-with-curly-hair-and-war.jpg", badge: "4th", improvement: "+3%" },
                      { name: "Emily Davis", score: 83, avatar: "/testimonial-avatar-1.jpg", badge: "5th", improvement: "+2%" },
                    ].map((student, index) => (
                      <div key={student.name} className={`flex items-center gap-4 p-4 rounded-2xl transition-all duration-200 hover:shadow-md ${
                        student.isUser 
                          ? 'bg-gradient-to-r from-violet-500/10 to-purple-600/10 border-2 border-violet-500/20' 
                          : 'bg-muted/30 border border-border hover:bg-muted/50'
                      }`}>
                        <div className="flex items-center gap-3 flex-1">
                          <div className="text-lg font-bold min-w-[32px] text-center">
                            {student.badge}
                          </div>
                          <Avatar className="w-10 h-10 border-2 border-white shadow-sm">
                            <AvatarImage src={student.avatar} />
                            <AvatarFallback className="bg-violet-600 text-white">
                              {student.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <span className={`font-semibold ${student.isUser ? 'text-violet-600' : 'text-foreground'}`}>
                                {student.name}
                              </span>
                              {student.isUser && (
                                <Badge variant="outline" className="text-xs">You</Badge>
                              )}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {student.improvement} improvement
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className={`text-xl font-bold ${student.isUser ? 'text-violet-600' : 'text-foreground'}`}>
                            {student.score}%
                          </span>
                          <div className="text-xs text-muted-foreground">score</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 p-4 bg-gradient-to-r from-[#B89968]/10 to-[#8B7355]/10 rounded-xl border border-[#DCD5CF]">
                    <div className="text-center">
                      <div className="text-sm text-muted-foreground mb-1">Your class ranking</div>
                      <div className="text-2xl font-bold text-violet-600">#7 out of 45</div>
                      <div className="text-sm text-muted-foreground">Top 15% performer</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* New Insights Tab */}
          <TabsContent value="insights" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              {/* AI-Powered Insights */}
              <Card className="lg:col-span-2 bg-gradient-to-br from-violet-500/5 via-card to-purple-600/5 border border-border rounded-3xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-foreground">
                    <div className="p-2 rounded-xl bg-gradient-to-r from-violet-500 to-purple-600">
                      <Brain className="w-5 h-5 text-white" />
                    </div>
                    AI-Powered Learning Insights
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Personalized recommendations based on your learning patterns
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    
                    {/* Learning Pattern Analysis */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-foreground flex items-center gap-2">
                        <Activity className="w-4 h-4 text-violet-600" />
                        Learning Pattern Analysis
                      </h4>
                      
                      <div className="p-4 bg-card rounded-2xl border border-border">
                        <div className="flex items-start gap-3">
                          <div className="p-2 bg-violet-500/10 rounded-xl">
                            <Clock className="w-4 h-4 text-violet-600" />
                          </div>
                          <div>
                            <p className="font-medium text-sm text-foreground">Peak Performance Time</p>
                            <p className="text-xs text-muted-foreground mt-1">You perform best between 2-4 PM on weekdays</p>
                            <Badge variant="outline" className="mt-2 text-xs rounded-xl">+15% accuracy</Badge>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 bg-card rounded-2xl border border-border">
                        <div className="flex items-start gap-3">
                          <div className="p-2 bg-orange-500/10 rounded-xl">
                            <Target className="w-4 h-4 text-orange-600" />
                          </div>
                          <div>
                            <p className="font-medium text-sm text-foreground">Optimal Study Duration</p>
                            <p className="text-xs text-muted-foreground mt-1">45-60 minute sessions work best for you</p>
                            <Badge variant="outline" className="mt-2 text-xs rounded-xl">Max retention</Badge>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 bg-card rounded-2xl border border-border">
                        <div className="flex items-start gap-3">
                          <div className="p-2 bg-blue-500/10 rounded-xl">
                            <Lightbulb className="w-4 h-4 text-blue-600" />
                          </div>
                          <div>
                            <p className="font-medium text-sm text-foreground">Learning Style</p>
                            <p className="text-xs text-muted-foreground mt-1">Visual learner with strong analytical skills</p>
                            <Badge variant="outline" className="mt-2 text-xs rounded-xl">Diagram focused</Badge>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Predictions & Goals */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-foreground flex items-center gap-2">
                        <Target className="w-4 h-4 text-green-600" />
                        Predictions & Goals
                      </h4>
                      
                      <div className="p-4 bg-card rounded-2xl border border-border">
                        <div className="text-center mb-3">
                          <div className="text-2xl font-bold text-violet-600">92%</div>
                          <div className="text-xs text-muted-foreground">Predicted final score</div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-xs">
                            <span className="text-muted-foreground">Current trajectory</span>
                            <span className="font-medium text-foreground">Excellent</span>
                          </div>
                          <Progress value={85} className="h-2 bg-violet-100 [&>div]:bg-violet-600" />
                        </div>
                      </div>

                      <div className="p-4 bg-card rounded-2xl border border-border">
                        <div className="mb-3">
                          <div className="text-lg font-bold text-blue-600">18 days</div>
                          <div className="text-xs text-muted-foreground">To reach 90% mastery</div>
                        </div>
                        <div className="text-xs text-muted-foreground">
                          At current pace with recommended focus areas
                        </div>
                      </div>

                      <div className="p-4 bg-card rounded-2xl border border-border">
                        <div className="mb-3">
                          <div className="text-lg font-bold text-orange-600">#3</div>
                          <div className="text-xs text-muted-foreground">Achievable rank this month</div>
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Focus on Probability & Trigonometry
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Study Streak Analysis */}
              <Card className="bg-card/80 backdrop-blur-sm border border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-foreground">
                    <div className="p-2 rounded-xl bg-gradient-to-r from-yellow-500 to-orange-600">
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                    Study Streak Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={200}>
                    <BarChart data={learningStreaksData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                      <XAxis dataKey="week" stroke="hsl(var(--muted-foreground))" />
                      <YAxis stroke="hsl(var(--muted-foreground))" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'hsl(var(--card))', 
                          border: '1px solid hsl(var(--border))',
                          borderRadius: '8px',
                          color: 'hsl(var(--foreground))'
                        }} 
                      />
                      <Bar dataKey="streak" fill="url(#streakGradient)" name="Days studied" />
                      <Bar dataKey="target" fill="#e2e8f0" name="Target (7 days)" stroke="#cbd5e1" strokeWidth={1} />
                      <defs>
                        <linearGradient id="streakGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#8b5cf6" />
                          <stop offset="100%" stopColor="#6366f1" />
                        </linearGradient>
                      </defs>
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Motivation & Achievements */}
              <Card className="bg-card/80 backdrop-blur-sm border border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-foreground">
                    <div className="p-2 rounded-xl bg-gradient-to-r from-yellow-500 to-orange-600">
                      <Award className="w-5 h-5 text-white" />
                    </div>
                    Recent Achievements
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-violet-500/10 to-card rounded-2xl">
                    <div className="text-2xl">🏆</div>
                    <div>
                      <p className="font-medium text-sm text-foreground">Chapter Master</p>
                      <p className="text-xs text-muted-foreground">Completed Linear Equations with 95% score</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-orange-500/10 to-card rounded-2xl">
                    <div className="text-2xl">🔥</div>
                    <div>
                      <p className="font-medium text-sm text-foreground">Streak Champion</p>
                      <p className="text-xs text-muted-foreground">12-day study streak (personal best!)</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-blue-500/10 to-card rounded-2xl">
                    <div className="text-2xl">📈</div>
                    <div>
                      <p className="font-medium text-sm text-foreground">Rapid Improver</p>
                      <p className="text-xs text-muted-foreground">+23% improvement in 6 months</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-green-500/10 to-card rounded-2xl">
                    <div className="text-2xl">🎯</div>
                    <div>
                      <p className="font-medium text-sm text-foreground">Accuracy Expert</p>
                      <p className="text-xs text-muted-foreground">92% average accuracy this week</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
"use client"

import { Alert, AlertDescription } from '@/components/ui/alert'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Separator } from '@/components/ui/separator'
import {
    AlertTriangle,
    BarChart3,
    BookMarked,
    BookOpen,
    CheckCircle2,
    ChevronLeft, ChevronRight,
    Clock,
    Eye, EyeOff,
    Flag,
    Info, Maximize2,
    Timer,
    Trophy,
    X
} from 'lucide-react'
import { useEffect, useState } from "react"

interface Question {
    id: number
    question: string
    options: string[]
    correctAnswer: number
    explanation: string
    difficulty: 'Easy' | 'Medium' | 'Hard'
    subject: string
    chapter: string
}

const physicsQuestions: Question[] = [
    {
        id: 1,
        question: "A body of mass 5 kg is moving with a velocity of 10 m/s. What is its momentum?",
        options: ["25 kg⋅m/s", "50 kg⋅m/s", "75 kg⋅m/s", "100 kg⋅m/s"],
        correctAnswer: 1,
        explanation: "Momentum (p) = mass × velocity = 5 kg × 10 m/s = 50 kg⋅m/s",
        difficulty: "Easy",
        subject: "Physics",
        chapter: "Laws of Motion"
    },
    {
        id: 2,
        question: "The SI unit of electric potential is:",
        options: ["Ampere", "Coulomb", "Volt", "Ohm"],
        correctAnswer: 2,
        explanation: "Volt is the SI unit of electric potential. 1 Volt = 1 Joule/Coulomb",
        difficulty: "Easy",
        subject: "Physics",
        chapter: "Current Electricity"
    },
    {
        id: 3,
        question: "If a convex lens of focal length 20 cm forms a real image at 60 cm, what is the object distance?",
        options: ["15 cm", "20 cm", "30 cm", "40 cm"],
        correctAnswer: 2,
        explanation: "Using lens formula: 1/f = 1/v - 1/u, where f=20cm, v=60cm. Solving: 1/20 = 1/60 - 1/u, u = 30 cm",
        difficulty: "Medium",
        subject: "Physics",
        chapter: "Ray Optics"
    },
    {
        id: 4,
        question: "The work function of a metal is 3.0 eV. What is the threshold frequency? (h = 4.14 × 10⁻¹⁵ eV⋅s)",
        options: ["6.25 × 10¹⁴ Hz", "7.25 × 10¹⁴ Hz", "8.25 × 10¹⁴ Hz", "9.25 × 10¹⁴ Hz"],
        correctAnswer: 1,
        explanation: "Threshold frequency ν₀ = W/h = 3.0/(4.14 × 10⁻¹⁵) = 7.25 × 10¹⁴ Hz",
        difficulty: "Medium",
        subject: "Physics",
        chapter: "Dual Nature of Radiation"
    },
    {
        id: 5,
        question: "A capacitor of capacitance 100 μF is charged to 200 V. What is the energy stored?",
        options: ["1 J", "2 J", "3 J", "4 J"],
        correctAnswer: 1,
        explanation: "Energy = ½CV² = ½ × 100 × 10⁻⁶ × (200)² = 2 J",
        difficulty: "Medium",
        subject: "Physics",
        chapter: "Electrostatic Potential"
    },
    {
        id: 6,
        question: "In Young's double slit experiment, the fringe width is 0.5 mm for light of wavelength 600 nm. If the wavelength is changed to 400 nm, what will be the new fringe width?",
        options: ["0.25 mm", "0.33 mm", "0.50 mm", "0.75 mm"],
        correctAnswer: 1,
        explanation: "Fringe width β ∝ λ. So β₂/β₁ = λ₂/λ₁, β₂ = 0.5 × (400/600) = 0.33 mm",
        difficulty: "Hard",
        subject: "Physics",
        chapter: "Wave Optics"
    },
    {
        id: 7,
        question: "A wire of resistance 10 Ω is stretched to twice its original length. What is its new resistance?",
        options: ["20 Ω", "30 Ω", "40 Ω", "50 Ω"],
        correctAnswer: 2,
        explanation: "When length doubles, area becomes half. R ∝ L/A, so new R = 4 × original R = 40 Ω",
        difficulty: "Hard",
        subject: "Physics",
        chapter: "Current Electricity"
    },
    {
        id: 8,
        question: "What is the dimensional formula for Planck's constant?",
        options: ["[ML²T⁻¹]", "[ML²T⁻²]", "[MLT⁻¹]", "[ML²T⁻³]"],
        correctAnswer: 0,
        explanation: "Planck's constant h = E/ν. Dimension of Energy/Frequency = [ML²T⁻²]/[T⁻¹] = [ML²T⁻¹]",
        difficulty: "Hard",
        subject: "Physics",
        chapter: "Units and Measurements"
    }
]

function QuizSection() {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
    const [answers, setAnswers] = useState<(number | null)[]>(Array(physicsQuestions.length).fill(null))
    const [flaggedQuestions, setFlaggedQuestions] = useState<boolean[]>(Array(physicsQuestions.length).fill(false))
    const [showFeedback, setShowFeedback] = useState(false)
    const [quizCompleted, setQuizCompleted] = useState(false)
    const [timeLeft, setTimeLeft] = useState(1800) // 30 minutes
    const [showExplanation, setShowExplanation] = useState(false)
    const [isFullscreen, setIsFullscreen] = useState(false)
    const [showWarning, setShowWarning] = useState(false)

    useEffect(() => {
        if (quizCompleted) return

        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    setQuizCompleted(true)
                    return 0
                }
                if (prev === 300) setShowWarning(true) // 5 min warning
                return prev - 1
            })
        }, 1000)

        return () => clearInterval(timer)
    }, [quizCompleted])

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60)
        const secs = seconds % 60
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
    }

    const handleAnswerSelect = (answerIndex: number) => {
        setSelectedAnswer(answerIndex)
        const newAnswers = [...answers]
        newAnswers[currentQuestion] = answerIndex
        setAnswers(newAnswers)
    }

    const handleNext = () => {
        if (currentQuestion < physicsQuestions.length - 1) {
            setCurrentQuestion(currentQuestion + 1)
            setSelectedAnswer(answers[currentQuestion + 1])
            setShowExplanation(false)
        }
    }

    const handlePrevious = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1)
            setSelectedAnswer(answers[currentQuestion - 1])
            setShowExplanation(false)
        }
    }

    const toggleFlag = () => {
        const newFlags = [...flaggedQuestions]
        newFlags[currentQuestion] = !newFlags[currentQuestion]
        setFlaggedQuestions(newFlags)
    }

    const jumpToQuestion = (index: number) => {
        setCurrentQuestion(index)
        setSelectedAnswer(answers[index])
        setShowExplanation(false)
    }

    const calculateScore = () => {
        return answers.reduce((total, answer, index) => {
            if (answer === physicsQuestions[index].correctAnswer) return total + 1
            return total
        }, 0)
    }

    const submitQuiz = () => {
        setQuizCompleted(true)
    }

    const resetQuiz = () => {
        setCurrentQuestion(0)
        setSelectedAnswer(null)
        setAnswers(Array(physicsQuestions.length).fill(null))
        setFlaggedQuestions(Array(physicsQuestions.length).fill(false))
        setShowFeedback(false)
        setQuizCompleted(false)
        setTimeLeft(1800)
        setShowExplanation(false)
    }

    if (quizCompleted) {
        const finalScore = calculateScore()
        const percentage = (finalScore / physicsQuestions.length) * 100
        const timeTaken = 1800 - timeLeft

        return (
            <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/30 p-4">
                <div className="max-w-5xl mx-auto space-y-6 py-8">
                    <Card className="rounded-3xl border-2">
                        <CardContent className="p-8">
                            <div className="text-center space-y-6">
                                <div className="flex justify-center">
                                    <Trophy className="w-24 h-24 text-yellow-500 animate-bounce" />
                                </div>
                                <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                    Quiz Completed!
                                </h1>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
                                    <Card className="rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100/50">
                                        <CardContent className="p-6 text-center">
                                            <div className="text-4xl font-bold text-blue-600">{finalScore}/{physicsQuestions.length}</div>
                                            <div className="text-sm text-muted-foreground mt-2">Questions Correct</div>
                                        </CardContent>
                                    </Card>
                                    <Card className="rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100/50">
                                        <CardContent className="p-6 text-center">
                                            <div className="text-4xl font-bold text-purple-600">{percentage.toFixed(1)}%</div>
                                            <div className="text-sm text-muted-foreground mt-2">Score Percentage</div>
                                        </CardContent>
                                    </Card>
                                    <Card className="rounded-2xl bg-gradient-to-br from-green-50 to-green-100/50">
                                        <CardContent className="p-6 text-center">
                                            <div className="text-4xl font-bold text-green-600">{formatTime(timeTaken)}</div>
                                            <div className="text-sm text-muted-foreground mt-2">Time Taken</div>
                                        </CardContent>
                                    </Card>
                                </div>

                                <Progress value={percentage} className="h-3 rounded-xl" />
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="rounded-3xl">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <BarChart3 className="w-5 h-5" />
                                Detailed Analysis
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                <div className="text-center p-4 bg-green-50 rounded-xl">
                                    <CheckCircle2 className="w-8 h-8 text-green-600 mx-auto mb-2" />
                                    <div className="font-bold text-2xl text-green-600">{finalScore}</div>
                                    <div className="text-sm text-muted-foreground">Correct</div>
                                </div>
                                <div className="text-center p-4 bg-red-50 rounded-xl">
                                    <X className="w-8 h-8 text-red-600 mx-auto mb-2" />
                                    <div className="font-bold text-2xl text-red-600">{physicsQuestions.length - finalScore}</div>
                                    <div className="text-sm text-muted-foreground">Incorrect</div>
                                </div>
                                <div className="text-center p-4 bg-amber-50 rounded-xl">
                                    <Flag className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                                    <div className="font-bold text-2xl text-amber-600">{flaggedQuestions.filter(f => f).length}</div>
                                    <div className="text-sm text-muted-foreground">Flagged</div>
                                </div>
                                <div className="text-center p-4 bg-blue-50 rounded-xl">
                                    <Timer className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                                    <div className="font-bold text-2xl text-blue-600">{Math.round(timeTaken / physicsQuestions.length)}s</div>
                                    <div className="text-sm text-muted-foreground">Avg per Q</div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="rounded-3xl">
                        <CardHeader>
                            <CardTitle>Question-wise Review</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-3">
                                {physicsQuestions.map((q, index) => (
                                    <div key={q.id} className={`p-4 rounded-xl border-2 ${answers[index] === q.correctAnswer
                                            ? 'bg-green-50 border-green-200'
                                            : 'bg-red-50 border-red-200'
                                        }`}>
                                        <div className="flex items-start gap-3">
                                            <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${answers[index] === q.correctAnswer
                                                    ? 'bg-green-500 text-white'
                                                    : 'bg-red-500 text-white'
                                                }`}>
                                                {index + 1}
                                            </div>
                                            <div className="flex-1">
                                                <p className="font-medium mb-2">{q.question}</p>
                                                <div className="grid grid-cols-1 gap-2 text-sm">
                                                    <div className="flex items-center gap-2">
                                                        <Badge variant="outline" className="text-xs">Your Answer</Badge>
                                                        <span className={answers[index] === q.correctAnswer ? 'text-green-600' : 'text-red-600'}>
                                                            {answers[index] !== null ? q.options[answers[index]] : 'Not answered'}
                                                        </span>
                                                    </div>
                                                    {answers[index] !== q.correctAnswer && (
                                                        <div className="flex items-center gap-2">
                                                            <Badge variant="outline" className="text-xs bg-green-100">Correct Answer</Badge>
                                                            <span className="text-green-600">{q.options[q.correctAnswer]}</span>
                                                        </div>
                                                    )}
                                                    <div className="mt-2 p-3 bg-blue-50 rounded-lg">
                                                        <div className="flex items-start gap-2">
                                                            <Info className="w-4 h-4 text-blue-600 mt-0.5" />
                                                            <div>
                                                                <div className="font-medium text-blue-900 text-xs mb-1">Explanation</div>
                                                                <div className="text-sm text-blue-800">{q.explanation}</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    <div className="flex justify-center gap-4">
                        <Button onClick={resetQuiz} size="lg" className="rounded-2xl">
                            Retake Quiz
                        </Button>
                        <Button variant="outline" size="lg" className="rounded-2xl">
                            Back to Dashboard
                        </Button>
                    </div>
                </div>
            </div>
        )
    }

    const currentQ = physicsQuestions[currentQuestion]
    const answeredCount = answers.filter(a => a !== null).length
    const flaggedCount = flaggedQuestions.filter(f => f).length

    return (
        <div className="min-h-screen bg-background">
            {/* Top Bar */}
            <div className="sticky top-0 z-20  border-b shadow-sm">
                <div className="max-w-7xl mx-auto px-4 py-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <BookOpen className="w-6 h-6 text-blue-600" />
                            <div>
                                <h1 className="font-semibold">NCERT Physics Quiz</h1>
                                <p className="text-xs text-muted-foreground">Class 12 - Full Syllabus</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <Badge variant={timeLeft < 300 ? "destructive" : "secondary"} className="text-sm px-3 py-1">
                                <Clock className="w-4 h-4 mr-1" />
                                {formatTime(timeLeft)}
                            </Badge>
                            <Button variant="outline" size="sm" onClick={() => setIsFullscreen(!isFullscreen)}>
                                <Maximize2 className="w-4 h-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {showWarning && timeLeft < 300 && (
                <Alert className="mx-4 mt-4 max-w-7xl mx-auto border-amber-200 bg-amber-50">
                    <AlertTriangle className="h-4 w-4 text-amber-600" />
                    <AlertDescription className="text-amber-800">
                        Only {formatTime(timeLeft)} remaining! Please review your answers.
                    </AlertDescription>
                </Alert>
            )}

            <div className="max-w-7xl mx-auto p-4">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                    {/* Question Navigator */}
                    <Card className="lg:col-span-1 rounded-3xl h-fit sticky top-24">
                        <CardHeader>
                            <CardTitle className="text-lg">Questions</CardTitle>
                            <div className="flex gap-2 text-xs">
                                <div className="flex items-center gap-1">
                                    <div className="w-3 h-3 rounded bg-green-500"></div>
                                    <span>Answered</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <div className="w-3 h-3 rounded bg-amber-500"></div>
                                    <span>Flagged</span>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-4 gap-2">
                                {physicsQuestions.map((_, index) => (
                                    <Button
                                        key={index}
                                        variant={index === currentQuestion ? "default" : "outline"}
                                        size="sm"
                                        className={`relative ${answers[index] !== null ? 'border-green-500 bg-green-50' : ''
                                            } ${flaggedQuestions[index] ? 'border-amber-500 bg-amber-50' : ''}`}
                                        onClick={() => jumpToQuestion(index)}
                                    >
                                        {index + 1}
                                        {flaggedQuestions[index] && (
                                            <Flag className="absolute -top-1 -right-1 w-3 h-3 text-amber-600" fill="currentColor" />
                                        )}
                                    </Button>
                                ))}
                            </div>
                            <Separator className="my-4" />
                            <div className="space-y-2 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Answered:</span>
                                    <span className="font-semibold">{answeredCount}/{physicsQuestions.length}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Not Answered:</span>
                                    <span className="font-semibold">{physicsQuestions.length - answeredCount}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Flagged:</span>
                                    <span className="font-semibold text-amber-600">{flaggedCount}</span>
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button onClick={submitQuiz} className="w-full rounded-xl" variant="destructive">
                                Submit Quiz
                            </Button>
                        </CardFooter>
                    </Card>

                    {/* Question Panel */}
                    <div className="lg:col-span-3 space-y-4">
                        <Card className="rounded-3xl">
                            <CardHeader>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <Badge>{currentQ.difficulty}</Badge>
                                        <Badge variant="outline">{currentQ.chapter}</Badge>
                                    </div>
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        onClick={toggleFlag}
                                        className={flaggedQuestions[currentQuestion] ? 'text-amber-600' : ''}
                                    >
                                        <Flag className="w-4 h-4" fill={flaggedQuestions[currentQuestion] ? 'currentColor' : 'none'} />
                                    </Button>
                                </div>
                                <div className="flex items-center justify-between text-sm text-muted-foreground">
                                    <span>Question {currentQuestion + 1} of {physicsQuestions.length}</span>
                                    <span>Marks: 4</span>
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <h2 className="text-xl font-semibold leading-relaxed">{currentQ.question}</h2>

                                <div className="space-y-3">
                                    {currentQ.options.map((option, index) => (
                                        <Button
                                            key={index}
                                            variant="outline"
                                            className={`w-full p-4 h-auto text-left justify-start rounded-xl transition-all ${selectedAnswer === index
                                                    ? 'border-blue-500 bg-blue-50 border-2'
                                                    : 'hover:border-blue-300'
                                                }`}
                                            onClick={() => handleAnswerSelect(index)}
                                        >
                                            <div className="flex items-center gap-3 w-full">
                                                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${selectedAnswer === index
                                                        ? 'border-blue-500 bg-blue-500'
                                                        : 'border-gray-300'
                                                    }`}>
                                                    {selectedAnswer === index && (
                                                        <CheckCircle2 className="w-4 h-4 text-white" />
                                                    )}
                                                </div>
                                                <span className="text-base">{option}</span>
                                            </div>
                                        </Button>
                                    ))}
                                </div>

                                {selectedAnswer !== null && (
                                    <Button
                                        variant="outline"
                                        className="w-full rounded-xl"
                                        onClick={() => setShowExplanation(!showExplanation)}
                                    >
                                        {showExplanation ? <EyeOff className="w-4 h-4 mr-2" /> : <Eye className="w-4 h-4 mr-2" />}
                                        {showExplanation ? 'Hide' : 'Show'} Explanation (After Submission)
                                    </Button>
                                )}

                                {showExplanation && selectedAnswer !== null && (
                                    <Alert className="border-blue-200 bg-blue-50">
                                        <Info className="h-4 w-4 text-blue-600" />
                                        <AlertDescription className="text-blue-900">
                                            <div className="font-medium mb-1">Explanation:</div>
                                            {currentQ.explanation}
                                        </AlertDescription>
                                    </Alert>
                                )}
                            </CardContent>
                            <CardFooter className="flex justify-between">
                                <Button
                                    variant="outline"
                                    onClick={handlePrevious}
                                    disabled={currentQuestion === 0}
                                    className="rounded-xl"
                                >
                                    <ChevronLeft className="w-4 h-4 mr-2" />
                                    Previous
                                </Button>
                                <div className="flex gap-2">
                                    <Button
                                        variant="outline"
                                        onClick={() => {
                                            setSelectedAnswer(null)
                                            const newAnswers = [...answers]
                                            newAnswers[currentQuestion] = null
                                            setAnswers(newAnswers)
                                        }}
                                        className="rounded-xl"
                                    >
                                        Clear Response
                                    </Button>
                                    {currentQuestion < physicsQuestions.length - 1 ? (
                                        <Button onClick={handleNext} className="rounded-xl">
                                            Next
                                            <ChevronRight className="w-4 h-4 ml-2" />
                                        </Button>
                                    ) : (
                                        <Button onClick={submitQuiz} className="rounded-xl" variant="default">
                                            Submit Quiz
                                        </Button>
                                    )}
                                </div>
                            </CardFooter>
                        </Card>

                        <Card className="rounded-3xl bg-gradient-to-r from-blue-50 to-indigo-50">
                            <CardContent className="p-4">
                                <div className="flex items-center gap-3 text-sm">
                                    <BookMarked className="w-5 h-5 text-blue-600" />
                                    <div>
                                        <div className="font-medium">Exam Tip</div>
                                        <div className="text-muted-foreground">Review flagged questions before submitting. There's no negative marking!</div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuizSection
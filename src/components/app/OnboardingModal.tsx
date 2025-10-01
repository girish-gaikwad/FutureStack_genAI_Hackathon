"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { 
  GraduationCap, 
  BookOpen, 
  CheckCircle, 
  FileText, 
  Users, 
  School,
  Award,
  Sparkles
} from "lucide-react"

interface OnboardingModalProps {
  isOpen: boolean
  onClose: () => void
}

type Step = "selection" | "boards" | "subjects" | "importing" | "success"

const boards = [
  { id: "tn", name: "Tamil Nadu State Board", icon: School },
  { id: "kerala", name: "Kerala State Board", icon: School },
  { id: "cbse", name: "CBSE", icon: BookOpen },
  { id: "icse", name: "ICSE", icon: BookOpen },
  { id: "karnataka", name: "Karnataka State Board", icon: School },
  { id: "ap", name: "Andhra Pradesh Board", icon: School },
]

const subjects = [
  { id: "math", name: "Mathematics", icon: "📊" },
  { id: "science", name: "Science", icon: "🔬" },
  { id: "english", name: "English", icon: "📚" },
  { id: "social", name: "Social Studies", icon: "🌍" },
  { id: "hindi", name: "Hindi", icon: "🇮🇳" },
  { id: "computer", name: "Computer Science", icon: "💻" },
  { id: "physics", name: "Physics", icon: "⚛️" },
  { id: "chemistry", name: "Chemistry", icon: "🧪" },
  { id: "biology", name: "Biology", icon: "🧬" },
]

const importingFiles = [
  { name: "Study Materials", icon: FileText },
  { name: "Practice Tests", icon: Award },
  { name: "Video Lectures", icon: Users },
  { name: "Question Banks", icon: BookOpen },
]

export default function OnboardingModal({ isOpen, onClose }: OnboardingModalProps) {
  const [step, setStep] = useState<Step>("selection")
  const [selectedBoard, setSelectedBoard] = useState("")
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([])
  const [importProgress, setImportProgress] = useState(0)
  const [currentImportingFile, setCurrentImportingFile] = useState(0)

  useEffect(() => {
    if (step === "importing") {
      const timer = setInterval(() => {
        setImportProgress((prev) => {
          if (prev >= 100) {
            clearInterval(timer)
            setTimeout(() => setStep("success"), 500)
            return 100
          }
          
          // Update current importing file based on progress
          const fileIndex = Math.floor((prev / 100) * importingFiles.length)
          if (fileIndex !== currentImportingFile && fileIndex < importingFiles.length) {
            setCurrentImportingFile(fileIndex)
          }
          
          return prev + 2
        })
      }, 50)
      
      return () => clearInterval(timer)
    }
  }, [step, currentImportingFile])

  const handleSelection = (type: "6-12" | "higher") => {
    if (type === "higher") {
      setStep("importing")
    } else {
      setStep("boards")
    }
  }

  const handleBoardSelect = (boardId: string) => {
    setSelectedBoard(boardId)
    setStep("subjects")
  }

  const handleSubjectToggle = (subjectId: string) => {
    setSelectedSubjects(prev => 
      prev.includes(subjectId) 
        ? prev.filter(id => id !== subjectId)
        : [...prev, subjectId]
    )
  }

  const handleDone = () => {
    setStep("importing")
  }

  const handleFinish = () => {
    // Set localStorage flag to prevent showing again
    localStorage.setItem("onboarding_completed", "true")
    onClose()
  }

  const stepVariants = {
    enter: { opacity: 0, x: 20 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 }
  }

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { type: "spring" as const, damping: 20, stiffness: 300 }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8,
      transition: { duration: 0.2 }
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog open={isOpen} onOpenChange={onClose}>
          <DialogContent className="max-w-2xl border-0 bg-background/95 backdrop-blur-xl rounded-3xl shadow-2xl">
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="p-6"
            >
              <DialogHeader className="text-center mb-8">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                </div>
                <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                  Welcome to Your Learning Journey!
                </DialogTitle>
                <p className="text-muted-foreground mt-2">
                  Let's personalize your experience in just a few steps
                </p>
              </DialogHeader>

              <AnimatePresence mode="wait">
                {/* Step 1: Selection */}
                {step === "selection" && (
                  <motion.div
                    key="selection"
                    variants={stepVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <div className="text-center mb-8">
                      <h3 className="text-lg font-semibold mb-2">What's your current education level?</h3>
                      <p className="text-muted-foreground">Choose the option that best describes you</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Card 
                          className="cursor-pointer border-2 hover:border-blue-200 hover:shadow-lg transition-all duration-200 rounded-2xl overflow-hidden group"
                          onClick={() => handleSelection("6-12")}
                        >
                          <CardContent className="p-6 text-center">
                            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-2xl w-fit mx-auto mb-4 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors">
                              <School className="w-8 h-8 text-blue-600" />
                            </div>
                            <h4 className="font-semibold text-lg mb-2">6th - 12th Grade</h4>
                            <p className="text-muted-foreground text-sm">
                              School curriculum and board exams
                            </p>
                          </CardContent>
                        </Card>
                      </motion.div>

                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Card 
                          className="cursor-pointer border-2 hover:border-purple-200 hover:shadow-lg transition-all duration-200 rounded-2xl overflow-hidden group"
                          onClick={() => handleSelection("higher")}
                        >
                          <CardContent className="p-6 text-center">
                            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-2xl w-fit mx-auto mb-4 group-hover:bg-purple-100 dark:group-hover:bg-purple-900/30 transition-colors">
                              <GraduationCap className="w-8 h-8 text-purple-600" />
                            </div>
                            <h4 className="font-semibold text-lg mb-2">Higher Studies</h4>
                            <p className="text-muted-foreground text-sm">
                              College, university, or professional courses
                            </p>
                          </CardContent>
                        </Card>
                      </motion.div>
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Board Selection */}
                {step === "boards" && (
                  <motion.div
                    key="boards"
                    variants={stepVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <div className="text-center mb-8">
                      <h3 className="text-lg font-semibold mb-2">Select your education board</h3>
                      <p className="text-muted-foreground">This helps us provide relevant content</p>
                    </div>

                    <RadioGroup value={selectedBoard} onValueChange={handleBoardSelect}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {boards.map((board) => (
                          <motion.div 
                            key={board.id}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <Label
                              htmlFor={board.id}
                              className="flex items-center space-x-3 p-4 border-2 rounded-2xl cursor-pointer hover:border-blue-200 hover:bg-blue-50/50 dark:hover:bg-blue-900/10 transition-all duration-200"
                            >
                              <RadioGroupItem value={board.id} id={board.id} />
                              <board.icon className="w-5 h-5 text-blue-600" />
                              <span className="font-medium">{board.name}</span>
                            </Label>
                          </motion.div>
                        ))}
                      </div>
                    </RadioGroup>
                  </motion.div>
                )}

                {/* Step 3: Subject Selection */}
                {step === "subjects" && (
                  <motion.div
                    key="subjects"
                    variants={stepVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <div className="text-center mb-8">
                      <h3 className="text-lg font-semibold mb-2">Choose your subjects</h3>
                      <p className="text-muted-foreground">Select the subjects you want to study</p>
                    </div>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-h-60 overflow-y-auto items-stretch">
  {subjects.map((subject) => (
    <motion.div 
      key={subject.id}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="h-full relative group" // 👈 group for hover
    >
      <Label
        htmlFor={subject.id}
        className={`flex items-center gap-3 p-4 border-2 rounded-xl cursor-pointer transition-all duration-200 w-full h-full min-h-[60px] ${
          selectedSubjects.includes(subject.id)
            ? "border-green-200 bg-green-50/50 dark:bg-green-900/10"
            : "hover:border-gray-300 hover:bg-gray-50/50 dark:hover:bg-gray-900/10"
        }`}
      >
        <div className="flex items-center justify-center w-5 h-5 flex-shrink-0">
          <Checkbox
            id={subject.id}
            checked={selectedSubjects.includes(subject.id)}
            onCheckedChange={() => handleSubjectToggle(subject.id)}
            className="w-4 h-4"
          />
        </div>

        <div className="flex-1 min-w-0 flex items-center relative">
          <span className="font-medium text-sm truncate">
            {subject.name}
          </span>

          {/* Tooltip on hover */}
          <span className="absolute left-0 top-full mt-1 w-max max-w-xs px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-normal z-10">
            {subject.name}
          </span>
        </div>
      </Label>
    </motion.div>
  ))}
</div>


                    <div className="flex justify-center pt-4">
                      <Button
                        onClick={handleDone}
                        disabled={selectedSubjects.length === 0}
                        className="px-8 py-2 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
                        size="lg"
                      >
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Done ({selectedSubjects.length} selected)
                      </Button>
                    </div>
                  </motion.div>
                )}

                {/* Step 4: Importing Animation */}
                {step === "importing" && (
                  <motion.div
                    key="importing"
                    variants={stepVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.3 }}
                    className="space-y-8 text-center"
                  >
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Setting up your personalized content</h3>
                      <p className="text-muted-foreground">This will just take a moment...</p>
                    </div>

                    <div className="space-y-6">
                      <Progress value={importProgress} className="h-2 rounded-full" />
                      
                      <div className="space-y-4">
                        {importingFiles.map((file, index) => (
                          <motion.div
                            key={file.name}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ 
                              opacity: index <= currentImportingFile ? 1 : 0.3,
                              x: 0
                            }}
                            className="flex items-center justify-between p-3 bg-white/50 dark:bg-gray-800/50 rounded-xl border"
                          >
                            <div className="flex items-center space-x-3">
                              <file.icon className="w-5 h-5 text-blue-600" />
                              <span className="font-medium">{file.name}</span>
                            </div>
                            {index < currentImportingFile && (
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: "spring", damping: 15 }}
                              >
                                <CheckCircle className="w-5 h-5 text-green-600" />
                              </motion.div>
                            )}
                            {index === currentImportingFile && (
                              <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                className="w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full"
                              />
                            )}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Step 5: Success */}
                {step === "success" && (
                  <motion.div
                    key="success"
                    variants={stepVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.3 }}
                    className="space-y-8 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", damping: 15, delay: 0.2 }}
                      className="flex justify-center"
                    >
                      <div className="p-6 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full">
                        <CheckCircle className="w-12 h-12 text-white" />
                      </div>
                    </motion.div>

                    <div>
                      <h3 className="text-2xl font-bold mb-2">All set! 🎉</h3>
                      <p className="text-muted-foreground">
                        Your personalized learning experience is ready. Let's start studying!
                      </p>
                    </div>

                    <Button
                      onClick={handleFinish}
                      className="px-8 py-3 rounded-2xl bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 transition-all duration-200"
                      size="lg"
                    >
                      Start Learning
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </DialogContent>
        </Dialog>
      )}
    </AnimatePresence>
  )
}
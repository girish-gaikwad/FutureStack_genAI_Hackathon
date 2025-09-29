"use client"

import Image from "next/image";
import { useState, useEffect } from "react"
import type React from "react"

// Badge component for consistency
function Badge({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="px-[14px] py-[6px] bg-white shadow-[0px_0px_0px_4px_rgba(55,50,47,0.05)] overflow-hidden rounded-[90px] flex justify-start items-center gap-[8px] border border-[rgba(2,6,23,0.08)] shadow-xs">
      <div className="w-[14px] h-[14px] relative overflow-hidden flex items-center justify-center">{icon}</div>
      <div className="text-center flex justify-center flex-col text-[#37322F] text-xs font-medium leading-3 font-sans">
        {text}
      </div>
    </div>
  )
}

export default function HowItWorksSection() {
  const [activeCard, setActiveCard] = useState(0)
  const [animationKey, setAnimationKey] = useState(0)

  const cards = [
    {
      title: "Step 1 – Choose Your Board & Subjects",
      description:
        "Select your syllabus (CBSE, ICSE, Tamil Nadu Matric, etc.).\nOur AI Tutor customizes the learning journey based on the board-specific curriculum.",
      image: "/board-selection.png",
    },
    {
      title: "Step 2 – AI Tutor Powered by LLMs",
      description:
        "Get instant, conversational explanations of concepts, solved problems, and personalized quizzes.\nBuilt on Meta’s LLaMA for high-quality generative answers.",
      image: "/ai-tutor-llm.png",
    },
    {
      title: "Step 3 – Smart Insights & Practice",
      description:
        "Visualize your progress with analytics.\nComplex workloads run on Cerebras AI engine for speed, and lessons are containerized with Docker MCP for scalability.",
      image: "/smart-insights.png",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % cards.length)
      setAnimationKey((prev) => prev + 1)
    }, 5000)

    return () => clearInterval(interval)
  }, [cards.length])

  const handleCardClick = (index: number) => {
    setActiveCard(index)
    setAnimationKey((prev) => prev + 1)
  }

  return (
    <div className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center">
      {/* Header Section */}
      <div className="self-stretch px-6 md:px-24 py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center gap-6">
        <div className="w-full max-w-[586px] px-6 py-5 shadow-[0px_2px_4px_rgba(50,45,43,0.06)] overflow-hidden rounded-lg flex flex-col justify-start items-center gap-4 shadow-none">
          <Badge
            icon={
              <div className="w-[10.50px] h-[10.50px] outline outline-[1.17px] outline-[#37322F] outline-offset-[-0.58px] rounded-full"></div>
            }
            text="How It Works"
          />
          <div className="self-stretch text-center flex justify-center flex-col text-[#49423D] text-3xl md:text-5xl font-semibold leading-tight md:leading-[60px] font-sans tracking-tight">
            Learn Smarter with Your AI Tutor
          </div>
          <div className="self-stretch text-center text-[#605A57] text-base font-normal leading-7 font-sans">
            From syllabus alignment to AI-driven insights,
            <br />
            here’s how your learning journey flows.
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="self-stretch px-4 md:px-9 overflow-hidden flex justify-start items-center">
        <div className="flex-1 py-8 md:py-11 flex flex-col md:flex-row justify-start items-center gap-6 md:gap-12">
          {/* Left Column - Feature Cards */}
          <div className="w-full md:w-auto md:max-w-[400px] flex flex-col justify-center items-center gap-4 order-2 md:order-1">
            {cards.map((card, index) => {
              const isActive = index === activeCard

              return (
                <div
                  key={index}
                  onClick={() => handleCardClick(index)}
                  className={`w-full overflow-hidden flex flex-col justify-start items-start transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-white shadow-[0px_0px_0px_0.75px_#E0DEDB_inset]"
                      : "border border-[rgba(2,6,23,0.08)]"
                  }`}
                >
                  <div
                    className={`w-full h-0.5 bg-[rgba(50,45,43,0.08)] overflow-hidden ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <div
                      key={animationKey}
                      className="h-0.5 bg-[#322D2B] animate-[progressBar_5s_linear_forwards] will-change-transform"
                    />
                  </div>
                  <div className="px-6 py-5 w-full flex flex-col gap-2">
                    <div className="self-stretch flex justify-center flex-col text-[#49423D] text-sm font-semibold leading-6 font-sans">
                      {card.title}
                    </div>
                    <div className="self-stretch text-[#605A57] text-[13px] font-normal leading-[22px] font-sans whitespace-pre-line">
                      {card.description}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Right Column - Image */}
         {/* Right Column - Interactive Display */}
          <div className="w-full md:w-auto rounded-lg flex flex-col justify-center items-center gap-2 order-1 md:order-2 md:px-0 px-[00]">
            <div className="w-full md:w-[580px] h-[250px] md:h-[480px]  shadow-[0px_0px_0px_0.9056603908538818px_rgba(0,0,0,0.08)] overflow-hidden rounded-lg flex flex-col justify-start items-start relative">
              <div
                className={`w-full h-full transition-all duration-500 flex items-center justify-center p-8
                `}
              >
                {/* Step 1 Content - Board Selection */}
                {activeCard === 0 && (
                  <div className="w-full h-full flex flex-col items-center justify-center gap-6 animate-fadeIn">
                    <div className="bg-white rounded-md shadow-lg p-6 w-[90%] max-w-md">
                      <h4 className="text-lg font-semibold text-[#322D2B] mb-4">Select Your Board</h4>
                      <div className="space-y-3">
                        {['CBSE', 'ICSE', 'Tamil Nadu Matric', 'Karnataka State'].map((board, i) => (
                          <div key={i} className={`p-3 rounded-lg border-2 transition-all cursor-pointer ${i === 0 ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300'}`}>
                            <div className="flex items-center gap-3">
                              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${i === 0 ? 'border-blue-500' : 'border-gray-300'}`}>
                                {i === 0 && <div className="w-3 h-3 rounded-full bg-blue-500" />}
                              </div>
                              <span className={`font-medium ${i === 0 ? 'text-blue-700' : 'text-gray-700'}`}>{board}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      {['Mathematics', 'Physics', 'Chemistry', 'Biology'].map((subject, i) => (
                        <div key={i} className="px-4 py-2 bg-white rounded-full shadow text-xs font-medium text-gray-700 border border-gray-200">
                          {subject}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 2 Content - AI Tutor */}
                {activeCard === 1 && (
                  <div className="w-full h-full flex flex-col items-center justify-center gap-4 animate-fadeIn p-4">
                    <div className="bg-white rounded-md shadow-lg p-6 w-[90%] max-w-md">
                      <div className="flex items-start gap-3 mb-4">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-sm">
                          AI
                        </div>
                        <div className="flex-1">
                          <div className="bg-purple-50 rounded-lg p-3 border border-purple-200">
                            <p className="text-sm text-gray-700">What is Newton's Second Law of Motion?</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                            <p className="text-sm text-gray-700 mb-2"><strong>F = ma</strong></p>
                            <p className="text-xs text-gray-600">Force equals mass times acceleration. Let me explain with an example...</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md">
                      <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
                      <span className="text-xs font-medium text-gray-600">Powered by Meta LLaMA</span>
                    </div>
                  </div>
                )}

                {/* Step 3 Content - Analytics */}
                {activeCard === 2 && (
                  <div className="w-full h-full flex flex-col items-center justify-center gap-4 animate-fadeIn p-4">
                    <div className="bg-white rounded-md shadow-lg p-6 w-[90%] max-w-md">
                      <h4 className="text-lg font-semibold text-[#322D2B] mb-4">Your Progress</h4>
                      <div className="space-y-4">
                        {[
                          { subject: 'Mathematics', progress: 85, color: 'bg-emerald-500' },
                          { subject: 'Physics', progress: 72, color: 'bg-blue-500' },
                          { subject: 'Chemistry', progress: 68, color: 'bg-purple-500' }
                        ].map((item, i) => (
                          <div key={i}>
                            <div className="flex justify-between mb-1">
                              <span className="text-sm font-medium text-gray-700">{item.subject}</span>
                              <span className="text-sm font-semibold text-gray-900">{item.progress}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                              <div className={`${item.color} h-2.5 rounded-full transition-all duration-1000`} style={{ width: `${item.progress}%` }} />
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 pt-4 border-t border-gray-200 flex justify-between text-sm">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-emerald-600">127</div>
                          <div className="text-xs text-gray-600">Problems Solved</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-blue-600">8.5</div>
                          <div className="text-xs text-gray-600">Hours Learned</div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                      <span className="text-xs font-medium text-gray-600">Powered by Cerebras AI</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sponsor Tech Roles Section */}
      <div className="w-full px-6 md:px-24 py-12 md:py-16 border-t border-[rgba(55,50,47,0.12)] flex flex-col items-center gap-8">
        <h3 className="text-xl md:text-2xl font-semibold text-[#49423D]">Powered by Hackathon Sponsors</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
            <div className="bg-white rounded-lg shadow p-6 text-center flex flex-col items-center">
            <Image src="/sponsors/cerebras.png" alt="Cerebras" className="h-13 mb-4"  width={100} height={40} />
            <h4 className="font-semibold text-lg text-[#322D2B]">Cerebras</h4>
            <p className="text-sm text-[#605A57] mt-2">
              Fast AI computations for large-scale learning models.
              
            </p>
            </div>
            <div className="bg-white rounded-lg shadow p-6 text-center flex flex-col items-center">
            <Image src="/sponsors/meta.svg" alt="Meta LLaMA" className="h-10 mb-4" width={100} height={40} />
            <h4 className="font-semibold text-lg text-[#322D2B]">Meta LLaMA</h4>
            <p className="text-sm text-[#605A57] mt-2">
              High-quality generative answers for tutoring.
             
            </p>
            </div>
            <div className="bg-white rounded-lg shadow p-6 text-center flex flex-col items-center">
            <Image src="/sponsors/docker.svg" alt="Docker MCP" className="h-10 mb-4" width={100} height={40} />
            <h4 className="font-semibold text-lg text-[#322D2B]">Docker MCP</h4>
            <p className="text-sm text-[#605A57] mt-2">
              Scalable, containerized AI tutoring platform.
              
            </p>
            </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes progressBar {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0%);
          }
        }
      `}</style>
    </div>
  )
}

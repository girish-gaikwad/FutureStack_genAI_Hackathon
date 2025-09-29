"use client"

import { useState } from "react"

interface FAQItem {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: "What is the AI Tutor and who is it for?",
    answer:
      "Our AI Tutor is a personalized learning assistant designed for school students across CBSE, ICSE, TN Matric, and other boards. It helps students understand concepts, practice exam questions, and prepare smarter with AI guidance.",
  },
  {
    question: "Does it support different school boards?",
    answer:
      "Yes! The AI Tutor is board-specific. You can choose CBSE, ICSE, TN Matric, or other supported boards, and the app will tailor the study material, past papers, and practice tests accordingly.",
  },
  {
    question: "How does the AI help in learning?",
    answer:
      "The AI provides instant answers to questions, explains difficult concepts step by step, and even generates practice problems. It also creates personalized study plans based on your syllabus and progress.",
  },
  {
    question: "Can parents track student progress?",
    answer:
      "Absolutely! Parents can view performance reports, track subject-wise progress, and get AI insights on where their child needs extra practice.",
  },
  {
    question: "Is the AI Tutor safe to use?",
    answer:
      "Yes. We take security seriously. Your data is encrypted, never shared with third parties, and all interactions are private and secure.",
  },
  {
    question: "How much does it cost?",
    answer:
      "We offer a free plan with limited daily questions and practice. Premium plans unlock unlimited AI answers, mock tests, and board-specific deep prep — all at affordable student-friendly pricing.",
  },
  {
    question: "How do I get started?",
    answer:
      "Getting started is easy! Sign up with your email, select your board and class, and start practicing instantly. No credit card is required for the free plan.",
  },
]

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m6 9 6 6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    )
  }

  return (
    <section id="faqs" className="w-full flex justify-center items-start">
      <div className="flex-1 px-4 md:px-12 py-16 md:py-20 flex flex-col lg:flex-row justify-start items-start gap-6 lg:gap-12">
        {/* Left Column - Header */}
        <div className="w-full lg:flex-1 flex flex-col justify-center items-start gap-4 lg:py-5">
          <div className="w-full flex flex-col justify-center text-[#49423D] font-semibold leading-tight md:leading-[44px] font-sans text-4xl tracking-tight">
            Frequently Asked Questions
          </div>
          <div className="w-full text-[#605A57] text-base font-normal leading-7 font-sans">
            Everything you need to know about using the AI Tutor
            <br className="hidden md:block" />
            for smarter and faster learning.
          </div>
        </div>

        {/* Right Column - FAQ Items */}
        <div className="w-full lg:flex-1 flex flex-col justify-center items-center">
          <div className="w-full flex flex-col">
            {faqData.map((item, index) => {
              const isOpen = openItems.includes(index)

              return (
                <div
                  key={index}
                  className="w-full border-b border-[rgba(73,66,61,0.16)] overflow-hidden"
                >
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full px-5 py-[18px] flex justify-between items-center gap-5 text-left hover:bg-[rgba(73,66,61,0.02)] transition-colors duration-200"
                    aria-expanded={isOpen}
                  >
                    <div className="flex-1 text-[#49423D] text-base font-medium leading-6 font-sans">
                      {item.question}
                    </div>
                    <div className="flex justify-center items-center">
                      <ChevronDownIcon
                        className={`w-6 h-6 text-[rgba(73,66,61,0.60)] transition-transform duration-300 ease-in-out ${isOpen ? "rotate-180" : "rotate-0"
                          }`}
                      />
                    </div>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                      }`}
                  >
                    <div className="px-5 pb-[18px] text-[#605A57] text-sm font-normal leading-6 font-sans">
                      {item.answer}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

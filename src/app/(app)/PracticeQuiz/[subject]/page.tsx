"use client";
import QuizSection from '@/components/quizz/quizSection'
import QuizSectionSample from '@/components/quizz/samplequiz'
import React from 'react'
import { useParams } from 'next/navigation';

function QuizPage() {
  const { subject } = useParams();
  const decodedSubject = decodeURIComponent(subject);

  return (
    <div>
      {decodedSubject === "computer science"
        ? <QuizSection subject={decodedSubject} />
        : <QuizSectionSample />
      }
    </div>
  )
}

export default QuizPage;

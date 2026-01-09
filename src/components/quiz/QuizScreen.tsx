'use client';

import { useEffect } from 'react';
import { useQuizStore } from '@/store/quiz-store';
import { QuizConfig } from '@/types/quiz';
import { QuizCard } from './QuizCard';
import { OptionButton } from './OptionButton';
import { ProgressBar } from './ProgressBar';

import { useRouter, useParams } from 'next/navigation';
import { calculateResult } from '@/lib/quiz-logic';

interface QuizScreenProps {
  quizData: QuizConfig;
}

export function QuizScreen({ quizData }: QuizScreenProps) {
  const { currentStep, config, setQuiz, setAnswer, answers } = useQuizStore();
  const router = useRouter();
  const params = useParams(); // to get current lang

  // Initialize quiz store with data
  useEffect(() => {
    setQuiz(quizData);
  }, [quizData, setQuiz]);

  // Handle completion and redirect
  useEffect(() => {
    if (!config) return;
    
    // Check if we answered everything (simple check)
    // Note: currentStep is 0-indexed. If it equals length, we are "done".
    if (currentStep === config.questions.length) {
        const resultValue = calculateResult(config, answers);
        // Assuming lang is available in params, defaulting to 'ko' if not
        const lang = params?.lang || 'ko'; 
        router.push(`/${lang}/result/${config.id}/${resultValue}`);
    }
  }, [currentStep, config, answers, router, params]);

  if (!config) return null;

  // Render Result Placeholder if calculating/redirecting
  if (currentStep >= config.questions.length) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center p-4">
        <div className="animate-spin text-4xl mb-4">⏳</div>
        <p className="font-bold text-zinc-500">결과 분석 중...</p>
      </div>
    );
  }

  const currentQuestion = config.questions[currentStep];

  return (
    <>
      <ProgressBar current={currentStep + 1} total={config.questions.length} />
      <div className="flex-1 flex flex-col items-center justify-center p-4 w-full">
        <QuizCard
          // Key ensures framer-motion animation triggers on change
          key={currentQuestion.id}
          question={currentQuestion.text}
        >
          {currentQuestion.options.map((option, index) => (
            <OptionButton
              key={index}
              text={option.text}
              onClick={() => setAnswer(currentQuestion.id, option.value)}
              selected={answers[currentQuestion.id] === option.value}
            />
          ))}
        </QuizCard>
      </div>
    </>
  );
}

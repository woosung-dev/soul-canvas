'use client';

import { useEffect } from 'react';
import { useQuizStore } from '@/store/quiz-store';
import { QuizConfig } from '@/types/quiz';
import { QuizCard } from './QuizCard';
import { OptionButton } from './OptionButton';
import { ProgressBar } from './ProgressBar';

import { useRouter, useParams } from 'next/navigation';
import { calculateResult } from '@/lib/quiz-logic';
import { trackEvent, ANALYTICS_EVENTS } from '@/lib/analytics';
import { AdSenseUnit } from '@/components/ads/AdSenseUnit';

interface QuizScreenProps {
  quizData: QuizConfig;
}

export function QuizScreen({ quizData }: QuizScreenProps) {
  const { currentStep, config, setQuiz, setAnswer, answers } = useQuizStore();
  const router = useRouter();
  const params = useParams(); // to get current lang

  // Initialize quiz store and track start
  useEffect(() => {
    setQuiz(quizData);
    trackEvent(ANALYTICS_EVENTS.QUIZ_START, { quiz_id: quizData.id });
  }, [quizData, setQuiz]);

  // Handle completion and redirect
  useEffect(() => {
    if (!config) return;
    
    if (currentStep === config.questions.length) {
        const resultValue = calculateResult(config, answers);
        
        trackEvent(ANALYTICS_EVENTS.QUIZ_COMPLETE, { 
          quiz_id: config.id, 
          result: resultValue 
        });

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

  const handleAnswer = (questionId: number, value: string) => {
    trackEvent(ANALYTICS_EVENTS.QUIZ_ANSWER, { 
      quiz_id: config.id, 
      question_id: questionId, 
      answer: value 
    });
    setAnswer(questionId, value);
  };

  return (
    <>
      <ProgressBar current={currentStep + 1} total={config.questions.length} />
      
      {/* Top Ad Banner */}
      <AdSenseUnit slotId="1234567890" className="w-full max-w-md mx-auto" />

      <div className="flex-1 flex flex-col items-center justify-center p-4 w-full">
        <QuizCard
          key={currentQuestion.id}
          question={currentQuestion.text}
        >
          {currentQuestion.options.map((option, index) => (
            <OptionButton
              key={index}
              text={option.text}
              onClick={() => handleAnswer(currentQuestion.id, option.value)}
              selected={answers[currentQuestion.id] === option.value}
            />
          ))}
        </QuizCard>
      </div>
    </>
  );
}

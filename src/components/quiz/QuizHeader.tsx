'use client';

import { useQuizStore } from '@/store/quiz-store';
import { Header } from '@/components/layout/Header';

import { LanguageToggle } from '@/components/layout/LanguageToggle';

interface QuizHeaderProps {
  title: string;
}

export function QuizHeader({ title }: QuizHeaderProps) {
  const { currentStep, goBack } = useQuizStore();

  return (
    <Header
      title={title}
      // Show back button only if we are past the first step
      leftIcon={
        currentStep > 0 ? (
          <button onClick={goBack} className="text-xl p-2 cursor-pointer">
            ⬅️
          </button>
        ) : null
      }
      rightIcon={<LanguageToggle />}
    />
  );
}

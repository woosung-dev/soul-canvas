// Quiz Registry - Central export point for all quizzes
export { loveStyleQuiz } from './love-style';
export { personalityColorQuiz } from './personality-color';
export { fortune2026Quiz } from './fortune-2026';
export { friendshipStyleQuiz } from './friendship-style';

import { loveStyleQuiz } from './love-style';
import { personalityColorQuiz } from './personality-color';
import { fortune2026Quiz } from './fortune-2026';
import { friendshipStyleQuiz } from './friendship-style';
import { QuizConfig } from '@/types/quiz';

// Quiz registry map for easy lookup by ID
export const quizRegistry: Record<string, QuizConfig> = {
  'love-style': loveStyleQuiz,
  'personality-color': personalityColorQuiz,
  'fortune-2026': fortune2026Quiz,
  'friendship-style': friendshipStyleQuiz,
};

// Get all available quizzes as an array
export const allQuizzes = Object.values(quizRegistry);

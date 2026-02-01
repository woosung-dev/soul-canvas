// Quiz Registry - Central export point for all quizzes
export { loveStyleQuiz } from './love-style';
export { workPersonaQuiz } from './work-persona';
export { personalityColorQuiz } from './personality-color';
export { fortune2026Quiz } from './fortune-2026';
export { friendshipStyleQuiz } from './friendship-style';
export { mayaTest } from './maya-test';
export { newYear2025Quiz } from './new-year-2025';

import { loveStyleQuiz } from './love-style';
import { workPersonaQuiz } from './work-persona';
import { personalityColorQuiz } from './personality-color';
import { fortune2026Quiz } from './fortune-2026';
import { friendshipStyleQuiz } from './friendship-style';
import { mayaTest } from './maya-test';
import { newYear2025Quiz } from './new-year-2025';
import { QuizConfig } from '@/types/quiz';

// Quiz registry map for easy lookup by ID
export const quizRegistry: Record<string, QuizConfig> = {
  'love-style': loveStyleQuiz,
  'work-persona': workPersonaQuiz,
  'personality-color': personalityColorQuiz,
  'fortune-2026': fortune2026Quiz,
  'friendship-style': friendshipStyleQuiz,
  'maya-test': mayaTest,
  'new-year-2025': newYear2025Quiz,
};

// Get all available quizzes as an array
export const allQuizzes = Object.values(quizRegistry);

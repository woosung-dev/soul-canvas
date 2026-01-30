import { QuizConfig } from '@/types/quiz';
import { quizRegistry, allQuizzes } from '@/data/quizzes';

// Interface for Data Access
export interface QuizService {
  getAllQuizzes(): Promise<QuizConfig[]>;
  getQuizById(id: string): Promise<QuizConfig | null>;
}

// Implementation using static files (current)
export class StaticQuizService implements QuizService {
  async getAllQuizzes(): Promise<QuizConfig[]> {
    // Simulate async data fetching
    return Promise.resolve(allQuizzes);
  }

  async getQuizById(id: string): Promise<QuizConfig | null> {
    const quiz = quizRegistry[id];
    return Promise.resolve(quiz || null);
  }
}

// import { SupabaseQuizService } from './supabase-quiz-service';

// Singleton instance using Supabase
// export const quizService = new SupabaseQuizService();

// Legacy Static Service (Keep for reference or fallback if needed)
export const quizService = new StaticQuizService();

import { createClient } from '@/lib/supabase/client'; // Can use client logic or server logic? Service should be server-side mostly.
import { createClient as createServerClient } from '@/lib/supabase/server';
import { QuizService } from './quiz-service';
import { QuizConfig, Question, Option, Result } from '@/types/quiz';

export class SupabaseQuizService implements QuizService {
  async getAllQuizzes(): Promise<QuizConfig[]> {
    const supabase = await createServerClient();
    
    // Fetch quizzes
    const { data: quizzes, error } = await supabase
      .from('quizzes')
      .select(`
        *,
        questions (
          *,
          options (*)
        ),
        results (*)
      `)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching quizzes:', error);
      return [];
    }

    if (!quizzes) return [];

    // Map to QuizConfig type
    return quizzes.map(mapToQuizConfig);
  }

  async getQuizById(id: string): Promise<QuizConfig | null> {
    const supabase = await createServerClient();
    
    const { data: quiz, error } = await supabase
      .from('quizzes')
      .select(`
        *,
        questions (
          *,
          options (*)
        ),
        results (*)
      `)
      .eq('id', id)
      .single();

    if (error || !quiz) {
      // console.error('Error fetching quiz:', error);
      return null;
    }

    return mapToQuizConfig(quiz);
  }
}

// Helper to map DB response to QuizConfig
function mapToQuizConfig(dbQuiz: any): QuizConfig {
  // Sort questions by step_order
  const sortedQuestions = (dbQuiz.questions || []).sort((a: any, b: any) => a.step_order - b.step_order);
  
  const mappedQuestions: Question[] = sortedQuestions.map((q: any) => ({
    id: q.id,
    text: q.text,
    options: (q.options || []).map((o: any) => ({
      text: o.text,
      value: o.value
    }))
  }));

  const mappedResults: Result[] = (dbQuiz.results || []).map((r: any) => ({
    value: r.value,
    title: r.title,
    description: r.description
  }));

  return {
    id: dbQuiz.id,
    title: dbQuiz.title,
    description: dbQuiz.description,
    questions: mappedQuestions,
    results: mappedResults
  };
}

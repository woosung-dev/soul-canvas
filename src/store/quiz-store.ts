import { create } from 'zustand';
import { QuizConfig } from '@/types/quiz';

interface QuizState {
  config: QuizConfig | null;
  currentStep: number;
  answers: Record<number, string>; // questionId -> optionValue

  setQuiz: (config: QuizConfig) => void;
  setAnswer: (questionId: number, optionValue: string) => void;
  goNext: () => void;
  goBack: () => void;
  reset: () => void;
}

export const useQuizStore = create<QuizState>((set, get) => ({
  config: null,
  currentStep: 0, // 0-based index for questions
  answers: {},

  setQuiz: (config) => set({ config, currentStep: 0, answers: {} }),

  setAnswer: (questionId, optionValue) => {
    set((state) => ({
      answers: { ...state.answers, [questionId]: optionValue },
    }));
    // Automatically advance to next step after a short delay or immediately
    // In this logic, we call goNext immediately. 
    // The UI might want to handle the delay/animation, but let's put simple logic here first.
    get().goNext();
  },

  goNext: () => {
    const { config, currentStep } = get();
    if (!config) return;
    // Allow going up to config.questions.length (which is the "Result" step)
    if (currentStep < config.questions.length) {
      set({ currentStep: currentStep + 1 });
    }
  },

  goBack: () => {
    const { currentStep } = get();
    if (currentStep > 0) {
      set({ currentStep: currentStep - 1 });
    }
  },

  reset: () => set({ currentStep: 0, answers: {} }),
}));

'use client';

import { motion } from 'framer-motion';
import { QuizConfig } from '@/types/quiz';
import { useRouter } from 'next/navigation';

interface QuizListProps {
  quizzes: QuizConfig[];
}

export function QuizList({ quizzes }: QuizListProps) {
  const router = useRouter();

  return (
    <div className="w-full max-w-md mx-auto p-4 space-y-4">
      {quizzes.map((quiz, index) => (
        <motion.div
          key={quiz.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          onClick={() => router.push(`/quiz/${quiz.id}`)}
          className="bg-white dark:bg-zinc-900 rounded-2xl p-6 shadow-sm border border-zinc-100 dark:border-zinc-800 cursor-pointer hover:shadow-md transition-shadow active:scale-95"
        >
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-2">
                {quiz.title}
              </h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 line-clamp-2">
                {quiz.description}
              </p>
            </div>
            <div className="w-10 h-10 rounded-full bg-rose-100 dark:bg-rose-900/30 flex items-center justify-center flex-shrink-0 ml-4">
              <span className="text-xl">✨</span>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-2">
            <span className="text-xs px-2 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 font-medium">
              {quiz.questions.length} questions
            </span>
            <span className="text-xs px-2 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-medium">
              Popular
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

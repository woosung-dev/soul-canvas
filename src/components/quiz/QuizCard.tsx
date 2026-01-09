'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface QuizCardProps {
  children: ReactNode;
  question: string;
}

export function QuizCard({ children, question }: QuizCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="flex flex-col gap-6 p-6"
    >
      <h2 className="text-xl font-bold text-center text-zinc-800 dark:text-zinc-100 whitespace-pre-line leading-relaxed">
        {question}
      </h2>
      <div className="flex flex-col gap-3 w-full">
        {children}
      </div>
    </motion.div>
  );
}

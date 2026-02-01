'use client';

import { Result } from '@/types/quiz';
import { motion } from 'framer-motion';

interface ResultCardProps {
  result: Result;
  lang: string;
}

export function ResultCard({ result, lang }: ResultCardProps) {
  const locale = lang === 'en' ? 'en' : 'ko';

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-zinc-800 rounded-3xl p-8 shadow-xl text-center flex flex-col items-center gap-6 max-w-sm w-full mx-auto border border-zinc-100 dark:border-zinc-700"
    >
      <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-rose-200 to-orange-200 flex items-center justify-center text-4xl mb-2">
        🎁
      </div>
      <h1 className="text-3xl font-extrabold text-zinc-900 dark:text-zinc-50 keep-all">
        {result.title[locale]}
      </h1>
      <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-lg keep-all">
        {result.description[locale]}
      </p>
    </motion.div>
  );
}

'use client';

import { motion } from 'framer-motion';
import { clsx } from 'clsx';

interface OptionButtonProps {
  text: string;
  onClick: () => void;
  selected?: boolean;
}

export function OptionButton({ text, onClick, selected }: OptionButtonProps) {
  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      whileHover={{ scale: 1.01 }}
      onClick={onClick}
      className={clsx(
        'w-full p-4 rounded-xl text-left transition-colors border',
        selected
          ? 'bg-rose-50 border-rose-200 text-rose-700 dark:bg-rose-900/20 dark:border-rose-800 dark:text-rose-300'
          : 'bg-white border-zinc-100 text-zinc-700 hover:bg-zinc-50 dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-700'
      )}
    >
      <span className="text-sm font-medium">{text}</span>
    </motion.button>
  );
}

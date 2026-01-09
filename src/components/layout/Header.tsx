import { ReactNode } from 'react';

interface HeaderProps {
  title?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

export function Header({ title, leftIcon, rightIcon }: HeaderProps) {
  return (
    <header className="h-14 w-full flex items-center justify-between px-4 sticky top-0 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md z-50">
      <div className="w-10 flex justify-start">{leftIcon}</div>
      <div className="font-bold text-lg">{title}</div>
      <div className="w-10 flex justify-end">{rightIcon}</div>
    </header>
  );
}

import { ReactNode } from 'react';
import clsx from 'clsx';

interface PageLayoutProps {
  children: ReactNode;
  className?: string;
}

export function PageLayout({ children, className }: PageLayoutProps) {
  return (
    <div className="min-h-screen w-full bg-zinc-50 dark:bg-black flex justify-center">
      <main
        className={clsx(
          'w-full max-w-md bg-white dark:bg-zinc-900 min-h-screen shadow-2xl overflow-hidden flex flex-col',
          className
        )}
      >
        {children}
      </main>
    </div>
  );
}

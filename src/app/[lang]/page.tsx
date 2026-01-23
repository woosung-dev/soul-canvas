import { getDictionary } from '@/lib/get-dictionary';
import { Locale } from '@/i18n-config';
import { PageLayout } from '@/components/layout/PageLayout';
import { QuizHeader } from '@/components/quiz/QuizHeader';
import { QuizList } from '@/components/quiz/QuizList';
import { allQuizzes } from '@/data/quizzes';

export default async function Home({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  return (
    <PageLayout>
      <QuizHeader title="VibeCheck" />
      <div className="flex-1 flex flex-col items-center p-4 w-full">
        <div className="w-full max-w-md mb-6">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-rose-500 to-purple-500 bg-clip-text text-transparent mb-2">
            Trending Quizzes
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400">
            Discover your vibe with our latest personality tests.
          </p>
        </div>
        <QuizList quizzes={allQuizzes} />
      </div>
    </PageLayout>
  );
}

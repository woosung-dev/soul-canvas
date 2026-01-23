import { Locale } from '@/i18n-config';
import { PageLayout } from '@/components/layout/PageLayout';
import { QuizScreen } from '@/components/quiz/QuizScreen';
import { QuizHeader } from '@/components/quiz/QuizHeader';
import { quizRegistry } from '@/data/quizzes';
import { notFound } from 'next/navigation';

export default async function QuizPage({
  params,
}: {
  params: Promise<{ lang: Locale; quizId: string }>;
}) {
  const { lang, quizId } = await params;
  const quiz = quizRegistry[quizId];

  if (!quiz) notFound();

  return (
    <PageLayout>
      <QuizHeader title={quiz.title} />
      <QuizScreen quizData={quiz} />
    </PageLayout>
  );
}

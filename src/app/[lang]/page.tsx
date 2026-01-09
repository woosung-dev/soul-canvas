import { getDictionary } from '@/lib/get-dictionary';
import { Locale } from '@/i18n-config';
import { PageLayout } from '@/components/layout/PageLayout';
import { QuizScreen } from '@/components/quiz/QuizScreen';
import { QuizHeader } from '@/components/quiz/QuizHeader';
import { loveStyleQuiz } from '@/data/quizzes/love-style';

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);

  return (
    <PageLayout>
      <QuizHeader title="VibeCheck" />
      <QuizScreen quizData={loveStyleQuiz} />
    </PageLayout>
  );
}

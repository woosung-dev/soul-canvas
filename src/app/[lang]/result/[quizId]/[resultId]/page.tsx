
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { loveStyleQuiz } from '@/data/quizzes/love-style';
import { ResultCard } from '@/components/quiz/ResultCard';
import { ShareButtons } from '@/components/share/ShareButtons';
import { PageLayout } from '@/components/layout/PageLayout';
import { QuizHeader } from '@/components/quiz/QuizHeader';

type Props = {
  params: Promise<{ lang: string; quizId: string; resultId: string }>;
};

// Map of quiz IDs to their config
const quizzes: Record<string, any> = {
  'love-style': loveStyleQuiz,
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { quizId, resultId } = await params;
  const quiz = quizzes[quizId];
  
  if (!quiz) return {};

  const result = quiz.results.find((r: any) => r.value === resultId);
  if (!result) return {};

  const title = `${result.title} | ${quiz.title}`;
  const description = result.description;
  
  // Construct OG Image URL
  // e.g. /api/og?title=...&desc=...&type=...
  const ogUrl = new URL(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/og`);
  ogUrl.searchParams.set('title', result.title);
  ogUrl.searchParams.set('desc', result.description);
  ogUrl.searchParams.set('type', result.value);

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: ogUrl.toString(),
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogUrl.toString()],
    },
  };
}

import { AdSenseUnit } from '@/components/ads/AdSenseUnit';

// ... (keep existing imports)

// ... (keep existing generateMetadata)

export default async function ResultPage({ params }: Props) {
  const { quizId, resultId, lang } = await params;
  const quiz = quizzes[quizId];

  if (!quiz) notFound();

  const result = quiz.results.find((r: any) => r.value === resultId);
  if (!result) notFound();

  return (
    <PageLayout>
      <QuizHeader title="VibeCheck" />
      <div className="flex-1 flex flex-col items-center justify-center p-4 w-full animate-in fade-in duration-700">
        <ResultCard result={result} />
        
        {/* Ad Unit Middle */}
        <AdSenseUnit slotId="0987654321" className="w-full max-w-sm mt-6" />

        <ShareButtons />
        
        <a 
            href={`/${lang}`}
            className="mt-8 text-zinc-500 underline decoration-zinc-300 underline-offset-4 hover:text-rose-500 transition-colors"
        >
            다른 테스트 하러 가기
        </a>
      </div>
    </PageLayout>
  );
}

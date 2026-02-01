import { MetadataRoute } from 'next';
import { allQuizzes } from '@/data/quizzes';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

export default function sitemap(): MetadataRoute.Sitemap {
  console.log('Generating sitemap...');
  try {
    const quizzes = allQuizzes;
    const locales = ['ko', 'en'];

    const quizUrls = quizzes.flatMap((quiz) =>
      locales.map((locale) => ({
        url: `${BASE_URL}/${locale}/quiz/${quiz.id}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
      }))
    );

    const staticUrls = locales.flatMap((locale) => [
      {
        url: `${BASE_URL}/${locale}`,
        lastModified: new Date(),
        changeFrequency: 'daily' as const,
        priority: 1.0,
      },
    ]);

    return [...staticUrls, ...quizUrls];
  } catch (error) {
    console.error('Sitemap generation failed:', error);
    return [];
  }
}

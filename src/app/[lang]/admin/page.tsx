import { quizService } from '@/services/quiz-service';
import Link from 'next/link';

export default async function AdminDashboard({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = (lang === 'en' ? 'en' : 'ko');
  const quizzes = await quizService.getAllQuizzes();

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
            Quiz Management
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 mt-1">
            Manage your quizzes, questions, and results.
          </p>
        </div>
        <Link
          href={`/${lang}/admin/quiz/new`}
          className="px-4 py-2 bg-rose-500 hover:bg-rose-600 text-white rounded-lg font-medium transition-colors shadow-sm"
        >
          + Create New Quiz
        </Link>
      </div>

      <div className="grid gap-4">
        {quizzes.length === 0 ? (
          <div className="text-center py-12 bg-white dark:bg-zinc-800 rounded-xl border border-dashed border-zinc-300 dark:border-zinc-700">
            <p className="text-zinc-500">No quizzes found. Create your first one!</p>
          </div>
        ) : (
          quizzes.map((quiz) => (
            <div
              key={quiz.id}
              className="bg-white dark:bg-zinc-800 p-6 rounded-xl border border-zinc-200 dark:border-zinc-700 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow"
            >
              <div>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                  {quiz.title[locale]}
                  <span className="text-xs font-normal text-zinc-400 ml-2">
                     ({locale === 'ko' ? quiz.title.en : quiz.title.ko})
                  </span>
                </h3>
                <p className="text-sm text-zinc-500 mt-1 line-clamp-1">
                  {quiz.description[locale]}
                </p>
                <div className="flex gap-3 mt-3 text-xs text-zinc-400 font-mono">
                  <span>ID: {quiz.id}</span>
                  <span>•</span>
                  <span>{quiz.questions.length} Questions</span>
                  <span>•</span>
                  <span>{quiz.results.length} Results</span>
                </div>
              </div>
              
              <div className="flex gap-2">
                <Link
                  href={`/${lang}/admin/quiz/${quiz.id}`}
                  className="px-3 py-1.5 text-sm font-medium text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-700 hover:bg-zinc-200 dark:hover:bg-zinc-600 rounded-md transition-colors"
                >
                  Edit
                </Link>
                {/* Delete button would go here (requires Client Component or Server Action) */}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

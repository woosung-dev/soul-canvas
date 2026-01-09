import { QuizConfig } from '@/types/quiz';

/**
 * Calculates the result based on the user's answers.
 * Simple majority vote algorithm: Finds the most frequent value.
 */
export function calculateResult(config: QuizConfig, answers: Record<number, string>): string {
  const counts: Record<string, number> = {};

  Object.values(answers).forEach((value) => {
    counts[value] = (counts[value] || 0) + 1;
  });

  // Find the value with the highest count
  let maxCount = 0;
  let resultValue = '';

  for (const [value, count] of Object.entries(counts)) {
    if (count > maxCount) {
      maxCount = count;
      resultValue = value;
    }
  }

  // Fallback if no specific winner (e.g. tie), just pick the first result or a default
  if (!resultValue && config.results.length > 0) {
    return config.results[0].value;
  }

  return resultValue;
}

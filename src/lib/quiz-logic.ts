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

  // Iterate through config.results to ensure tie-breaking preference matches the config order
  // and efficiently find the winner among valid results.
  for (const result of config.results) {
    const value = result.value;
    const count = counts[value] || 0;
    
    // Strict greater than ensures that if we have a tie, the one appearing earlier 
    // in config.results (checked first) is kept as the winner.
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

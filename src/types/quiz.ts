export interface Option {
  text: string;
  value: string;
}

export interface Question {
  id: number;
  text: string;
  options: Option[];
}

export interface Result {
  value: string;
  title: string;
  description: string;
}

export interface QuizConfig {
  id: string;
  title: string;
  description: string;
  questions: Question[];
  results: Result[];
}

export interface LocalizedString {
  ko: string;
  en: string;
}

export interface Option {
  text: LocalizedString;
  value: string;
}

export interface Question {
  id: number;
  text: LocalizedString;
  options: Option[];
}

export interface Result {
  value: string;
  title: LocalizedString;
  description: LocalizedString;
}

export interface QuizConfig {
  id: string;
  title: LocalizedString;
  description: LocalizedString;
  questions: Question[];
  results: Result[];
}

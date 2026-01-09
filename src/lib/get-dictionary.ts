import 'server-only';
import type { Locale } from '@/i18n-config';

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
const dictionaries = {
  en: () => import('@/dictionaries/en.json').then((module) => module.default),
  ko: () => import('@/dictionaries/ko.json').then((module) => module.default),
  jp: () => import('@/dictionaries/en.json').then((module) => module.default), // Fallback to EN for now or create jp.json
};

export const getDictionary = async (locale: Locale) => {
  if (dictionaries[locale]) {
      return dictionaries[locale]();
  }
  return dictionaries['en']();
};

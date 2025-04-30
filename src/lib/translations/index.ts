
import { enTranslations } from './en';
import { hiTranslations } from './hi';

export type Language = 'en' | 'hi';

export const translations: Record<Language, typeof enTranslations> = {
  en: enTranslations,
  hi: hiTranslations,
};

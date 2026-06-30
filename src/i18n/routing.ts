import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['fa', 'en', 'de', 'fr', 'ar'], 
  defaultLocale: 'fa'
});
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from './locales/en.json';
import ruTranslations from './locales/ru.json';
import LanguageDetector from 'i18next-browser-languagedetector';

console.log('navigator.languages:', navigator.languages); // Все предпочитаемые языки
console.log('navigator.language:', navigator.language); // Основной язык

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslations },
      ru: { translation: ruTranslations },
    },
    //lng: 'ru', // язык по умолчанию удалил, т.к. теперь определяется сам
    fallbackLng: 'ru', // если перевод не найден
    interpolation: {
      escapeValue: false, // экранирование HTML не нужно
    },
  });

export default i18n;

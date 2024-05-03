// i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import TranslationsContent from "../assets/Translations";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: TranslationsContent.en
      },
      ru: {
        translation: TranslationsContent.ru
      }
      // Добавьте другие языки по мере необходимости
    },
    lng: "ru",
    interpolation: {
      escapeValue: false // Не нужно экранировать строки
    }
  });

export default i18n;

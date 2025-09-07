import i18n from 'i18next';
import enResources from './locales/_resources/resources.en';
import deResources from './locales/_resources/resources.de';
import LanguageData from './locales/LanguageData.json';

declare module 'i18next' {
    interface CustomTypeOptions {
        defaultNS: 'common';
        resources: typeof enResources;
    }
}

export const languages = Object.values(LanguageData);
const languageCodes = languages.map((language) => language.languageCode);


i18n.init({
    lng: 'en',
    fallbackLng: 'en',
    defaultNS: 'common',
    resources: {
      en: enResources,
      de: deResources
    },
    supportedLngs: languageCodes,
    interpolation: {
      escapeValue: false
    }
  });

  export default i18n;
import i18n from 'i18next';
import { resources as enResources } from './locales/_resources/resources.en';
import { resources as deResources } from './locales/_resources/resources.de';

i18n.init({
    lng: 'en',
    resources: {
      en: enResources,
      de: deResources
    }
  });

  export default i18n;
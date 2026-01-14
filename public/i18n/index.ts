import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import enLayoutTranslation from '@/components/layouts/i18n/en.json';
import viLayoutTranslation from '@/components/layouts/i18n/vi.json';
import enDashboardTranslation from '@/pages/admin/Dashboard/i18n/en.json';
import viDashboardTranslation from '@/pages/admin/Dashboard/i18n/vi.json';
import enPublishersTranslation from '@/pages/admin/employees/i18n/en.json';
import viPublishersTranslation from '@/pages/admin/employees/i18n/vi.json';
import enTrafficTranslation from '@/pages/admin/Traffic/i18n/en.json';
import viTrafficTranslation from '@/pages/admin/Traffic/i18n/vi.json';
import enAuthTranslation from './en/auth.json';
import enCommonTranslation from './en/common.json';
import viAuthTranslation from './vi/auth.json';
import viCommonTranslation from './vi/common.json';

const resources = {
  en: {
    common: enCommonTranslation,
    auth: enAuthTranslation,
    layout: enLayoutTranslation,
    dashboard: enDashboardTranslation,
    publisher: enPublishersTranslation,
    traffic: enTrafficTranslation,
  },
  vi: {
    common: viCommonTranslation,
    auth: viAuthTranslation,
    layout: viLayoutTranslation,
    dashboard: viDashboardTranslation,
    publisher: viPublishersTranslation,
    traffic: viTrafficTranslation,
  },
};

i18n
  // Load translation using http -> see /public/locales
  .use(Backend)
  // Detect user language
  .use(LanguageDetector)
  // Pass the i18n instance to react-i18next
  .use(initReactI18next)
  // Initialize i18next
  .init({
    resources,
    fallbackLng: 'en',
    debug: import.meta.env.DEV,

    interpolation: {
      escapeValue: false, // Not needed for react as it escapes by default
    },

    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
  });

export default i18n;

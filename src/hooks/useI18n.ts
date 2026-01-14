import { useTranslation } from 'react-i18next';

export const useI18n = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  const getCurrentLanguage = () => i18n.language;

  return {
    t,
    changeLanguage,
    getCurrentLanguage,
    isRTL: i18n.dir() === 'rtl',
  };
};

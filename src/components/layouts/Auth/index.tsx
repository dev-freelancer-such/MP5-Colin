import React from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '@/components/commons/SwitchLang';
import Typography from '@/components/commons/Typography';
import bgAuth from '@/assets/images/auth/bg-auth.jpg';
import './index.scss';

function AuthLayout({ children }: { children: React.ReactNode }) {
  const { t } = useTranslation('auth');

  return (
    <div
      className="auth-layout"
      style={{
        backgroundImage: `url(${bgAuth})`,
      }}
    >
      <div className="auth-layout__language-switcher">
        <LanguageSwitcher />
      </div>

      <div className="auth-layout__container">
        <div className="auth-layout__left-panel">
          <Typography
            variant="h2"
            fontWeight="bold"
            className="auth-layout__panel-title"
          >
            {t('let-is-started')}
          </Typography>
          <Typography
            className="auth-layout__panel-description"
            variant="body1"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. In nam,
            qui sint beatae dolor libero! Quaerat facilis explicabo rerum sint
            cum, possimus consequatur ex enim, veniam hic minus. Dolor,
            deserunt?
          </Typography>
        </div>
        <div className="auth-layout__right-panel">{children}</div>
      </div>
    </div>
  );
}

export default AuthLayout;

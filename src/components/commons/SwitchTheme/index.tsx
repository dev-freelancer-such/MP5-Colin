import React from 'react';
import imgDay from '@/assets/images/common/img-day.png';
import imgMoon from '@/assets/images/common/img-moon.png';
import imgNight from '@/assets/images/common/img-night.png';
import imgSun from '@/assets/images/common/img-sun.png';
import './theme-switcher.scss';
import { useTheme } from '../../../hooks/useTheme';
import { Image } from '../Image/image';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({
  className = '',
}) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      className={`theme-switcher ${isDark ? 'dark' : 'light'} ${className}`}
      aria-label="Toggle theme"
    >
      <Image
        className=""
        src={isDark ? imgNight : imgDay}
        alt={isDark ? 'Moon' : 'Sun'}
      />

      <span
        className={`theme-switcher__slider ${isDark ? 'theme-switcher__slider--dark' : 'theme-switcher__slider--light'}`}
      >
        <Image src={isDark ? imgMoon : imgSun} alt={isDark ? 'Moon' : 'Sun'} />
      </span>
    </button>
  );
};

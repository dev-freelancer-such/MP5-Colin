import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    // Kiểm tra theme đã lưu trong localStorage
    const savedTheme = localStorage.getItem('theme') as Theme | null;

    // Nếu có theme đã lưu, sử dụng theme đó
    if (savedTheme) {
      return savedTheme;
    }

    // Nếu không, kiểm tra preference của hệ thống
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }

    return 'light';
  });

  useEffect(() => {
    const root = document.documentElement;

    // Set data-theme attribute for SCSS theming
    root.setAttribute('data-theme', theme);

    // Also keep class for backwards compatibility
    root.classList.remove('light', 'dark');
    root.classList.add(theme);

    // Save theme to localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return { theme, setTheme, toggleTheme };
};

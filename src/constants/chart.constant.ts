// Chart color palette
export const DEFAULT_CHART_PALETTE = [
  '#0ea5e9', // Sky blue
  '#10b981', // Green
  '#f59e0b', // Amber
  '#ef4444', // Red
  '#8b5cf6', // Violet
  '#ec4899', // Pink
  '#14b8a6', // Teal
  '#f97316', // Orange
];

// Get computed CSS variable value
const getCSSVariable = (variable: string): string => {
  if (typeof window === 'undefined') return '#000000';
  return (
    getComputedStyle(document.documentElement)
      .getPropertyValue(variable)
      .trim() || '#000000'
  );
};

// Chart theme colors - using CSS variables from theme
export const getChartTheme = () => ({
  TEXT_PRIMARY: getCSSVariable('--color-text-primary') || '#1f2937',
  TEXT_SECONDARY: getCSSVariable('--color-text-secondary') || '#6b7280',
  BG_WHITE: getCSSVariable('--color-bg-white') || '#ffffff',
  BG_GRAY: getCSSVariable('--color-bg-primary-50') || '#f9fafb',
  BORDER: getCSSVariable('--color-border') || '#e5e7eb',
  GRID: getCSSVariable('--color-bg-primary-50') || '#f3f4f6',
});

// Static chart theme for server-side or initial render
export const CHART_THEME = {
  TEXT_PRIMARY: '#1f2937',
  TEXT_SECONDARY: '#6b7280',
  BG_WHITE: '#ffffff',
  BG_GRAY: '#f9fafb',
  BORDER: '#e5e7eb',
  GRID: '#f3f4f6',
};

// Chart theme colors for dark mode
export const CHART_THEME_DARK = {
  TEXT_PRIMARY: '#f8fafc',
  TEXT_SECONDARY: '#cbd5e1',
  BG_WHITE: '#1e293b',
  BG_GRAY: '#0f172a',
  BORDER: '#334155',
  GRID: '#1e293b',
};

// Common chart configuration
export const DEFAULT_CHART_CONFIG = {
  ANIMATION_DURATION: 800,
  TOOLTIP_OFFSET: 10,
  LEGEND_POSITION: 'top-right' as const,
  GRID_LINE_DASH: [4, 4],
  GRID_OPACITY: 0.15,
};

// Chart height presets
export const CHART_HEIGHT = {
  SMALL: 200,
  MEDIUM: 300,
  LARGE: 400,
  XLARGE: 500,
};

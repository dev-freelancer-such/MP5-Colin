// Export all custom hooks
export { useI18n } from './useI18n';
export { useTheme } from './useTheme';
export { useResponsive } from './useResponsive';
export { useChartResponsive } from './useChartResponsive';
export {
  default as useAppStore,
  useSelect,
  useDispatchAction,
} from './useAppStore';
export {
  default as useReduxStore,
  useAuth,
  useLoadingState,
  useSlice,
} from './useReduxStore';

// Re-export store hooks for convenience
export { useAppDispatch, useAppSelector } from '@/store/hooks';

import type { RootState } from '@/store';
import { useAppDispatch, useAppSelector } from '@/store/hooks';

export const useAppStore = () => {
  const dispatch = useAppDispatch();
  const select = useAppSelector;

  return {
    dispatch,
    select,
  };
};

export const useSelect = <T>(selector: (state: RootState) => T): T => {
  return useAppSelector(selector);
};

export const useDispatchAction = () => {
  return useAppDispatch();
};

export default useAppStore;

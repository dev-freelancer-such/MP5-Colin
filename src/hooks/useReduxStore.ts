import { useCallback } from 'react';
import type { RootState } from '@/store';
import type { AsyncThunk } from '@reduxjs/toolkit';
import { useAppDispatch, useAppSelector } from '@/store/hooks';

export const useReduxStore = () => {
  const dispatch = useAppDispatch();
  const select = useAppSelector;

  const dispatchAsync = useCallback(
    async <T extends AsyncThunk<unknown, unknown, object>>(
      asyncAction: ReturnType<T>
    ) => {
      try {
        const result = await dispatch(asyncAction).unwrap();
        return { success: true, data: result, error: null };
      } catch (error) {
        return { success: false, data: null, error };
      }
    },
    [dispatch]
  );

  return {
    dispatch,
    select,
    dispatchAsync,
  };
};

export const useAuth = () => {
  return useAppSelector((state) => state.auth);
};

export const useLoadingState = (sliceName: keyof RootState) => {
  return useAppSelector((state) => {
    const slice = state[sliceName] as unknown as Record<string, unknown>;
    return {
      loading: (slice?.loading as boolean) ?? false,
      error: (slice?.error as string | null) ?? null,
    };
  });
};

export const useSlice = <K extends keyof RootState>(sliceName: K) => {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state[sliceName]);

  return {
    state,
    dispatch,
  };
};

export default useReduxStore;

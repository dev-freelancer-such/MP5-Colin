import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { BreadcrumbPropsInterface } from '@/models/common/common.model';

interface GlobalState {
  isLoading: boolean;
  breadcrumb?: BreadcrumbPropsInterface;
  isAuth: boolean;
}

const initialState: GlobalState = {
  isLoading: false,
  breadcrumb: {
    header: '',
    breadcrumb: [],
  },
  isAuth: false,
};

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setIsLoadingAction: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setBreadcrumb: (state, action: PayloadAction<BreadcrumbPropsInterface>) => {
      state.breadcrumb = action.payload;
    },
    setIsAuthAction: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
  },
});

export const { setIsLoadingAction, setBreadcrumb, setIsAuthAction } =
  globalSlice.actions;

export default globalSlice.reducer;

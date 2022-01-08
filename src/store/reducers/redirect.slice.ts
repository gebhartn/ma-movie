import { createSelector, createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../';

export interface RedirectState {
  route: string;
}

export const initialState: RedirectState = {
  route: '',
};

export const redirectSlice = createSlice({
  name: 'redirect',
  initialState,
  reducers: {
    reset: (state) => {
      state.route = '';
    },
  },
  extraReducers: {},
});

// Selectors
export const selectRedirect = (state: RootState) => state.redirect;
export const selectRoute = createSelector(selectRedirect, ({ route }) => route);

// Actions
export const { reset } = redirectSlice.actions;

export default redirectSlice.reducer;

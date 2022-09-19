import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface SubMenuStatisticsState {
  projects: number;
  sideProjects: number;
  investment: number;
  assets: number;
};

const initialState: SubMenuStatisticsState = {
  projects: 0,
  sideProjects: 0,
  investment: 0,
  assets: 0,
};

export const subMenuStatisticsSlice = createSlice({
  name: 'subMenuStatistics',
  initialState,
  reducers: {
    query: (state, action: PayloadAction<keyof SubMenuStatisticsState>) => {
      state[action.payload] += 1;
    }
  },
  extraReducers: builder => {
  },
});

export const { query } = subMenuStatisticsSlice.actions;

export default subMenuStatisticsSlice.reducer;

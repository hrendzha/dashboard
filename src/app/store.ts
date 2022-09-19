import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { authApi } from './api/authApi';
import authReducer from './redux/authSlice';
import subMenuStatisticsReducer from './redux/subMenuStatistics';

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    auth: authReducer,
    subMenuStatistics: subMenuStatisticsReducer
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

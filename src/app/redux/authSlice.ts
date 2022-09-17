import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface AuthState {
  isAuth: boolean | null;
  sessionToken: string | null;
  userToken: string | null;
  userName: string | null;
  status: 'idle' | 'loading' | 'failed' | 'complete';
};

const initialState: AuthState = {
  isAuth: true,
  sessionToken: 'sessionToken',
  userToken: 'userToken',
  userName: 'Test',
  status: 'idle',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
  },
  extraReducers: builder => {
  },
});

export const { } = authSlice.actions;

export const selectToken = (state: RootState) => {
  return {
    sessionToken: state.auth.sessionToken!,
    userToken: state.auth.userToken!
  } as any
}

export const selectUserName = (state: RootState) => state.auth.userName;

export default authSlice.reducer;

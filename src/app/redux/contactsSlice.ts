import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface IContactsState {
  latest: Array<any>;
  count: number;
}

const initialState: IContactsState = {
  latest: [],
  count: 0
}

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    selectLatestContacts: (state, action: PayloadAction<any>) => {

    }
  }
});

export const { selectLatestContacts } = contactsSlice.actions;

export default contactsSlice.reducer;

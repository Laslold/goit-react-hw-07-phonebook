import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContactThunk,
  addContactThunk,
  deleteContactsThunk,
} from './phoneBook-operation';

const initialState = {
  contacts: [
    // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};
const contactsReducer = createSlice({
  name: 'contacts',
  initialState,
  loading: false,
  error: null,

  reducers: {

    filter: (store, { payload }) => {
      store.filter = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContactThunk.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchContactThunk.fulfilled, (state, action) => {
        state.contacts = action.payload;
        state.loading = false;
      })
      .addCase(fetchContactThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addContactThunk.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addContactThunk.fulfilled, (state, action) => {
        state.contacts.push(action.payload);
        state.loading = false;
      })
      .addCase(addContactThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteContactsThunk.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteContactsThunk.fulfilled, (state, action) => {
        state.contacts = state.contacts.filter(
          item => item.id !== action.payload.id
        );
        state.loading = false;
      })
      .addCase(deleteContactsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export const { add, remove, filter } = contactsReducer.actions;
export default contactsReducer.reducer;

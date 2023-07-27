import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { addContacts, deleteContacts, getContacts } from 'shared/api';
export const fetchContactThunk = createAsyncThunk(
  'contact/fetchContactThunk',
  async (_, thunkAPI) => {
    try {
      const data = await getContacts();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const addContactThunk = createAsyncThunk(
  'contact/addContactThunk',
  async (data, thunkAPI) => {
    try {
      const result = await addContacts(data);
      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteContactsThunk = createAsyncThunk(
  'contact/deleteContactsThunk',
  async (id, thunkAPI) => {
    try {
      const result = await deleteContacts(id);
      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
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
    // add: {
    //   reducer: (prevStore, { payload }) => {
    //     const newStore = {
    //       ...prevStore,
    //       contacts: [...prevStore.contacts, payload],
    //     };
    //     return newStore;
    //   },

    //   prepare: (data) => {
    //     return { payload: { id: nanoid(), ...data } };
    //   },
    // },

    // remove: (store, { payload }) => {
    //   const newStore = {
    //     ...store,
    //     contacts: [...store.contacts.filter((item) => item.id !== payload)],
    //   };
    //   return newStore;
    // },
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

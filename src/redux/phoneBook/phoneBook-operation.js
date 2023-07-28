import { createAsyncThunk } from '@reduxjs/toolkit';
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

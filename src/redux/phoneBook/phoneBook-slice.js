import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
const initialState = {
  contacts: [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ],
  filter: "",
};
const contactsReducer = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    add: {
      reducer: (prevStore, { payload }) => {
        const newStore = {
          ...prevStore,
          contacts: [...prevStore.contacts, payload],
        };
        return newStore;
      },

      prepare: (data) => {
        return { payload: { id: nanoid(), ...data } };
      },
    },

    remove: (store, { payload }) => {
      const newStore = {
        ...store,
        contacts: [...store.contacts.filter((item) => item.id !== payload)],
      };
      return newStore;
    },
    filter: (store, { payload }) => {
      store.filter = payload;
    },
  },
});
export const { add, remove, filter } = contactsReducer.actions;
export default contactsReducer.reducer;

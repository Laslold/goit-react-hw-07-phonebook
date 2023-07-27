import { combineReducers } from '@reduxjs/toolkit';
import contactsReducer from './phoneBook/phoneBook-slice';
const RootReducer = combineReducers({
  phoneBook: contactsReducer,
});
export default RootReducer;

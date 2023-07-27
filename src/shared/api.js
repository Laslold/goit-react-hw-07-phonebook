import axios from 'axios';
const instance = axios.create({
  baseURL: 'https://64bfd6030d8e251fd11189e2.mockapi.io/contacts',
});
export const getContacts = async () => {
  const { data } = await instance.get('/');
  return data;
};
export const deleteContacts = async id => {
  const { data } = await instance.delete(`/${id}`);
  return data;
};
export const addContacts = async data => {
  const { data: result } = await instance.post('/', data);
  return result;
};

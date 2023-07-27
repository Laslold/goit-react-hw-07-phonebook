export const getContacts = (store) => {
  return store.phoneBook.contacts;
};

export const getFilterContacts = (store) => {
  const { contacts, filter } = store.phoneBook;

  if (!filter) {
    return contacts;
  }

  const normalize = (value) => {
    return value.toLowerCase();
  };

  return contacts.filter((item) =>
    normalize(item.name).includes(normalize(filter.trim()))
  );
};

export const getFilter = (store) => {
  return store.phoneBook.filter;
};

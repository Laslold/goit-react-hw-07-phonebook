// import { useEffect, useState } from 'react';
import ContactForm from './ContactForm';

import Container from './Container';
import { AppStyled } from './App.styled';
import ContactList from './ContactList';
// import { useRef } from 'react';

import Filter from './Filter';
import { useDispatch, useSelector } from 'react-redux';
import { add, remove, filter } from '../redux/phoneBook/phoneBook-slice';
import {
  getFilterContacts,
  getFilter,
} from 'redux/phoneBook/phoneBook-selector';

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getFilterContacts);
  const filterValue = useSelector(getFilter);

  const onAddContacts = data => {
    const isInclude = contacts.find(
      ({ name }) => name.toLowerCase() === data.name.toLowerCase()
    );
    if (!isInclude) {
      dispatch(add(data));
      return;
    }
    alert(`${isInclude.name} is already in contacts`);
    return;
  };

  const onRemoveContact = id => {
    dispatch(remove(id));
  };

  const onChangeFilter = ({ target }) => {
    dispatch(filter(target.value));
  };
  // const [contacts, setContacts] = useState([]);
  // const [filter, setFilter] = useState('');
  // const firstRender = useRef(true); //отложен первый запуск

  // useEffect(() => {
  //   if (!firstRender.current) {
  //     //пропускаем запись в сторедж при старте
  //     localStorage.setItem('contact', JSON.stringify(contacts));
  //   }
  // }, [contacts]);

  // useEffect(() => {
  //   const contacts = JSON.parse(localStorage.getItem('contact'));

  //   if (contacts?.length) {
  //     setContacts(contacts);
  //   }
  //   setTimeout(() => {
  //     //тормоз считывания для дубляжа
  //     firstRender.current = false;
  //   }, 0);
  // }, []);

  // const addContact = ({ name, number }) => {
  //   if (contacts.find(contact => contact.name === name)) {
  //     alert(`${name} is already in contacts`);
  //     return;
  //   }
  //   const newContacts = {
  //     name,
  //     number,
  //     id: nanoid(),
  //   };
  //   setContacts(prevState => [...prevState, newContacts]);
  // };
  // const removeContact = id => {
  //   setContacts(prevContacts => prevContacts.filter(item => item.id !== id));
  // };
  // const handleFilter = ({ target }) => setFilter(target.value);
  // const getFilterContact = () => {
  //   if (!filter) {
  //     return contacts;
  //   }
  //   const filterValue = filter.toLowerCase();
  //   const filterContact = contacts.filter(({ name }) => {
  //     const nameValue = name.toLowerCase();
  //     return nameValue.includes(filterValue.trim());
  //   });
  //   return filterContact;
  // };

  // const filterContact = getFilterContact();
  return (
    <AppStyled>
      <Container title="Phonebook">
        <ContactForm onSubmit={onAddContacts} />
      </Container>
      <div>
        <Container title="Contacts">
          <Filter onChange={onChangeFilter} value={filterValue} />
          <ContactList contacts={contacts} removeContact={onRemoveContact} />
        </Container>
      </div>
    </AppStyled>
  );
};
// }

export default App;

import { useEffect } from 'react';
import ContactForm from './ContactForm';

import Container from './Container';
import { AppStyled } from './App.styled';
import ContactList from './ContactList';
// import { useRef } from 'react';

import Filter from './Filter';
import { useDispatch, useSelector } from 'react-redux';
import { filter } from '../redux/phoneBook/phoneBook-slice';
import {
  fetchContactThunk,
  addContactThunk,
  deleteContactsThunk,
} from '../redux/phoneBook/phoneBook-operation';
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
      dispatch(addContactThunk(data));
      return;
    }
    alert(`${isInclude.name} is already in contacts`);
    return;
  };

  const onRemoveContact = id => {
    dispatch(deleteContactsThunk(id));
  };

  const onChangeFilter = ({ target }) => {
    dispatch(filter(target.value));
  };
  useEffect(() => {
    dispatch(fetchContactThunk());
  }, [dispatch]);

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

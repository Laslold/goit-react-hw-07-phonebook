import { useState } from 'react';
import Button from '../Button';
import PropTypes from 'prop-types';
import { FormStyled, FormButton } from './Contactform.styled';

const ContactForm = ({ onSubmit }) => {
  const [contact, setContact] = useState({
    name: '',
    number: '',
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setContact(prevContact => ({
      ...prevContact,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ ...contact });
    setContact({
      name: '',
      number: '',
    });
  };
  const { name, number } = contact;
  return (
    <form onSubmit={handleSubmit} action="" method="get">
      <FormStyled>
        <label htmlFor="name">Name: </label>
        <input
          className="formInp"
          onChange={handleChange}
          value={name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </FormStyled>

      <FormStyled>
        <label htmlFor="number">Number:</label>
        <input
          className="formInp"
          onChange={handleChange}
          value={number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </FormStyled>
      <FormButton>
        <Button type="submit" variant="none">
          Add contact
        </Button>
      </FormButton>
    </form>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default ContactForm;

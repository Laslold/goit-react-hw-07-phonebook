import { ListStyled, ListStyledItems } from './ContactList.styled';
import PropTypes from 'prop-types';
import Button from 'components/Button/Button';
const ContactList = ({ contacts, removeContact }) => {
  const elem = contacts.map(({ id, name, phone }) => (
    <ListStyled key={id}>
      <p>{name} : </p>
      <p>
        {phone}
        <Button onClick={() => removeContact(id)}>Delete</Button>
      </p>
    </ListStyled>
  ));
  return <ListStyledItems>{elem}</ListStyledItems>;
};
ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  removeContact: PropTypes.func.isRequired,
};
export default ContactList;

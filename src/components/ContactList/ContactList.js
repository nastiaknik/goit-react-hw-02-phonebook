import PropTypes from 'prop-types';
import { ContactItem } from '../ContactItem/ContactItem';
import {
  Table,
  /* TableHead, */
} from './ContactList.styled';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <Table>
      {/* <thead>
        <tr>
          <TableHead>Name</TableHead>
          <TableHead>Phone number</TableHead>
          <TableHead>
            {contacts.length}
            <span> {contacts.length === 1 ? 'contact' : 'contacts'}</span>
          </TableHead>
        </tr>
      </thead> */}
      <tbody>
        <ContactItem contacts={contacts} onDelete={onDelete} />
      </tbody>
    </Table>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};

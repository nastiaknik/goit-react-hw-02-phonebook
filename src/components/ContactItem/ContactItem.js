import PropTypes from 'prop-types';
import { RiDeleteBinLine } from 'react-icons/ri';
import { IoIosCall } from 'react-icons/io';
import { getInitials } from '../../utils/getInitials';
import { getRandomColor } from '../../utils/getRandomColor';
import {
  TableRow,
  NameCeil,
  NumberCeil,
  ActionCeil,
  Avatar,
  Button,
  Link,
} from './ContactItem.styled';

export const ContactItem = ({ contacts, onDelete }) => {
  return contacts.map(({ id, name, number }) => {
    return (
      <TableRow key={id}>
        <NameCeil>
          <Avatar style={getRandomColor()}>{getInitials(name)}</Avatar>
          {name}
        </NameCeil>
        <NumberCeil>{number}</NumberCeil>
        <ActionCeil>
          <Link href={`tel: ${number}`}>
            <IoIosCall size={24} color="green" />
          </Link>
          <Button
            type="button"
            onClick={() => {
              onDelete(id);
            }}
          >
            <RiDeleteBinLine size={24} color="red" />
          </Button>
        </ActionCeil>
      </TableRow>
    );
  });
};

ContactItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};

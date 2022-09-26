import { ListElem } from '../ListElem/ListElem';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';

export const PhonebookList = ({ contacts }) => {
  return (
    <Table >
                <thead>
                    <tr>                    
                    <th>Name</th>
                    <th>Number</th>
          <th>Edit</th>
          <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map(({ name, id, number }) => (
          <ListElem key={id} contactId={id} name={name} number={number}/>
      ))}
                </tbody>
    </Table>
  );
};

PhonebookList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
    )
};

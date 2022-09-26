import { ListButtonDelete, ListButtonPatch } from 'components/Atoms/Buttons.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contacts-operations';
import { useState } from 'react';
import { PatchForm } from 'components/PatchForm/PatchForm';

import PropTypes from 'prop-types';

export const ListElem = ({ contactId, name, number }) => {
  const dispatch = useDispatch();
  const [wantToPatch, setWantToPatch] = useState(false);
  const patchHandler = bool => {
    setWantToPatch(bool);
  };
  return (
    <tr>
      <td>{name}</td>
      <td>{number}</td>
      {wantToPatch ? (
        <td><PatchForm id={contactId} wantToPatch={patchHandler} contactName={name} contactNumber={number} /></td>
      ) : (
        <td><ListButtonPatch type="button" onClick={() => patchHandler(true)}>
          Edit
        </ListButtonPatch></td>
      )}
      {!wantToPatch && <td><ListButtonDelete
        type="button"
        id={name}
        onClick={() => dispatch(deleteContact(contactId))}
      >
        Delete
      </ListButtonDelete></td> }
    </tr>
  );
};

ListElem.propTypes = {
  contactId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

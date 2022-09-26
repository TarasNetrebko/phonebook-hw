import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getContacts,
  addContactToApi,
  deleteContactFromApi,
  patch,
} from '../../servises/api';
import Notiflix from 'notiflix';

export const fetchContacts = createAsyncThunk(
  'contacts/fetch',
  async (_, thunkApi) => {
    try {
      const data = await getContacts();
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

const isDublicateName = ({ name }, contacts) => {
  const normalizedName = name.toLowerCase();
  const result = contacts.items.find(contact => {
    return normalizedName === contact.name.toLowerCase();
  });

  return result;
};
const isDublicateNumber = ({ number }, contacts) => {
  const result = contacts.items.find(contact => {
    return number === contact.number;
  });

  return result;
};

export const addContact = createAsyncThunk(
  'contacts/add',
  async (data, { rejectWithValue }) => {
    try {
      const result = await addContactToApi(data);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
  {
    condition: (data, { getState }) => {
      const { contacts } = getState();
      if (isDublicateName(data, contacts.items)) {
        Notiflix.Notify.failure(`Name: ${data.name} is alredy exist`);
        return false;
      }
      if (isDublicateNumber(data, contacts.items)) {
        Notiflix.Notify.failure(`Number: ${data.number} is alredy exist`);
        return false;
      }
    },
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/remove',
  async (contactId, { rejectWithValue }) => {
    try {
      await deleteContactFromApi(contactId);
      return contactId;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const patchContact = createAsyncThunk(
  'contacts/patch',
  async ({ id, contact }, { rejectWithValue }) => {
    try {
      await patch(id, contact);
      const data = { id, contact };
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

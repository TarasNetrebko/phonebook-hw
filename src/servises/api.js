import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});
const setToken = token => {
  instance.defaults.headers.common.authorization = token
    ? `Bearer ${token}`
    : '';
};

export const signup = async user => {
  const { data } = await instance.post('users/signup', user);
  setToken(data.token);
  return data;
};
export const login = async user => {
  const { data } = await instance.post('users/login', user);
  setToken(data.token);
  return data;
};
export const logout = async () => {
  const { data } = await instance.post('users/logout');
  setToken();
  return data;
};
export const current = async token => {
  try {
    setToken(token);
    const { data } = await instance.get('users/current');
    return data;
  } catch (error) {
    setToken();
    throw error;
  }
};
export const patch = async (id, contact) => {
  const { data } = await instance.patch(`contacts/${id}`, contact);
  return data;
};
export const getContacts = async () => {
  const { data } = await instance.get('contacts');
  return data;
};
export const addContactToApi = async contact => {
  const { data } = await instance.post('contacts', contact);
  return data;
};
export const deleteContactFromApi = async id => {
  const { data } = await instance.delete(`contacts/${id}`);
  return data;
};

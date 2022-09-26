import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import { addContact } from 'redux/contacts/contacts-operations';

export const PhonebookForm =() => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();

  const handleChange = e => {
    e.target.name === "name" ? setName(e.target.value) : setNumber(e.target.value);
  };
  const formSubmitHandler = (e) => {
    e.preventDefault();
    const contact = {
      name,
      number,
    };
     dispatch(addContact(contact));
      setName("");
      setNumber("");    
  };
  return (
      <Form onSubmit={formSubmitHandler}>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" value={name} name="name" pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$" title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan" placeholder="Enter name" onChange={handleChange} required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Number</Form.Label>
                    <Form.Control type="tel" value={number} name="number" pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}" title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +" placeholder="Enter number" onChange={handleChange} required/>
                </Form.Group>                
                <Button variant="primary" type="submit">
                    Add Contact
                </Button>
        </Form>
    );
  }
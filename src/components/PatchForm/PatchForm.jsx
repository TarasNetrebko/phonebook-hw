import { useState } from "react"
import { useDispatch } from "react-redux";
import  PropTypes  from "prop-types"
import { patchContact } from "redux/contacts/contacts-operations";
import { Form, Button } from "react-bootstrap";

export const PatchForm = ({id, wantToPatch, contactNumber, contactName}) => {
    const [name, setName] = useState(contactName);
    const [number, setNumber] = useState(contactNumber);
    const dispatch = useDispatch();
    const changeHandler = (e) => {
        e.target.name === "name" ? setName(e.target.value) : setNumber(e.target.value)
    }
    const onSubmitHandler = (e) => {
        e.preventDefault();

        const data = {
            id,
            contact: {
                name,
                number,
            }
    };
     dispatch(patchContact(data));
        setName("");
        setNumber("");
        wantToPatch(false);
    }
    return (
        <Form onSubmit={onSubmitHandler}>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>New Name</Form.Label>
                    <Form.Control type="text" value={name} name="name" placeholder="enter name" onChange={changeHandler} required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>New Number</Form.Label>
                    <Form.Control type="text" value={number} name="tel" placeholder="enter number" onChange={changeHandler} required/>
                </Form.Group>                
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            <Button variant="secondary" type="button" onClick={() => wantToPatch(false)}>
                    Cancel
                </Button>
            </Form>
    )
}
PatchForm.propTypes = {
    id: PropTypes.string.isRequired,
    wantToPatch: PropTypes.func.isRequired,
    contactName: PropTypes.string.isRequired,
    contactNumber: PropTypes.string.isRequired,
} 
import { useState } from "react"
import { useDispatch } from "react-redux";
import { userSignup } from "redux/auth/auth-operations";
import { Form, Button } from "react-bootstrap";

export const RegisterPage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const onInputChange = (e) => {
        if (e.target.name === "name") {
            setName(e.target.value);
        } else if (e.target.name === "email") {
            setEmail(e.target.value);
        } else {
            setPassword(e.target.value);
        }
    }
    const submitHandler = (e) => {
        e.preventDefault();
        const user = {
            name,
            email,
            password
        }
        e.preventDefault();
        dispatch(userSignup(user));
        setName("");
        setEmail("");
        setPassword("");
    }

    return (
        <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="text" value={name} name="name" placeholder="Enter name" onChange={onInputChange} required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" value={email} name="email" placeholder="Enter email" onChange={onInputChange} required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value={password} name="password" placeholder="Enter password" onChange={onInputChange} required/>
                </Form.Group>                
                <Button variant="primary" type="submit">
                    Sign Up
                </Button>
            </Form>
        // <form action="" onSubmit={submitHandler}>
        //     <label>
        //         Your name:
        //         <input type="text" name="name" value={name} onChange={onInputChange} />
        //     </label>
        //     <label >
        //         Your email:
        //         <input type="email" name="email" value={email} onChange={onInputChange} />
        //     </label>
        //     <label>
        //         Your password:
        //         <input type="password" name="password" value={password} onChange={onInputChange}/>
        //     </label>
        //     <button type="submit">Sign up</button>
        // </form>
    )
}
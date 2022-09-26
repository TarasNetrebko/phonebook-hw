import { useState } from "react"
import { useDispatch } from "react-redux";
import { userLogin } from "redux/auth/auth-operations";
import {Form, Button } from "react-bootstrap";

export const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const onInputChange = (e) => {        
        e.target.name === "email" ? setEmail(e.target.value) : setPassword(e.target.value);         
    }
    const submitHandler = (e) => {
        const user = {
            email,
            password
        }
        e.preventDefault();
        dispatch(userLogin(user));
        setEmail("");
        setPassword("");
    }

    return (
        <Form onSubmit={submitHandler}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" value={email} name="email" placeholder="Enter email" onChange={onInputChange} required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value={password} name="password" placeholder="Enter password" onChange={onInputChange} required/>
                </Form.Group>                
                <Button variant="primary" type="submit">
                    Log in
                </Button>
            </Form>
        // <form action="" onSubmit={submitHandler}>
        //     <label >
        //         Your email
        //         <input type="email" name="email" value={email} onChange={onInputChange} />
        //     </label>
        //     <label>
        //         Your password
        //         <input type="password" name="password" value={password} onChange={onInputChange}/>
        //     </label>
        //     <button type="submit">Log in</button>
        // </form>
    )
}
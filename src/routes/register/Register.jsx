import React, {useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createUser } from "../../actions/users";

import './Register.css';


function Register() {

    const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: ''
    });

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createUser(userData))
    }

    return (
        <div className="register-page">
            <Container>
                <h1>Register</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" value={userData.firstName} onChange={(e) => setUserData({ ...userData, firstName: e.target.value})} />
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" value={userData.lastName} onChange={(e) => setUserData({ ...userData, lastName: e.target.value })} />
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" value={userData.username} onChange={(e) => {setUserData({ ...userData, username: e.target.value })}} />
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control type="email" value={userData.email} onChange={(e) => setUserData({ ...userData, email: e.target.value })} />
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value={userData.password} onChange={(e) => setUserData({ ...userData, password: e.target.value })} />
                    <Button type="submit">Register</Button>
                </Form>
                <div className="login-link">
                    <p>I already have an account</p>
                    <Link to="/login">Login</Link>
                </div>
            </Container>
        </div>
    );
}

export default Register;

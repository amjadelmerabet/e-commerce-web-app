import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './Login.css';

function Login() {
    return (
        <div className="login-page">
            <Container>
                <h1>Login</h1>
                <Form>
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Username" />
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                    <Button type="submit">Login</Button>
                </Form>
                <div className="register-link">
                    <p>I don't have an account</p>
                    <Link to="/register">Register</Link>
                </div>
            </Container>
        </div>
    );
}

export default Login;

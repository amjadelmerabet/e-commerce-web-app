import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Data from '../../db.json';

import './Footer.css';

function Footer() {
    return (
        <div className="footer p-3 bg-dark">
            <Container fluid bg="dark" className="footer-content px-5 ">
                <div className="row">
                    <div className="col1 col-12 col-sm-6 col-md-4">
                        <h5 id="app-name">{Data.appInfos.appName}</h5>
                        <p className="footer-paragraph">
                            {Data.appInfos.appDescription}
                        </p>
                    </div>
                    <div className="col2 col-12 col-sm-6 col-md-4">
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            {Data.footer.columns[1].elements.map(
                                (element, index) => {
                                    return (
                                        <li key={element.id}>
                                            <Link to={element.link}>
                                                {element.label}
                                            </Link>
                                        </li>
                                    );
                                }
                            )}
                        </ul>
                    </div>
                    <div className="col3 col-12 col-sm-6 col-md-4">
                        <h5>Newsletter</h5>
                        <Form className="m-5">
                            <Form.Group>
                                <Form.Label>
                                    Subscribe to our newsletter
                                </Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="ecommerce@example.com"
                                    className="me-5"
                                ></Form.Control>
                            </Form.Group>
                            <Button variant="success" className="my-3">
                                Subscribe
                            </Button>
                        </Form>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Footer;

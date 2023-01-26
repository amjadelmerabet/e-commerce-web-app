import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import SocialMediaLinks from './social-media-links/SocialMediaLinks';

import Data from '../../../db.json';

import Logo from '../../../assets/images/tsd-logo.png';

import './TopHeader.css';

function TopHeader() {
    return (
        <div className="top-header">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container fluid>
                    <Navbar.Brand href="#home">
                        <img src={Logo} alt="Website Logo"></img>
                        <span id="app-name">{Data.appInfos.appName}</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbar-top" />
                    <Navbar.Collapse id="navbar-top">
                        <Nav className="d-flex justify-content-end w-100">
                            <SocialMediaLinks
                                data={Data.header.topHeader.socialMediaLinks}
                            />
                            <Button
                                className="top-navbar-button"
                                variant="dark"
                            >
                                <Link to="/register">
                                    {Data.header.topHeader.buttons[1].label}
                                </Link>
                            </Button>
                            <Button
                                className="top-navbar-button"
                                variant="dark"
                            >
                                <Link to="/login">
                                    {Data.header.topHeader.buttons[0].label}
                                </Link>
                            </Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default TopHeader;

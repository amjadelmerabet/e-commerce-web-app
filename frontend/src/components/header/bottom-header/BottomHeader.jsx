import React from 'react';
import { Navbar, Container, Nav, Button, Row, Col } from 'react-bootstrap';
import { AiOutlineShoppingCart, AiOutlineHeart } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import NavigationMenu from './navigation-menu/NavigationMenu';
import GLobalSearch from './global-seach/GlobalSearch';

import Data from '../../../db.json';

import './BottomHeader.css';

function BottomHeader() {
    return (
        <div className="bottom-header">
            <Navbar expand="lg">
                <Container fluid style={{ justifyContent: 'flex-end' }}>
                    <Navbar.Toggle aria-controls="navbar-bottom" />
                    <Navbar.Collapse id="navbar-bottom">
                        <Row>
                            <Col sm={12} lg={4}>
                                <NavigationMenu
                                    data={{
                                        menu: Data.header.bottomHeader
                                            .navigationMenu,
                                    }}
                                />
                            </Col>
                            <Col
                                sm={12}
                                lg={4}
                                className="d-flex justify-content-center"
                            >
                                <GLobalSearch
                                    data={{
                                        select: Data.header.bottomHeader.form
                                            .select,
                                    }}
                                />
                            </Col>
                            <Col sm={12} lg={4}>
                                <Nav className="shopping-menu">
                                    <Button>
                                        <Link to="/wishlist">
                                            <AiOutlineHeart size="20px" />
                                            <span>Wish List</span>
                                        </Link>
                                    </Button>
                                    <Button>
                                        <Link to="/cart">
                                            <AiOutlineShoppingCart size="20px" />
                                            <span>Cart</span>
                                        </Link>
                                    </Button>
                                </Nav>
                            </Col>
                        </Row>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default BottomHeader;

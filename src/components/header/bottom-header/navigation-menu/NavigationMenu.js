import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";

import './NavigationMenu.css'


function NavigationMenu(props) {
    return (
        <Nav className="me-auto my-2 my-lg-0 navigation-menu" navbarScroll>
            {
                props.data.menu.map((element) => {
                    return (
                        <Nav.Item key={element.id}>
                            <Link to={element.link}>{element.label}</Link>
                        </Nav.Item>
                    )
                })
            }
        </Nav>
    )
}

export default NavigationMenu
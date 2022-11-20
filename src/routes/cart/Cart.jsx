import React, { useState } from "react";
import { Col, Container, Row, Button, FormControl } from "react-bootstrap";

// import Data from '../../db.json'

import './Cart.css';


function Cart() {

    const [itemRemoved, setItemRemoved] = useState(null);

    let totalPrice = 0;

    const removeProduct = (id) => {
        sessionStorage.removeItem(id)
        console.log(itemRemoved);
        setItemRemoved(id)
    }

    return (
        <div className="cart">
            <Container fluid>
                <h1>Your Cart</h1>
                <Row>
                    <Col sm={12} md={8}>
                        <div className="cart-items">
                            <table className="items-list">
                                <thead></thead>
                                <tbody>
                                {
                                    Object.keys(sessionStorage).map(key => {
                                        const { id, name, price, type } = JSON.parse(sessionStorage.getItem(key))
                                        if(type === 'cart') {
                                            totalPrice += price
                                            return (
                                                <tr key={id}>
                                                    <td className="item-name">
                                                        {name}
                                                    </td>
                                                    <td>
                                                        <FormControl type="number" placeholder="Quantity" />
                                                    </td>
                                                    <td>
                                                        <Button variant="danger" className="remove-button" onClick={() => removeProduct(JSON.stringify({id: id, name: "cart"}))}>Remove</Button>
                                                    </td>
                                                </tr>
                                            )
                                        }
                                        return null
                                    })
                                }
                                </tbody>
                                <tfoot></tfoot>
                            </table>
                        </div>
                    </Col>
                    <Col sm={12} md={4}>
                        <div className="cart-summary">
                            <h3>Cart Summary</h3>
                            <table className="summary-table">
                                <thead></thead>
                                <tbody>
                                {
                                    Object.keys(sessionStorage).map(key => {
                                        const { id, name, price, type } = JSON.parse(sessionStorage.getItem(key))
                                        if(type === 'cart') {
                                            return (
                                                <tr key={id}>
                                                    <td className="item">{name}</td>
                                                    <td className="price">{price}$</td>
                                                </tr>            
                                            )
                                        }
                                        return null
                                    })
                                }
                                </tbody>
                                <tfoot></tfoot>
                            </table>
                            <div className="total">
                                <div>Total:</div>
                                <div className="total-price" style={{color: 'rgb(45, 255, 165)'}}>
                                    { totalPrice }$
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );

}

export default Cart;

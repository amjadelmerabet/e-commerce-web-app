import React, { useState } from 'react';
import { Col, Row, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {
    AiFillHeart,
    AiOutlineShoppingCart,
    AiOutlineEye,
} from 'react-icons/ai';

import './WishList.css';

function WishList() {
    // Set Data to Local Storage
    const addProductToCart = (
        id,
        name,
        price,
        offer,
        newPrice,
        category,
        description
    ) => {
        const productData = {
            id: id,
            name: name,
            price: offer ? newPrice : price,
            category: category,
            descritpion: description,
            type: 'cart',
        };
        sessionStorage.setItem(
            JSON.stringify({ id: id, name: 'cart' }),
            JSON.stringify(productData)
        );
    };

    const [itemRemoved, setItemRemoved] = useState(null);

    const removeProduct = (id) => {
        sessionStorage.removeItem(id);
        console.log(itemRemoved);
        setItemRemoved(id);
    };

    return (
        <div className="wishlist">
            <h1>Your Wish List</h1>
            <Row>
                {Object.keys(sessionStorage).map((key) => {
                    const {
                        id,
                        name,
                        price,
                        offer,
                        newPrice,
                        category,
                        description,
                        type,
                        image,
                    } = JSON.parse(sessionStorage.getItem(key));
                    if (type === 'wishlist') {
                        return (
                            <Col sm={12} md={6} lg={3} key={id}>
                                <Card className="product-card">
                                    {/* style={{backgroundImage: `url(${require('../../../../assets/images/' + props.product.image)})`}} */}
                                    <Card.Body>
                                        <img src={image} alt="" />
                                        <Button
                                            variant="success"
                                            onClick={() =>
                                                removeProduct(
                                                    JSON.stringify({
                                                        id: id,
                                                        name: 'wishlist',
                                                    })
                                                )
                                            }
                                        >
                                            <AiFillHeart className="icon" />
                                        </Button>
                                        <Button
                                            variant="success"
                                            onClick={() =>
                                                addProductToCart(
                                                    id,
                                                    name,
                                                    price,
                                                    offer,
                                                    newPrice,
                                                    category,
                                                    description
                                                )
                                            }
                                        >
                                            <AiOutlineShoppingCart className="icon" />
                                        </Button>
                                        <Button variant="success">
                                            {/* <Link to={`/product/${props.product.id}`} style={{color: 'white'}}>
                                                    <AiOutlineEye className="icon" />
                                                </Link> */}
                                            <Link
                                                to={`/product/${id}`}
                                                style={{ color: 'white' }}
                                            >
                                                <AiOutlineEye className="icon" />
                                            </Link>
                                        </Button>
                                    </Card.Body>
                                    <Card.Footer>
                                        <Card.Title>
                                            <Row
                                                style={{
                                                    justifyContent: 'center',
                                                    margin: '5px auto',
                                                }}
                                            >
                                                {name}
                                            </Row>
                                            {offer ? (
                                                <Row
                                                    style={{
                                                        justifyContent:
                                                            'center',
                                                    }}
                                                    className="product-price"
                                                >
                                                    <Col
                                                        sm={12}
                                                        lg={5}
                                                        style={{
                                                            color: 'rgb(255, 45, 120)',
                                                        }}
                                                    >
                                                        Sale: {newPrice}$
                                                    </Col>
                                                    <Col
                                                        sm={12}
                                                        lg={7}
                                                        style={{
                                                            textDecoration:
                                                                'line-through',
                                                            color: 'rgb(25, 45, 120)',
                                                        }}
                                                    >
                                                        Old Price: {price}$
                                                    </Col>
                                                </Row>
                                            ) : (
                                                <Row
                                                    style={{
                                                        justifyContent:
                                                            'center',
                                                        color: 'rgb(45, 180, 120)',
                                                    }}
                                                    className="product-price"
                                                >
                                                    Price: {price}$
                                                </Row>
                                            )}
                                        </Card.Title>
                                    </Card.Footer>
                                </Card>
                            </Col>
                        );
                    }
                    return null;
                })}
            </Row>
        </div>
    );
}

export default WishList;

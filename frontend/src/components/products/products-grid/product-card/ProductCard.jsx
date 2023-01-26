import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import {
    AiOutlineHeart,
    AiOutlineShoppingCart,
    AiOutlineEye,
} from 'react-icons/ai';
import { Link } from 'react-router-dom';

import './ProductCard.css';

function ProductCard(props) {
    // Set Cart Data to Local Storage
    const addProductToCart = () => {
        const productData = {
            id: props.product._id,
            name: props.product.name,
            price: props.product.offer
                ? props.product.newPrice
                : props.product.price,
            category: props.product.category,
            descritpion: props.product.description,
            type: 'cart',
        };
        sessionStorage.setItem(
            JSON.stringify({ id: props.product._id, name: 'cart' }),
            JSON.stringify(productData)
        );
    };

    // Set Wishlist Data to Local Storage
    const addProductToWishList = () => {
        const productData = {
            id: props.product._id,
            name: props.product.name,
            price: props.product.price,
            category: props.product.category,
            descritpion: props.product.description,
            offer: props.product.offer,
            newPrice: props.product.newPrice,
            image: props.product.image,
            type: 'wishlist',
        };
        sessionStorage.setItem(
            JSON.stringify({ id: props.product._id, name: 'wishlist' }),
            JSON.stringify(productData)
        );
    };

    return (
        <div className="product-card-container">
            <Card className="product-card">
                <Card.Body>
                    <img
                        src={require('../../../../assets/images/' +
                            props.product.image)}
                        alt=""
                    />
                    <Button
                        variant="success"
                        onClick={() => addProductToWishList()}
                    >
                        <AiOutlineHeart className="icon" />
                    </Button>
                    <Button
                        variant="success"
                        onClick={() => addProductToCart()}
                    >
                        <AiOutlineShoppingCart className="icon" />
                    </Button>
                    <Button variant="success">
                        {/* <Link to={`/product/${props.product.id}`} style={{color: 'white'}}>
                            <AiOutlineEye className="icon" />
                        </Link> */}
                        <Link
                            to={`/product/${props.product._id}`}
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
                            {props.product.name}
                        </Row>
                        {props.product.offer ? (
                            <Row
                                style={{ justifyContent: 'center' }}
                                className="product-price"
                            >
                                <Col
                                    sm={12}
                                    lg={5}
                                    style={{ color: 'rgb(255, 45, 120)' }}
                                >
                                    Sale: {props.product.newPrice}$
                                </Col>
                                <Col
                                    sm={12}
                                    lg={7}
                                    style={{
                                        textDecoration: 'line-through',
                                        color: 'rgb(25, 45, 120)',
                                    }}
                                >
                                    Old Price: {props.product.price}$
                                </Col>
                            </Row>
                        ) : (
                            <Row
                                style={{
                                    justifyContent: 'center',
                                    color: 'rgb(45, 180, 120)',
                                }}
                                className="product-price"
                            >
                                Price: {props.product.price}$
                            </Row>
                        )}
                    </Card.Title>
                </Card.Footer>
            </Card>
        </div>
    );
}

export default ProductCard;

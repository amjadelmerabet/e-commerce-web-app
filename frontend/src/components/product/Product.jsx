import React, { useEffect } from 'react';
import { Form, Stack, Carousel } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineShoppingCart, AiOutlineHeart } from 'react-icons/ai';

import { getProducts } from '../../actions/products';

import './Product.css';

// import data from "../datas/listproduits";

function ProductDetails(props) {
    // Set Data to Local Storage
    const addProductToCart = () => {
        const productData = {
            id: props.product.id,
            name: props.product.name,
            price: props.product.offer
                ? props.product.newPrice
                : props.product.price,
            category: props.product.category,
            descritpion: props.product.description,
            type: 'cart',
        };
        sessionStorage.setItem(
            JSON.stringify({ id: props.product.id, name: 'cart' }),
            JSON.stringify(productData)
        );
    };

    // Set Data to Local Storage
    const addProductToWishList = () => {
        const productData = {
            id: props.product.id,
            name: props.product.name,
            price: props.product.price,
            category: props.product.category,
            descritpion: props.product.description,
            offer: props.product.offer,
            newPrice: props.product.newPrice,
            type: 'wishlist',
        };
        sessionStorage.setItem(
            JSON.stringify({ id: props.product.id, name: 'wishlist' }),
            JSON.stringify(productData)
        );
    };

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    const products = useSelector((state) => state.ProductsReducer);

    return (
        <div className="product">
            <main className="mt-5 pt-4">
                <h1>{props.product.name}</h1>
                <div className="Container dark-grey-text mt-5">
                    <div className="row wow fadeIn">
                        <div className="col-md-6 mb-4">
                            <div className="product-image"></div>
                            {/* <img
								src={props.product.cover}
								className="img-fluid"
								alt={props.product.name}
							/> */}
                        </div>
                        <div className="col-md-6 mb-4">
                            <div className="product-description">
                                <div className="p-4">
                                    <Stack
                                        direction="horizontal"
                                        gap={2}
                                        className=" col-md-5 mx-auto"
                                    >
                                        <a href="https://reactjs.org">
                                            <span className="badge rounded-pill bg-primary mr-2">
                                                {props.product.category}
                                            </span>
                                        </a>
                                        <a href="https://reactjs.org">
                                            <span className="badge rounded-pill bg-danger mr-2">
                                                {/* {props.product.arrivage} */}
                                                New
                                            </span>
                                        </a>
                                        <a href="https://reactjs.org">
                                            <span className="badge rounded-pill bg-success mr-1">
                                                {/* {props.product.Stock} */}
                                                In Stock
                                            </span>
                                        </a>
                                    </Stack>
                                    <p className="lead pt-3">
                                        <h2> Description </h2>
                                        {/* <p>{props.product.description}</p> */}
                                        <p>
                                            Lorem ipsum dolor, sit amet
                                            consectetur adipisicing elit.
                                            Obcaecati, inventore saepe
                                            blanditiis adipisci neque
                                            distinctio, reiciendis, assumenda
                                            sequi illum laborum tenetur
                                            molestias repellendus aliquam sit.
                                        </p>
                                        <span className="mr-1">
                                            <del>
                                                {props.product.offer
                                                    ? props.product.price + '$'
                                                    : null}
                                            </del>
                                        </span>
                                        <span className="sale-price">
                                            {props.product.offer
                                                ? 'Sale ' +
                                                  props.product.newPrice +
                                                  '$'
                                                : props.product.price + '$'}
                                        </span>
                                    </p>
                                </div>
                                <Form>
                                    <div className="form-group">
                                        <label>Quantity</label>
                                        <input
                                            type="number"
                                            size="sm"
                                            min="0"
                                            maxLength="3"
                                        />
                                    </div>
                                    <button
                                        className="btn btn-md mx-auto heart-btn"
                                        type="button"
                                        onClick={() => addProductToWishList()}
                                    >
                                        <i className="fa-solid fa-cart-shopping"></i>
                                        <AiOutlineHeart size="24px" />
                                    </button>
                                    <button
                                        className="btn btn-md mx-auto cart-btn"
                                        type="button"
                                        onClick={() => addProductToCart()}
                                    >
                                        <i className="fa-solid fa-cart-shopping"></i>
                                        <AiOutlineShoppingCart size="24px" />
                                    </button>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                {/* {<div className="row d-flex justify-content-center wow fadeIn">
                    <div className="col-md-6 text-center">
                        <h4 className="my-4 h4">Information Supplementaire</h4>
                        <p>{props.product.information}</p>
                    </div>
                </div> */}
                <section className="product_list best_seller">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-12">
                                <div className="section_tittle text-center">
                                    <h3>
                                        {/* Best Sellers <span>shop</span> */}
                                        Related Products
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <Carousel>
                            {products
                                .filter(
                                    (pr) =>
                                        pr.category === props.product.category
                                )
                                .filter((pr) => pr.name !== props.product.name)
                                .map((product) => {
                                    return (
                                        <Carousel.Item>
                                            <div className="best_product_slider ">
                                                <div className="single_product_item">
                                                    <div className="related-product"></div>
                                                    {/* <img
													src={product.cover}
													className="img-fluid img-thumbnail"
													alt={product.name}
												/> */}
                                                </div>
                                            </div>
                                            <Carousel.Caption>
                                                <div className="single_product_text">
                                                    <h3>{product.name}</h3>
                                                    <div className="prices">
                                                        <h4 className="old-price">
                                                            <del>
                                                                {product.offer
                                                                    ? product.price
                                                                    : null}
                                                            </del>
                                                        </h4>
                                                        <h4 className="new-price">
                                                            {product.offer
                                                                ? product.newPrice
                                                                : product.price}
                                                            $
                                                        </h4>
                                                    </div>
                                                </div>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                    );
                                })}
                        </Carousel>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default ProductDetails;

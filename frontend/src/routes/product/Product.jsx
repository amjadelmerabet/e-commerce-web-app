import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import ProductDetails from '../../components/product/Product';

import { getProducts } from "../../actions/products";
// import Data from '../../db.json'

import './Product.css';


function Product() {

    const { _id } = useParams();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    const products = useSelector((state) => state.ProductsReducer)

    return (
        <div className="product">
            {
                products.filter(pr => pr._id === _id).map((product) => {
                    // if(product._id === _id) {
                        return (
                            <ProductDetails product={{id: product._id, name: product.name, category: product.category, price: product.price, offer: product.offer, newPrice: product.newPrice}} />
                            // <div className="product-details">
                            //     <h1>{product.name}</h1>
                            // </div>
                        )
                    // }
                    // return null
                })
            }
        </div>
    );
}

export default Product;

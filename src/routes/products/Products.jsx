import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";

import { getProducts } from "../../actions/products";
import Filter from '../../components/products/filter/Filter';
import ProductsGrid from '../../components/products/products-grid/ProductsGrid'

// import Data from '../../db.json';

import './Products.css';


function Products() {

    const { urlCategory } = useParams();

    const dispatch = useDispatch();

    // This function is used for getting all the products from the database
    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    const products = useSelector((state) => state.ProductsReducer)

    const [category, setCategory] = useState('');
    const [priceMin, setPriceMin] = useState(0);
    const [priceMax, setPriceMax] = useState(0);
    const [sortFromLowToHigh, setSortFromLowToHigh] = useState({sort: false, lowToHigh: null});
    const [offer, setOffer] = useState(false);

    return (
        <div className="products">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-md-4 col-lg-3 col-xl-2 filter-column">
                        <Filter data={{setCategory: setCategory.bind(), setPriceMin: setPriceMin.bind(), setPriceMax: setPriceMax.bind(), urlCategory: urlCategory, offer: offer, setOffer: setOffer.bind()}}/>
                    </div>
                    <div className="col-12 col-md-8 col-lg-9 col-xl-10 products-column">
                        {/* <ProductsGrid data={{products: products, category: category, setCategory: setCategory.bind(), priceMin: priceMin, priceMax: priceMax, setPriceMin: setPriceMin.bind(), setPriceMax: setPriceMax.bind(), sortFromLowToHigh: sortFromLowToHigh, setSortFromLowToHigh: setSortFromLowToHigh.bind(), offer: offer, urlCategory: urlCategory}}/> */}
                        <ProductsGrid data={{products: products, category: category, setCategory: setCategory.bind(), priceMin: priceMin, priceMax: priceMax, setPriceMin: setPriceMin.bind(), setPriceMax: setPriceMax.bind(), sortFromLowToHigh: sortFromLowToHigh, setSortFromLowToHigh: setSortFromLowToHigh.bind(), offer: offer, urlCategory: urlCategory}}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Products;

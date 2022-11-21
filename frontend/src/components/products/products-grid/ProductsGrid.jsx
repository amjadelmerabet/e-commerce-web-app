import React, { useState } from "react";
import { Col } from "react-bootstrap";
// import { IoMdArrowForward, IoMdArrowBack } from "react-icons/io";
    
import ProductCard from "./product-card/ProductCard";
import ProductsSearchBar from "./products-search-bar/ProductsSearchBar";
import SortedProducts from "./SortedProducts/SortedProducts";
import NonSortedProducts from "./NonSortedProducts/NonSortedProducts";

// import Data from '../../../db.json';

import './ProductsGrid.css';

function ProductsGrid(props) {

    // const [page, setPage] = useState(0);

    const [productName, setProductName] = useState('');

    // const nextPage = (page) => {
    //     if(page >= props.data.products.length - 8) return
    //     setPage(page + 8)
    // }
    
    // const previousPage = (page) => {
    //     if(page === 0) return
    //     setPage(page - 8)
    // }

    const filterByCategory = (product, category) => {
        if(category === '') {
            return (
                filterByPrice(product, props.data.priceMin, props.data.priceMax)
            )
        }
        else {
            if(product.category === category) {
                return (
                    filterByPrice(product, props.data.priceMin, props.data.priceMax)
                )
            }
        }
    }

    const filterByPrice = (product, priceMin, priceMax) => {
        if(priceMin === 0 && priceMax === 0) {
            return (
                <Col key={product._id} sm={12} md={6} lg={3}>
                    <ProductCard product={product} />
                </Col>
            )
        }
        else {
            if(priceMin !== 0 && priceMax === 0) {
                if(product.price >= priceMin) {
                    return (
                        <Col key={product._id} sm={12} md={6} lg={3}>
                            <ProductCard product={product} />
                        </Col>
                    )
                }
            }
            else {
                if(priceMin === 0 && priceMax !== 0) {
                    if(product.price <= priceMax) {
                        return (
                            <Col key={product._id} sm={12} md={6} lg={3}>
                                <ProductCard product={product} />
                            </Col>
                        )
                    }
                }
                else {
                    if(product.price >= priceMin && product.price <= priceMax) {
                        return (
                            <Col key={product._id} sm={12} md={6} lg={3}>
                                <ProductCard product={product} />
                            </Col>
                        )
                    }
                }
            }
        }

    }

    return (
        <div className="products-grid">
            <ProductsSearchBar 
                data={
                    {
                        category: props.data.category,
                        setCategory: props.data.setCategory.bind(),
                        setProductName: setProductName.bind(),
                        priceMin: props.data.priceMin,
                        priceMax: props.data.priceMax,
                        setPriceMin: props.data.setPriceMin.bind(),
                        setPriceMax: props.data.setPriceMax.bind(),
                        sortFromLowToHigh: props.data.sortFromLowToHigh,
                        setSortFromLowToHigh: props.data.setSortFromLowToHigh.bind(),
                        urlCategory: props.data.urlCategory
                    }
                }
            />
                {/* {
                    Data.body.products.productsList.products.map((product) => {
                        if(productName === '') {
                            return (
                                filterByCategory(product, props.data.category)
                            )
                        }
                        else {
                            if(product.name.toLowerCase().includes(productName.toLowerCase())) {
                                return (
                                    filterByCategory(product, props.data.category)
                                )
                            }
                        }
                        return null
                    })
                } */}
                {
                    !props.data.sortFromLowToHigh.sort ? <NonSortedProducts data={{ products: props.data.products, category: props.data.category, productName: productName, filterByCategory: filterByCategory.bind() }}/> : <SortedProducts data={{ products: props.data.products, category: props.data.category, productName: productName, filterByCategory: filterByCategory.bind(), sortFromLowToHigh: props.data.sortFromLowToHigh }} />
                }
                {/* <div className="pages-buttons">
                    <Button onClick={() => previousPage(page)}>
                        <IoMdArrowBack className="icon" />
                    </Button>
                    <Button onClick={() => nextPage(page)}>
                        <IoMdArrowForward className="icon" />
                    </Button>
                </div> */}
        </div>
    );
}

export default ProductsGrid;
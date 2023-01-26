import React, { useState, useEffect, useRef } from 'react';
import { Row } from 'react-bootstrap';

function NonSortedProducts(props) {
    const recordsPerPage = 8;

    const listRef = useRef(null);

    const [data, setData] = useState([]);

    const [load, setLoad] = useState(true);

    const [index, setIndex] = useState(0);

    useEffect(() => {
        setData(props.data.products.slice(0, recordsPerPage));
        setIndex(1);
    }, [props.data.products]);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (listRef && listRef.current) {
                if (
                    window.scrollY + window.innerHeight >=
                    listRef.current.offsetTop + listRef.current.offsetHeight
                ) {
                    console.log('You reached the bottom of the page');
                    setLoad(true);
                }
            }
        });
    }, [listRef]);

    useEffect(() => {
        const getProducts = () => {
            const pages = Math.floor(
                props.data.products.length / recordsPerPage
            );
            const maxIndex =
                props.data.products.length % recordsPerPage === 0
                    ? pages
                    : pages + 1;

            if (load && index <= maxIndex) {
                const start = recordsPerPage * index;
                const end = start + recordsPerPage;
                setData(data.concat(props.data.products.slice(start, end)));
                setIndex(index + 1);
            }
        };
        getProducts();
        setLoad(false);
    }, [load, index, data, props.data.products]);

    return (
        <Row className="non-sorted-products" ref={listRef}>
            {
                // props.data.products.slice(props.data.page, props.data.page + 8).map((product) => {
                props.data.productName === ''
                    ? data.map((product) =>
                          props.data.filterByCategory(
                              product,
                              props.data.category
                          )
                      )
                    : props.data.products.map((product) =>
                          product.name
                              .toLowerCase()
                              .includes(props.data.productName.toLowerCase())
                              ? props.data.filterByCategory(
                                    product,
                                    props.data.category
                                )
                              : null
                      )
                // data.map((product) => {
                //     if(props.data.productName === '') {
                //         return (
                //             props.data.filterByCategory(product, props.data.category)
                //         )
                //     }
                //     else {
                //         if(product.name.toLowerCase().includes(props.data.productName.toLowerCase())) {
                //             return (
                //                 props.data.filterByCategory(product, props.data.category)
                //             )
                //         }
                //     }
                //     return null
                // })
            }
        </Row>
    );
}

export default NonSortedProducts;

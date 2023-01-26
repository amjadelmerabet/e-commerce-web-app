import React from 'react';
import {
    Navbar,
    Container,
    Breadcrumb,
    Form,
    FormControl,
    Row,
    Col,
    FormSelect,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './ProductsSearchBar.css';

function ProductsSearchBar(props) {
    const searchForProduct = (e) => {
        props.data.setProductName(e.target.value);
    };

    return (
        <div className="products-search-bar">
            <Navbar>
                <Container fluid className="mx-0 mx-md-4">
                    <Row className="mx-0">
                        <Col sm={12} md={4}>
                            <Breadcrumb>
                                <Breadcrumb.Item
                                    data-title="All Products"
                                    onClick={() => {
                                        props.data.setCategory('');
                                        props.data.setPriceMin(0);
                                        props.data.setPriceMax(0);
                                    }}
                                >
                                    {/* All Products */}
                                    {props.data.urlCategory === 'all' ? (
                                        <div>All Products</div>
                                    ) : (
                                        <Link to="/products/all">
                                            All Products
                                        </Link>
                                    )}
                                </Breadcrumb.Item>
                                {props.data.category !== '' ? (
                                    <Breadcrumb.Item active>
                                        {props.data.category}
                                    </Breadcrumb.Item>
                                ) : null}
                                {props.data.priceMin !== 0 ||
                                props.data.priceMax !== 0 ? (
                                    <Breadcrumb.Item active>
                                        {props.data.priceMax !== 0 &&
                                        props.data.priceMin === 0
                                            ? `less than ${props.data.priceMax}$`
                                            : props.data.priceMin !== 0 &&
                                              props.data.priceMax === 0
                                            ? `more than ${props.data.priceMin}$`
                                            : props.data.priceMin !== 0 &&
                                              props.data.priceMax !== 0
                                            ? `between ${props.data.priceMin}$ and ${props.data.priceMax}$`
                                            : ''}
                                    </Breadcrumb.Item>
                                ) : null}
                            </Breadcrumb>
                        </Col>
                        <Col sm={12} md={4}>
                            <Form className="d-flex">
                                <FormControl
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                    onChange={(e) => searchForProduct(e)}
                                />
                            </Form>
                        </Col>
                        <Col sm={12} md={4} className="sort-button">
                            <FormSelect
                                name="sort-by"
                                className="me-2"
                                onChange={(e) => {
                                    if (e.target.value === '0')
                                        props.data.setSortFromLowToHigh({
                                            sort: false,
                                            lowToHigh: null,
                                        });
                                    if (e.target.value === '1')
                                        props.data.setSortFromLowToHigh({
                                            sort: true,
                                            lowToHigh: 1,
                                        });
                                    if (e.target.value === '2')
                                        props.data.setSortFromLowToHigh({
                                            sort: true,
                                            lowToHigh: 2,
                                        });
                                }}
                            >
                                <option value="0">Sort By</option>
                                <option value="1">Price: Low to High</option>
                                <option value="2">Price: High to Low</option>
                            </FormSelect>
                        </Col>
                    </Row>
                </Container>
            </Navbar>
        </div>
    );
}

export default ProductsSearchBar;

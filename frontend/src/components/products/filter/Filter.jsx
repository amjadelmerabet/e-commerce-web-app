import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';

import FilterAccordion from './filter-accordion/FilterAccordion';

import Data from '../../../db.json';

import './Filter.css';

function Filter(props) {
    if (props.data.urlCategory !== 'all') {
        props.data.setCategory(props.data.urlCategory);
    }

    return (
        <div className="filter">
            <div className="filter-header">
                <Row className="p-3">
                    <Col xs={6} md={6} lg={6}>
                        <h5>Filters</h5>
                    </Col>
                    <Col
                        xs={6}
                        md={6}
                        lg={6}
                        className="d-flex justify-content-end"
                    >
                        <Button
                            size="sm"
                            className="filter-button px-3 border-0"
                            onClick={() => {
                                props.data.setCategory('');
                                props.data.setPriceMin(0);
                                props.data.setPriceMax(0);
                            }}
                        >
                            Clear
                        </Button>
                    </Col>
                </Row>
            </div>
            <div className="filter-body">
                {Data.body.products.filterTab.filters.map((filter) => {
                    if (
                        props.data.urlCategory !== 'all' &&
                        filter.label !== 'Categories'
                    ) {
                        return (
                            <FilterAccordion
                                key={filter.id}
                                filter={filter}
                                data={{
                                    setCategory: props.data.setCategory.bind(),
                                    setPriceMin: props.data.setPriceMin.bind(),
                                    setPriceMax: props.data.setPriceMax.bind(),
                                }}
                            />
                        );
                    }
                    if (props.data.urlCategory === 'all') {
                        return (
                            <FilterAccordion
                                key={filter.id}
                                filter={filter}
                                data={{
                                    setCategory: props.data.setCategory.bind(),
                                    setPriceMin: props.data.setPriceMin.bind(),
                                    setPriceMax: props.data.setPriceMax.bind(),
                                }}
                            />
                        );
                    }
                    return null;
                })}
            </div>
        </div>
    );
}

export default Filter;

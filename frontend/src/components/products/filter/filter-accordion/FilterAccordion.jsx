import React from 'react';
import { Accordion, ListGroup } from 'react-bootstrap';

import FilterSubAccordion from './filter-sub-accordion/FilterSubAccordion';

import './FilterAccordion.css';

function FilterAccordion(props) {
    return (
        <div className="filter-accordion">
            <Accordion defaultActiveKey="1" flush>
                <Accordion.Item eventKey={props.filter.id}>
                    <Accordion.Header>{props.filter.label}</Accordion.Header>
                    <Accordion.Body>
                        <ListGroup className="filter-accordion-list">
                            {props.filter.elements.options.map((option) => {
                                if (!props.filter.elements.withSubcategories) {
                                    if (props.filter.label !== 'Prices') {
                                        return (
                                            <ListGroup.Item
                                                key={option.id}
                                                action
                                            >
                                                {option.label}
                                            </ListGroup.Item>
                                        );
                                    } else {
                                        return (
                                            <ListGroup.Item
                                                key={option.id}
                                                onClick={() => {
                                                    props.data.setPriceMin(
                                                        option.min
                                                    );
                                                    props.data.setPriceMax(
                                                        option.max
                                                    );
                                                }}
                                                action
                                            >
                                                {option.label}
                                            </ListGroup.Item>
                                        );
                                    }
                                } else {
                                    return (
                                        <ListGroup key={option.id}>
                                            <ListGroup.Item>
                                                <FilterSubAccordion
                                                    option={option}
                                                    data={{
                                                        setCategory:
                                                            props.data.setCategory.bind(),
                                                    }}
                                                />
                                            </ListGroup.Item>
                                        </ListGroup>
                                    );
                                }
                            })}
                        </ListGroup>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
}

export default FilterAccordion;

import React from 'react';
import { Accordion, ListGroup } from 'react-bootstrap';

import './FilterSubAccordion.css';

function FilterSubAccordion(props) {
    return (
        <div className="filter-sub-accordion">
            <Accordion key={props.option.id} flush>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>{props.option.label}</Accordion.Header>
                    <Accordion.Body>
                        <ListGroup className="filter-sub-accordion-list">
                            {props.option.subcategories.map((subcategory) => {
                                return (
                                    <ListGroup.Item
                                        key={subcategory.id}
                                        action
                                        onClick={() =>
                                            props.data.setCategory(
                                                subcategory.label
                                            )
                                        }
                                    >
                                        {subcategory.label}
                                    </ListGroup.Item>
                                );
                            })}
                        </ListGroup>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
}

export default FilterSubAccordion;

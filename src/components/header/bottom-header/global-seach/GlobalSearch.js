import React from 'react'
import { Form, Row, Col, FormControl, FormSelect, Button } from 'react-bootstrap';
import { AiOutlineSearch } from 'react-icons/ai'

import './GlobalSearch.css'

function GLobalSearch(props) {
    return (
        <Form className="d-flex global-search">
            <Row>
                <Col sm={12} md={4}>
                    <FormSelect id="categories" name="categories">
                        <option>
                            { props.data.select.default }
                        </option>
                        {
                            props.data.select.options.map((option) => {
                                return (
                                    <option key={option.id}>
                                        {option.label}
                                    </option>
                                )
                            })
                        }
                    </FormSelect>
                </Col>
                <Col sm={12} md={8} style={{display: 'flex'}}>
                    <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    />
                    <Button>
                        <AiOutlineSearch className="search-icon" />
                    </Button>
                </Col>
            </Row>
        </Form>
    )
}

export default GLobalSearch;
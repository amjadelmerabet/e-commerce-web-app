import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from 'react-bootstrap';
import { FaPhone, FaShopify, FaShuttleVan, FaImages } from 'react-icons/fa';

import img1 from "../../assets/images/livraison.jpg";

import "./Services.css";
class Services extends Component {
    render() {
        return (
            <div className="all-services">
                <div className="service">
                    <img src={img1} alt="" />
                    <div className="services">
                        <h2>Make an item return in 5 steps </h2>
                        <div className="child-name">
                            <Link to="/refund" className="input-child">
                                Return Policy
                            </Link>
                        </div>
                    </div>
                </div>

                <Container fluid>
                    <div className="remboursement">
                        <Row>
                            <Col>
                                <div className="hamada">
                                    <FaPhone />
                                    {/* <i className="fas fa-phone f"></i> */}
                                    <div className="e">
                                        <b>ENJOY A SIMPLE RETURN AND REFUND POLICY</b>
                                        <p>
                                            Choose the number of items to return and the
                                            reason for the return + additional information
                                            to facilitate the procedure
                                        </p>
                                    </div>
                                </div>
                            </Col>
                            <Col>
                                <div className="hamada">
                                    <FaShopify />
                                    {/* <i className="fab fa-shopify f"></i> */}
                                    <div className="e">
                                        <b>REPORT THE ARTICLE OR REQUEST ITS RECOVERY</b>
                                        <p>
                                            Drop off the complete package at one of our
                                            approved pick-up points or arrange for our
                                            agents to collect it from you.
                                        </p>
                                    </div>
                                </div>
                            </Col>
                            <Col>
                                <div className="hamada">
                                    <FaShuttleVan />
                                    {/* <i className="fas fa-shuttle-van f"></i> */}
                                    <div className="e">
                                        <b>PREPARE THE ARTICLE</b>
                                        <p>
                                            Return the item to its original packaging,
                                            including any accessories (coupons, gadgets,
                                            etc.) that were delivered with it.
                                        </p>
                                    </div>
                                </div>
                            </Col>
                            <Col>
                                <div className="hamada">
                                    <FaImages />
                                    {/* <i className="fas fa-images f"></i> */}
                                    <div className="e">
                                        <b>REPAYMENT</b>
                                        <p>
                                            Once your package has been re-routed, we will
                                            carry out a final check after which your refund
                                            could be made using your preferred refund
                                            method.
                                        </p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        );
    }
}

export default Services;

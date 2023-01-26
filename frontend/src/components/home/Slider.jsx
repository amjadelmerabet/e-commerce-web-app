import React from 'react';
import { Row, Col } from 'react-bootstrap';

import GAF from './img/GAF.webp';
import FS from './img/FS.gif';
import SV from './img/SV.webp';

import './Slider.css';

function Slider() {
    return (
        <div className="hero">
            <Row>
                <Col>
                    <div
                        id="carouselExampleCaptions"
                        className="carousel slide"
                        data-bs-ride="carousel"
                    >
                        <div className="carousel-indicators">
                            <button
                                type="button"
                                data-bs-target="#carouselExampleCaptions"
                                data-bs-slide-to="0"
                                className="active"
                                aria-current="true"
                                aria-label="Slide 1"
                            ></button>
                            <button
                                type="button"
                                data-bs-target="#carouselExampleCaptions"
                                data-bs-slide-to="1"
                                aria-label="Slide 2"
                            ></button>
                            <button
                                type="button"
                                data-bs-target="#carouselExampleCaptions"
                                data-bs-slide-to="2"
                                aria-label="Slide 3"
                            ></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img
                                    src={GAF}
                                    alt="..."
                                    className="d-block w-100"
                                />
                            </div>
                            <div className="carousel-item">
                                <img
                                    src={FS}
                                    alt="Background"
                                    className="d-block w-100"
                                    height="550px"
                                />
                            </div>
                            <div className="carousel-item">
                                <img
                                    src={SV}
                                    alt="Background"
                                    className="d-block w-100"
                                    height="550px"
                                />
                            </div>
                        </div>
                        <button
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide="prev"
                        >
                            <span
                                className="carousel-control-prev-icon"
                                aria-hidden="true"
                            ></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide="next"
                        >
                            <span
                                className="carousel-control-next-icon"
                                aria-hidden="true"
                            ></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default Slider;

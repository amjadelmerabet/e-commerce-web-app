import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

// import GAF from "./img/GAF.webp";
import IN from './img/IN.jpg';
import MO from './img/MO.jpg';
import VI from './img/VI.jpg';
import CH from './img/CH.jpg';
import AC from './img/AC.jpg';

import './Catg.css';

function Catg() {
    return (
        <div className="catalog">
            <div className="d-flex justify-content-center align-items-center mt-5">
                <button className="btnn">OUR CATEGORIES</button>
            </div>
            <div className="d-flex justify-content-center mt-3">
                <span className="text text-center">
                    Finding Best Products Now in Your Fingertips
                </span>
            </div>
            <div className="text-center">
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="item">
                                <h4 className="py-2">IT</h4>
                                <img
                                    src={IN}
                                    alt="camera"
                                    className="img-fluid"
                                />
                                <div className="overlay d-flex align-items-center justify-content-center">
                                    <Link to="/products/IT">
                                        <Button variant={'success'}>
                                            View Details
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="item">
                                <h4 className="py-2">Clothes</h4>
                                <img
                                    src={VI}
                                    alt="camera"
                                    className="img-fluid"
                                />
                                <div className="overlay d-flex align-items-center justify-content-center">
                                    <Link to="/products/Pants">
                                        <Button variant={'success'}>
                                            View Details
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="item">
                                <h4 className="py-2">Mobile</h4>
                                <img
                                    src={MO}
                                    alt="camera"
                                    className="img-fluid"
                                />
                                <div className="overlay d-flex align-items-center justify-content-center">
                                    <Link to="/products/Mobile">
                                        <Button variant={'success'}>
                                            View Details
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="item">
                                <h4 className="py-2">Shoes</h4>
                                <img
                                    src={CH}
                                    alt="camera"
                                    className="img-fluid"
                                />
                                <div className="overlay d-flex align-items-center justify-content-center">
                                    <Link to="/products/Shoes">
                                        <Button variant={'success'}>
                                            View Details
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="item">
                                <h4 className="py-2">Accessories</h4>
                                <img
                                    src={AC}
                                    alt="camera"
                                    className="img-fluid"
                                />
                                <div className="overlay d-flex align-items-center justify-content-center">
                                    <Link to="/products/Accessories">
                                        <Button variant={'success'}>
                                            View Details
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="item">
                                <h4 className="py-2">Beauty</h4>
                                <img
                                    src={VI}
                                    alt="camera"
                                    className="img-fluid"
                                />
                                <div className="overlay d-flex align-items-center justify-content-center">
                                    <Link to="/products/Beauty">
                                        <Button variant={'success'}>
                                            View Details
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Catg;

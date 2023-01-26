import React, { Component } from 'react';
import img1 from '../../assets/images/blog-06.jpg';
import img2 from '../../assets/images/blog-02.jpg';
import img3 from '../../assets/images/shopping-online.jpg';
import img4 from '../../assets/images/shopping-in-the-city.jpg';

import './About.css';
export class About extends Component {
    render() {
        return (
            <div className="about">
                <h1>About us</h1>
                <div className="bg">
                    <div className="hed">
                        <div className="bl">
                            <img src={img1} alt="" />
                        </div>
                    </div>
                    <div className="section">
                        <div className="about-section">
                            <div
                                id="carouselExampleControls"
                                className="carousel slide"
                                data-bs-ride="carousel"
                            >
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img
                                            src={img2}
                                            className="d-block w-100"
                                            alt="..."
                                        />
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            src={img3}
                                            className="d-block w-100"
                                            alt="..."
                                        />
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            src={img4}
                                            className="d-block w-100"
                                            alt="..."
                                        />
                                    </div>
                                </div>
                                <button
                                    className="carousel-control-prev"
                                    type="button"
                                    data-bs-target="#carouselExampleControls"
                                    data-bs-slide="prev"
                                >
                                    <span
                                        className="carousel-control-prev-icon"
                                        aria-hidden="true"
                                    ></span>
                                    <span className="visually-hidden">
                                        Previous
                                    </span>
                                </button>
                                <button
                                    className="carousel-control-next"
                                    type="button"
                                    data-bs-target="#carouselExampleControls"
                                    data-bs-slide="next"
                                >
                                    <span
                                        className="carousel-control-next-icon"
                                        aria-hidden="true"
                                    ></span>
                                    <span className="visually-hidden">
                                        Next
                                    </span>
                                </button>
                            </div>
                            <div className="paragrpheblog">
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur
                                    adipisicing elit. Provident dolorum earum,
                                    aliquid consectetur facere adipisci tempore
                                    voluptates harum fugiat ad, repellendus
                                    numquam, quasi sit dolores ut saepe quia
                                    libero quibusdam.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex-w flex-sb-m p-t-18 comments">
                        <span className="flex-w flex-m stext-111 cl2 p-r-30 m-tb-10">
                            <span>
                                <span className="cl4">By Admin</span>
                                <span className="cl12 m-l-4 m-r-6">|</span>
                            </span>

                            <span>
                                StreetStyle, Fashion, Couple
                                <span className="cl12 m-l-4 m-r-6">|</span>
                            </span>

                            <span>8 Comments</span>
                        </span>

                        <a
                            href="blog-detail.html"
                            className="stext-101 cl2 hov-cl1 trans-04 m-tb-10"
                        >
                            Continue Reading
                            <i className="fa fa-long-arrow-right m-l-9"></i>
                        </a>
                    </div>
                    <div className="container d-flex align-items-center justify-content-center position-relative flex-wrap slide-down">
                        <div className="card d-flex position-relative flex-column">
                            <div className="imgContainer">
                                <img
                                    src="https://images.pexels.com/photos/1456268/pexels-photo-1456268.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                    alt=""
                                />
                            </div>
                            <div className="content">
                                <h2>Card One</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Suspendisse eget velit
                                    tristique, sollicitudin leo viverra,
                                    suscipit neque. Aliquam ut facilisis urna,
                                    in pretium nibh. Morbi in leo in eros
                                    commodo volutpat ac sed dolor.
                                </p>
                            </div>
                        </div>
                        <div className="card d-flex position-relative flex-column">
                            <div className="imgContainer">
                                <img
                                    src="https://images.pexels.com/photos/196667/pexels-photo-196667.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                    alt=""
                                />
                            </div>
                            <div className="content">
                                <h2>Card Two</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Suspendisse eget velit
                                    tristique, sollicitudin leo viverra,
                                    suscipit neque. Aliquam ut facilisis urna,
                                    in pretium nibh. Morbi in leo in eros
                                    commodo volutpat ac sed dolor.
                                </p>
                            </div>
                        </div>
                        <div className="card d-flex position-relative flex-column">
                            <div className="imgContainer">
                                <img
                                    src="https://images.pexels.com/photos/847483/pexels-photo-847483.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                    alt=""
                                />
                            </div>
                            <div className="content">
                                <h2>Card Three</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Suspendisse eget velit
                                    tristique, sollicitudin leo viverra,
                                    suscipit neque. Aliquam ut facilisis urna,
                                    in pretium nibh. Morbi in leo in eros
                                    commodo volutpat ac sed dolor.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="d-flex justify-content-center align-items-center mt-5">
                            <button className="btn btn-dark">
                                OUR CATEGORIES
                            </button>
                        </div>
                        <div className="d-flex justify-content-center mt-3">
                            <span className="text text-center">
                                Finding Best Products Now
                                <br /> in Your Fingertips
                            </span>
                        </div>
                        <div className="row mt-2 g-4">
                            <div className="col-md-3">
                                <div className="card-box p-2">
                                    <div className="d-flex justify-content-between align-items-center p-2">
                                        <div className="flex-column lh-1 imagename">
                                            <span>Mobile</span>{' '}
                                            <span>Phones</span>
                                        </div>
                                        <div>
                                            <img
                                                src="https://i.imgur.com/b9zkoz0.jpg"
                                                height="100"
                                                width="100"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="card-box p-2">
                                    <div className="d-flex justify-content-between align-items-center p-2">
                                        <div className="flex-column lh-1 imagename">
                                            <span>Head</span>{' '}
                                            <span>Phones</span>
                                        </div>
                                        <div>
                                            <img
                                                src="https://i.imgur.com/SHWASPG.png"
                                                height="100"
                                                width="100"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="card-box p-2">
                                    <div className="d-flex justify-content-between align-items-center p-2">
                                        <div className="flex-column lh-1 imagename">
                                            <span>Smart</span>{' '}
                                            <span>Watches</span>
                                        </div>
                                        <div>
                                            <img
                                                src=" https://i.imgur.com/Ya0OXCv.png"
                                                height="100"
                                                width="100"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="card-box p-2">
                                    <div className="d-flex justify-content-between align-items-center p-2">
                                        <div className="flex-column lh-1 imagename">
                                            <span>Air</span>{' '}
                                            <span>Purifiers</span>
                                        </div>
                                        <div>
                                            <img
                                                src="https://i.imgur.com/2gvGwbh.png"
                                                height="100"
                                                width="100"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="card-box p-2tr5">
                                    <div className="d-flex justify-content-between align-items-center p-2">
                                        <div className="flex-column lh-1 imagename">
                                            <span>Vacuum</span>
                                            <span>Cleaners</span>
                                        </div>
                                        <div>
                                            <img
                                                src="https://i.imgur.com/UMQJpSG.png"
                                                height="100"
                                                width="100"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="card-box p-2">
                                    <div className="d-flex justify-content-between align-items-center p-2">
                                        <div className="flex-column lh-1 imagename">
                                            <span>Washing</span>
                                            <span>Machines</span>
                                        </div>
                                        <div>
                                            <img
                                                src="https://i.imgur.com/e9CyhXR.png"
                                                height="100"
                                                width="100"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="card-box p-2">
                                    <div className="d-flex justify-content-between align-items-center p-2">
                                        <div className="flex-column lh-1 imagename">
                                            <span>Smart</span>
                                            <span>Televisions</span>
                                        </div>
                                        <div>
                                            <img
                                                src=" https://i.imgur.com/Zq8VigZ.png"
                                                height="100"
                                                width="100"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="card-box p-2">
                                    <div className="d-flex justify-content-between align-items-center p-2">
                                        <div className="flex-column lh-1 imagename">
                                            <span>Laptops</span>
                                        </div>
                                        <div>
                                            <img
                                                src="https://i.imgur.com/6pK5oZl.jpg"
                                                height="100"
                                                width="100"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;

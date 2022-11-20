import React from "react";

import './Descri.css'

function Descri() {
    return (
        <div className="container descri">
            <div id="demo" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="carousel-caption">
                            <p>
                                If Shai Reznik's TDD videos don't convince you
                                to add automated testing your code, I don't know
                                what will.This was the very best explanation of
                                frameworks for brginners that I've ever seen.
                            </p>
                            <img src="https://i.imgur.com/lE89Aey.jpg"alt="" />
                            <div id="image-caption">Nick Doe</div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="carousel-caption">
                            <p>
                                If Shai Reznik's TDD videos don't convince you
                                to add automated testing your code, I don't know
                                what will.This was the very best explanation of
                                frameworks for brginners that I've ever seen.
                            </p>
                            <img
                                src="https://i.imgur.com/QptVdsp.jpg"alt=""
                                className="img-fluid"
                            />
                            <div id="image-caption">Cromption Greves</div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="carousel-caption">
                            <p>
                                If Shai Reznik's TDD videos don't convince you
                                to add automated testing your code, I don't know
                                what will.This was the very best explanation of
                                frameworks for brginners that I've ever seen.
                            </p>
                            <img
                                src="https://i.imgur.com/jQWThIn.jpg"alt=""
                                className="img-fluid"
                            />
                            <div id="image-caption">Harry Mon</div>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="https://reactjs.org" data-slide="prev">
                    <i className="fas fa-arrow-left"></i>
                </a>
                <a className="carousel-control-next" href="https://reactjs.org" data-slide="next">
                    <i className="fas fa-arrow-right"></i>
                </a>
            </div>
        </div>
    );
}

export default Descri;

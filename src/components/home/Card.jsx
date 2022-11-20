import React from "react";
import { Link } from 'react-router-dom';

import "./Card.css";


function Card() {
    return (
        <div className="card-component">
            <div className="carde_container">
                <div className="carde" data-label="Who we are ?">
                    <div className="carde-container">
                        <br></br> <br></br>
                        <p>
                            {/* Nous sommes une société spécialisée dans le
                            développement informatique et la création de
                            logiciels spécifiques, dédiés à votre métier. Notre
                            entreprise a fondé son savoir-faire et sa réputation
                            dans des analyses fonctionnelles et techniques
                            rigoureuses, basées sur votre besoin et la
                            compréhension de votre process métier. Une équipe de
                            programmeurs confirmés, maîtrisant parfaitement les
                            différents langages de programmation, s’engage à
                            développer dans les règles de l’art votre
                            application. À votre écoute, un chef de projet
                            expérimenté vous accompagne en suivant, étape par
                            étape, une méthodologie de management de projet
                            éprouvée. */}
                            We are a company specializing in IT development and
                            the creation of specific software, dedicated to your
                            business. Our company has based its know-how and its
                            reputation on rigorous functional and technical
                            analyses, based on your needs and the understanding
                            of your business process. A team of confirmed
                            programmers, perfectly mastering the different
                            programming languages, is committed to developing
                            your application according to the rules of the art.
                            Listening to you, an experienced project manager
                            supports you by following, step by step, a proven
                            project management methodology.
                        </p>
                        <div className="containerS">
                            <button className="hover-buttonS">
                                <Link to="/about">Read More</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;

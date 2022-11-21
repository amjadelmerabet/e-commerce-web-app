import React, { Component } from "react";
import { FaExchangeAlt, FaClock, FaCogs } from "react-icons/fa";

import img1 from "../../assets/images/livraison-eco.jpg";
import img2 from "../../assets/images/return.jpg";

import "./Refund.css";

class Refund extends Component {
    constructor() {
        super();
        this.state = {
            categorie: "Return Steps",
        };
        // this.updateState=this.updateState.bind();
    }
    updateState(catg) {
        this.setState({
            categorie: catg,
        });
    }

    questions = [
        {
            id: 0,
            categorie: "Return Steps",
            question: "How to return a product  ?",
            repons: "You can request the return of your items from the Your orders page or by contacting our customer service on the contact section",
        },
        {
            id: 1,
            categorie: "Delais",
            question: "Can I return my item after 7 days?",
            repons: "You cannot return your item after 7 days of delivery. However, if your item is faulty, it may be covered by a warranty. For more information, please see our warranty policy.",
        },
        {
            id: 2,
            categorie: "Delais",
            question: "What is the deadline for returns to ? ?",
            repons: "Any product sold at Jumia and not used by the customer can be returned free of charge within 7 days from the date of delivery. After this time, we unfortunately no longer accept returns.For Official Stores products, this return period is 15 days.",
        },
        {
            id: 3,
            categorie: "Problem",
            question:
                "My article has been retrieved, but I haven't heard from you since, what should I do?",
            repons: "We apologize for this inconvenience. Do not hesitate to contact us for more information.",
        },
        {
            id: 4,
            categorie: "Return Steps",
            question: "What are the conditions for returning a product?",
            repons: "First of all, you must ensure at the time of delivery that the product received is intact and corresponds to the description of the item at the time of placing the order. Any instance of non-compliance must be escalated within the prescribed timeframes When you return your item, it must be returned to Jumia in the same condition as when it was delivered to you, and with all its accessories. All products returned under change of mind reason must be returned with their original packaging. Televisions, phones, computers and tablets must be sealed if returned as a change of mind.Please note that once unsealed, teletelephones, computers and tablets which prove to be defective are covered by an after-sales service provision. For more information, please contact our customer service on this link.",
        },
        {
            id: 5,
            categorie: "Return Steps",
            question:
                "What is the return policy for products shipped from overseas  ?",
            repons: "Returns for Jumia Global products follow the same conditions as returns for products sold by Moroccan sellers.",
        },
        {
            id: 6,
            categorie: "Problem",
            question:
                "If my product is not eligible for a refund, how will I be notified?",
            repons: "If your return is not validated, Jumia will contact you to explain the reason for the refusal and your product will be sent back to you.Note that we will try several times to deliver your product to you. If we are unable to deliver to you, your product will be available to you in our warehouses.",
        },
    ];
    render() {
        return (
            <div className="shopping">
                <div className="parint-shopping">
                    <div className="homeimg">
                        <img src={img1} alt="" />
                        <p className="titlehome">RETURNS AND REFUNDS</p>
                    </div>
                </div>
                <h2>Return</h2>
                <div className="sectionparint">
                    <div className="image">
                        <img src={img2} alt="" />
                    </div>
                    <div className="productparagraphe">
                        <span className="souka">Returning an article</span>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Nisi, ducimus rem atque perferendis tempore
                            sequi veniam reprehenderit animi consectetur neque
                            ipsum quis, voluptate quos fugiat pariatur expedita,
                            deleniti ad eligendi? Lorem, ipsum dolor sit amet
                            consectetur adipisicing elit. Nisi, ducimus rem
                            atque perferendis tempore sequi veniam reprehenderit
                            animi consectetur neque ipsum quis, voluptate quos
                            fugiat pariatur expedita, deleniti ad
                            eligendi?Lorem, ipsum dolor sit amet consectetur
                            adipisicing elit. Nisi, ducimus rem atque
                            perferendis tempore sequi veniam reprehenderit animi
                            consectetur neque ipsum quis, voluptate quos fugiat
                            pariatur expedita, deleniti ad eligendi?
                        </p>
                    </div>
                </div>
                <h2>Q&A</h2>
                <div className="shoppingligne">
                    <div className="acordion">
                        <div
                            className="accordion accordion-flush"
                            id="accordionFlushExample"
                        >
                            {this.questions.map((question) => {
                                if (
                                    question.categorie === this.state.categorie
                                ) {
                                    return (
                                        <div
                                            className="accordion-item"
                                            key={question.id}
                                        >
                                            <h2
                                                className="accordion-header"
                                                id={
                                                    "flush-heading" +
                                                    question.id
                                                }
                                            >
                                                <button
                                                    className="accordion-button collapsed"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target={
                                                        "#flush-collapse" +
                                                        question.id
                                                    }
                                                    aria-expanded="false"
                                                    aria-controls="flush-collapse"
                                                >
                                                    {question.question}
                                                </button>
                                            </h2>
                                            <div
                                                id={
                                                    "flush-collapse" +
                                                    question.id
                                                }
                                                className="accordion-collapse collapse"
                                                aria-labelledby="flush-heading"
                                                data-bs-parent="#accordionFlushExample"
                                            >
                                                <div className="accordion-body">
                                                    {question.repons}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                }
                                return null;
                            })}
                        </div>
                    </div>
                    <div className="printlivraison">
                        <button
                            onClick={() => this.updateState("Return Steps")}
                        >
                            <div className="childe-power">
                                <FaExchangeAlt />
                                {/* <i class="fas fa-exchange-alt walid"></i> */}

                                <b className="iconparind">Return Steps</b>
                            </div>
                        </button>
                        <button onClick={() => this.updateState("Delais")}>
                            <div className="childe-power">
                                <FaClock />
                                {/* <i className="fas fa-clock walid"></i> */}
                                <b className="iconparind">Delais</b>
                            </div>
                        </button>
                        <button onClick={() => this.updateState("Problem")}>
                            <div className="childe-power">
                                <FaCogs />
                                {/* <i className="fas fa-cogs walid"></i> */}
                                <b className="iconparind">Problems</b>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Refund;

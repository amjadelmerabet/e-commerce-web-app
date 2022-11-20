import React from "react";
import { Link } from "react-router-dom";

import "./Contact.css";


function Contact() {
    return (
        <div className="contact">
            <div className="d-flex justify-content-center align-items-center mt-5">
                <Link to='/contact'>
                    <button className="btnn">Contact us</button>
                </Link>
            </div>
            <div className="d-flex justify-content-center mt-3">
                <span className="text text-center">
                    If you have any further questions,<br></br> please do not
                    hesitate to contact us.
                </span>
            </div>
            <div className="container mt-5">
                <div className="row g-2">
                    <div className="col-md-4">
                        <div className="card">
                            <img
                                src="https://i.imgur.com/xuGJbnU.png"
                                width="40"
                                alt=""
                            />
                            <h5>Address</h5>
                            <p>Av RUE MED 5 TETOUAN</p>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card">
                            <img
                                src="https://i.imgur.com/TNKflal.png"
                                width="40"
                                alt=""
                            />
                            <h5>Email</h5>
                            <p>contact@societe.com</p>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card">
                            <img
                                src="https://i.imgur.com/pZLFSO3.png"
                                width="40"
                                alt=""
                            />
                            <h5>Phone</h5>
                            <p>+212563098999</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;

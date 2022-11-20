import React, { useRef } from "react";

import emailjs from "@emailjs/browser";

import "./Contact.css";

function ContactForm() {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_2yj575g",
                "template_yrzpdpd",
                form.current,
                "_4DQFAirEr0XKzh8O"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    alert(" message envoyer");
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <div className="contact">
            <div className="container">
                <form ref={form} onSubmit={sendEmail}>
                    <div className="card shadow">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-12 col-md-6">
                                    <h3>Contact Form</h3>
                                    <hr />

                                    <div className="form-group">
                                        <label className="mb-1">
                                            Full Name
                                        </label>
                                        <input type="text" className="form-control" name="name" />
                                    </div>
                                    <div className="form-group">
                                        <label className="mb-1">
                                            Phone Number
                                        </label>
                                        <input type="text" className="form-control" name="phone" placeholder="+212 6 75 88 94 05" />
                                    </div>
                                    <div className="form-group">
                                        <label className="mb-1">
                                            Email Adrdress
                                        </label>
                                        <input type="text" className="form-control" name="email" placeholder="email@example.com" />
                                    </div>
                                    <div className="form-group">
                                        <label className="mb-1">Message</label>
                                        <textarea rows="3" className="form-control" placeholder="Type your message here ..." name="message"></textarea>
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-primary shadow w-100">
                                            Send Message
                                        </button>
                                    </div>
                                </div>

                                <div className="contact-info col-12 col-md-6 border-start">
                                    <h5 className="main-heading">
                                        Contact Information
                                    </h5>
									<hr />
                                    <div className="underline"> </div>
                                    <p>Address: Av RUE MED 5 TETOUAN</p>
                                    <p>Phone: +212563098999</p>
                                    <p>Email: contact@societe.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ContactForm;
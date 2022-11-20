import React from "react";
import { Nav } from "react-bootstrap";
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";
import './SocialMediaLinks.css';

function SocialMediaLinks(props) {
    return (
        <div className="social-media-links">
            {props.data.map(
                (link, index) => {
                    if(link.label === 'Facebook') {
                        return (
                            <Nav.Item key={index}>
                                <Nav.Link
                                    className="active"
                                    key={link.id}
                                    href={link.url}
                                >
                                    <BsFacebook size="20px" color="rgb(45, 120, 255)" />
                                </Nav.Link>
                            </Nav.Item>
                        );
                    }
                    if(link.label === 'Instagram') {
                        return (
                            <Nav.Item key={index}>
                                <Nav.Link
                                    className="active"
                                    key={link.id}
                                    href={link.url}
                                >
                                    <BsInstagram size="20px" color="rgb(200, 45, 145)" />
                                </Nav.Link>
                            </Nav.Item>
                        );
                    }
                    if(link.label === 'Twitter') {
                        return (
                            <Nav.Item key={index}>
                                <Nav.Link
                                    className="active"
                                    key={link.id}
                                    href={link.url}
                                >
                                    <BsTwitter size="20px" color="rgb(0, 180, 225)" />
                                </Nav.Link>
                            </Nav.Item>
                        );
                    }
                    if(link.label === 'Youtube') {
                        return (
                            <Nav.Item key={index}>
                                <Nav.Link
                                    className="active"
                                    key={link.id}
                                    href={link.url}
                                >
                                    <BsYoutube size="20px" color="rgb(245, 45, 45)" />
                                </Nav.Link>
                            </Nav.Item>
                        );
                    }
                    return (
                        <Nav.Item key={index}>
                            <Nav.Link
                                className="active"
                                key={link.id}
                                href={link.url}
                            >
                                {link.label}
                            </Nav.Link>
                        </Nav.Item>
                    );
                }

            )}
        </div>
    )
}

export default SocialMediaLinks;

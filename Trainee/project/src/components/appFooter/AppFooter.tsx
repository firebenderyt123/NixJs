import React from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { TiSocialLinkedin, TiSocialGithub } from "react-icons/ti";
// import Navigation from "./Navigation";
import Copyright from "./Copyright";
import "./appFooter.scss";

import Logo from "@images/Bootsy.svg";

const AppFooter = () => {
    return (
        <>
            <div className="section_footer bg-bg-1 text-color2 py-3 py-md-5">
                <div className="container">
                    <div className="mail_section">
                        <div className="row">
                            <div className="col-sm-6 col-lg-2">
                                <div className="footer-logo">
                                    <Link to="/">
                                        <Logo width="200" height="42" />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-2">
                                <div className="phones d-flex flex-column">
                                    <Link to="tel:0991234567">
                                        <FaPhoneAlt className="me-1" />
                                        (099) 123-45-67
                                    </Link>
                                    <Link to="tel:0971234567">
                                        <FaPhoneAlt className="me-1" />
                                        (097) 123-45-67
                                    </Link>
                                    <Link to="tel:0951234567">
                                        <FaPhoneAlt className="me-1" />
                                        (095) 123-45-67
                                    </Link>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-3">
                                <div className="mails d-flex flex-column">
                                    <Link to="mail:firebenderyt@gmail.com">
                                        <IoMailOutline className="me-1" />
                                        firebenderyt@gmail.com
                                    </Link>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-3">
                                <div className="social-icons d-flex justify-content-center gap-3">
                                    <Link
                                        to="https://www.linkedin.com/in/firebenderyt/"
                                        target="_blank"
                                        className="linkedin"
                                    >
                                        <TiSocialLinkedin />
                                    </Link>
                                    <Link
                                        to="https://github.com/firebenderyt123"
                                        target="_blank"
                                        className="github"
                                    >
                                        <TiSocialGithub />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-sm-2"></div>
                        </div>
                    </div>
                    <div className="footer_section_2">
                        <div className="row">
                            <div className="col-sm-4 col-lg-2">
                                <p className="dummy_text">
                                    {" "}
                                    ipsum dolor sit amet, consectetur ipsum
                                    dolor sit amet, consectetur ipsum dolor sit
                                    amet,
                                </p>
                            </div>
                            <div className="col-sm-4 col-lg-2">
                                <h2 className="shop_text">Address </h2>
                                <div className="image-icon">
                                    <img src="images/map-icon.png" />
                                    <span className="pet_text">
                                        No 40 Baria Sreet 15/2 NewYork City, NY,
                                        United States.
                                    </span>
                                </div>
                            </div>
                            <div className="col-sm-4 col-md-6 col-lg-3">
                                <h2 className="shop_text">Our Company </h2>
                                <div className="delivery_text">
                                    <ul>
                                        <li>Delivery</li>
                                        <li>Legal Notice</li>
                                        <li>About us</li>
                                        <li>Secure payment</li>
                                        <li>Contact us</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-3">
                                <h2 className="adderess_text">Products</h2>
                                <div className="delivery_text">
                                    <ul>
                                        <li>Prices drop</li>
                                        <li>New products</li>
                                        <li>Best sales</li>
                                        <li>Contact us</li>
                                        <li>Sitemap</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-2">
                                <h2 className="adderess_text">Newsletter</h2>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="enter_email"
                                        placeholder="Enter Your email"
                                        name="Name"
                                    />
                                </div>
                                <button className="subscribr_bt">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Copyright />
        </>
    );
};

export default AppFooter;

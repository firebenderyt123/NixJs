import React, { useState } from "react";
import Link from "next/link";
import { FaPhoneAlt, FaInfo } from "react-icons/fa";
import { IoMailOutline, IoLocationOutline } from "react-icons/io5";
import { TiSocialLinkedin, TiSocialGithub } from "react-icons/ti";
import { Copyright } from "@components/simple";

import Logo from "@images/Bootsy.svg";

const DropdownPhones = () => {
    return (
        <div className="phones dropdown">
            <button
                className="dropdown-toggle btn btn-primary"
                type="button"
                id="DropdownPhones"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                <FaPhoneAlt className="me-2" />
                (099) 123-45-67
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownPhones">
                <li>
                    <Link href="tel:0991234567" className="dropdown-item">
                        <FaPhoneAlt className="me-2" />
                        (099) 123-45-67
                    </Link>
                </li>
                <li>
                    <Link href="tel:0971234567" className="dropdown-item">
                        <FaPhoneAlt className="me-2" />
                        (097) 123-45-67
                    </Link>
                </li>
                <li>
                    <Link href="tel:0951234567" className="dropdown-item">
                        <FaPhoneAlt className="me-2" />
                        (095) 123-45-67
                    </Link>
                </li>
            </ul>
        </div>
    );
};

const DropdownEmails = () => {
    return (
        <div className="mails dropdown">
            <button
                className="dropdown-toggle btn btn-primary"
                type="button"
                id="DropdownPhones"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                <IoMailOutline className="me-2" />
                firebenderyt@gmail.com
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownPhones">
                <li>
                    <Link
                        href="mailto:firebenderyt@gmail.com"
                        className="dropdown-item"
                    >
                        <IoMailOutline className="me-2" />
                        firebenderyt@gmail.com
                    </Link>
                </li>
            </ul>
        </div>
    );
};

const Footer = () => {
    return (
        <>
            <div className="section_footer bg-bg-1 text-color2 py-3 py-md-5">
                <div className="container">
                    <div className="mail_section">
                        <div className="row">
                            <div className="col-sm-6 col-lg-3">
                                <div className="footer-logo">
                                    <Link href="/">
                                        <Logo width="200" height="42" />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-3">
                                <div className="d-flex gap-1">
                                    <FaInfo className="fs-4 text-blue" />
                                    <h4 className="m-0">Information</h4>
                                </div>
                                <DropdownPhones />
                                <DropdownEmails />
                            </div>
                            <div className="col-sm-6 col-lg-3">
                                <div className="d-flex gap-1">
                                    <IoLocationOutline className="fs-4 text-red" />
                                    <h4 className="m-0">Address </h4>
                                </div>
                                <div className="d-flex flex-column pt-1 px-3">
                                    <span className="py-1">
                                        No 40 Baria Sreet 15/2
                                    </span>
                                    <span className="py-1">
                                        New York City, NY, United States
                                    </span>
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
                    <div className="footer_section_2">
                        <div className="row mt-4">
                            <div className="col-12">
                                <div className="social-icons d-flex justify-content-center gap-3">
                                    <Link
                                        href="https://www.linkedin.com/in/firebenderyt/"
                                        target="_blank"
                                        className="linkedin"
                                    >
                                        <TiSocialLinkedin />
                                    </Link>
                                    <Link
                                        href="https://github.com/firebenderyt123"
                                        target="_blank"
                                        className="github"
                                    >
                                        <TiSocialGithub />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Copyright />
        </>
    );
};

export default Footer;

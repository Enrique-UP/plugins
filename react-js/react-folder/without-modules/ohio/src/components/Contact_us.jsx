import React, {useState} from "react";
import {Helmet} from "react-helmet";
import { NavLink } from "react-router-dom";
import Banner_line from "./include/Banner_line";
import Left_sidebar1 from "./include/Left_sidebar1";
import Fixed_area from "./include/Fixed_area";
import Bottom_counter from "./include/Bottom_counter";
const Contact_us = () => {
    const [data, setData] = useState({
        fname: "",
        lname: "",
        email: "",
        phone: "",
        message: "",
    });
    const InputEvent = (event) => {
        const {name, value} = event.target;
        setData((preVal) => {
            return {
                ...preVal,
                [name] : value,
            }
        })
    }
    const formSubmit = (e) => {
        e.preventDefault();
        alert(`Name is ${data.fname} ${data.lname}, Email address is ${data.email}, Number is ${data.phone}, Query is ${data.message}`);
    }
    return (
        <>
            <Helmet>
                <title>Contact Us | OHIO</title>
            </Helmet>
            <Banner_line pagename="My OHIO" tagline="Contact Us" />
            <section className="main_container">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-4 col-md-4 col-lg-3">
                            <Left_sidebar1 />
                        </div>{/*--cols--*/}
                        <div className="col-xs-12 col-sm-8 col-md-8 col-lg-9">
                            <div className="right_area">
                                <Fixed_area />
                                <ol className="breadcrumb">
                                    <li><NavLink to="/">Home</NavLink></li>
                                    <li>Contact Us</li>
                                </ol>
                                <h1 className="heading">Contact Us</h1>
                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-8 col-lg-9">
                                        <div className="contact_icons" data-aos="fade-up">
                                            <a href="tel:+91-000-000-0000" target="_blank" className="fa fa-phone"></a>
                                            <a href="mailto:demo@example.com" target="_blank" className="fa fa-envelope"></a>
                                        </div>{/*--contact_icons--*/}
                                        <p className="heading_p">Send us an Email</p>
                                        <form className="form_area contact_us" onSubmit={formSubmit} data-aos="fade-up">
                                            <div className="row">
                                                <div className="col-xs-12 col-sm-6 col-md-12 col-lg-6">
                                                    <input type="text" placeholder="First Name" className="form-control input_area" name="fname" value={data.fname} onChange={InputEvent} required />
                                                </div>{/*--cols--*/}
                                                <div className="col-xs-12 col-sm-6 col-md-12 col-lg-6">
                                                    <input type="text" placeholder="Last Name" className="form-control input_area"name="lname" value={data.lname} onChange={InputEvent} required />
                                                </div>{/*--cols--*/}
                                                <div className="col-xs-12 col-sm-6 col-md-12 col-lg-6">
                                                    <input type="text" placeholder="Your Email Address" className="form-control input_area"
                                                    name="email" value={data.email} onChange={InputEvent} required />
                                                </div>{/*--cols--*/}
                                                <div className="col-xs-12 col-sm-6 col-md-12 col-lg-6">
                                                    <input type="text" placeholder="Your Telephone Number" className="form-control input_area"
                                                    name="phone" value={data.phone} onChange={InputEvent} required />
                                                </div>{/*--cols--*/}
                                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                                    <textarea placeholder="Enter a message..." className="form-control text_area" name="message" value={data.message} onChange={InputEvent} required></textarea>
                                                </div>{/*--cols--*/}
                                            </div>{/*--row--*/}
                                            <button className="c_btn">Submit</button>
                                        </form>
                                        <p className="heading_p">Contact Information</p>
                                        <p>Lorem ipsum dolor sit amit lorem ipsum dolor sit amit lorem ipsum dolor sit amit lorem ipsum dolor sit amit lorem ipsum dolor sit amit. Lorem ipsum dolor sit amit lorem ipsum dolor sit amit lorem ipsum dolor sit amit lorem ipsum dolor sit amit.</p>
                                        <p><strong>Commonly Sought Contact Details</strong></p>
                                        <div className="main_table_area">
                                            <ul className="table_area head">
                                                <li>Department</li>
                                                <li>Contact Number</li>
                                                <li>Email Address</li>
                                            </ul>
                                        <ul className="table_area field">
                                            <li>Fees Office</li>
                                            <li><a href="tel:+91-000-000-0000" target="_blank">+91-000-000-0000</a></li>
                                            <li><a href="mailto:demo@example.com" target="_blank">demo@example.com</a></li>
                                        </ul>
                                        <ul className="table_area field">
                                            <li>Student Records and Examinations</li>
                                            <li><a href="tel:+91-000-000-0000" target="_blank">+91-000-000-0000</a></li>
                                            <li><a href="mailto:demo@example.com" target="_blank">demo@example.com</a></li>
                                        </ul>
                                        <ul className="table_area field">
                                            <li>Undergraduate Admissions</li>
                                            <li><a href="tel:+91-000-000-0000" target="_blank">+91-000-000-0000</a></li>
                                            <li><a href="mailto:demo@example.com" target="_blank">demo@example.com</a></li>
                                        </ul>
                                        <ul className="table_area field">
                                            <li>Graduate Studies</li>
                                            <li><a href="tel:+91-000-000-0000" target="_blank">+91-000-000-0000</a></li>
                                            <li><a href="mailto:demo@example.com" target="_blank">demo@example.com</a></li>
                                        </ul>
                                        <ul className="table_area field">
                                            <li>International Office</li>
                                            <li><a href="tel:+91-000-000-0000" target="_blank">+91-000-000-0000</a></li>
                                            <li><a href="mailto:demo@example.com" target="_blank">demo@example.com</a></li>
                                        </ul>
                                        <ul className="table_area field">
                                            <li>Marketing and Communications Queries</li>
                                            <li><a href="tel:+91-000-000-0000" target="_blank">+91-000-000-0000</a></li>
                                            <li><a href="mailto:demo@example.com" target="_blank">demo@example.com</a></li>
                                        </ul>
                                    </div>{/*--main_table_area--*/}
                                    <Bottom_counter />
                                </div>{/*--cols--*/}
                                <div className="col-xs-12 col-sm-12 col-md-4 col-lg-3" data-aos="fade-up">
                                    <a className="follow_area youtube" target="_blank" href="https://www.youtube.com/">
                                        <i className="fa fa-play"></i>
                                        <span>Subscribe to our Youtube Channel</span>
                                    </a>
                                    <a className="follow_area twitter" target="_blank" href="https://twitter.com/">
                                        <i>#</i>
                                        <span>Follow us on Twitter</span>
                                    </a>
                                    <a className="follow_area facebook" target="_blank" href="https://facebook.com/">
                                        <i className="fa fa-facebook"></i>
                                        <span>Follow us on Facebook</span>
                                    </a>
                                </div>{/*--cols--*/}
                            </div>{/*--row--*/}
                        </div>{/*--right_area--*/}
                    </div>{/*--cols--*/}
                </div>{/*--row--*/}
            </div>{/*--container--*/}
        </section>{/*--main_container--*/}
        </>
    )
}
export default Contact_us;
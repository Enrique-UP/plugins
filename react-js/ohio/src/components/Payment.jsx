import React from "react";
import {Helmet} from "react-helmet";
import { NavLink } from "react-router-dom";
import Banner_line from "./include/Banner_line";
import Left_sidebar from "./include/Left_sidebar";
import Right_sidebar from "./include/Right_sidebar";
import Bottom_counter from "./include/Bottom_counter";
const Payment = () => {
    return (
        <>
            <Helmet>
                <title>Payment | OHIO</title>
            </Helmet>
            <Banner_line pagename="About Us" tagline="Online Payment" />
            <section className="main_container res_margin">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div className="right_area for_right_sidebar_padding">
                                <Left_sidebar />
                                <div className="middle_area">
                                    <ol className="breadcrumb">
                                        <li><NavLink to="/">Home</NavLink></li>
                                        <li><NavLink to="/about">About Us</NavLink></li>
                                        <li>Online Payment</li>
                                    </ol>
                                    <h1 className="heading">Online Payment</h1>
                                    <p className="heading_p">Select Payment Option</p>
                                    <div className="paynow_area" data-aos="fade-up">
                                        <span className="head">First Data</span>
                                        <a className="c_btn">Pay Now <i className="fa fa-long-arrow-right"></i></a>
                                    </div>{/*--paynow_area--*/}
                                    <Bottom_counter />               
                                </div>{/*--middle_area--*/}
                                <Right_sidebar />
                            </div>{/*--right_area--*/}
                        </div>{/*--cols--*/}
                    </div>{/*--row--*/}
                </div>{/*--container--*/}
            </section>{/*--main_container--*/}
        </>
    )
}
export default Payment;
import React from "react";
import {Helmet} from "react-helmet";
import { NavLink } from "react-router-dom";
import Banner_line from "./include/Banner_line";
import Left_sidebar from "./include/Left_sidebar";
import Right_sidebar from "./include/Right_sidebar";
import Bottom_counter from "./include/Bottom_counter";
import Accreditation_img from "../assets/images/accreditation.jpg";
const Accreditation = () => {
    return (
        <>
            <Helmet>
                <title>Accreditation | OHIO</title>
            </Helmet>
            <Banner_line pagename="About Us" tagline="OHIO – Accreditation" />
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
                                        <li>OHIO – Accreditation</li>
                                    </ol>
                                    <h1 className="heading">Accreditation</h1>
                                    <img src={Accreditation_img} className="fw" data-aos="fade-up" />
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
export default Accreditation;
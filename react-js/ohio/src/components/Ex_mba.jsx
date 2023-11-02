import React from "react";
import {Helmet} from "react-helmet";
import {NavLink} from "react-router-dom";
import Banner_line from "./include/Banner_line";
import Left_sidebar from "./include/Left_sidebar";
import Right_sidebar from "./include/Right_sidebar";
import Bottom_counter from "./include/Bottom_counter";
import Course from "./include/Course";
import Programs_fixed_links from "./include/Programs_fixed_links";
const Ex_mba = () => {
    return (
        <>
            <Helmet>
                <title>Ex-MBA | OHIO</title>
            </Helmet>
            <Banner_line pagename="Programs" tagline="OHIO Ex-MBA" />
            <Programs_fixed_links about="About" why="Why OHIO University?" requirement="Admissions Requirements" tution="Tuition of Interactive" enrolling="Before Enrolling" />
            <section className="main_container res_margin">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div className="right_area for_right_sidebar_padding">
                                <Left_sidebar />
                                <div className="middle_area">
                                    <div className="row">
                                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ol className="breadcrumb">
                                                <li><NavLink to="/">Home</NavLink></li>
                                                <li><NavLink to="/programs">Programs</NavLink></li>
                                                <li>OHIO Ex-MBA</li>
                                            </ol>
                                        </div>{/*--cols--*/}
                                    </div>{/*--row--*/}
                                    <Course code="OHIO0003" course="Ex-MBA" />
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
export default Ex_mba;
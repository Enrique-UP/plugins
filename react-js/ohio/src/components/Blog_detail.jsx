import React from "react";
import {Helmet} from "react-helmet";
import {NavLink} from "react-router-dom";
import img from "../assets/images/blog.jpg";
import Banner_line from "./include/Banner_line";
import Left_sidebar1 from "./include/Left_sidebar1";
import Fixed_area from "./include/Fixed_area";

const Blog_detail = () => {
    return (
        <>
            <Helmet>
                <title>Blog Detail | OHIO</title>
            </Helmet>
            <Banner_line pagename="My OHIO" tagline="Blog Detail" />
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
                                    <li><NavLink to="/blogs">Blogs</NavLink></li>
                                    <li>Blog Detail</li>
                                </ol>
                                <h1 className="heading">Blog Detail</h1>
                                <p className="heading_p">Lorem ipsum dolor sit amit lorem ipsum dolor</p>
                                <img src={img} className="event_detail" />
                                <p>Lorem ipsum dolor sit amit lorem ipsum dolor sit amit. Lorem ipsum dolor sit amit lorem ipsum dolor sit amit. Lorem ipsum dolor sit amit lorem ipsum dolor sit amit. Lorem ipsum dolor sit amit lorem ipsum dolor sit amit. Lorem ipsum dolor sit amit lorem ipsum dolor sit amit. Lorem ipsum dolor sit amit lorem ipsum dolor sit amit. Lorem ipsum dolor sit amit lorem ipsum dolor sit amit. Lorem ipsum dolor sit amit lorem ipsum dolor sit amit.</p>
                                <p>Lorem ipsum dolor sit amit lorem ipsum dolor sit amit. Lorem ipsum dolor sit amit lorem ipsum dolor sit amit. Lorem ipsum dolor sit amit lorem ipsum dolor sit amit. Lorem ipsum dolor sit amit lorem ipsum dolor sit amit. Lorem ipsum dolor sit amit lorem ipsum dolor sit amit. Lorem ipsum dolor sit amit lorem ipsum dolor sit amit. Lorem ipsum dolor sit amit lorem ipsum dolor sit amit. Lorem ipsum dolor sit amit lorem ipsum dolor sit amit.</p>
                                <p className="head"><strong>Course Outline</strong></p>
                                <p>Lorem ipsum dolor sit amit lorem ipsum dolor sit amit lorem ipsum dolor sit amit lorem ipsum dolor sit amit lorem ipsum dolor sit amit lorem ipsum dolor sit amit lorem ipsum dolor sit amit. Lorem ipsum dolor sit amit lorem ipsum dolor sit amit lorem ipsum dolor sit amit lorem ipsum dolor sit amit lorem ipsum dolor sit amit lorem ipsum dolor sit amit.</p>
                                <p><strong>Module Content:</strong></p>
                                <ul className="unorder_list">
                                    <li>Lorem ipsum dolor sit amit lorem ipsum dolor sit amit lorem ipsum dolor sit amit lorem ipsum dolor sit amit. Lorem ipsum dolor sit amit lorem ipsum dolor sit amit lorem ipsum dolor sit amit lorem ipsum dolor sit amit.</li>
                                    <li>Lorem ipsum dolor sit amit lorem ipsum dolor sit amit lorem ipsum dolor sit amit lorem ipsum dolor sit amit. Lorem ipsum dolor sit amit lorem ipsum dolor sit amit lorem ipsum dolor sit amit lorem ipsum dolor sit amit.</li>
                                    <li>Lorem ipsum dolor sit amit lorem ipsum dolor sit amit lorem ipsum dolor sit amit lorem ipsum dolor sit amit.</li>
                                    <li>Lorem ipsum dolor sit amit lorem ipsum dolor sit amit lorem ipsum dolor sit amit lorem ipsum dolor sit amit.</li>
                                    <li>Lorem ipsum dolor sit amit lorem ipsum dolor sit amit lorem ipsum dolor sit amit lorem ipsum dolor sit amit.</li>
                                    <li>Lorem ipsum dolor sit amit lorem ipsum dolor sit amit lorem ipsum dolor sit amit lorem ipsum dolor sit amit.</li>
                                </ul>
                                <p>Lorem ipsum dolor sit amit lorem ipsum dolor sit amit. Lorem ipsum dolor sit amit lorem ipsum dolor sit amit. Lorem ipsum dolor sit amit lorem ipsum dolor sit amit. Lorem ipsum dolor sit amit lorem ipsum dolor sit amit. Lorem ipsum dolor sit amit lorem ipsum dolor sit amit. Lorem ipsum dolor sit amit lorem ipsum dolor sit amit. Lorem ipsum dolor sit amit lorem ipsum dolor sit amit. Lorem ipsum dolor sit amit lorem ipsum dolor sit amit.</p>
                                <p>Lorem ipsum dolor sit amit lorem ipsum dolor sit amit. Lorem ipsum dolor sit amit lorem ipsum dolor sit amit. Lorem ipsum dolor sit amit lorem ipsum dolor sit amit. Lorem ipsum dolor sit amit lorem ipsum dolor sit amit. Lorem ipsum dolor sit amit lorem ipsum dolor sit amit. Lorem ipsum dolor sit amit lorem ipsum dolor sit amit. Lorem ipsum dolor sit amit lorem ipsum dolor sit amit. Lorem ipsum dolor sit amit lorem ipsum dolor sit amit.</p>
                                <p>Lorem ipsum dolor sit amit lorem ipsum dolor sit amit. Lorem ipsum dolor sit amit lorem ipsum dolor sit amit. Lorem ipsum dolor sit amit lorem ipsum dolor sit amit. Lorem ipsum dolor sit amit lorem ipsum dolor sit amit. Lorem ipsum dolor sit amit lorem ipsum dolor sit amit. Lorem ipsum dolor sit amit lorem ipsum dolor sit amit. Lorem ipsum dolor sit amit lorem ipsum dolor sit amit. Lorem ipsum dolor sit amit lorem ipsum dolor sit amit.</p>
                                <p>Lorem ipsum dolor sit amit lorem ipsum dolor sit amit. Lorem ipsum dolor sit amit lorem ipsum dolor sit amit. Lorem ipsum dolor sit amit lorem ipsum dolor sit amit. Lorem ipsum dolor sit amit lorem ipsum dolor sit amit. Lorem ipsum dolor sit amit lorem ipsum dolor sit amit. Lorem ipsum dolor sit amit lorem ipsum dolor sit amit. Lorem ipsum dolor sit amit lorem ipsum dolor sit amit. Lorem ipsum dolor sit amit lorem ipsum dolor sit amit.</p>
                                <p>Lorem ipsum dolor sit amit lorem ipsum dolor sit amit. Lorem ipsum dolor sit amit lorem ipsum dolor sit amit. Lorem ipsum dolor sit amit lorem ipsum dolor sit amit. Lorem ipsum dolor sit amit lorem ipsum dolor sit amit. Lorem ipsum dolor sit amit lorem ipsum dolor sit amit. Lorem ipsum dolor sit amit lorem ipsum dolor sit amit. Lorem ipsum dolor sit amit lorem ipsum dolor sit amit. Lorem ipsum dolor sit amit lorem ipsum dolor sit amit.</p>
                                <p>Lorem ipsum dolor sit amit lorem ipsum dolor sit amit. Lorem ipsum dolor sit amit lorem ipsum dolor sit amit. Lorem ipsum dolor sit amit lorem ipsum dolor sit amit. Lorem ipsum dolor sit amit lorem ipsum dolor sit amit. Lorem ipsum dolor sit amit lorem ipsum dolor sit amit. Lorem ipsum dolor sit amit lorem ipsum dolor sit amit. Lorem ipsum dolor sit amit lorem ipsum dolor sit amit. Lorem ipsum dolor sit amit lorem ipsum dolor sit amit.</p>
                        </div>{/*--right_area--*/}
                    </div>{/*--cols--*/}
                </div>{/*--row--*/}
            </div>{/*--container--*/}
        </section>{/*--main_container--*/}
        </>
    )
}
export default Blog_detail;
import React from "react";
import {Helmet} from "react-helmet";
import { NavLink } from "react-router-dom";
import Banner_line from "./include/Banner_line";
import Left_sidebar from "./include/Left_sidebar";
import Right_sidebar from "./include/Right_sidebar";
import Bottom_counter from "./include/Bottom_counter";
const Tution_fees = () => {
    return (
        <>
            <Helmet>
                <title>Tution Fees | OHIO</title>
            </Helmet>
            <Banner_line pagename="Students" tagline="Tution and Fees" />
            <section className="main_container res_margin">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div className="right_area for_right_sidebar_padding">
                                <Left_sidebar />
                                <div className="middle_area">
                                    <ol className="breadcrumb">
                                        <li><NavLink to="/">Home</NavLink></li>
                                        <li><a href="#">Students</a></li>
                                        <li>Tution and Fees</li>
                                    </ol>
                                    <h1 className="heading">Tution and Fees</h1>
                                    <p>Lorem ipsum dolor sit amet. Aut nihil assumenda et omnis nesciunt qui numquam consequatur. Hic veniam quae et molestiae nulla sit fuga dolor ut laboriosam aperiam ea fuga deserunt sed vero numquam veniam nulla.</p>
                                    <p>33 delectus perferendis rem quas laudantium non quia distinctio aut dolorem porro. Ut omnis harum hic obcaecati eveniet et amet ducimus. Ea possimus repellat non eius possimus in excepturi laboriosam et quia ullam 33 omnis vitae. Eum dolor aspernatur est minus unde id animi aliquam ex velit itaque cum rerum repudiandae.</p>
                                    <div className="table_area_part six_part">
                                        <ul className="table_area head">
                                            <li><span>Course</span></li>
                                            <li><span>Registration</span></li>
                                            <li><span>1st Installment</span></li>
                                            <li><span>2nd Installment</span></li>
                                            <li><span>3rd Installment</span></li>
                                            <li><span>Total</span></li>
                                        </ul>
                                        <ul className="table_area">
                                            <li><span>PhD</span></li>
                                            <li><span>$ 1000</span></li>
                                            <li><span>$ 3000</span></li>
                                            <li><span>$ 3000</span></li>
                                            <li><span>$ 3000</span></li>
                                            <li><span>$ 10000</span></li>      
                                        </ul>
                                        <ul className="table_area">
                                            <li><span>MBA</span></li>
                                            <li><span>$ 1000</span></li>
                                            <li><span>$ 2500</span></li>
                                            <li><span>$ 2500</span></li>
                                            <li><span>$ 2500</span></li>
                                            <li><span>$ 8500</span></li>      
                                        </ul>
                                        <ul className="table_area">
                                            <li><span>EMBA</span></li>
                                            <li><span>$ 1000</span></li>
                                            <li><span>$ 1500</span></li>
                                            <li><span>$ 1500</span></li>
                                            <li><span>$ 1500</span></li>
                                            <li><span>$ 5500</span></li>       
                                        </ul>
                                        <ul className="table_area">
                                            <li><span>MS CS</span></li>
                                            <li><span>$ 1000</span></li>
                                            <li><span>$ 2500</span></li>
                                            <li><span>$ 2500</span></li>
                                            <li><span>$ 2500</span></li>
                                            <li><span>$ 8500</span></li>       
                                        </ul>
                                        <ul className="table_area">
                                            <li><span>MPH</span></li>
                                            <li><span>$ 1000</span></li>
                                            <li><span>$ 2500</span></li>
                                            <li><span>$ 2500</span></li>
                                            <li><span>$ 2500</span></li>
                                            <li><span>$ 8500</span></li>       
                                        </ul>
                                        <ul className="table_area">
                                            <li><span>MPA</span></li>
                                            <li><span>$ 1000</span></li>
                                            <li><span>$ 2500</span></li>
                                            <li><span>$ 2500</span></li>
                                            <li><span>$ 2500</span></li>
                                            <li><span>$ 8500</span></li>       
                                        </ul>
                                    </div>{/*--table_area_part--*/}
                                    <p>Id nihil accusantium est beatae totam a suscipit consequatur et facere vitae aut praesentium sapiente. Ut aperiam voluptatem At vero autem aut omnis quae rem aliquid deserunt? Eos explicabo necessitatibus id consectetur magnam nam sint consequatur est natus praesentium ad rerum esse eum odit unde. Est unde vero non tempore perspiciatis et placeat veniam sit omnis minima ut illum dolores.</p>
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
export default Tution_fees;
import React from "react";
import {Helmet} from "react-helmet";
import { NavLink } from "react-router-dom";
import Banner_line from "./include/Banner_line";
import Left_sidebar from "./include/Left_sidebar";
import Right_sidebar from "./include/Right_sidebar";
import Bottom_counter from "./include/Bottom_counter";
const Why_ohio = () => {
    return (
        <>
            <Helmet>
                <title>Why OHIO | OHIO</title>
            </Helmet>
            <Banner_line pagename="About Us" tagline="Why OHIO" />
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
                                        <li>Why OHIO</li>
                                    </ol>
                                    <h1 className="heading">Why OHIO</h1>
                                    <p>Lorem ipsum dolor sit amet. Aut nihil assumenda et omnis nesciunt qui numquam consequatur. Hic veniam quae et molestiae nulla sit fuga dolor ut laboriosam aperiam ea fuga deserunt sed vero numquam veniam nulla.</p>
                                    <p>33 delectus perferendis rem quas laudantium non quia distinctio aut dolorem porro. Ut omnis harum hic obcaecati eveniet et amet ducimus. Ea possimus repellat non eius possimus in excepturi laboriosam et quia ullam 33 omnis vitae. Eum dolor aspernatur est minus unde id animi aliquam ex velit itaque cum rerum repudiandae.</p>
                                    <p className="heading_p">Lorem ipsum dolor sit amet</p>
                                    <p>Id nihil accusantium est beatae totam a suscipit consequatur et facere vitae aut praesentium sapiente. Ut aperiam voluptatem At vero autem aut omnis quae rem aliquid deserunt? Eos explicabo necessitatibus id consectetur magnam nam sint consequatur est natus praesentium ad rerum esse eum odit unde. Est unde vero non tempore perspiciatis et placeat veniam sit omnis minima ut illum dolores.</p>
                                    <p><strong>Lorem ipsum dolor sit amet</strong></p>
                                    <ul className="unorder_list">
                                        <li>Eum dolor aspernatur est minus unde id animi aliquam ex velit itaque cum rerum repudiandae.</li>
                                        <li>Eum dolor aspernatur est minus unde id animi aliquam ex velit itaque cum rerum repudiandae.</li>
                                        <li>Eum dolor aspernatur est minus unde id animi aliquam ex velit itaque cum rerum repudiandae.</li>
                                        <li>Eum dolor aspernatur est minus unde id animi aliquam ex velit itaque cum rerum repudiandae.</li>
                                        <li>Eum dolor aspernatur est minus unde id animi aliquam ex velit itaque cum rerum repudiandae.</li>
                                    </ul>
                                    <p className="heading_p">Lorem ipsum dolor sit amet</p>
                                    <p><strong>D nihil accusantium est beatae totam a suscipit consequatur.</strong></p>
                                    <p>Lorem ipsum dolor sit amet. Aut nihil assumenda et omnis nesciunt qui numquam consequatur. Hic veniam quae et molestiae nulla sit fuga dolor ut laboriosam aperiam ea fuga deserunt sed vero numquam veniam nulla.</p>
                                    <p>33 delectus perferendis rem quas laudantium non quia distinctio aut dolorem porro. Ut omnis harum hic obcaecati eveniet et amet ducimus. Ea possimus repellat non eius possimus in excepturi laboriosam et quia ullam 33 omnis vitae. Eum dolor aspernatur est minus unde id animi aliquam ex velit itaque cum rerum repudiandae.</p>
                                    <ul className="unorder_list">
                                        <li>Eum dolor aspernatur est minus unde id animi aliquam ex velit itaque cum rerum repudiandae.</li>
                                        <li>Eum dolor aspernatur est minus unde id animi aliquam ex velit itaque cum rerum repudiandae.</li>
                                        <li>Eum dolor aspernatur est minus unde id animi aliquam ex velit itaque cum rerum repudiandae.</li>
                                        <li>Eum dolor aspernatur est minus unde id animi aliquam ex velit itaque cum rerum repudiandae.</li>
                                        <li>Eum dolor aspernatur est minus unde id animi aliquam ex velit itaque cum rerum repudiandae.</li>
                                    </ul>
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
export default Why_ohio;
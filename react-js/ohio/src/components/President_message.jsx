import React from "react";
import {Helmet} from "react-helmet";
import { NavLink } from "react-router-dom";
import Banner_line from "./include/Banner_line";
import Left_sidebar from "./include/Left_sidebar";
import Right_sidebar from "./include/Right_sidebar";
import Bottom_counter from "./include/Bottom_counter";

const President_message = () => {
    return (
        <>
            <Helmet>
                <title>President's Message | OHIO</title>
            </Helmet>
            <Banner_line pagename="About Us" tagline="OHIO – President's Message" />
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
                                        <li>OHIO – President's Message</li>
                                    </ol>
                                    <h1 className="heading">President's Message</h1>
                                    <p><strong>D nihil accusantium est beatae totam a suscipit consequatur.</strong></p>
                                    <p>Lorem ipsum dolor sit amet. Aut nihil assumenda et omnis nesciunt qui numquam consequatur. Hic veniam quae et molestiae nulla sit fuga dolor ut laboriosam aperiam ea fuga deserunt sed vero numquam veniam nulla.</p>
                                    <p>33 delectus perferendis rem quas laudantium non quia distinctio aut dolorem porro. Ut omnis harum hic obcaecati eveniet et amet ducimus. Ea possimus repellat non eius possimus in excepturi laboriosam et quia ullam 33 omnis vitae. Eum dolor aspernatur est minus unde id animi aliquam ex velit itaque cum rerum repudiandae.</p>
                                    <ul className="unorder_list">
                                        <li>Eum dolor aspernatur est minus unde id animi aliquam ex velit itaque cum rerum repudiandae.</li>
                                        <li>Eum dolor aspernatur est minus unde id animi aliquam ex velit itaque cum rerum repudiandae.</li>
                                        <li>Eum dolor aspernatur est minus unde id animi aliquam ex velit itaque cum rerum repudiandae.</li>
                                        <li>Eum dolor aspernatur est minus unde id animi aliquam ex velit itaque cum rerum repudiandae.</li>
                                        <li>Eum dolor aspernatur est minus unde id animi aliquam ex velit itaque cum rerum repudiandae.</li>
                                        <li>Eum dolor aspernatur est minus unde id animi aliquam ex velit itaque cum rerum repudiandae.</li>
                                        <li>Eum dolor aspernatur est minus unde id animi aliquam ex velit itaque cum rerum repudiandae.</li>
                                        <li>Eum dolor aspernatur est minus unde id animi aliquam ex velit itaque cum rerum repudiandae.</li>
                                        <li>Eum dolor aspernatur est minus unde id animi aliquam ex velit itaque cum rerum repudiandae.</li>
                                        <li>Eum dolor aspernatur est minus unde id animi aliquam ex velit itaque cum rerum repudiandae.</li>
                                    </ul>
                                    <p>Lorem ipsum dolor sit amet. Aut nihil assumenda et omnis nesciunt qui numquam consequatur. Hic veniam quae et molestiae nulla sit fuga dolor ut laboriosam aperiam ea fuga deserunt sed vero numquam veniam nulla.</p>
                                    <p>33 delectus perferendis rem quas laudantium non quia distinctio aut dolorem porro. Ut omnis harum hic obcaecati eveniet et amet ducimus. Ea possimus repellat non eius possimus in excepturi laboriosam et quia ullam 33 omnis vitae. Eum dolor aspernatur est minus unde id animi aliquam ex velit itaque cum rerum repudiandae.</p>
                                    <p>Thank you again for visiting our webpage.</p>
                                    <p>Sincerely,</p>
                                    <p>Dr. Enrique Brave</p>
                                    <p>President</p>
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
export default President_message;
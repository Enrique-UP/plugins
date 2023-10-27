import React from "react";
import {Helmet} from "react-helmet";
import {NavLink} from "react-router-dom";
import Banner_line from "./include/Banner_line";
import Left_sidebar from "./include/Left_sidebar";
import Right_sidebar from "./include/Right_sidebar";
import Bottom_counter from "./include/Bottom_counter";
const Exams_results = () => {
    return (
        <>
            <Helmet>
                <title>Exams Results | OHIO</title>
            </Helmet>
            <Banner_line pagename="Students" tagline="Examination and Results" />
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
                                        <li>Examination and Results</li>
                                    </ol>
                                    <h1 className="heading">Examination and Results</h1>
                                    <p>Lorem ipsum dolor sit amet. Aut nihil assumenda et omnis nesciunt qui numquam consequatur. Hic veniam quae et molestiae nulla sit fuga dolor ut laboriosam aperiam ea fuga deserunt sed vero numquam veniam nulla.</p>
                                    <p>33 delectus perferendis rem quas laudantium non quia distinctio aut dolorem porro. Ut omnis harum hic obcaecati eveniet et amet ducimus. Ea possimus repellat non eius possimus in excepturi laboriosam et quia ullam 33 omnis vitae. Eum dolor aspernatur est minus unde id animi aliquam ex velit itaque cum rerum repudiandae.</p>
                                    <p className="heading_p">Final Results</p>
                                    <p>Id nihil accusantium est beatae totam a suscipit consequatur et facere vitae aut praesentium sapiente. Ut aperiam voluptatem At vero autem aut omnis quae rem aliquid deserunt? Eos explicabo necessitatibus id consectetur magnam nam sint consequatur est natus praesentium ad rerum esse eum odit unde. Est unde vero non tempore perspiciatis et placeat veniam sit omnis minima ut illum dolores.</p>
                                    <div className="table_area_part two_part">
                                        <ul className="table_area head">
                                            <li>Mark</li>
                                            <li>Grade</li>
                                        </ul>
                                        <ul className="table_area">
                                            <li>90-100</li>
                                            <li>A+</li>
                                        </ul>
                                        <ul className="table_area">
                                            <li>85-89</li>
                                            <li>A</li>
                                        </ul>
                                        <ul className="table_area">
                                            <li>80-84</li>
                                            <li>A-</li>
                                        </ul>
                                        <ul className="table_area">
                                            <li>75-79</li>
                                            <li>B+</li>
                                        </ul>
                                        <ul className="table_area">
                                            <li>70-74</li>
                                            <li>B</li>
                                        </ul>
                                        <ul className="table_area">
                                            <li>65-69</li>
                                            <li>B-</li>
                                        </ul>
                                        <ul className="table_area">
                                            <li>60-64</li>
                                            <li>C+</li>
                                        </ul>
                                        <ul className="table_area">
                                            <li>55-59</li>
                                            <li>C</li>
                                        </ul>
                                        <ul className="table_area">
                                            <li>50-54</li>
                                            <li>C-</li>
                                        </ul>
                                        <ul className="table_area">
                                            <li>40-49</li>
                                            <li>Fail D</li>
                                        </ul>
                                    </div>{/*--table_area_part--*/}
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
export default Exams_results;
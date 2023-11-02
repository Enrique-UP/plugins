import React from "react";
import {Helmet} from "react-helmet";
import { NavLink } from "react-router-dom";
import Banner_line from "./include/Banner_line";
import Left_sidebar1 from "./include/Left_sidebar1";
import Fixed_area from "./include/Fixed_area";
import News_events_data from "./news_events/News_events_data";
import News_events_tag from "./news_events/News_events_tag";
const News_events = () => {
    return (
        <>
            <Helmet>
                <title>News & Events | OHIO</title>
            </Helmet>
            <Banner_line pagename="My OHIO" tagline="News and Events" />
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
                                    <li>News and Events</li>
                                </ol>
                                <h1 className="heading">News and Events</h1>
                                {
                                    News_events_data.map((val, ind) => {
                                        return <News_events_tag key={ind} link={val.link} head={val.head} img={val.img} para1={val.para1} para2={val.para2} />
                                    })
                                }
                                <nav aria-label="Page navigation example" className="pagination_area" data-aos="fade-up">
                                <ul className="pagination pagination-circle pg-blue">
                                    <li className="page-item disabled">
                                        <a className="page-link">First</a>
                                    </li>
                                    <li className="page-item disabled">
                                        <a className="page-link" aria-label="Previous">
                                            <span aria-hidden="true">&laquo;</span>
                                            <span className="sr-only">Previous</span>
                                        </a>
                                    </li>
                                    <li className="page-item active"><a className="page-link">1</a></li>
                                    <li className="page-item"><a className="page-link">2</a></li>
                                    <li className="page-item"><a className="page-link">3</a></li>
                                    <li className="page-item"><a className="page-link">4</a></li>
                                    <li className="page-item"><a className="page-link">5</a></li>
                                    <li className="page-item">
                                        <a className="page-link" aria-label="Next">
                                            <span aria-hidden="true">&raquo;</span>
                                            <span className="sr-only">Next</span>
                                        </a>
                                    </li>
                                    <li className="page-item"><a className="page-link">Last</a></li>
                                </ul>
                                </nav>
                        </div>{/*--right_area--*/}
                    </div>{/*--cols--*/}
                </div>{/*--row--*/}
            </div>{/*--container--*/}
        </section>{/*--main_container--*/}
        </>
    )
}
export default News_events;
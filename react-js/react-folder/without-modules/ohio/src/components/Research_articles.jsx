import React from "react";
import {Helmet} from "react-helmet";
import { NavLink } from "react-router-dom";
import Banner_line from "./include/Banner_line";
import Left_sidebar1 from "./include/Left_sidebar1";
import Fixed_area from "./include/Fixed_area";
import Research_articles_data from "./research_articles/Research_articles_data";
import Research_articles_tag from "./research_articles/Research_articles_tag";
const Research_articles = () => {
    return (
        <>
            <Helmet>
                <title>Research Article | OHIO</title>
            </Helmet>
            <Banner_line pagename="My OHIO" tagline="Research Articles" />
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
                                    <li>Research Articles</li>
                                </ol>
                                <h1 className="heading">Research Articles</h1>
                                {
                                    Research_articles_data.map((val, ind) => {
                                        return <Research_articles_tag key={ind} link={val.link} head={val.head} img={val.img} date={val.date} time={val.time} course={val.course} name={val.name} />
                                    })
                                }
                                <nav aria-label="Page navigation example" className="pagination_area">
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
export default Research_articles;
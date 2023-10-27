import React from 'react'
import {NavLink} from "react-router-dom";
import { Typewriter } from 'react-simple-typewriter'
import Icon_1 from "../../assets/images/icon-1.png";
import Icon_4 from "../../assets/images/icon-4.png";
import Icon_5 from "../../assets/images/icon-5.png";
import Icon_6 from "../../assets/images/icon-6.png";
import Apply_for_admission from "../../assets/images/apply_for_admission.jpg.jfif";
import Apply_for_admission1 from "../../assets/images/apply_for_admission1.jpg.jfif";
const Short_links = () => {
    return(
        <>
            <section className="short_links">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div className="shadow_area">
                                <div className="row">
                                    <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                                        <NavLink to="/programs" className="short_links_a" data-aos="fade-up">
                                            <div className="image_area"><img src={Icon_1} /></div>{/*--image_area--*/}
                                            <span className="head">Graduation</span>
                                            <span className="text">Getting Program</span>
                                        </NavLink>
                                    </div>{/*--cols--*/}
                                    <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                                        <NavLink to="/image-gallery" className="short_links_a" data-aos="fade-up">
                                            <div className="image_area"><img src={Icon_4} /></div>{/*--image_area--*/}
                                            <span className="head">OHIO Life</span>
                                            <span className="text">Overall in here</span>
                                        </NavLink>
                                    </div>{/*--cols--*/}
                                    <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                                        <NavLink to="/alumni-experience" className="short_links_a" data-aos="fade-up">
                                            <div className="image_area"><img src={Icon_5} /></div>{/*--image_area--*/}
                                            <span className="head">Alumni</span>
                                            <span className="text">Experience</span>
                                        </NavLink>
                                    </div>{/*--cols--*/}
                                    <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                                        <NavLink to="/news-events" className="short_links_a" data-aos="fade-up">
                                            <div className="image_area"><img src={Icon_6} /></div>{/*--image_area--*/}
                                            <span className="head">News & Events</span>
                                            <span className="text">Current Updates</span>
                                        </NavLink>
                                    </div>{/*--cols--*/}
                                </div>{/*--row--*/}
                            </div>{/*--shadow_area--*/}
                        </div>{/*--cols--*/}
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <ul className="apply_for_admission">
                                <li data-aos="fade-right"><img src={Apply_for_admission} className="apply_for_admission_img" /></li>
                                <li data-aos="fade-left">
                                    <div className="apply_addmission_cnt">
                                        <p className="head">Apply for <Typewriter words={['Ph.D', 'MBA', 'CS', 'MPH', 'MPA']} loop={true} cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} /></p>
                                        <p className="green">Fall 2022 applications are now open</p>
                                        <p className="text">Lorem ipsum dolor sit amet. Aut nihil assumenda et omnis nesciunt qui numquam consequatur. Hic veniam quae et molestiae nulla sit fuga dolor ut laboriosam aperiam ea fuga deserunt sed vero numquam veniam nulla.</p>
                                        <NavLink to="/admission-process" className="c_btn">Apply Now</NavLink>
                                    </div>{/*--apply_addmission_cnt--*/}
                                    <img src={Apply_for_admission1} className="apply_for_admission_img" />
                                </li>
                            </ul>
                        </div>{/*--cols--*/}
                    </div>{/*--row--*/}
                </div>{/*--container--*/}
            </section>
        </>
    )
}
export default Short_links;
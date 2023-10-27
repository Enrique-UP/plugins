import {NavLink} from "react-router-dom";
import Donation_helps from "../../assets/images/donation_helps.jpg.jfif";
import Heart from "../../assets/images/heart.png";
const Upcoming_events = () => {
    return (
        <>
            <section className="upcoming_events_form">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                            <div className="donation_helps" data-aos="fade-right">
                                <img src={Donation_helps} />
                                    <p className="head">Donation helps us</p>
                                    <p className="text">Lorem ipsum dolor sit amet. Aut nihil assumenda et omnis nesciunt qui numquam consequatur. Hic veniam quae et molestiae nulla sit fuga dolor ut laboriosam aperiam ea fuga deserunt sed vero numquam veniam nulla.</p>
                                    <p><NavLink to="/payment" className="c_btn"><img src={Heart} /> Become a donor</NavLink></p>
                            </div>{/*--donation_helps--*/}
                        </div>{/*--cols--*/}
                        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                            <div className="upcoming_events_area" data-aos="fade-up">
                                <p className="head"><span>Upcoming Events</span></p>
                                <div className="events_area">
                                    <div className="date">
                                        <span className="day">17</span>
                                        <span className="month">Dec</span>
                                    </div>{/*--date--*/}
                                    <NavLink to="/news-events-detail">Lorem ipsum dolor sit amit lorem ipsum dolor sit</NavLink>
                                    <p>
                                        <i className="fa fa-clock-o"></i> <span>1:00 pm - 1:00 pm</span>
                                        <i className="fa fa-map-marker"></i> OHIO Grand Hall
                                    </p>
                                </div>{/*--events_area--*/}
                                <div className="events_area">
                                    <div className="date">
                                        <span className="day">17</span>
                                        <span className="month">Dec</span>
                                    </div>{/*--date--*/}
                                    <NavLink to="/news-events-detail">Lorem ipsum dolor sit amit lorem ipsum dolor sit</NavLink>
                                    <p>
                                        <i className="fa fa-clock-o"></i> <span>1:00 pm - 1:00 pm</span>
                                        <i className="fa fa-map-marker"></i> OHIO Grand Hall
                                    </p>
                                </div>{/*--events_area--*/}
                                <div className="events_area">
                                    <div className="date">
                                        <span className="day">17</span>
                                        <span className="month">Dec</span>
                                    </div>{/*--date--*/}
                                    <NavLink to="/news-events-detail">Lorem ipsum dolor sit amit lorem ipsum dolor sit</NavLink>
                                    <p>
                                        <i className="fa fa-clock-o"></i> <span>1:00 pm - 1:00 pm</span>
                                        <i className="fa fa-map-marker"></i> OHIO Grand Hall
                                    </p>
                                </div>{/*--events_area--*/}
                                <p className="view_all"><NavLink to="/news-events">View All Events <i className="fa fa-long-arrow-right"></i></NavLink></p>
                            </div>{/*--upcoming_events_area--*/}
                        </div>{/*--cols--*/}
                        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                            <form className="upcoming_events_form_area" data-aos="fade-left">
                                <p><i className="fa fa-envelope"></i></p>
                                <p className="head">Subscribe To Newsletter</p>
                                <p className="sub_head">Get updates to news & events</p>
                                <input type="text" placeholder="Your Email Address" className="input_text" />
                                    <a className="c_btn input_submit_full">Subscribe</a>
                            </form>
                        </div>{/*--cols--*/}
                    </div>{/*--row--*/}
                </div>{/*--container--*/}
            </section>
        </>
    )
}
export default Upcoming_events;
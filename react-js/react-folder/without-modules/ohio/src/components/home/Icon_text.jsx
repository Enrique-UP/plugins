import {NavLink} from "react-router-dom";
import Col_icon_1 from "../../assets/images/col-icon-1.png";
import Col_icon_2 from "../../assets/images/col-icon-2.png";
import Col_icon_3 from "../../assets/images/col-icon-3.png";
import Col_icon_4 from "../../assets/images/col-icon-4.png";
const Icon_text = () => {
    return (
        <>
            <section className="icon_text">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                            <ul className="icon_text_area" data-aos="fade-up">
                                <li className="icon"><img src={Col_icon_1} /></li>
                                <li className="head">Education Services</li>
                                <li className="text">Lorem ipsum dolor sit amet. Aut nihil assumenda et omnis nesciunt qui.</li>
                                <li className="link"><NavLink to="/programs">Read More</NavLink></li>
                            </ul>
                        </div>{/*--cols--*/}
                        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                        <ul className="icon_text_area" data-aos="fade-up">
                                <li className="icon"><img src={Col_icon_2} /></li>
                                <li className="head">International Hubs</li>
                                <li className="text">Lorem ipsum dolor sit amet. Aut nihil assumenda et omnis nesciunt qui.</li>
                                <li className="link"><NavLink to="/programs">Read More</NavLink></li>
                            </ul>
                        </div>{/*--cols--*/}
                        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                        <ul className="icon_text_area" data-aos="fade-up">
                                <li className="icon"><img src={Col_icon_3} /></li>
                                <li className="head">Bachelor’s and Master’s</li>
                                <li className="text">Lorem ipsum dolor sit amet. Aut nihil assumenda et omnis nesciunt qui.</li>
                                <li className="link"><NavLink to="/programs">Read More</NavLink></li>
                            </ul>
                        </div>{/*--cols--*/}
                        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                        <ul className="icon_text_area" data-aos="fade-up">
                                <li className="icon"><img src={Col_icon_4} /></li>
                                <li className="head">University Life</li>
                                <li className="text">Lorem ipsum dolor sit amet. Aut nihil assumenda et omnis nesciunt qui.</li>
                                <li className="link"><NavLink to="/programs">Read More</NavLink></li>
                            </ul>
                        </div>{/*--cols--*/}
                    </div>{/*--row--*/}
                </div>{/*--container--*/}
            </section>
        </>
    )
}
export default Icon_text;
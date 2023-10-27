import Logo from "../../../src/assets/images/logo.png";
import { NavLink } from "react-router-dom";
const Header = () => {
    function showhide() {
        document.getElementById("header_right").classList.toggle("active");
        document.getElementById("menu").classList.toggle("active");
    }
    function search() {
        document.getElementById("search_area").classList.toggle("active");
    }
    return (
        <>
            <div className="top_header">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                            <div className="left_top_header" data-aos="fade-right">
                                <a href="mailto:info@ohio.com" target="_blank"><i className="fa fa-envelope"></i> info@ohio.com</a>
                                <a href="tel:+91-000-000-0000" target="_blank"><i className="fa fa-phone"></i> +91-000-000-0000</a>
                            </div>{/*--left_top_header--*/}
                        </div>{/*--cols--*/}
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                            <div className="right_top_header" data-aos="fade-left">
                                <NavLink to="/alumni-experience">Alumni</NavLink>
                                <NavLink to="#">Calender</NavLink>
                                <NavLink to="#">Portal</NavLink>
                                <NavLink to="#" className="btns">Support OHIO</NavLink>
                            </div>{/*--right_top_header--*/}
                        </div>{/*--cols--*/}
                    </div>{/*--row--*/}
                </div>{/*--container--*/}
            </div>{/*--top_header--*/}
            <header className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <NavLink to="/" className="logo_area" data-aos="fade-right">
                                <img src={Logo} />
                            </NavLink>
                            <a className="menu" id="menu" onClick={showhide} data-aos="fade-left">
                                <div className="line_one"></div>
                                <div className="line_two"></div>
                                <div className="line_three"></div>
                                <span>Menu</span>
                            </a>
                            <NavLink to="#" className="search_btn_mob" id="search_btn_mob" onClick={search} data-aos="fade-left">
                                <i className="fa fa-search search"></i>
                            </NavLink>
                            <ul className="header_right" id="header_right" data-aos="fade-left">
                                <li><NavLink to="/" className="head_btn">Home</NavLink></li>
                                <li className="ucc">
                                    <NavLink to="#" className="head_btn">About Us <i className="fa fa-angle-down"></i></NavLink>
                                    <ul className="dropdown_single">
                                        <li><NavLink to="/about">OHIO – About Us</NavLink></li>
                                        <li><NavLink to="/location">OHIO - Location</NavLink></li>
                                        <li><NavLink to="/Image-gallery">OHIO - Image Gallery</NavLink></li>
                                        <li><NavLink to="/mission-vision">Mission & Vision</NavLink></li>
                                        <li><NavLink to="/accreditation">Accreditation</NavLink></li>
                                        <li><NavLink to="/president-message">President's Message</NavLink></li>
                                        <li><NavLink to="/management">Management</NavLink></li>
                                        <li><NavLink to="/why-ohio">Why OHIO</NavLink></li>
                                        <li><NavLink to="/payment">Online Payments</NavLink></li>
                                    </ul>
                                </li>
                                <li className="ucc">
                                    <a className="head_btn">
                                        <span>Programs <i className="fa fa-angle-down"></i></span>
                                    </a>
                                    <ul className="dropdown_single">
                                        <li><NavLink to="/phd">Ph.D – Doctoral Program</NavLink></li>
                                        <li><NavLink to="/mba">MBA – Master in Business Administration</NavLink></li>
                                        <li><NavLink to="/ex-mba">MBA – Executive</NavLink></li>
                                        <li><NavLink to="/cs">Masters in Computer Science</NavLink></li>
                                        <li><NavLink to="/mph">MPH - Master in Public Health</NavLink></li>
                                        <li><NavLink to="/mpa">MPA - Master of Public Administration</NavLink></li>
                                    </ul>
                                </li>
                                <li className="ucc">
                                    <a className="head_btn">
                                        <span>My OHIO <i className="fa fa-angle-down"></i></span>
                                    </a>
                                    <ul className="dropdown_single">
                                        <li><NavLink to="/contact">Contact Us</NavLink></li>
                                        <li><NavLink to="/login">Login</NavLink></li>
                                        <li className="full_width"><NavLink to="/enrollment-verification">Enrollment Verification</NavLink></li>
                                        <li><NavLink to="/student-grievances">Student Grievances</NavLink></li>
                                        <li><NavLink to="/diversity-policy">Diversity Policy</NavLink></li>
                                        <li><NavLink to="/credit-transfer-policy">Credit Transfer Policy</NavLink></li>
                                        <li><NavLink to="/credit-hour-policy">Credit Hour Policy</NavLink></li>
                                    </ul>
                                </li>
                                <li className="ucc">
                                    <a className="head_btn">Students <i className="fa fa-angle-down"></i></a>
                                    <ul className="dropdown_single">
                                        <li><NavLink to="/admission-process">Admission Process</NavLink></li>
                                        <li><NavLink to="/exams-results">Exams & Results</NavLink></li>
                                        <li><NavLink to="/research-publication">Online Research Publications</NavLink></li>
                                        <li><NavLink to="/tution-fees">Tution & Fees</NavLink></li>
                                        <li><NavLink to="/scholarship">Scholarship At OHIO</NavLink></li>
                                    </ul>
                                </li>
                                <li className="ucc">
                                    <a className="head_btn">OHIO Experience <i className="fa fa-angle-down"></i></a>
                                    <ul className="dropdown_single">
                                        <li><NavLink to="/alumni-experience">Alumni Experience</NavLink></li>
                                        <li><NavLink to="/jobs">Jobs after OHIO</NavLink></li>
                                    </ul>
                                </li>
                                <li>
                                    <a className="head_btn" id="search_btn" onClick={search}>
                                        <i className="fa fa-search search"></i>
                                        <span>&nbsp;</span>
                                    </a>
                                </li>
                            </ul>
                        </div>{/*--cols--*/}
                    </div>{/*--row--*/}
                </div>{/*--container--*/}
            </header>{/*--header--*/}
        </>
    );
}

export default Header;

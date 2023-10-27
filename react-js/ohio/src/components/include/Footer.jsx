import React from "react";
import { NavLink } from "react-router-dom";
import Footer_logo from "../../assets/images/logo-white.png";
const Footer = () => {
    function close_btn() {
        document.getElementById("search_area").classList.toggle("active");
    }
  return (
      <>
          <div className="footer">
              <div className="footer_bottom">
                  <div className="container">
                      <div className="row">
                          <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3" data-aos="fade-up">
                              <p className="footer_logo"><NavLink to="/"><img src={Footer_logo} /></NavLink></p>
                              <p className="contact">
                                  <a href="tel:+91-000-000-0000" target="_blank">
                                      <i className="fa fa-phone"></i>
                                      +91-000-000-0000
                                  </a>
                              </p>
                              <p className="contact">
                                  <a href="mailto:info@ohio.com" target="_blank">
                                      <i className="fa fa-envelope"></i>
                                      info@ohio.com
                                  </a>
                              </p>
                              <p className="contact">
                                  <a className="white_color">
                                      <i className="fa fa-map-marker"></i>
                                      Lorem ipsum dolor sit amit, Lorem.
                                  </a>
                              </p>
                              <div className="footer_line"></div>{/*--footer_line--*/}
                          </div>{/*--cols--*/}
                          <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3" data-aos="fade-up">
                              <p className="head">About Us</p>
                              <ul className="links">
                                  <li><NavLink to="/about">OHIO – About Us</NavLink></li>
                                  <li><NavLink to="/image-gallery">Image Gallery</NavLink></li>
                                  <li><NavLink to="/management">Management</NavLink></li>
                                  <li><NavLink to="/why-ohio">Why OHIO</NavLink></li>
                                  <li><NavLink to="/admission-process">Admission Process</NavLink></li>
                                  <li><NavLink to="/exams-results">Exams & Results</NavLink></li>
                                  <li><NavLink to="/tution-fees">Tution & Fees</NavLink></li>
                                  <li><NavLink to="/payment">Online Payments</NavLink></li>
                              </ul>
                          </div>{/*--cols--*/}
                          <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3" data-aos="fade-up">
                              <p className="head">Useful Links</p>
                              <ul className="links">
                                  <li><NavLink to="/blogs">Blogs</NavLink></li>
                                  <li><NavLink to="/news-events">News & Events</NavLink></li>
                                  <li><NavLink to="/research-articles">Research Articles</NavLink></li>
                                  <li><NavLink to="/enrollment-verification">Enrollment Verification</NavLink></li>
                                  <li><NavLink to="/faq">Frequently Asked Questions</NavLink></li>
                                  <li><NavLink to="/contact">Contact Us</NavLink></li>
                                  <li><NavLink to="/register">Register</NavLink></li>
                                  <li><NavLink to="/login">Login</NavLink></li>
                              </ul>
                          </div>{/*--cols--*/}
                          <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3" data-aos="fade-up">
                              <p className="head">More Links</p>
                              <ul className="links">
                                   <li><NavLink to="/student-grievances">Student Grievances</NavLink></li>
                                  <li><NavLink to="/diversity-policy">Diversity Policy</NavLink></li>
                                  <li><NavLink to="/credit-transfer-policy">Credit Transfer Policy</NavLink></li>
                                    <li><NavLink to="/credit-hour-policy">Credit Hour Policy</NavLink></li>
                                  <li><NavLink to="/refund-policy">Refund Policy</NavLink></li>
                                  <li><NavLink to="/terms-conditions">Terms & Conditions</NavLink></li>
                                  <li><NavLink to="/privacy-policy">Privacy Policy</NavLink></li>
                              </ul>
                          </div>{/*--cols--*/}
                      </div>{/*--row--*/}
                  </div>{/*--container--*/}
              </div>{/*--footer_bottom--*/}
          </div>{/*--footer--*/}
          <div className="copyright">
              <div className="container">
                  <div className="row">
                      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                          <p className="copyright_text">Copyright &copy; With All Right Reserved 2023, Ohio.com.</p>
                      </div>{/*--cols--*/}
                      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                          <p className="follow_us">
                              <a href="https://facebook.com/" target="_blank" className="fa fa-facebook"></a>
                              <a href="https://twitter.com/" target="_blank" className="fa fa-twitter"></a>
                              <a href="https://linkedin.com/" target="_blank" className="fa fa-linkedin"></a>
                              <a href="https://instagram.com/" target="_blank" className="fa fa-instagram"></a>
                              <a href="https://youtube.com/" target="_blank" className="fa fa-youtube"></a>
                          </p>
                      </div>{/*--cols--*/}
                  </div>{/*--row--*/}
              </div>{/*--container--*/}
          </div>{/*--copyright--*/}
          <form className="search_area" id="search_area">
              <label>
                  <input type="search" className="search_bar" placeholder="Search here..." />
                      <a className="search_btn fa fa-search"></a>
              </label>
              <a className="fa fa-times close_btn" onClick={close_btn}></a>
          </form>
      </>
  );
}

export default Footer;

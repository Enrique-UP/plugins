import { NavLink } from "react-router-dom";
import React, { useState, useEffect } from 'react';
const Right_sidebar = () => {
    const [show, setShow] = useState(false);
    const rightcontact = () => {
        if (window.scrollY > 550 && window.scrollY <= 1000 ) {
            setShow(true)
        }else{
            setShow(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', rightcontact)
        /*return () => {
            window.removeEventListener('scroll', rightcontact)
        }*/
    }, []);
    return (
        <>
            <div className="right_sidebar" id="right_sidebar" data-aos="fade-left">
                <div className={`main_right_sidebar ${show && 'fixed'}`}>
                    <p className="head">Contact details</p>
                    <p className="contact_info">
                        <i className="fa fa-user"></i>
                        For CPD Content Queries: Dr. Suzanne Timmons
                    </p>
                    <p className="contact_info">
                        <i className="fa fa-envelope"></i>
                        <a href="mailto:info@ohio.com" target="_blank">info@ohio.com</a>
                    </p>
                    <p className="contact_info">
                        <i className="fa fa-phone fa-fw"></i>
                        <a href="tel:+1-000-000-0000" target="_blank">+1-000-000-0000</a>
                    </p>
                    <p className="contact_info">
                        <i className="fa fa-link"></i>
                        <NavLink to="/">www.ohio.com</NavLink>
                    </p>
                    <p className="head">Similar Programs</p>
                    <NavLink to="/programs" className="c_btn">See All Courses <i className="fa fa-long-arrow-right"></i></NavLink>
                </div>{/*--main_right_sidebar--*/}
            </div>{/*--right_sidebar--*/}
        </>
    )
}
export default Right_sidebar;
import React from "react";
import {Helmet} from "react-helmet";
import { NavLink } from "react-router-dom";
import Banner_line from "./include/Banner_line";
const Register = () => {
    return (
        <>
            <Helmet>
                <title>Register | OHIO</title>
            </Helmet>
            <Banner_line pagename="My OHIO" tagline="Register Account" />
            <section className="main_container">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <form className="form_area login" data-aos="fade-up">
                                <h1 className="head">Register now and get one course for free!</h1>
                                <input type="text" placeholder="Name" className="form-control input_area" />
                                <input type="text" placeholder="Number" className="form-control input_area" />
                                <input type="text" placeholder="Email id" className="form-control input_area" />
                                <a className="c_btn">Submit</a>
                                <div className="clearfix"></div>
                            </form>
                        </div>{/*--cols--*/}
                    </div>{/*--row--*/}
                </div>{/*--container--*/}
            </section>{/*--main_container--*/}
        </>
    )
}
export default Register;
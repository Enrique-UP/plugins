import React from "react";
import {Helmet} from "react-helmet";
import { NavLink } from "react-router-dom";
import Banner_line from "./include/Banner_line";
const Login = () => {
    return (
        <>
            <Helmet>
                <title>Login | OHIO</title>
            </Helmet>
            <Banner_line pagename="My OHIO" tagline="Login" />
            <section className="main_container">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <form className="form_area login" data-aos="fade-up">
                                <h1 className="head">Login with your site account</h1>
                                <input type="text" placeholder="Email id" className="form-control input_area" />
                                <input type="text" placeholder="Password" className="form-control input_area" />
                                <p className="check_box"><input type="checkbox" /> Remember Me</p>
                                <a className="c_btn">Login</a>
                                <p className="register">Now a member yet? <NavLink to="/register">Register now</NavLink></p>
                                <div className="clearfix"></div>
                            </form>
                        </div>{/*--cols--*/}
                    </div>{/*--row--*/}
                </div>{/*--container--*/}
            </section>{/*--main_container--*/}
        </>
    )
}
export default Login;
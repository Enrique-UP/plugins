import {useEffect} from "react";
import React from "react";
import {NavLink} from 'react-router-dom';
import Aos from "aos";
function Header() {
    function showhide() {
        document.getElementById("navigation_bar").classList.toggle("active");
        document.getElementById("bars").classList.toggle("active");
    }
    function hide() {
        document.getElementById("navigation_bar").classList.remove("active");
        document.getElementById("bars").classList.remove("active");
    }
    useEffect(() => {
        Aos.init({duration:1000});
    }, []);
    return (
        <>
            <header id="header">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <NavLink to="/" title="" className="logo">
                                <img src="assets/images/logo.png" alt="" width="200" height="75" />
                            </NavLink>
                            <i className="fa fa-bars" id="bars" onClick={showhide}></i>
                            <div className="navigation_bar" id="navigation_bar">
                                <ul>
                                    <li><NavLink to="/" exact activeClassName="active" onClick={hide}>Home</NavLink></li>
                                    <li><NavLink to="/about" exact activeClassName="active" onClick={hide}>About Us</NavLink></li>
                                    <li><NavLink to="/blogs" exact activeClassName="active" onClick={hide}>Blogs</NavLink></li>
                                    <li><NavLink to="/state" exact activeClassName="active" onClick={hide}>State</NavLink></li>
                                    <li><NavLink to="/state1" exact activeClassName="active" onClick={hide}>State1</NavLink></li>
                                    <li><NavLink to="/sliderone" exact activeClassName="active" onClick={hide}>Slider</NavLink></li>
                                    <li><NavLink to="/hooks" exact activeClassName="active" onClick={hide}>Hooks</NavLink></li>
                                    <li><NavLink to="/textslider" exact activeClassName="active" onClick={hide}>Text Slider</NavLink></li>
                                    <li><NavLink to="/imagegallery" exact activeClassName="active" onClick={hide}>Image Gallery</NavLink></li>
                                    <li><NavLink to="/counter" exact activeClassName="active" onClick={hide}>Counter</NavLink></li>
                                    <li><NavLink to="/counterSkills" exact activeClassName="active" onClick={hide}>CounterSkills</NavLink></li>
                                    <li><NavLink to="/searchbar" exact activeClassName="active" onClick={hide}>Search Bar</NavLink></li>
                                    <li><NavLink to="/accordion" exact activeClassName="active" onClick={hide}>Accordion</NavLink></li>
                                    <li><NavLink to="/contact" exact activeClassName="active" onClick={hide}>Contact Us</NavLink></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
export default Header;
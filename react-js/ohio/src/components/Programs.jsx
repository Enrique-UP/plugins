import React from "react";
import {Helmet} from "react-helmet";
import { NavLink } from "react-router-dom";
import Banner_line from "./include/Banner_line";
import Left_sidebar2 from "./include/Left_sidebar2";
import Fixed_area from "./include/Fixed_area";
const Programs = () => {
    function myFunction() {
        var input, filter, ul, li, a, i, txtValue;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        ul = document.getElementById("myUL");
        li = ul.getElementsByTagName("li");
        for (i = 0; i < li.length; i++) {
            a = li[i].getElementsByTagName("a")[0];
            txtValue = a.textContent || a.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "";
            } else {
                li[i].style.display = "none";
            }
        }
    }
    return (
        <>
            <Helmet>
                <title>Programs | OHIO</title>
            </Helmet>
            <Banner_line pagename="My OHIO" tagline="Programs" />
            <section className="main_container">
                 <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-4 col-md-4 col-lg-3">
                            <Left_sidebar2 />
                        </div>{/*--cols--*/}
                        <div className="col-xs-12 col-sm-8 col-md-8 col-lg-9">
                            <div className="right_area">
                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                        <Fixed_area />
                                        <ol className="breadcrumb">
                                            <li><NavLink to="/">Home</NavLink></li>
                                            <li>Programs</li>
                                        </ol>
                                        <h1 className="heading">Courses</h1>
                                        <p>Lorem ipsum dolor sit amit lorem ipsum dolor sit amit. Lorem ipsum dolor sit amit lorem ipsum dolor sit amit. Lorem ipsum dolor sit amit lorem ipsum dolor sit amit. Lorem ipsum dolor sit amit lorem ipsum dolor sit amit. Lorem ipsum dolor sit amit lorem ipsum dolor sit amit. Lorem ipsum dolor sit amit lorem ipsum dolor sit amit. Lorem ipsum dolor sit amit lorem ipsum dolor sit amit. Lorem ipsum dolor sit amit lorem ipsum dolor sit amit.</p>
                                        <p>Lorem ipsum dolor sit amit lorem ipsum dolor sit amit. Lorem ipsum dolor sit amit lorem ipsum dolor sit amit. Lorem ipsum dolor sit amit lorem ipsum dolor sit amit. Lorem ipsum dolor sit amit lorem ipsum dolor sit amit. Lorem ipsum dolor sit amit lorem ipsum dolor sit amit. Lorem ipsum dolor sit amit lorem ipsum dolor sit amit. Lorem ipsum dolor sit amit lorem ipsum dolor sit amit. Lorem ipsum dolor sit amit lorem ipsum dolor sit amit.</p>
                                        <form className="searh_bar">
                                            <input type="text" id="myInput" onKeyUp={myFunction} className="search_input" placeholder="Enter course name, subject or keyword or 1 to 5 number only" />
                                            <a className="fa fa-search submit_input"></a>
                                        </form>
                                        <ul className="filter_a_to_z" data-aos="fade-up">
                                            <li><a href="#a">A</a></li>
                                            <li><a href="#b">B</a></li>
                                            <li><a href="#c">C</a></li>
                                            <li><a href="#d">D</a></li>
                                            <li><a href="#e">E</a></li>
                                            <li><a href="#f">F</a></li>
                                            <li><a href="#g">G</a></li>
                                            <li><a href="#h">H</a></li>
                                            <li><a href="#i">I</a></li>
                                            <li><a href="#j">J</a></li>
                                            <li><a href="#k">K</a></li>
                                            <li><a href="#l">L</a></li>
                                            <li><a href="#m">M</a></li>
                                            <li><a href="#n">N</a></li>
                                            <li><a href="#o">O</a></li>
                                            <li><a href="#p">P</a></li>
                                            <li><a href="#q">Q</a></li>
                                            <li><a href="#r">R</a></li>
                                            <li><a href="#s">S</a></li>
                                            <li><a href="#t">T</a></li>
                                            <li><a href="#u">U</a></li>
                                            <li><a href="#v">V</a></li>
                                            <li><a href="#w">W</a></li>
                                            <li><a href="#x">X</a></li>
                                            <li><a href="#y">Y</a></li>
                                            <li><a href="#z">Z</a></li>
                                        </ul>
                                    </div>{/*--cols--*/}
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                        <div className="row" id="myUL">
                                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                                            <p className="heading_red" id="a">A</p>
                                            <ul className="course_names">
                                                <li><NavLink to="/program-detail">Lorem1 ipsum dolor sit amit lorem ipsum dolor sit amit</NavLink></li>
                                                <li><NavLink to="/program-detail">Lorem2 ipsum dolor sit amit lorem ipsum dolor sit amit</NavLink></li>
                                                <li><NavLink to="/program-detail">Lorem3 ipsum dolor sit amit lorem ipsum dolor sit amit</NavLink></li>
                                                <li><NavLink to="/program-detail">Lorem4 ipsum dolor sit amit lorem ipsum dolor sit amit</NavLink></li>
                                                <li><NavLink to="/program-detail">Lorem5 ipsum dolor sit amit lorem ipsum dolor sit amit</NavLink></li>
                                            </ul>
                                            <p className="heading_red" id="b">B</p>
                                            <ul className="course_names">
                                                <li><NavLink to="/program-detail">Lorem1 ipsum dolor sit amit lorem ipsum dolor sit amit</NavLink></li>
                                                <li><NavLink to="/program-detail">Lorem2 ipsum dolor sit amit lorem ipsum dolor sit amit</NavLink></li>
                                                <li><NavLink to="/program-detail">Lorem3 ipsum dolor sit amit lorem ipsum dolor sit amit</NavLink></li>
                                                <li><NavLink to="/program-detail">Lorem4 ipsum dolor sit amit lorem ipsum dolor sit amit</NavLink></li>
                                                <li><NavLink to="/program-detail">Lorem5 ipsum dolor sit amit lorem ipsum dolor sit amit</NavLink></li>
                                            </ul>
                                            <p className="heading_red" id="c">C</p>
                                            <ul className="course_names">
                                                <li><NavLink to="/program-detail">Lorem1 ipsum dolor sit amit lorem ipsum dolor sit amit</NavLink></li>
                                                <li><NavLink to="/program-detail">Lorem2 ipsum dolor sit amit lorem ipsum dolor sit amit</NavLink></li>
                                                <li><NavLink to="/program-detail">Lorem3 ipsum dolor sit amit lorem ipsum dolor sit amit</NavLink></li>
                                                <li><NavLink to="/program-detail">Lorem4 ipsum dolor sit amit lorem ipsum dolor sit amit</NavLink></li>
                                                <li><NavLink to="/program-detail">Lorem5 ipsum dolor sit amit lorem ipsum dolor sit amit</NavLink></li>
                                            </ul>
                                            <p className="heading_red" id="d">D</p>
                                            <ul className="course_names">
                                                <li><NavLink to="/program-detail">Lorem1 ipsum dolor sit amit lorem ipsum dolor sit amit</NavLink></li>
                                                <li><NavLink to="/program-detail">Lorem2 ipsum dolor sit amit lorem ipsum dolor sit amit</NavLink></li>
                                                <li><NavLink to="/program-detail">Lorem3 ipsum dolor sit amit lorem ipsum dolor sit amit</NavLink></li>
                                                <li><NavLink to="/program-detail">Lorem4 ipsum dolor sit amit lorem ipsum dolor sit amit</NavLink></li>
                                                <li><NavLink to="/program-detail">Lorem5 ipsum dolor sit amit lorem ipsum dolor sit amit</NavLink></li>
                                            </ul>
                                            <p className="heading_red" id="e">E</p>
                                            <ul className="course_names">
                                                <li><NavLink to="/program-detail">Lorem1 ipsum dolor sit amit lorem ipsum dolor sit amit</NavLink></li>
                                                <li><NavLink to="/program-detail">Lorem2 ipsum dolor sit amit lorem ipsum dolor sit amit</NavLink></li>
                                                <li><NavLink to="/program-detail">Lorem3 ipsum dolor sit amit lorem ipsum dolor sit amit</NavLink></li>
                                                <li><NavLink to="/program-detail">Lorem4 ipsum dolor sit amit lorem ipsum dolor sit amit</NavLink></li>
                                                <li><NavLink to="/program-detail">Lorem5 ipsum dolor sit amit lorem ipsum dolor sit amit</NavLink></li>
                                            </ul>
                                            <p className="heading_red" id="f">F</p>
                                            <ul className="course_names">
                                                <li><NavLink to="/program-detail">Lorem1 ipsum dolor sit amit lorem ipsum dolor sit amit</NavLink></li>
                                                <li><NavLink to="/program-detail">Lorem2 ipsum dolor sit amit lorem ipsum dolor sit amit</NavLink></li>
                                                <li><NavLink to="/program-detail">Lorem3 ipsum dolor sit amit lorem ipsum dolor sit amit</NavLink></li>
                                                <li><NavLink to="/program-detail">Lorem4 ipsum dolor sit amit lorem ipsum dolor sit amit</NavLink></li>
                                                <li><NavLink to="/program-detail">Lorem5 ipsum dolor sit amit lorem ipsum dolor sit amit</NavLink></li>
                                            </ul>
                                            <p className="heading_red" id="g">G</p>
                                            <ul className="course_names">
                                                <li><NavLink to="/program-detail">Lorem1 ipsum dolor sit amit lorem ipsum dolor sit amit</NavLink></li>
                                                <li><NavLink to="/program-detail">Lorem2 ipsum dolor sit amit lorem ipsum dolor sit amit</NavLink></li>
                                                <li><NavLink to="/program-detail">Lorem3 ipsum dolor sit amit lorem ipsum dolor sit amit</NavLink></li>
                                                <li><NavLink to="/program-detail">Lorem4 ipsum dolor sit amit lorem ipsum dolor sit amit</NavLink></li>
                                                <li><NavLink to="/program-detail">Lorem5 ipsum dolor sit amit lorem ipsum dolor sit amit</NavLink></li>
                                            </ul>
                                            <p className="heading_red" id="h">H</p>
                                            <ul className="course_names">
                                                <li><NavLink to="/program-detail">Lorem1 ipsum dolor sit amit lorem ipsum dolor sit amit</NavLink></li>
                                                <li><NavLink to="/program-detail">Lorem2 ipsum dolor sit amit lorem ipsum dolor sit amit</NavLink></li>
                                                <li><NavLink to="/program-detail">Lorem3 ipsum dolor sit amit lorem ipsum dolor sit amit</NavLink></li>
                                                <li><NavLink to="/program-detail">Lorem4 ipsum dolor sit amit lorem ipsum dolor sit amit</NavLink></li>
                                                <li><NavLink to="/program-detail">Lorem5 ipsum dolor sit amit lorem ipsum dolor sit amit</NavLink></li>
                                            </ul>
                                            <p className="heading_red" id="i">I</p>
                                            <ul className="course_names">
                                                <li><NavLink to="/program-detail">Lorem1 ipsum dolor sit amit lorem ipsum dolor sit amit</NavLink></li>
                                                <li><NavLink to="/program-detail">Lorem2 ipsum dolor sit amit lorem ipsum dolor sit amit</NavLink></li>
                                                <li><NavLink to="/program-detail">Lorem3 ipsum dolor sit amit lorem ipsum dolor sit amit</NavLink></li>
                                                <li><NavLink to="/program-detail">Lorem4 ipsum dolor sit amit lorem ipsum dolor sit amit</NavLink></li>
                                                <li><NavLink to="/program-detail">Lorem5 ipsum dolor sit amit lorem ipsum dolor sit amit</NavLink></li>
                                            </ul>
                                        </div>{/*--cols--*/}
                                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                                            <p className="heading_red" id="j">J</p>
                                            <ul className="course_names">
                                                <li><NavLink to="/program-detail">Lorem1 ipsum dolor sit amit lorem ipsum dolor sit amit</NavLink></li>
                                                <li><NavLink to="/program-detail">Lorem2 ipsum dolor sit amit lorem ipsum dolor sit amit</NavLink></li>
                                                <li><NavLink to="/program-detail">Lorem3 ipsum dolor sit amit lorem ipsum dolor sit amit</NavLink></li>
                                                <li><NavLink to="/program-detail">Lorem4 ipsum dolor sit amit lorem ipsum dolor sit amit</NavLink></li>
                                                <li><NavLink to="/program-detail">Lorem5 ipsum dolor sit amit lorem ipsum dolor sit amit</NavLink></li>
                                            </ul>
                                            <p className="heading_red" id="k">K</p>
                                            <ul className="course_names">
                                                <li><NavLink to="/program-detail">Lorem1 ipsum dolor sit amit lorem ipsum dolor sit amit</NavLink></li>
                                                <li><NavLink to="/program-detail">Lorem2 ipsum dolor sit amit lorem ipsum dolor sit amit</NavLink></li>
                                                <li><NavLink to="/program-detail">Lorem3 ipsum dolor sit amit lorem ipsum dolor sit amit</NavLink></li>
                                                <li><NavLink to="/program-detail">Lorem4 ipsum dolor sit amit lorem ipsum dolor sit amit</NavLink></li>
                                                <li><NavLink to="/program-detail">Lorem5 ipsum dolor sit amit lorem ipsum dolor sit amit</NavLink></li>
                                            </ul>
                                            <p className="heading_red" id="l">L</p>
                                            <ul className="course_names">
                                                <li><NavLink to="/program-detail">Lorem1 ipsum dolor sit amit lorem ipsum dolor sit amit</NavLink></li>
                                                <li><NavLink to="/program-detail">Lorem2 ipsum dolor sit amit lorem ipsum dolor sit amit</NavLink></li>
                                                <li><NavLink to="/program-detail">Lorem3 ipsum dolor sit amit lorem ipsum dolor sit amit</NavLink></li>
                                                <li><NavLink to="/program-detail">Lorem4 ipsum dolor sit amit lorem ipsum dolor sit amit</NavLink></li>
                                                <li><NavLink to="/program-detail">Lorem5 ipsum dolor sit amit lorem ipsum dolor sit amit</NavLink></li>
                                            </ul>
                                            <p className="heading_red" id="m">M</p>
                                            <ul className="course_names">
                                                <li><NavLink to="/program-detail">Lorem1 ipsum dolor sit amit lorem ipsum dolor sit amit</NavLink></li>
                                                <li><NavLink to="/program-detail">Lorem2 ipsum dolor sit amit lorem ipsum dolor sit amit</NavLink></li>
                                                <li><NavLink to="/program-detail">Lorem3 ipsum dolor sit amit lorem ipsum dolor sit amit</NavLink></li>
                                                <li><NavLink to="/program-detail">Lorem4 ipsum dolor sit amit lorem ipsum dolor sit amit</NavLink></li>
                                                <li><NavLink to="/program-detail">Lorem5 ipsum dolor sit amit lorem ipsum dolor sit amit</NavLink></li>
                                            </ul>
                                            <p className="heading_red" id="n">N</p>
                                            <ul className="course_names">
                                                <li><NavLink to="/program-detail">Lorem1 ipsum dolor sit amit lorem ipsum dolor sit amit</NavLink></li>
                                                <li><NavLink to="/program-detail">Lorem2 ipsum dolor sit amit lorem ipsum dolor sit amit</NavLink></li>
                                                <li><NavLink to="/program-detail">Lorem3 ipsum dolor sit amit lorem ipsum dolor sit amit</NavLink></li>
                                                <li><NavLink to="/program-detail">Lorem4 ipsum dolor sit amit lorem ipsum dolor sit amit</NavLink></li>
                                                <li><NavLink to="/program-detail">Lorem5 ipsum dolor sit amit lorem ipsum dolor sit amit</NavLink></li>
                                            </ul>
                                            <p className="heading_red" id="o">O</p>
                                            <ul className="course_names">
                                                <li><NavLink to="/program-detail">Lorem1 ipsum dolor sit amit lorem ipsum dolor sit amit</NavLink></li>
                                                <li><NavLink to="/program-detail">Lorem2 ipsum dolor sit amit lorem ipsum dolor sit amit</NavLink></li>
                                                <li><NavLink to="/program-detail">Lorem3 ipsum dolor sit amit lorem ipsum dolor sit amit</NavLink></li>
                                                <li><NavLink to="/program-detail">Lorem4 ipsum dolor sit amit lorem ipsum dolor sit amit</NavLink></li>
                                                <li><NavLink to="/program-detail">Lorem5 ipsum dolor sit amit lorem ipsum dolor sit amit</NavLink></li>
                                            </ul>
                                            <p className="heading_red" id="p">P</p>
                                            <ul className="course_names">
                                                <li><NavLink to="/program-detail">Lorem1 ipsum dolor sit amit lorem ipsum dolor sit amit</NavLink></li>
                                                <li><NavLink to="/program-detail">Lorem2 ipsum dolor sit amit lorem ipsum dolor sit amit</NavLink></li>
                                                <li><NavLink to="/program-detail">Lorem3 ipsum dolor sit amit lorem ipsum dolor sit amit</NavLink></li>
                                                <li><NavLink to="/program-detail">Lorem4 ipsum dolor sit amit lorem ipsum dolor sit amit</NavLink></li>
                                                <li><NavLink to="/program-detail">Lorem5 ipsum dolor sit amit lorem ipsum dolor sit amit</NavLink></li>
                                            </ul>
                                            <p className="heading_red" id="q">Q</p>
                                            <ul className="course_names">
                                                <li><NavLink to="/program-detail">Lorem1 ipsum dolor sit amit lorem ipsum dolor sit amit</NavLink></li>
                                                <li><NavLink to="/program-detail">Lorem2 ipsum dolor sit amit lorem ipsum dolor sit amit</NavLink></li>
                                                <li><NavLink to="/program-detail">Lorem3 ipsum dolor sit amit lorem ipsum dolor sit amit</NavLink></li>
                                                <li><NavLink to="/program-detail">Lorem4 ipsum dolor sit amit lorem ipsum dolor sit amit</NavLink></li>
                                                <li><NavLink to="/program-detail">Lorem5 ipsum dolor sit amit lorem ipsum dolor sit amit</NavLink></li>
                                            </ul>
                                            <p className="heading_red" id="r">R</p>
                                            <ul className="course_names">
                                                <li><NavLink to="/program-detail">Lorem1 ipsum dolor sit amit lorem ipsum dolor sit amit</NavLink></li>
                                                <li><NavLink to="/program-detail">Lorem2 ipsum dolor sit amit lorem ipsum dolor sit amit</NavLink></li>
                                                <li><NavLink to="/program-detail">Lorem3 ipsum dolor sit amit lorem ipsum dolor sit amit</NavLink></li>
                                                <li><NavLink to="/program-detail">Lorem4 ipsum dolor sit amit lorem ipsum dolor sit amit</NavLink></li>
                                                <li><NavLink to="/program-detail">Lorem5 ipsum dolor sit amit lorem ipsum dolor sit amit</NavLink></li>
                                            </ul>
                                        </div>{/*--cols--*/}
                                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                                            <p className="heading_red" id="s">S</p>
                                            <ul className="course_names">
                                                <li><NavLink to="/program-detail">Lorem1 ipsum dolor sit amit lorem ipsum dolor sit amit</NavLink></li>
                                                <li><NavLink to="/program-detail">Lorem2 ipsum dolor sit amit lorem ipsum dolor sit amit</NavLink></li>
                                                <li><NavLink to="/program-detail">Lorem3 ipsum dolor sit amit lorem ipsum dolor sit amit</NavLink></li>
                                                <li><NavLink to="/program-detail">Lorem4 ipsum dolor sit amit lorem ipsum dolor sit amit</NavLink></li>
                                                <li><NavLink to="/program-detail">Lorem5 ipsum dolor sit amit lorem ipsum dolor sit amit</NavLink></li>
                                            </ul>
                                            <p className="heading_red" id="t">T</p>
                                            <ul className="course_names">
                                                <li><NavLink to="/program-detail">Lorem1 ipsum dolor sit amit lorem ipsum dolor sit amit</NavLink></li>
                                                <li><NavLink to="/program-detail">Lorem2 ipsum dolor sit amit lorem ipsum dolor sit amit</NavLink></li>
                                                <li><NavLink to="/program-detail">Lorem3 ipsum dolor sit amit lorem ipsum dolor sit amit</NavLink></li>
                                                <li><NavLink to="/program-detail">Lorem4 ipsum dolor sit amit lorem ipsum dolor sit amit</NavLink></li>
                                                <li><NavLink to="/program-detail">Lorem5 ipsum dolor sit amit lorem ipsum dolor sit amit</NavLink></li>
                                            </ul>
                                            <p className="heading_red" id="u">U</p>
                                            <ul className="course_names">
                                                <li><NavLink to="/program-detail">Lorem1 ipsum dolor sit amit lorem ipsum dolor sit amit</NavLink></li>
                                                <li><NavLink to="/program-detail">Lorem2 ipsum dolor sit amit lorem ipsum dolor sit amit</NavLink></li>
                                                <li><NavLink to="/program-detail">Lorem3 ipsum dolor sit amit lorem ipsum dolor sit amit</NavLink></li>
                                                <li><NavLink to="/program-detail">Lorem4 ipsum dolor sit amit lorem ipsum dolor sit amit</NavLink></li>
                                                <li><NavLink to="/program-detail">Lorem5 ipsum dolor sit amit lorem ipsum dolor sit amit</NavLink></li>
                                            </ul>
                                            <p className="heading_red" id="v">V</p>
                                            <ul className="course_names">
                                                <li><NavLink to="/program-detail">Lorem1 ipsum dolor sit amit lorem ipsum dolor sit amit</NavLink></li>
                                                <li><NavLink to="/program-detail">Lorem2 ipsum dolor sit amit lorem ipsum dolor sit amit</NavLink></li>
                                                <li><NavLink to="/program-detail">Lorem3 ipsum dolor sit amit lorem ipsum dolor sit amit</NavLink></li>
                                                <li><NavLink to="/program-detail">Lorem4 ipsum dolor sit amit lorem ipsum dolor sit amit</NavLink></li>
                                                <li><NavLink to="/program-detail">Lorem5 ipsum dolor sit amit lorem ipsum dolor sit amit</NavLink></li>
                                            </ul>
                                            <p className="heading_red" id="w">W</p>
                                            <ul className="course_names">
                                                <li><NavLink to="/program-detail">Lorem1 ipsum dolor sit amit lorem ipsum dolor sit amit</NavLink></li>
                                                <li><NavLink to="/program-detail">Lorem2 ipsum dolor sit amit lorem ipsum dolor sit amit</NavLink></li>
                                                <li><NavLink to="/program-detail">Lorem3 ipsum dolor sit amit lorem ipsum dolor sit amit</NavLink></li>
                                                <li><NavLink to="/program-detail">Lorem4 ipsum dolor sit amit lorem ipsum dolor sit amit</NavLink></li>
                                                <li><NavLink to="/program-detail">Lorem5 ipsum dolor sit amit lorem ipsum dolor sit amit</NavLink></li>
                                            </ul>
                                            <p className="heading_red" id="x">X</p>
                                            <ul className="course_names">
                                                <li><NavLink to="/program-detail">Lorem1 ipsum dolor sit amit lorem ipsum dolor sit amit</NavLink></li>
                                                <li><NavLink to="/program-detail">Lorem2 ipsum dolor sit amit lorem ipsum dolor sit amit</NavLink></li>
                                                <li><NavLink to="/program-detail">Lorem3 ipsum dolor sit amit lorem ipsum dolor sit amit</NavLink></li>
                                                <li><NavLink to="/program-detail">Lorem4 ipsum dolor sit amit lorem ipsum dolor sit amit</NavLink></li>
                                                <li><NavLink to="/program-detail">Lorem5 ipsum dolor sit amit lorem ipsum dolor sit amit</NavLink></li>
                                            </ul>
                                            <p className="heading_red" id="y">Y</p>
                                            <ul className="course_names">
                                                <li><NavLink to="/program-detail">Lorem1 ipsum dolor sit amit lorem ipsum dolor sit amit</NavLink></li>
                                                <li><NavLink to="/program-detail">Lorem2 ipsum dolor sit amit lorem ipsum dolor sit amit</NavLink></li>
                                                <li><NavLink to="/program-detail">Lorem3 ipsum dolor sit amit lorem ipsum dolor sit amit</NavLink></li>
                                                <li><NavLink to="/program-detail">Lorem4 ipsum dolor sit amit lorem ipsum dolor sit amit</NavLink></li>
                                                <li><NavLink to="/program-detail">Lorem5 ipsum dolor sit amit lorem ipsum dolor sit amit</NavLink></li>
                                            </ul>
                                            <p className="heading_red" id="z">Z</p>
                                            <ul className="course_names">
                                                <li><NavLink to="/program-detail">Lorem1 ipsum dolor sit amit lorem ipsum dolor sit amit</NavLink></li>
                                                <li><NavLink to="/program-detail">Lorem2 ipsum dolor sit amit lorem ipsum dolor sit amit</NavLink></li>
                                                <li><NavLink to="/program-detail">Lorem3 ipsum dolor sit amit lorem ipsum dolor sit amit</NavLink></li>
                                                <li><NavLink to="/program-detail">Lorem4 ipsum dolor sit amit lorem ipsum dolor sit amit</NavLink></li>
                                                <li><NavLink to="/program-detail">Lorem5 ipsum dolor sit amit lorem ipsum dolor sit amit</NavLink></li>
                                            </ul>
                                        </div>{/*--cols--*/}
                                        </div>{/*==row==*/}
                                    </div>{/**--cols--*/}
                                </div>{/*--row--*/}
                            </div>{/*--right_area--*/}
                        </div>{/*--cols--*/}
                    </div>{/*--row--*/}
                </div>{/*--container--*/}
            </section>{/*--main_container--*/}
        </>
    )
}
export default Programs;
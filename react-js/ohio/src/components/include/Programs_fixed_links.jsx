import React, { useState, useEffect } from 'react';
import Scrollspy from 'react-scrollspy';
const Program_fixed_links = (props) => {
    function active(){
        document.querySelector(".navigation_fixed").classList.toggle("active");
    }
    function remove(){
        document.querySelector(".navigation_fixed").classList.remove("active");
    }

    const [show, setShow] = useState(false);
    const rightcontact = () => {
        if (window.scrollY > 300 && window.scrollY <= 3000 ) {
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
    return(
        <>
            <section className={`fixed_links ${show && 'fixed'}`} id="fixed_links">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <ul className="this_page">
                                <li className="head">On This Page</li>
                                <li className="menu">
                                    <a onClick={active}>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                    </a>
                                </li>
                            </ul>
                            <Scrollspy items={ ['about', 'choose', 'requirements', 'fees_costs', 'apply'] } currentClassName="active" className="navigation_fixed" id="navigation_fixed">
                                <li><a href="#about" onClick={remove}>{props.about}</a></li>
                                <li><a href="#choose" onClick={remove}>{props.why}</a></li>
                                <li><a href="#requirements" onClick={remove}>{props.requirement}</a></li>
                                <li><a href="#fees_costs" onClick={remove}>{props.tution}</a></li>
                                <li><a href="#apply" onClick={remove}>{props.enrolling}</a></li>
                            </Scrollspy>
                        </div>{/*--cols--*/}
                    </div>{/*--row--*/}
                </div>{/*--container--*/}
            </section>
        </>
    )
}
export default Program_fixed_links;
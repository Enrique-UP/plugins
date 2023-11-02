import {useEffect} from "react";
import React from "react";
import {NavLink} from 'react-router-dom';
import Aos from "aos";
function Card(props) {
    useEffect(() => {
        Aos.init({duration:1000});
    }, []);
    return (
        <>
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                <NavLink to="/bloginner" className="blog">
                    <img src={props.imgsrc} alt={props.imgsrc} />
                    <span>{props.title}</span>
                    <p>{props.text}</p>
                </NavLink>
            </div>
        </>
    )
}
export default Card;
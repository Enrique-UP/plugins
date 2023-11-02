import {useEffect} from "react";
import React from "react";
import Aos from "aos";
function Common(props) {
    useEffect(() => {
        Aos.init({duration:1000});
    }, []);
    return (
        <>
            <section className="inner_banner">
                <div className="container" data-aos="fade-up">
                    {props.name}
                </div>
            </section>
        </>
    )
}
export default Common;
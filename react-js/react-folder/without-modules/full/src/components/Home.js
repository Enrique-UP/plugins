import {useEffect} from "react";
import React from "react";
import Slider from "./Slider";
import Loader from "./Loader";
import Aos from "aos";

function Home() {
    useEffect(() => {
        Aos.init({duration:1000});
    }, []);
    return (
        <>
            <Loader />
            <Slider />
            <section className="content">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <h1 className="heading">Home</h1>
                            <p>Lorem ipsum dolor sit amit lorem ipsum dolor sit amit lorem ipsum dolor sit amit lorem ipsum dolor sit amit lorem ipsum dolor sit amit lorem ipsum dolor sit amit lorem ipsum dolor sit amit lorem ipsum dolor sit amit.</p>
                            <p>Lorem ipsum dolor sit amit lorem ipsum dolor sit amit lorem ipsum dolor sit amit lorem ipsum dolor sit amit lorem ipsum dolor sit amit lorem ipsum dolor sit amit lorem ipsum dolor sit amit lorem ipsum dolor sit amit.</p>
                            <p>Lorem ipsum dolor sit amit lorem ipsum dolor sit amit lorem ipsum dolor sit amit lorem ipsum dolor sit amit lorem ipsum dolor sit amit lorem ipsum dolor sit amit lorem ipsum dolor sit amit lorem ipsum dolor sit amit.</p>
                            <p>Lorem ipsum dolor sit amit lorem ipsum dolor sit amit lorem ipsum dolor sit amit lorem ipsum dolor sit amit lorem ipsum dolor sit amit lorem ipsum dolor sit amit lorem ipsum dolor sit amit lorem ipsum dolor sit amit.</p>
                            <p>Lorem ipsum dolor sit amit lorem ipsum dolor sit amit lorem ipsum dolor sit amit lorem ipsum dolor sit amit lorem ipsum dolor sit amit lorem ipsum dolor sit amit lorem ipsum dolor sit amit lorem ipsum dolor sit amit.</p>
                            <p>Lorem ipsum dolor sit amit lorem ipsum dolor sit amit lorem ipsum dolor sit amit lorem ipsum dolor sit amit lorem ipsum dolor sit amit lorem ipsum dolor sit amit lorem ipsum dolor sit amit lorem ipsum dolor sit amit.</p>
                            <p>Lorem ipsum dolor sit amit lorem ipsum dolor sit amit lorem ipsum dolor sit amit lorem ipsum dolor sit amit lorem ipsum dolor sit amit lorem ipsum dolor sit amit lorem ipsum dolor sit amit lorem ipsum dolor sit amit.</p>
                            <p>Lorem ipsum dolor sit amit lorem ipsum dolor sit amit lorem ipsum dolor sit amit lorem ipsum dolor sit amit lorem ipsum dolor sit amit lorem ipsum dolor sit amit lorem ipsum dolor sit amit lorem ipsum dolor sit amit.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Home;
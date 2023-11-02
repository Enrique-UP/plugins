import {useEffect} from "react";
import Common from "./Common";
import Loader from "./Loader";
import Aos from "aos";
function About() {
    useEffect(() => {
        Aos.init({duration:1000});
    }, []);
    return (
        <>
            <Loader />
            <Common name="About Us" />
            <section class="content">
                <div class="container">
                    <div class="row">
                        <div class="col-xs-12">
                            <h1 class="heading">About Us</h1>
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
export default About;
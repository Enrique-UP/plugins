import {NavLink} from "react-router-dom";
import Logowhite from "../../assets/images/logo-white.png";
const About_our_university = () => {
    return(
        <>
            <section className="about_our_university">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4" data-aos="fade-right">
                            <p className="logo"><img src={Logowhite} /></p>
                            <p className="green">About Our University</p>
                        </div>{/*--cols--*/}
                        <div className="col-xs-12 col-sm-8 col-md-8 col-lg-8" data-aos="fade-left">
                            <p className="text">Lorem ipsum dolor sit amet. Aut nihil assumenda et omnis nesciunt qui numquam consequatur. Hic veniam quae et molestiae nulla sit fuga dolor ut laboriosam aperiam ea fuga deserunt sed vero numquam veniam nulla.</p>
                            <p className="white">33 delectus perferendis rem quas laudantium non quia distinctio aut dolorem porro. Ut omnis harum hic obcaecati eveniet et amet ducimus. Ea possimus repellat non eius possimus in excepturi laboriosam et quia ullam 33 omnis vitae. Eum dolor aspernatur est minus unde id animi aliquam ex velit itaque cum rerum repudiandae.</p>
                            <p className="white"><NavLink to="/about">Read More <i className="fa fa-long-arrow-right"></i></NavLink></p>
                        </div>{/*--cols--*/}
                    </div>{/*--row--*/}
                </div>{/*--container--*/}
            </section>
        </>
    )
}
export default About_our_university;
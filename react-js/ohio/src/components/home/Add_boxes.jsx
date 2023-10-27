import Add_box_1 from "../../assets/images/ads_boxes-1.jpg.jfif";
import Add_box_2 from "../../assets/images/ads_boxes-2.jpg.jfif";
import Add_box_3 from "../../assets/images/ads_boxes-3.jpg.jfif";
const Add_boxes = () => {
    return (
        <>
            <section className="ads_boxes">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <ul className="ads_boxes_area">
                                <li data-aos="fade-up">
                                    <div className="middle_area">
                                        <p className="head">Undergraduate</p>
                                        <p className="text">Lorem ipsum dolor sit amet. Aut nihil assumenda et omnis nesciunt qui numquam consequatur hic veniam quae et molestiae.</p>
                                    </div>{/*--middle_area--*/}
                                    <img src={Add_box_1} />
                                </li>
                                <li data-aos="fade-up">
                                    <div className="middle_area">
                                        <p className="head">Graduated & Professional</p>
                                        <p className="text">Lorem ipsum dolor sit amet. Aut nihil assumenda et omnis nesciunt qui numquam consequatur hic veniam quae et molestiae.</p>
                                    </div>{/*--middle_area--*/}
                                    <img src={Add_box_2} />
                                </li>
                                <li data-aos="fade-up">
                                    <div className="middle_area">
                                        <p className="head">Scholarships & Financial AID</p>
                                        <p className="text">Lorem ipsum dolor sit amet. Aut nihil assumenda et omnis nesciunt qui numquam consequatur hic veniam quae et molestiae.</p>
                                    </div>{/*--middle_area--*/}
                                    <img src={Add_box_3} />
                                </li>
                            </ul>
                        </div>{/*--cols--*/}
                    </div>{/*--row--*/}
                </div>{/*--container--*/}
            </section>
        </>
    )
}
export default Add_boxes;
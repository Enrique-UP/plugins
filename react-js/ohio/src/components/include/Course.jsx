const Course = (props) => {
    return (
        <>
            <div className="id_area" id="about">
                <h1 className="heading">OHIO {props.course}</h1>
                <p><strong>Explore This Section</strong></p>
                <ul className="explore_session">
                    <li><a href="#face_file">Fact File</a></li>
                    <li><a href="#course_outline">Philosophy</a></li>
                    <li><a href="#course_practicalities">{props.course} Program</a></li>
                </ul>
                <div className="explore_session_area" id="face_file">
                    <p className="head">Fact File</p>
                    <ul className="boxes_area">
                        <li>
                            <p className="head">Title</p>
                            <p className="text">Advanced Issues in Dementia Care</p>
                        </li>
                        <li>
                            <p className="head">Code</p>
                            <p className="text">{props.code}</p>
                        </li>
                        <li>
                            <p className="head">College</p>
                            <p className="text"><a href="#">Medicine and Health </a></p>
                        </li>
                        <li>
                            <p className="head">Teaching Mode</p>
                            <p className="text">Part-Time. See <a href="#">Additional Teaching Mode Information</a> for more info.</p>
                        </li>
                        <li>
                            <p className="head">Fees</p>
                            <p className="text">€995. Also an application fee of €35. See Fees and Costs for full details. See <a href="#">Fees and Costs</a> for full details.</p>
                        </li>
                        <li>
                            <p className="head">Entry Requirements</p>
                            <p className="text">Please see full entry requirements below. See Requirements for full details. See <a href="#">Requirements</a> for full details.</p>
                        </li>
                        <li>
                            <p className="head">Closing Date</p>
                            <p className="text">TBC</p>
                        </li>
                        <li>
                            <p className="head">Venue</p>
                            <p className="text">UCC. Exact rooms to be confirmed on registration.</p>
                        </li>
                        <li>
                            <p className="head">Credits</p>
                            <p className="text">10</p>
                        </li>
                        <li>
                            <p className="head">Start Date</p>
                            <p className="text">5th March 2022</p>
                        </li>
                    </ul>
                </div>{/*--explore_session_area--*/}
                <div className="explore_session_area" id="course_outline">
                    <p className="heading_p">Philosophy</p>
                    <p><strong>Lorem ipsum dolor sit</strong> amet. Aut nihil assumenda et omnis nesciunt qui numquam consequatur. Hic veniam quae et molestiae nulla sit fuga dolor ut laboriosam aperiam ea fuga deserunt sed vero numquam veniam nulla.</p>
                    <ul className="unorder_list">
                        <li>Id nihil accusantium est beatae totam a suscipit consequatur et facere vitae aut praesentium sapiente. Ut aperiam voluptatem At vero autem aut omnis quae rem aliquid deserunt? Eos explicabo necessitatibus id consectetur magnam nam sint consequatur est natus praesentium ad rerum esse eum odit unde. Est unde vero non tempore perspiciatis et placeat veniam sit omnis minima ut illum dolores.</li>
                        <li>Lorem ipsum dolor sit amet. Aut nihil assumenda et omnis nesciunt qui numquam consequatur. Hic veniam quae et molestiae nulla sit fuga dolor ut laboriosam aperiam ea fuga deserunt sed vero numquam veniam nulla.</li>
                        <li>33 delectus perferendis rem quas laudantium non quia distinctio aut dolorem porro. Ut omnis harum hic obcaecati eveniet et amet ducimus. Ea possimus repellat non eius possimus in excepturi laboriosam et quia ullam 33 omnis vitae. Eum dolor aspernatur est minus unde id animi aliquam ex velit itaque cum rerum repudiandae.</li>
                        <li>Id nihil accusantium est beatae totam a suscipit consequatur et facere vitae aut praesentium sapiente. Ut aperiam voluptatem At vero autem aut omnis quae rem aliquid deserunt? Eos explicabo necessitatibus id consectetur magnam nam sint consequatur est natus praesentium ad rerum esse eum odit unde. Est unde vero non tempore perspiciatis et placeat veniam sit omnis minima ut illum dolores.</li>
                        <li>Lorem ipsum dolor sit amet. Aut nihil assumenda et omnis nesciunt qui numquam consequatur. Hic veniam quae et molestiae nulla sit fuga dolor ut laboriosam aperiam ea fuga deserunt sed vero numquam veniam nulla.</li>
                        <li>33 delectus perferendis rem quas laudantium non quia distinctio aut dolorem porro. Ut omnis harum hic obcaecati eveniet et amet ducimus. Ea possimus repellat non eius possimus in excepturi laboriosam et quia ullam 33 omnis vitae. Eum dolor aspernatur est minus unde id animi aliquam ex velit itaque cum rerum repudiandae.</li>
                    </ul>
                </div>{/*--explore_session_area--*/}
                <div className="explore_session_area" id="course_practicalities">
                    <p className="heading_p">{props.course} Program</p>
                    <p>Lorem ipsum dolor sit amet. Aut nihil assumenda et omnis nesciunt qui numquam consequatur. Hic veniam quae et molestiae nulla sit fuga dolor ut laboriosam aperiam ea fuga deserunt sed vero numquam veniam nulla. Lorem ipsum dolor sit amet. Aut nihil assumenda et omnis nesciunt qui numquam consequatur. Hic veniam quae et molestiae nulla sit fuga dolor ut laboriosam aperiam ea fuga deserunt sed vero numquam veniam nulla.</p>
                    <p>Lorem ipsum dolor sit amet. Aut nihil assumenda et omnis nesciunt qui numquam consequatur. Hic veniam quae et molestiae nulla sit fuga dolor ut laboriosam aperiam ea fuga deserunt sed vero numquam veniam nulla. Lorem ipsum dolor sit amet. Aut nihil assumenda et omnis nesciunt qui numquam consequatur. Hic veniam quae et molestiae nulla sit fuga dolor ut laboriosam aperiam ea fuga deserunt sed vero numquam veniam nulla.</p>
                    <p><strong>Why study for an {props.course} at OHIO University?</strong></p>
                    <ul className="unorder_list">
                        <li><strong>Lorem ipsum dolor sit amet</strong>. Aut nihil assumenda et omnis nesciunt qui numquam consequatur. Hic veniam quae et molestiae nulla sit fuga dolor ut laboriosam aperiam ea fuga deserunt sed vero numquam veniam nulla.</li>
                        <li>Lorem ipsum dolor sit amet. Aut nihil assumenda et omnis nesciunt qui numquam consequatur. Hic veniam quae et molestiae nulla sit fuga dolor ut laboriosam aperiam ea fuga deserunt sed vero numquam veniam nulla.</li>
                        <li>Lorem ipsum dolor sit amet. Aut nihil assumenda et omnis nesciunt qui numquam consequatur. Hic veniam quae et molestiae nulla sit fuga dolor ut laboriosam aperiam ea fuga deserunt sed vero numquam veniam nulla.</li>
                        <li>Lorem ipsum dolor sit amet. Aut nihil assumenda et omnis nesciunt qui numquam consequatur. Hic veniam quae et molestiae nulla sit fuga dolor ut laboriosam aperiam ea fuga deserunt sed vero numquam veniam nulla.</li>
                        <li>Lorem ipsum dolor sit amet. Aut nihil assumenda et omnis nesciunt qui numquam consequatur. Hic veniam quae et molestiae nulla sit fuga dolor ut laboriosam aperiam ea fuga deserunt sed vero numquam veniam nulla.</li>
                    </ul>
                    <p><strong>Where do OHIO University students and graduates work?</strong></p>
                    <ul className="unorder_list">
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Aut nihil assumenda et omnis nesciunt qui numquam consequatur.</li>
                        <li>Hic veniam quae et molestiae nulla sit fuga dolor ut laboriosam aperiam ea fuga deserunt sed vero numquam veniam nulla.</li>
                    </ul>
                </div>{/*--explore_session_area--*/}
            </div>{/*--id_area--*/}
            <div className="id_area" id="choose">
                <h2 className="heading">Why OHIO University?</h2>
                <ul className="unorder_list">
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Aut nihil assumenda et omnis nesciunt qui numquam consequatur.</li>
                    <li>Hic veniam quae et molestiae nulla sit fuga dolor ut laboriosam aperiam ea fuga deserunt sed vero numquam veniam nulla.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Aut nihil assumenda et omnis nesciunt qui numquam consequatur.</li>
                    <li>Hic veniam quae et molestiae nulla sit fuga dolor ut laboriosam aperiam ea fuga deserunt sed vero numquam veniam nulla.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Aut nihil assumenda et omnis nesciunt qui numquam consequatur.</li>
                    <li>Hic veniam quae et molestiae nulla sit fuga dolor ut laboriosam aperiam ea fuga deserunt sed vero numquam veniam nulla.</li>
                </ul>
            </div>{/*--id_area--*/}
            <div className="id_area" id="requirements">
                <h2 className="heading">Admissions requirements</h2>
                <ul className="unorder_list">
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Aut nihil assumenda et omnis nesciunt qui numquam consequatur.</li>
                    <li>Hic veniam quae et molestiae nulla sit fuga dolor ut laboriosam aperiam ea fuga deserunt sed vero numquam veniam nulla.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Aut nihil assumenda et omnis nesciunt qui numquam consequatur.</li>
                    <li>Hic veniam quae et molestiae nulla sit fuga dolor ut laboriosam aperiam ea fuga deserunt sed vero numquam veniam nulla.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Aut nihil assumenda et omnis nesciunt qui numquam consequatur.</li>
                    <li>Hic veniam quae et molestiae nulla sit fuga dolor ut laboriosam aperiam ea fuga deserunt sed vero numquam veniam nulla.</li>
                </ul>
            </div>{/*--id_area--*/}
            <div className="id_area" id="fees_costs">
                <h3 className="heading">Tuition of Interactive {props.course}</h3>
                <ul className="unorder_list">
                    <li>$ 10000 is the total tuition fees</li>
                </ul>
                <div className="table_area_part six_part">
                    <ul className="table_area head">
                        <li><span>{props.course}</span></li>
                        <li><span>Registration</span></li>
                        <li><span>1st Installment</span></li>
                        <li><span>2nd Installment</span></li>
                        <li><span>3rd Installment</span></li>
                        <li><span>Total</span></li>
                    </ul>
                    <ul className="table_area">
                        <li><span>Fees Structure</span></li>
                        <li><span>$ 1000</span></li>
                        <li><span>$ 3000</span></li>
                        <li><span>$ 3000</span></li>
                        <li><span>$ 3000</span></li>
                        <li><span>$ 10000</span></li>      
                    </ul>
                </div>{/*--table_area_part--*/}
                <p>Lorem ipsum dolor sit amet. Aut nihil assumenda et omnis nesciunt qui numquam consequatur.</p>
                <p>Do not hesitate and contact us by e-mail at <a href="mailto:info@ohio.com" target="_blank">info@ohio.com</a> or on Skype.</p>
            </div>{/*--id_area--*/}
            <div className="id_area" id="apply">
                <h3 className="heading">Before enrolling you in the program we need an electronic form of your:</h3>
                <ul className="unorder_list">
                    <li>CV</li>
                    <li>Photograph</li>
                    <li>Copy of a document proving the highest degree earned</li>
                </ul>
            </div>{/*--id_area--*/}
        </>
    )
}
export default Course;
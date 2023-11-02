import {NavLink} from "react-router-dom";
const Blog_tag = (props) => {
    return(
        <>
            <NavLink to={props.link} className="blogs_area" data-aos="fade-up">
                <p className="head">{props.head}</p>
                <img src={props.img} />
                <div className="text_area">
                    <p>{props.para1}</p>
                    <p>{props.para2}</p>
                    <span className="c_btn">Read More <i className="fa fa-long-arrow-right"></i></span>
                </div>{/*--text_area--*/}
            </NavLink>
        </>
    )
}
export default Blog_tag;
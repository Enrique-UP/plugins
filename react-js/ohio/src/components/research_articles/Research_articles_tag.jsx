import {NavLink} from "react-router-dom";
const Research_articles_tag = (props) => {
    return(
        <>
           <NavLink to={props.link} className="blogs_area" data-aos="fade-up">
                <img src={props.img} />
                <div className="text_area">
                    <p className="heads">{props.head}</p>
                    <p className="text">
                        <i className="fa fa-calendar"></i>
                        <span>{props.date}</span>
                        <i className="fa fa-clock-o"></i>
                        <span>{props.time}</span>
                        <i className="fa fa-graduation-cap"></i>
                        <span>{props.course}</span>
                    </p>
                    <p className="text">
                        <i className="fa fa-user"></i>
                        <span>{props.name}</span>
                    </p>
                    <span className="c_btn">Read More <i className="fa fa-long-arrow-right"></i></span>
                </div>{/*--text_area--*/}
            </NavLink>
        </>
    )
}
export default Research_articles_tag;
const Banner_line = (props) => {
    return(
        <>
            <section className="background_banner" data-aos="flip-up">
                <div className="background_banner_middle">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <p className="sub_head">{props.pagename}</p>
                                <p className="head">{props.tagline}</p>
                            </div>{/*--cols--*/}
                        </div>{/*--row--*/}
                    </div>{/*--container--*/}
                </div>{/*--background_banner_middle--*/}
            </section>{/*--background_banner--*/}
            <ul className="border_area">
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </>
    )
}
export default Banner_line;
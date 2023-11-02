const Management_tag = (props) => {
    return(
        <>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
                <div className="management_area" data-aos="fade-up">
                    <img src={props.dp} />
                    <p>{props.name}</p>
                </div>{/*--management_area--*/}
            </div>{/*--cols--*/}
        </>
    )
}
export default Management_tag;
const Search_course = () => {
    return (
        <>
            <section className="search_course">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 offset-sm-4 col-sm-8 offset-md-5 col-md-7 offset-lg-6 col-lg-6">
                            <form className="form_area" data-aos="fade-left">
                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                        <p className="head">Search For Courses</p>
                                    </div>{/*--cols--*/}
                                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                        <input type="text" placeholder="Keywords" className="input_text" />
                                    </div>{/*--cols--*/}
                                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                        <input type="text" placeholder="Course ID" className="input_text" />
                                    </div>{/*--cols--*/}
                                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                        <select className="select_text">
                                            <option>Department</option>
                                            <option>Lorem Ipsum</option>
                                            <option>Lorem Ipsum</option>
                                        </select>
                                    </div>{/*--cols--*/}
                                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                        <select className="select_text">
                                            <option>Campus</option>
                                            <option>Lorem Ipsum</option>
                                            <option>Lorem Ipsum</option>
                                        </select>
                                    </div>{/*--cols--*/}
                                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                        <select className="select_text">
                                            <option>Level</option>
                                            <option>Lorem Ipsum</option>
                                            <option>Lorem Ipsum</option>
                                        </select>
                                    </div>{/*--cols--*/}
                                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                        <select className="select_text">
                                            <option>Instructor</option>
                                            <option>Lorem Ipsum</option>
                                            <option>Lorem Ipsum</option>
                                        </select>
                                    </div>{/*--cols--*/}
                                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                        <select className="select_text">
                                            <option>Semester</option>
                                            <option>Lorem Ipsum</option>
                                            <option>Lorem Ipsum</option>
                                        </select>
                                    </div>{/*--cols--*/}
                                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                        <select className="select_text">
                                            <option>Credit</option>
                                            <option>Lorem Ipsum</option>
                                            <option>Lorem Ipsum</option>
                                        </select>
                                    </div>{/*--cols--*/}
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                        <a className="c_btn input_submit_full">Search Course</a>
                                    </div>{/*--cols--*/}
                                </div>{/*--row--*/}
                            </form>
                        </div>{/*--cols--*/}
                    </div>{/*--row--*/}
                </div>{/*--container--*/}
            </section>
        </>
    )
}
export default Search_course;
import Accordion from 'react-bootstrap/Accordion';
import React from 'react';

const Left_sidebar2 = () => {
    return(
        <>
            <div className="accordion_new" data-aos="fade-right">
                <p className="head">Filter Courses</p>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>
                            <span className="accordion_head">Type</span>
                        </Accordion.Header>
                        <Accordion.Body>
                            <label className="container_area">
                                <input type="checkbox" />
                                <span className="checkmark">Lorem</span>
                            </label>
                            <label className="container_area">
                                <input type="checkbox" />
                                <span className="checkmark">Lorem</span>
                            </label>
                            <label className="container_area">
                                <input type="checkbox" />
                                <span className="checkmark">Lorem</span>
                            </label>
                            <label className="container_area">
                                <input type="checkbox" />
                                <span className="checkmark">Lorem</span>
                            </label>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>
                            <span className="accordion_head">College</span>
                        </Accordion.Header>
                        <Accordion.Body>
                            <label className="container_area">
                                <input type="checkbox" />
                                <span className="checkmark">Lorem</span>
                            </label>
                            <label className="container_area">
                                <input type="checkbox" />
                                <span className="checkmark">Lorem</span>
                            </label>
                            <label className="container_area">
                                <input type="checkbox" />
                                <span className="checkmark">Lorem</span>
                            </label>
                            <label className="container_area">
                                <input type="checkbox" />
                                <span className="checkmark">Lorem</span>
                            </label>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>
                            <span className="accordion_head">Qualifications</span>
                        </Accordion.Header>
                        <Accordion.Body>
                            <label className="container_area">
                                <input type="checkbox" />
                                <span className="checkmark">Lorem</span>
                            </label>
                            <label className="container_area">
                                <input type="checkbox" />
                                <span className="checkmark">Lorem</span>
                            </label>
                            <label className="container_area">
                                <input type="checkbox" />
                                <span className="checkmark">Lorem</span>
                            </label>
                            <label className="container_area">
                                <input type="checkbox" />
                                <span className="checkmark">Lorem</span>
                            </label>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>
                            <span className="accordion_head">School or Department</span>
                        </Accordion.Header>
                        <Accordion.Body>
                            <label className="container_area">
                                <input type="checkbox" />
                                <span className="checkmark">Lorem</span>
                            </label>
                            <label className="container_area">
                                <input type="checkbox" />
                                <span className="checkmark">Lorem</span>
                            </label>
                            <label className="container_area">
                                <input type="checkbox" />
                                <span className="checkmark">Lorem</span>
                            </label>
                            <label className="container_area">
                                <input type="checkbox" />
                                <span className="checkmark">Lorem</span>
                            </label>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>
                            <span className="accordion_head">Teaching Experience</span>
                        </Accordion.Header>
                        <Accordion.Body>
                            <label className="container_area">
                                <input type="checkbox" />
                                <span className="checkmark">Lorem</span>
                            </label>
                            <label className="container_area">
                            <input type="checkbox" />
                            <span className="checkmark">Lorem</span>
                            </label>
                            <label className="container_area">
                            <input type="checkbox" />
                            <span className="checkmark">Lorem</span>
                            </label>
                            <label className="container_area">
                            <input type="checkbox" />
                            <span className="checkmark">Lorem ipsum dolor sit amit lorem ipsum dolor sit amit</span>
                            </label>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>{/*--programs_accordion--*/}
        </>
    )
}

export default Left_sidebar2;
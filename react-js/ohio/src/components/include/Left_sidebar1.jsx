import { NavLink } from "react-router-dom";
import Accordion from 'react-bootstrap/Accordion';

const Left_sidebar1 = () => {
    return(
        <>
            <div className="accordion_new" data-aos="fade-right">
                <p className="head">In This Session</p>
                <Accordion>
                    <h2 className="accordion-header">
                        <NavLink to="/" className="accordion_head">Home</NavLink>
                    </h2>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>
                            <span className="accordion_head">About Us</span>
                        </Accordion.Header>
                        <Accordion.Body>
                            <NavLink to="/about" className="link">OHIO – About Us</NavLink>
                            <NavLink to="/location" className="link">OHIO - Location</NavLink>
                            <NavLink to="/mission-vision" className="link">Mission & Vision</NavLink>
                            <NavLink to="/accreditation" className="link">Accreditation</NavLink>
                            <NavLink to="/president-message" className="link">President's Message</NavLink>
                            <NavLink to="/management" className="link">Management</NavLink>
                            <NavLink to="/why-ohio" className="link">Why OHIO</NavLink>
                            <NavLink to="/payment" className="link">Online Payments</NavLink>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>
                            <span className="accordion_head">Programs</span>
                        </Accordion.Header>
                        <Accordion.Body>
                            <NavLink to="/phd" className="link">Ph.D – Doctoral Program</NavLink>
                            <NavLink to="/mba" className="link">MBA – Master in Business Administration</NavLink>
                            <NavLink to="/ex-mba" className="link">MBA – Executive</NavLink>
                            <NavLink to="/cs" className="link">Masters in Computer Science</NavLink>
                            <NavLink to="/mph" className="link">MPH - Master in Public Health</NavLink>
                            <NavLink to="/mpa" className="link">MPA - Master of Public Administration</NavLink>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>
                            <span className="accordion_head">My OHIO</span>
                        </Accordion.Header>
                        <Accordion.Body>
                            <NavLink to="/contact" className="link">Contact Us</NavLink>
                            <NavLink to="/login" className="link">Login</NavLink>
                            <NavLink to="/enrollment-verification" className="link">Enrollment Verification</NavLink>
                            <NavLink to="/student-grievances" className="link">Student Grievances</NavLink>
                            <NavLink to="/diversity-policy" className="link">Diversity Policy</NavLink>
                            <NavLink to="/credit-transfer-policy" className="link">Credit Transfer</NavLink>
                            <NavLink to="/credit-hour-policy" className="link">Credit Hour Policy</NavLink>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>
                            <span className="accordion_head">Students</span>
                        </Accordion.Header>
                        <Accordion.Body>
                            <NavLink to="/admission-process" className="link">Admission Process</NavLink>
                            <NavLink to="/exams-results" className="link">Exams & Results</NavLink>
                            <NavLink to="/research-publication" className="link">Online Research Publications</NavLink>
                            <NavLink to="/tution-fees" className="link">Tution & Fees</NavLink>
                            <NavLink to="/scholarship" className="link">Scholarship At OHIO</NavLink>
                            <NavLink to="/enrollment-verification" className="link">Enrollment Verification</NavLink>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>
                            <span className="accordion_head">OHIO Experience</span>
                        </Accordion.Header>
                        <Accordion.Body>
                            <NavLink to="/alumni-experience" className="link">Alumni Experience</NavLink>
                            <NavLink to="/jobs" className="link">Jobs after OHIO</NavLink>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>{/*--programs_accordion--*/}
        </>
    )
}

export default Left_sidebar1;
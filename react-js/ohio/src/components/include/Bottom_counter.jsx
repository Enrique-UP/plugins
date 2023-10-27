import Courses from "../../assets/images/courses-counter.png";
import Countries from "../../assets/images/countries-counter.png";
import Learners from "../../assets/images/learners-counter.png";
import Bottom_counter_number from "./Bottom_counter_number";



function Bottom_counter(){
	return(
		<>
	        <ul className="mu-single-counter flex flex-wrap justify-between md:justify-center">
                <li data-aos="fade-up">
                    <div className="counter_area">
                        <img src={Courses} />
                        <p><span className="counter-value"><Bottom_counter_number target={6} title='' duration={2} /></span></p>
                        <p className="head">Courses</p>
                    </div>{/*--counter_area--*/}
                </li>
                <li data-aos="fade-up">
                    <div className="counter_area">
                        <img src={Countries} />
                        <p><span className="counter-value"><Bottom_counter_number target={14} title='' duration={2} /></span></p>
                        <p className="head">Countries</p>
                    </div>{/*--counter_area--*/}
                </li>
                <li data-aos="fade-up">
                    <div className="counter_area">
                        <img src={Learners} />
                        <p><span className="counter-value"><Bottom_counter_number target={6912} title='' duration={2} /></span><span>+</span></p>
                        <p className="head">Learners</p>
                    </div>{/*--counter_area--*/}
                </li>
            </ul>
	</>
	)
}

export default Bottom_counter;
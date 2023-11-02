import React from "react";
import { NavLink } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';


import Sliderone from "../../assets/images/slider1.jpg";
import Slider_mob_one from "../../assets/images/slider_mob1.jpg";
import Slidertwo from "../../assets/images/slider2.jpg";
import Slider_mob_two from "../../assets/images/slider_mob2.jpg";
import Sliderthree from "../../assets/images/slider3.jpg";
import Slider_mob_three from "../../assets/images/slider_mob3.jpg";



class Slider extends React.Component {
	render() {
		return (
			<>
				<section className="main_slider">
					<Carousel>
						<Carousel.Item>
							<div className="fw">
								<div className="content_area">
									<div className="container">
										<div className="row">
											<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
												<p className="head wow fadeInLeftBig">The Best University of the state</p>
												<p className="text wow fadeIn"><span>OHIO</span> University</p>
												<NavLink to="/programs" className="c_btn wow fadeInLeftBig">More Information <i className="fa fa-long-arrow-right"></i></NavLink>
											</div>{/*--cols--*/}
										</div>{/*--row--*/}
									</div>{/*--container--*/}
								</div>{/*--content_area--*/}
								<img src={Sliderone} className="banner_img" />
								<img src={Slider_mob_one} className="banner_img_mob" />
							</div>{/*--fw--*/}
						</Carousel.Item>
						<Carousel.Item>
							<div className="fw">
								<div className="content_area">
									<div className="container">
										<div className="row">
											<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
												<p className="head wow fadeInLeftBig">The Best University of the state</p>
												<p className="text wow fadeIn"><span>OHIO</span> University</p>
												<NavLink to="/programs" className="c_btn wow fadeInLeftBig">More Information <i className="fa fa-long-arrow-right"></i></NavLink>
											</div>{/*--cols--*/}
										</div>{/*--row--*/}
									</div>{/*--container--*/}
								</div>{/*--content_area--*/}
								<img src={Slidertwo} className="banner_img" />
								<img src={Slider_mob_two} className="banner_img_mob" />
							</div>{/*--fw--*/}
						</Carousel.Item>
						<Carousel.Item>
							<div className="fw">
								<div className="content_area">
									<div className="container">
										<div className="row">
											<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
												<p className="head wow fadeInLeftBig">The Best University of the state</p>
												<p className="text wow fadeIn"><span>OHIO</span> University</p>
												<NavLink to="/programs" className="c_btn wow fadeInLeftBig">More Information <i className="fa fa-long-arrow-right"></i></NavLink>
											</div>{/*--cols--*/}
										</div>{/*--row--*/}
									</div>{/*--container--*/}
								</div>{/*--content_area--*/}
								<img src={Sliderthree} className="banner_img" />
								<img src={Slider_mob_three} className="banner_img_mob" />
							</div>{/*--fw--*/}
						</Carousel.Item>
					</Carousel>
				</section>
			</>
		)
	};
}
export default Slider;
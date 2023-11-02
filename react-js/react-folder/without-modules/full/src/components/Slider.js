import {useEffect} from "react";
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


function Slider() {
    const options = {
        items: 2,
        nav: true,
        rewind: true,
        autoplay: true,
        dots: false
    };
    return (
        <>
            <OwlCarousel className="owl-theme" loop={true} margin={0} autoplay={true} nav={true} dots={false} items={2} options={options}>
                <div><img src="./assets/images/banner1.jpg" alt="" /></div>
                <div><img src="./assets/images/banner2.jpg" alt="" /></div>
                <div><img src="./assets/images/banner3.jpg" alt="" /></div>
                <div><img src="./assets/images/banner4.jpg" alt="" /></div>
                <div><img src="./assets/images/banner5.jpg" alt="" /></div>
                <div><img src="./assets/images/banner6.jpg" alt="" /></div>
            </OwlCarousel>
        </>
    )
}
export default Slider;
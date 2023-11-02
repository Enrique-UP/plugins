import {useEffect} from "react";
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import Loader from "./Loader";
const options = {
    margin: 0,
    responsiveClass: true,
    nav: true,
    autoplay: true,
    dots: true,
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1,
        },
        576: {
            items: 2,
        },
        768: {
            items: 3,
        },
        992: {
            items:2,
        }
    },
};
class Sliderone extends React.Component {
    render() {
        return (
            <>
                <Loader />
                <OwlCarousel className="slider-items owl-carousel" {...options}>
                    <div class="item"><img src="./assets/images/banner1.jpg" /></div>
                    <div class="item"><img src="./assets/images/banner2.jpg" /></div>
                    <div class="item"><img src="./assets/images/banner3.jpg" /></div>
                    <div class="item"><img src="./assets/images/banner4.jpg" /></div>
                    <div class="item"><img src="./assets/images/banner5.jpg" /></div>
                    <div class="item"><img src="./assets/images/banner6.jpg" /></div>
                </OwlCarousel>
            </>
        )
    };
}
export default Sliderone;
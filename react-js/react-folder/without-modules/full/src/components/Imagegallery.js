import React from "react";


import img1 from "../assets/images/blog1.jpg";
import img2 from "../assets/images/blog2.jpg";
import img3 from "../assets/images/blog3.jpg";
import img4 from "../assets/images/blog4.jpg";
import img5 from "../assets/images/blog5.jpg";
import img6 from "../assets/images/blog6.jpg";
import Aos from "aos";
import {useEffect} from "react";

function Imagegallery(){
  useEffect(() => {
    Aos.init({duration:1000});
}, []);
  return (
    <>
      <section className="content">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                  <img src={img1} style={{width:"100%"}} />
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                  <img src={img2} style={{width:"100%"}} />
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                  <img src={img3} style={{width:"100%"}} />
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                  <img src={img4} style={{width:"100%"}} />
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                  <img src={img5} style={{width:"100%"}} />
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                  <img src={img6} style={{width:"100%"}} />
              </div>
            </div>
          </div>
        </section>
    </>
  );
}
export default Imagegallery;